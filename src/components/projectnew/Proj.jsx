import React from 'react'
import imgproj from "../../imgland.jpg"
import './proj.css'

function Proj() {
  return (
    // <div>
    //   <div className="p-[15px] w-fit h-fit bg-red-500 hover:rounded-3xl p-6 shadow-lg transition-all duration-100 hover:shadow-xl hover:scale-[1.01] shdwbyhero"
    //  style={{backgroundColor: '#1C1C22'}}>
        <div className='projcontainer [250px] w-[400px] flex items-end relative overflow-hidden'>
            {/* <img className="absolute z-0 block object-fit top-0" src={imgproj} /> */}
            <div className="imgcvr bg-black opacity-20 w-full h-full absolute z-10 top-0" ></div>
            <div className="projdet z-20 p-[10px]">
                <div className="projtitle " style={{fontSize: '24px', display: 'flex', justifyContent: 'space-between', padding: '3px 7px'}}>title<span className="arrow" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}></span></div>
                <div className="projdesc" style={{fontSize: '16px'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus at dolorum tempore sit labore voluptatibus similique cum sapiente, officia accusantium.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus at dolorum tempore sit labore voluptatibus similique cum sapiente, officia accusantium.</div>
                <div className="projstack">html</div>
            </div>
        </div>
    // </div>
    // </div>
  )
}

export default Proj