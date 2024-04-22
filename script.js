const hameburger=document.querySelector(".hameburger")
const aside=document.querySelector(".aside")
let flag=0;
 

    hameburger.addEventListener("click",()=>{
        if(flag===0){
            aside.style.width="290px"
            hameburger.innerHTML="✕"
            hameburger.style.fontSize="30px"
            hameburger.style.color="white"
          flag=1;
        }else{            
               aside.style.width="0"
               hameburger.innerHTML="☰"
               flag=0
        }
   
})
 