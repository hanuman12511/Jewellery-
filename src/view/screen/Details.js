import { useState } from "react"
import { useLocation } from "react-router-dom"

export default function Details(){
  const loc = useLocation()
  const [product,setProduct] = useState(loc.state)
  console.log(product);
    return(
      <h1>Details screen</h1>
    )
  }