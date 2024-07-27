import Searchbox from "./Searchbox";
import Weathert from "./Weathert";
import Future from "./Future";
import { useState } from "react";
export default function Infobox() {
    let [curdata , setCurdata] = useState({
        city : "GreenCity" , 
        humidity : 69 ,
        temp : 33 ,
        temp_max : 38 ,
        temp_min : 30 , 
        feels_like : 35 ,
        description : "haze",
    });

    let updateInfo = (newInfo) => {
         setCurdata(newInfo);
    }
    
    let [city1 , setCity1] = useState();

    return(
        <div
        className="bg-cover bg-center h-screen bg-blue-600"
        style={{ backgroundImage: "url('https://wallpapercave.com/wp/VCf1lhA.jpg')" }}
        >
        <Searchbox updateInfo ={updateInfo} setCity1={setCity1}/>
        <Weathert info={curdata}/>
        <div className="flex flex-wrap justify-around">
  <div className=" lg:w-1/4 mb-0 md:mb-0">
    <Future idx={0} city1={city1} />
  </div>
  <div className=" lg:w-1/4 mb-0 md:mb-0">
    <Future idx={1} city1={city1} />
  </div>
  <div className=" lg:w-1/4 mb-0 md:mb-0">
    <Future idx={2} city1={city1} />
  </div>
  <div className=" md:w-1/4 lg:w-1/4 mb-0 md:mb-0">
    <Future idx={3} city1={city1} />
  </div>
</div>

        
        </div>
     

    );
}