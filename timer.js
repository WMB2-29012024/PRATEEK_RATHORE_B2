const timeInput = document.querySelector("#timeInput");
const count_Time = document.querySelector(".count_Time")
let timerInputValue = 0;
let timer;

const startTimer = () => {
    if(timer){
        clearInterval(timer);
        timerInputValue =0;
    }
    timerInputValue = timerInputValue || timeInput.value
    timer = setInterval(() => {
        updateTime()
    }, 1000)
}



const updateTime = () => {
    if (timerInputValue > 0) {
        timerInputValue--  
        
        displayTimer()
    }
    else {
        clearInterval(timer)
    }
}


const displayTimer = () => {
    // const timerInputValue=timeInput.value;
    const hours = Math.floor(timerInputValue / 3600);
    const minutes = Math.floor((timerInputValue % 3600) / 60);
    const second = timerInputValue % 60
    console.log(hours)
    count_Time.innerHTML = `<p>${hours.toString().padStart(2, "0")}
    :${minutes.toString().padStart(2, "0")}
    :${second.toString().padStart(2, "0")}</p>`;
}

const stopTimer = () => {
    clearInterval(timer);
  
};

const resetTime = () => {
     
 
   startTimer()
};

export { startTimer };
export{stopTimer};
export { resetTime };