import CloudIcon from '@mui/icons-material/Cloud';

export default function Weathert({ info }) {
    let jm = "his no is 9";
   
   
    return (
      <>
      <div className="rounded-xl border-2 border-orange-800  bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ">
        <div className="h-10 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl border-2 text-center">
          <h2 className="mb-2 text-3xl text-white uppercase">{info.city}</h2></div>
        <div className="flex m-1 mt-3 flex justify-center items-center">
          <div><CloudIcon fontSize="large"/></div>
          <div className="ml-3 mr-3 text-3xl font-bold">{info.temp}&deg;C </div>
          <div>
            <p>Humidity: {info.humidity}%</p>
            <p>Feels like: {info.feels_like}&deg;C</p>
          </div>
        </div>

        <div className="text-center justify-center items-center m-2 mt-4">
          <div className="mr-3">
            <p>Max tempareture: {info.temp_max}&deg;C</p>
            <p>min tempareture: {info.temp_min}&deg;C</p>
          </div>
          <div className='font-mono text-xl '>
           {info.description}
          </div>

        </div>

      </div>
      </>
      );
    }