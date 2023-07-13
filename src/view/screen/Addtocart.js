import axios from "axios"
import { useEffect, useState } from "react"
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
                pay+= parseInt(d.rate)
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
    <div className="homepage">
         <div>
         <h2>Product Add To Cart </h2> 
         <hr />
      </div>
        <div className="inline-flex w-100">
    <div className="w-50">
   
    {
    data ? data.map((d, index) => {
    if (d !== false) {
        return (
        <div className="w-100 ml-25">
            <div className=" w-100 inline-flex">
                <div className="w-40">
                    <img src={d.image} className="w-100p" />
                 </div>
                <div className="">
                    <h5><p>{d.productname}</p></h5>
                    <h5> ₹<span className=""> {d.rate}</span></h5>
                    {/*<br /> <h6><p className="">{d.Disc}</p></h6>
                    <h6>{d.description}</h6><br /> */}
                    <h6><p>Qty:{1}</p></h6>
                    <button className="" variant="outline-danger" onClick={() => removeitem(index)}>Remove</button>
                </div>
               
            </div>
            <hr />
        </div>
                 )
               }
           }) : null
      }
      </div>
<div className="w-40 bdr">
    <div className="proceed-pay">
    <center> 
    <button onClick={()=>nav('/orderplace',{state:pay})}>Proceed to Payment</button>

     <p className="">
        Total pay:{pay}
        </p>   </center>
        </div>
    </div>  
    
    </div>     
</div>
  )
}