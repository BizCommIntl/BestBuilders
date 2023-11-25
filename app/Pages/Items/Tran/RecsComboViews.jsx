import { useRef, useState } from 'react'
import { useReactToPrint } from 'react-to-print'
import moment from "moment"

import { FaLayerGroup } from 'react-icons/fa'
import { GrPrint } from 'react-icons/gr'
import { HiOutlineViewGridAdd, HiOutlineViewList } from 'react-icons/hi'
import { TfiViewList } from 'react-icons/tfi'

import { AlertConfirm } from '../../../../StdLib'
import Logo from '../../../../SiteImages/Logo.jpg'

let CatCodeOld = ''
let newGroupTitle = ''

export default function RecsComboViews({ RecAll, HandleListItemClicked, HandleListItemClickedDbl, SizeFlagFS, ListDispTypeDefault }) {
    const [DispType, setDispType] = useState(ListDispTypeDefault)
    const [SelectedRec, setSelectedRec] = useState('')
const [PrintButton, setPrintButton]=useState(false)

    // START   ==================[  Handle Printing  ]=====================
    const compRefX = useRef();
    // const compRef = useRef();
    // const handlePrint = useReactToPrint({
    //     content: () => compRefX.current,
    //     // content: () => 'Bismillah',
    //     onAfterPrint: () => alert('Print succeeded')
    // })

    const HandlePrinting = useReactToPrint({
        // content: () => compRef.current,
        //content: () => compRefX.current,
        content: () => compRefX.current,
        // onAfterPrint: () => alert('Print succeeded')
    })
    // END   ==================[  Handle Printing  ]=====================

    const PrintButtonToggle=()=> setPrintButton(p => !p)
    
    const GroupSeperator = (E) => {
        if (CatCodeOld === E.CatCode) newGroupTitle = ''
        else {
            CatCodeOld = E.CatCode
            newGroupTitle = <div>{E.CatTitle}</div>
        }
        return (newGroupTitle)
    }

    return (<>
        {/* <div className="d-flex flex-wrap justify-content-evenly " style={{overflow:'hidden'}}> */}
        <div className="card-header py-0 w-100 d-flex align-items-center" style={{ background: '#e0e0e0' }}>
            <div>Procedures <span onDoubleClick={()=>PrintButtonToggle()}>List</span></div>
            {/* <span className='ms-auto ' onClick={() => HandleDatabase('Empty')}><TbWiperWash /></span> */}
            {/* <span className='ms-auto ' onClick={() => HandleDatabase('Add')}><AiFillAccountBook /></span> */}
            {/* <span className='ms-auto ' onClick={() => HandleDatabase('Empty')}>Edit<AiFillAccountBook /></span> */}

            <div className='ms-auto mx-2 fs-6 ' onClick={() => setDispType(0)}><TfiViewList /></div>
            <div className='fs-5 ' onClick={() => setDispType(1)}><HiOutlineViewGridAdd /></div>
            <div className='fs-6  mx-2 ' onClick={() => setDispType(2)}><FaLayerGroup /></div>

            { PrintButton &&
            <button className='btn btn-sm btn-info py-0 px-1 ' style={{ height: '25px' }} onClick={() => HandlePrinting()}>
                <span style={{ fontSize: 'smaller' }}>Print</span> <GrPrint />
            </button>
            }

        </div>

        <div className="card-body p-0" style={{ height: '75vh', overflowY: 'auto' }}>
            {DispType === 0         //0-list, 1-Grid, 2-group
                ? <div className="btn-group d-flex flex-column m-0" role="group" aria-label="First group">
                    {RecAll.map((E, I) => {
                        // return <button className='d-flex mb-2 ' key={E.id} onClick={() =>{DispRecInAlert(E,'Selected'); HandleListItemClicked(E)}}>
                        return (
                            <button className='btn btn-sm d-flex px-1 py-0 text-start border-bottom '
                                style={{ fontSize: '10px' }} key={I}
                                onClick={() => { setSelectedRec(E.Id); HandleListItemClicked(E) }}
                                onDoubleClick={() => { setSelectedRec(E.Id); HandleListItemClickedDbl(E) }} >

                                {(SizeFlagFS === 'F') &&
                                    <>
                                        <span style={{ width: '10%' }}>{E.Id} </span>
                                        <span style={{ width: '30%' }}>{E.Title}</span>
                                        {/* <span style={{ width: '20%' }}>{E.TitleU}</span> */}
                                        <span style={{ width: '20%' }}>{E.Desc}</span>
                                        <span style={{ width: '20%' }}>{E.CatTitle}</span>

                                        {/* <span style={{ width: '20%' }}>{Rec.Id ? (Cats.find((P) => P.Code.trim() === E.CatCode.trim())).Title.substr(0,10) : (Cats.find((P) => P.Code.trim() === E.CatCode.trim())).Title }</span> */}
                                        <span style={{ width: '20%' }} className=' text-end'>{E.Unit} @ Rs. {E.Price}</span>
                                        {/* <span style={{ width: '10%' }} className=' text-end'>{E.Unit}</span> */}
                                        {/* <span style={{ width: '15%', textAlign: 'end' }}>{E.ContactPh1}</span> */}
                                    </>}

                                {(SizeFlagFS !== 'F') &&
                                    <>
                                        <span style={{ width: '15%' }}>{E.Id}</span>
                                        <span style={{ width: '35%' }}>{E.Title}  </span>
                                        {/* <span style={{ width: '20%' }}>{E.TitleU}</span> */}
                                        <span style={{ width: '30%' }}>{E.CatTitle}</span>
                                        <span style={{ width: '20%' }} className=' text-end'>@ {E.Price}</span>
                                    </>}

                            </button>
                        )
                    }).reverse()
                    }
                </div>
                            
                : DispType === 1            // //0-list, 1-Grid, 2-group
                    ? <div className="btn-group d-flex flex-row flex-wrap m-0 justify-content-between" role="group" aria-label="First group">
                        {RecAll.map((E, I) => {
                            return (
                                <button key={E.Id} className="p-1 mb-1 "
                                    style={{ width: "75px", minHeight: '75px', maxHeight: '100px', borderColor: (E.Id === SelectedRec ? 'red' : 'black') }}
                                    value={E.Id}
                                    onClick={() => { setSelectedRec(E.Id); HandleListItemClicked(E) }}
                                    onDoubleClick={() => { setSelectedRec(E.Id); HandleListItemClickedDbl(E) }} >

                                    <div className="card shadow  p-0 m-0"  >
                                        <span style={{ position: 'absolute', top: '0px', left: '0px', fontSize: '8px' }}
                                            className={" text-secondary "} >
                                            {E.Id}
                                        </span>

                                        <div className="card-img-top px-0 pt-0 mb-0 text-center " >
                                            {/* <img src={`Images/ItemsStore/${ITM.PicURL}`} style={{ width: "100%", height: '75px', cursor: 'pointer' }} alt="..." */}
                                            {/* <img src={'Images/AdminPanel/Default/DefaultSupplier.png'} style={{ width: "75%", height: '100px', color: '#e040fb' }} alt="..." /> */}

                                            <img src={process.env.REACT_APP_API_URL + `Procedures/GetFile/${E.PicURL}`} style={{ width: "100%", height: '50px', color: '#e040fb' }} alt="..." />
                                        </div>

                                        <div className="card-body p-0">
                                            {/* <div className="card-title m-0 p-0" style={{ lineHeight: 1 }}>{Title.trim()}</div> */}
                                            <div className="card-title text-center text-black" style={{ fontSize: '8px', lineHeight: '1' }}>{E.Title.trim()}</div>
                                            {/* <div className="card-title text-center text-black" style={{ fontSize: '10px', lineHeight: '1' }}>{E.TitleU.trim()}</div> */}
                                            {/* <div className="card-title text-center text-primary" style={{ fontSize: '10px' }}>{E.Title.trim()}</div> */}
                                        </div>

                                    </div>
                                </button>
                            )
                        }).reverse()
                        }
                    </div>

                    :    // //0-list, 1-Grid, 2-group
                    <div className="btn-group d-flex flex-row flex-wrap m-0 justify-content-around" role="group" aria-label="First group">
                        {RecAll
                            .sort((a, b) => a.CatCode > b.CatCode ? 1 : -1)
                            .map((E, I) => {
                                return (
                                    <>
                                        {(newGroupTitle = GroupSeperator(E)) === '' ? '' :
                                            <div className='w-100 my-1 '> <span className='fs-5 text-primary text-decoration-underline'>{newGroupTitle}</span></div>
                                        }

                                        <button key={E.Id + E.Title} className="p-1 mb-1 "
                                            style={{ width: "75px", minHeight: '75px', maxHeight: '100px', overflow: 'hidden', borderColor: (E.Id === SelectedRec ? 'red' : 'black') }}
                                            value={E.Id}
                                            onClick={() => { setSelectedRec(E.Id); HandleListItemClicked(E) }}
                                            onDoubleClick={() => { setSelectedRec(E.Id); HandleListItemClickedDbl(E) }} >

                                            <div className="card shadow  p-0 m-0"  >
                                                <span style={{ position: 'absolute', top: '0px', left: '0px', fontSize: '8px' }}
                                                    className={" text-secondary "} >
                                                    {E.Id}
                                                </span>

                                                <div className="card-img-top px-0 pt-0 mb-0 text-center " >
                                                    {/* <img src={`Images/ItemsStore/${ITM.PicURL}`} style={{ width: "100%", height: '75px', cursor: 'pointer' }} alt="..." */}
                                                    {/* <img src={'Images/AdminPanel/Default/DefaultSupplier.png'} style={{ width: "75%", height: '100px', color: '#e040fb' }} alt="..." /> */}

                                                    <img src={process.env.REACT_APP_API_URL + `Procedures/GetFile/${E.PicURL}`} style={{ width: "100%", height: '50px', color: '#e040fb' }} alt="..." />
                                                </div>

                                                <div className="card-body p-0">
                                                    {/* <div className="card-title m-0 p-0" style={{ lineHeight: 1 }}>{Title.trim()}</div> */}
                                                    <div className="card-title text-center text-black" style={{ fontSize: '8px', lineHeight: '1' }}>{E.Title.trim()}</div>
                                                    {/* <div className="card-title text-center text-black" style={{ fontSize: '10px', lineHeight: '1' }}>{E.TitleU.trim()}</div> */}
                                                    {/* <div className="card-title text-center text-primary" style={{ fontSize: '10px' }}>{E.Title.trim()}</div> */}
                                                </div>

                                            </div>
                                        </button>
                                    </>
                                )
                            })
                        }
                    </div>
            }

        </div >


        {/* ===========START==========  PRINTING of VOUCHER =========================*/}
        {/*        FOR PRINTING       */}
        {/* ===========START==========  PRINTING of VOUCHER =========================*/}
        <div className="d-none">
            {/* {AlertConfirm(RecAll, 'RecAll')} */}

            <div ref={compRefX} style={{ margin: '25px 25px 0px 25px' }}>

                <div className='d-flex justify-content-between'>
                    <div>
                        <div style={{fontSize:'32px', fontStretch:'extra-expanded', lineHeight:'1'}}>Procedures</div>
                        <div>{moment().format("DD MMM, YYYY dddd" )}</div>
                    </div>
                    {/* <img src={Logo} style={{ width: "100%", height: '50px', cursor: 'pointer' }} alt="Logo" /> */}
                    <img src={Logo} style={{ width: '150px', height: '50px', cursor: 'pointer' }} alt="Logo" />
                </div>


                <div className='mx-0 '>
                    {/* <table width="900px" border="0" cellspacing="0" cellpadding="0"> */}

                    <table width="100%" border="0" cellpadding="0" style={{ borderCollapse: 'separate', borderSpacing: '3px 0' }}>
                        <tbody>
                            {/* <thead className='mt-3'> */}
                            <tr style={{ borderBottom: '1px solid black' }}  >
                                <th style={{ width: '2%', textAlign: 'left', borderBottom: '1px solid gray' }} ># </th>
                                <th style={{ width: '6%', textAlign: 'left', borderBottom: '1px solid gray' }} >ID# </th>
                                <th style={{ width: '22%', textAlign: 'left', borderBottom: '1px solid gray' }} >Title</th>
                                {/* <th style={{ width: '15%', textAlign: 'left', borderBottom: '1px solid gray' }} >نام</th> */}
                                <th style={{ width: '8%', textAlign: 'center', borderBottom: '1px solid gray' }} >Store Balance</th>
                                <th style={{ width: '8%', textAlign: 'center', borderBottom: '1px solid gray' }} >Unit</th>
                                <th style={{ width: '15%', textAlign: 'left', borderBottom: '1px solid gray' }} >Description</th>
                                <th style={{ width: '8%', textAlign: 'right', borderBottom: '1px solid gray' }} >Price</th>
                                <th style={{ width: '8%', textAlign: 'right', borderBottom: '1px solid gray' }} >Level Min</th>
                                <th style={{ width: '8%', textAlign: 'right', borderBottom: '1px solid gray' }} >Level Max</th>

                                {/* <th style={{ width: '20%' }}>{Rec.Id ? (Cats.find((P) => P.Code.trim() === E.CatCode.trim())).Title.substr(0,10) : (Cats.find((P) => P.Code.trim() === E.CatCode.trim())).Title }</th> */}
                                {/* <th style={{ width: '10%' }} className=' text-end'>Unit</th> */}
                                {/* <th style={{ width: '15%', textAlign: 'end' }}>{E.ContactPh1}</th> */}
                            </tr>
                            {/* </thead> */}

                            {/* <tbody> */}
                            {RecAll
                                // .sort((a, b) => a.CatCode > b.CatCode ? 1 : -1)
                                .map((E, I) => {
                                    return (
                                        <>
                                            {/* {(newGroupTitle = GroupSeperator(E)) === '' ? '' :
                                                <tr className='w-100 mb-1 mt-2'>
                                                    <td colspan="9" className='fs-5 text-primary text-decoration-underline'>{newGroupTitle}</td>
                                                </tr>
                                            } */}

                                            <tr key={I}>
                                                <td style={{ width: '2%' }} align="left">{I + 1} </td>
                                                <td style={{ width: '6%' }} align="left">{E.Id} </td>
                                                <td style={{ width: '22%' }} align="left">{E.Title}</td>
                                                {/* <td style={{ width: '15%' }} align="left">{E.TitleU}</td> */}
                                                <td style={{ width: '8%' }} align="right">{E.CrntBal}</td>
                                                <td style={{ width: '8%' }} align="center">{E.Unit}</td>
                                                <td style={{ width: '15%' }} align="left">{E.Rem}</td>
                                                <td style={{ width: '8%' }} align="right">{E.Price}</td>

                                                {/* <td style={{ width: '20%' }}>{Rec.Id ? (Cats.find((P) => P.Code.trim() === E.CatCode.trim())).Title.substr(0,10) : (Cats.find((P) => P.Code.trim() === E.CatCode.trim())).Title }</td> */}
                                                <td style={{ width: '8%' }} align="right">{E.QtyMin}</td>
                                                <td style={{ width: '8%' }} align="right">{E.QtyMax}</td>
                                                {/* <td style={{ width: '5%' }} className=' text-end'>{E.QtyMax}</td> */}
                                                {/* <td style={{ width: '15%', textAlign: 'end' }}>{E.ContactPh1}</td> */}
                                            </tr>

                                            {/* {((I+1)%38===0)? <div style={{ pageBreakAfter:'always', marginBottom:'10rem'}} /> : ''} */}
                                            {/* {((I <= 38 ? (I + 1) % 38 : (I + 1) % 45◘) === 0) */}
                                            {((I + 1) % 37 === 0)
                                                ? <>
                                                    <div style={{ pageBreakBefore: 'always', marginTop: '50px' }} />

                                                    <tr >
                                                        <th style={{ width: '2%', textAlign: 'left', borderBottom: '1px solid gray' }} ># </th>
                                                        <th style={{ width: '6%', textAlign: 'left', borderBottom: '1px solid gray' }} >ID# </th>
                                                        <th style={{ width: '22%', textAlign: 'left', borderBottom: '1px solid gray' }} >Title</th>
                                                        {/* <th style={{ width: '15%', textAlign: 'left', borderBottom: '1px solid gray' }} >نام</th> */}
                                                        <th style={{ width: '8%', textAlign: 'center', borderBottom: '1px solid gray' }} >Store Balance</th>
                                                        <th style={{ width: '8%', textAlign: 'center', borderBottom: '1px solid gray' }} >Unit</th>
                                                        <th style={{ width: '15%', textAlign: 'left', borderBottom: '1px solid gray' }} >Description</th>
                                                        <th style={{ width: '8%', textAlign: 'right', borderBottom: '1px solid gray' }} >Price</th>
                                                        <th style={{ width: '8%', textAlign: 'right', borderBottom: '1px solid gray' }} >Level Min</th>
                                                        <th style={{ width: '8%', textAlign: 'right', borderBottom: '1px solid gray' }} >Level Max</th>

                                                    </tr>

                                                </>
                                                : ''}

                                        </>
                                    )
                                })
                            }

                        </tbody></table>

                </div>
            </div >
        </div >
        {/* ============END===========  PRINTING of VOUCHER =========================*/}


    </>)
}




