import NumberFormat from 'react-number-format'

export default function InputByAdaamNumber({
  Label = '', Name = 'InputField',
  Val = '', setVal,
  // CSS4Input = " h-10 w-full border-b-2 border-gray-300 text-gray-900  focus:border-rose-600 focus:outline-none",
  // CSS4Label = "-top-3.5 left-0 text-sm  text-gray-600  peer-placeholder-shown:top-2  peer-placeholder-shown:text-base  peer-placeholder-shown:text-gray-400  peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-gray-600 "

  CSS4Input = "text-end h-8 px-2 w-full border-b-2   rounded-xl overflow-hidden border-purple-400/50 bg-inherit shadow-md  text-gray-900  focus:outline-none focus:border-rose-600 focus:bg-amber-300/50 ",
  // CSS4Label = "-top-3 left-0 text-xs text-gray-600  peer-placeholder-shown:top-1  peer-placeholder-shown:left-2 peer-placeholder-shown:text-base  peer-placeholder-shown:text-gray-400  peer-focus:-top-3.5 peer-focus:text-sm  peer-focus:tracking-widest peer-focus:text-blue-600 "

  CSS4Label4Focus=  " peer-focus:-top-3.5 peer-focus:text-sm peer-focus:tracking-widest peer-focus:text-blue-600 ",
  CSS4Label4Active = " -top-3 left-0 text-xs text-gray-600  ",
  CSS4Label4Empty=   ' peer-placeholder-shown:top-1  peer-placeholder-shown:left-2 peer-placeholder-shown:text-base  peer-placeholder-shown:text-gray-400'

}) {
  return (
    <>
  {/* 
      <div class="mx-auto max-w-sm space-y-2 rounded-xl bg-white px-8 py-8 shadow-lg sm:flex sm:items-center sm:space-x-6 sm:space-y-0 sm:py-4">
        <div class="mx-auto space-y-4">
          <div class="relative">
            <input id="email" name="email" type="text" class="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:border-rose-600 focus:outline-none" placeholder="john@doe.com" />
            <label for="email" class="absolute -top-3.5 left-0 text-sm text-gray-600 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-gray-600">Email address</label>
          </div>

          <button class="rounded-full border border-purple-200 px-4 py-1 text-sm font-semibold text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Message</button>
        </div>
      </div>
 */}
      {/* ===================================================== */}

      <div class="relative">
        <NumberFormat id={Name} name={Name} 
                value={Val}
                thousandSeparator={true} thousandsGroupStyle="lakh"

          placeholder="Mufakhar Adaam"
          className={"peer placeholder-transparent " + CSS4Input }

                        // label={"1 FTE"}
                        // customInput={TextField}
                        // isNumericString={true}   //for value output is number value
                        // decimalScale={2}

                        // style={{border:'none' , outline: 'none'                  }}
                        // className=" form-control  text-end"

                        //onChange={(e) =>{ HandleInputs(e); console.log('**************\nVAmt : ',VAmt)}}
                        onValueChange={(values) => {
                          setVal(Name, values.value )
                        }}

        />

        <label for={Name} className={"absolute transition-all duration-300 " + CSS4Label4Empty+ CSS4Label4Active + CSS4Label4Focus }        >
          {Label }
        </label>
      </div>

    </>
  )
}
