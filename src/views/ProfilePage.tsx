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
    const [api, setAPI] = useState("")
    const [pic, setPic] = useState("")
    const uid = id

    // Save Changes
    const updateDatabase = ()=>{
        let picA = ""

        let apiA = document.getElementById("api") as HTMLInputElement| null;
        let unameA = document.getElementById("uname") as HTMLInputElement| null;
        let proA = document.getElementById("profession") as HTMLInputElement| null;
        let object = {uid: id, api:apiA?.value, profession: proA?.value, profile_pic:picA, name:unameA?.value}
        axios.post('/update-user-details', object)
            .then(response => {
                alert(response.data)
            })
            .catch(error => {

            });
    }

    useEffect(()=>{
        fetch('/get-user-details/'+ uid).then(res=> res.json()).then(
            data =>{
                let apiA = document.getElementById("api") as HTMLInputElement| null;
                let unameA = document.getElementById("uname") as HTMLInputElement| null;
                let proA = document.getElementById("profession") as HTMLInputElement| null;
                setName(data.name);
                setAPI(data.api);
                setPic(data.profile_pic);
                setPro(data.profession);
                apiA!.value = data.api;
                unameA!.value = data.name;
                proA!.value = data.profession;
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

                  <div style={{display:"flex", alignItems:'center', justifyContent:'center', width:'100%'}}>
                      <span className="material-symbols-outlined" style={{color: '#ddd'}}>key</span>
                      <input placeholder='@Your OpenAI API key ' className='noner' id="api"/>
                      <span><u style={{color:'#aaa', fontSize:13}}>?</u></span>

                  </div>

                  <br/>
                  <br/>
                  <div style={{alignItems:'center', display:'flex', justifyContent:'center'}}>
                      <button className="orangex" style={{padding:13, marginRight:20, fontSize:13}} onClick={updateDatabase} >
                          Save Changes
                      </button>
                      <button className='redx' style={{padding:13,  fontSize:13}} onClick={()=>{
                          fetch("/logout").then(res=>res.text()).then(opt => {
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