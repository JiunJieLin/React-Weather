import Image from "next/image";
import { renderIcon } from "@/utils/formatDateInfo";

const HourlyForecast = ({ hourlyWeatherData }) => {
  return (
    <div className="flex items-center gap-2">
      {hourlyWeatherData.map((hour, index) => {
        const time = Object.keys(hour)[0];
        const weather = hour.weather;
        const icon = renderIcon(weather);

        return (
          <div
            key={index}
            className="rounded-full bg-black bg-opacity-40 text-white px-5 py-5"
          >
            <p>{time === "01:00" ? "現在" : time}</p>
            <Image src={icon} alt={weather} className="w-10 h-10" />
            <p>{Object.values(hour)[0]}°C</p>
          </div>
        );
      })}
    </div>
  );
};

export default HourlyForecast;
