const inputbox=document.getElementById("inputname");
const btnsubmit=document.getElementById("button")
const formm=document.getElementById("formm")
const parele=document.getElementById("para")


formm.addEventListener("submit" , (elme)=>{
    elme.preventDefault();
    // let iptval=inputbox.value;
  let h4=document.createElement('ol');
     h4.innerHTML=`hey ${inputbox.value}`;
    parele.appendChild(h4);

}
)