import React from 'react'
import Moment from 'moment'
import { CgCloseO } from 'react-icons/cg'
import { ImEnter } from 'react-icons/im'

const RecDetailDisp = ({ Rec, HandleCloseWindow }) => {

  return (
    <>

      {/* Voucher Detail- Header */}
      <div className='card-header  p-2 d-flex  w-100'>
        {/* {console.log('Selected', Rec)} */}

        {/* Header- Fields Input part */}
        <div className='d-flex  w-100'>
          <div className='d-flex  align-items-center' style={{ width: '40%' }}>
            <span className='fs-5 fw-bolder mx-2' >Item Id:</span>
            <span className='fs-6 me-auto' >[{Rec.Id}]</span>
          </div>

        </div>

        {/* Header- Close button part */}
        <div style={{ position: 'absolute', top: '0px', right: '2px' }}>
          {/* <ImEnter className='fs-3  text-danger ' onClick={() => HandleCloseWindow(true)} /> */}
          <CgCloseO className='fs-3  text-danger ' onClick={() => HandleCloseWindow(true)} />
          {/* <SlClose className='fs-3 ms-auto text-danger '  /> */}
        </div>
      </div>

      {/* Body- Voucher Detail- Body */}
      <div className='card-body shadow d-flex gap-2 justify-content-between  align-items-start  w-100'>

        {/* {SelectedItems.map((ITM, I) => {
  let Product = Products.find((P) => P.Code === ITM.Code)
  ITM.Title = Product.Title
  ITM.TitleU = Product.TitleU
  ITM.Pic = Product.Pic */}

        {/* <div className="card shadow  p-0 mb-1" style={{ width: "100%", maxWidth: '125px', minWidth: '100px' }} > */}
        <div className=" p-0 mb-1" style={{ width: "50%" }} >

          <div className='d-flex  mb-2 ' >
            <span className='fw-bolder' style={{ width: '33%', fontSize: '14px' }}>Title:</span>
            <span className='me-auto border-bottom ' style={{ width: '66%' }}>{Rec.Title}</span>
          </div>

          {/* <div className='d-flex  mb-2 ' >
            <span className='fw-bolder' style={{ width: '33%', fontSize: '14px' }}>نام :</span>
            <span className='me-auto border-bottom fs-5 fw-bolder' style={{ width: '66%' }}>{Rec.TitleU}</span>
          </div> */}

          {/* <div className='d-flex  mb-2 ' >
            <span className='fw-bolder' style={{ width: '33%', fontSize: '14px' }}>Supplier:</span>
            <span className='me-auto border-bottom ' style={{ width: '66%' }}>{'Code'}</span>
          </div> */}

          {/* <div className='d-flex  mb-2 ' >
            <span className='fw-bolder' style={{ width: '33%', fontSize: '14px' }}>Supplier:</span>
            <span className='me-auto border-bottom ' style={{ width: '66%' }}>{'Suppler Title'}</span>
          </div> */}

          <div className='d-flex  mb-2 ' >
            <span className='fw-bolder' style={{ width: '33%', fontSize: '14px' }}>Detail :</span>
            <span className='me-auto border-bottom ' style={{ width: '66%' }}>{Rec.Desc}</span>
          </div>

          <div className='d-flex  mb-2 ' >
            <span className='fw-bolder' style={{ width: '33%', fontSize: '14px' }}>Type:</span>
            <span className='me-auto border-bottom ' style={{ width: '66%' }}>{Rec.RefCat.Title}</span>
          </div>

          <div className='d-flex  mb-2 ' >
            <span className='fw-bolder' style={{ width: '33%', fontSize: '14px' }}>Remarks:</span>
            <span className='me-auto border-bottom ' style={{ width: '66%' }}>{Rec.Rem}</span>
          </div>

        </div> {/* */}


        <div className=" p-0 mb-1" style={{ width: "30%" }} >

          <div className='d-flex  mb-2 ' >
            <span className='fw-bolder' style={{ width: '50%', fontSize: '14px' }}>Priority:</span>
            <span className='me-auto border-bottom ' style={{ width: '50%' }}>{Rec.Priority}</span>
          </div>

          <div className='d-flex  mb-2 ' >
            <span className='fw-bolder' style={{ width: '50%', fontSize: '14px' }}>Single Rate:</span>
            <span className='me-auto border-bottom ' style={{ width: '50%' }}>{Rec.Price}</span>
          </div>

          <div className='d-flex  mb-2 ' >
            <span className='fw-bolder' style={{ width: '50%', fontSize: '14px' }}>Package Rate:</span>
            <span className='me-auto border-bottom ' style={{ width: '50%' }}>{Rec.Price2}</span>
          </div>

          <div className='d-flex  mb-2 ' >
            <span className='fw-bolder' style={{ width: '50%', fontSize: '14px' }}>Unit:</span>
            <span className='me-auto border-bottom ' style={{ width: '50%' }}>{Rec.Unit}</span>
          </div>

          <div className='d-flex  mb-2 ' >
            <span className='fw-bolder' style={{ width: '50%', fontSize: '14px' }}>Balance</span>
            <span className='me-auto border-bottom ' style={{ width: '50%' }}>{Rec.CrntBal}</span>
          </div>
        </div> {/* */}

        {/* <div className=" p-0 mb-1" style={{ width: "20%" }} >
          <div className='d-flex  mb-2 ' >
            <span className='fw-bolder' style={{ width: '50%', fontSize: '14px' }}>Qty-Std </span>
            <span className='me-auto border-bottom text-center' style={{ width: '50%' }}> {Rec.QtyDef}</span>
          </div>

          <div className='d-flex  mb-2 ' >
            <span className='fw-bolder' style={{ width: '50%', fontSize: '14px' }}>Qty-Plus </span>
            <span className='me-auto border-bottom text-center' style={{ width: '50%' }}> {Rec.QtyInc}</span>
          </div>

          <div className='d-flex  mb-2 ' >
            <span className='fw-bolder' style={{ width: '50%', fontSize: '14px' }}>Qty-Step </span>
            <span className='me-auto border-bottom text-center' style={{ width: '50%' }}> {Rec.QtyInc}</span>
          </div>

          <div className='d-flex  mb-2 ' >
            <span className='fw-bolder' style={{ width: '50%', fontSize: '14px' }}>Level Min </span>
            <span className='me-auto border-bottom text-center' style={{ width: '50%' }}> {Rec.QtyMin}</span>
          </div>

          <div className='d-flex  mb-2 ' >
            <span className='fw-bolder' style={{ width: '50%', fontSize: '14px' }}>Level Max </span>
            <span className='me-auto border-bottom text-center' style={{ width: '50%' }}> {Rec.QtyMax}</span>
          </div>
        </div>  */}

        <div className=' ' style={{ width: '20%' }} >
          <div className="card-img-top p-1" >
            {/* <img src={`Images/ItemsStore/${Rec.Pic}`} style={{ width: "100%", height: '100%', cursor: 'pointer' }} alt="..." /> */}
            {/* <img src={`Uploads/Items/${Rec.PicURL}`} style={{ width: "100%", height: '100%', cursor: 'pointer' }} alt="..." /> */}
            <img src={process.env.REACT_APP_API_URL + `Procedures/GetFile/${Rec.PicURL}`} style={{ width: "100%", height: '100%', cursor: 'pointer' }} alt="..." />
          </div>
        </div>

      </div> {/* parent card body */}


    </>
  )
}

export default RecDetailDisp




