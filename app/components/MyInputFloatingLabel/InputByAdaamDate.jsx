import DatePicker from 'react-datepicker'
import Moment from 'moment'

export default function InputByAdaamDate({
  Label = '', Name = 'InputField',
  ValFormat = 'd MMM yy',
  Val = '', setVal,
  // CSS4Input = " h-10 w-full border-b-2 border-gray-300 text-gray-900  focus:border-rose-600 focus:outline-none",
  // CSS4Label = "-top-3.5 left-0 text-sm  text-gray-600  peer-placeholder-shown:top-2  peer-placeholder-shown:text-base  peer-placeholder-shown:text-gray-400  peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-gray-600 "

  CSS4Input = "text-end h-8 px-2 w-full border-b-2  rounded-xl overflow-hidden  border-purple-400/50 bg-inherit shadow-md  text-gray-900 group-focus-within:outline-none group-focus-within:border-rose-600 group-focus-within:bg-amber-300/50 ",
  // CSS4Label = "-top-3 left-0 text-xs text-gray-600  peer-placeholder-shown:top-1  peer-placeholder-shown:left-2 peer-placeholder-shown:text-base  peer-placeholder-shown:text-gray-400  peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-blue-600 "
          CSS4Label4Focus=   ' group-focus-within:-top-4 group-focus-within:text-sm  group-focus-within:tracking-widest group-focus-within:left-2 group-focus-within:text-blue-500 ',
          CSS4Label4Active = " -top-4 left-0 text-xs text-gray-600 ",
          CSS4Label4Empty=   ' px-2 text-base  text-gray-400 '



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

      <div className="relative flex flex-col group w-full " tabIndex={-1}>
        {/* <input id={Name} name={Name} type="text"
                value={Val}
                onChange={(e) => setVal(e)}        
          placeholder="Mufakhar Adaam"
          className={"peer placeholder-transparent " + CSS4Input }
        /> */}

      <DatePicker
      id={Name} name={Name}
      // value={Val}
        placeholder="Mufakhar Adaam"
        dateFormat={ValFormat}      //'d MMM yy'

        value={Val === ''
        ? ''
        : Moment(Val).format(ValFormat)}      //DD MMM ddd

      selected={new Date((Val) ? Val : Date())}

        // onChange={(e) => setVal(e)}
        onChange={date => { (date) ? setVal(Name, date) : setVal(Name, '') }} 

        // className={" z-50 placeholder-transparent grow border-2 px border-red-600" + CSS4Input }
        // className={" z-50 placeholder-transparent w-full "  + CSS4Input }
        className={" z-50 "  + CSS4Input }
      />

        <label for={Name} 
        
          // CSS4Label4Focus=   ' group-focus-within:-top-4 group-focus-within:text-sm  group-focus-within:tracking-widest group-focus-within:left-2 group-focus-within:text-blue-500 '
          // CSS4Label4Active = " -top-4 left-0 text-xs text-gray-600 "
          // CSS4Label4Empty=   ' px-2 text-base  text-gray-400 '
          className={' absolute  transition-all duration-300  '
            + CSS4Label4Focus
            + (Val
              ? CSS4Label4Active
              : CSS4Label4Empty)


        //       className={"absolute z-50 transition-all duration-300 " 
        // + ' group-focus-within:text-blue-500 group-focus-within:-top-3.5 peer-focus-within:text-4xl'
        // + " -top-3 left-0 text-xs text-gray-600  peer-placeholder-shown:top-1  peer-placeholder-shown:left-2 peer-placeholder-shown:text-base  peer-placeholder-shown:text-gray-400  peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-blue-600 "
        // +CSS4Label 



        
        }        >
          {Label }
        </label>
      </div>

    </>
  )
}
