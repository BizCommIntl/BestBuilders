// import { Text, Page, Document, Font, View } from "@react-pdf/renderer";

import React, { forwardRef } from "react";

let CatCodeOld = ''
let newGroupTitle = ''

const GroupSeperator = (E) => {
  if (CatCodeOld === E.CatCode) newGroupTitle = ''
  else {
    CatCodeOld = E.CatCode
    newGroupTitle = <div>{E.CTitle}</div>
  }
  return (newGroupTitle)
}

export const PrnListItems = forwardRef((props, ref) => (

  // <div className="_bill" ref={ref} style={{    width: '800px'  }}>
  // <div className="_bill" ref={ref} style={{ border: '1px solid black', width: '250px' }}>
  <div ref={ref} style={{ border: '1px solid black', width: '250px' }}>
محمد مفخر ادام
    <p className='jameel-noori-nastaleeq'>محمد مفخر ادام</p>

  </div>
));

