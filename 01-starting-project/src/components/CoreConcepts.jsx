import componentsImg from "../assets/components.png"

// This is our function in which we will pass our props
// function CoreConcepts(props){
//   return(
//     <li>
//       <img src={props.image} alt= "..."></img> 
//       <h3>{props.title}</h3>
//       <p>{props.description}</p>
//     </li>
//   )
// }

// we can also destructure the above component's parameters

function CoreConcepts({title, image, description})
{
  return(
    <li>
      <img src={image} alt = "..."></img>
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  )
}

export default CoreConcepts;