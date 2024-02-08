import React from 'react';
//import'react-slideshow-image/dist/style.css'
import{ Fade,} from 'react-slideshow-image'
const slideImage =[
    {URL:'https://www.music3000.fr/modules/posslideshows/images/51768e894efbb13b84f3f76abf01ae523ecdebda_martin20th.jpg' ,caption:'first'},
    {URL:'https://www.music3000.fr/modules/posslideshows/images/9597d7109e8f1b35d3e628701acfbe1b3ecabd9b_McCready.png',caption:'second'},
    {URL:'https://www.music3000.fr/modules/posslideshows/images/9c78479b5c1e58d2e98ebce8b72c2dee58f3798e_SILENT-MUSIC3000.jpg',caption:'third'}
];
const divStyle={
    display:'flex',
    alignItems:"center",
    justifyCantent:"center",
    height:"800px",
    backroundSize:"80%",
    FilexDirection:"row"
}
const spanStyle={
    fontSize:"2px",
    background:"red",
    color:"green",
    alignItems:"center",
}
const ImageSlider = () => {
  return (
   
    <div className='slide-container'>
    <Fade>
    {slideImage.map((Image,index)=> (
        <div key={index}>
        <div style={{...divStyle,backgroundImage :`url(${Image.URL})`}}></div>
        <span style={{spanStyle}}>  {Image.caption} </span>
        </div>
    ))}
    </Fade>
        
    </div>
      
   
  );
}

export default ImageSlider;
