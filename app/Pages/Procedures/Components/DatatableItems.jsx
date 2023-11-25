import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import DataTable from 'react-data-table-component'
import { AlertRec } from '../../../../StdLib'



const DatatableItems = () => {
    const [Rec, setRec] = useState([])
    const [AllRecs, setAllRecs] = useState([])
    const [FilteredRec, setFilteredRec] = useState([])
    const [SearchTxt, setSearchTxt] = useState('')
    const [Need2Refresh, setNeed2Refresh] = useState(false);


    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        // getCountries()
        DataFetchAllRecs(signal)

        //....  ABORT  ......................................
        return () => { controller.abort() };
    }, [Need2Refresh])

    useEffect(() => {
        // if (!SearchTxt) return

        const result = AllRecs.filter(itm => {
            return itm.Title.toLowerCase().match(SearchTxt.toLocaleLowerCase())
        })
        setFilteredRec(result)

    }, [SearchTxt])
    // \/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/

    // const getCountries = async () => {
    //     try {
    //         const res = await axios.get("https://restcountries.com/v2/all")
    //         setAllRecs(res.data)
    //         setFilteredRec(res.data)
    //     }
    //     catch (err) { alert(err) }
    // }

    const DataFetchAllRecs = async (signal) => {
        // fetch(process.env.REACT_APP_API_URL + `TranStoreIssue`, { method: 'GET' })
        //   .then(res => res.json())
        //   .then(data => {//        console.log('Trans Purchase Full Data', data)
        //     //AlertRec(data, 'Data Rcvd')            
        //     setTransAll(data)
        //   })
        try {
            const res = await axios.get(process.env.REACT_APP_API_URL + `Item`)
            // AlertRec(res.data, 'Data Rcvd')
            setAllRecs(res.data)
            setFilteredRec(res.data)
        }
        catch (err) { alert(err) }

    }


    //Table: Item - { Id/Auto, Code, Title, TitleU, Desc, Rem, CatCode, TId, PicURL, Unit, QtyDef, QtyInc, QtyStep, Price, PreBal, CrntBal, QtyMin, QtyMax, RecType, RecStatus, Priority, EntryBy, EntryDte

    const cols = [
        {
            name: 'Item Code',
            // selector: r => <span>{r.Id} <img src={process.env.REACT_APP_API_URL + `Item/GetFile/${r.PicURL}`} width={25} height={25} /> </span>,
            selector: r => <span>{r.Id}  </span>,
            sortable: true,
            style: { color: 'red', margin: '0', padding: '0' }
        },
        {
            name: 'Image',
            selector: r => 'dsfkljskldfj ', //<img src={process.env.REACT_APP_API_URL + `Item/GetFile/${r.PicURL}`} width={25} height={25} />,
            style: { color: 'red', margin: '0', padding: '0' }
        },
        {
            name: 'Title',
            selector: r => r.Title,
            sortable: true,
            style: { margin: '0', padding: '0' }

        },
        {
            name: 'Urdu Title',
            selector: r => r.TitleU,
            style: { margin: '0', padding: '0' }
            // selector: r => <img src={r.flag} width={50} height={50} />
        },
        // {
        //     name: 'Actions',
        //     cell: (r) =>
        //         <button className='btn btn-primary' onClick={() => alert(r.name + '   ' + r.capital)}>
        //             edit
        //         </button>
        // }

        {
            name: 'Category',
            selector: r => r.CTitle,
            style: { margin: '0', padding: '0' }
        },
        {
            name: 'Supplier',
            selector: r => r.TTitle,
            style: { margin: '0', padding: '0' }
        },
        {
            name: 'Price',
            selector: r => r.Price,
            style: { margin: '0', padding: '0' }
        },
        {
            name: 'Unit',
            selector: r => r.Unit,
            // cell: r => <div> <div style={{ fontWeight: 'bold' }}>{r.Unit}</div>@ {r.Price}</div>,
            style: { margin: '0', padding: '0' },
            width: '100px'

        },

    ]

    // const exportData=() => {
    //     const actionsMemo = React.useMemo(() => <Export onExport={() => downloadCSV(data)} />, []);

    //     return <DataTable title="Movie List" columns={columns} data={data} actions={actionsMemo} />;
    // }

    const conditionalRowStyles = [
        {
         when: row => row.Id>3000,
          style: {
            backgroundColor: 'green',
            paddingTop:'0',
            marginTop:'0',
            lineHeight:'1',
            height:'10px',
            color: 'white',
            '&:hover': {
              cursor: 'pointer',
            },
          },
        }
        ,
        // You can also pass a callback to style for additional customization
        {
          when: row => row.Id < 300,
          style: row => ({ backgroundColor: 'pink'  }),
        },
      ];


    return (
        <>
            <DataTable
                title={'Items list'}
                columns={cols}
                conditionalRowStyles={conditionalRowStyles}

                // data={Rec}
                data={FilteredRec}
                pagination
                fixedHeader
                fixedHeaderScrollHeight='300px'
                selectableRows
                selectableRowsHighlight
                highlightOnHover
                actions={<button className='btn btn-info'>Export</button>}

                dense
                //   for filtering enable subheader first
                subHeader
                subHeaderComponent={
                    <input type='text' placeholder={'Search'}
                        className="form-control w-25"
                        value={SearchTxt}
                        onChange={(e) => setSearchTxt(e.target.value)}
                    />
                }
                subHeaderAlign='center'



            />
        </>
    )
}

export default DatatableItems
