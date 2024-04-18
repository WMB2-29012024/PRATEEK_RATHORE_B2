import {stopTimer} from "./timer.js"
import {startTimer} from "./timer.js"
import{resetTime} from "./timer.js"
const Start_Btn=document.querySelector("#Start_Btn");
const Pause_Btn=document.querySelector("#Pause_Btn")
const Reset_btn=document.querySelector("#Reset_btn")
Start_Btn.addEventListener("click",startTimer)
Pause_Btn.addEventListener("click", stopTimer)
 Reset_btn.addEventListener("click",  resetTime)