 export default function Footer(){
    return(
        <div className="footer-main inline-flex">
            {
                Array.from({length: 4}).map(d=>(
                   <div className="footer-item"> 
                        {
                        Array.from({length: 4}).map(d=>(
                            <div className="footer-item"> 
                                <h1>hi</h1>
                        
                             </div>
                            ))
                        }
                   </div>
                ))
            }
        </div>
    )
 }