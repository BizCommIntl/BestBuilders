import { createContext, useContext, useEffect, useReducer, useState } from 'react'

import { Container, Row, Col, Tab, Tabs, Nav } from 'react-bootstrap-v5'
// import './tempCSS.css';
import { FaSave, FaUserPlus, FaUserEdit, FaUsers, FaUserCog, FaUsersSlash } from 'react-icons/fa'
import { TfiLayoutAccordionList } from 'react-icons/tfi'
import { TbManualGearbox } from 'react-icons/tb'
import { FaMoneyBill } from 'react-icons/fa'
import { HiOutlineQueueList } from 'react-icons/hi2'

import imgPortal from './AssetsLocal/Images/Users.jpg'

import TranBill from './Tran/TranBill';
import View from './View';
import Manage from './Manage';
import Browse from './Browse';
import BrowseMultiCols from './BrowseMultiCols';
import axios from 'axios'
// import View from './View';
// import TestingPage2 from './TestingPage2';


const reducerFn = (crntState, action) => {
  switch (action.type) {
      case 'FETCH_LOADING': return ({ ...crntState, Loading: true }); break;
      case 'FETCH_SUCCESS': return ({ ...crntState, Loading: false, Procedures: action.payload }); break;
      case 'FETCH_ERROR': return ({ ...crntState, Loading: false, Error: action.payload }); break;

      default: return (crntState)
  }
}



export default function PortalProcedure() {
    const [{ Loading, Error, Procedures }, dispatch] = useReducer(reducerFn, { Loading: false, Error: '', Procedures: [] })

// ==================[  Fn: GET ALL RECORDS  ]=====================
const FetchData = async () => {
  dispatch({ type: 'FETCH_LOADING' })

  try {
      const result = await axios.get(process.env.REACT_APP_API_URL + `Procedure/GetAll`)
      console.log('*****************result: ', result); alert(result.data)            
      
      dispatch({ type: 'FETCH_SUCCESS', payload: result.data })
  } catch (error) {
      dispatch({ type: 'FETCH_SUCCESS', payload: error })
  }
  // setProducts(result.data)
}


// const DataFetchAll = async () => {
  // fetch(process.env.REACT_APP_API_URL + `Doctors`, { method: 'GET' })
  //     .then(res => res.json())
  //     // .then(data => { setRecAll(data) })
  //     .then(data => {
  //          AlertRec(data, 'DataRcvd')
  //         // console.log('Trans Purchase Full Data', data)
  //         return(data)
  //     })

  // const res= await fetch(process.env.REACT_APP_API_URL + `Doctors`, { method: 'GET' })
  // return (await res.json())
// }
// ==================[  Fn: GET Products ALL RECORDS  ]=====================

// useEffect(() => {
  // FetchData();
// }, [])


  return (
    <>
      <Tab.Container defaultActiveKey="Manage">
        <div className="card shadow-lg">

        <div className='card-header px-2 py-0  d-flex justify-content-between align-items-center' style={{ height: '35px', backgroundColor:'cadetblue' }}>
             
             <div className="d-flex gap-2 align-items-center ">
               <img className="p-0 m-0" style={{ width: 28, height: 28, borderRadius:'50%' }} src={imgPortal} />
               <div className='fs-3 fw-bold' style={{letterSpacing:'2px'}}> Procedures Portal</div>
               {/* <span className='p-0' style={{ fontSize: '26px', fontWeight: 'bold' }}>
                     Users Management Portal
               </span> */}
             </div>
             <div >
               <Nav variant="pills" className="flex-row align-items-center" >
                 <Nav.Item > <Nav.Link eventKey="Browse"  className='m-0 px-2 py-1  text-white' ><TfiLayoutAccordionList style={{fontSize:'22px'}} /> Browse</Nav.Link> </Nav.Item>
                 <Nav.Item > <Nav.Link eventKey="View"  className='m-0 px-2 py-1 text-white' ><HiOutlineQueueList  style={{fontSize:'28px'}}/> View</Nav.Link> </Nav.Item>
                 <Nav.Item > <Nav.Link eventKey="Manage"  className='m-0 px-2 py-1 text-white' ><TbManualGearbox style={{fontSize:'28px'}}/> Manage</Nav.Link> </Nav.Item>
                 {/* <Nav.Item > <Nav.Link eventKey="AddNew"  className='m-0 px-2 py-1 text-white' ><FaUserPlus className='fs-5'/> Add New</Nav.Link> </Nav.Item> */}
               </Nav>
             </div>

           </div>

          <div className="card-body p-2" style={{ backgroundColor: 'gainsboro' }}>
            <Tab.Content>

              <Tab.Pane eventKey="Browse">
                {/* <Browse/> */}
                {/* <BrowseMultiCols/> */}
                {/* <TranBill /> */}
              </Tab.Pane>

              <Tab.Pane eventKey="View">
                {/* <TestingPage2/> */}
                {/* <View/>                                  */}
              </Tab.Pane>

              <Tab.Pane eventKey="Manage">
                <Manage _RecsState= {{ Loading, Error, Procedures }} _RecsDispatch = {dispatch} />
                {/* <HandleBill/> */}
                {/* <TranBill/> */}
              </Tab.Pane>

              <Tab.Pane eventKey="AddNew">
                {/* <Create/> */}
              </Tab.Pane>

            </Tab.Content>
          </div>

        </div>
      </Tab.Container>
    </>
  )
}
