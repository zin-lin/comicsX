import React from "react";
import {Link} from "react-router-dom";
import logo from "../../assets/logo.png";
import {useAuthDispatch} from "../../redux/hook";
import {toHome, toEvent, toShop, toProfile, resetAllVs} from "../../redux/authState";

const navSty = {
    fontSize:16, margin:10
}

const napierColor = {
    color:"#FF5757"
}

export default function Nav () {
    const dispatch = useAuthDispatch();
    return (
        <nav>
            <div>
                <img className='items' src={logo} style={{fontSize:19, margin:12, marginTop:"7px", marginBottom:'auto', width:'078px'}}>
                </img>
            </div>
            <div className='hider' style={{right:10, position:'absolute', display:'flex', height:'100%', alignItems:'center'}}>
                <Link onClick={()=> dispatch(toHome())} to='/'><p style={{fontSize:16, margin:12 }}>Ho<span style={{color:"#FF5757"}}>me</span></p></Link>
                <Link onClick={()=> dispatch(toEvent())} to='/events'><p style={{fontSize:16, margin:12 }}>Eve<span style={{color:"#FF5757"}}>nts</span></p></Link>
                <Link onClick={()=> dispatch(toProfile())} to='/profile'><p style={{fontSize:16, margin:12 }}>Pro<span style={{color:"#FF5757"}}>file </span></p></Link>
                <Link onClick={()=> dispatch(resetAllVs())} to='/search'><p style={{fontSize:16, margin:12 }}><span className="material-symbols-outlined">
                search
                </span></p></Link>
                <Link onClick={()=> dispatch(toShop())} to='/'><p style={{fontSize:16, margin:12 }}><span className="material-symbols-outlined red">
                shopping_cart_checkout
                </span></p></Link>
            </div>
            <div className = "hider-reverse" style={{marginTop:'6px', right:0, position:'absolute' }}>
                <Link onClick={()=> dispatch(resetAllVs())} to='/search'><p style={{fontSize:16, margin:12 }}><span className="material-symbols-outlined">
                    search
                    </span></p>
                </Link>
            </div>
        </nav>
    );
}