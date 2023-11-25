import React, { useState } from 'react'
import Chevron from './chevron.svg'
import ImgMale from '../../../../ImagesAdminPanel/default/Male.png'
import ImgFemale from '../../../../ImagesAdminPanel/default/Female.png'
import { AlertRec } from '../../../../../StdLib'

const AccordianCard = ({RecItm}) => {
  const [AccordianToggle, setAccordianToggle] = useState(false)

  console.log('AccordianToggle', AccordianToggle)
  const handleAccordianToggle = (e) => {
    console.log('New Value AccordianToggle:', AccordianToggle)
    setAccordianToggle(!AccordianToggle)
  }

  return (
    <>
      <div className="card" >
        {/* Card Header */}
        <div className="card-header d-flex justify-content-between py-0" onClick={(e) => handleAccordianToggle(e)} style={{ background: '#7177ca', color: 'white' }} >
          <div className='d-flex'>
            {/* <span> <img src={(RecItm.Gender===0)?ImgFemale:ImgMale}   style={{margin:'1px 10px'}} alt="Male" width={'20px'}/> </span>   */}
            <div style={{width:'50px'}}> [{RecItm.Id}]  </div>
            <div> <img src={process.env.REACT_APP_API_URL + `Item/GetFile/${RecItm.PicURL}`} alt="..." width='20px' height='20px' 
            className='mx-3 ' /></div>

             {RecItm.Title} {RecItm.TitleU}
            </div>

          <img className={(AccordianToggle?AccordianToggle: '') && "active"} width='20px' src={Chevron}
            style={{
              transform: (AccordianToggle && "active") ? 'rotate(0deg)' : 'rotate(-90deg)',
              transition: 'transform 0.2s ease-in-out'
            }}
            alt=">" />

        </div>

        {/* Card Body */}
        <div className="card-body " style={{ fontSize: '14px', display: (AccordianToggle) ? 'block' : 'none' }}>
          <div className="container d-flex gap-1 shadow"  style={{ fontSize: '12px'}}>

            <div className="d-flex flex-column flex-fill " >
              <img src={process.env.REACT_APP_API_URL + `Item/GetFile/${RecItm.PicURL}`} alt="..." width='100px' height='100px' className='border shadow' />

              <div className='text-danger mt-2 d-flex  flex-fill' >
                <table width='60%'>
                  <tr> <th className='text-danger' >Ref. Code: </th> <td className='text-black' >{RecItm.Id}</td>  </tr>
                  {/* <tr> <td className='text-black' >{RecItm.Id}</td>  </tr> */}
                  {/* <tr> <th className='text-danger' >Remarks</th>  </tr> */}
                  {/* <tr> <td className='text-black' >RecItm.RemLeave</td>  </tr> */}
                </table>
              </div>
            </div>

            {/* <div className="d-flex" style={{ width:'28%' }}> */}
            <div className="d-flex  flex-fill" >
            <table  width='100%'>
                <tr style={{borderBottom:'1px solid #ddd'}}> <th >Title</th>    <td >{RecItm.Title} </td>  </tr>
                <tr style={{borderBottom:'1px solid #ddd'}}> <th>نام </th>    <td>{RecItm.TitleU} </td>  </tr>
                {/* <tr style={{borderBottom:'1px solid #ddd'}}> <th>Gender</th>    <td>{RecItm.Gender} </td>  </tr> */}
                <tr style={{borderBottom:'1px solid #ddd'}}> <th>Category</th>    <td>{RecItm.CTitle} </td>  </tr>
                <tr style={{borderBottom:'1px solid #ddd'}}> <th>Supplier</th>    <td>{RecItm.TTitle} </td>  </tr>
                {/* <tr style={{borderBottom:'1px solid #ddd'}}> <th>Father Name</th>    <td>{RecItm.FName} </td>  </tr>
                <tr style={{borderBottom:'1px solid #ddd'}}> <th>Father Name U</th>    <td>{RecItm.FNameU} </td>  </tr> */}
              </table>
            </div>

            <div className="d-flex  flex-fill" >
            <table  width='100%'>
                <tr style={{borderBottom:'1px solid #ddd'}}> <th>Description</th>    <td>{RecItm.Desc} </td>  </tr>
                <tr style={{borderBottom:'1px solid #ddd'}}> <th>Remarks</th>    <td>{RecItm.Rem} </td>  </tr>
                <tr style={{borderBottom:'1px solid #ddd'}}> <th>---</th>    <td>  </td> {' '} </tr>
                <tr style={{borderBottom:'1px solid #ddd'}}> <th>Status</th>    <td>{RecItm.Status} </td>  </tr>
                <tr style={{borderBottom:'1px solid #ddd'}}> <th>Priority</th>    <td>{RecItm.Priority} </td>  </tr>
                {/* <tr style={{borderBottom:'1px solid #ddd'}}> <th>Vehicle Type</th>    <td>{RecItm.VehDesc} </td>  </tr> */}
                {/* <tr style={{borderBottom:'1px solid #ddd'}}> <th>Address</th>    <td>{RecItm.Address} </td>  </tr> */}
                {/* <tr style={{borderBottom:'1px solid #ddd'}}> <th>References</th>    <td>{RecItm.Ref} </td>  </tr> */}
                {/* <tr style={{borderBottom:'1px solid #ddd'}}> <th>Detail</th>    <td>{RecItm.RefDesc} </td>  </tr> */}
              </table>
            </div>

            <div className="d-flex  flex-fill" >
              <table   width='100%'>
                <tr style={{borderBottom:'1px solid #ddd'}}> <th >Qty-Std</th>    <td >{RecItm.QtyDef} </td>  </tr>
                <tr style={{borderBottom:'1px solid #ddd'}}> <th>Qty-Plus </th>    <td>{1} </td>  </tr>
                <tr style={{borderBottom:'1px solid #ddd'}}> <th>Qty-Step </th>    <td>{RecItm.QtyInc} </td>  </tr>
                <tr style={{borderBottom:'1px solid #ddd'}}> <th>Level Min </th>    <td>{RecItm.QtyMin} </td>  </tr>
                <tr style={{borderBottom:'1px solid #ddd'}}> <th>Level Max</th>    <td>{RecItm.QtyMax} </td>  </tr>
                {/* <tr style={{borderBottom:'1px solid #ddd'}}> <th>Duties</th>    <td>{RecItm.JobDuty} </td>  </tr> */}
                {/* <tr style={{borderBottom:'1px solid #ddd'}}> <th>Experience </th>    <td>{RecItm.Experience} </td>  </tr> */}
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default AccordianCard
