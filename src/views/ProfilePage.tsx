import React, {PropsWithChildren, useEffect, useState} from "react";
import {Provider, useSelector} from "react-redux";
import loginStore from "../redux/stateStores/loginStore";
import {useLoginSelector, useLoginDispatch, useAuthSelector, useAuthDispatch} from "../redux/hook";
import {toLogin, toProfile, toRegister} from "../redux/authState";
import axios from "axios";
import {type} from "os";
import {useNavigate} from "react-router-dom";

interface Props {
    name: string;
    id:string;
}

const ProfilePage: React.FC<Props>= ({name, id})=>{

    const navigate = useNavigate();
    const [uname, setName] = useState("")
    const [profession, setPro] = useState("")
    const [api, setAPI] = useState(0)
    const [pic, setPic] = useState("")
    const uid = id

    // Save Changes
    const updateDatabase = (api:number)=>{
        let picA = ""
        let unameA = document.getElementById("uname") as HTMLInputElement| null;
        let proA = document.getElementById("profession") as HTMLInputElement| null;
        let object = {uid: id, api:api, profession: proA?.value, profile_pic:picA, name:unameA?.value}
        axios.post('/api/update-user-details', object)
            .then(response => {
                alert(response.data)
            })
            .catch(error => {

            });
    }

    useEffect(()=>{
        fetch('/api/get-user-details/'+ uid).then(res=> res.json()).then(
            data =>{
                let unameA = document.getElementById("uname") as HTMLInputElement| null;
                let proA = document.getElementById("profession") as HTMLInputElement| null;
                setName(data.name);
                if (data.api != "")
                    setAPI( data.api);
                else
                    setAPI(32)
                setPic(data.profile_pic);
                setPro(data.profession);
                try{
                unameA!.value = data.name;
                proA!.value = data.profession;}
                catch (err){console.log("Annex")}
            }
        )
    },[])

    return (
      <div style={{
          background: 'rgba(240,240,240, 0.99)',
          borderRadius: '80px 0px 60px 0px',
          boxShadow: '2px 2px 18px 15px 0xff333333',
          overflow: 'auto'
      }} className="shadow-container lengify">
          <div style={{padding: '20px', textAlign: 'center', justifyContent: 'center'}}>
              <div style={{width:'100%'}}>
                 <span className="material-symbols-outlined" style={{color: 'grey'}}>person</span>
                  <p style={{color:'#777'}}>Welcome <span className="highlight">{name}</span></p>
                  <br/>
                  <br/>

                  <div style={{display:"flex", alignItems:'center', justifyContent:'center', width:'100%'}}>
                      <span className="material-symbols-outlined" style={{color: '#ddd'}}>book</span>
                      <input placeholder="@User's name" className='noner'  id="uname"/>
                      <span><u style={{color:'#aaa', fontSize:13}}>?</u></span>

                  </div>
                  <br/>

                  <div style={{display:"flex", alignItems:'center', justifyContent:'center', width:'100%'}}>
                      <span className="material-symbols-outlined" style={{color: '#ddd'}}>wallet</span>
                      <input placeholder='@Your Profession ' className='noner'  id="profession" />
                      <span><u style={{color:'#aaa', fontSize:13}}>?</u></span>

                  </div>
                  <br/>

                  <div style={{display:"flex", alignItems:'center', justifyContent:'left', paddingLeft:27, width:'calc(100% - 27px)'}}>
                      <span className="material-symbols-outlined" style={{color: '#ddd'}}>key</span>
                      <p style={{color:'#777', marginLeft:30}}>API Key Tokens:</p>
                      <p style={{color:'#333', marginLeft:50, marginRight:100}} className='highlight'>{api.toString()===""?0:api.toString()}</p>

                  </div>

                  <br/>
                  <br/>
                  <div style={{alignItems:'center', display:'flex', justifyContent:'center'}}>
                      <button className="orangex" style={{padding:13, marginRight:20, fontSize:13}} onClick={()=>updateDatabase(api)} >
                          Save Changes
                      </button>
                      <button className='redx' style={{padding:13,  fontSize:13}} onClick={()=>{
                          fetch("/api/logout").then(res=>res.text()).then(opt => {
                              if (opt === "Sucessful Logout"){
                                  navigate('/');
                              }
                          }).catch()
                         }}>
                          Logout
                      </button>
                  </div>
                  <br/>
              </div>
          </div>
      </div>
    );
}

export default ProfilePage