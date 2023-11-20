import React from "react";
import Image from "next/image";
import cloudIcon from "@/public/cloud.png";
import sunnyIcon from "@/public/sunny.png";
import rainIcon from "@/public/rain.png";
import { formatDateInfo, renderIcon } from "@/utils/formatDateInfo";
import ArrowUp from "@/public/icons/arrow-up.svg";
import ArrowDown from "@/public/icons/arrow-down.svg";

/**
 * date => 19 November
 * weather => Sunny
 * @param {*} param0 
 * @returns 
 */
const ForecastItem = ({ date, weather, hourlyWeather }) => {
  const hourlyWeatherIcon = renderIcon(weather);
  const dateInfo = formatDateInfo(date); // 19 November
  const timeValues = hourlyWeather.map(
    (hourData) => Object.values(hourData)[0]
  );
  const dailyHighestTemp = Math.max(...timeValues);
  const dailyLowestTemp = Math.min(...timeValues);


  return (
    <div className="px-5 py-5 text-white bg-white bg-opacity-30 flex flex-col items-center gap-6 rounded-2xl sm:flex-row sm:bg-opacity-50 sm:justify-around">
      <p>{dateInfo.dayOfWeek}</p>
      <Image src={hourlyWeatherIcon} alt={weather} className="w-10 h-10" />
      <div className="text-2xl flex items-center">
        <span className="text-blue-300 flex items-center">
          <Image src={ArrowDown} alt="arrow up" className="w-5 h-5 mr-2 fill-blue-500" style={{ fill: "blue" }} />{dailyLowestTemp}°C
        </span>
        <span className="text-white mx-2">|</span>
        <span className="text-orange-500 flex items-center">
          <Image src={ArrowUp} alt="arrow down" className="w-5 h-5 mr-2" />{dailyHighestTemp}°C
        </span>
      </div>
    </div>
  );
};

export default ForecastItem;
