import React from "react";
import useSWR from "swr";
import { fetcher, api_key } from "../configs/apiConfig";
import { BsCloudRain, BsSearch } from "react-icons/bs";

import Rain from "../assets/images/rain.jpg";
import Imagebg from "../components/Imagebg";
import WeatherIcon from "../components/WeatherIcon";

const HomePage = () => {
   const [searchData, setSearchData] = React.useState("");
   const [search, setSearch] = React.useState("");

   // lấy vị trí hiện tại của người dùng
   const [lat, setLat] = React.useState(21.0278);
   const [lon, setLon] = React.useState(105.8342);

   React.useEffect(() => {
      navigator.geolocation.getCurrentPosition((position) => {
         const { latitude, longitude } = position.coords;
         setLat(latitude);
         setLon(longitude);
      });
   }, []);

   const time = new Date();

   const { data, error } = useSWR(
      `https://api.openweathermap.org/data/2.5/weather?q=${search}&lat=${lat}&lon=${lon}&appid=${api_key}&units=metric&lang=vi`,
      fetcher
   );

   if (error) console.log(error);

   const handlerSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchData(e.target.value);
   };

   const handlerClickButton = () => {
      setSearch(searchData);
   };

   return (
      <div className="w-screen h-screen relative">
         {/* nếu mà không có data và xảy ra lỗi thì hiển thị Clear */}
         <Imagebg weather={data?.weather[0]?.main || "Clear"} />

         <div className="absolute left-[10vw] bottom-[10vh] flex items-center gap-4">
            {!data ? (
               <div className="text-white text-2xl">
                  Không tìm thấy thành phố
               </div>
            ) : (
               <>
                  <h1 className="text-8xl text-white font-semibold">
                     {Math.round(data?.main?.temp)}
                     <span className="align-top text-4xl">o</span>
                  </h1>
                  <div className="text-white">
                     <h2 className="font-medium text-5xl">{data?.name}</h2>
                     <h4 className="text-sm">
                        {/* 06:00 PM - Sunday, 5 Oct 22 */}
                        {time.toLocaleTimeString()} - {time.toDateString()}
                     </h4>
                  </div>
                  <div className="text-white">
                     <WeatherIcon weather={data?.weather[0]?.main} />
                     <span className="font-medium">
                        {data?.weather[0]?.main}
                     </span>
                  </div>
               </>
            )}
         </div>

         <div className="absolute top-0 right-0 w-[30vw] h-screen glass-effect">
            <div className="flex items-center h-[70px]">
               <div className="px-6 search-input h-full">
                  <input
                     type="text"
                     className="h-full w-full bg-transparent border-b-2 text-white placeholder:text-white outline-none"
                     placeholder="Anothor weather"
                     onChange={handlerSearch}
                  />
               </div>
               <button
                  className="bg-slate-500 h-full w-[70px] flex items-center justify-center"
                  onClick={handlerClickButton}>
                  <BsSearch className="text-2xl text-white" />
               </button>
            </div>

            <div className="p-6">
               <div className="text-white border-b-2 py-6">
                  <h2 className="font-semibold">Weather Details</h2>
                  <div className="flex flex-col gap-5 mt-5">
                     <div className="flex items-center justify-between">
                        <span className="">Cloudy</span>
                        <span className="">
                           {!data ? 0 : data?.clouds?.all}%
                        </span>
                     </div>
                     <div className="flex items-center justify-between">
                        <span className="">Humidity</span>
                        <span className="">
                           {!data ? 0 : data?.main?.humidity}%
                        </span>
                     </div>
                     <div className="flex items-center justify-between">
                        <span className="">Wind</span>
                        <span className="">
                           {!data ? 0 : data?.wind?.speed} km/h
                        </span>
                     </div>
                  </div>
               </div>
            </div>

            {/* <div className="p-6">
               <div className="text-white border-b-2 py-6">
                  <h2 className="font-semibold">Next Days</h2>
                  <div className="flex flex-col gap-5 mt-5">
                     <div className="flex items-center justify-between">
                        <span className="">Monday</span>
                        <div className="flex gap-2">
                           <BsCloudRain className="text-3xl" />
                           <span className="text-2xl">
                              12<span className="align-top text-sm">o</span>{" "}
                           </span>
                        </div>
                     </div>
                  </div>
               </div>
            </div> */}
         </div>
      </div>
   );
};

export default HomePage;
