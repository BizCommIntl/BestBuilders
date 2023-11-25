import React, { useEffect, useRef, useState } from 'react'


//Two file needed for toasify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import { AlertRec, SetPadLeftZero, DispAPIInAlert, DispArrayInAlert, DispRecInAlert, AlertConfirm, CurrentTime, DateTimeStamp } from '../../../../StdLib'

import { BsSortNumericUpAlt } from 'react-icons/bs'
import { BsSortNumericDownAlt } from 'react-icons/bs'
import { FaSave, FaUserPlus, FaUserEdit, FaUsers, FaUserCog, FaUserSlash, FaFolder } from 'react-icons/fa'
import { FcCancel } from 'react-icons/fc'
import { FaPlus } from 'react-icons/fa'
import { FaMinus } from 'react-icons/fa'
import { TbWiperWash } from 'react-icons/tb'
import { FaRegMoneyBillAlt } from 'react-icons/fa'
import { FaEnvelopeOpenText } from 'react-icons/fa'
import { ImListNumbered } from 'react-icons/im'

//Description Detail -Text  Records
import { TbTextWrapDisabled } from 'react-icons/tb'

//ID Card for Trader
import { FaRegAddressCard } from 'react-icons/fa'

//Titles
import { TbListDetails } from 'react-icons/tb'

//Text-Desc
import { GrPrint, GrTextAlignFull } from 'react-icons/gr'

//job category
import { TbIcons } from 'react-icons/tb'
// import { MdOutlineCategory } from 'react-icons/md'

//Currency Rs Dollar
import { TbCurrencyReal } from 'react-icons/tb'

//Cart Empty, Full
import { TfiShoppingCart, TfiShoppingCartFull } from 'react-icons/tfi'

//Price Tag
import { GiPriceTag } from 'react-icons/gi'

//Status offline
import { HiStatusOffline } from 'react-icons/hi'

//Priority
import { MdLowPriority } from 'react-icons/md'

//Weight
import { FiDelete } from 'react-icons/fi'

//Weight
import { GiWeight } from 'react-icons/gi'

//qty inc, step, default
import { HiOutlineArrowUpOnSquareStack, HiOutlineArrowUpOnSquare, HiOutlineArrowDownTray } from 'react-icons/hi2'
import axios from 'axios'
import FileInput from './FileInput'


//=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*
//const process.env.REACT_APP_API_URL = process.env.REACT_APP_DOTNET_API_DEV
//const process.env.REACT_APP_API_URL = process.env.REACT_APP_DOTNET_API_PUB
//=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*

const ToastWaitTime = 5000
// ==================[  useContext and useReducer Hooks  ]=====================


// \/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/
//                                  P R G  ---   START
// \/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/
export default function EntryFormItems(props) {
  //destructuring    props

  // const { VoucherMode, CrntRec, Categories, HandleInputs, HandleInputsMode, HandleBtnVoucherMode} = props
  const { VoucherMode, CrntRec, Categories, HandleBtnVoucherMode } = props

  const [OrderSheet, setOrderSheet] = useState(CrntRec ? CrntRec : '')
  const [Need2Refresh, setNeed2Refresh] = useState(false);

  // const [selectedImage, setSelectedImage] = useState(null);
  // const [ImgURL, setImgURL] = useState('')
  const DefaultImgURL = require('../AssetsLocal/Images/Default.jpg')


  const PrgID = '1311'
  const VCat = '1311'

  //const { Code, RecStatus, Cat, Title, TitleU, TCode, Priority, Pic, PicURL, Unit, QtyDef, QtyInc, QtyStep, Price, Desc, Rem,  CrntBal, QtyMin, QtyMax } = OrderSheet
  const { Id, RecType, RecStatus, Priority, Code, Title, CatCode, Desc, Rem, Pic, PicURL, Unit, ShareRef, ShareDoc, IsShareRefPerCent, IsShareDocPerCent, Price, Price2, CrntBal } = OrderSheet

  // const [VoucherCart, setVoucherCart] = useState(CrntRec ? CrntRec : RecDefault4M)
  // { VItems: [], VDte: new Date().toDateString(), VNo: 'xxx', VCat: '31', VDesc: '', TCode: 'SAB', VAmt: -9, VQty: -9 })

  // const [VoucherCart, setVoucherCart] = useState({ VItems:iniRec.VItems, VDte:iniRec.VDte, VNo:iniRec.VNo, VDesc: '', TCode: 'SAB', VAmt: -9, VQty: -9 })

  useEffect(() => {
    // if (!VoucherMode ) { alert('Empty VoucherMode- trying to return'); return }
    // console.log('Rcvd CrntRec', CrntRec)
    // DispRecInAlert(CrntRec,'Rcvd CrntRec')

    // if (CrntRec) {    AlertRec (CrntRec, 'crntRec');setOrderSheet(CrntRec)}
    setOrderSheet(VoucherMode == 'Add' ? { ...CrntRec, Id: '', PicURL: '' } : CrntRec)
    // document.getElementById('SelectPhoto').focus();
  }, [Need2Refresh]);


  // ==================[  Fn: Handle Inputs  ]=====================

  const handleFocus = (event) => event.target.select();
  const Input = (props) => <input type="text" value="Some something" onFocus={handleFocus} />

  const HandleDefaultCat = () => {
    // const temp = Categories.at(-1).Id //last
    const temp = Categories.at(0).Code //first
    // AlertRec(Suppliers, 'Setting Default Suppliers :' + temp)
    setOrderSheet({ ...OrderSheet, CatCode: temp })
    // setOrderSheet(() => ({ ...OrderSheet, TId: '' }));
    return temp
  }

  const HandleInputs = (e) => {
    // let key = '', value = '';
    // console.log('Input Done:', e.target.name, e.target.value);
    // alert(e.target.name + '  ' + e.target.value)
    // key = e.target.name; value = e.target.value;


    // if (e.target.name === 'TId') {
    //   //const tRec = Suppliers.find(P => P.Id === Number(e.target.value))
    //   // [{ Id: e.target.value, Title: e.target.options[e.target.selectedIndex].text }]
    //   setOrderSheet({ ...OrderSheet, [e.target.name]: Number(e.target.value) });
    // }
    // else
    setOrderSheet({ ...OrderSheet, [e.target.name]: e.target.value });
  }


  // ==============================================================
  //CLEAR Rec is clicked
  //   const HandleBtnClear = () => { alert('Clear pressed'); setRec4M(RecDefault4M) }
  const HandleBtnReset = () => { setNeed2Refresh(p => !p) }

  // ==============================================================
  //CANCEL changes is clicked
  //   const HandleBtnCancel = () => { alert('Cancelled pressed'); setBtnEditClicked(false); setBtnAddnewClicked(false); setInputReadOnly(true); setRec4M(RecDefault4M) }
  const HandleBtnCancel = (Flag2Refresh) => {
    HandleBtnVoucherMode(VoucherMode, false, Flag2Refresh);
  }

  // ==============================================================
  //SAVE changes is clicked
  const HandleBtnSave = (e) => {
    e.preventDefault();

    // AlertRec(OrderSheet, 'Saving Data is Proceeded.');
    switch (VoucherMode) {
      case 'Add': CallDotAPI2SaveAddNew(); break;
      case 'Edit': CallDotAPI2SaveUpdate(); break;
      default: break;
    }
  }

  // ==============================================================
  //DELETE is clicked
  const HandleBtnDelete = (btnStatus) => {
    // AlertRec(Rec4M, 'DELETE Record: Rec4M')

    CallDotAPI2Delete()
  }


  // =======================================================================
  // ==================[  Fns: DATABASE/ API Handling ]=====================
  // =======================================================================
  // --------------------------------------------------------------------------------------------------------------------
  // ------------- AddNew/Create RECORD ----------------
  // --------------------------------------------------------------------------------------------------------------------

  const CallDotAPI2SaveAddNew = async () => {
    // AlertRec(OrderSheet, 'Data Ready to Send')
    // const { Code, RecStatus, CatCode, Title, TitleU, TCode, Priority, Pic, PicURL, Unit, QtyDef, QtyInc, QtyStep, Price, Desc, Rem,  CrntBal, QtyMin, QtyMax } = OrderSheet
    const { Id, Code, Title, CatCode, Desc, Rem, Pic, PicURL, PicURL4Edit, Unit, ShareRef, ShareDoc, Price, Price2, QtyDef, QtyInc, QtyStep, QtyMin, QtyMax, CrntBal, RecType, RecStatus, Priority, EntryBy, EntryDte } = OrderSheet

    // if (!(Code)) {
    //   alert('CODE is invalid. \nPlz Check CODE entered.'); return
    // }

    // if (!Categories.find(s => s.Code === CatCode)) {
    //   //alert('Supplier is invalid. \nPlz check voucher entry. ' + [TId]); return
    //   toast.error('Category is invalid. \nPlz Reset Category entry. [ ' + CatCode + ' ]', { theme: 'colored', autoClose: ToastWaitTime, })
    //   return
    // }

    if (!(Code)) {
      toast.error('Code is invalid. \nPlz Check Code entry.', { theme: 'colored', autoClose: ToastWaitTime, })
      return
    }
    if (!(Title)) {
      toast.error('Title is invalid. \nPlz Check Title entry.', { theme: 'colored', autoClose: ToastWaitTime, })
      return
    }
    if (!Categories.find(s => s.Code === CatCode)) {
      //alert('Supplier is invalid. \nPlz check voucher entry. ' + [TId]); return
      toast.error('Category is invalid. \nPlz Reset Category entry. [ ' + CatCode + ' ]', { theme: 'colored', autoClose: ToastWaitTime, })
      return
    }


    const Data2SendInDatabase = {
      "Id": 0,

      "RecType": RecType.substr(0, 10),         //RecType.Substring(0, Math.min(RecType.Length, 10)) ,
      "RecStatus": RecStatus.substr(0, 10),
      "Priority": Priority.substr(0, 10),

      "Code": Code.substr(0, 5),
      "Title": Title.substr(0, 50),
      "Desc": Desc.substr(0, 50),
      "Rem": Rem.substr(0, 50),

      "CatCode": CatCode,
      // "TId": Number(TId),
      // "Pic": Pic,
      // "PicURL": (Pic ? Title.trim().substr(0, Math.min(Title.trim().length, 10)) + DateTimeStamp() + '.png': ''),      
      "PicURL": (Pic ? Title.replace(/ /g, '').substr(0, 10) + DateTimeStamp() + '.png' : ''),

      "Unit": Unit.substr(0, 10),
      "QtyDef": Number(QtyDef),
      "QtyInc": Number(QtyInc),
      "QtyStep": Number(QtyStep),
      "QtyMin": Number(QtyMin),
      "QtyMax": Number(QtyMax),
      "ShareRef": Number(ShareRef),
      "ShareDoc": Number(ShareDoc),
      "Price": Number(Price),
      "Price2": Number(Price2),

      "CrntBal": Number(CrntBal),

      "EntryBy": "xUSERx",
      "EntryDte": new Date()
    }

    // if (!AlertConfirm(Data2SendInDatabase, 'Add New Record ?')) return

    // DispAPIInAlert(Data2SendInDatabase, 'Data2SendInDatabase')
    // formData.append('username', 'Chris');
    // formData.append('userpic', myFileInput.files[0], 'chris1.jpg');
    // formData.append('userpic', myFileInput.files[1], 'chris2.jpg');

    //=*=*=*=*=*=*=*=*=*=*=*=[ Get New Next Available Code ]=*=*=*=*=*=*=*=*=*=*=*=
    const VNO_NEW = 'VNO' //SetPadLeftZero((await (await fetch(`/api/VNoTrack/${VCat}`, { method: 'GET' })).json()).VNo, 3)
    // alert('VNoTrack.VNo VNO_NEW: ' + SetPadLeftZero(VNO_NEW,3))
    //=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=



    //=====[   READY to send data in Database   ]========  
    //-------------------------------------------------------

    // //'.'.'.'.'.'.'   DUPLICATE CHECK.............
    // const rec = await fetch(`/api/Item/${OrderSheet.Code}`, { method: 'GET' })

    // if (rec.status === 200) {
    //   // const data = await rec.json();
    //   // AlertRec(data, 'Available Code')

    //   alert('Entered CODE is already available.\nDuplication of CODE is not allowed.');
    //   return
    // }
    // // else { alert('Status Check: Entered CODE is Not available. ' + rec.status); return }
    // //'.'.'.'.'.'.'   END- DUPLICATE CHECK.............


    //[ Part -1/2 >>> Data uploading ]
    //-------------------------------------------------------
    fetch(process.env.REACT_APP_API_URL + 'Procedures', {
      method: 'POST',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify(Data2SendInDatabase)
    })
      .then(res => res.json())
      .then((result) => {
        HandleBtnCancel(true)

        //-------------------------------------------------------
        //[ Part -2/2 >>> Image uploading ]
        if (Pic) {
          // var ext =  fileName.split('.').pop();
          // const FILENAME = VNO_NEW + '.jpg'    //+ '.' + PicURL.split('.').pop()
          //const filename = Data2SendInDatabase.Title + DateTimeStamp() + '.png'    //product.PicURL

          // setPhotofilename(e.target.files[0].name);
          const formData = new FormData();
          //     // formData.append('username', 'Chris');
          //     // formData.append('userpic', myFileInput.files[0], 'chris1.jpg');
          // for (let [key, value] of fd.entries()) { console.log(key, value);}
          formData.append("ImageFile", Pic, Data2SendInDatabase.PicURL);

          fetch(process.env.REACT_APP_API_URL + 'Procedures/SaveFile', { method: 'POST', body: formData })
            .then(res => res.json())
            .then((result) => {
              // alert('Photo Successfully Saved: ' + Data2SendInDatabase.PicURL + '\n' + "Response: " + result)
              toast.success('Record Saved Successfully:* [' + Title + ']', { theme: 'colored', autoClose: ToastWaitTime, })

            }, (error) => { alert('ERROR--- Photo Uploading is Failed: ' + Data2SendInDatabase.PicURL); Data2SendInDatabase.PicURL = '' })
        }
        else {
          toast.success('Record Saved Successfully: [' + Title + ']', { theme: 'colored', autoClose: ToastWaitTime, })
        }
        //-------------------------------------------------------

        //toast.success('Record Saved Successfully: Bypassing Image Section', { theme: 'colored', autoClose: ToastWaitTime, })
      }

        , (error) => { alert('ERROR--- Add-New Action Result: ' + 'Failed'); })

    //     //History.push(CatCode"/Home");
    HandleBtnCancel(true)
  }



  // --------------------------------------------------------------------------------------------------------------------
  // ------------- Update RECORD ----------------
  // --------------------------------------------------------------------------------------------------------------------
  const CallDotAPI2SaveUpdate = async () => {
    // alert('Now Saving Data for Update in Database')

    // AlertRec(VoucherCart, 'Data Ready to Send')
    // const { Code, RecStatus, Cat, Title, TitleU, TCode, Priority, Pic, PicURL, Unit, QtyDef, QtyInc, QtyStep, Price, Desc, Rem, , CrntBal, QtyMin, QtyMax } = OrderSheet
    //const { Id, Code, Title, TitleU, Desc, Rem, CatCode, TId, Pic, PicURL, Unit, Price, QtyDef, QtyInc, QtyStep, QtyMin, QtyMax,  CrntBal, RecType, RecStatus, Priority, EntryBy, EntryDte } = OrderSheet
    const { Id, Code, Title, CatCode, Desc, Rem, Pic, PicURL, PicURL4Edit, Unit, ShareRef, ShareDoc, Price, Price2, QtyDef, QtyInc, QtyStep, QtyMin, QtyMax, CrntBal, RecType, RecStatus, Priority, EntryBy, EntryDte } = OrderSheet

    // if (!(Code)) {
    //   alert('CODE is invalid. \nPlz Check CODE entered.'); return
    // }

    // if (!Categories.find(s => s.Code === CatCode)) {
    //   //alert('Supplier is invalid. \nPlz check voucher entry. ' + [TId]); return
    //   toast.error('Category is invalid. \nPlz Reset Category entry. [ ' + CatCode + ' ]', { theme: 'colored', autoClose: ToastWaitTime, })
    //   return
    // }

    if (!(Code)) {
      toast.error('Code is invalid. \nPlz Check Code entry.', { theme: 'colored', autoClose: ToastWaitTime, })
      return
    }
    if (!(Title)) {
      toast.error('Title is invalid. \nPlz Check Title entry.', { theme: 'colored', autoClose: ToastWaitTime, })
      return
    }

    const Data2SendInDatabase = {
      "Id": Id,

      "RecType": RecType.substr(0, 10),         //RecType.Substring(0, Math.min(RecType.Length, 10)) ,
      "RecStatus": RecStatus.substr(0, 10),
      "Priority": Priority.substr(0, 10),

      "Code": Code.substr(0, 5),
      "Title": Title.substr(0, 50),
      "Desc": Desc.substr(0, 50),
      "Rem": Rem.substr(0, 50),

      "CatCode": CatCode,
      // "TId": Number(TId),

      // "Pic": Pic,
      //"PicURL": PicURL.substr(0, 50),
      "PicURL": (Pic ? Title.replace(/ /g, '').substr(0, 10) + DateTimeStamp() + '.png' : PicURL),

      "Unit": Unit.substr(0, 10),
      "QtyDef": Number(QtyDef),
      "QtyInc": Number(QtyInc),
      "QtyStep": Number(QtyStep),
      "QtyMin": Number(QtyMin),
      "QtyMax": Number(QtyMax),
      "ShareRef": Number(ShareRef),
      "ShareDoc": Number(ShareDoc),
      "Price": Number(Price),
      "Price2": Number(Price2),

      "CrntBal": Number(CrntBal),

      "EntryBy": "xUSERx",
      "EntryDte": new Date()
    }

    //    if (!AlertConfirm(Data2SendInDatabase, 'Record Ready to Update? ')) return




    //[ Part -1/2 >>> Image uploading ]
    //-------------------------------------------------------
    // alert('Yes Image is present for Update')
    if (Pic) {

      // Data2SendInDatabase.PicURL= PicURL4Edit ? PicURL4Edit  : Title.replace(/ /g, '').substr(0, 10) + DateTimeStamp() + '.png' 
      // Data2SendInDatabase.PicURL = Title.replace(/ /g, '').substr(0, 10) + DateTimeStamp() + '.png'

      const formData = new FormData();
      //     // formData.append('username', 'Chris');
      //     // formData.append('userpic', myFileInput.files[0], 'chris1.jpg');
      // for (let [key, value] of fd.entries()) { console.log(key, value);}
      formData.append("ImageFile", Pic, Data2SendInDatabase.PicURL);

      fetch(process.env.REACT_APP_API_URL + 'Procedures/SaveFile', { method: 'POST', body: formData })
        .then(res => res.json())
        .then((result) => {
          // alert('Photo Successfully Saved: ' + Data2SendInDatabase.PicURL + '\n' + "Response: " + result)
          //setImageSrc('')
          // GetRecs() //Update Fresh Records
        }, (error) => { alert('ERROR--- Photo Uploading is Failed: ' + Data2SendInDatabase.PicURL); Data2SendInDatabase.PicURL = '' })
    }

    // alert('Previous Image is present for Update')
    if ((!PicURL && PicURL4Edit) || (Pic && PicURL4Edit)) {
      //Name Removed && Old-Still-present then Remove Image of Old-Still-present name
      //Destroy Old Image [ Part ----- >>> Delete Image ]

      fetch(process.env.REACT_APP_API_URL + 'Procedures/RemoveFile/' + PicURL4Edit, { method: 'DELETE' })
        .then(res => res.json())
        .then((result) => {
          // console.log('result: ', result);
          // alert('DELETE Old-Photo Action Success-Result: ' + result);
        }
          , (error) => { alert('ERROR--- DELETE Photo Action Result: ' + 'Failed'); })
    }


    //[ Part -2/2 >>> Data uploading ]
    //-------------------------------------------------------
    fetch(process.env.REACT_APP_API_URL + `Procedures/${Id}`, {
      method: 'PUT',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify(Data2SendInDatabase)
    })
      .then(res => res.json())
      .then((result) => {
        // alert('Update Action Success-Result: ' + result);
        // GetRecs()
        toast.success('Record Updated Successfully: [' + Title + ']', { theme: 'colored', autoClose: ToastWaitTime, })
        HandleBtnCancel(true)
      }
        , (error) => { toast.error('ERROR--- Failed, Update Action Result: ' + error, { theme: 'colored', autoClose: ToastWaitTime, }) }
      )

    //History.push("/Home");
    // setNeed2Refresh4M(!Need2Refresh4M)
    HandleBtnCancel(true)
  }

  // const CallAPI2SaveUpdate = async () => {
  //   alert('Now Saving Data for Update in Database')

  //   // AlertRec(VoucherCart, 'Data Ready to Send')
  //   // const { Code, RecStatus, Cat, Title, TitleU, TCode, Priority, Pic, PicURL, Unit, QtyDef, QtyInc, QtyStep, Price, Desc, Rem,  CrntBal, QtyMin, QtyMax } = OrderSheet
  //   const { Id, Code, Title, TitleU, Desc, Rem, CatCode, TId, Pic, PicURL, Unit, Price, QtyDef, QtyInc, QtyStep, QtyMin, QtyMax,  CrntBal, RecType, RecStatus, Priority, EntryBy, EntryDte } = OrderSheet

  //   if (!(Code)) {
  //     alert('CODE is invalid. \nPlz Check CODE entered.'); return
  //   }

  //   if (!Suppliers.find(s => s.Id === TId)) {
  //     alert('Supplier is invalid. \nPlz Reset Supplier entry.'); return
  //   }
  //   if (!Categories.find(s => s.Code.trim()  === CatCode.trim() )) {
  //     alert('Category is invalid. \nPlz Reset Category entry.'); return
  //   }

  //   if (!(Title || TitleU)) {
  //     alert('Titles are invalid. \nPlz Check Title entries.'); return
  //   }

  //   // const Data2SendInDatabase = {
  //   //   // "Code": Code,
  //   //   "RecStatus": RecStatus,
  //   //   "Cat": Cat,
  //   //   "Title": Title,
  //   //   "TitleU": TitleU,
  //   //   "TCode": TCode,
  //   //   "Priority": Priority,
  //   //   "Pic": Pic,
  //   //   "PicURL": PicURL,
  //   //   "Unit": Unit,
  //   //   "QtyDef": QtyDef,
  //   //   "QtyInc": QtyInc,
  //   //   "QtyStep": QtyStep,
  //   //   "Price": Price,
  //   //   "Desc": Desc,
  //   //   "Rem": Rem,
  //   //   "CrntBal": CrntBal,
  //   //   "QtyMin": QtyMin,
  //   //   "QtyMax": QtyMax,

  //   //   "EntryBy": "xUSERx",
  //   //   "EntryDte": new Date()
  //   // }

  //   // AlertRec(Data2SendInDatabase, 'Data2SendInDatabase')
  //   // DispAPIInAlert(Data2SendInDatabase, 'Data2SendInDatabase')


  //   // var ext =  fileName.split('.').pop();
  //   const FILENAME = Code + '.jpg'    //+ '.' + PicURL.split('.').pop()

  //   const formData = new FormData
  //   // formData.append("Code", Code)
  //   formData.append("RecStatus", RecStatus)
  //   formData.append("Cat", CatCode)
  //   formData.append("Title", Title)
  //   formData.append("TitleU", TitleU)
  //   formData.append("TCode", TId)
  //   formData.append("Priority", Priority)
  //   //  formData.append(  "Pic", Pic)
  //   formData.append("PicURL", ((PicURL || Pic) ? FILENAME : ''))
  //   formData.append("Unit", Unit)
  //   formData.append("QtyDef", QtyDef === null ? 0 : QtyDef)
  //   formData.append("QtyInc", QtyInc === null ? 0 : QtyInc)
  //   formData.append("QtyStep", QtyStep === null ? 0 : QtyStep)
  //   formData.append("Price", Price === null ? 0 : Price)
  //   formData.append("Desc", Desc)
  //   formData.append("Rem", Rem)
  //   formData.append("CrntBal", CrntBal === null ? 0 : CrntBal)
  //   formData.append("QtyMin", QtyMin === null ? 0 : QtyMin)
  //   formData.append("QtyMax", QtyMax === null ? 0 : QtyMax)
  //   formData.append("EntryBy", 'xUSERx')
  //   formData.append("EntryDte", new Date())

  //   if (Pic) {
  //     // alert('Yes Image is present for Update')
  //     // formData.append('Pic', Pic, PicURL);
  //     formData.append('Pic', Pic, FILENAME);
  //   }

  //   // console.log('FORM DATA :', formData)
  //   // for (let [key, value] of formData.entries()) { console.log(key, value); }

  //   //=====[   READY to send data in Database   ]========  
  //   //-------------------------------------------------------
  //   // const res = await fetch(`/api/Procedure/${Vid}`, {
  //   const res = await fetch(`/api/Procedure/${Code}`, {
  //     method: 'PUT',
  //     body: formData
  //   })
  //   if (res.status === 201) {
  //     window.alert("Record Saved");
  //     const data = await res.json();
  //   }
  //   else {
  //     window.alert("Somthing is wrong in saving data.");
  //     //History.push("/Home");
  //   }

  //   // const data = await res.json();
  //   // const data = res.json();
  //   // console.log('Saved Record Returned:', data);
  //   // AlertRec(res, 'Returned Saved Record')

  //   // if (res.status === 422 || !data) { window.alert("Transaction Invalid."); }
  //   // else {
  //   //     window.alert("Transaction Successful.");
  //   //     //History.push("/Home");
  //   // }

  //   // alert('Data is Sent in Database')
  //   // setNeed2Refresh4M(!Need2Refresh4M)
  //   HandleBtnCancel(true)
  // }


  //  const CallAPI2SaveAddNew = async () => {
  //     // AlertRec(VoucherCart, 'Data Ready to Send')
  //     const { Code, RecStatus, Cat, Title, TitleU, TId, Priority, Pic, PicURL, Unit, QtyDef, QtyInc, QtyStep, Price, Desc, Rem,  CrntBal, QtyMin, QtyMax } = OrderSheet

  //     // if (!(Code)) {
  //     //   alert('CODE is invalid. \nPlz Check CODE entered.'); return
  //     // }
  //     if (!Suppliers.find(s => s.Code === TCode)) {
  //       alert('Supplier is invalid. \nPlz Reset Supplier entry.'); return
  //     }
  //     if (!Categories.find(s => s.Id === Cat)) {
  //       alert('Category is invalid. \nPlz Reset Category entry.'); return
  //     }

  //     if (!(Title || TitleU)) {
  //       alert('Titles are invalid. \nPlz Check Title entries.'); return
  //     }

  //     // const Data2SendInDatabase = {
  //     //   "Code": Code,
  //     //   "RecStatus": RecStatus,
  //     //   "Cat": Cat,
  //     //   "Title": Title,
  //     //   "TitleU": TitleU,
  //     //   "TCode": TCode,
  //     //   "Priority": Priority,
  //     //   // "Pic": Pic,
  //     //   "PicURL": PicURL,
  //     //   "Unit": Unit,
  //     //   "QtyDef": QtyDef,
  //     //   "QtyInc": QtyInc,
  //     //   "QtyStep": QtyStep,
  //     //   "Price": Price,
  //     //   "Desc": Desc,
  //     //   "Rem": Rem,
  //     //   "CrntBal": CrntBal,
  //     //   "QtyMin": QtyMin,
  //     //   "QtyMax": QtyMax,

  //     //   "EntryBy": "xUSERx",
  //     //   "EntryDte": new Date()
  //     // }
  //     // DispAPIInAlert(Data2SendInDatabase, 'Data2SendInDatabase')
  //     // formData.append('username', 'Chris');
  //     // formData.append('userpic', myFileInput.files[0], 'chris1.jpg');
  //     // formData.append('userpic', myFileInput.files[1], 'chris2.jpg');


  //     //=*=*=*=*=*=*=*=*=*=*=*=[ Get New Next Available Code ]=*=*=*=*=*=*=*=*=*=*=*=
  //     const VNO_NEW = SetPadLeftZero((await (await fetch(`/api/VNoTrack/${VCat}`, { method: 'GET' })).json()).VNo, 3)
  //     // alert('VNoTrack.VNo VNO_NEW: ' + SetPadLeftZero(VNO_NEW,3))
  //     //=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=

  //     // var ext =  fileName.split('.').pop();
  //     const FILENAME = VNO_NEW + '.jpg'    //+ '.' + PicURL.split('.').pop()

  //     const formData = new FormData
  //     formData.append("Code", VNO_NEW)
  //     formData.append("ItemStatus", ItemStatus)
  //     formData.append("Cat", Cat)
  //     formData.append("Title", Title)
  //     formData.append("TitleU", TitleU)
  //     formData.append("TCode", TCode)
  //     formData.append("Priority", Priority)
  //     //  formData.append(  "Pic", Pic)
  //     formData.append("PicURL", (Pic ? FILENAME : ''))
  //     formData.append("Unit", Unit)
  //     formData.append("QtyDef", QtyDef === null ? 0 : QtyDef)
  //     formData.append("QtyInc", QtyInc === null ? 0 : QtyInc)
  //     formData.append("QtyStep", QtyStep === null ? 0 : QtyStep)
  //     formData.append("Price", Price === null ? 0 : Price)
  //     formData.append("Desc", Desc)
  //     formData.append("Rem", Rem)
  //     formData.append("CrntBal", CrntBal === null ? 0 : CrntBal)
  //     formData.append("QtyMin", QtyMin === null ? 0 : QtyMin)
  //     formData.append("QtyMax", QtyMax === null ? 0 : QtyMax)
  //     formData.append("EntryBy", 'xUSERx')
  //     formData.append("EntryDte", new Date())

  //     if (Pic) {
  //       // formData.append('Pic', Pic, PicURL);
  //       // alert('Yes Image is present')
  //       formData.append('Pic', Pic, FILENAME);
  //     }
  //     // console.log('FORM DATA :',formData)
  //     // for (let [key, value] of fd.entries()) { console.log(key, value);}


  //     //=====[   READY to send data in Database   ]========  
  //     //-------------------------------------------------------

  //     // //'.'.'.'.'.'.'   DUPLICATE CHECK.............
  //     // const rec = await fetch(`/api/Item/${OrderSheet.Code}`, { method: 'GET' })

  //     // if (rec.status === 200) {
  //     //   // const data = await rec.json();
  //     //   // AlertRec(data, 'Available Code')

  //     //   alert('Entered CODE is already available.\nDuplication of CODE is not allowed.');
  //     //   return
  //     // }
  //     // // else { alert('Status Check: Entered CODE is Not available. ' + rec.status); return }


  //     // const res = await fetch('/api/Item', {
  //     //   method: 'POST', headers: { 'Content-Type': "application/json" },
  //     //   body: JSON.stringify(Data2SendInDatabase)
  //     // })
  //     // const data = await res.json();
  //     // // console.log('Saved Record Returned:', data);
  //     // AlertRec(data, 'Returned Saved Record')
  //     //..........................


  //     // axios.post('http://localhost:5000/api/Item',fd)
  //     // const res = await fetch('/save', {

  //     const res = await fetch('/api/Item', {
  //       method: 'POST',
  //       // enctype:"multipart/form-data",
  //       body: formData
  //     })
  //     const data = await res.json();


  //     // console.log('Saved Record Returned:', data);
  //     // AlertRec(data, 'Returned Saved Record')

  //     //...............................................
  //     // if (res.status === 422 || !data) { window.alert("Transaction Invalid."); }
  //     // else {
  //     //     window.alert("Transaction Successful.");
  //     //     //History.push("/Home");
  //     // }

  //     // alert('Data is Sent in Database')
  //     // setNeed2Refresh4M(!Need2Refresh4M)
  //     HandleBtnCancel(true)
  //   }


  // --------------------------------------------------------------------------------------------------------------------
  // ------------- Delete  RECORD ----------------
  // --------------------------------------------------------------------------------------------------------------------

  const CallDotAPI2Delete = async () => {
    // alert('Now Deleting Data from Database Section val:')

    const { Id, Title, PicURL, PicURL4Edit } = OrderSheet


    //[ Part -1/2 >>> Data uploading ]
    //-------------------------------------------------------
    fetch(process.env.REACT_APP_API_URL + `Procedures/${Id}`, {
      method: 'DELETE',
    })
      .then(res => res.json())
      .then((result) => {        // GetRecs()
        // alert('DELETE Action Success-Result: ' + result);
        toast.warn('Record Deleted Successfully: [' + Title + ']', { theme: 'colored', autoClose: ToastWaitTime, })

        HandleBtnCancel(true)

        //Destroy Old Image [ Part 2/2 ----- >>> Delete Image ]
        //-------------------------------------------------------
        if (PicURL4Edit) {
          fetch(process.env.REACT_APP_API_URL + 'Procedures/RemoveFile/' + PicURL4Edit, { method: 'DELETE' })
            .then(res => res.json())
            .then((result) => {
              // alert('DELETE Old-Photo Action Success-Result: ' + result);
              //toast.warn('Record Deleted Successfully: W/- Photo', { theme: 'colored', autoClose: ToastWaitTime, })
            }
              , (error) => { alert('ERROR--- DELETE Photo Action Result: ' + 'Failed'); })
        }

      }
        // , (error) => { alert('ERROR--- DELETE Photo Action Result: ' + 'Failed'); })
        , (error) => { toast.error('ERROR--- Failed, Delete Action Result: ' + error, { theme: 'colored', autoClose: ToastWaitTime, }) }
      )


    // alert('Record is DELETED from Database')
    HandleBtnCancel(true)
  }





  useEffect(() => {
    // const searchQuery = document.querySelector("#searchQ").value;
    // console.log(searchQuery);
    // loadURLToInputFiled('f:/bilal.png')    

    //     alert('OrderSheet.PicURL :'+OrderSheet.PicURL)
    //     AlertRec(OrderSheet,'OrderSheet')
    // alert('../ItemsStore/' + OrderSheet.PicURL)

    LoadImg2InputField('F:/bilal.png', OrderSheet.PicURL)

    // loadTemp('F:/bilal.png')
  }, []);

  function LoadImg2InputField(img, fileName) {
    // Load img blob to input
    // WIP: UTF8 character error
    // let fileName = 'hasFilename.jpg'
    // let file = new File([imgBlob], fileName,{type:"image/jpeg", lastModified:new Date().getTime()}, 'utf-8');
    // let file = new File(['../ItemsStore/' +'BigBird.png'], fileName, { type: "image/jpeg", lastModified: new Date().getTime() }, 'utf-8');
    // let file = new File(['F:/MyReactApps/MyProjects/daSys/client/public/Images/ItemsStore/' +'BigBird.png'], fileName, { type: "image/jpeg", lastModified: new Date().getTime() }, 'utf-8');
    // let fileName = 'hasFilename.jpg'
    let file = new File([img], fileName, { type: "image/jpeg", lastModified: new Date().getTime() }, 'utf-8');
    let container = new DataTransfer();
    container.items.add(file);
    document.querySelector('#inputPhoto').files = container.files;
    // ERR: setOrderSheet({ ...OrderSheet, Pic: container.files[0] });

    // inputPhoto.files = container.files;
  }

  function loadTemp(img) {
    // getImgURL('https://cloudinary-res.cloudinary.com/image/upload/dpr_2.0,c_scale,f_auto,q_auto,w_156/cloudinary_logo_for_white_bg.svg', (imgBlob)=>{
    // getImgURL(url, (imgBlob) => {
    // Load img blob to input
    // WIP: UTF8 character error
    let fileName = 'hasFilename.jpg'
    let file = new File([img], fileName, { type: "image/jpeg", lastModified: new Date().getTime() }, 'utf-8');
    let container = new DataTransfer();
    container.items.add(file);
    document.querySelector('#inputPhoto').files = container.files;
    // inputPhoto.files = container.files;

    // })
  }


  function loadURLToInputFiled(url) {
    // getImgURL('https://cloudinary-res.cloudinary.com/image/upload/dpr_2.0,c_scale,f_auto,q_auto,w_156/cloudinary_logo_for_white_bg.svg', (imgBlob)=>{
    getImgURL(url, (imgBlob) => {
      // Load img blob to input
      // WIP: UTF8 character error
      let fileName = 'hasFilename.jpg'
      // let file = new File(['F:/bilal.png' ], fileName, { type: "image/jpeg", lastModified: new Date().getTime() }, 'utf-8');
      let file = new File([imgBlob], fileName, { type: "image/jpeg", lastModified: new Date().getTime() }, 'utf-8');
      let container = new DataTransfer();
      container.items.add(file);
      document.querySelector('#inputPhoto').files = container.files;
      // inputPhoto.files = container.files;

    })
  }

  // xmlHTTP return blob respond
  function getImgURL(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
      callback(xhr.response);
    };
    xhr.open('GET', url);
    xhr.responseType = 'blob';
    xhr.send();
  }




  // \/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/
  return (
    <>

      <div className='card d-flex  m-0 p-1 flex-column text-start' style={{ width: '100%', fontSize: '12px', background: '#e0e0e0', borderRadius: '5px' }}>

        {/* =================================================================================== */}
        {/* =====[    Main Prg /CARD HEADDER start            ]===========================================  */}
        {/* =================================================================================== */}
        <div className='card-header d-flex gap-1 py-1 m-0 justify-content-between ' style={{ background: '#bebebe' }}>
          <span className='fs-6'><strong>Procedures Detail</strong></span>

          <button className='btn btn-sm ms-auto btn-warning py-0 px-1' style={{ height: '25px' }} onClick={() => { HandleBtnReset() }}>
            <span style={{ fontSize: 'smaller' }}>Reset Changes</span> <TbWiperWash />
          </button>
          <button className='btn btn-sm btn-success py-0 px-1' style={{ height: '25px' }} onClick={(e) => { HandleBtnSave(e) }} type="submit" >
            <span style={{ fontSize: 'smaller' }}>Save {(VoucherMode === 'Edit') ? 'Changes ' : 'Record'}</span> <FaSave className='mb-1' />
          </button>
          {(VoucherMode === 'Edit') &&
            <button className='btn btn-sm btn-danger py-0 px-1' style={{ height: '25px' }}
              data-bs-toggle="modal" data-bs-target="#exampleModal">
              {/* onClick={() => { HandleBtnDelete(true) }}> */}
              <span style={{ fontSize: 'smaller' }}>Delete Record</span> <FaUserSlash className='mb-1' />
            </button>
          }
        </div>


        {/* =================================================================================== */}
        {/* =====[    Main Prg /CARD BODY start            ]===================================  */}
        {/* =================================================================================== */}
        <div className="card-body d-flex flex-column p-0 mt-1 gap-1">

          {/* -=-=-=-=-=-=-=-=-=-=-=-=-=-= [        ROW  1/2       ]-=-=-=-=-=-=-=-=-=-=-=-=-=-= */}

          <div className="d-flex p-0 gap-1 m-0 justify-content-between ">
            {/* ----------------------- [        ROW  1/2,  Col 1/3       ]----------------------------------- */}
            <div className="card p-1" style={{ width: "40%" }} >
              <div className='card-header py-1 mb-2 ' >

                {/* ---[ Input ID ]--- */}
                <div className="d-flex  align-items-center text-primary" style={{ width: '75%' }} >
                  <div className="input-group-text  text-primary fs-4" style={{ padding: '8px 8px' }} ><ImListNumbered /></div>
                  <div className="form-floating"  >
                    <input type="text" value={Id} name="Id" className="form-control  text-end" placeholder="ID"
                      readOnly={true} onChange={(e) => HandleInputs(e)} />
                    <label htmlFor="Id"  >Ref Id</label>
                  </div>
                </div>
              </div>

              {/* ---[ Input Code ]--- */}
              <div className="d-flex mt-2">  {/* <div className="input-group"> */}
                <div className="input-group-text"><TbListDetails /></div>
                <div className="form-floating w-100" >
                  <input type="text" value={Code} className="form-control  text-end" name='Code' placeholder="Code" onChange={(e) => HandleInputs(e)} />
                  <label htmlFor="Code"  >Code</label>
                </div>
              </div>

              {/* ---[ Input Title ]--- */}
              <div className="d-flex mt-3">  {/* <div className="input-group"> */}
                <div className="input-group-text"><TbListDetails /></div>
                <div className="form-floating w-100" >
                  <input type="text" value={Title} className="form-control  text-end" name='Title' placeholder="Title" onChange={(e) => HandleInputs(e)} />
                  <label htmlFor="Title"  >Title</label>
                </div>
              </div>

              {/* ---[ Select Category ]--- */}
              <div className="d-flex  mt-2">  {/* <div className="input-group"> */}
                <div className="input-group-text"><TbIcons /></div>
                <div className="form-floating w-100" >
                  {/* <input type="text" value={Cat.Code} className="form-control  text-end" name='Cat' id='Cat' placeholder="Account Title" readOnly={InputReadOnly} onChange={(e) => HandleInputs4M(e)} /> */}
                  <select className="form-control ps-2 pb-0 pt-3 text-end"
                    value={CatCode ? CatCode : HandleDefaultCat()}
                    name="CatCode" placeholder="Procedure Type"
                    // disabled={InputReadOnly}
                    onChange={(e) => {
                      // console.log(e.target.name, e.target.value);
                      HandleInputs(e)
                      // setRec4M({ ...OrderSheet, Cat: { ...Cat, Code: e.target.value } })
                    }}  >
                    {Categories
                      ? Categories.map((E, I) => {
                        return (<option key={E.Code} value={E.Code} >{E.Title} </option>)
                      })
                      : ''
                    }

                  </select>

                  <label htmlFor="CatCode"  >Procedure Type</label>
                </div>
              </div>

            </div>

            {/* ----------------------- [        ROW  1/2,  Col 2/3       ]----------------------------------- */}
            <div className="card p-1" style={{ width: "40%" }} >

              {/* ---[ Input Desc ]--- */}
              <div className="d-flex mt-3">  {/* <div className="input-group"> */}
                <div className="input-group-text"><GrTextAlignFull /></div>
                <div className="form-floating w-100" >
                  <input type="text" value={Desc} className="form-control  text-end" name='Desc' placeholder="Desc" onChange={(e) => HandleInputs(e)} />
                  <label htmlFor="Desc"  >Description</label>
                </div>
              </div>

              {/* ---[ Input Remarks ]--- */}
              <div className="d-flex mt-1">  {/* <div className="input-group"> */}
                <div className="input-group-text"><TbTextWrapDisabled /></div>
                <div className="form-floating w-100" >
                  <input type="text" value={Rem} className="form-control  text-end" name='Rem' placeholder="Rem" onChange={(e) => HandleInputs(e)} />
                  <label htmlFor="Rem"  >Remarks</label>
                </div>
              </div>

              {/* BLOCK -- Staus Priority */}
              <div className="d-flex gap-1 mt-2">
                {/* ---[ Input Status ]--- */}
                <div className="d-flex mt-0 w-50">  {/* <div className="input-group"> */}
                  <div className="input-group-text"><HiStatusOffline /></div>
                  <div className="form-floating w-100" >
                    <input type="text" value={RecStatus} className="form-control  text-end" name='RecStatus' placeholder="RecStatus" onChange={(e) => HandleInputs(e)} />
                    <label htmlFor="RecStatus"  >Status</label>
                  </div>
                </div>

                {/* ---[ Input Priority ]--- */}
                <div className="d-flex mt-0 w-50">  {/* <div className="input-group"> */}
                  <div className="input-group-text"><MdLowPriority /></div>
                  <div className="form-floating w-100" >
                    <input type="text" value={Priority} className="form-control  text-end" name='Priority' placeholder="Priority" onChange={(e) => HandleInputs(e)} />
                    <label htmlFor="Priority"  >Priority</label>
                  </div>
                </div>
              </div>


            </div>

            {/* ----------------------- [        ROW  1/2,  Col 3/3       ]----------------------------------- */}
            <div className="card p-1" style={{ width: "20%" }} >

              <div className="card p-1"  >

                <div className=' d-flex justify-content-between align-items-center' style={{ height: '30px' }}>
                  <label htmlFor='inputPhoto' id='SelectPhoto' className='btn btn-info m-0 p-0 btn-sm' >
                    Select Photo
                  </label>

                  {/* {(selectedImage) && <label className=' m-0 p-0 fs-3 text-danger'
                      onClick={() => { setSelectedImage(null); setImgURL(null) }}> <FiDelete /> */}
                  {(OrderSheet.PicURL || OrderSheet.Pic) && <label className=' m-0 p-0 fs-3 text-danger'
                    // onClick={() => { setOrderSheet({ ...OrderSheet, PicURL: '' }); setImgURL(null) }}> <FiDelete />
                    onClick={() => {
                      (OrderSheet.Pic)
                        ? setOrderSheet({ ...OrderSheet, Pic: '', PicURL: '' })
                        : setOrderSheet({ ...OrderSheet, PicURL: '' })
                    }}>
                    <FiDelete />
                  </label>}
                </div>

                {/* -----Photo Section------  */}
                <div className='d-flex  mt-3 flex-column justify-content-center align-items-center '>

                  {/* <input type="file" name="inputPhoto" id='inputPhoto' */}
                  <input type="file" hidden name="inputPhoto" id='inputPhoto'
                    onChange={(event) => {
                      console.log(event.target.files[0]);
                      // setImgURL(URL.createObjectURL(event.target.files[0]))
                      // setOrderSheet({ ...OrderSheet, PicURL: event.target.files[0].name, pic: URL.createObjectURL(event.target.files[0]) });
                      // setOrderSheet({ ...OrderSheet, PicURL: event.target.files[0].name, Pic: event.target.files[0] });
                      setOrderSheet({ ...OrderSheet, Pic: event.target.files[0] });
                    }} />

                  {/* Working {selectedImage4E &&<img src={URL.createObjectURL(selectedImage4E)} alt="not found" width={"200px"} />} */}
                  {/* {<img src={(OrderSheet.PicURL) ? ImgURL : DefaultImgURL} alt="Image not found" width={"100%"} />} */}

                  {/* {<img src={(OrderSheet.PicURL) ? URL.createObjectURL(OrderSheet.Pic) : DefaultImgURL} alt="Image not found" width={"100%"} />} */}
                  {/* {OrderSheet.PicURL} */}

                  {<img alt="Pic not found" width={"100%"}
                    src={(OrderSheet.Pic)
                      ? URL.createObjectURL(OrderSheet.Pic)
                      : (OrderSheet.PicURL)
                        ? process.env.REACT_APP_API_URL + 'Procedures/GetFile/' + OrderSheet.PicURL
                        : DefaultImgURL} />}

                </div>

              </div>
            </div>

          </div>
          {/* END     -=-=-=-=-=-=-=-=-=-=-=-=-=-= [        ROW  1/2       ]-=-=-=-=-=-=-=-=-=-=-=-=-=-= */}

          {/* -=-=-=-=-=-=-=-=-=-=-=-=-=-= [        ROW  1/2       ]-=-=-=-=-=-=-=-=-=-=-=-=-=-= */}
          <div className="d-flex p-0 gap-1 m-0 justify-content-evenly ">

            {/* ----------------------- [        ROW  2/2,  Col 1/2       ]----------------------------------- */}
            <div className="card p-2" style={{ width: "33%" }} >

              {/* ---[ Input Price ]--- */}
              <div className="d-flex mt-0">  {/* <div className="input-group"> */}
                <div className="input-group-text"><GiPriceTag /></div>
                <div className="form-floating w-100" >
                  <input type="text" value={Price} className="form-control  text-end" name='Price' placeholder="Price" onChange={(e) => HandleInputs(e)} onFocus={handleFocus} />
                  <label htmlFor="Price"  >Charges Single Eye</label>
                </div>
              </div>

              {/* ---[ Input Price ]--- */}
              <div className="d-flex mt-0">  {/* <div className="input-group"> */}
                <div className="input-group-text"><GiPriceTag /></div>
                <div className="form-floating w-100" >
                  <input type="text" value={Price2} className="form-control  text-end" name='Price2' placeholder="Price" onChange={(e) => HandleInputs(e)} onFocus={handleFocus} />
                  <label htmlFor="Price2"  >Charges Both Eyes</label>
                </div>
              </div>


              {/* ---[ Input Unit ]--- */}
              <div className="d-flex mt-2">  {/* <div className="input-group"> */}
                <div className="input-group-text"><GiWeight /></div>
                <div className="form-floating w-100" >
                  <input type="text" value={Unit} className="form-control  text-end" name='Unit' placeholder="Unit" onChange={(e) => HandleInputs(e)} onFocus={handleFocus} />
                  <label htmlFor="Unit"  >Unit</label>
                </div>
              </div>

            </div>

            {/* ----------------------- [        ROW  2/2,  Col 2/2       ]----------------------------------- */}

            <div className="card p-2" style={{ width: "50%" }} >

              {/* Block Share and Rs/% */}
              <div className="d-flex mt-0 w-100 gap-2" >

                {/* ---[ Input ShareRef ]--- */}
                <div className="d-flex mt-0 w-50">
                  <div className="input-group-text"><GiPriceTag /></div>
                  <div className="form-floating w-100" >
                    <input type="text" value={ShareRef} className="form-control  text-end" name='ShareRef' placeholder="ShareRef" onChange={(e) => HandleInputs(e)} onFocus={handleFocus} />
                    <label htmlFor="ShareRef"  >Share Referral</label>
                  </div>
                </div>


                {/* ---[ Select IsShareRefPerCent ]--- */}
                <div className="d-flex  mt-0 w-50">  {/* <div className="input-group"> */}
                  <div className="input-group-text"><TbIcons /></div>
                  <div className="form-floating w-100" >
                    {/* <input type="text" value={Cat.Code} className="form-control  text-end" name='Cat' id='Cat' placeholder="Account Title" readOnly={InputReadOnly} onChange={(e) => HandleInputs4M(e)} /> */}
                    <select className="form-control ps-2 pb-0 pt-3 text-end"
                      value={IsShareRefPerCent ? IsShareRefPerCent : 0}
                      name="IsShareRefPerCent" placeholder="IsShareRefPerCent"
                      // disabled={InputReadOnly}
                      onChange={(e) => {
                        // console.log(e.target.name, e.target.value);
                        HandleInputs(e)
                        // setRec4M({ ...OrderSheet, Cat: { ...Cat, Code: e.target.value } })
                      }}  >
                      <option value={0} >{'Rs -- Rupees'} </option>
                      <option value={1} >{'%  -- Per Cent'} </option>
                    </select>

                    <label htmlFor="IsShareRefPerCent"  >Share Value in:</label>
                  </div>
                </div>
                {/* END ---[ Select IsShareRefPerCent ]--- */}

              </div>

              {/* Block Share and Rs/% */}
              <div className="d-flex mt-2 w-100 gap-2">

                {/* ---[ Input ShareDoc ]--- */}
                <div className="d-flex mt-0 w-50">  {/* <div className="input-group"> */}
                  <div className="input-group-text"><GiPriceTag /></div>
                  <div className="form-floating w-100" >
                    <input type="text" value={ShareDoc} className="form-control  text-end" name='ShareDoc' placeholder="ShareDoc" onChange={(e) => HandleInputs(e)} onFocus={handleFocus} />
                    <label htmlFor="ShareDoc"  >Share Consultant</label>
                  </div>
                </div>

                {/* ---[ Select IsShareDocPerCent ]--- */}
                <div className="d-flex mt-0 w-50">  {/* <div className="input-group"> */}
                  <div className="input-group-text"><TbIcons /></div>
                  <div className="form-floating w-100" >
                    {/* <input type="text" value={Cat.Code} className="form-control  text-end" name='Cat' id='Cat' placeholder="Account Title" readOnly={InputReadOnly} onChange={(e) => HandleInputs4M(e)} /> */}
                    <select className="form-control ps-2 pb-0 pt-3 text-end"
                      value={IsShareDocPerCent ? IsShareDocPerCent : 0}
                      name="IsShareDocPerCent" placeholder="IsShareDocPerCent"
                      // disabled={InputReadOnly}
                      onChange={(e) => {
                        // console.log(e.target.name, e.target.value);
                        HandleInputs(e)
                        // setRec4M({ ...OrderSheet, Cat: { ...Cat, Code: e.target.value } })
                      }}  >
                      <option value={0} >{'Rs -- Rupees'} </option>
                      <option value={1} >{'%  -- Per Cent'} </option>
                    </select>

                    <label htmlFor="IsShareDocPerCent"  >Share Value in:</label>
                  </div>
                </div>
                {/* END ---[ Select IsShareDocPerCent ]--- */}

              </div>
            </div>

            {/* ---- [   END OF VOUCHER INPUT DETAIL  ]----------------------------------- */}
          </div>

        </div>  {/* END- Card Body Ends Here */}



        {/* =================================================================================== */}
        {/* =====[    END   --- Main Prg /CARD BODY            ]===================================  */}
        {/* =================================================================================== */}
      </div> {/* END- Main Card Ends Here */}






      {/* ==========Start===========  MODAL for Deletion =========================*/}
      {/* ========================================================================*/}
      <div>

        {/* Button trigger modal */}
        {/* <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Launch demo modal
        </button> */}

        {/* Modal */}
        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Delete This Record ?</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <div className="modal-body d-flex justify-content-center ">
                {/* ....................... */}
                <div>
                  <table><tbody>
                    <tr>
                      <th> <span className='fs-6 fw-bold  ' >Ref Id:  </span></th>
                      {/* <td> <span className='fs- ' > [ {OrderSheet.TId} ]   - {OrderSheet.RefTrader.Title}</span> </td> */}
                      {/* {OrderSheet.RefTrader.Title && <td> <span className='fs- ' > [ {OrderSheet.RefTrader.Code} ]   - {OrderSheet.RefTrader.Title}</span> </td>} */}
                      <td> <span className='fs- ' > {OrderSheet.Id} </span> </td>
                    </tr>

                    <tr>
                      <th> <span className='fs-6 fw-bold fs- ' >Title:  </span></th>
                      {/* {OrderSheet.AccC[0].Title && <td> <span className='fs- ' > {OrderSheet.AccC[0].Title}   </span> </td>} */}
                      <td> <span className='fs- ' > {OrderSheet.Title}   </span> </td>
                    </tr>

                    <tr>
                      <th> <span className='fs-6 fw-bold  ' >Description:  </span></th>
                      <td> <span className='fs- ' > {OrderSheet.Desc}   </span> </td>
                    </tr>
                  </tbody></table>
                </div>

                {/* ....................... */}
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">No. Do Not Delete</button>
                <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={() => { HandleBtnDelete(true) }}>Delete This Record</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ===========END==========  MODAL for Deletion =========================*/}

      <ToastContainer />
    </>
  )
}