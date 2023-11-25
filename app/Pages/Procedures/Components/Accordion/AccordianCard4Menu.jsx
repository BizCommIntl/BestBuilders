import React, { useState } from 'react'
import TranBillMenuTabContent from '../../Tran/TranBillMenuTabContent'

import Chevron from './chevron.svg'
import ImgMale from '../../../../ImagesAdminPanel/default/Male.png'
import ImgFemale from '../../../../ImagesAdminPanel/default/Female.png'
import { DataCategories } from '../../../../AdminData/WarehouseData/DataCategories'

export default function AccordianCard4Menu(props) {
  const { CAT, Products, OrderSheetItems, OrderItemAdd, OrderItemDel } = props

  const [AccordianToggle, setAccordianToggle] = useState(false)
  const handleAccordianToggle = (e) => { setAccordianToggle(!AccordianToggle) }

  let SelectedItem = ''
  return (
    <>
      <div className="card ">

        {/* Card Header */}
        <div className="card-header d-flex justify-content-between py-0" onClick={(e) => handleAccordianToggle(e)} style={{ background: '#7177ca', color: 'white' }} >

          {/* <span> <img src={(Rec4TranMenuCat.Gender===0)?ImgFemale:ImgMale}   style={{margin:'1px 10px'}} alt="Male" width={'20px'}/> </span>   */}
          <span> [{CAT}]  {(SelectedItem = DataCategories.find((E) => E.Id === CAT)) ? <span className='text-white'>{SelectedItem.Title}  - {SelectedItem.Desc} </span> : <span>Supplier Not Registered</span>}</span>

          <img className={(AccordianToggle?AccordianToggle: '') && "active"} width='20px' src={Chevron} alt=">"
            style={{ transform: (AccordianToggle && "active") ? 'rotate(0deg)' : 'rotate(-90deg)', transition: 'transform 0.2s ease-in-out' }} />

        </div>  {/* END- Card Header */}

        {/* Card Body */}
        <div className="card-body p-1" style={{ display: (AccordianToggle) ? 'block' : 'none' }}>
          {/* <div className="container d-flex gap-1 shadow" style={{ fontSize: '12px' }}> */}

          {/* <div className="d-flex" style={{ width:'28%' }}> */}
          {/* <div className="d-flex  flex-fill" > */}
          {/* <div className="d-flex   flex-column" > */}

          {/* ================================ */}
          {[...new Set(Products.filter(rec => rec.Cat === CAT).map(R => R.Cat))].map((CAT) => (
            <div className='card mb-1 d-flex flex-row flex-wrap  justify-content-evenly w-100'>
              {Products.filter(rec => rec.Cat === CAT).map((ITM, IDX) => {
                return (
                  <TranBillMenuTabContent
                    ITM={ITM}
                    OrderSheetItems={OrderSheetItems}
                    OrderItemAdd={OrderItemAdd}
                    OrderItemDel={OrderItemDel}
                  />)
              })}
            </div>
          ))}
          {/* ================================ */}
          {/* </div> */}

          {/* </div> */}
        </div> {/* END- Card Body */}

      </div>
    </>
  )
}
