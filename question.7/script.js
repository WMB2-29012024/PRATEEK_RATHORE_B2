let Mode=document.getElementById("mode");
let Container=document.getElementById("container");
// console.log(Mode)
Mode.addEventListener("change" ,(e)=>{
    e.preventDefault()
    console.log(e.target.value);
    if(e.target.value === "Dark"){
        document.querySelector("#container").style.background ="black"
        document.querySelector("p").style.color="white"
    }
    else
    {
    
            document.querySelector("#container").style.background ="white"
            document.querySelector("p").style.color="black"
        
    }
})
