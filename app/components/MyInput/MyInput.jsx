import './MyInput.css'
// input[type="text"]:focus ~ .input-text,
// input[type="text"]:not(:placeholder-shown) ~ .input-text{
//   @apply text-blue-500 transform -translate-y-10 -translate-x-2 scale-75;
// }


export default function MyInput({
  Label = '', Name = 'InputField',
  Val = '', setVal,
  ShiftUpHeight=6,
  CSS4Input = 'h-8 px-2 text-black border-purple-400 border rounded-lg border-opacity-0 outline-none focus:border-amber-500',
  CSS4Label = 'px-1 absolute left-2 -top-[2px] text-opacity-80 ' }) {


  return (
    // <div className="">
      <label className='relative cursor-pointer'>
        <input type="text" placeholder="is not shown because Label is used instead of Placeholding"
          name={Name}
          value={Val}
          onChange={(e) => setVal(e)}

          // className='h-20 w-96 px-6 text-4xl text-white bg-black border-white border-2 rounded-lg border-opacity-50 outline-none focus:border-blue-500 placeholder-gray-300 placeholder-opacity-0 transition duration-200' />
          // className='w-96 h-8 py-0 px-6 placeholder-gray-300 placeholder-opacity-0 transition duration-300' />
   
        className={CSS4Input + ' placeholder-red-700 placeholder-opacity-0 transition duration-300  '} />
        {/* <span className={CSS4Label + ' transition duration-300 input-text2'}>{Label}</span> */}
        <span className={CSS4Label + ` transition duration-300 input-text-${ShiftUpHeight}` }>{Label}</span>

      </label>
    // </div>
  )
}
