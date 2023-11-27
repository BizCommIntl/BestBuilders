"use client"

import React, { useState } from 'react'
import MyComponent from '@/app/Pages/MyComponent'
import MyInput from '@/app/components/MyInput/MyInput'
import Image from 'next/image'

const REC = { ID: '', Title: '', Desc: '', Rem: '', Paking: '', Unit: '', PPrice: 0, SPrice: 0, ImageURL: '', ImageFile: null }

export default function Items() {
  const [Rec, setRec] = useState({ REC })

  const HandleInputs = (e) => {
    // console.log('********************Rec: ', Rec)
    // alert('Received for : '+e.target.name+ ' value: '+e.target.value)
    setRec({ ...Rec, [e.target.name]: e.target.value })
  }

  const HandleBtnDelImg = () => {
    // setSelectedImgInURL('')
    // setSelectedImgFile(null)
    setRec({ ...Rec, ImageURL: '', ImageFile: null })
  }

  const HandleOnChangeFileBrowser = async (e) => {

    // alert('setting file in Page')
    // const FilesList = e.target.files
    const Files = [...e.target.files]
    const data = new FormData()

    for (const file of Files) {
      data.append('file', file)
    }

    // setSelectedImgInURL(URL.createObjectURL(Files[0]))
    // setSelectedImgFile(Files[0])
    setRec({ ...Rec, ImageURL: URL.createObjectURL(Files[0]), ImageFile: Files[0] })

  }



  return (
    <>
      <div className="w-full md:w-1/2 mx-auto mt-1 md:mt-10 flex flex-col justify-center border rounded shadow-lg  ">
        <div className='text-3xl mx-auto my-2'>Items</div>

        <div className="w-md  border rounded shadow-lg grid grid-cols-1 md:grid-cols-2 ">

          {/* Left Panel */}
          <div className='mt-8 flex flex-col items-center'>

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

            {/* Input Code/ID  */}
            <div className='mt-7'>
              <MyInput Label='Paking' Name='Paking' Val={Rec.Paking} setVal={HandleInputs}
                ShiftUpHeight={6}
                CSS4Input='h-[26] px-2 text-black border-2 border-purple-400 rounded-lg border-opacity-0 shadow-md outline-none focus:border-amber-500 focus:bg-amber-300 '
                CSS4Label='px-1 absolute left-2 -top-[2px] text-opacity-80 '
              // CSS4Input='h-6 px-2 text-black text-end border-b-2  border-purple-400 bg-inherit shadow-md outline-none focus:border-amber-500 focus:bg-amber-300/50'
              // CSS4Label='px-1 absolute left-2 -top-[0px] text-opacity-80 '

              />
            </div>

            {/* Input Code/ID  */}
            <div className='mt-7'>
              <MyInput Label='Unit' Name='Unit' Val={Rec.Unit} setVal={HandleInputs}
                ShiftUpHeight={4}
                // CSS4Input='h-[36] px-2 text-black border-2 border-purple-400 rounded-lg border-opacity-0 shadow-md outline-none focus:border-amber-500 focus:bg-amber-300 '
                // CSS4Label='px-1 absolute left-2 -top-[2px] text-opacity-80 '
                CSS4Input='h-[4 6px] px-2 text-black text-end border-2 rounded-md border-purple-400  shadow-md outline-none focus:border-amber-500 focus:bg-amber-300/50'
                CSS4Label='px-4 absolute left-2 -top-[0px] text-opacity-80 '

              />
            </div>

          </div>

          {/* Right Panel */}
          {/* Right Panel: ****************** Image Section */}
          <div className='px-4 border  '>

            <label className='cursor-pointer'>
              <span>Select Image</span>
              <input type="file" className="hidden" onChange={(e) => HandleOnChangeFileBrowser(e)} />
            </label>

            <div className='mt-4 border relative'>

              {!Rec.ImageURL ? '' :
                <button className='absolute -top-3 -right-3  p-1 bg-red-400 rounded-md'
                  onClick={() => HandleBtnDelImg()}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                  </svg>
                </button>
              }

              {/* <img src={window.location.origin + '/yourPathHere.jpg'} /> */}
              <Image src={Rec.ImageURL ? Rec.ImageURL : '/SiteImages/NoImage.jpg'}
                alt='img'
                height={0} width={0}
                //width="100%" height="100%" 
                layout="responsive"     //'fill'
                objectFit='cover'       //'contain'          
              />
            </div>


            <br />
            <br />
            Entered ID is: {Rec.ID}

          </div>


        </div>
      </div>



      {/* <MyComponent /> */}


    </>
  )
}
