import { BrowserRouter } from "react-router-dom";
import RoutersScreen from "./view/routers/RoutersScreen";
import './view/style/style.css'
import './view/style/space.css'
import 'bootstrap/dist/css/bootstrap.min.css';
export default function App(){
  return(
    <>
    <BrowserRouter>
    <RoutersScreen/>
    </BrowserRouter>
    </>
  )
}