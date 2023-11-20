import React from "react";
import Image from "next/image";
import sunnyIcon from "@/public/sunny.png";

/**
 * CurrentWeather 元件顯示當前天氣資訊，包括天氣圖示、溫度和最高/最低溫度。
 *
 * @param {Object} props - 屬性物件
 * @param {string} props.currentIcon - 當前天氣圖示的 URL
 * @param {string} props.currentWeather - 當前天氣描述
 * @param {number} props.tempNow - 當前溫度
 * @param {number} props.dailyHighestTemp - 當天最高溫度
 * @param {number} props.dailyLowestTemp - 當天最低溫度
 * @returns {JSX.Element} 包含當前天氣資訊的 JSX 元素
 */
const CurrentWeather = ({
  currentIcon,
  currentWeather,
  tempNow,
  dailyHighestTemp,
  dailyLowestTemp,
}) => {
  return (
    <div className="flex sm:flex-col items-center gap-2 sm:items-center sm:justify-center">
      <Image
        priority={true}
        src={currentIcon || sunnyIcon}
        alt={currentWeather}
        className="w-[200px] h-[200px] sm:opacity-40 sm:w-[150px] sm:h-[150px]"
      />
      <div className="text-white flex flex-col items-center sm:justify-center">
        <div className="text-[70px]">{tempNow}°C</div>
        <p className="text-2xl">{currentWeather}</p>
        <div className="text-white flex gap-6 sm:flex-row sm:gap-3">
          <div className="flex flex-col items-center">
            <p>{dailyHighestTemp}</p>
            <p>Hight</p>
          </div>
          <div className="flex flex-col items-center">
            <p>{dailyLowestTemp}</p>
            <p>Low</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
