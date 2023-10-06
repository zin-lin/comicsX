import React from "react";
import {useState, useEffect} from "react";
import logo from "../assets/logo.png";
import {useDispatch} from "react-redux";
import {useAuthDispatch} from "../redux/hook";
import {resetAllVs} from "../redux/authState";

export default function Search() {

    const [opacity, setOpacity] =useState(0);
    const dispatch = useAuthDispatch();
    dispatch(resetAllVs());

    useEffect(()=>{
        setOpacity(1);
    })

    return (
        <div className='page'>

            <div style={{width:'100%', height:'100%', display:'flex', flex:1, position:'relative', justifyContent:'center'}}>
                <div className='full-bg-img' style={{maxWidth:'100%'}}>
                </div>

                <div style={{position:'absolute', marginTop:30}}>
                    <p className='enucs' >{'['}com<span className='red'>icsX</span>{']'}</p>
                </div>
                <div className='full-bg-img-mask'>

                        <form style={{width:'100%', height:50, display:'flex', position:'relative',
                            background:'#eee', borderRadius:25, margin:30, transition:'all 0.8s ease', opacity: opacity, alignItems:'center', maxWidth:'900px'
                        }} className="shadow-container" onSubmit={()=> {alert("")}}>

                                <input style={{border:'none', transition:'0.4s ease', marginLeft:10}} placeholder='Search Anything...'/>
                                <button  style={{background:'transparent', right:0, position:'absolute', margin:5, zIndex:4}} >
                                    <span className="material-symbols-outlined" style={{color:'#aaa'}}>search</span>
                                </button>

                        </form>

                </div>
            </div>

        </div>
    );

}