// import { useHistory } from 'react-router-dom';
// import SearchAd from './SearchAd';

// function Homefilter() {
//   const [search, setSearch] = useState('');
//   const history = useHistory();

//   const Getsearch = () => {
//     console.log(search);
//     history.push(`/searchpage/${search}`);
//   };

// ?
// This will sort from newest to oldest document

// db.collection.find().sort({_id:-1})   

//...........................last rec
// db.collection('collectionName').findOne(
//   {},
//   { sort: { _id: -1 } },
//   (err, data) => {
//      console.log(data);
//   },
// );

import React, { useState, useEffect, createRef, useReducer, createContext } from 'react'
import axios from 'axios'

import Moment from 'moment'
// import * as fs from 'fs'
import { useReactToPrint } from "react-to-print";

// Two files needed for datepicker
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

//Two file needed for toasify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// [START: Calls Prgs: ..................................................]
import EntryFormItems from './Tran/EntryFormItems'
//import { Data as DataAccRec } from '../../AdminData/DB-AccRec'
import { Data as KitchenItems } from '../../AdminData/WarehouseData/KitchenData.js'
//import { DataCategories } from '../../AdminData/WarehouseData/DataCategories'
//import { Suppliers } from '../../AdminData/SuppliersData'


import RecDetailDisp from './Tran/RecDetailDisp'
import RecsComboViews from './Tran/RecsComboViews';
import { PrnListItems } from './Print/PrnListItems';
import { PrnVoucherTest } from './Print/PrnVoucherTest';
import { PrnElectronTestPage } from './Print/PrnElectronTestPage';


import BoxLoading from '../../Components/BoxLoading'
import BoxMessage from '../../Components/BoxMessage'


import { AlertRec, SetPadLeftZero, DispAPIInAlert, DispArrayInAlert, DispRecInAlert, CurrentTime, GetNewID, AlertConfirm } from '../../../StdLib'
// [END: Calls Prgs: ....................................................]




// [START: Icons : ..................................................]
import imgPortal from './AssetsLocal/Images/Users.jpg'
import { FaSave, FaUserPlus, FaUserEdit, FaUsers, FaUserCog, FaUserSlash, FaFolder } from 'react-icons/fa'
import { FcCancel } from 'react-icons/fc'

//Play, back, next, fwwd
import { FaStepBackward, FaBackward, FaForward, FaStepForward } from 'react-icons/fa'

import { TbMapPin, TbWiperWash } from 'react-icons/tb'

import { AiFillAccountBook, AiOutlineNumber } from 'react-icons/ai'
import { ImEnter, ImListNumbered } from 'react-icons/im'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { BsGenderAmbiguous } from 'react-icons/bs'
import { GrUser } from 'react-icons/gr'
import { GrUserManager } from 'react-icons/gr'

import { FaRegIdCard } from 'react-icons/fa'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { FaPhoneVolume } from 'react-icons/fa'

//Sear Icons
import IconSearch from '../../ImagesAdminPanel/default/IconSearch.png'
import { TbListSearch } from 'react-icons/tb'

//Currency Rs Dollar
import { TbCurrencyReal } from 'react-icons/tb'
import { FaRegMoneyBillAlt } from 'react-icons/fa'
import { IoCashOutline } from 'react-icons/io5'


//Description Detail -Text  Records
import { TbTextWrapDisabled } from 'react-icons/tb'

//List Detail -Select List Records
import { TbListDetails } from 'react-icons/tb'

//Mangement or Manage Records
import { TbManualGearbox } from 'react-icons/tb'

//Reference use
import { CgUserList } from 'react-icons/cg'

//Status
import { GrUserExpert } from 'react-icons/gr'

//Department
import { SiGooglesearchconsole } from 'react-icons/si'

//Rank/Designation
import { GiRank3 } from 'react-icons/gi'

//Work Duty
import { IoIosConstruct } from 'react-icons/io'

//job category
import { TbIcons } from 'react-icons/tb'

//Experience
import { GrCertificate } from 'react-icons/gr'

//vehicle
import { FaBicycle } from 'react-icons/fa'
import { AiOutlineFieldNumber } from 'react-icons/ai'

//tex bas aligned
import { GrTextAlignLeft } from 'react-icons/gr'

//msg desc
import { BiMessageAltDetail } from 'react-icons/bi'
import { TbTemplate } from 'react-icons/tb'
import { VscReplaceAll } from 'react-icons/vsc'
import { useCtxMainContextHook } from '../../../CtxMain';

//=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*
//const process.env.REACT_APP_API_URL = process.env.REACT_APP_DOTNET_API_DEV
//const process.env.REACT_APP_API_URL = process.env.REACT_APP_DOTNET_API_PUB
//=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*


const VCat = "1311"
const PrgID = "1311"
const PrgTitle = "Kitchen Items Entries"
//const { Products } = KitchenItems


//Default settings for dropDowns
//TCode: 'SAB', Cat: '11'

const RecDefault = {
  Id: '',

  Code: '',
  Title: '',

  CatCode: '',

  Desc: '',
  Rem: '',

  Pic: '',
  PicURL: '',
  PicURL4Edit: '',

  Unit: '',
  ShareRef: '',
  ShareDoc: '',
  Price: '',
  Price2: '',
  IsShareRefPerCent: 0, IsShareDocPerCent: 0,
  QtyDef: '',
  QtyInc: '',
  QtyStep: '',
  QtyMin: '',
  QtyMax: '',

  PreBal: '',
  CrntBal: '',

  RecType: '',
  RecStatus: '',
  Priority: '',

  EntryBy: '',
  EntryDte: ''
}

// ==================[  useContext and useReducer Hooks  ]=====================


// *******************************************************************************************************************
//                                  M A N A G E
// *******************************************************************************************************************
export default function Manage({ _RecsState, _RecsDispatch }) {
  Moment.locale('en');

  //CTX-Main
  const { CtxMainState, CtxMainDispatch } = useCtxMainContextHook()
  const { _Procedures: RecsAll } = CtxMainState

  //All Records for Manage PRG
  const [RecAll, setRecAll] = useState([]);

  //Single Record for Manage PRG
  const [Rec, setRec] = useState(RecDefault);
  const [Traders, setTraders] = useState([]);
  const [Cats, setCats] = useState([]);

  const [Need2Refresh, setNeed2Refresh] = useState(false);

  //Search items
  const [Txt2Search, setTxt2Search] = useState(103)

  // const [selectedImage4E, setSelectedImage4E] = useState('./AssetsLocal/Images/Default.jpg');
  const [selectedImage4E, setSelectedImage4E] = useState(null);
  const [BtnAddnewClicked, setBtnAddnewClicked] = useState(false)
  const [BtnEditClicked, setBtnEditClicked] = useState(false)
  // const [BtnDeleteClicked, setBtnDeleteClicked] = useState(false)
  // const [SetupDBArray, setSetupDBArray] = useState(true)
  const [InputReadOnly, setInputReadOnly] = useState(true)

  const DefaultImgURL4E = require('./AssetsLocal/Images/Default.jpg')
  const [ImgURL4E, setImgURL4E] = useState(null)

  // \/\/\/\/\/\/\/\/\/\/\[    UseEffect      ]/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/
  useEffect(() => {
    //setRec(RecDefault);

    // DataFetchAllTraders()
    DataFetchAllCats()

    // DataFetchTranD()
    // setRec({ ...Rec, ACCodeC: { ...ACCodeC, Code: C[0].Code }, ACCodeD: { ...ACCodeD, Code: D[0].Code } })
    // RecDefault.ACCodeC.Code = C[0].Code; RecDefault.ACCodeD.Code = D[0].Code

    // const T = let (t=Suppliers.filter(E =>  E.Code==='22111')   //And Suplier
  }, [])

  useEffect(() => {
    setRec(RecDefault);

    // Get Fresh Data from Tran Database 
    DataFetchAll()

    // DataFetchTranD()
    // setRec({ ...Rec, ACCodeC: { ...ACCodeC, Code: C[0].Code }, ACCodeD: { ...ACCodeD, Code: D[0].Code } })
    // RecDefault.ACCodeC.Code = C[0].Code; RecDefault.ACCodeD.Code = D[0].Code
    // _RecsState.Procedures && setRecAll(_RecsState.Procedures) 
    // const T = let (t=Suppliers.filter(E =>  E.Code==='22111')   //And Suplier
  }, [Need2Refresh])

  // \/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/



  // =-.-==-.-==-.-==-.-==-.-==-.-==-.-==-.-==-.-==-.-==-.-==-.-==-.-==-.-==-.-==-.-==-.-==-.-==-.-==-.-==-.-==-.-==-.-==-.-==-.-==-.-==-.-==-.-==-.-==-.-=
  // =-.-==-.-==-.-==-.-=[  Fns: DATABASE/ API Handling ] =-.-==-.-==-.-==-.-==
  // =-.-==-.-==-.-==-.-==-.-==-.-==-.-==-.-==-.-==-.-==-.-==-.-==-.-==-.-==-.-==-.-==-.-==-.-==-.-==-.-==-.-==-.-==-.-==-.-==-.-==-.-==-.-==-.-==-.-==-.-=

  // ==================[  Fn: GET ALL RECORDS  ]=====================
  const DataFetchAll = async (e) => {

    // fetch(process.env.REACT_APP_API_URL + 'Procedures/GetAll', { method: 'GET' })
    // .then(res => res.json())
    // .then(data => { setRecAll(data) })
    //setRecAll(data)

    CtxMainDispatch({ type: 'PROCEDURES_FETCH_LOADING' })

    try {
      const result = await axios.get(process.env.REACT_APP_API_URL + `Procedures`)
      // console.log('*****************result: ', result); alert(result.data)                    
      CtxMainDispatch({ type: 'PROCEDURES_FETCH_SUCCESS', payload: result.data })
    } catch (error) {
      CtxMainDispatch({ type: 'PROCEDURES_FETCH_SUCCESS', payload: error })
    }
  }

  const DataFetchAllCats = async (e) => {
    //=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*
    fetch(process.env.REACT_APP_API_URL + 'Cats', { method: 'GET' })
      .then(res => res.json())
      .then(data => { setCats(data.filter(r => r.Code.substr(-1, 1) != '0')) })

    //=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*    
  }
  // =-.-==-.-==-.-==-.-==-.-==-.-==-.-==-.-==-.-==-.-==-.-==-.-==-.-==-.-==-.-==-.-==-.-==-.-==-.-==-.-==-.-==-.-==-.-==-.-==-.-==-.-==-.-==-.-==-.-==-.-=
  // =-.-==-.-==-.-==-.-=[  E N D       of            Fns: DATABASE/ API Handling ] =-.-==-.-==-.-==-.-==
  // =-.-==-.-==-.-==-.-==-.-==-.-==-.-==-.-==-.-==-.-==-.-==-.-==-.-==-.-==-.-==-.-==-.-==-.-==-.-==-.-==-.-==-.-==-.-==-.-==-.-==-.-==-.-==-.-==-.-==-.-=


  // ==============================================================



  // ==============================================================
  // -.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-
  //AddNew is clicked
  const HandleInputs = (btnStatus) => {
    // alert('Add button with: ' + btnStatus)
  }

  //AddNew is clicked
  const HandleBtnAddnew = (btnStatus) => {
    // alert('Add button with: '+btnStatus)

    // alert('Add New Clicked with: '+btnStatus)
    if (btnStatus) setBtnEditClicked(false);
    // if (btnStatus) setBtnDeleteClicked(false);

    setBtnAddnewClicked(btnStatus);
  }

  // -.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-
  //EDIT is clicked
  const HandleBtnEdit = (btnStatus) => {
    // alert('Edit button with: '+btnStatus)
    if (btnStatus) setBtnAddnewClicked(false)
    // if (btnStatus) setBtnDeleteClicked(false)

    setBtnEditClicked(btnStatus);
    // setInputReadOnly(false)
  }

  // -.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-

  // -.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-
  const HandleBtnVoucherMode = (Mode, BtnStatus, Flag2Refresh = false) => {
    // if (Flag2Refresh) setNeed2Refresh(!Need2Refresh)
    setNeed2Refresh(p => !p)

    switch (Mode) {
      case 'Add': HandleBtnAddnew(BtnStatus); break;
      case 'Edit': HandleBtnEdit(BtnStatus); break;

      default: break;
    }
  }

  // -.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-
  //VoucherSelect is clicked
  const HandleListItemClickedDbl = (E) => {
    HandleListItemClicked(E)
    HandleBtnEdit(true)
  }
  const HandleListItemClicked = (E) => {
    // console.log('HandleListItemClicked Original props: ', E.VNo, E.VDte, E.VCat, E)

    // Now Add-- Items Detail and Titles etc 
    if (E.Id) {
      // alert('Items data was Empty')
      //const t=Object.keys(E).map(k => E[k]=typeof (E[k]) === 'string' ? E[k].trim() : E[k])
      //const t=(Object.entries(E).map(([k,v],i) => v=typeof (v) === 'string' ? v.trim() : v))

      //var t={}; Object.keys(E).forEach(k => t[k]= typeof (E[k]) === 'string' ? E[k].trim() : E[k])
      Object.keys(E).forEach(k => E[k] = typeof (E[k]) === 'string' ? E[k].trim() : E[k])

      //setOrderSheet({ ...OrderSheet, [e.target.name]: e.target.value });
      E.PicURL4Edit = E.PicURL
      console.log('obj: ', E)
      setRec(E)

    }
    // console.log('HandleListItemClicked Added Itms&Qty: ', E.VNo, E.VDte, E.VCat, E)
  }

  // =======Only for Dev Purpose: =======================================================
  const Handle2SendData4Addition = (E) => {
    //  AlertRec(E,'for Data2SendInDatabase')  

    if (E.Code) {

      // setRec({...E, PicURL: E.Pic, Pic:''})
      const Data2SendInDatabase = {
        "Id": E.Code,

        "RecType": '',
        "RecStatus": '',
        "Priority": '',

        "Code": E.Code,
        "Title": E.Title,
        "CatCode": '',
        "Desc": '',
        "Rem": '',

        // "CatCode": E.Cat.substr(0, 1) + '0' + E.Cat.substr(1, 1),

        // "TId2": E.TCode,
        // "TId": (Traders.find(s => s.Code.trim() === E.TCode.trim())).Id,
        // "Pic": Pic,

        "PicURL": E.PicURL,
        "PicURL4Edit": '',

        "Unit": 'KG',
        "QtyDef": 5,
        "QtyInc": 1,
        "QtyStep": 5,
        "QtyMin": 30,
        "QtyMax": 50,

        "Price": 1,

        "PreBal": 0,
        "CrntBal": 0,

        "EntryBy": "xUSERx",
        "EntryDte": new Date()
      }

      // if (!AlertConfirm(Data2SendInDatabase, 'Add New Record ?')) return
      setRec(Data2SendInDatabase)
      HandleBtnAddnew(true)

    }
  }


  // =======Only for Dev Purpose: =======================================================
  //Only for Dev Purpose: get data from file to DataBase
  const HandleDatabase = (opt) => {
    switch (opt) {
      // Empty Database
      case 'Empty':
        RecAll.map(async itm => {
          // //=====[   READY to Delete data from Database   ]========  
          // const res = await fetch(`/api/Item/${itm.Code}`, { method: 'DELETE' })
        })

        alert('All Data has been deleted')
        setNeed2Refresh(!Need2Refresh)
        break;

      // Edit Database
      case 'Edit':
        alert('Editing data')
        RecAll.map(async itm => {
          // //=====[   READY to EDIT data from Database   ]========  
          console.log('Seding data for Code:', itm.ID);

          const res = await fetch(`/api/Procedures/${itm.Id}`, {
            method: 'PATCH', headers: { 'Content-Type': "application/json" },
            body: JSON.stringify(
              {
                "CrntBal": 15,
                "QtyMin": 10,
                "QtyMax": 20
              }
            )
          })

          // body:JSON.stringify({UID,  Title,  Desc,  Work,  Email,  PW})});      
          const data = await res.json();
          console.log('Saved Record Returned:', data);
        })
        break;

      //Addition 
      case 'Add':
        alert('adding data')
        //setSetupDBArray(true)

        break;

      default:
        break;
    }
  }

  // ==============================================================

  // //CLEAR Rec is clicked
  // const HandleBtnClear = () => { alert('Clear pressed'); setRec(RecDefault) }
  // // ==============================================================

  //CANCEL changes is clicked
  const HandleBtnCancel = () => {
    // alert('Cancelled pressed'); 
    setBtnEditClicked(false);
    setBtnAddnewClicked(false);
    setRec(RecDefault)
  }

  // -.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-
  //VoucherSelect is clicked 2 CloseWindow
  const HandleCloseWindow = (msg) => {
    if (msg) setRec({ ...Rec, Id: 0 })
  }
  // -.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-

  // ==============================================================

  // //SAVE changes is clicked
  // const HandleBtnSave = () => { setBtnEditClicked(false); setBtnAddnewClicked(false); setInputReadOnly(true); setRec(RecDefault) }
  // // ==============================================================



  // [Printing ]\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/

  const listRef = createRef();
  // const chartRef = createRef();


  // TRIGGER Electron --- Defint & Declare print request to the Electron Main process
  const TriggerElectron_handlePrint = function (target) {
    return new Promise(() => {
      console.log("forwarding print request to the Electron main process...");

      const data = target.contentWindow.document.documentElement.outerHTML;
      //console.log(data);

      const blob = new Blob([data], { type: "text/html" });
      const url = URL.createObjectURL(blob);

      window.electronAPI.printComponent(url, (response) => {
        console.log("Main: ", response);
      });
      //console.log('Main: ', data);
    });
  };

  // TRIGGER Electron --- Defint & Declare print preview request to the Electron Main process
  const TriggerElectron_handlePreview = function (target) {
    return new Promise(() => {
      console.log("forwarding print preview  Electron request...");

      const data = target.contentWindow.document.documentElement.outerHTML;
      console.log('Data for printing', data);

      const blob = new Blob([data], { type: "text/html" });
      const url = URL.createObjectURL(blob);

      window.electronAPI.previewComponent(url, (response) => {
        console.log("Main: ", response);
      });
      //console.log('Main: ', data);
    });
  };


  // Handle Printing 
  const handleListPrint = useReactToPrint({
    content: () => listRef.current,
    documentTitle: "List component",
    print: TriggerElectron_handlePrint,
  });

  // TRIGGER Electron Handle Preview Printing 
  const handleListPreview = useReactToPrint({
    content: () => listRef.current,
    documentTitle: "List component",
    print: TriggerElectron_handlePreview,
  });

  // const handleChartPrint = useReactToPrint({
  //   content: () => chartRef.current,
  //   documentTitle: "Chart component",
  //   print: handlePrint,
  // });

  // const handleChartPreview = useReactToPrint({
  //   content: () => chartRef.current,
  //   documentTitle: "Chart component",
  //   print: handlePreview,
  // });

  // TRIGGER normal Printing 
  const handleListPrintNormal = useReactToPrint({
    content: () => listRef.current,
    //documentTitle: "List component",
    // print: handlePreview,
  });


  // [END Printing ]\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/


  // *******************************************************************************************************************
  //                                  M A N A G E/ Return
  // *******************************************************************************************************************
  // let SelectedItems = []
  let tmp = ''

  return (<>
    {/* {console.log('Entering in return:', RecsAll)} */}

    {/* <div className="d-flex"> */}
    {/* <h1>Called Procedures:</h1> */}

    {/* {_RecsState.Loading */}
    {/* ? <div className='text-center w-100'><BoxLoading className='w-100' txt={'Processing ...'} /></div> */}
    {/* : _RecsState.Error */}
    {/* ? <BoxMessage variant='danger' > {Error}</BoxMessage> */}
    {/* : */}
    {/* (_RecsState.Procedures.map((E, I) =>{ return (<div>{E.Title}</div>)} */}
    {/* ))} */}
    {/* </div> */}


    <div className="card">

      {/* ====================================================== */}
      {/* MAIN HEADER - PRG  */}  {/* background-color:F3E5F5 */}
      {/* ====================================================== */}
      <div className="card-header px-2 d-flex  justify-content-between align-items-center" style={{ height: 30, backgroundColor: '#E1BEE7' }}>

        {/* ............. Display ICON & TITLE  ............. */}
        <div className="d-flex  gap-2 align-items-center">
          <span className="p-0 mb-2 fs-3 text-danger" ><TbManualGearbox /></span>
          <span className='fs-4'> Manage: Procedures</span>
          {/* <span className='fs-4'> DispRecIndex {CrntIdx2DisplayRec} </span> */}

          {/* <span>
            <button
              onClick={handleListPrint}
              style={{ marginLeft: "1rem" }}>Print </button>
            <button
              onClick={handleListPreview}
              style={{ marginLeft: "1rem" }}>Preview </button>

            <button
              onClick={handleListPrintNormal}
              style={{ marginLeft: "3rem" }}>Normal Standard Print </button>
          </span> */}

        </div>

        {/* ............. Display BUTTONS toolbar  ............. */}
        <div className="d-flex  gap-2 align-items-center">

          {/* ............. Display BUTTON SEARCH text and Icon  ............. */}
          {/* Only if ADD-NEW is Not Clicked */}
          <span>

            {(BtnEditClicked || BtnAddnewClicked) &&
              <>
                <button type="button" className="btn btn-sm btn-info py-0 me-4 text-black" onClick={() => { HandleBtnCancel(false) }}>
                  {/* {BtnAddnewClicked ? 'Addition' : 'Update'} Process <FcCancel className='fs-3 mb-1' /> */}
                  Close {BtnAddnewClicked ? 'Addition' : 'Update'} Process
                </button>

                <div style={{ position: 'absolute', top: '-5px', right: '0px', zIndex: '999' }} onClick={() => HandleBtnCancel(true)}>
                  <strong className='text-danger'> EXIT</strong><br /><ImEnter className='fs-3  text-success' />
                  {/* <CgCloseO className='fs-3  text-danger '  /> */}
                  {/* <SlClose className='fs-3 ms-auto text-danger '  /> */}
                </div>
              </>
            }

            {/* Display BUTTON ADD-NEW & CLEAR */}
            {(!(BtnEditClicked || BtnAddnewClicked) && Rec.Id > 0) &&
              <button type="button" className="btn btn-sm btn-primary "
                onClick={() => { HandleBtnEdit(true) }}>
                Update <FaUserEdit className='mb-1' style={{ width: '20px', height: '20px' }} />
              </button>
            }
            {!(BtnEditClicked || BtnAddnewClicked) &&
              <button type="button" className="btn btn-sm btn-success mx-2"
                onClick={() => { HandleBtnAddnew(true) }}>
                Add New <FaUserPlus className='mb-1' style={{ width: '20px', height: '20px' }} />
              </button>
            }
            {/* {!(BtnEditClicked || BtnAddnewClicked) && (Rec.Code > 0) &&
              <button type="button" className="btn btn-sm btn-danger"
                onClick={() => { HandleBtnDelete(true) }}>
                Delete <FaUserSlash className='mb-1' style={{ width: '20px', height: '20px' }} />
              </button>
            } */}
          </span>

        </div>

      </div>    {/* END: Header for Search Input Selection  */}
      {/* ===========================[ END: Header for Search Input Selection ]===========================================  */}


      {/* =================================================================================== */}
      {/* =====[    Main content CARD BODY start            ]===========================================  */}
      {/* =================================================================================== */}
      <div className="card-body p-1 d-flex flex-row justify-content-center  " style={{ background: '#F3E5F5' }}>

        {/* Transaction List */}
        {/* LEFT-PART for Vouchers List */}
        {/* <div className="card px-2 pt-2 shadow-lg" style={{ width: (SetupDBArray) ? '20%' : '30%' }}> */}
        <div className="card px-2 pt-2 shadow-lg" style={{ width: (BtnAddnewClicked || Rec.Id > 0) ? '30%' : '80%' }}>

          {RecsAll.Loading ? <div className='text-center w-100'><BoxLoading className='w-100' txt={'Processing ...'} /></div>
            : RecsAll.Data.length <= 0 ? <BoxMessage variant='danger' >Seems, There is No Data...</BoxMessage>
              : <>
                <RecsComboViews
                  RecAll={RecsAll.Data}
                  HandleListItemClicked={HandleListItemClicked}
                  HandleListItemClickedDbl={HandleListItemClickedDbl}
                  SizeFlagFS={(BtnAddnewClicked || Rec.Id) ? 'S' : 'F'}
                  ListDispTypeDefault={2} />
              </>
          }

        </div>

        {/* RIGHT-PART for Selected Voucher Detail */}
        {/* Dont Show if No Action is taken. Only if any buttn ADD-NEW/Edit/Delete is Clicked */}
        {(BtnAddnewClicked || Rec.Id > 0) &&

          <div style={{ width: '70%' }}>
            <div className="card p-2 shadow-lg align-items-start " >

              {/* {(SelectedItems = TranD4RecAll.filter((E) => E.Vid === Rec._id)).length > 0 */}

              {(!BtnAddnewClicked) && (!Rec.Id) &&
                <button className="w-100 " style={{ color: 'black', background: '#f0c040', border: '1px solid #404040' }}>
                  No Item Selected for Detail
                </button>
              }

              {!(BtnEditClicked || BtnAddnewClicked) && (Rec.Id) &&
                <>
                  {/* <div className='card d-flex  m-0 p-1 flex-column text-start' style={{ width: '450px', fontSize: '12px', background: '#e0e0e0', borderRadius: '5px' }}> */}
                  <RecDetailDisp Rec={Rec} HandleCloseWindow={HandleCloseWindow} />
                </>
              }

              {/* Only if ADD-NEW/Update is Clicked */}
              {((BtnAddnewClicked || BtnEditClicked)) &&
                < EntryFormItems

                  //Only for Recs transfer in Database Dev purpose
                  CrntRec={BtnAddnewClicked ? Rec : Rec}
                  // CrntRec={BtnAddnewClicked ? SetupDBArray ? Rec : RecDefault : Rec}
                  //Set empty if AddNew otherwise populate Recs
                  //CrntRec={BtnAddnewClicked ? RecDefault : Rec}

                  // Suppliers={Suppliers}
                  // Categories={DataCategories}
                  // Suppliers={Traders}
                  Categories={Cats}

                  // VoucherMode={BtnAddnewClicked ? 'Add' : BtnEditClicked ? 'Edit' :  BtnDeleteClicked ? 'Del':''}
                  VoucherMode={BtnAddnewClicked ? 'Add' : BtnEditClicked ? 'Edit' : ''}

                  // HandleInputs={HandleInputs}
                  // HandleInputsMode={HandleInputsMode}
                  HandleBtnVoucherMode={HandleBtnVoucherMode}
                // setNeed2Refresh={setNeed2Refresh}
                // Need2Refresh={Need2Refresh}
                />
              }
            </div>
          </div>
        }


      </div>{/* /.Main-card-body */}


      {/* ................................................................................... */}
      {/* ............[  Start:    PRINTING     ]............................................ */}
      {/* ................................................................................... */}

      {/* only for Printing Purpose */}
      <div className='d-none'>
        {/* <PrnElectronTestPage ref={listRef} name={"Muffi"} address={"Altaf Town"} /> */}
        <PrnListItems ref={listRef} RecAll={RecsAll.Data} />
        {/* <PrnVoucherTest ref={listRef}  /> */}
      </div>

      {/* ................................................................................... */}
      {/* ............[  End:    PRINTING     ]............................................ */}
      {/* ................................................................................... */}





      {/* =================================================================================== */}
      {/* =====[    Main CARD BODY ends here     ]=========================================== */}
      {/* =================================================================================== */}
    </div >
    {/* /.Main-card */}
    <ToastContainer />
  </>)
}


