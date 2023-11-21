import Image from "next/image";
import { renderIcon } from "@/components/formattedData.js";
const HourlyItem = ({ hourlyWeatherData }) => {
  return (
    <div className="flex items-center gap-2 justify-center ">
      {hourlyWeatherData.map((hour, index) => (
        <div
          key={index}
          className="rounded-full  bg-black bg-opacity-40 text-white px-5 py-5 "
        >
          <p>
            {Object.keys(hour)[0] === "01:00" ? "現在" : Object.keys(hour)[0]}
          </p>
          <Image
            src={renderIcon(hour.weather)}
            alt="sunny"
            className="w-10 h-10"
          />
          <p>{Object.values(hour)[0]}°C</p>
        </div>
      ))}
    </div>
  );
};

export default HourlyItem;
