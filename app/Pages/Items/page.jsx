"use client"

import React, { useEffect, useState } from 'react'
import NF from 'react-number-format'
import Moment from 'moment'
import ReactDatePicker from 'react-datepicker'

import Image from 'next/image'
import { Input } from 'postcss'
import InputByAdaamText from '@/app/components/MyInputFloatingLabel/InputByAdaamText'
import InputByAdaamNumber from '@/app/components/MyInputFloatingLabel/InputByAdaamNumber'
import InputByAdaamDate from '@/app/components/MyInputFloatingLabel/InputByAdaamDate'
import InputByAdaamSelect from '@/app/components/MyInputFloatingLabel/InputByAdaamSelect'

const _DocsRef = [
  { Id: 101, Title: 'Case No. 101', City: 'Multan' }
  , { Id: 102, Title: 'Case No. 102', City: 'Karachi' }
  , { Id: 103, Title: 'Case No. 103', City: 'Lahore' }
  , { Id: 104, Title: 'Case No. 104', City: 'Sama Satha' }
  , { Id: 105, Title: 'Case No. 105', City: 'Mian Channu' }
  , { Id: 106, Title: 'Case No. 106', City: 'Lala Musa' }
  , { Id: 107, Title: 'Case No. 107', City: 'Kharian' }
  , { Id: 108, Title: 'Case No. 108', City: 'Hayderabad' }
  , { Id: 109, Title: 'Case No. 109', City: 'Bahawal Nagar' }
]

const Docs = [
  { Value: 101, Label: 'Case No. 101 xMultan', City: 'Multan' }
  , { Value: 102, Label: 'Case No. 102 xKarachi', City: 'Karachi' }
  , { Value: 103, Label: 'Case No. 103 xLahore', City: 'Lahore' }
  , { Value: 104, Label: 'Case No. 104 xSama Satha', City: 'Sama Satha' }
  , { Value: 105, Label: 'Case No. 105 xMian Channu', City: 'Mian Channu' }
  , { Value: 106, Label: 'Case No. 106 xLala Musa', City: 'Lala Musa' }
  , { Value: 107, Label: 'Case No. 107 xKharian', City: 'Kharian' }
  , { Value: 108, Label: 'Case No. 108 xHayderabad', City: 'Hayderabad' }
  , { Value: 109, Label: 'Case No. 109 xBahawal Nagar', City: 'Bahawal Nagar' }

]
const REC = { ID: '', IDx: '', Title: '', Desc: '', Rem: '', Paking: '', Unit: '', VDte: '', PPrice: 0, SPrice: 0, ImageURL: '', ImageFile: null }

export default function Items() {
  const [Rec, setRec] = useState({ REC })
  const [countries, setCountries] = useState(null);

  useEffect(() => {
    fetch("https://restcountries.com/v2/all?fields=name")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
      });
  }, []);


  const HandleInputs = (e) => {
    // console.log('******************** e: ', e)
    // alert('Received for : '+e.target.name+ ' value: '+e.target.value)
    setRec({ ...Rec, [e.target.name]: e.target.value })
  }

  const HandleInputsNumberFormat = (field, value) => {
    // console.log('******************** field: ', field, ' value: ', value)
    // alert('Received for : '+e.target.name+ ' value: '+e.target.value)
    setRec({ ...Rec, [field]: value })
  }

  const HandleInputsDatePicker = (field, date) => {
    // console.log('******************** field: ', field, ' date: ', date)
    // alert('Received for field: ' + field + ' date: ' + date)
    setRec({ ...Rec, [field]: date })
  }

  const HandleInputsSelect = (field, e) => {
    // console.log('******************** field: ', field, ' Object-e: ', e)
    //  alert('Received for field: '+field+ ' value: '+e.value)

    // let key = '', value = '';
    //  console.log('\n\n\nInput Done: obj:', obj, ' e: ', e)
    // console.log('\n\n\nInput Done: obj:', obj, ' e: ', e,' e.label: ', e.label, ' e.value: ', e.value, " e.label.indexOf(';'): ", e.label.indexOf(';'));
    // if (e) console.log( 'e is ok')     //e is null
    // else console.log( 'e is not ok')

    switch (field) {
      case 'IDx':
        if (e) setRec({ ...Rec, [field]: e.value })
        else setRec({ ...Rec, [field]: '' })
        break;

      default:    //Title, Phone, City
        if (e) {
          if (e.label.indexOf(';') >= 0)
            setOrderSheet({ ...Rec, [field]: e.label.substr(0, e.label.indexOf(';')) });
          else
            setOrderSheet({ ...Rec, [field]: e.label });
        }

        else setOrderSheet({ ...Rec, [field]: '' })
    }


  }

  const HandleBtnDelImg = () => {
    // setSelectedImgInURL('')
    // setSelectedImgFile(null)
    setRec({ ...Rec, ImageURL: '', ImageFile: null })
  }

  const HandleOnChangeFileBrowser = async (e) => {

    // alert('setting file in Page')
    // const FilesList = e.target.files
    const Files = [...e.target.files]
    const data = new FormData()

    for (const file of Files) {
      data.append('file', file)
    }

    // setSelectedImgInURL(URL.createObjectURL(Files[0]))
    // setSelectedImgFile(Files[0])
    setRec({ ...Rec, ImageURL: URL.createObjectURL(Files[0]), ImageFile: Files[0] })

  }



  return (
    <>
      {/* bg-teal-700 */}
      <div className="w-full md:w-1/2 mx-auto mt-1 md:mt-10 flex flex-col justify-center border rounded shadow-lg  ">
        <div className='text-3xl mx-auto my-2'>Items</div>

        <div className="w-md  border rounded shadow-lg grid grid-cols-1 md:grid-cols-2 ">

          {/* Left Panel */}
          <div className='mt-8 flex flex-col items-center'>


            {/* Input Code/ID  */}
            <div className='mt-7 w-full'>
              {/* <SelectorOrg/> */}
              <InputByAdaamSelect Options={Docs} TextKey='Label' ValueKey='Value' />
            </div>


            {/* Input Code/ID  */}
            {/* <div className='mt-7'>

              <InputByAdaamSelect Label='Slect Any Optins' Name='ID'
                setVal={HandleInputsSelect}
                Val={
                  Rec.IDx
                    // ? { value: VoucherCart.PatId, label: VoucherCart.RefPatient.Title + '...' + VoucherCart.PatId }
                    // _DocsRef.Data.find((E) => E.Id === e.value
                    ? { value: Rec.IDx, label: ((_DocsRef.find(e => (e.Id === Rec.IDx))) ? _DocsRef.find(e => (e.Id === Rec.IDx)).Title : 'not found') }
                    //  : { value: _DocsRef.Data[0].Id, label: _DocsRef.Data[0].Title }
                    // :HandleDefaultDoctor()
                    // : { value: '', label: '' }
                    //:_Patients.Data[0].Id
                    : ''
                }

                Options={_DocsRef.map((E, I) => { console.log('Data Array :', I, E.Title, E.City); return ({ key: I, value: Number(E.Id), label: E.Title + ';  ' + E.City }) })}
              />

            </div> */}

            {/* Input Order Date  */}
            <div className='mt-7'>
              <InputByAdaamDate Label='Entry Date' Name='VDte' Val={Rec.VDte} setVal={HandleInputsDatePicker}
              />
            </div>

            <div className='mt-7'>
            <ReactDatePicker
              id={'VDte'} name={'VDte'}
              // value={Val}
              placeholder="Mufakhar Adaam"

              dateFormat='d MMM yy'
              // moment(isoDateStr).toDate()
              // selected={new Date((Rec.VDte) ? new Date(Rec.VDte) : '')}

              value={Rec.VDte === ''
                ? ''
                : Moment(Rec.VDte).format('DD MMM, ddd')}

              selected={new Date((Rec.VDte) ? Rec.VDte : Date())}




              // onChange={(e) => setVal(e)}
              onChange={date => { (date) ? HandleInputsDatePicker('VDte', date) : HandleInputsDatePicker('VDte', '') }}
            />
          </div>

          {/* Input Descriptions  */}
          <div className='mt-7 w-full px-4'>
            <InputByAdaamText Label='Description' Name='Desc' Val={Rec.Desc} setVal={HandleInputs}
            />
          </div>

            {/* Input Order Date  */}
            <div className='mt-7 w-full px-4'>
              <InputByAdaamDate Label='Entry Date' Name='VDte' Val={Rec.VDte} setVal={HandleInputsDatePicker}
              />
            </div>

          {/* Input Sale Price  */}
          <div className='mt-7 w-full px-4'>
            <InputByAdaamNumber Label='Sale Price' Name='SPrice' Val={Rec.SPrice} setVal={HandleInputsNumberFormat}
            />
          </div>

          {/* Input Code/ID  */}
          <div className='mt-7 w-full px-4'>
            {/* <SelectorOrg/> */}
            <InputByAdaamSelect Options={Docs} TextKey='Label' ValueKey='Value' />
          </div>


        </div>

        {/* Right Panel */}
        {/* Right Panel: ****************** Image Section */}
        <div className='px-4 border  '>

          <label className='cursor-pointer'>
            <span>Select Image</span>
            <input type="file" className="hidden" onChange={(e) => HandleOnChangeFileBrowser(e)} />
          </label>

          <div className='mt-4 border relative'>

            {!Rec.ImageURL ? '' :
              <button className='absolute -top-3 -right-3  p-1 bg-red-400 rounded-md'
                onClick={() => HandleBtnDelImg()}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                </svg>
              </button>
            }

            {/* <img src={window.location.origin + '/yourPathHere.jpg'} /> */}
            <Image src={Rec.ImageURL ? Rec.ImageURL : '/SiteImages/NoImage.jpg'}
              alt='img'
              height={0} width={0}
              //width="100%" height="100%" 
              layout="responsive"     //'fill'
              objectFit='cover'       //'contain'          
            />
          </div>


          <br />
          <br />
          Entered ID is: {Rec.ID}

        </div>


      </div>
    </div >


    </>
  )
}
