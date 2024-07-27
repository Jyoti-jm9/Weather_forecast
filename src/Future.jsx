import React, { useState, useEffect } from 'react';

export default function Future({ idx , city1 }) {
  const [maxtemp, setMaxTemp] = useState(null);
  const [mintemp, setMinTemp] = useState(null);

  const api_url = "https://api.openweathermap.org/data/2.5/forecast?";
  const api_key = import.meta.env.VITE_FUTURE_API_KEY;   

  const today = new Date();
  const dates = Array.from({ length: 4 }, (_, i) => {
    const date = new Date(today);
    date.setDate(today.getDate() + i + 1);
    return date.toISOString().split('T')[0];
  });

  useEffect(() => {
    const futureWeather_info = async () => {
      const response = await fetch(`${api_url}q=${city1}&appid=${api_key}&units=metric`);
      const data = await response.json();

      let today = new Date();
      let matrix = [];

      for (let i = 0; i < 4; i++) {
        matrix[i] = [];
        const tomorrow = new Date(today);
        tomorrow.setDate(today.getDate() + 1);
        const tomorrowDateString = tomorrow.toISOString().split('T')[0];
        const nextDayData = data.list.filter(entry => entry.dt_txt.includes(tomorrowDateString));
        today = tomorrow;

        for (let j = 0; j < 8; j++) {
          matrix[i][j] = nextDayData[j].main.temp;
        }
      }

      return matrix;
    };

    const tempwork = async () => { 
      const temparr = await futureWeather_info();
      const minElement = Math.min(...temparr[idx]);
      const maxElement = Math.max(...temparr[idx]);
      setMaxTemp(maxElement);
      setMinTemp(minElement);
    };

    tempwork();
  }, [idx , city1]);

  return (
    <div className="text-white bg-blue-300/20 m-3 basis-1/12 sm:basis-1/5 hover:basis-1/3 flex justify-center items-center flex-col">
      <div className=" text-center text-sm sm:text-base">{dates[idx]}</div>
      <div className='h-12 w-12 flex justify-center items-center'>
        <img src="https://cdn-icons-png.flaticon.com/256/6581/6581533.png" alt="Static Sticker" class="sticker" />
      </div>
      <div className=" text-center text-sm sm:text-base">{maxtemp}&deg;C/{mintemp}&deg;C</div>
    </div>
  );
}

