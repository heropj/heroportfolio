import React from 'react'
import imgproj from "../../imgland.jpg"
import './proj.css'

function Proj() {
  return (
        // <div className='projcontainer [250px] w-[400px] flex items-end relative overflow-hidden'>
        //     {/* <img className="absolute z-0 block object-fit top-0" src={imgproj} /> */}
        //     <div className="imgcvr bg-black opacity-20 w-full h-full absolute z-10 top-0" ></div>
        //     <div className="projdet z-20 p-[10px]">
        //         <div className="projtitle " style={{fontSize: '24px', display: 'flex', justifyContent: 'space-between', padding: '3px 7px'}}>title<span className="arrow" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}></span></div>
        //         <div className="projdesc" style={{fontSize: '16px'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus at dolorum tempore sit labore voluptatibus similique cum sapiente, officia accusantium.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus at dolorum tempore sit labore voluptatibus similique cum sapiente, officia accusantium.</div>
        //         <div className="projstack">html</div>
        //     </div>
        // </div>
        <div className="projectScroll w-[400px] h-[300px] border border-[1px] border-red-500 p-3 flex overflow-x-scroll">
        <div className="projContainer border border-[1px] min-w-[300px] h-[250px] overflow-hiddden p-1 flex flex-col gap-[10px]">
            <h2 className="text-2xl">Project1</h2>
            {/* <div className="grow">projdesc Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur rerum a accusantium ipsam quod dolores suscipit, assumenda accusamus commodi obcaecati.</div> */}
            <div>proj stack</div>
        </div>
        <div className="projContainer border border-[1px] min-w-[300px] h-full p-1 flex flex-col gap-[10px]">
            <h2 className="text-2xl">Project1</h2>
            {/* <div className="grow">projdesc Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur rerum a accusantium ipsam quod dolores suscipit, assumenda accusamus commodi obcaecati.</div> */}
            <div>proj stack</div>
        </div>
        </div>
  )
}

export default Proj