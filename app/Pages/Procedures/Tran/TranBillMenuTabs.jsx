import React from 'react'

import { Container, Row, Col, Tab, Tabs, Nav } from 'react-bootstrap-v5'
import { DataCategories } from '../../../AdminData/WarehouseData/DataCategories'
import TranBillMenuTabContent from './TranBillMenuTabContent'
// import AccordianCard4Menu from '../Components/Accordion/AccordianCard4Menu'
import Chevron from '../Components/Accordion/chevron.svg'

import { FaSave, FaUserPlus, FaUserEdit, FaUsers, FaUserCog, FaUsersSlash } from 'react-icons/fa'
import { TfiLayoutAccordionList } from 'react-icons/tfi'
import { TbManualGearbox } from 'react-icons/tb'
import { AiOutlineWeibo } from 'react-icons/ai'
import { HiOutlineQueueList } from 'react-icons/hi2'
import { FaPlus, FaMinus } from 'react-icons/fa'

//Play, back, next, fwwd
import { FaStepBackward, FaBackward, FaForward, FaStepForward } from 'react-icons/fa'
import { useState } from 'react'
import { useEffect } from 'react'
import AccordianCard4Menu from '../Components/Accordion/AccordianCard4Menu'

export default function TranBillMenuTabs(props) {
    const { Products, OrderSheetItems, OrderItemAdd, OrderItemDel } = props

    // const [UniqueCategories, setUniqueCategories] = useState(DataCategories.filter(rec => { return (rec.Id.substr(1, 1) === '0') }))
    const [CategoryHeads, setCategoryHeads] = useState(DataCategories.filter(rec => { return (rec.Id.substr(1, 1) === '0') }))

    // Accordian Menu ============================
    const [AccordianToggle, setAccordianToggle] = useState(false)
    const handleAccordianToggle = (e) => { setAccordianToggle(!AccordianToggle) }
    // Accordian Menu ============================

    let SelectedItem = ''
    let crntCat = ''

    return (<>
        {/* onSelect={(k) => setKey(k)}  //when const [key, setKey] = useState('home'); */}
        <Tab.Container defaultActiveKey={CategoryHeads.at(0).Id}>

            <div className="card shadow-lg">
                <div >
                    <Nav variant="pills" style={{ fontSize: '14px' }} >
                        {CategoryHeads.map((E, I) => (
                            <Nav.Item style={{ cursor: 'pointer' }}> <Nav.Link eventKey={E.Id}  >{E.Desc} </Nav.Link> </Nav.Item>))}
                    </Nav>
                </div>

            </div >

            <div className="card-body p-0 " style={{ fontSize: '12px', backgroundColor: 'gainsboro' }}>
                <Tab.Content >
                    {CategoryHeads.map((E, I) => (
                        <Tab.Pane eventKey={E.Id}>
                            {/* {console.log('UNIQUE CATEGORIES ARRAY: ', [...new Set(Products.filter(rec => rec.Id.substr(0, 1) === E.Id.substr(0, 1)).map(R => R.Cat))])} */}
                            <div className='d-flex flex-column '>
                            {/* <div className='d-flex flex-row flex-wrap'> */}
                                {(E.Id === '80')
                                    ? (
                                        [...new Set(Products.filter(rec => rec.Cat.substr(0, 1) === E.Id.substr(0, 1)).map(R => R.Cat))].map((CAT) => (
                                            // <div style={{ width: '50%' }}>
                                                <AccordianCard4Menu 
                                                CAT={CAT} 
                                                Products={Products} 
                                                OrderSheetItems={OrderSheetItems} 
                                                OrderItemAdd={OrderItemAdd} 
                                                OrderItemDel={OrderItemDel} />
                                            // </div>
                                        ))
                                    )
                                    : (<>
                                        {[...new Set(Products.filter(rec => rec.Cat.substr(0, 1) === E.Id.substr(0, 1)).map(R => R.Cat))].map((CAT) => (
                                            <div className='card mb-1 d-flex flex-row flex-wrap  justify-content-evenly w-100'>
                                                {Products.filter(rec => rec.Cat === CAT).map((ITM, IDX) => {
                                                    return (<TranBillMenuTabContent 
                                                        ITM={ITM} 
                                                        OrderSheetItems={OrderSheetItems} 
                                                        OrderItemAdd={OrderItemAdd} 
                                                        OrderItemDel={OrderItemDel} />)
                                                })}
                                            </div>
                                        ))}
                                    </>)
                                }
                            </div>
                        </Tab.Pane>
                    ))}
                </Tab.Content>
            </div>

        </Tab.Container >
    </>)
}