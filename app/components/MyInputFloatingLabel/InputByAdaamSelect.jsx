import { useEffect, useState, useRef } from "react";
import { BiChevronDown } from "react-icons/bi";

import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { PiDotsThreeOutlineVerticalThin } from "react-icons/pi";
import { PiDotsThreeOutlineThin } from "react-icons/pi";


export default function InputByAdaamSelect({
  Label = 'Default Label', Name = 'InputField',
  TextDefault = 'Select Option',
  TextSearch = 'Search Text',
  Val = '', setVal,
  TextKey = 'Label',
  ValueKey = 'Value',
  Options,
  OptionKeys = ['Label', 'Value', 'Label'],
  OptionsBoxHeight = '400px',

  // CSS4Input = " h-10 w-full border-b-2 border-gray-300 text-gray-900  focus:border-rose-600 focus:outline-none",
  // CSS4Label = "-top-3.5 left-0 text-sm  text-gray-600  peer-placeholder-shown:top-2  peer-placeholder-shown:text-base  peer-placeholder-shown:text-gray-400  peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-gray-600 "

  CSS4Input = "text-end h-8 px-2 w-full border-b-2  rounded-xl overflow-hidden  border-purple-400/50 bg-inherit shadow-md  text-gray-900 group-focus-within:outline-none group-focus-within:border-rose-600 group-focus-within:bg-amber-300/50 ",
  // CSS4Label = "-top-3 left-0 text-sm text-gray-600  peer-placeholder-shown:top-1  peer-placeholder-shown:left-2 peer-placeholder-shown:text-base  peer-placeholder-shown:text-gray-400  peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-blue-600 ",
  CSS4Label4Option = " px-2 min-h-6  text-sm   text-gray-600 hover:bg-sky-400 hover:text-white ",
  CSS4Label4Selected = " bg-sky-600 text-white ",


  CSS4Label4Focus = ' group-focus-within:-top-4 group-focus-within:text-sm  group-focus-within:tracking-widest group-focus-within:left-2 group-focus-within:text-blue-500 ',
  CSS4Label4Empty = ' text-base  text-gray-400 ',
  CSS4Label4Active = " -top-4 left-0 text-xs text-gray-600 ",

}) {
  const [inputValue, setInputValue] = useState("");
  const [selected, setSelected] = useState({ [TextKey]: '', [ValueKey]: '' });
  const [open, setOpen] = useState(false);
  const [MeFocused, setMeFocused] = useState(false);

  const MeRefComponent = useRef(null);

  const FocusStatus = ({ state }) => {
    // e.preventDefault(); e.stopPropagation();

    console.log('focus staus is :', state * 1)
    setMeFocused(state)
  }


  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  });

  useEffect(() => {
    setInputValue('')
    // if (MeFocused=== undefined) {setOpen(true);setMeFocused(true)}
    // else if (MeFocused) setOpen(true); else setOpen(false)
  }, [MeFocused])

  const handleOutsideClick = (e) => {
    if (MeRefComponent.current && !MeRefComponent.current.contains(e.target)) {
      // setCount(count - 1);
      console.log('*********************Clicked Outside*******************')
      setOpen(false); setMeFocused(false)
    }
  };

  return (<>
    {/* setMeFocused:{MeFocused * 1} */}
    {/* Start Floating input then Label */}

    {/* Start here Selector  */}
    {/* <div className="w-full font-medium relative group  tabindex={0}" ref={MeRefComponent} */}
    <div className=" font-normal w-full relative group " tabindex={-1} ref={MeRefComponent}
    // onFocus={(e) => { setMeFocused(true)}}  // 
    // onBlur={(e) => {setMeFocused(false); }}  // e.stopPropagation();
    >

      {/* Main Text box for Label */}
      <div
        id={Name} name='TextBox' onClick={() => { setOpen(!open) }}
        // className={CSS4Input + `peer/mainbox bg-white  p-2 flex items-center justify-between rounded ${!selected[ValueKey] && "text-gray-700" }`}
        // className={CSS4Input + `peer bg-white  p-2 flex items-center justify-between rounded ${!selected[ValueKey] && "text-gray-700" }`}

        className={' flex items-center gap-2 ' + CSS4Input}
      // + " h-8 px-2 text-end border-b-2  border-purple-400/50 text-gray-900 shadow-md "
      // + " focus:outline-none focus:border-rose-600 focus:bg-amber-300/50 "}
      >

        {/* className={'peer-focus: -top-3.5 peer-focus:text-sm peer-focus:text-blue-600 ' (selected[ValueKey]  */}
        {/* <label htmlFor="TextBox" */}
        <label
          // className={' absolute  transition-all duration-300  '
          //   + ' group-focus-within:-top-4 group-focus-within:text-sm  group-focus-within:tracking-widest group-focus-within:left-2 group-focus-within:text-blue-500    '
          //   + (selected[ValueKey]
          //     ? " -top-4 left-0 text-xs text-gray-600 "
          //     : ' text-base  text-gray-400 ')}

          // CSS4Label4Focus=   ' group-focus-within:-top-4 group-focus-within:text-sm  group-focus-within:tracking-widest group-focus-within:left-2 group-focus-within:text-blue-500 '
          // CSS4Label4Empty=   ' text-base  text-gray-400 '
          // CSS4Label4Active = " -top-4 left-0 text-xs text-gray-600 "
          className={' absolute  transition-all duration-300  '
            + CSS4Label4Focus
            + (selected[ValueKey]
              ? CSS4Label4Active
              : CSS4Label4Empty)}


        // className={' absolute mt-0 border border-red-500 ' + " -top-4 left-0 text-xs text-gray-600 transition-all duration-300  " 
        //   + ' group-focus-within:mt-0 group-focus-within:text-sm group-focus-within:tracking-widest group-focus-within:left-2 group-focus-within:text-blue-500  group-focus-within:transition-all  group-focus-within:duration-300   '
        //   + (selected[ValueKey]
        //     ? ''
        //     : " absolute mt-4 left-2 z-50 text-lg  text-gray-600   ")
        //   }
        >
          {Label}
        </label>

        <span className="flex-grow  ">{selected[ValueKey]
          ? selected[TextKey]?.length > 25
            ? selected[TextKey]?.substring(0, 25) + "..."
            : selected[TextKey]
          : <span className=" hidden group-focus-within:block">{TextDefault}</span>}
        </span>

        {/* {open ? <PiDotsThreeOutlineThin /> : <PiDotsThreeOutlineVerticalThin />} */}
        <BiChevronDown size={20} className={`${open && "rotate-180"} hidden group-focus-within:block `} />
      </div>

      {/* Options List for Select */}
      {/* <ul className={`absolute min-w-full z-50 text-left bg-white mt-[2px] rounded-md border shadow-lg ${open ? "max-h-96" : "max-h-0"} overflow-y-auto  overflow-x-hidden`}  > */}
      <ul  tabindex={-1} className={` absolute min-w-full z-50 text-left bg-white mt-[2px] rounded-md border shadow-lg ${open ? "max-h-[" + OptionsBoxHeight + "]" : " hidden "} overflow-y-auto  overflow-x-hidden`}  >

        {/* Search box Select */}
        <div  className="flex items-center px-2 sticky top-0 bg-white">
          {/* <span className="text-gray-700" > <AiOutlineSearch /></span> */}
          <AiOutlineSearch />

          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value.toLowerCase())}

            placeholder={TextSearch}     //"Enter Search Option"
            className="placeholder:text-gray-400 p-2 outline-none grow "
          // className={" placeholder-transparent "}

          />
          <AiOutlineClose
            onClick={() => {
              setSelected({ [TextKey]: '', [ValueKey]: '' })
              setOpen(false);
              setInputValue("");
            }}
          />
        </div>

        {/* {Options?.map((Opt) => (<>
            {console.log('Options Rsvd', Opt)}
          </>))} */}

        {/* CSS4Label4Option = " px-2 min-h-6  text-sm   text-gray-600 hover:bg-sky-400 hover:text-white " */}
        {/* CSS4Label4Selected = " bg-sky-600 text-white " */}

        {/* Options Detail List Sfor Select */}
        {Options?.map((Opt) => (
          <li key={Opt[TextKey]}

            className={
              ` ${CSS4Label4Option} 
            ${Opt[TextKey].toLowerCase() === selected[TextKey].toLowerCase() &&
              CSS4Label4Selected
              }
            ${
              // Opt?[Label]?.toLowerCase().startsWith(inputValue)
              Opt[TextKey]?.toLowerCase().indexOf(inputValue) !== -1  //search any field
                ? "block"
                : "hidden"
              } `
            }

            onClick={() => {
              if (Opt[TextKey]?.toLowerCase() !== selected[TextKey].toLowerCase()) {
                setSelected({ [TextKey]: Opt[TextKey], [ValueKey]: Opt[ValueKey] });
                setOpen(false);
                setInputValue("");
                setMeFocused(false)
              }
            }}
          >
            {/* {Opt[TextKey]};{Opt[ValueKey]} */}
            {(OptionKeys.map((E, I) => (Opt[E]))).join(';')}
          </li>
        ))}

      </ul>

    </div>
    {/* Ends here Selector  */}

  </>);
};

