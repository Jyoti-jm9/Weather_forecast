import CloudIcon from '@mui/icons-material/Cloud';

export default function Weathert({ info }) {
   // let jm = "his no is 9";
   
   
    return (
      <>
      <div className="rounded-xl border-2 border-orange-800 bg-gradient-to-r from-indigo-500/40 from-20% via-blue-700/25 via-40% to-emerald-500/35 to-90% text-white ">
        <div className="h-10 bg-gradient-to-r from-indigo-500/50 via-purple-500/30 to-pink-500/30 rounded-xl border-2 text-center">
          <h2 className="mb-2 text-3xl text-white uppercase">{info.city}</h2></div>
        <div className="flex m-1 mt-3 flex justify-center items-center text-xl">
        <div >
          <img src="https://cdn-icons-png.flaticon.com/128/1163/1163661.png" alt="Static Sticker" class="sticker" />
        </div>
          <div className="ml-3 mr-3 text-3xl text-white font-bold">{info.temp}&deg;C </div>
          <div>
            <p>Humidity: {info.humidity}%</p>
            <p>Feels like: {info.feels_like}&deg;C</p>
          </div>
        </div>

        <div className="text-center justify-center items-center m-2 mt-4">
          <div className="mr-3 text-xl" >
            <p>Max tempareture: {info.temp_max}&deg;C</p>
            <p>min tempareture: {info.temp_min}&deg;C</p>
          </div>
          <div className='font-mono text-2xl '>
           {info.description}
          </div>

        </div>

      </div>
      </>
      );
    }