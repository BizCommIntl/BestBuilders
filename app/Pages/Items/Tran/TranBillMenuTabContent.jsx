import React from 'react'

import { FaPlus, FaMinus } from 'react-icons/fa'
//Play, back, next, fwwd
import { FaStepBackward, FaBackward, FaForward, FaStepForward } from 'react-icons/fa'
import { AlertRec } from '../../../../StdLib'

export default function TranBillMenuTabContent(props) {
    const { ITM, OrderSheetItems, OrderItemAdd, OrderItemDel } = props
    // console.log('OrderSheetItems in TabContent:', OrderSheetItems)

    let SelectedItem = null

    return (
        <>

            <div className="card shadow  p-0 mb-1" style={{ width: "100%", maxWidth: '125px', minWidth: '100px' }} >
                <div className="card-img-top p-1" >                  
                    {/* <img src={`Images/ItemsStore/${ITM.Pic}`} style={{ width: "100%", height: '75px', cursor: 'pointer' }} alt="..." */}
                    <img src={`Images/ItemsStore/${ITM.PicURL}`}  style={{ width: "100%", height: '75px', cursor: 'pointer' }} alt="..." />
                        {/* onClick={() => OrderItemAdd(ITM, ITM.QtyInc)} /> */}
                </div>
                <div className="card-body p-0 text-center">
                    <div className="card-title m-0 p-0" style={{ lineHeight: 1 }}>{ITM.Code} {ITM.Title.trim()}</div>
                    <div className="card-title m-0 p-0 fs-5 fw-bolder ">{ITM.UTitle.trim()}</div>
                    {/* <p className="card-text my-0">{ITM.Desc}</p> */}

                    {(SelectedItem = OrderSheetItems.find((E) => E.Code === ITM.Code))
                        ? <div className='mt-1 d-flex gap-1 align-items-center justify-content-center'>
                            <button className='btn btn-success p-0 m-0  d-flex align-items-center justify-content-center' style={{ height: '16px', width: '15px' }}
                                onClick={() => OrderItemAdd(ITM, ITM.QtyStep)}><span style={{ fontSize: '8px' }} ><FaBackward /></span></button>

                            <button className='btn btn-success p-0 m-0  d-flex align-items-center justify-content-center' style={{ height: '16px', width: '15px' }}
                                onClick={() => OrderItemAdd(ITM, ITM.QtyInc)}><span style={{ fontSize: '8px' }} ><FaPlus /></span></button>

                            <span className='p-0 m-0 mx-1 fs-6 fw-bold text-danger' > {SelectedItem.Qty} </span>
                            <button className='btn btn-primary p-0 m-0  d-flex align-items-center justify-content-center' style={{ height: '16px', width: '15px' }}
                                onClick={() => OrderItemDel(ITM, ITM.QtyInc)}><span style={{ fontSize: '8px' }} ><FaMinus /></span></button>

                            <button className='btn btn-primary p-0 m-0  d-flex align-items-center justify-content-center' style={{ height: '16px', width: '15px' }}
                                onClick={() => OrderItemDel(ITM, ITM.QtyStep)}><span style={{ fontSize: '8px' }} ><FaForward /></span></button>

                        </div>
                        : <button className="btn btn-primary mt-1 p-0 w-100"
                            style={{ color: 'black', background: '#f0c040', border: '1px solid #404040' }}
                            onClick={() => OrderItemAdd(ITM)}> Add in Order
                        </button>

                        // <div className="mx-1 p-0">
                        //     <button className="btn btn-primary m-0 p-0 w-100"
                        //         style={{ color: 'black', background: '#f0c040', border: '1px solid #404040' }}
                        //         onClick={() => OrderItemAdd(ITM)}>Select
                        //     </button>
                        // </div>
                    }
                </div>
            </div>

        </>)
}