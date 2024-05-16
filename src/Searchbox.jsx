import React from 'react';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import Button from '@mui/material/Button';
//import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
//require('dotenv').config();

export default function Searchbox({updateInfo}) {
     let [city , setCity] =useState("");

   const api_url = "https://api.openweathermap.org/data/2.5/weather?"; //lat=33.44&lon=-94.04&exclude=hourly,daily&appid={API key}
   const api_key = import.meta.env.VITE_API_KEY;
   
    

   let getWeatherInfo = async () => {
    let responce = await fetch(`${api_url}q=${city}&appid=${api_key}&units=metric`);
    let jsonResponse = await responce.json();
    console.log(jsonResponse);
     let myInfo = {
      city : jsonResponse.name , 
      humidity : jsonResponse.main.humidity ,
      temp : jsonResponse.main.temp + 2.6 ,
      temp_max : jsonResponse.main.temp_max + 5.2 ,
      temp_min : jsonResponse.main.temp_min , 
      feels_like : jsonResponse.main.feels_like ,
      description : jsonResponse.weather[0].description
    };
     // console.log(myInfo);
      return myInfo;
   }
    

   
    let handleChange =(evt) => {
        setCity(evt.target.value);
       
    };

    let submitForm =async (evt) => {
      evt.preventDefault();
        console.log(city);
        setCity("");
     let newInfo  =  await getWeatherInfo();
    updateInfo(newInfo); 
    }
    return ( 
       <>
       <div className='m-2 '>
        <h2 className='text-4xl text-center'><TravelExploreIcon fontSize="large"/> Search For The Weather</h2>
        <form onSubmit={submitForm} className='text-center m-3 flex flex-col md:flex-row md:items-center'>
  <div className="w-full md:w-1/2 mx-auto md:flex-grow md:mr-2 mb-2 md:mb-0">
    <TextField
      required
      id="city"
      label="CITY NAME"
      // defaultValue="Kolkata"
      variant="filled"
      onChange={handleChange}
      className="w-full h-full bg-gray-100 rounded-lg p-2 focus:outline-none focus:ring focus:border-blue-300"
    />
  </div>
  <Button
    variant="contained"
    type="submit"
    className="w-full md:w-auto h-full py-2 px-4 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
  >
   < SearchIcon/>Search
  </Button>
</form>

       </div>
       
      
       </>
    
    );
       
    
}