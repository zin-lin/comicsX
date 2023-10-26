import React, {PropsWithChildren, useEffect, useState} from "react";
import {Provider, useSelector} from "react-redux";
import loginStore from "../redux/stateStores/loginStore";
import {useLoginSelector, useLoginDispatch, useAuthSelector, useAuthDispatch} from "../redux/hook";
import {toLogin, toProfile, toRegister} from "../redux/authState";
import axios from "axios";
import {type} from "os";
import {useNavigate, useParams} from "react-router-dom";

interface Props {
    id:string;
}

const BookView: React.FC= ()=>{
    let {id} = useParams();
    let [opacity, setOpacity] = useState(0);
    useEffect(()=>{
        setOpacity(1)
    },[])

    return (
        <div className='page' style={{ transition:'0.6s ease', opacity:opacity}}>
            <div>
            </div>
        </div>);

}

export default BookView
