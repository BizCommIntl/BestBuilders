'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import logo from "../../BizAppsLogo.jpg"
// import WaterMark from '@/public/SiteImages/Default/UC-7.jpg'

import { FaFolderTree } from "react-icons/fa6";
import { MdFolderOff } from "react-icons/md";
import { MdOutlineFolderOff } from "react-icons/md";


// Dashboard
import { BsSpeedometer2 } from 'react-icons/bs'

// Transactions
import { BsNewspaper } from 'react-icons/bs'

// Housekeeping
import { FaLaptopHouse } from 'react-icons/fa'

// Reports
import { HiOutlineClipboardDocumentList } from 'react-icons/hi2'

// Maintenance
import { FaCogs } from 'react-icons/fa'

// Security & Privacy
import { GiArrowsShield } from 'react-icons/gi'

import Accordion from '../Accordion';
// import GetWindowDimensions from '@/app/Lib/GetWindowDimensions';


function getCurrentWindowDimensions() {
  if (typeof window !== "undefined") {
    const { innerWidth: width, innerHeight: height } = window;
    return { width, height };
  }
  else return { width: '', height: '' };
}

const TW_COLORS_SET = [{
  "transparent": "transparent",
  "black": "#000000",
  "white": "#ffffff",
  "red": "#f44336",
  "pink": "#e91e63",
  "purple": "#9c27b0",
  "deep-purple": "#673ab7",
  "indigo": "#3f51b5",
  "blue": "#2196f3",
  "light-blue": "#03a9f4",
  "cyan": "#00bcd4",
  "teal": "#009688",
  "green": "#4caf50",
  "light-green": "#8bc34a",
  "lime": "#cddc39",
  "yellow": "#ffeb3b",
  "amber": "#ffc107",
  "orange": "#ff9800",
  "deep-orange": "#ff5722",
  "brown": "#795548",
  "grey": "#9e9e9e",
  "blue-grey": "#607d8b"
}]

// "transparent",
// "black",
// "white",
// 19 colors
const TW_COLORS = [
  "red",
  "pink",
  "purple",
  "deep-purple",
  "indigo",
  "blue",
  "light-blue",
  "cyan",
  "teal",
  "green",
  "light-green",
  "lime",
  "yellow",
  "amber",
  "orange",
  "deep-orange",
  "brown",
  "grey",
  "blue-grey",
]
const randomNumberInRange = (min, max) => {
  return Math.floor(Math.random()
    * (max - min + 1)) + min;
};

// ************************ Start Program *******************************************
export default function TopNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [CrntWindow, setCrntWindow] = useState(getCurrentWindowDimensions())

  useEffect(() => {
    function handleResize() {
      setCrntWindow(getCurrentWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  let clr = 0
  return (
    <div>
      <nav className="flex items-center justify-between text-black border-b shadow-md">
        <div className='flex'>
          <Link href='/'>
            <Image src={logo} width={0} height={25} alt="Logo" />
          </Link>
          {/* {CrntWindow.width} */}
        </div>


        <div className="text-sm flex gap-2 md:gap-4">
          <Link href="#" >Services</Link>
          <Link href="/About" >About</Link>
          <Link href="/Contact" >Contact</Link>
        </div>


        {/* <div className={`flex  ${isOpen ? "block" : "hidden"}`}      >
          <div className='group '>
            <button>Target Btn</button>
            <ul className="hidden group-hover:block bg-white absolute   p-3 text-black shadow-lg rounded">
              <li className=" px-2 h-8 flex justify-between items-center rounded-md hover:bg-black/30"> Check Check Item 1</li>
              <li className=" px-2 h-8 flex justify-between items-center rounded-md hover:bg-black/30"> Check Check Item disp;ay2</li>
              <li className=" px-2 h-8 flex justify-between items-center rounded-md hover:bg-black/30"> Check Check Item 3</li>

            </ul>
          </div>
        </div> */}


        <div className='flex gap-3 items-center '>
          {/* AVATAR for User*/}
          <div className='md:px-3 z-50  flex  h-[30px] ] overflow-visible  md:bg-slate-400 md:rounded-3xl'>
            <div className='leading-none hidden md:block'><span className='block font-bold ' >Mufakhar</span> <span className='text-xs text-slate-600'>The Developer</span>
            </div>

          <div className='px-[4px] py-[4px] mt-[-4px] rounded-full md:w-[58px] md:h-[58px]  bg-slate-400'>
            {/* <Image src="/users/20150809_151649-short.jpg" alt="User"  className='rounded-full w-[25px] h-[25px] md:w-[50px] md:h-[50]' /> */}
            <img src={"/users/User2015-11-19.jpg"} alt="User" className='rounded-full md:w-[50px] md:h-[50px]' />
            {/* <img src="/users/2012-01-05 03.08.56short.jpg" alt="User" className='rounded-full md:w-[50px] md:h-[50px]' /> */}
            </div>
          </div>

          <button className=" pt-1 font-bold   text-black" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <MdOutlineFolderOff className="w-[28px] h-[28px] text-red-700" /> : <FaFolderTree className="w-[28px] h-[28px] text-blue-700" />}
          </button>
        </div>
      </nav>

      {!isOpen
        ? null
        :
        // {/* **************************** */}
        //      [ NAV MAGA MENU]
        // {/* **************************** */}
        <div style={{ '--image-urlBase': `url(${'/SiteImages/Default/UC-3.png'})`, '--image-urlHover': `url(${'/SiteImages/Default/UC-4.png'})` }}
          className={
            "mt-1 w-full md:w-[75%] mx-auto grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-2 "
            + " bg-[image:var(--image-urlBase)] bg-no-repeat bg-center "
            + " hover:bg-[image:var(--image-urlHover)]  focus:bg-[image:var(--image-urlHover)] hover:bg-top hover:z-50 hover:bg-contain "
          }
        // + " hover:bg-[image: `url(${'/SiteImages/Default/UC-5.png'})`] " } 
        >

          {/*========= Col1 ====================== */}
          <div className=' flex flex-col gap-2' >

            {/* Start: -----------Card for Secutity/Administration  ----------------------  */}
            <div className=' flex flex-col gap-1 border-2 border-gray-400 shadow-lg rounded-md bg-white/50'>

              {/* Card Header */}
              <div className='py-1 px-4 w-full text-2xl bg-slate-700/10 flex items-center gap-3'>
                <span className="  "><BsNewspaper /></span> <span className=' text-blue-700'>Hot links</span>
              </div>

              {/* Card Body */}
              <div className='p-2 bg-slate-100/10'>
                <div className='p-2 bg-slate-100/10 shadow-lg rounded-lg border border-gray-300 flex flex-col gap-1 '>

                  <div className='px-2 flex flex-col ' onClick={() => setIsOpen(!isOpen)}>
                    <div className='my-1 flex gap-3 items-center border-b'><BsNewspaper /><Link href={'/Pages/About'}>Business Dashboad</Link></div>

                    {/* Divider Line */}
                    <div className="mx-auto w-[90%] border-t border-amber-400" ></div>

                    <div className='my-1 flex gap-3 items-center border-b'><BsNewspaper /><Link href={'/Pages/About'}>Sales Invoices </Link></div>
                    <div className='my-1 flex gap-3 items-center border-b'><BsNewspaper /><Link href={'/Pages/Items'}>Pruchase Entries</Link></div>

                    {/* Divider Line */}
                    <div className="mx-auto w-[90%] border-t border-blue-400" ></div>

                    <div className='my-1 flex gap-3 items-center border-b'><BsNewspaper /><Link href={'/Pages/About'}>Customer Profiles</Link></div>

                  </div>
                </div>

              </div>
            </div>
            {/* End: -----------Card ----------------------  */}

            {/* Start: -----------Card for Transaction  ----------------------  */}
            {/* Card for Transaction  */}
            <div className=' flex flex-col gap-1 border-2 border-gray-400 shadow-lg rounded-md bg-white/50'>

              {/* Card Header */}
              <div className='py-1 px-4 w-full text-2xl bg-slate-700/10 flex items-center gap-3'>
                <span className="  "><BsNewspaper /></span> <span className=' text-blue-700'>Transactions</span>
              </div>

              {/* Card Body */}
              <div className='p-2 bg-slate-100/10'>
                <div className='p-2 bg-slate-100/10 shadow-lg rounded-lg border border-gray-300 flex flex-col gap-1 '>
                  <Accordion title={'Transaction1 Entries'}
                    ExtraCSS4Div='border-indigo-300 rounded' ExtraCSS4Title='text-black bg-gradient-to-l from-indigo-300' ExtraCSS4Content=''
                    content={''}
                    title_icon={<BsNewspaper />}

                  > <div className='flex flex-col' onClick={() => setIsOpen(!isOpen)}>
                      <Link href={'/Pages/About'}>About Us0</Link>
                      <Link href={'/Pages/About'}>About Us1</Link>
                      <Link href={'/Pages/About'}>About Us2</Link>
                      <Link href={'/Pages/About'}>About Us3</Link>
                      <Link href={'/Pages/About'}>About Us4</Link>
                    </div>
                  </Accordion>


                  <Accordion title={'Transaction2 Entries'}
                    ExtraCSS4Div='border-pink-300 rounded' ExtraCSS4Title='text-black bg-gradient-to-l from-pink-300' ExtraCSS4Content=''
                    content={'adfskjkl'}

                  > <div>content here</div>
                  </Accordion>

                  <Accordion title={'Transaction2 Entries'}
                    ExtraCSS4Div='border-lime-300 rounded' ExtraCSS4Title='text-black bg-gradient-to-l from-lime-300' ExtraCSS4Content=''
                    content={'adfskjkl'}

                  > <div>content here</div>
                  </Accordion>

                  <Accordion title={'Transaction2 Entries'}
                    ExtraCSS4Div='border-cyan-300 rounded' ExtraCSS4Title='text-black bg-gradient-to-l from-cyan-300' ExtraCSS4Content=''
                    content={'adfskjkl'}

                  > <div>content here</div>
                  </Accordion>

                  <Accordion title={'Transaction2 Entries'}
                    ExtraCSS4Div='border-amber-300 rounded' ExtraCSS4Title='text-black bg-gradient-to-l from-amber-300' ExtraCSS4Content=''
                    content={'adfskjkl'}

                  > <div>content here</div>
                  </Accordion>


                </div>
              </div>
            </div>
            {/* End: -----------Card ----------------------  */}

          </div>
          {/*========= End Col1 ====================== */}

          {/*========= Col2 ====================== */}
          <div className=' flex flex-col gap-2' >

            {/* Start: -----------Card for Reports  ----------------------  */}
            <div className=' flex flex-col gap-1 border-2 border-gray-400 shadow-lg rounded-md bg-white/50'>

              {/* Card Header */}
              <div className='py-1 px-4 w-full text-2xl bg-slate-700/10 flex items-center gap-3'>
                <span className="  "><BsNewspaper /></span> <span className=' text-blue-700'>Reports</span>
              </div>

              {/* Card Body */}
              <div className='p-2 bg-slate-100/10'>
                <div className='p-2 bg-slate-100/10 shadow-lg rounded-lg border border-gray-300 flex flex-col gap-1 '>

                  <Accordion title={'Group 1 of Reports'}
                    ExtraCSS4Div='border-purple-300 rounded' ExtraCSS4Title='text-black bg-gradient-to-l from-purple-300' ExtraCSS4Content=''
                    content={''}

                  > <div className='flex flex-col' onClick={() => setIsOpen(!isOpen)}>
                      <Link href={'/Pages/About'}>About Us0</Link>
                      <Link href={'/Pages/About'}>About Us1</Link>
                      <Link href={'/Pages/About'}>About Us2</Link>
                      <Link href={'/Pages/About'}>About Us3</Link>
                      <Link href={'/Pages/About'}>About Us4</Link>
                    </div>
                  </Accordion>


                  <Accordion title={'Group 2 of Reports'}
                    ExtraCSS4Div='border-yellow-300 rounded' ExtraCSS4Title='text-black bg-gradient-to-l from-yellow-300' ExtraCSS4Content=''
                    content={'adfskjkl'}

                  > <div>content here</div>
                  </Accordion>

                  <Accordion title={'Group 3 of Reports'}
                    ExtraCSS4Div='border-blue-300 rounded' ExtraCSS4Title='text-black bg-gradient-to-l from-blue-300' ExtraCSS4Content=''
                    content={'adfskjkl'}

                  > <div>content here</div>
                  </Accordion>

                  <Accordion title={'Group 4 of Reports'}
                    ExtraCSS4Div='border-orange-300 rounded' ExtraCSS4Title='text-black bg-gradient-to-l from-orange-300' ExtraCSS4Content=''
                    content={'adfskjkl'}

                  > <div>content here</div>
                  </Accordion>

                  <Accordion title={'Group 5 of Reports'}
                    ExtraCSS4Div='border--green-300 rounded' ExtraCSS4Title='text-black bg-gradient-to-l from-green-300' ExtraCSS4Content=''
                    content={'adfskjkl'}

                  > <div>content here</div>
                  </Accordion>


                  <Accordion title={'Group 6 of Reports'} content={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur maxime, obcaecati exercitationem asperiores debitis voluptatum fuga? Doloribus, doloremque suscipit dignissimos ipsum reprehenderit ea, alias quae maxime fugiat ratione architecto inventore.'} />
                  <Accordion title={'Group 7 of Reports'} content={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur maxime, obcaecati exercitationem asperiores debitis voluptatum fuga? Doloribus, doloremque suscipit dignissimos ipsum reprehenderit ea, alias quae maxime fugiat ratione architecto inventore.'} />
                  <Accordion title={'Group 8 of Reports'} content={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur maxime, obcaecati exercitationem asperiores debitis voluptatum fuga? Doloribus, doloremque suscipit dignissimos ipsum reprehenderit ea, alias quae maxime fugiat ratione architecto inventore.'} />
                </div>
              </div>
            </div>
          </div>
          {/*========= End Col2 ====================== */}

          {/*========= Col3 ====================== */}
          <div className=' flex flex-col gap-2' >

            {/* Start: -----------  Card for Maintenance  ----------------------  */}
            {/* */}
            <div className=' flex flex-col gap-1 border-2 border-gray-400 shadow-lg rounded-md bg-white/50'>

              {/* Card Header */}
              <div className='py-1 px-4 w-full text-2xl bg-slate-700/10 flex items-center gap-3'>
                <span className="  "><BsNewspaper /></span> <span className=' text-blue-700'>Maintenance</span>
              </div>

              {/* Card Body */}
              <div className='p-2 bg-slate-100/10'>
                <div className='p-2 bg-slate-100/10 shadow-lg rounded-lg border border-gray-300 flex flex-col gap-1 '>
                  <Accordion title={'Maintenance Entries Group 1'}
                    ExtraCSS4Div='border-indigo-300 rounded' ExtraCSS4Title='text-black bg-gradient-to-l from-indigo-300' ExtraCSS4Content=''
                    content={''}

                  > <div className='flex flex-col' onClick={() => setIsOpen(!isOpen)}>
                      <Link href={'/Pages/About'}>About Us0</Link>
                      <Link href={'/Pages/About'}>About Us1</Link>
                      <Link href={'/Pages/About'}>About Us2</Link>
                      <Link href={'/Pages/About'}>About Us3</Link>
                      <Link href={'/Pages/About'}>About Us4</Link>
                    </div>
                  </Accordion>


                  <Accordion title={'Maintenance Entries Group 1'}
                    ExtraCSS4Div='border-red-300 rounded' ExtraCSS4Title='text-black bg-gradient-to-l from-red-300' ExtraCSS4Content=''
                    content={'adfskjkl'}

                  > <div>content here</div>
                  </Accordion>

                  <Accordion title={'Maintenance Entries Group 1'}
                    ExtraCSS4Div='border-blue-300 rounded' ExtraCSS4Title='text-black bg-gradient-to-l from-blue-300' ExtraCSS4Content=''
                    content={'adfskjkl'}

                  > <div>content here</div>
                  </Accordion>

                </div>
              </div>
            </div>
            {/* End: -----------Card ----------------------  */}

            {/* Start: -----------Card for  House Keeping  ----------------------  */}
            <div className=' flex flex-col gap-1 border-2 border-gray-400 shadow-lg rounded-md bg-white/50'>

              {/* Card Header */}
              <div className='py-1 px-4 w-full text-2xl bg-slate-700/10 flex items-center gap-3'>
                <span className="  "><BsNewspaper /></span> <span className=' text-blue-700'>House Keeping</span>
              </div>

              {/* Card Body */}
              <div className='p-2 bg-slate-100/10'>
                <div className='p-2 bg-slate-100/10 shadow-lg rounded-lg border border-gray-300 flex flex-col gap-1 '>
                  <Accordion title={'Transaction1 Entries'}
                    ExtraCSS4Div='border-indigo-300 rounded' ExtraCSS4Title='text-black bg-gradient-to-l from-indigo-300' ExtraCSS4Content=''
                    content={''}

                  > <div className='flex flex-col' onClick={() => setIsOpen(!isOpen)}>
                      <Link href={'/Pages/About'}>About Us0</Link>
                      <Link href={'/Pages/About'}>About Us1</Link>
                      <Link href={'/Pages/About'}>About Us2</Link>
                      <Link href={'/Pages/About'}>About Us3</Link>
                      <Link href={'/Pages/About'}>About Us4</Link>
                    </div>
                  </Accordion>


                  <Accordion title={'Transaction2 Entries'}
                    ExtraCSS4Div='border-yellow-300 rounded' ExtraCSS4Title='text-black bg-gradient-to-l from-yellow-300' ExtraCSS4Content=''
                    content={'adfskjkl'}

                  > <div>content here</div>
                  </Accordion>

                  <Accordion title={'Transaction2 Entries'}
                    ExtraCSS4Div='border-green-300 rounded' ExtraCSS4Title='text-black bg-gradient-to-l from-green-300' ExtraCSS4Content=''
                    content={'adfskjkl'}

                  > <div>content here</div>
                  </Accordion>
                </div>
              </div>
            </div>

            {/* Start: -----------Card for Secutity/Administration  ----------------------  */}
            <div className=' flex flex-col gap-1 border-2 border-gray-400 shadow-lg rounded-md bg-white/50'>

              {/* Card Header */}
              <div className='py-1 px-4 w-full text-2xl bg-slate-700/10 flex items-center gap-3'>
                <span className="  "><BsNewspaper /></span> <span className=' text-blue-700'>Scrurity & Privacy</span>
              </div>

              {/* Card Body */}
              <div className='p-2 bg-slate-100/10'>
                <div className='p-2 bg-slate-100/10 shadow-lg rounded-lg border border-gray-300 flex flex-col gap-1 '>
                  <Accordion title={'Transaction1 Entries'}
                    ExtraCSS4Div='border-teal-300 rounded' ExtraCSS4Title='text-black bg-gradient-to-l from-teal-300' ExtraCSS4Content=''
                    content={''}

                  > <div className='flex flex-col' onClick={() => setIsOpen(!isOpen)}>
                      <Link href={'/Pages/About'}>About Us0</Link>
                      <Link href={'/Pages/About'}>About Us1</Link>
                      <Link href={'/Pages/About'}>About Us2</Link>
                      <Link href={'/Pages/About'}>About Us3</Link>
                      <Link href={'/Pages/About'}>About Us4</Link>
                    </div>
                  </Accordion>


                </div>
              </div>
            </div>
            {/* End: -----------Card ----------------------  */}

            {/*========= End Col3 ====================== */}
          </div>

        </div>

        // {/* **************************** */}
        //    END ---  [ NAV MAGA MENU]
        // {/* **************************** */}
      }

    </div >
  );
}


