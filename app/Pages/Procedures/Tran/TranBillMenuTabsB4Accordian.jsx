import React from 'react'

import { Container, Row, Col, Tab, Tabs, Nav } from 'react-bootstrap'
import { DataCategories } from '../../../AdminData/WarehouseData/DataCategories'
import TranBillMenuTabContent from './TranBillMenuTabContent'
import AccordianCard4Menu from '../Components/Accordion/AccordianCard4Menu'

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
const Xdata = [
    {
        category: 'category1',
        orders: [
            { productname: 'pn1', image: 'img1', quantity: 1, orderid: 'ord1' },
            { productname: 'pn2', image: 'img2', quantity: 2, orderid: 'ord2' }
        ]
    },
    {
        category: 'category2',
        orders: [
            { productname: 'pn3', image: 'img3', quantity: 1, orderid: 'ord3' },
            { productname: 'pn4', image: 'img4', quantity: 2, orderid: 'ord4' },
            { productname: 'pn5', image: 'img5', quantity: 2, orderid: 'ord4' },
        ]
    }];

const items = [
    { id: 1, category: "cat_1", title: "My title 1" },
    { id: 2, category: "cat_2", title: "My title 2" },
    { id: 6, category: "cat_1", title: "Another title 1" },
    { id: 1, category: "cat_3", title: "My title 3" },
    { id: 8, category: "cat_1", title: "Third Title" },
    { id: 2, category: "cat_2", title: "Another title 2 " }
];

export default function TranBillMenuTabs(props) {
    const { Products, OrderSheet, OrderItemAdd, OrderItemDel } = props
    // const [UniqueCategories, setUniqueCategories] = useState(DataCategories.filter(rec => { return (rec.Id.substr(1, 1) === '0') }))
    const [CategoryHeads, setCategoryHeads] = useState(DataCategories.filter(rec => { return (rec.Id.substr(1, 1) === '0') }))

    let SelectedItem = null
    let crntCat = ''

    // const [C, setC] = useState({})
    // const [D, setD] = useState(Xdata)

    // // const ItemsCategorized = items.reduce((CatsSofar, { category, title }) => {
    // const ItemsCategorized = items.reduce((CatsSofar, itm) => {
    //     if (!CatsSofar[itm.category]) CatsSofar[itm.category] = []
    //     CatsSofar[itm.category].push(itm)

    //     return CatsSofar;
    // }, {})
    // console.log('Categorized Cats:', ItemsCategorized);
    // alert(ItemsCategorized)

    // useEffect(()=>{
    //     alert('Welcome Intro')
    //     // setC(items.reduce((CatsSofar, { category, title }) => {
    //     setC(...C, {items.reduce((CatsSofar, itm ) => {
    //         if (!CatsSofar[itm.category]) CatsSofar[itm.category] = []
    //         CatsSofar[itm.category].push(itm)

    //         return CatsSofar;
    //     }, {}))}

    //     console.log('Cats Cs:', C);
    //     alert(C)
    // },[])


    return (
        <>
            {/* {Object.keys(CategoryHeads[0]).forEach(key => <div>{CategoryHeads[0][key]} {alert(key)}</div> )} */}
            {/* {Object.keys(D[0]).forEach(key => <div>{D[key]} {alert(key)}</div> )} */}
            {/* {alert(Object.keys({ test: '', test2: ''})[1] )} */}

            {/* {Object.keys({ test: 't1', test2: 't1' }).forEach((key, v) => <div>{[key]} {alert(v)}</div>)} */}


            {/* {Object.keys(D).map(cat => (
                <div>
                    <h3>{cat}</h3>
                    {D[cat].map(ord => (
                        <div>
                            <div>{ord.productname}</div>
                            <div>{ord.image}</div>
                            <div>{ord.quantity}</div>
                            <div>{ord.orderid}</div>
                        </div>
                    ))}
                </div>
            ))} */}

            {/* onSelect={(k) => setKey(k)}  //when const [key, setKey] = useState('home'); */}
            <Tab.Container defaultActiveKey={1}>

                <div className="card shadow-lg">
                    <div >
                        <Nav variant="pills" style={{ fontSize: '14px' }} >
                            {/* <Nav.Item > <Nav.Link eventKey="AddNew"  className='m-0 px-2 py-1 text-white' ><FaUserPlus className='fs-5'/> Add New</Nav.Link> </Nav.Item> */}
                            {/* {DataCategories.filter((rec => rec.Id)).map((E, I) => ( 
                            <Nav.Item style={{ cursor: 'pointer' }}> <Nav.Link eventKey={E.Id}>{E.Id}- {E.Desc} </Nav.Link> </Nav.Item> ))} 
                            */}

                            {/* {UniqueCat= [...new Set(DataCategories.map(rec => rec.Id.substring(0, 2)))]} */}
                            {/* {UniqueCat= DataCategories.filter(rec => {alert(rec.Id+' substr(1,1)'+rec.Id.substr(1,1)) ; return (rec.Id.substring(1,1)==='0')} )} */}
                            {/* {UniqueCat = DataCategories.filter(rec => { return (rec.Id.substr(1, 1) === '0') })} */}
                            {CategoryHeads.map((E, I) => (
                                <Nav.Item style={{ cursor: 'pointer' }}> <Nav.Link eventKey={E.Id}  >{E.Desc} </Nav.Link> </Nav.Item>))}
                        </Nav>
                    </div>

                </div >


                <div className="card-body p-0 " style={{ fontSize: '12px', backgroundColor: 'gainsboro' }}>
                    <Tab.Content >
                        {CategoryHeads.map((E, I) => (
                            <Tab.Pane eventKey={E.Id}>
                                <div className='d-flex flex-wrap '>

                                    {/* {Products.filter(rec => rec.Id.substr(0, E.Id.length) === E.Id).map((ITM, IDX) => { */}

                                    {/* {Products
                                        .filter(rec => rec.Cat.substr(0, 1) === E.Id.substr(0, 1))
                                        .map((ITM, IDX) => {

                                            // if (ITM.Cat.substr(1, 1) === '0') return (<>
                                            //     {(<TranBillMenuTabContent ITM={ITM} OrderSheet={OrderSheet} OrderItemAdd={OrderItemAdd} OrderItemDel={OrderItemDel} />)};
                                            // </>)
                                            // else return (<>
                                            // <Tab.Pane eventKey={ITM.Cat}><div>{ITM.Title}</div></Tab.Pane>
                                            // </>)
                                        })} */}

                                    {console.log('UNIQUE CATEGORIES ARRAY: ', [...new Set(Products.filter(rec => rec.Id.substr(0, 1) === E.Id.substr(0, 1)).map(R => R.Cat))])}

                                    {[...new Set(Products.filter(rec => rec.Cat.substr(0, 1) === E.Id.substr(0, 1)).map(R => R.Cat))].map((CAT) => (
                                        <div className='card mb-1 d-flex flex-row flex-wrap  justify-content-evenly w-100'>
                                            {Products.filter(rec => rec.Cat === CAT).map((ITM, IDX) => {
                                                return (<TranBillMenuTabContent ITM={ITM} OrderSheet={OrderSheet} OrderItemAdd={OrderItemAdd} OrderItemDel={OrderItemDel} />)
                                            })}
                                        </div>
                                    ))}

                                </div>

                            </Tab.Pane>
                        ))}

                    </Tab.Content>
                </div>

            </Tab.Container >
        </>)
}