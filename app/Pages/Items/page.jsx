"use client"

import React, { useState } from 'react'
import MyComponent from '@/app/Pages/MyComponent'
import MyInput from '@/app/components/MyInput/MyInput'

const REC = { ID: '', Title: '', Desc: '', Rem: '', Paking: '', Unit: '', PPrice: 0, SPrice: 0 }

export default function Items() {
  const [Rec, setRec] = useState({ REC })

  const HandleInputs = (e) => {
    // console.log('********************Rec: ', Rec)
    // alert('Received for : '+e.target.name+ ' value: '+e.target.value)
    setRec({ ...Rec, [e.target.name]: e.target.value })
  }

  return (
    <>
      <div className="w-full md:w-1/2 mx-auto mt-1 md:mt-10 flex flex-col justify-center border rounded shadow-lg  ">
<div className='text-3xl mx-auto my-2'>Items</div>

        <div className="w-md  border rounded shadow-lg grid grid-cols-1 md:grid-cols-2 ">

          {/* Right Panel */}
          <div className='mt-2 flex flex-col items-center'>

            {/* Input Code/ID  */}
            <div>
              <MyInput Label='Item Code' Name='ID' Val={Rec.ID} setVal={HandleInputs}
                ShiftUpHeight={6}
                // CSS4Input='h-[26] px-2 text-black border-2 border-purple-400 rounded-lg border-opacity-0 shadow-md outline-none focus:border-amber-500 focus:bg-amber-300 '
                // CSS4Label='px-1 absolute left-2 -top-[2px] text-opacity-80 '
                CSS4Input='h-6 px-2 text-black border-b-2  border-purple-400 bg-inherit shadow-md outline-none focus:border-amber-500 focus:bg-amber-300/50'
                CSS4Label='px-1 absolute left-2 -top-[0px] text-opacity-80 '
              />
            </div>

            {/* Input Title  */}
            <div className='mt-7'>
              <MyInput Label='Item Title' Name='Title' Val={Rec.Title} setVal={HandleInputs}
                ShiftUpHeight={6}
                CSS4Input='h-6 px-2 text-black text-end border-b-2  border-purple-400 bg-inherit shadow-md outline-none focus:border-amber-500 focus:bg-amber-300/50'
                CSS4Label='px-1 absolute left-2 -top-[0px] text-opacity-80 '
              />
            </div>

            {/* Input Descriptions  */}
            <div className='mt-7'>
              <MyInput Label='Description' Name='Desc' Val={Rec.Desc} setVal={HandleInputs}
                ShiftUpHeight={6}
                CSS4Input='h-6 px-2 text-black text-end border-b-2  border-purple-400 bg-inherit shadow-md outline-none focus:border-amber-500 focus:bg-amber-300/50'
                CSS4Label='px-1 absolute left-2 -top-[0px] text-opacity-80 '
              />
            </div>

            {/* Input Code/ID  */}
            <div className='mt-7'>
              <MyInput Label='Remarks' Name='Rem' Val={Rec.Rem} setVal={HandleInputs}
                ShiftUpHeight={6}
                CSS4Input='h-6 px-2 text-black text-end border-b-2  border-purple-400 bg-inherit shadow-md outline-none focus:border-amber-500 focus:bg-amber-300/50'
                CSS4Label='px-1 absolute left-2 -top-[0px] text-opacity-80 '
                
              />
            </div>

          </div>

          {/* left Panel */}
          <div>ID Entered: {Rec.ID} </div>
        </div>
      </div>



      {/* <MyComponent /> */}


    </>
  )
}
