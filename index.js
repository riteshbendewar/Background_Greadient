 const button1=document.querySelector('.btn1')
 const button2=document.querySelector('.btn2')
 const cont=document.querySelector('#container')

 const bgCode = () => {

    let hexaCode="0123456789abcdef";

    let code="#";

    for(let i=0;i<6;i++) {

       code=code+hexaCode[Math.floor(Math.random()*16)];

    }
    return code;

 }
 let rgb1="#ff3300";
 let rgb2=" #ffcc00";


 const handleClick = () => {

    rgb1=button1.textContent=bgCode();
    cont.textContent=`background: linear-gradient(to right, ${rgb1},  ${rgb2});`
    document.body.style.background=`linear-gradient(to right, ${rgb1}, ${rgb2})`;


 }

button1.addEventListener("click",()=>{
    handleClick();
})

button2.addEventListener("click",()=>{
    handleClick2();
})

const handleClick2 = () => {

      rgb2= button2.textContent=bgCode();
      cont.textContent=`background: linear-gradient(to right, ${rgb1},  ${rgb2});`
      document.body.style.background=`linear-gradient(to right, ${rgb1}, ${rgb2})`;
 }

 cont.addEventListener("click",()=> {

    navigator.clipboard.writeText(cont.innerHTML)
    alert('text is copied')



 })




 