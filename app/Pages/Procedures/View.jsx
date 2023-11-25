import React, { useState } from 'react'
import DataGridItems from './Components/DataGridItems';
import DatatableItems from './Components/DatatableItems';

import { HiOutlineQueueList } from 'react-icons/hi2';
import { GrRefresh } from 'react-icons/gr';
import { IoIosRefresh } from 'react-icons/io';
import { FaRedo } from 'react-icons/fa';

function View() {
  const [Need2Refresh, setNeed2Refresh] = useState(false);

  // useEffect(() => {
  //   const controller = new AbortController();
  //   const signal = controller.signal;

  //   DataFetchTrans(signal)

  //   setRec(RecDefault);

  //   // setRec({ ...Rec, ACCodeC: { ...ACCodeC, Code: C[0].VNo }, ACCodeD: { ...ACCodeD, Code: D[0].VNo } })
  //   // RecDefault.ACCodeC.VNo = C[0].VNo; RecDefault.ACCodeD.VNo = D[0].VNo

  //   //....  ABORT  ......................................
  //   return () => { controller.abort() };
  // }, [Need2Refresh])


  const HandleBtnReset = () => { setNeed2Refresh(p => !p) }

  return (
    <>
      {/* {console.log('Entering in return:', RecAll)} */}

      <div className="card">

        {/* ====================================================== */}
        {/* MAIN HEADER - PRG  */}  {/* background-color:F3E5F5 */}
        {/* ====================================================== */}
        <div className="card-header px-2 d-flex  justify-content-between align-items-center" style={{ height: 30, backgroundColor: '#E1BEE7' }}>

          {/* ............. Display ICON & TITLE  ............. */}
          <div className="d-flex  gap-2 align-items-center">
            <span className="p-0 mb-2 fs-3 text-danger" ><HiOutlineQueueList /></span>
            <span className='fs-4'> Report View: Kitchen Items</span>
            {/* <span className='fs-4'> DispRecIndex {CrntIdx2DisplayRec} </span> */}
          </div>

          {/* ............. Display BUTTONS toolbar  ............. */}
          <div className="d-flex  gap-2 align-items-center">

            {/* ............. Display BUTTON SEARCH text and Icon  ............. */}
            <button type="button" className="btn btn-sm btn-info mx-2 py-0 my-0 " style={{ height: '24px' }}
            onClick={() => { HandleBtnReset() }}            >
              Reload Data  <FaRedo className='mb-1 text-success' style={{ width: '20px', height: '20px' }} />
            </button>

          </div>

        </div>    {/* END: Header for Search Input Selection  */}
        {/* ===========================[ END: Header for Search Input Selection ]===========================================  */}


        {/* =================================================================================== */}
        {/* =====[    Main content CARD BODY start            ]===========================================  */}
        {/* =================================================================================== */}
        <div className="card-body p-1 d-flex flex-row justify-content-center  " style={{ background: '#F3E5F5' }}>

          {/* Transaction List */}
          <div className="card px-1 pt-1 pb-0 shadow-lg" style={{ width: '100%' }}>
            {/* {RecAll.length <= 0
              ? <div>No Data Found... </div>
              : <DataGridItems />
            } */}

            <DataGridItems Need2Refresh={Need2Refresh}/>
          </div>


        </div>{/* /.Main-card-body */}


        {/* =================================================================================== */}
        {/* =====[    Main CARD BODY ends here            ]===========================================  */}
        {/* =================================================================================== */}
      </div >
      {/* /.Main-card */}


    </>
  )
}

export default View
