import React, { useEffect, useState } from 'react'
import Moment from 'moment'
import axios from "axios"

import { FaSave, FaUserPlus, FaUserEdit, FaUsers, FaUserCog, FaUsersSlash } from 'react-icons/fa'
import { TbWiperWash } from 'react-icons/tb'
import Accordion from './Components/Accordion/Accordion'
// import { Data } from '../../../AdminData/API-Staff'
import AccordianCard from './Components/Accordion/AccordianCard'

//Sear Icons
// import IconSearch from '../../../ImagesAdminPanel/default/IconSearch.png'
import { TbListSearch } from 'react-icons/tb'

const _VCat = "1311"
const _PrgID = "1311"
const _PrgTitle = "Kitchen Items Entries"
//const { Products } = KitchenItems


// **************************************************************************************
//                                  B R O W S E
// **************************************************************************************
export default function BrowseMultiCols() {
  Moment.locale('en');

  //Record for Manage PRG
  const [RecsAll, setRecsAll] = useState([]);

  const [AccRecs, setAccRecs] = useState('');
  const [Suppliers, setSuppliers] = useState('');


  //Search items
  const [Txt2Search, setTxt2Search] = useState('')
  const [BtnTxt2Search, setBtnTxt2Search] = useState('')

  let txt2Search = ''

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    // axios
    // .get ('http://192.168.1.9/api/staff')
    // .then(res =>{
    //   const data = res.json();
    //   setRecsAll(data)
    //   HandleCheckRec()      

    // })
    // .catch(err=>{
    //   window.alert('ERROR IN RECEIVING DATA')
    // })

    (Txt2Search) ? DataFetchSearch() : DataFetchAll(signal)


    //....  ABORT  ......................................
    return () => { controller.abort() };
  }, [BtnTxt2Search])

  const DispRecInAlert = (DataSet) => {
    let str = ''; let idx = 1;
    Object.entries(DataSet).forEach(([k, v]) => { str += idx++ + '  ' + k + ' : ' + v.toString() + '\n' })
    window.alert(str)
  }

  // ==============================================================

  // ==================[  Fn: GET ALL RECORDS  ]=====================
  const DataFetchAll = async (signal) => {
    //  window.alert((Txt2Search)?`/api/staff/${Txt2Search}`:'/api/staff')
    // const res = await fetch((Txt2Search)?`/api/staff/${Txt2Search}`:'/api/staff');

    try {
      const res = await axios.get(process.env.REACT_APP_API_URL + `Item`)
      // AlertRec(res.data, 'Data Rcvd')
      setRecsAll(res.data)
      // setFilteredRec(res.data)
    }
    catch (err) { alert(err) }


  }

  // ==================[  Fn: DataFetchAccRecAndSuppliers  ]=====================
  const DataFetchAccRecAndSuppliers = async (signal) => {
    const res = await fetch('/api/AccRecs', { signal });
    const data = await res.json();

    const res2 = await fetch('/api/Suppliers', { signal });
    const data2 = await res2.json();

    //alert('setting values of Both splr and RecDefault')
    setSuppliers(data2.sort((a, b) => a.Priority > b.Priority ? 1 : -1))

    setAccRecs({
      VCat: _VCat,
      AccR: data,
      AccD: data.filter(E => E.Code === '22111'),
      AccC: data.filter(E => E.Code > '11000' && E.Code < '12000')
    })
  }

  // ==================[  Fn: GET SEARCHED RECORDS  ]=====================
  const DataFetchSearch = async (e) => {
    // e.preventDefault();
    window.alert('Entered in Search Posting Window')

    //Alert Display All Records
    // HandleCheckRec()       

    //destructure 
    // const { VNo, ID, DteEntry, Gender, Name, NameU, FName, FNameU, DteBirth, NIC, VehNo, VehDesc, Address, Phone, Ref, RefDesc, DteJoin, JobStatus, Category, Department, Designation, JobDuty, Experience, Pic, DteLeave, RemLeave, EntryBy, EntryDte } =  Rec4M

    // DteEntry=Date.now()
    // EntryDte=Date.now()
    // EntryBy='xUSERx'

    // const res = await fetch('DB-User-Reg', {

    const res = await fetch('/api/staff/search', {
      method: 'POST', headers: { 'Content-Type': "application/json" },
      body: JSON.stringify(
        {
          "Txt": Txt2Search
        }
      )
    })
    // body:JSON.stringify({UID,  Title,  Desc,  Work,  Email,  PW})});

    const data = await res.json();
    // window.alert(data);  console.log('Received Records Returned:', data);
    let str = ''; window.alert(Object.entries(data).forEach((k, i) => { str += i + ' ' + k + ' : ' + data[k] + '\n' }))
    console.log('Searched Record Returned:', data);

    setRecsAll(data)
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
            <span className='fs-4'>Browsing: Kitchen Items</span>
          </div>

          {/* ............. Display BUTTONS toolbar  ............. */}
          <div className="d-flex  gap-2 align-items-center">

            {/* ............. Display BUTTON SEARCH text and Icon  ............. */}
            <div className="btn-group">
              {/* <button type="button" className="btn btn-outline-info btn-xs py-0 px-1" id="btnSearch4Add" onclick="Action4Search4Add(0);">Copy Data From: </button> */}

              <div className="input-group">    {/* ...[ Input SEARCH ]... */}
                <input type="text" value={Txt2Search} name="txtSearch" id="txtSearch" onChange={(e) => setTxt2Search(e.target.value)} className="form-control" placeholder='Search Text' style={{ width: '200px', height: '25px' }} />
                <span onClick={() => { setBtnTxt2Search(Txt2Search) }} className="input-group-text btn btn-warning" style={{ marginLeft: '-1', padding: '0px 4px', width: '30px', height: '25px' }} ><img src={<TbListSearch />} alt="..." width='20' height='20' /> </span>
              </div>
            </div>

          </div>

        </div>    {/* END: Header for Search Input Selection  */}
        {/* ===========================[ END: Header for Search Input Selection ]===========================================  */}

        {/* ----- Main CARD BODY start ------------------------ */}
        <div className="card-body  p-2 " style={{ background: '#F3E5F5' }}>
              <div className="row d-flex flex-row gap-1  justify-content-evenly ">

                  {RecsAll && RecsAll
                    .sort((a, b) => (a.Id > b.Id) ? 1 : -1)
                    .map((itm, idx) => {
                      return (
                        <div style={{width:'49%'}}>
                          {/* <Accordion Title={itm.ID + ' ... '+ itm.Name} Desc={itm.FName} />  */}


                          <AccordianCard RecItm={itm} />
                        </div>
                      )
                    })}

                  {/* <Accordion Title="Title is here" Desc='Detail is here' /> */}
            </div>

          {/* ---------------------[ END: 3rd Col Input Selection ]---------------------================  */}
        </div>{/* /.Main-card-body */}
      </div>    {/* /.Main-card */}
    </>
  )
}

