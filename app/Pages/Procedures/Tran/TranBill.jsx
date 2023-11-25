import React, { useEffect } from 'react'
import { useState } from 'react'
import Moment from 'moment'

// [START: Calls Prgs: ..................................................]
import TranBillMenuTabs from './TranBillMenuTabs.jsx'
import TranBillVoucherDetail from './TranBillVoucherDetail.jsx'

// import TranBillVoucher from '../Components/Tran/TranBillVoucher.jsx'
import { AlertRec } from '../../../../StdLib'
// import Basket from '../Components/Basket.jsx'
// import { Data } from '../SiteData/SiteData.js'
// import { NewData } from '../SiteData/SiteData.js'
// import { Data } from '../../../../AdminData/WarehouseData/KitchenData'
import { Data } from '../../../AdminData/WarehouseData/KitchenData.js'
import { Suppliers } from '../../../AdminData/SuppliersData.js'
// [END: Calls Prgs: ....................................................]

// Two files needed for datepicker
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

import ReactDatePicker from 'react-datepicker'




import { FaSave, FaUserPlus, FaUserEdit, FaUsers, FaUserCog, FaUserSlash, FaFolder } from 'react-icons/fa'
import { FcCancel } from 'react-icons/fc'

//Play, back, next, fwwd
import { FaStepBackward, FaBackward, FaForward, FaStepForward } from 'react-icons/fa'

import { TbWiperWash } from 'react-icons/tb'

import { BsSortNumericUpAlt } from 'react-icons/bs'
import { BsSortNumericDownAlt } from 'react-icons/bs'
import { FaPlus } from 'react-icons/fa'
import { FaMinus } from 'react-icons/fa'

//Mangement or Manage Records
import { TbManualGearbox } from 'react-icons/tb'

import { FcDeleteDatabase } from 'react-icons/fc'

//DEconstruct the Data from file
const { Products } = Data
const RecDefault4M = {
    // ID: '',
    VNo: -1,
    VDte: '',
    VCat: '',     //Capital Transaction Voucher
    VAmt: '',
    VQty: '',
    VItems: [],

    VDesc: '',
    TCode: '',       //Trader -- one of CustomerOrSupplier/ConsumerOrVender/

    EntryBy: '',
    EntryDte: ''
}

// \/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/
const TranBill = ({ CrntRec, AccRec4M, VoucherMode, HandleBtnVoucherMode }) => {

    // const { VItems, VDte, VNo, VDesc, TCode, VAmt, VQty } =iniRec
    const [Need2Refresh4M, setNeed2Refresh4M] = useState(false);

    const [VoucherCart, setVoucherCart] = useState(CrntRec ? CrntRec : RecDefault4M)
    // { VItems: [], VDte: new Date().toDateString(), VNo: 'xxx', VCat: '31', VDesc: '', TCode: 'SAB', VAmt: -9, VQty: -9 })

    // const [VoucherCart, setVoucherCart] = useState({ VItems:iniRec.VItems, VDte:iniRec.VDte, VNo:iniRec.VNo, VDesc: '', TCode: 'SAB', VAmt: -9, VQty: -9 })

    useEffect(() => {
        // if (!VoucherMode ) { alert('Empty VoucherMode- trying to return'); return }
        // console.log('Rcvd CrntRec', CrntRec)
        // DispRecInAlert(CrntRec,'Rcvd CrntRec')

        // if (CrntRec) {    setVoucherCart(()=>CrntRec); }
    }, [Need2Refresh4M]);



    const OrderItemAdd = (crntItem, qty) => {
        // console.log('crntVoucherBefore', VoucherCart, crntItem, qty)
        // DispRecInAlert(VoucherCart,'crnt voucher Before')

        const exist = VoucherCart.VItems.find((E) => E.Code === crntItem.Code)

        // alert('    qty: ' + qty)
        // AlertRec(crntItem, 'CrntItem for qty addition:')

        let UpdatedItemsList = []
        if (exist) {
            UpdatedItemsList = VoucherCart.VItems.map((E) => (E.Code === crntItem.Code) ? { ...exist, Qty: +exist.Qty + qty } : E)
        }
        else {
            UpdatedItemsList = [...VoucherCart.VItems, { ...crntItem, Qty: crntItem.QtyDef }]
        }

        const { vamt, vqty } = UpdatedItemsList.reduce(
            (accum, crntValue) => {
                const { Qty, Price } = crntValue;
                accum.vamt += (Qty * Price)
                accum.vqty += Qty;
                return accum;
            }, { vamt: 0, vqty: 0 })

        setVoucherCart(() => ({ ...VoucherCart, VItems: UpdatedItemsList, VAmt: vamt, VQty: vqty }))
        // setVoucherCart(() => ({ ...VoucherCart, VItems: UpdatedItemsList, VAmt: -9999, VDesc: "Description is here", VNo: UpdatedItemsList.length }))
    }

    const OrderItemDel = (crntItem, qty) => {
        const exist = VoucherCart.VItems.find((E) => E.Code === crntItem.Code)
        let UpdatedItemsList = []

        // alert('Qty: ' + exist.Qty + '    qty: ' + qty)
        // AlertRec(crntItem, 'CrntItem for qty Deletion:')

        if (exist.Qty > qty) {
            UpdatedItemsList = VoucherCart.VItems.map((E) => (E.Code === crntItem.Code) ? { ...exist, Qty: +exist.Qty - qty } : E)
        }
        else {
            UpdatedItemsList = VoucherCart.VItems.filter((E) => (E.Code !== crntItem.Code))
        }

        const { vamt, vqty } = UpdatedItemsList.reduce(
            (accum, crntValue) => {
                const { Qty, Price } = crntValue;
                accum.vamt += (Qty * Price)
                accum.vqty += Qty;
                return accum;
            }, { vamt: 0, vqty: 0 })

        setVoucherCart(() => ({ ...VoucherCart, VItems: UpdatedItemsList, VAmt: vamt, VQty: vqty }))
    }

    const OrderItemDelAll = () => {
        // alert('Delete All is pressed...')
        setVoucherCart(() => ({ ...VoucherCart, VItems: [], TCode: '', VAmt: 0, VDesc: "", VQty: 0 }))
    }

    // ==================[  Fn: Handle Inputs  ]=====================
    // let key = '', value = '';
    const HandleDefaultTrader = () => {
        setVoucherCart(() => ({ ...VoucherCart, TCode: Suppliers.at(-1).Code }));
        return VoucherCart.TCode
    }

    // Handle Voucher-Header VNo, VDte etc
    const HandleInputsVoucherHeader = (e) => {
        // console.log('Input Done:', e.target.name, e.target.value);
        // alert(e.target.name + '  ' + e.target.value)
        // key = e.target.name; value = e.target.value;

        // setRec4M({ ...Rec4M, [e.target.name]: e.target.value });
        switch (e.target.name) {
            // (e.target.value) ? { ...VoucherCart, VDte: e.target.value } : { ...VoucherCart, VDte: '' }
            case 'VDte': setVoucherCart(() => (
                { ...VoucherCart, VDte: e.target.value }
            )); break;
            case 'VNo': setVoucherCart(() => ({ ...VoucherCart, VNo: e.target.value })); break;
            case 'TCode': setVoucherCart(() => ({ ...VoucherCart, TCode: e.target.value })); break;
            case 'VDesc': setVoucherCart(() => ({ ...VoucherCart, VDesc: e.target.value })); break;

            default:
                // setVoucherCart(() => ({ ...VoucherCart, VItems: UpdatedItemsList, VAmt: vamt, VQty: vqty }))
                break;
        }
    }

    // Handle Voucher-Detail VItem Qty Price etc
    const HandleInputsVoucherDetail = (crntItem, e) => {
        const exist = VoucherCart.VItems.find((E) => E.Code === crntItem.Code)

        let UpdatedItemsList = []
        if (exist) {
            if (e.target.value >= 1) {
                UpdatedItemsList = VoucherCart.VItems.map((E) => (E.Code === crntItem.Code) ? { ...exist, [e.target.name]: e.target.value } : E)
            }
            else {
                UpdatedItemsList = VoucherCart.VItems.filter((E) => (E.Code !== crntItem.Code))
            }

            const { vamt, vqty } = UpdatedItemsList.reduce(
                (accum, crntValue) => {
                    const { Qty, Price } = crntValue;
                    accum.vamt += (Qty * Price)
                    accum.vqty += Qty;
                    return accum;
                }, { vamt: 0, vqty: 0 })

            setVoucherCart(() => ({ ...VoucherCart, VItems: UpdatedItemsList, VAmt: vamt, VQty: vqty }))
        }
    }
    // ==============================================================

    //CLEAR Rec is clicked
    //   const HandleBtnClear = () => { alert('Clear pressed'); setRec4M(RecDefault4M) }
    const HandleBtnClear = () => { alert('Clear pressed'); setNeed2Refresh4M(!Need2Refresh4M) }
    // ==============================================================

    //CANCEL changes is clicked
    //   const HandleBtnCancel = () => { alert('Cancelled pressed'); setBtnEditClicked(false); setBtnAddnewClicked(false); setInputReadOnly(true); setRec4M(RecDefault4M) }
    const HandleBtnCancel = (Flag2Refresh) => {
        HandleBtnVoucherMode(VoucherMode, false, Flag2Refresh);
    }
    // ==============================================================

    //SAVE changes is clicked
    //   const HandleBtnSave = () => { setBtnEditClicked(false); setBtnAddnewClicked(false); setInputReadOnly(true); setRec4M(RecDefault4M) }
    const HandleBtnSave = () => {
        // AlertRec(VoucherCart, 'Saving Data is Proceeded.'); 
        switch (VoucherMode) {
            case 'Add': CallAPI2SaveAddNew(); break;
            case 'Edit': CallAPI2SaveUpdate(); break;
            default: break;
        }
    }
    // ==============================================================



    // =======================================================================
    // ==================[  Fns: DATABASE/ API Handling ]=====================
    // =======================================================================

    // ------------- Update RECORD ----------------
    const CallAPI2SaveUpdate = async () => {
        alert('Now Updating Data in Database ')

        const { _id: Vid, VItems, VDte, VNo, VCat, VDesc, TCode, VAmt, VQty } = VoucherCart
        const { VCat: vcat, AccCodeD, AccCodeC } = AccRec4M
        // alert('VDate: '+(new Date(VDte)).toDateString())

        if (!Suppliers.find(s => s.Code === TCode)) {
            alert('Supplier is invalid. \nPlz check voucher entry.'); return
        }

        const Data2SendInDatabase = {
            TranM: {
                // "VDte": (new Date(VDte)).toDateString(),
                // "VNo": VNo,
                // "VCat": VCat,
                "VDesc": VDesc,
                "TCode": TCode,
                "VAmt": VAmt,

                "RefVDte": '',
                "RefVNo": '',
                "RefVCat": '',
                "RefVid": '',

                "EntryBy": "xUSERx",
                "EntryDte": new Date()
            },

            TranR: [...AccCodeD.map((E, I) => (
                {
                    // Vid: 'id',
                    // VDte: (new Date(VDte)).toDateString(),
                    // VNo: VNo,
                    // VCat: VCat,
                    // AccType: '0',
                    // AccCode: E.Code,
                    // AccTitle: E.Title,
                    VAmt: VAmt
                }))
                ,
            ...AccCodeC.map((E, I) => (
                {
                    // Vid: 'id',
                    // VDte: (new Date(VDte)).toDateString(),
                    // VNo: VNo,
                    // VCat: VCat,
                    // AccType: '1',
                    // AccCode: E.Code,
                    // AccTitle: E.Title,
                    VAmt: VAmt
                }))]
            ,
            TranD: (VItems.map((E, I) => (
                {
                    Vid: Vid,
                    VDte: (new Date(VDte)).toDateString(),
                    VNo: VNo,
                    VCat: VCat,
                    VDesc: VDesc,
                    TCode: TCode,
                    Code: E.Code,
                    Qty: E.Qty,
                    Unit: E.Unit,
                    Price: E.Price,
                    VAmt: VAmt
                })))
        }

        // console.log('Data2SendInDatabase:', Data2SendInDatabase)
        // AlertRec(Data2SendInDatabase, 'Data2SendInDatabase')
        // return

        //===================================================  
        //=====[   READY to Update/send data in Database   ]========  
        //===================================================  
        //=====[   PART-1/3  TranM   ]========  
        //   const res = await fetch('/api/staff', {
        const res = await fetch(`/api/TranPurchase/${Vid}`, {
            method: 'PUT', headers: { 'Content-Type': "application/json" },
            body: JSON.stringify(Data2SendInDatabase)
        })

        // const data = await res.json();
        // const data = res.json();
        // console.log('Saved Record Returned:', data);

        // if (res.status === 422 || !data) { window.alert("Transaction Invalid."); }
        // else {
        //     window.alert("Transaction Successful.");
        //     //History.push("/Home");
        // }

        alert('Data is Sent in Database')
        // setNeed2Refresh4M(!Need2Refresh4M)
        HandleBtnCancel(true)
    }

    // ------------- AddNew/Create RECORD ----------------
    const CallAPI2SaveAddNew = () => {
        // ------------- CREATE ADDNEW RECORD ----------------
        // alert('Now Saving Data in Database')

        // AlertRec(VoucherCart, 'Data Ready to Send')
        const { VItems, VDte, VNo, VCat, VDesc, TCode, VAmt, VQty } = VoucherCart
        const { VCat: vcat, AccCodeD, AccCodeC } = AccRec4M
        
        if (!Suppliers.find(s => s.Code === TCode)) {
            alert('Supplier is invalid. \nPlz check voucher entry.'); return
        }

        const Data2SendInDatabase = {
            // One Record in TranM
            TranM: {
                "VDte": (new Date(VDte)).toDateString(),
                "VNo": VNo,
                "VCat": VCat,
                "VDesc": 'Purchase Bill for Supplier: '+TCode,
                "TCode": TCode,
                "VAmt": VAmt,

                "RefVDte": '',
                "RefVNo": '',
                "RefVCat": '',
                "RefVid": '',

                "EntryBy": "xUSERx",
                "EntryDte": new Date()
            },

            // Two Records in TranM
            TranR: [...AccCodeD.map((E, I) => (
                {
                    Vid: 'id',
                    VDte: (new Date(VDte)).toDateString(),
                    VNo: VNo,
                    VCat: VCat,
                    AccType: '0',
                    AccCode: E.Code,
                    AccTitle: E.Title,
                    VAmt: VAmt
                }))
                ,
            ...AccCodeC.map((E, I) => (
                {
                    Vid: 'id',
                    VDte: (new Date(VDte)).toDateString(),
                    VNo: VNo,
                    VCat: VCat,
                    AccType: '1',
                    AccCode: E.Code,
                    AccTitle: E.Title,
                    VAmt: VAmt
                }))]
            ,

            // Multiple Records in TranM
            TranD: (VItems.map((E, I) => (
                {
                    Vid: '...',
                    VDte: (new Date(VDte)).toDateString(),
                    VNo: VNo,
                    VCat: VCat,
                    VDesc: VDesc,
                    TCode: TCode,
                    Code: E.Code,
                    Qty: E.Qty,
                    Unit: E.Unit,
                    Price: E.Price,
                    VAmt: VAmt
                })))
        }

        // console.log('Data2SendInDatabase:', Data2SendInDatabase)
        // AlertRec(Data2SendInDatabase, 'Data2SendInDatabase')
        // return


        //=====[   READY to send data in Database   ]========  
        //-------------------------------------------------------

        //=====[   PART-1/3  TranM   ]========  
        //   const res = await fetch('/api/staff', {
        const res = fetch('/api/TranPurchase', {
            method: 'POST', headers: { 'Content-Type': "application/json" },
            body: JSON.stringify(Data2SendInDatabase)
        })

        // const data = await res.json();
        // const data = res.json();
        // console.log('Saved Record Returned:', data);

        // if (res.status === 422 || !data) { window.alert("Transaction Invalid."); }
        // else {
        //     window.alert("Transaction Successful.");
        //     //History.push("/Home");
        // }

        // alert('Data is Sent in Database')
        // setNeed2Refresh4M(!Need2Refresh4M)
        HandleBtnCancel(true)
    }
    // =======================================================================


    let SelectedItem = null
    // \/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/
    return (<>
        <div className="card">

            {/* =================================================================================== */}
            {/* =====[    Main CARD HEADER start            ]===========================================  */}
            {/* =================================================================================== */}
            {/* background-color:F3E5F5 */}
            <div className="card-header px-2 d-flex  justify-content-between align-items-center" style={{ height: 30, backgroundColor: '#E1BEE7' }}>

                {/* ............. Display ICON & TITLE  ............. */}
                <div className="d-flex  gap-2 align-items-center">
                    <span className="p-0 mb-2 fs-3 text-danger" ><TbManualGearbox /></span>
                    <span className='fs-4'> Manage: Purchase Transactions</span>
                    {/* <span className='fs-4'> DispRecIndex {CrntIdx2DisplayRec4M} </span> */}
                </div>

                {/* ............. Display BUTTONS toolbar  ............. */}
                <div className="d-flex  gap-2 align-items-center">

                    {/* <button type="button" id="btnCancelRec4Add" className="btn btn-sm btn-outline-secondary" onClick={() => { console.log('CurrentRec:', Rec4M); DispRecInAlert(Rec4M, 'Master Rec') }}> */}
                    {/* <button type="button" id="btnCancelRec4Add" className="btn btn-sm btn-outline-secondary" onClick={() => { HandleBtnClear() }}>
                        Empty/Clear <TbWiperWash className='mb-1' />
                    </button> */}
                    <button type="button" className="btn btn-sm btn-info py-0 fs-5 text-black" onClick={() => { HandleBtnCancel(false) }}>
                        Close {VoucherMode === 'Add' ? 'Addition' : 'Update'} Process <FcCancel className='fs-3 mb-1' />
                    </button>
                    {/* <button type="button" className="btn btn-sm btn-success" onClick={() => HandleBtnSave()} >
                        Save Record <FaSave className='mb-1' />
                    </button> */}
                </div>

            </div>    {/* END: Header for Search Input Selection  */}
            {/* ===========================[ END: Header for Search Input Selection ]===========================================  */}



            {/* =================================================================================== */}
            {/* =====[    Main CARD BODY start            ]===========================================  */}
            {/* =================================================================================== */}
            <div className="card-body px-1 py-0 d-flex flex-row justify-content-center align-content-start " style={{ background: '#F3E5F5' }}>

                {/* ======== [ BILL-VOUCHER Both-(1&2) Parts] ======== */}
                <div className='card shadow d-flex flex-row gap-2 text-start my-1 w-100' style={{ background: '#F3E5F5' }}>
                    {/* <div> <h2>Transaction Bill <span className='me-5 text-end'>Voucher Items: {'x'}</span></h2>  </div> */}

                    {/* ======================================================================== */}
                    {/* ========= [Left-Part]  ITEMS TABS-MENU/LIST for Selection PART ========= */}
                    {/* ======================================================================== */}

                    {/* [  Left-Part  ]  ==> MAIN ITEMS CATALOG MENU COLUMN */}
                    {/* <div className='m-1 p-1' style={{ flex: '2', background: '#e0e0e0', borderRadius: '5px' }}> */}
                    <div className='m-0 p-0' style={{ flex: '2', background: '#e0e0e0', borderRadius: '5px' }}>
                        <span className='d-flex justify-content-start mb-2'><strong>Menu Items</strong></span>
                        <TranBillMenuTabs
                            Products={Products}
                            OrderSheetItems={VoucherCart.VItems}
                            OrderItemAdd={OrderItemAdd}
                            OrderItemDel={OrderItemDel} />
                    </div>

                    {/* =================================================================== */}
                    {/* ========= [Right-Part]   FULL VOUCHER - BASKET/CART PART ========= */}
                    {/* =================================================================== */}
                    {(VoucherCart.VItems.length <= 0)
                        ? null
                        // : <div className='d-flex  m-1 p-2 flex-column text-start' style={{ flex: '1', background: '#e0e0e0', borderRadius: '5px' }}>
                        : <div className='card d-flex  m-0 p-1 flex-column text-start' style={{ width: '450px', fontSize: '12px', background: '#e0e0e0', borderRadius: '5px' }}>

                            <div className='card-header d-flex gap-2 mb-1 justify-content-between '>
                                <span className='fs-6'><strong>Purchae Bill/ Voucher</strong></span>

                                {/* <button className='btn btn-sm btn-outline-secondary pt-0 ms-auto' style={{ height: '25px' }}
                                    onClick={() => HandleBtnClear() }>
                                    Empty <TbWiperWash className='mb-1' />
                                </button> */}
                                <button className='btn btn-sm btn-warning pt-0  ms-auto' style={{ height: '25px' }}
                                    onClick={() => OrderItemDelAll()}>
                                    Clear All <TbWiperWash />
                                </button>
                                <button className='btn btn-sm btn-success py-0' style={{ height: '25px' }}
                                    // onClick={() => { DispRecInAlert(VoucherCart, 'Voucher'); HandleBtnSave() }}>
                                    onClick={() => { HandleBtnSave() }}>
                                    Save Voucher <FaSave className='mb-1' />
                                </button>
                            </div>
                            <div className="card-body p-1">
                                <div className='d-flex justify-content-between border'>
                                    <div style={{ width: '40%', fontSize: '14px' }}>
                                        <div className='d-flex mb-1'  >
                                            <div style={{ width: '30%' }}> Date:</div>
                                            <div style={{ width: '70%' }} >

                                                <ReactDatePicker className='w-100'
                                                    // name="VDte" value={VoucherCart.VDte === ''
                                                    //     // ? `${(new Date()).getDate()}/${(new Date()).getMonth()+1}/${(new Date()).getFullYear()}`
                                                    //     ? `${(new Date()).getDate()} ${(new Date()).toDateString().substr(4, 1)} ${(new Date()).getFullYear()}`
                                                    //     : VoucherCart.VDte} dateFormat='d MMM yy' id="VDte"

                                                    // selected={new Date((VoucherCart.VDte) ? VoucherCart.VDte : Date())}
                                                    name="VDte" value={VoucherCart.VDte === ''
                                                        // ? `${(new Date()).getDate()}/${(new Date()).getMonth()+1}/${(new Date()).getFullYear()}`
                                                        ? Moment(VoucherCart.VDte).format('DD MMM YY ddd')
                                                        : VoucherCart.VDte} dateFormat='d MMM yy'

                                                    selected={new Date((VoucherCart.VDte) ? VoucherCart.VDte : Date())}
                                                    readOnly={false}
                                                    allowClear={true}
                                                    onChange={(dte) => setVoucherCart(() => ({ ...VoucherCart, VDte: dte }))}
                                                />
                                            </div>
                                        </div>

                                        <div className='d-flex mb-1' >
                                            <div style={{ width: '30%' }}> V No: </div>
                                            <div style={{ width: '70%' }}>
                                                <input type="text" value={VoucherCart.VNo}
                                                    name="VNo" id="VNo" style={{ width: '100%' }}
                                                    onChange={(e) => {
                                                        console.log(e.target.name, e.target.value);
                                                        HandleInputsVoucherHeader(e)
                                                    }} />
                                            </div>
                                        </div>
                                    </div>

                                    <div style={{ width: '55%', fontSize: '14px' }}>
                                        <div className='d-flex mb-1' >
                                            <div style={{ width: '25%' }}> Supplier:</div>
                                            <div style={{ width: '75%' }}>
                                                {/* {alert('Supplier Code: ' + VoucherCart.TCode)} */}
                                                <select className='w-100' style={{ height: '24px' }}
                                                    // value={(VoucherCart.TCode) ? VoucherCart.TCode : Suppliers.at(-1).Code}
                                                    value={(VoucherCart.TCode) ? VoucherCart.TCode : HandleDefaultTrader()}
                                                    name="TCode" placeholder="Supplier Code"
                                                    onChange={(e) => {
                                                        // console.log(e.target.name, e.target.value);
                                                        HandleInputsVoucherHeader(e)
                                                    }}  >
                                                    {/* <option value="choose" disabled selected="selected">
                                                        -- Select supplier --
                                                    </option> */}
                                                    {Suppliers.map((E, I) => { return (<option value={E.Code} >{I + ' ' + E.Title} </option>) })}
                                                </select>
                                            </div>
                                        </div>
                                        <div className='d-flex mb-1' >
                                            <div style={{ width: '25%' }}> Detail:</div>
                                            <div style={{ width: '75%' }}>
                                                <input type="text" value={VoucherCart.VDesc}
                                                    name="VDesc" id="VDesc" style={{ width: '100%' }}
                                                    onChange={(e) => {
                                                        console.log(e.target.name, e.target.value);
                                                        HandleInputsVoucherHeader(e)
                                                    }} />
                                            </div>
                                        </div>


                                    </div>
                                </div>

                                <div className='d-flex mb-2 justify-content-between border'>
                                    <div style={{ width: '40%' }}>
                                        <table width='100%'>
                                            <tr><th >Total Items:</th> <td width='50%' className='border border-danger px-1 text-end fs-6 fw-bolder'>{VoucherCart.VQty} / {VoucherCart.VItems.length}</td></tr>
                                        </table>
                                    </div>
                                    <div style={{ width: '50%' }}>
                                        <table width='100%'>
                                            <tr><th >Total Amount:</th> <td width='50%' className='border border-primary px-1 text-end fs-6 fw-bolder'>Rs. {VoucherCart.VAmt}</td></tr>
                                        </table>
                                    </div>
                                </div>

                                {/* ========= [         VOUCHER Transaction Records/Rows PART       ============================== */}
                                {/* <Basket Products={Products} /> */}
                                <div>
                                    <TranBillVoucherDetail
                                        OrderSheetItems={VoucherCart.VItems}
                                        OrderItemDel={OrderItemDel}
                                        OrderItemAdd={OrderItemAdd}
                                        HandleInputsVoucherDetail={HandleInputsVoucherDetail} />
                                </div>
                            </div>
                        </div>
                    }
                </div>

            </div>{/* /.Main-card-body */}
            {/* =================================================================================== */}
            {/* =====[    Main CARD BODY ends here            ]===========================================  */}
            {/* =================================================================================== */}

        </div>    {/* /.Main-card */}

    </>
    )
}

export default TranBill