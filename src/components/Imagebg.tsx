import React from "react";
import Clear from "../assets/images/clear.jpg";
import Cloudy from "../assets/images/cloudy.jpg";
import Rain from "../assets/images/rain.jpg";
import Snow from "../assets/images/snow.jpg";
import Thunderstorm from "../assets/images/thunderstorm.jpg";
import Wind from "../assets/images/wind.jpg";
import Sunny from "../assets/images/sunny.jpg";

const Imagebg = ({ weather }: { weather: ImagebgProps }) => {

   const [image, setImage] = React.useState<string>("");

   React.useEffect(() => {
      switch (weather as any) {
         case "Clear":
            setImage(Clear);
            break;
         case "Clouds":
            setImage(Cloudy);
            break;
         case "Rain":
            setImage(Rain);
            break;
         case "Snow":
            setImage(Snow);
            break;
         case "Thunderstorm":
            setImage(Thunderstorm);
            break;   
         case "Wind":
            setImage(Wind);
            break;
         case "Sunny":
            setImage(Sunny);
            break;
         default:
            setImage(Clear);
            break;
      }
   }, [weather]);

   return (
      <img
         src={image}
         alt="weather"
         className="w-full h-full bg-cover pointer-events-none bg-no-repeat bg-center"
      />
   );
};

export interface ImagebgProps {
   weather: string;
}

export default Imagebg;
