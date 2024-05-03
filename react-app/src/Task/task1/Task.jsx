
import Card from "./components/Card";
 

// const Task =()=>{
//   return(
//     <div>
//       <Card/>
//       <Card/>
//       <Card/>
//       <Card/>
//       <Card/>
//       <Card/>
    
//     </div>
//   )
// }

const Task =()=>{
    const componentArray =[1,2,3,4,5,6]
    return(
    <div>
    {
        componentArray.map((element)=>{
         return <Card key={element} index={element}/>

          })
    }
    </div>
  )
}
export default Task