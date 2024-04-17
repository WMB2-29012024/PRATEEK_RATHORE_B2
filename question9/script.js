const searchInputElem=document.querySelector("#searchinput");
const userDataElem=document.querySelector("#userData")
const URL="https://jsonplaceholder.typicode.com/posts";
let saveArrData=[];
 

const fetchFuntion =async(URL)=>{
   const resp = await fetch(URL)
   const jsonData= await resp.json()
   saveArrData=jsonData;
  console.log(saveArrData)
 renderFuntion(saveArrData)
  
} 

 const searchData =( input ,keys) =>{
    const searhvalue=input.target.value;
    const filtereddata=
 }


const renderFuntion =(array)=>{
  userDataElem.innerHTML=''
  array.forEach(element => {
    const clutter=`
    <li>
    <p><b>Title</b>:${element.title}</p>
    <p><b>Body:</b> ${element.body}</p>
    </li>
    `
    userDataElem.innerHTML+=clutter
  });
}
  
searchInputElem.addEventListener("keyup",(e) =>{
   let wordsOFInput=e.target.value;
   const filterData= saveArrData.filter((data) => data.title.includes(wordsOFInput))
  renderFuntion(filterData)
})
fetchFuntion(URL)

