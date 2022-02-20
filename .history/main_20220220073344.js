 // lets start
let color=document.querySelectorAll('.color');
let para=document.querySelectorAll(".hex__val");
let div = document.querySelector('#content');
// let btn2=document.getElementsByClassName('btn2');


//generate color
document.getElementById('btn').addEventListener('click',()=>{
    console.log("hello")
     for(let i=0;i<color.length;i++)
    {   let randomColor=Math.floor(Math.random()*17777777).toString("16");
        color[i].style.background="#"+randomColor;
        para[i].innerHTML=`
    
        <svg  onclick="copyToClipboard('p3')"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M384 96L384 0h-112c-26.51 0-48 21.49-48 48v288c0 26.51 21.49 48 48 48H464c26.51 0 48-21.49 48-48V128h-95.1C398.4 128 384 113.6 384 96zM416 0v96h96L416 0zM192 352V128h-144c-26.51 0-48 21.49-48 48v288c0 26.51 21.49 48 48 48h192c26.51 0 48-21.49 48-48L288 416h-32C220.7 416 192 387.3 192 352z"/></svg>
        <span id="p3">  #${randomColor}</span>
         <svg onClick=" save(' #${randomColor}') "  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z"/></svg>
        
        `
     }
})

//change box color by switching mode
document.getElementById('btn2').addEventListener('click',()=>{
    console.log("clcik")
    console.log(div.classList)
    if(div.classList.length==2){
        div.classList.remove('changecolor')
        return ;
    }
    div.classList.add('changecolor')
    let len=div.getAttribute('class').length;
   
 
    
})

//save color to colorstorage
addColor();
let arr=[];

function save(Upcomingcolor){
    alert("save to localStorage in fav section")
     if(!localStorage.getItem('saveColor')){
       
         localStorage.setItem('saveColor',JSON.stringify([]))
         console.log("empty")
    }else{
        let allsaveColors=JSON.parse(localStorage.getItem('saveColor'));
       
        allsaveColors.push(Upcomingcolor)
        localStorage.setItem('saveColor',JSON.stringify(allsaveColors))
      
    }

//call add color to fetch save color from loca storage add show in webpage
addColor();
  
}


function addColor(){
  // show save color 
  let saveColorBox=document.getElementById('save__colors');
  let clrPara=document.getElementById('clr');
  let allsaveColors=  JSON.parse(localStorage.getItem('saveColor'))  ;
  console.log(allsaveColors)
  let str="";
  for(let i=0;i<allsaveColors?.length;i++){
     str=str+allsaveColors[i];
  
   console.log("working")
  }
  saveColorBox.innerHTML=`<p class="myclass"> ${str} </p>`
  console.log(str);
}


// copy code
// onclick="copyToClipboard('p3')"
function copyToClipboard(var1){
    let val = document.getElementById(var1).innerHTML;
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    alert('text copied to clipboard, please use Ctrl-V to paste the data');

  }  
  
 
 
 
    





   


