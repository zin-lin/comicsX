import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import UpdateBookPC from "./BookViewPorts/updateBookPC";

const UpdateBook: React.FC= ()=>{
    let {bid} = useParams();
    console.log(bid);
    const [opacity, setOpacity] = useState(0.0);
    useEffect(()=>{
        setOpacity(1);
    }, [])

    return (
        <div className='page' style={{backgroundColor:'var(--primary)'}}>
            <div style={{width:'100%', height:'100%', display:'flex', flex:1, position:'relative', transition:'0.6s ease', opacity:opacity, }} className='full-bg-img-book' >
                <UpdateBookPC bid={bid || ''}/>
            </div>
        </div>
    );
}

export default UpdateBook