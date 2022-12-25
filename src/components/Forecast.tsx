import React from "react";
import { BsCloudRain } from "react-icons/bs";
import WeatherIcon from "./WeatherIcon";

const Forecast = ({ item }: { item: ForecastProps }) => {
   return (
      <div className="flex items-center justify-between">
         <span className="">
            {new Date(item?.dt * 1000).toLocaleDateString()}
         </span>
         <div className="flex gap-2">
            <div className="flex items-center gap-3">
               <div className="text-3xl">
                  <WeatherIcon weather={item?.weather[0]?.main} />
               </div>
               <span className="text-sm">{item?.weather[0]?.main}</span>
            </div>
            <div className="">
               <span className="text-2xl">
                  {Math.round(item?.temp?.min)}
                  <span className="align-top text-sm">o</span>
               </span>
               <span className="text-2xl">-</span>
               <span className="text-2xl">
                  {Math.round(item?.temp?.max)}
                  <span className="align-top text-sm">o</span>
               </span>
            </div>
         </div>
      </div>
   );
};

export interface ForecastProps {
   dt: number;
   weather: any;
   temp: {
      day: number;
      min: number;
      max: number;
      night: number;
      eve: number;
      morn: number;
   };
}

{
   /* <div className="flex items-center justify-between" key={index}>
   <span className="">{new Date(item?.dt * 1000).toLocaleDateString()}</span>
   <span className="">{Math.round(item?.temp?.day)}o</span>
</div>; */
}

export default Forecast;
