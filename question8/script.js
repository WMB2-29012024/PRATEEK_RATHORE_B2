const  chosseNumberElem= document.querySelector("#chosse_Number")
const  title_BodyElem=document.querySelector("#title_body")
const userCommentsElem=document.querySelector("#Usercomments")
chosseNumberElem.addEventListener("change",(e)=>{
  const userID = e.target.value
  console.log(userID)
  fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userID}`)
  .then(resp => {
     return resp.json()
  })
  .then( jsonData => {
    const data = jsonData[0]
    console.log(data)
    // return jsonData
   let clutter =`
   <h4>Title:${ data.title}</h4>
   <h4>Body:${ data.body}</h4>`

   title_BodyElem.innerHTML=clutter;

   return data


  }).then( resp =>{
    const postID = resp.id
    return fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postID}`);

    // fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postID}`)
  }).then((resp)=>resp.json())
  .then((resp)=>{
    // userCommentsElem.innerHTML=`<h4><b>Comment</b></h4>`

    resp.forEach(data=> {

      const clutter= ` <p><b>Email${data.email}</b></p>
      <p><b>Email${data.body}</b></p>`
      userCommentsElem.innerHTML+=clutter
      console.log(data)
    });
  })

 
 

})
 

 