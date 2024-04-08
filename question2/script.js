const URL ="https://jsonplaceholder.typicode.com/todos"

const sub = new Promise( (resolve,reject)=>{
      fetch(URL)
    .then(data => data.json())
    .then(jsonData => resolve(jsonData))
    .catch(error => reject(("you are gay", error)))
    
})

sub.then(data => console.log(data))