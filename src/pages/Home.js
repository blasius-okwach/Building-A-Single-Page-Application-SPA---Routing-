import { Link } from "react-router-dom"

function HomePage(){
  return <>
  <h1>My HomePage</h1>
  <p>Go <Link to="/products">to the Products Page.</Link></p>
  </>
  
}

export default HomePage