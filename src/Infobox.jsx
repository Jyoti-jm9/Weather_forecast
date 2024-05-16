import Searchbox from "./Searchbox";
import Weathert from "./Weathert";
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
    

    return(
        <>
        <Searchbox updateInfo ={updateInfo}/>
        <Weathert info={curdata}/>
        </>
     

    );
}