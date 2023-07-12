import axios from "axios"
import { useEffect, useState } from "react"
import { Container, Row, Col, Button } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"
export default function Cart() {
const nav=useNavigate()
    const [data, setData] = useState('')
    const [pay, setPay] = useState('')

    useEffect(() => {
        async function show() {
            let res = await axios.post('showtocart', {})
            console.log(res.data);
            setData(res.data)
            let pay=0
            res.data.map(d=>{
                pay+= parseInt(d.Price)
            })
            console.log(pay);
            setPay(pay)
        }
        show()
    }, [])

    async function show() {
        let res = await axios.post('showtocart', {})
        console.log(res.data);
        setData(res.data)
        let pay=0
        res.data.map(d=>{
            pay+= parseInt(d.Price)
        })
        console.log(pay);
        setPay(pay)
    }
    //  item remove functions
  async  function removeitem(index) {
       
    let arr=[]
    data.map((d, index1) => {
                    if(index !== index1){
                        arr.push(d)
                    }        })
            console.log(arr);        
    let res = await axios.post('removecartitem', arr).catch(e=>console.log(e))
                console.log(res?.data);
           await setData(arr)
    
            show()
    
        }


    console.log(data);
    return (
        <Container fluid>

            <Row className="justify-content-center">
                
                    <Col className="col-lg-6">
                        {
                            data ? data.map((d, index) => {
                                if (d !== false) {
                                    return (
                                        <div className="border mt-5 mb-4">
                                            <div className="addtocartshow ">
                                                <div className="addtocartshow-img">
                                                    <img src={d.Image} style={{ height: '200px' }} />

                                                </div>
                                                <div className="addtocartshow-text mt-3 ">
                                                    <h5><p>{d.name}</p></h5>
                                                    <h5> ₹<span className="cart-p"> {d.Price}</span></h5><br />
                                                    <h6><p className="disc">{d.Disc}</p></h6>
                                                    <h6>{d.description}</h6><br />
                                                    <h6><p>Qty:{1}</p></h6>
                                                    <Button className="remove mb-4" variant="outline-danger" onClick={() => removeitem(index)}>Remove</Button>


                                                </div>

                                                <div className="addtocartshow-text mt-4">

                                                </div>
                                            </div>
                                        </div>


                                    )
                                }
                            }) : null
                        }
                    </Col>
                
<Col className="">
<div className="m-4 position-fixed bg-success w-25">
<center> <Button onClick={()=>nav('/orderplace',{state:pay})}>Proceed to Payment</Button></center>
     <p className="border m-4 p-4 text-light">
        Total pay:{pay}
     </p>
     </div>       
</Col>
            </Row>

           
        </Container>

    )
}