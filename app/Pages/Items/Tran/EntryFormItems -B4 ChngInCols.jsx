import React, { useEffect, useState } from 'react'
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
import { GrTextAlignFull } from 'react-icons/gr'

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

// ==================[  useContext and useReducer Hooks  ]=====================


// \/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/
//                                  P R G  ---   START
// \/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/
export default function EntryFormItems(props) {
  //destructuring    props

  // const { VoucherMode, CrntRec, Categories, HandleInputs, HandleInputsMode, HandleBtnVoucherMode} = props
  const { VoucherMode, CrntRec, Categories, Suppliers, HandleBtnVoucherMode } = props

  const [OrderSheet, setOrderSheet] = useState(CrntRec ? CrntRec : '')
  const [Need2Refresh, setNeed2Refresh] = useState(false);

  // const [selectedImage, setSelectedImage] = useState(null);
  // const [ImgURL, setImgURL] = useState('')
  const DefaultImgURL = require('../AssetsLocal/Images/Default.jpg')


  const PrgID = '1311'
  const VCat = '1311'

  //const { Code, RecStatus, Cat, Title, TitleU, TCode, Priority, Pic, PicURL, Unit, QtyDef, QtyInc, QtyStep, Price, Desc, Rem, PreBal, CrntBal, QtyMin, QtyMax } = OrderSheet
  const { Id, Code, RecType, RecStatus, Priority, Title, TitleU, Desc, Rem, CatCode, TId, Pic, PicURL, Unit, Price, QtyDef, QtyInc, QtyStep, QtyMin, QtyMax, PreBal, CrntBal } = OrderSheet

  // const [VoucherCart, setVoucherCart] = useState(CrntRec ? CrntRec : RecDefault4M)
  // { VItems: [], VDte: new Date().toDateString(), VNo: 'xxx', VCat: '31', VDesc: '', TCode: 'SAB', VAmt: -9, VQty: -9 })

  // const [VoucherCart, setVoucherCart] = useState({ VItems:iniRec.VItems, VDte:iniRec.VDte, VNo:iniRec.VNo, VDesc: '', TCode: 'SAB', VAmt: -9, VQty: -9 })

  useEffect(() => {
    // if (!VoucherMode ) { alert('Empty VoucherMode- trying to return'); return }
    // console.log('Rcvd CrntRec', CrntRec)
    // DispRecInAlert(CrntRec,'Rcvd CrntRec')

    // if (CrntRec) {    AlertRec (CrntRec, 'crntRec');setOrderSheet(CrntRec)}
    setOrderSheet(CrntRec)
    // document.getElementById('SelectPhoto').focus();
  }, [Need2Refresh]);



  // ==================[  Fn: Handle Inputs  ]=====================

  const handleFocus = (event) => event.target.select();
  const Input = (props) => <input type="text" value="Some something" onFocus={handleFocus} />

  const HandleInputs = (e) => {
    // let key = '', value = '';
    // console.log('Input Done:', e.target.name, e.target.value);
    // alert(e.target.name + '  ' + e.target.value)
    // key = e.target.name; value = e.target.value;

    setOrderSheet({ ...OrderSheet, [e.target.name]: e.target.value });
  }


  // ==============================================================
  //CLEAR Rec is clicked
  //   const HandleBtnClear = () => { alert('Clear pressed'); setRec4M(RecDefault4M) }
  const HandleBtnReset = () => { setNeed2Refresh(!Need2Refresh) }

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
  // ------------- Update RECORD ----------------
  // --------------------------------------------------------------------------------------------------------------------
  const CallDotAPI2SaveUpdate = async () => {
    alert('Now Saving Data for Update in Database')

    // AlertRec(VoucherCart, 'Data Ready to Send')
    // const { Code, RecStatus, Cat, Title, TitleU, TCode, Priority, Pic, PicURL, Unit, QtyDef, QtyInc, QtyStep, Price, Desc, Rem, PreBal, CrntBal, QtyMin, QtyMax } = OrderSheet
    //const { Id, Code, Title, TitleU, Desc, Rem, CatCode, TId, Pic, PicURL, Unit, Price, QtyDef, QtyInc, QtyStep, QtyMin, QtyMax, PreBal, CrntBal, RecType, RecStatus, Priority, EntryBy, EntryDte } = OrderSheet
    const { Id, Title, TitleU, Desc, Rem, CatCode, TId, Pic, PicURL, PicURL4Edit, Unit, Price, QtyDef, QtyInc, QtyStep, QtyMin, QtyMax, PreBal, CrntBal, RecType, RecStatus, Priority, EntryBy, EntryDte } = OrderSheet

    // if (!(Code)) {
    //   alert('CODE is invalid. \nPlz Check CODE entered.'); return
    // }

    if (!Categories.find(s => s.Code.trim() === CatCode.trim())) {
      alert('Category is invalid. \nPlz Reset Category entry. [ ' + CatCode + ' ]'); return
    }

    // AlertRec(Suppliers,'Suppliers')
    if (!Suppliers.find(s => s.Id === +TId)) {
      alert('Supplier is invalid. \nPlz Reset Supplier entry. [ ' + TId + ' ]'); return
    }

    if (!(Title || TitleU)) {
      alert('Titles are invalid. \nPlz Check Title entries.'); return
    }

    const Data2SendInDatabase = {
      "Id": Id,

      "RecType": RecType.substr(0, 10),         //RecType.Substring(0, Math.min(RecType.Length, 10)) ,
      "RecStatus": RecStatus.substr(0, 10),
      "Priority": Priority.substr(0, 10),

      "Title": Title.substr(0, 50),
      "TitleU": TitleU.substr(0, 50),
      "Desc": Desc.substr(0, 50),
      "Rem": Rem.substr(0, 50),

      "CatCode": CatCode,
      "TId": TId,
      // "Pic": Pic,

      "PicURL": PicURL,

      "Unit": Unit.substr(0, 10),
      "QtyDef": QtyDef,
      "QtyInc": QtyInc,
      "QtyStep": QtyStep,
      "QtyMin": QtyMin,
      "QtyMax": QtyMax,
      "Price": Price,

      "PreBal": PreBal,
      "CrntBal": CrntBal,

      "EntryBy": "xUSERx",
      "EntryDte": new Date()
    }

    if (!AlertConfirm(Data2SendInDatabase, 'Record Ready to Update? ')) return

    //[ Part -1/2 >>> Image uploading ]
    if (Pic) {
      // alert('Yes Image is present for Update')

      // Data2SendInDatabase.PicURL= PicURL4Edit ? PicURL4Edit  : Title.replace(/ /g, '').substr(0, 10) + DateTimeStamp() + '.png' 
      Data2SendInDatabase.PicURL=  Title.replace(/ /g, '').substr(0, 10) + DateTimeStamp() + '.png' 

      const formData = new FormData();
      //     // formData.append('username', 'Chris');
      //     // formData.append('userpic', myFileInput.files[0], 'chris1.jpg');
      // for (let [key, value] of fd.entries()) { console.log(key, value);}
      formData.append("ImageFile", Pic, Data2SendInDatabase.PicURL);

      fetch(process.env.REACT_APP_API_URL + 'Item/SaveFile', { method: 'POST', body: formData })
        .then(res => res.json())
        .then((result) => {
          alert('Photo Successfully Saved: ' + Data2SendInDatabase.PicURL + '\n' + "Response: " + result)
          //setImageSrc('')

          // GetRecs() //Update Fresh Records
        }, (error) => { alert('ERROR--- Photo Uploading is Failed: ' + Data2SendInDatabase.PicURL); Data2SendInDatabase.PicURL = '' })
    }

      if((!PicURL && PicURL4Edit)||(Pic && PicURL4Edit)) {
        //Name Removed && Old-Still-present then Remove Image of Old-Still-present name
        //Destroy Old Image [ Part ----- >>> Delete Image ]

        fetch(process.env.REACT_APP_API_URL + 'Item/RemoveFile/' + PicURL4Edit, { method: 'DELETE' })
          .then(res =>  res.json() )
          .then((result) => {
            console.log('result: ', result);
            alert('DELETE Old-Photo Action Success-Result: ' + result);
          }
            , (error) => { alert('ERROR--- DELETE Photo Action Result: ' + 'Failed'); })
          }
        

    //[ Part -2/2 >>> Data uploading ]
    //=====[   READY to send data in Database   ]========  
    //-------------------------------------------------------
    fetch(process.env.REACT_APP_API_URL + `Item/${Id}`, {
      method: 'PUT',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify(Data2SendInDatabase)
    })
      .then(res => res.json())
      .then((result) => {
        alert('Update Action Success-Result: ' + result);
        // GetRecs()
      }
        , (error) => { alert('ERROR--- Update Action Result: ' + 'Failed'); })


    //History.push("/Home");
    // setNeed2Refresh4M(!Need2Refresh4M)
    HandleBtnCancel(true)
  }

  // const CallAPI2SaveUpdate = async () => {
  //   alert('Now Saving Data for Update in Database')

  //   // AlertRec(VoucherCart, 'Data Ready to Send')
  //   // const { Code, RecStatus, Cat, Title, TitleU, TCode, Priority, Pic, PicURL, Unit, QtyDef, QtyInc, QtyStep, Price, Desc, Rem, PreBal, CrntBal, QtyMin, QtyMax } = OrderSheet
  //   const { Id, Code, Title, TitleU, Desc, Rem, CatCode, TId, Pic, PicURL, Unit, Price, QtyDef, QtyInc, QtyStep, QtyMin, QtyMax, PreBal, CrntBal, RecType, RecStatus, Priority, EntryBy, EntryDte } = OrderSheet

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
  //   //   "PreBal": PreBal,
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
  //   formData.append("PreBal", PreBal === null ? 0 : PreBal)
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
  //   // const res = await fetch(`/api/Item/${Vid}`, {
  //   const res = await fetch(`/api/Item/${Code}`, {
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


  // --------------------------------------------------------------------------------------------------------------------
  // ------------- AddNew/Create RECORD ----------------
  // --------------------------------------------------------------------------------------------------------------------

  const CallDotAPI2SaveAddNew = async () => {
    // AlertRec(VoucherCart, 'Data Ready to Send')
    // const { Code, RecStatus, CatCode, Title, TitleU, TCode, Priority, Pic, PicURL, Unit, QtyDef, QtyInc, QtyStep, Price, Desc, Rem, PreBal, CrntBal, QtyMin, QtyMax } = OrderSheet
    const { Id, Title, TitleU, Desc, Rem, CatCode, TId, Pic, PicURL, PicURL4Edit, Unit, Price, QtyDef, QtyInc, QtyStep, QtyMin, QtyMax, PreBal, CrntBal, RecType, RecStatus, Priority, EntryBy, EntryDte } = OrderSheet

    // if (!(Code)) {
    //   alert('CODE is invalid. \nPlz Check CODE entered.'); return
    // }

    if (!Categories.find(c => (c.Code.trim() === CatCode.trim()))) {
      alert('Category is invalid. \nPlz Reset Category entry. [ ' + CatCode + ' ]'); return
    }

    // AlertRec(Suppliers,'Suppliers')
    if (!Suppliers.find(s => s.Id === +TId)) {
      alert('Supplier is invalid. \nPlz Reset Supplier entry. [ ' + TId + ' ]'); return
    }

    if (!(Title || TitleU)) {
      alert('Titles are invalid. \nPlz Check Title entries.'); return
    }

    const Data2SendInDatabase = {
      "Id": 0,

      "RecType": RecType.substr(0, 10),         //RecType.Substring(0, Math.min(RecType.Length, 10)) ,
      "RecStatus": RecStatus.substr(0, 10),
      "Priority": Priority.substr(0, 10),

      "Title": Title.substr(0, 50),
      "TitleU": TitleU.substr(0, 50),
      "Desc": Desc.substr(0, 50),
      "Rem": Rem.substr(0, 50),

      "CatCode": CatCode,
      "TId": TId,
      // "Pic": Pic,
      // "PicURL": (Pic ? Title.trim().substr(0, Math.min(Title.trim().length, 10)) + DateTimeStamp() + '.png': ''),      
      "PicURL": (Pic ? Title.replace(/ /g, '').substr(0, 10) + DateTimeStamp() + '.png' : ''),

      "Unit": Unit.substr(0, 10),
      "QtyDef": QtyDef,
      "QtyInc": QtyInc,
      "QtyStep": QtyStep,
      "QtyMin": QtyMin,
      "QtyMax": QtyMax,
      "Price": Price,

      "PreBal": PreBal,
      "CrntBal": CrntBal,

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


    //..........................
    // axios.post('http://localhost:5000/api/Item',fd)
    // const res = await fetch('/save', {


    //[ Part -1/2 >>> Image uploading ]
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

      fetch(process.env.REACT_APP_API_URL + 'Item/SaveFile', { method: 'POST', body: formData })
        .then(res => res.json())
        .then((result) => {
          // alert('Photo Successfully Saved: ' + Data2SendInDatabase.PicURL + '\n' + "Response: " + result)
          //setImageSrc('')

          // GetRecs() //Update Fresh Records
        }, (error) => { alert('ERROR--- Photo Uploading is Failed: ' + Data2SendInDatabase.PicURL); Data2SendInDatabase.PicURL = '' })
    }

    //[ Part -2/2 >>> Data uploading ]
    fetch(process.env.REACT_APP_API_URL + 'Item', {
      method: 'POST',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify(Data2SendInDatabase)
    })
      .then(res => res.json())
      .then((result) => {
        // alert('Add-New Action Success-Result: ' + result);

        // GetRecs() //Update Fresh Records
      }
        , (error) => { alert('ERROR--- Add-New Action Result: ' + 'Failed'); })

    //     //History.push("/Home");

    // alert('Data is Sent in Database')
    // setNeed2Refresh4M(!Need2Refresh4M)
    HandleBtnCancel(true)
  }

  //  const CallAPI2SaveAddNew = async () => {
  //     // AlertRec(VoucherCart, 'Data Ready to Send')
  //     const { Code, RecStatus, Cat, Title, TitleU, TId, Priority, Pic, PicURL, Unit, QtyDef, QtyInc, QtyStep, Price, Desc, Rem, PreBal, CrntBal, QtyMin, QtyMax } = OrderSheet

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
  //     //   "PreBal": PreBal,
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
  //     formData.append("PreBal", PreBal === null ? 0 : PreBal)
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

    const { Id, PicURL, PicURL4Edit } = OrderSheet

    //===================================================  
    //=====[   READY to Delete data from Database   ]========  
    //===================================================  



        //Destroy Old Image [ Part 1 ----- >>> Delete Image ]
if (PicURL4Edit){
        fetch(process.env.REACT_APP_API_URL + 'Item/RemoveFile/' + PicURL4Edit, { method: 'DELETE' })
          .then(res =>  res.json() )
          .then((result) => {
            console.log('result: ', result);
            alert('DELETE Old-Photo Action Success-Result: ' + result);
          }
            , (error) => { alert('ERROR--- DELETE Photo Action Result: ' + 'Failed'); })
          }

        
    //[ Part -2/2 >>> Data uploading ]
    //=====[   READY to send data in Database   ]========  
    //-------------------------------------------------------
    fetch(process.env.REACT_APP_API_URL + `Item/${Id}`, {
      method: 'DELETE',
    })
      .then(res => res.json())
      .then((result) => {
        alert('DELETE Action Success-Result: ' + result);
        // GetRecs()
      }
      , (error) => { alert('ERROR--- DELETE Action Result: ' + 'Failed'); })


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
        <div className='card-header d-flex gap-2 mb-1 justify-content-between '>
          <span className='fs-6'><strong>Kitchen Item Detail</strong></span>

          <button className='btn btn-sm btn-warning pt-0  ms-auto' style={{ height: '25px' }} onClick={() => { HandleBtnReset() }}>
            Reset Changes  <TbWiperWash />
          </button>
          <button className='btn btn-sm btn-success py-0' style={{ height: '25px' }} onClick={(e) => { HandleBtnSave(e) }} type="submit" >
            Save {(VoucherMode === 'Edit') ? 'Changes ' : 'Record'} <FaSave className='mb-1' />
          </button>
          {(VoucherMode === 'Edit') &&
            <button className='btn btn-sm btn-danger py-0' style={{ height: '25px' }}
              data-bs-toggle="modal" data-bs-target="#exampleModal">
              {/* onClick={() => { HandleBtnDelete(true) }}> */}
              Delete Record <FaUserSlash className='mb-1' />
            </button>
          }
        </div>

        {/* =================================================================================== */}
        {/* =====[    Main Prg /CARD BODY start            ]===================================  */}
        {/* =================================================================================== */}
        <div className="card-body d-flex p-1 gap-1 mb-1 justify-content-between ">

          {/* ----------------------- [        Col 1/4       ]----------------------------------- */}
          <div className="card p-1" style={{ width: "30%" }} >

            <div className='card-header my-1 d-flex gap-1 ' style={{ height: '60px' }}>

              {/* ---[ Input Code ]--- */}
              <div className="d-flex  align-items-center text-primary" style={{ width: '75%' }} >
                <div className="input-group-text  text-primary fs-4" style={{ padding: '8px 8px' }} ><ImListNumbered /></div>
                <div className="form-floating"  >
                  <input type="text" value={Id} name="Id" className="form-control  text-end" placeholder="Code" onChange={(e) => HandleInputs(e)} />
                  <label htmlFor="Id"  >Code</label>
                </div>
              </div>

            </div>

            <div className="card-body p-1">

              {/* ---[ Input Title ]--- */}
              <div className="d-flex mb-1">  {/* <div className="input-group"> */}
                <div className="input-group-text"><TbListDetails /></div>
                <div className="form-floating w-100" >
                  <input type="text" value={Title} className="form-control  text-end" name='Title' placeholder="Title" onChange={(e) => HandleInputs(e)} />
                  <label htmlFor="Title"  >Title</label>
                </div>
              </div>

              {/* ---[ Input TitleU ]--- */}
              <div className="d-flex mb-1">  {/* <div className="input-group"> */}
                <div className="input-group-text"><TbListDetails /></div>
                <div className="form-floating w-100" >
                  <input type="text" value={TitleU} className="form-control fs-4 text-end" name='TitleU' placeholder="Title" onChange={(e) => HandleInputs(e)} />
                  <label htmlFor="TitleU"  >TitleU</label>
                </div>
              </div>

              {/* ---[ Select Category ]--- */}
              <div className="d-flex mb-1 mt-3">  {/* <div className="input-group"> */}
                <div className="input-group-text"><TbIcons /></div>
                <div className="form-floating w-100" >
                  {/* <input type="text" value={Cat.Code} className="form-control  text-end" name='Cat' id='Cat' placeholder="Account Title" readOnly={InputReadOnly} onChange={(e) => HandleInputs4M(e)} /> */}
                  <select value={CatCode} className="form-control ps-2 pb-0 pt-3 text-end"
                    name="CatCode" placeholder="Category"
                    // disabled={InputReadOnly}
                    onChange={(e) => {
                      console.log(e.target.name, e.target.value);
                      HandleInputs(e)
                      // setRec4M({ ...OrderSheet, Cat: { ...Cat, Code: e.target.value } })
                    }}  >
                    {Categories
                      ? Categories.map((E, I) => {
                        return (<option key={E.Code} value={E.Code.trim()} >[{E.Code}] - {E.Title} </option>)
                      })
                      : ''
                    }

                  </select>

                  <label htmlFor="CatCode"  >Category</label>
                </div>
              </div>


              {/* ---[ Select Trader Code ]--- */}
              <div className="d-flex mb-1">  {/* <div className="input-group"> */}
                <div className="input-group-text"><FaRegAddressCard /></div>
                <div className="form-floating w-100" >
                  {/* <input type="text" value={TCode.Code} className="form-control  text-end" name='TCode' id='TCode' placeholder="Account Title" readOnly={InputReadOnly} onChange={(e) => HandleInputs4M(e)} /> */}

                  <select value={TId} className="form-control ps-2 pb-0 pt-3  text-end"
                    name="TId" placeholder="TCodeegory"
                    // disabled={InputReadOnly}
                    onChange={(e) => {
                      console.log(e.target.name, e.target.value);
                      HandleInputs(e)
                      // setRec4M({ ...OrderSheet, TId: { ...TId, Code: e.target.value } })
                    }}  >
                    {Suppliers
                      ? Suppliers.map((E, I) => {
                        return (<option key={E.Id} value={E.Id} >[{E.Code}] - {E.Title} </option>)
                      })
                      : ''
                    }

                  </select>

                  <label htmlFor="TId"  >Supplier</label>
                </div>
              </div>


              {/* ---[ Input Desc ]--- */}
              <div className="d-flex mb-1 mt-3">  {/* <div className="input-group"> */}
                <div className="input-group-text"><GrTextAlignFull /></div>
                <div className="form-floating w-100" >
                  <input type="text" value={Desc} className="form-control  text-end" name='Desc' placeholder="Desc" onChange={(e) => HandleInputs(e)} />
                  <label htmlFor="Desc"  >Description</label>
                </div>
              </div>

              {/* ---[ Input Remarks ]--- */}
              <div className="d-flex mb-1">  {/* <div className="input-group"> */}
                <div className="input-group-text"><TbTextWrapDisabled /></div>
                <div className="form-floating w-100" >
                  <input type="text" value={Rem} className="form-control  text-end" name='Rem' placeholder="Rem" onChange={(e) => HandleInputs(e)} />
                  <label htmlFor="Rem"  >Remarks</label>
                </div>
              </div>


            </div>
          </div>

          {/* ----------------------- [        Col 2/4       ]----------------------------------- */}
          <div className="card p-1" style={{ width: "25%" }} >

            {/* ---[ Input Status ]--- */}
            <div className="d-flex my-1">  {/* <div className="input-group"> */}
              <div className="input-group-text"><HiStatusOffline /></div>
              <div className="form-floating w-100" >
                <input type="text" value={RecStatus} className="form-control  text-end" name='RecStatus' placeholder="RecStatus" onChange={(e) => HandleInputs(e)} />
                <label htmlFor="RecStatus"  >Item Status</label>
              </div>
            </div>

            {/* ---[ Input Priority ]--- */}
            <div className="d-flex mb-1">  {/* <div className="input-group"> */}
              <div className="input-group-text"><MdLowPriority /></div>
              <div className="form-floating w-100" >
                <input type="text" value={Priority} className="form-control  text-end" name='Priority' placeholder="Priority" onChange={(e) => HandleInputs(e)} />
                <label htmlFor="Priority"  >Priority</label>
              </div>
            </div>

            {/* ---[ Input Price ]--- */}
            <div className="d-flex mb-1 mt-3">  {/* <div className="input-group"> */}
              <div className="input-group-text"><GiPriceTag /></div>
              <div className="form-floating w-100" >
                <input type="text" value={Price} className="form-control  text-end" name='Price' placeholder="Price" onChange={(e) => HandleInputs(e)} onFocus={handleFocus} />
                <label htmlFor="Price"  >Price</label>
              </div>
            </div>

            {/* ---[ Input Unit ]--- */}
            <div className="d-flex mb-1">  {/* <div className="input-group"> */}
              <div className="input-group-text"><GiWeight /></div>
              <div className="form-floating w-100" >
                <input type="text" value={Unit} className="form-control  text-end" name='Unit' placeholder="Unit" onChange={(e) => HandleInputs(e)} onFocus={handleFocus} />
                <label htmlFor="Unit"  >Unit</label>
              </div>
            </div>

            {/* ---[ Input PreBal ]--- */}
            <div className="d-flex mb-1 mt-3">  {/* <div className="input-group"> */}
              <div className="input-group-text"><FaEnvelopeOpenText /></div>
              <div className="form-floating w-100" >
                <input type="text" value={PreBal} className="form-control  text-end" name='PreBal' placeholder="PreBal" onChange={(e) => HandleInputs(e)} onFocus={handleFocus} />
                <label htmlFor="PreBal"  >Opening Stock</label>
              </div>
            </div>

            {/* ---[ Current Balance CrntBal ]--- */}
            <div className="d-flex mb-1">  {/* <div className="input-group"> */}
              <div className="input-group-text"><FaRegMoneyBillAlt /></div>
              <div className="form-floating w-100" >
                <input type="text" value={CrntBal} className="form-control text-end" name='CrntBal' placeholder="QtyMax" onChange={(e) => HandleInputs(e)} onFocus={handleFocus} />
                <label htmlFor="CrntBal"  >Current Stock Balance</label>
              </div>
            </div>

          </div>

          {/* ----------------------- [        Col 3/4       ]----------------------------------- */}
          <div className="card p-1" style={{ width: "25%" }} >

            {/* ---[ Input QtyDef ]--- */}
            <div className="d-flex my-1">  {/* <div className="input-group"> */}
              <div className="input-group-text"><HiOutlineArrowDownTray /></div>
              <div className="form-floating w-100" >
                <input type="text" value={QtyDef} className="form-control text-end" name='QtyDef' placeholder="QtyDef" onChange={(e) => HandleInputs(e)} onFocus={handleFocus} />
                <label htmlFor="QtyDef"  >Normal Cart Qty</label>
              </div>
            </div>

            {/* ---[ Input QtyInc ]--- */}
            <div className="d-flex mb-1">  {/* <div className="input-group"> */}
              <div className="input-group-text"><HiOutlineArrowUpOnSquare /></div>
              <div className="form-floating w-100" >
                <input type="text" value={QtyInc} className="form-control text-end" name='QtyInc' placeholder="QtyInc" onChange={(e) => HandleInputs(e)} onFocus={handleFocus} />
                <label htmlFor="QtyInc"  >Increase in Qty</label>
              </div>
            </div>

            {/* ---[ Input QtyStep ]--- */}
            <div className="d-flex mb-1">  {/* <div className="input-group"> */}
              <div className="input-group-text"><HiOutlineArrowUpOnSquareStack /></div>
              <div className="form-floating w-100" >
                <input type="text" value={QtyStep} className="form-control text-end" name='QtyStep' placeholder="QtyStep" onChange={(e) => HandleInputs(e)} onFocus={handleFocus} />
                <label htmlFor="QtyStep"  >Step in Increase</label>
              </div>
            </div>

            {/* ---[ Input QtyMin ]--- */}
            <div className="d-flex mb-1 mt-3">  {/* <div className="input-group"> */}
              <div className="input-group-text"><TfiShoppingCart /></div>
              <div className="form-floating w-100" >
                <input type="text" value={QtyMin} className="form-control text-end" name='QtyMin' placeholder="QtyMin" onChange={(e) => HandleInputs(e)} onFocus={handleFocus} />
                <label htmlFor="QtyMin"  >Min Stock Level</label>
              </div>
            </div>

            {/* ---[ Input QtyMax ]--- */}
            <div className="d-flex mb-1">  {/* <div className="input-group"> */}
              <div className="input-group-text"><TfiShoppingCartFull /></div>
              <div className="form-floating w-100" >
                <input type="text" value={QtyMax} className="form-control text-end" name='QtyMax' placeholder="QtyMax" onChange={(e) => HandleInputs(e)} onFocus={handleFocus} />
                <label htmlFor="QtyMax"  >Max Stock Level</label>
              </div>
            </div>


          </div>
          {/* ----------------------- [        Col 4/4       ]----------------------------------- */}
          <div className="card p-1" style={{ width: "20%" }} >

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
                    ? setOrderSheet({ ...OrderSheet, Pic: '', PicURL: ''  })
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

              {<img alt="Image not found" width={"100%"}
                src={(OrderSheet.Pic)
                  ? URL.createObjectURL(OrderSheet.Pic)
                  : (OrderSheet.PicURL)
                    ? process.env.REACT_APP_API_URL + 'Item/GetFile/' + OrderSheet.PicURL
                    : DefaultImgURL} />}

            </div>

          </div>
        </div>
      </div>


      {/* ==========Start===========  MODAL for Deletion =========================*/}
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
                <h5 className="modal-title" id="exampleModalLabel">Delete This Record</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <div className="modal-body d-flex justify-content-center ">
                ...
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

    </>
  )
}