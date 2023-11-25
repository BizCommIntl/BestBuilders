import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { DataGrid, GridToolbar, GridToolbarContainer, GridToolbarExport } from '@mui/x-data-grid'
import { AlertRec } from '../../../../StdLib'
import { CgCloseO } from 'react-icons/cg'



export default function DataGridItems({Need2Refresh}) {
    const [Rec, setRec] = useState([])
    const [RecsAll, setRecsAll] = useState([])
    const [FilteredRec, setFilteredRec] = useState([])
    const [SearchTxt, setSearchTxt] = useState('')
    // const [Need2Refresh, setNeed2Refresh] = useState(false);


    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        // getCountries()
        DataFetchRecsAll(signal)

        //....  ABORT  ......................................
        return () => { controller.abort() };
    }, [Need2Refresh])

    useEffect(() => {
        // if (!SearchTxt) return

        const result = RecsAll.filter(itm => {
            return itm.Title.toLowerCase().match(SearchTxt.toLocaleLowerCase())
        })
        setFilteredRec(result)

    }, [SearchTxt])
    // \/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/

    // const getCountries = async () => {
    //     try {
    //         const res = await axios.get("https://restcountries.com/v2/all")
    //         setRecsAll(res.data)
    //         setFilteredRec(res.data)
    //     }
    //     catch (err) { alert(err) }
    // }

    const DataFetchRecsAll = async (signal) => {
        // fetch(process.env.REACT_APP_API_URL + `TranStoreIssue`, { method: 'GET' })
        //   .then(res => res.json())
        //   .then(data => {//        console.log('Trans Purchase Full Data', data)
        //     //AlertRec(data, 'Data Rcvd')            
        //     setTransAll(data)
        //   })
        try {
            const res = await axios.get(process.env.REACT_APP_API_URL + `Item`)
            // AlertRec(res.data, 'Data Rcvd')
            setRecsAll(res.data)
            setFilteredRec(res.data)
        }
        catch (err) { alert(err) }

    }


    //Table: Item - { Id/Auto, Code, Title, TitleU, Desc, Rem, CatCode, TId, PicURL, Unit, QtyDef, QtyInc, QtyStep, Price, PreBal, CrntBal, QtyMin, QtyMax, RecType, RecStatus, Priority, EntryBy, EntryDte
    const GridCols = [
        { field: 'Id', headerName: 'Code#', width: 60, sortable: true, filterable: false },
        {
            field: 'PicURL', headerName: 'Image', width: 100, sortable: false, filterable: false,
            renderCell: (params) => <img src={process.env.REACT_APP_API_URL + `Item/GetFile/${params.row.PicURL}`} width={25} height={25} />
        },

        { field: 'Title', headerName: 'Title', width: 200 },
        { field: 'TitleU', headerName: 'Title', width: 100 },
        { field: 'CTitle', headerName: 'Category', width: 150 },
        { field: 'TTitle', headerName: 'Supplier', width: 200 },
        { field: 'Price', headerName: 'Price', width: 50 },
        { field: 'Unit', headerName: 'Unit', width: 50 }

    ]

    // const exportData=() => {
    //     const actionsMemo = React.useMemo(() => <Export onExport={() => downloadCSV(data)} />, []);

    //     return <DataTable title="Movie List" columns={columns} data={data} actions={actionsMemo} />;
    // }

    return (
        <>
            <div className='Card' style={{ width: '100%', height: '450px' }}>

                {/* Voucher Detail- Header */}
                {/* <div className='card-header  p-1 d-flex  w-100' style={{height:'30px'}}>
                </div> */}

                {/* Body- Voucher Detail- Body */}
                <div className='card-body p-1 shadow w-100 'style={{height:'90%'}}>
                    <DataGrid
                        columns={GridCols}
                        rows={FilteredRec}
                        density={'compact'}

                        getRowId={r => r.Id}
                        getRowHeight={() => 'auto'}

                        pageSize={5}
                        rowsPerPageOptions={[5]}

                        components={{Toolbar: ()=>{ return <GridToolbarContainer sx={{justifyContent:'flex-end'}}> <GridToolbarExport/> </GridToolbarContainer>}}}
                    />
                </div>
            </div> {/* parent card body */}
        </>
    )
}
