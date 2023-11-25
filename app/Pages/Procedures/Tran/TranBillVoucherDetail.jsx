import React from 'react'
import { AlertRec, DispAPIInAlert, DispArrayInAlert, DispRecInAlert } from '../../../../StdLib'

import { BsSortNumericUpAlt } from 'react-icons/bs'
import { BsSortNumericDownAlt } from 'react-icons/bs'
import { FaPlus } from 'react-icons/fa'
import { FaMinus } from 'react-icons/fa'

export default function TranBillVoucherDetail(props) {
  //destructuring    props
  const { OrderSheetItems, OrderItemAdd, OrderItemDel, HandleInputs } = props
  // AlertRec(OrderSheetItems, 'TranBillVoucherDetail Order-Sheet:')

  // {/* ========= [         VOUCHER Transavtion Records/Rows PART       ============================== */}
  return (
    <>
      {/* <div className='card d-flex flex-row  align-items-center mb-2' style={{ fontSize: '12px' }}>
        <div className='border border-danger '  style={{ width: "5%" }}  >#</div>
        <div className='border border-primary ' style={{ width: "12%" }} >#</div>
        <div className='border border-warning ' style={{ width: "30%" }}  >#</div>
        <div className='border border-success ' style={{ width: "5%" }}  >#</div>
        <div className='border border-primary ' style={{ width: "10%" }}  >#</div>
        <div className='border border-danger '  style={{ width: "5%" }}  >#</div>
        <div className='border border-danger '  style={{ width: "5%" }}  >#</div>
        <div className='border border-danger '  style={{ width: "10%" }}  >#</div>
        <div className='border border-danger '  style={{ width: "7%" }}  >#</div>
        <div className='border border-danger '  style={{ width: "11%" }}  >#</div>
      </div> */}

      {/* EXAMPLE */}
      {/* {OrderSheetItems.map((crntElement) => { return <ItemDisplay key="crntElement.id" {...crntElement} /> })} */}

      {OrderSheetItems.map((E, I) =>
        <div className='card d-flex flex-row  align-items-center mb-2' style={{ fontSize: '12px' }} key={I}>

          {/* SNO +  */}
          <div className=' x ' style={{ width: "5%" }}  >{I + 1}</div>

          {/* IMAGE +  */}
          {/* <div className=' x ' style={{ width: "11%" }} ><img src={`Images/ItemsStore/${E.Pic}`} alt={E.Pic} width='40px' height='40px' /></div> */}
          <div className=' x ' style={{ width: "11%" }} ><img src={`Uploads/Items/${E.Pic}`} alt={E.Pic} width='40px' height='40px' /></div>

          {/* TITLE/NAME +  */}
          <div className=' x ' style={{ width: "28%" }}  >{E.Title} <br />{E.UTitle}</div>

          {/* PLUS +  */}
          {/* <div className=' x ' style={{ width: "5%" }}  ><button className='btn btn-success p-0 m-0 ' style={{ height: '20px', width: '20px', lineHeight: '1' }} onClick={() => OrderItemAdd(E, E.QtyInc)}><FaPlus /></button></div> */}

          {/* QUANTITY   */}
          {/* <div className=' x text-center mx-0 px-0' style={{ width: "8%" }}  > <span className='p-0 m-0 mx-2 fs-5 fw-bold text-danger' > {E.Qty} </span></div> */}
          <div className='d-flex text-center align-items-center mx-0 px-0 ' style={{ width: "20%" }}  >
            {/* PLUS +  */}
            <button className='btn btn-success p-0 m-0 ' style={{ height: '20px', width: '20px', lineHeight: '1' }} 
            onClick={() => OrderItemAdd(E, E.QtyInc)}><FaPlus /></button>

            {/* QUANTITY   */}
            <input type="text" name="Qty" id="Qty" value={E.Qty} className='p-0 m-0 fs-6 w-100 fw-bold text-danger text-center text-decoration-underline ' style={{ border: 'none' }}
              onChange={(e) => HandleInputs(E, e)} />

            {/* MINUS +  */}
            <button className='btn btn-primary p-0 m-0 ' style={{ height: '20px', width: '20px', lineHeight: '1' }} 
            onClick={() => OrderItemDel(E, E.QtyInc)}><FaMinus /></button>
          </div>

          {/* MINUS +  */}
          {/* <div className=' x  text-center ' style={{ width: "5%" }}  ><button className='btn btn-primary p-0 m-0 ' style={{ height: '20px', width: '20px', lineHeight: '1' }} onClick={() => OrderItemDel(E, E.QtyInc)}><FaMinus /></button></div> */}

          {/* UNIT +  */}
          <div className=' x text-end' style={{ width: "5%" }}  >{E.Unit} @</div>

          {/* <div className=' x ' style={{ width: "10%" }}  >{E.Price}</div> */}
          {/* PRICE +  */}
          <div className=' x ' style={{ width: "12%" }}  >
            <input type="text" name="Price" id="Price" value={E.Price} className='p-0 m-0 fs-6 w-100 fw-bold text-danger text-center text-decoration-underline' style={{ border: 'none' }}
              onChange={(e) => HandleInputs(E, e)} />
          </div>

          {/* AMOUNT +  */}
          <div className=' x text-end' style={{ width: "7%" }}  >= Rs</div>
          <div className=' x text-end  fw-bold' style={{ width: "12%", fontSize: '16px', color: '#ff3d00' }}  >{E.Qty * E.Price}</div>


          {/* <div className='a' style={{ width: "5%" }}  >#</div>
          <div className='d' style={{ width: "15%" }} ><img src={`Images/Items/${E.Pic}`} alt=".." width='20px' height='20px' /></div>
           
          <div className='d-flex flex-column' style={{ width: "40%" }} >{E.Title}</div>
          <div className='d' style={{ width: "5%" }}  ><button onClick={() => OrderItemAdd(E)}> + </button></div>
          <div className='d' style={{ width: "5%" }}> {E.Qty} </div>
          <div className='d' style={{ width: "5%" }} ><button onClick={() => OrderItemDel(E)}> - </button></div>
          <div className='d' style={{ width: "20%" }} ><span className='ms-5' >{E.Price}</span></div> */}
        </div>
      )}

    </>
  )
}