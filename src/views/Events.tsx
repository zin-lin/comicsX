import React, {useEffect, useState} from "react";
import {Provider, useSelector} from "react-redux";
import loginStore from "../redux/stateStores/loginStore";
import {useLoginSelector, useLoginDispatch, useAuthSelector, useAuthDispatch} from "../redux/hook";
import {toEvent, toLogin, toProfile, toRegister} from "../redux/authState";
import EventPC from "./EventViewPorts/EventPC";
import EventMobile from "./EventViewPorts/EventMobile";

// Event page
export default function Events() {

    let ctrl: string;
    ctrl = useAuthSelector(state => state.auth.text);
    const dispatcher = useAuthDispatch();
    dispatcher(toEvent());
    const [opacity, setOpacity] = useState(0);

    useEffect(() => {
        setOpacity(1);
    }, []);


    return (
        <div style={{width:'100%', height:'100%', display:'flex', flex:1, position:'relative', transition:'0.6s ease', opacity:opacity}}>

            <EventPC/>
            <EventMobile/>

        </div>
    );
}