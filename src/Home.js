import React, {useState,useEffect} from 'react'
import { Link,useNavigate  } from 'react-router-dom';
import DevAnimation from './components/DevAnimation';
import imgme from './image.png'
import imgsvg from './smilesvg.svg'

function Home() {
  let count=0;
  const navigate = useNavigate();
  // useEffect(() => {
  //   const handleWheel = () => {
  //     // let obj=document.querySelector('.homecontainer');
  //     // if(obj){
  //     //   obj.style.transform = 'scale(' + 1.1 + ')';
  //     // }
  //     count++;
  //     if(count>50){
  //       count=0;
  //       navigate('/portfolio')
  //     }
      
  //     // console.log("woohooo");
  //     console.log(count)
  //     // alert("okay")
  //   };
  
  //   // Add event listener for wheel scroll when the component mounts
  //   // document.querySelector('.scrollindicator').addEventListener('wheel', handleWheel);
  //   //or
  //   window.addEventListener('wheel', handleWheel);
  
  //   // Cleanup function to remove event listener when the component unmounts
  //   return () => {
  //     window.removeEventListener('wheel', handleWheel);
  //   };
  // }, []);
  
  

  const [dname, setdname]=useState('hero');
  function namervl(){
    let name="";
    let nstr="PRANJAL"
    let str="!@#$%^&*()_+{}><?/.,:`~|][=-"
    let hero="";
    let intid;
    let intid2;

    function random(n){
        clearInterval(intid);
        intid= setInterval(() => {
            let dstr="";
            for(let i=0; i<n; i++){
            let r=Math.floor(Math.random() * 28);
            dstr=str[r];
            }
            name=hero+dstr;
            setdname(name)
            
            // document.querySelector('.loading').innerHTML=name;
        }, 80);

    }
    let q=0;
    intid2=setInterval(() => {

        if(q<7){
            hero+=nstr[q];
            q++;
            name=hero;
            random(7-q-1);
        }
        else{
            clearInterval(intid);
            clearInterval(intid2);
        }
    }, 250);
  }
  useEffect(() => {
    namervl();
  }, []);


  const [colr, setcolr]=useState('rgb(250, 106, 10)');
  useEffect(()=>{
    if(dname!=='PRANJAL'){
      let x=Math.floor(Math.random() * 255);
      let y=Math.floor(Math.random() * 255);
      // let z=Math.floor(Math.random() * 255);
      let z=0;
      // let cx=`#${x+1}A6${x}A0`;
      let cx=`rgb(${x},${y},${z})`
      setcolr(cx);
      // console.log(cx)
    }
    else{
      setcolr('#FA6A0A')
    }
  },[dname]);

  const handlecol=(i)=>{
    const clr=['rgb(255,0,0)','rgb(0,255,0)','rgb(0,0,255)'];
    if(i===0 || i===12 ||i===6){
      return 'white';
    }
    else{
      return clr[(i-1)%3];
    } 
  }

  let strhw="<hello world, ";
  return (
    <div className='homecontainer'>
        <div style={{marginLeft: '5%'}}>
          <img src={imgsvg}></img>
        </div>
        <div className='introcontainer'>
          <div className='helloworld'>
            {Array.from(strhw).map((w,ind)=>{
              return <span key={ind} style={{color: `${handlecol(ind)}`}}>{w}</span>
            })}
            {/* <span>&lt;</span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span> */}
          </div>
          <div className='impj'><span className='im'>i'm</span><span className='pj'>{dname}/&gt;</span></div>
          <div className='fdev'><DevAnimation/></div>
          
        </div>
      <Link to='/portfolio' >
        {/* <div className='scrollindicator'><div className="wheel"></div></div> */}
        <div className='arrdwn'>
          <div className='arrline1'></div>
          <div className='arrline2'></div>
        </div>
      </Link>
    </div>
  )
}

export default Home
