const URL="https://jsonplaceholder.typicode.com/todos";
async function fetchData(){
    const  respose= await fetch(URL);
    const data= await respose.json()
     console.log(data);
    
}
fetchData()