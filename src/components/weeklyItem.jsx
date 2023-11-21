import Image from "next/image";
import { renderIcon, formatDateInfo } from "@/components/formattedData.js";

const WeeklyItem = ({ dateList }) => {
  return (
    <div className="flex gap-4 sm:flex-col">
      {dateList.map((dayData, index) => {
        const timeValues = dayData.hourlyWeather.map((hourData) => {
          const time = Object.values(hourData)[0];
          return time;
        });
        const dailyHighestTemp = Math.max(...timeValues);
        const dailyLowestTemp = Math.min(...timeValues);
        const hourlyWeather = renderIcon(dayData.weather);
        const date = dayData.date;
        const formattedDate = formatDateInfo(date);
        const dayOfWeek = formattedDate.dayOfWeek;
        console.log(dayOfWeek);
        return (
          <div
            key={index}
            className="px-10 py-5 text-white bg-white bg-opacity-30 flex flex-col items-center gap-4 rounded-2xl sm:flex-row sm:bg-opacity-30 sm:justify-around"
          >
            <p>{dayData.id === "01" ? "Today" : dayOfWeek}</p>
            <Image src={hourlyWeather} alt="sunny" className="w-10 h-10" />

            <div className="flex gap-2">
              <p className="text-blue-400">{dailyLowestTemp}°C</p>
              <div className="border-2 rounded-lg w-full  text-white"></div>
              <p className="text-red-400">{dailyHighestTemp}°C</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default WeeklyItem;
