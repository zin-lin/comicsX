import React, {useRef} from "react";
import {useState, useEffect} from "react";
import {Link, useNavigate} from "react-router-dom";
import MobileHome from "../components/MobileHome";
import {toHome, toProfile, toRegister} from "../redux/authState";
import {useAuthDispatch, useAuthSelector} from "../redux/hook";

export default function Home (){

    const [opacity, setOpacity] =useState(0);
    const [text, setText]= useState("");
    const ref = useRef<string>();
    ref.current = text;

    const navigate = useNavigate();
    const dispatch = useAuthDispatch();
    dispatch(toHome());

    // adding the text adder
    let enucs: string;
    enucs = useAuthSelector(state => state.auth.enucs);

    useEffect(() => {
        setOpacity(1);
        const fullText = "ENUCS is the leading society hosting contributors from all around the world. Join us explore the world of tomorrow by clicking the button below."; // The complete text to append
        let currentIndex = 0;
        const appendText = () => {
            if (currentIndex < fullText.length) {

                let xox = ref.current + fullText[currentIndex];
                setText(xox);
                currentIndex ++;
            }
        };

        const inId = setInterval(appendText, 10); // Append text every 100 milliseconds

        return () => {
            clearInterval(inId); // Cleanup: Clear the interval when component unmounts
        };

        // Call the appendText function
        appendText();
    }, []);

    return (<div className='page'>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" ></link>
            <div className='home-1'>
                <div style={{width: '42%', background:'rgba(11, 17, 45, 0.7)', left:0, display:'flex', zIndex:15,justifyContent:'center', alignItems:"center", overflow:'auto'}} className='left-sider'>
                    <div id='console' style={{transition:'0.8s ease', opacity:opacity}}>
                        <div style={{  display:"flex", alignItems:'center', justifyContent:'center'}}>
                            <div style={{margin:'20px', display:'flex'}}>
                                <div className='circle back-red'></div>
                                <div className='circle back-pink'></div>
                                <div className='circle back-white' ></div>
                            </div>
                        </div>
                        <div style={{paddingLeft:'40px', paddingRight:'20px'}}>
                            <p className='web-console' style={{margin:'7px'}}><span style={{color:'grey'}}>{'>>'}</span> Hello <span className='red'>World</span></p>
                            <p className='web-console small'>........</p>
                            <p className='web-console small'>{'<'} This is <span className='red'>where</span> your journey <span style={{color:'grey'}}>begins</span> with ENU<span
                            className='red'
                            >CS</span>{'>'}</p>
                        </div>
                    </div>
                </div>

                <div style={{textAlign:"center",transition:'1.2s ease', opacity:opacity, zIndex:5}} className='left-sider'>
                    <div className='home-cour'>

                    </div>
                    <div className='full' style={{width:'60%', position:"absolute", minHeight:'50px', overflow:"auto", display:'flex', alignItems:'center'}} >
                        <div style={{margin:"auto", top:'auto'}}>
                            <p className='enucs' >{'{'}enu<span className='red'>cs</span>{'}'}</p>
                            <div style={{border:'3px', borderStyle:'solid', marginLeft:'22%', padding:'20px', marginRight:'22%',width:'auto',
                                borderRadius:'0px 82px 0px 0px',  transition:'0.4s ease'
                            }}>
                            <p className='text-shadow hider' style={{width:'60%', margin:"auto", transition:'0.4s ease '}}>
                                {text}
                            </p><br/>
                            </div>
                            <br/>
                            <br/>
                            <br/>
                            <button className='redx shRed' style={{width:'200px',padding:'10px'}} onClick ={
                                ()=>{ //onCLick
                                    dispatch(toProfile()); //dispatch to profile
                                    dispatch(toRegister());
                                    navigate('/profile');
                                }
                            }>Join Us Now</button>
                            <br/><br/>
                            <button className='orangex shOrange' style={{width:'200px',padding:'10px'}}
                            onClick={()=>{
                                window.location.href = ("https://napier.ac.uk/courses");
                            }}
                            >Join Napier</button>
                        </div>
                    </div>
                </div>
            </div>


            <div style={{position:'relative', zIndex:6}}>
                <MobileHome/>
            </div>
            <div style={{zIndex:9, height:'auto', background:'var(--primary)', marginTop:-2 ,position:'relative', padding:'30px'}}>
                <div style={{flex:2, display:'flex',  height:'auto', width:'auto', justifyContent:"center", flexWrap:'wrap', order:2, flexDirection:'row'}}>
                    <div style={{borderRadius:12,background:'#fff', height:'100%', padding:'20px', margin:'20px'}} className='wrap-text-white'>
                        <div style={{display:'flex'}}>
                            <div className='circle' style={{background:'grey'}}></div><div className='circle back-red'></div>
                        </div>
                        <p>"I'm sure there will continue to be exciting new products and major changes, but it looks as if the existing technology has a great deal of room to grow and prosper.
                        "</p>
                        <p><b>Jack Kilby</b></p>
                    </div>
                    <div style={{borderRadius:12,background:'#fff', height:'100%', padding:'20px', margin:'20px'}} className='wrap-text-white'>
                        <div style={{display:'flex'}}>
                            <div className='circle' style={{background:'grey'}}></div><div className='circle' style={{background:'orange'}}></div>
                        </div>
                        <p>"I think it's fair to say that personal computers have become the most empowering tool we've ever created. They're tools of creativity
                        and they can be shaped by their users."</p>
                        <p><b>Bill Gates</b></p>
                    </div>
                    <div style={{borderRadius:12,background:'#fff', height:'100%', padding:'20px', margin:'20px'}} className='wrap-text-white'>
                        <div style={{display:'flex'}}>
                            <div className='circle' style={{background:'grey'}}></div><div className='circle back-pink' ></div>
                        </div>
                        <p>"The idea behind digital computers may be explained by saying that these machines are intended to carry out any operations which
                            could be done by a human computer"</p>
                        <p><b>Alan Turing</b></p>
                    </div>
                </div>
            </div>

        </div>

    );
}
function addText(arg0: string): any {
    throw new Error("Function not implemented.");
}

