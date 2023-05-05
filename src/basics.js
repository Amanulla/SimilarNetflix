import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


let curDate = new Date(2023, 4, 28, 14);
curDate = curDate.getHours();
let greeting = '';
const cssStyle = {};

if(curDate >= 1 && curDate < 12){
  greeting = 'Good Morning';
  cssStyle.color = 'green';
}else if(curDate>=12 && curDate < 19){
  greeting = 'Good Afternoon';
  cssStyle.color = 'Orange';
}else{
  greeting = 'Good Ninght';
  cssStyle.color = 'Black';
}

const root = ReactDOM.createRoot(document.getElementById('root'));
// const fname = "Aman";
// const img1 = "https://picsum.photos/200/300";
// const img2 = "https://picsum.photos/250/300";
// const img3 = "https://picsum.photos/300/300";

root.render(
  <>
    {/* <h1 className='heading'>My name is {fname}</h1>
    <div className='img_div'>
      <img src={img1} alt="Randome_Images"/>
      <img src={img2} alt="Randome_Images"/>
      <img src={img3} alt="Randome_Images"/>
    </div> */}
    <div>
    <h1>Hello Sir, <span style={cssStyle}>{greeting}</span></h1>
    </div>
  </>
);


