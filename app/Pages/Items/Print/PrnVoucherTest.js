import React, { forwardRef } from "react";

export const PrnVoucherTest = forwardRef((props, ref) => (

  // <div className="_bill" ref={ref} style={{    width: '800px'  }}>
  // <div className="_bill" ref={ref} style={{ border: '1px solid black', width: '250px' }}>

<div ref={ref} style={{  width: '250px' }}>
    Thank you for visiting us! <br />
    Mr Ahmed <br></br>
    ABCDEFGH IJKLMNOP QRSTUVWXYZ QRSTUVWXYZ
    {/* <table style={{ fontSize: '10px' }} cellPadding="0" cellSpacing="0" width="100%"> */}
    <table style={{ fontSize: '10px' }} cellPadding="0"  width="100%">
      <tbody>
        <tr>
          {/* <td  width="50px" >Price</td>
          <td  width="30px" >Qty</td>
          <td  width="50px" >Amount</td> */}
        </tr>

        <tr  style={{borderTop: '1px solid black', borderBottom: '1px solid black'  }} >
          <td width="15px"  >#</td>
          <td   >Description </td>
          <td width="15%"  style={{textAlign:'right'}} >Qty</td>
          <td width="17%"  style={{textAlign:'right'}} >Price</td>
          <td width="23%"  style={{textAlign:'right'}} >Amount</td>
        </tr>

        <tr>
          <td> 11</td>
          <td  >Questions testiny </td>
          <td width="15%"  style={{textAlign:'right'}} >888 Kg</td>
          <td width="17%"  style={{textAlign:'right'}} >8888.8</td>
          <td width="23%"  style={{textAlign:'right'}} >88,888.88</td>
        </tr>

        <tr>
          <td> 99</td>
          <td  >Questions? Email acmeinc@ company inc</td>
          <td width="15%"  style={{textAlign:'right'}} >888 kg</td>
          <td width="17%"  style={{textAlign:'right'}} >888.8</td>
          <td width="23%"  style={{textAlign:'right'}} >88,888.88</td>
        </tr>

        <tr>
          <td> 11</td>
          <td  >Questions testiny </td>
          <td width="15%"  style={{textAlign:'right'}} >888 Kg</td>
          <td width="17%"  style={{textAlign:'right'}} >8888.8</td>
          <td width="23%"  style={{textAlign:'right'}} >88,888.88</td>
        </tr>

        <tr>
          <td> 98</td>
          <td  >Questions? abc company test company inc</td>
          <td width="15%"  style={{textAlign:'right'}} >888 kg</td>
          <td width="17%"  style={{textAlign:'right'}} >888.8</td>
          <td width="23%"  style={{textAlign:'right'}} >88,888.88</td>
        </tr>


      </tbody>
    </table>

  </div>
));

