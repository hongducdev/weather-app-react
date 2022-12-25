import React from "react";
import {
   BsCloudRain,
   BsClouds,
   BsCloud,
   BsCloudSnow,
   BsCloudLightning,
   BsCloudHaze,
   BsBrightnessHigh,
   BsBrightnessLow,
   BsCloudSun,
} from "react-icons/bs";
const WeatherIcon = ({ weather }: { weather: WeatherIconProps }) => {
   
   const [icon, setIcon] = React.useState<JSX.Element>(<></>);

   React.useEffect(() => {
      switch (weather as any) {
         case "Clear":
            setIcon(<BsBrightnessLow />);
            break;
         case "Clouds":
            setIcon(<BsClouds />);
            break;
         case "Rain":
            setIcon(<BsCloudRain />);
            break;
         case "Snow":
            setIcon(<BsCloudSnow />);
            break;
         case "Thunderstorm":
            setIcon(<BsCloudLightning />);
            break;
         case "Wind":
            setIcon(<BsCloudHaze />);
            break;
         case "Sunny":
            setIcon(<BsBrightnessHigh />);
            break;
         default:
            setIcon(<BsCloudSun />);
            break;
      }
   }, [weather]);

   return (
      <>
         {icon}
      </>
   );
   
};

export interface WeatherIconProps {
   weather: string;
}

export default WeatherIcon;
