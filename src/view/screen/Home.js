import {Container,Row,Col,Carousel,Navbar,Nav,NavDropdown,Form,Button} from 'react-bootstrap';
import {product} from '../data/data'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
export default function Home(){

  const nav = useNavigate()
/* 
console.log(productimage);
console.log(menu); */

const[product1,setProduct]=useState("");

useEffect(()=>{
  async function showdata(){
    var res = await axios.get("product").catch(d=>console.log(d))
    console.log(res?.data);
    setProduct(res?.data)
  }
  showdata()
},[])
function updateProduct(){
 
}

function productshow(){
  
}


    return(
    <Container>
  
<Row>
<Col className='p-5'>
<h1>Prohramming</h1>
<p>The tag is used to embed an image in an HTML page. Images are not technically inserted into a web page; images are linked to web pages.</p>
</Col>
<Row>

  {
    product1&&product1.map(d=>(

      <Col>
      <div style={{width:200,height:300,margin:20,backgroundColor:"red"}} onClick={()=>nav('/detail',{state:d})}>
      <img
          className="d-block w-100"
          src={d.image}
          alt="Third slide"
        />
        </div>
</Col>
))
  }
</Row>
</Row>




    </Container>
     )
  }