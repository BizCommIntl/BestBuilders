"use client";
import React, { useState } from "react";
// import { TEInput, TECollapse, TERipple } from "tw-elements-react";
import MyInput from "../components/MyInput/MyInput";

export default function CollapseBasicExample() {
  const [show, setShow] = useState(false);

  const [Val, setVal] = useState()
  const [Val2, setVal2] = useState()

  const toggleShow = () => setShow(!show);

  const [Dt, setDt] = useState('')
  return (
    <>

      <div>

      <div className="flex flex-col">
  input:
  <MyInput Val={Val} Fn={setVal}/>
  Current Value is :{Val}


  second input:
  <MyInput Val={Val2} Fn={setVal2}/>
  Current Value is :{Val2}  
</div>
<br />
<br />

        <div className="flex justify-center items-center bg-black">
          <label className='relative cursor-pointer'>
            <input type="text" placeholder="Input" className='h-20 w-96 px-6 text-4xl text-white bg-black border-white border-2 rounded-lg border-opacity-50 outline-none focus:border-blue-500 placeholder-gray-300 placeholder-opacity-0 transition duration-200' />
            <span className='text-4xl text-white text-opacity-80 bg-black absolute left-5 top-5 px-1 transition duration-200 input-text'>Input</span>
          </label>
        </div>



        <div>
          <input type="text" name="input" placeholder="DD-MM-YYYY"
            value={Dt}
            pattern="(?:30))|(?:(?:0\[13578\]|1\[02\])-31))-(?:0\[1-9\]|1\[0-9\]|2\[0-9\])|(?:(?!02)(?:0\[1-9\]|1\[0-2\])-(?:19|20)\[0-9\]{2}-(?:(?:0\[1-9\]|1\[0-2\])"
            title="Enter a date in this format YYYY-MM-DD"

            onChange={(e) => setDt(e.target.value)} />

        </div>

        <div>
          Date Entered is:{Dt}
        </div>
      </div>


      {/* <TEInput
        type="text"
        id="exampleFormControlInputText"
        label="Text input"
      ></TEInput> */}



      {/* <TERipple rippleColor="light">
        <a
          className="inline-block rounded bg-primary mr-2 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
          role="button"
          onClick={toggleShow}
        >
          Link
        </a>
      </TERipple>
      <TERipple rippleColor="light">
        <button
          type="button"
          className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
          onClick={toggleShow}
        >
          Button
        </button>
      </TERipple>

      <TECollapse show={show}>
        <div className="block rounded-lg bg-white p-6 shadow-lg dark:bg-neutral-700 dark:text-neutral-50">
          Some placeholder content for the collapse component. This panel is
          hidden by default but revealed when the user activates the relevant
          trigger.
        </div>
      </TECollapse> */}
    </>
  );
}