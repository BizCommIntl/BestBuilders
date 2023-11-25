import React, { useEffect, useState } from 'react'
import axios from "axios"

import { FaSave, FaUserPlus, FaUserEdit, FaUsers, FaUserCog, FaUsersSlash } from 'react-icons/fa'
import { TbWiperWash } from 'react-icons/tb'
import Accordion from './Components/Accordion/Accordion'
import { Data } from '../../../AdminData/API-Staff'
import AccordianCard from './Components/Accordion/AccordianCard'

//Sear Icons
import IconSearch from '../../../ImagesAdminPanel/default/IconSearch.png'
import { TbListSearch } from 'react-icons/tb'

// **************************************************************************************
//                                  B R O W S E
// **************************************************************************************
export default function Browse() {
  //Record for Manage PRG
  const [Rec4B, setRec4B] = useState([]);

  //Search items
  const [Txt2Search4B, setTxt2Search4B] = useState('')
  const [BtnTxt2Search4B, setBtnTxt2Search4B] = useState('')

  let txt2Search4B = ''

  useEffect(() => {
    // axios
    // .get ('http://192.168.1.9/api/staff')
    // .then(res =>{
    //   const data = res.json();
    //   setRec4B(data)
    //   HandleCheckRec()      

    // })
    // .catch(err=>{
    //   window.alert('ERROR IN RECEIVING DATA')
    // })

    (Txt2Search4B) ? DataFetchSearch4B() : DataFetchAll4B()


  }, [BtnTxt2Search4B])

  const DispRecInAlert = (DataSet) => {
    let str = ''; let idx=1; 
    Object.entries(DataSet).forEach(([k, v]) => { str += idx++ + '  '+ k + ' : ' + v.toString() + '\n' })
    window.alert(str)              
  }

  // ==============================================================

  // ==================[  Fn: GET ALL RECORDS  ]=====================
  const DataFetchAll4B = async (e) => {
    // e.preventDefault();
    //  window.alert((Txt2Search4B)?`/api/staff/${Txt2Search4B}`:'/api/staff')
    // const res = await fetch((Txt2Search4B)?`/api/staff/${Txt2Search4B}`:'/api/staff');
    const res = await fetch('/api/staff');
    const data = await res.json();

    // window.alert(data);  console.log('Received Records Returned:', data);
    let str = ''; Object.entries(data).forEach((k, i) => { str += i + ' ' + k + ' : ' + data[k] + '\n' })

    setRec4B(data)
  }
  
  // ==================[  Fn: GET SEARCHED RECORDS  ]=====================
  const DataFetchSearch4B = async (e) => {
    // e.preventDefault();
    window.alert('Entered in Search Posting Window')

    //Alert Display All Records
    // HandleCheckRec()       

    //destructure 
    // const { SNo, ID, DteEntry, Gender, Name, NameU, FName, FNameU, DteBirth, NIC, VehNo, VehDesc, Address, Phone, Ref, RefDesc, DteJoin, JobStatus, Category, Department, Designation, JobDuty, Experience, Pic, DteLeave, RemLeave, EntryBy, EntryDte } =  Rec4M

    // DteEntry=Date.now()
    // EntryDte=Date.now()
    // EntryBy='xUSERx'

    // const res = await fetch('DB-User-Reg', {

    const res = await fetch('/api/staff/search', {
      method: 'POST', headers: { 'Content-Type': "application/json" },
      body: JSON.stringify(
        {
          "Txt": Txt2Search4B
        }
      )
    })
    // body:JSON.stringify({UID,  Title,  Desc,  Work,  Email,  PW})});

    const data = await res.json();
    // window.alert(data);  console.log('Received Records Returned:', data);
    let str = ''; window.alert(Object.entries(data).forEach((k, i) => { str += i + ' ' + k + ' : ' + data[k] + '\n' }))
    console.log('Searched Record Returned:', data);

    setRec4B(data)
  }
  // ==============================================================


  return (
    <>
      <div className="card">

        {/* Header for Search Input Selection  */}  {/* background-color:F3E5F5 */}
        <div className="card-header px-2 d-flex  justify-content-between align-items-center" style={{ height: 30, backgroundColor: '#E1BEE7' }}>

          {/* ............. Display ICON & TITLE  ............. */}
          <div className="d-flex  gap-2 align-items-center">
            <span className="p-0 mb-2 fs-3 text-danger" ><FaUserPlus /></span>
            <span className='fs-4'> Browsing: Staff Profiles</span>
          </div>

          {/* ............. Display BUTTONS toolbar  ............. */}
          <div className="d-flex  gap-2 align-items-center">

            {/* ............. Display BUTTON SEARCH text and Icon  ............. */}
            <div className="btn-group">
              {/* <button type="button" className="btn btn-outline-info btn-xs py-0 px-1" id="btnSearch4Add" onclick="Action4Search4Add(0);">Copy Data From: </button> */}

              <div className="input-group">    {/* ...[ Input SEARCH ]... */}
                <input type="text" value={Txt2Search4B} name="txtSearch4B" id="txtSearch4B" onChange={(e) => setTxt2Search4B(e.target.value)} className="form-control" placeholder='Search Text' style={{ width: '200px', height: '25px' }} />
                <span onClick={() => { setBtnTxt2Search4B(Txt2Search4B) }} className="input-group-text btn btn-warning" style={{ marginLeft: '-1', padding: '0px 4px', width: '30px', height: '25px' }} ><img src={IconSearch} alt="Search" width='20' height='20' /> </span>
              </div>
            </div>

          </div>

        </div>    {/* END: Header for Search Input Selection  */}
        {/* ===========================[ END: Header for Search Input Selection ]===========================================  */}

        {/* ----- Main CARD BODY start ------------------------ */}
        <div className="card-body  p-2 " style={{ background: '#F3E5F5' }}>
          <div className="card d-flex gap-2 flex-column justify-content-between align" >

            {Rec4B && Rec4B
              .sort((a, b) => (a.SNo > b.SNo) ? 1 : -1)
              .map((itm, idx) => {
                return (
                  <div className='w-100' >
                    {/* <Accordion Title={itm.ID + ' ... '+ itm.Name} Desc={itm.FName} />  */}

                    <AccordianCard Rec4Bitm={itm} />
                  </div>
                )
              })}

            {/* <Accordion Title="Title is here" Desc='Detail is here' /> */}

          </div>    {/* /.Detail-card */}
          {/* ---------------------[ END: 3rd Col Input Selection ]---------------------================  */}
        </div>{/* /.Main-card-body */}
      </div>    {/* /.Main-card */}
    </>
  )
}

