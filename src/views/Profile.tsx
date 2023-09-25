import React, {useEffect, useState} from "react";
import {Provider, useSelector} from "react-redux";
import loginStore from "../redux/stateStores/loginStore";
import {useLoginSelector, useLoginDispatch, useAuthSelector, useAuthDispatch} from "../redux/hook";
import {toLogin, toProfile, toRegister} from "../redux/authState";

function Renderer (){

    let ctrl: string;
    ctrl = useAuthSelector(state => state.auth.text);
    const dispatcher = useAuthDispatch();
    dispatcher(toProfile());
    const [opacity, setOpacity] = useState(0);

    useEffect(()=>{
        setOpacity(1);
    }, []);


    return (

            <div style={{width:'100%', height:'100%', display:'flex', flex:1, position:'relative', transition:'0.6s ease', opacity:opacity}}>
                <div className='full-bg-img'>
                </div>
                <div className='full-bg-img-mask'>
                    <div style={{background:'rgb(240,240,240)', height:'80%', width:'80%', maxHeight:370, maxWidth:500, minWidth:300,
                        borderRadius:30, boxShadow:'2px 2px 18px 15px 0xff333333', overflow:'auto'}} className="shadow-container">
                        <div style={{padding:'20px', textAlign:'center', justifyContent:'center'}}>
                            <div style={{display:'flex'}}>
                                <button className='circle' style={{background:'transparent', width:'auto', height:'auto', margin:0}} onClick={()=>dispatcher(toLogin())}>
                                    <span className="material-symbols-outlined" style={{color:'grey'}}>
                                        login
                                    </span>
                                </button>
                                <button className='circle' style={{background:'transparent', width:'auto', height:'auto', margin:0}} onClick={()=>dispatcher(toRegister())}>
                                    <span className="material-symbols-outlined" style={{color:'#b96a6a'}}>
                                        person_add
                                    </span>
                                </button>
                            </div>

                            <form>
                                <div style={{display:'flex', alignItems:'center', marginLeft:26}}>
                                    <span style={{color:'#aaa', fontSize:19, marginRight:10}}  className="material-symbols-outlined">
                                         mail
                                    </span><p style={{color:'#aaa', fontSize:14}}>Email</p>
                                </div>
                                <input placeholder='@email' className='noner'/>
                                <br/>
                                <div style={{display:'flex', alignItems:'center', marginLeft:26}}>
                                        <span style={{color:'#aaa', fontSize:19, marginRight:10}} className="material-symbols-outlined">
                                             password
                                        </span> <p style={{color:'#aaa', fontSize:14}}>Password</p> <span><a style={{fontSize:13, color:'#aaa', marginLeft:30, textDecoration:'underline'}}>Forget Password</a></span>
                                </div>
                                <input placeholder='Ur Password' className='noner' type='password' />
                                <button className='redx shRed' style={{margin:20, width:170, paddingTop:8, paddingBottom:8}}>{ctrl}</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

    );
}
export default function Profile () {

    /*
    This bit has to do with talking to the BankEnd Docker
    auth should be a listener for authentication
    as of for now let's call it false for
    GLOBAL AUTH HERE IF AUTHED, setAuth (true)
    */
    const authed = useAuthSelector(state => state.auth.value);

    return (!authed?
           (<div className='page'>
               <Renderer/>
           </div>):(<div></div>));

}