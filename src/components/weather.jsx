import { renderIcon, formatDateInfo } from "@/components/formattedData.js";
import CurrentWeather from "./currentWeather";
import HourlyItem from "./hourlyItem";
import WeeklyItem from "./weeklyItem";
import Button from "@/components/button";
import { useState } from "react";
import fakeDatas from "./fakeData";
const Weather = () => {
  const [currentActive, setCurrentActive] = useState(0);
  const activeWeather = fakeDatas[currentActive];

  const dateList = activeWeather.dateList;
  const firstDate = formatDateInfo(dateList[0].date);
  const transformedFirstDate = `${firstDate.month} ${firstDate.date},${firstDate.year}`;
  const currentWeather = activeWeather.dateList[0].weather;
  const currentIcon = renderIcon(currentWeather);
  const hourlyWeatherData = activeWeather.dateList[0].hourlyWeather;
  const timeValues = hourlyWeatherData.map((hourData) => {
    const time = Object.values(hourData)[0];
    return time;
  });
  const tempNow = timeValues[0];

  const dailyHighestTemp = Math.max(...timeValues);
  const dailyLowestTemp = Math.min(...timeValues);

  const handleNextLocation = () => {
    console.log("next clicked");
    setCurrentActive((prev) => (prev + 1) % fakeDatas.length);
  };
  const handlePrevLocation = () => {
    console.log("prev clicked");
    setCurrentActive(
      (prev) => (prev - 1 + fakeDatas.length) % fakeDatas.length
    );
  };
  return (
    <>
      <div className="relative">
        <div className="flex justify-start flex-col text-white sm:justify-center sm:items-center ">
          <h1 className="text-[60px] sm:text-[35px]">
            {activeWeather.location}
          </h1>
          <p className="text-lg ">{transformedFirstDate}</p>
        </div>
        <Button
          handleNextLocation={handleNextLocation}
          handlePrevLocation={handlePrevLocation}
        />
      </div>

      <CurrentWeather
        currentIcon={currentIcon}
        currentWeather={currentWeather}
        tempNow={tempNow}
        dailyHighestTemp={dailyHighestTemp}
        dailyLowestTemp={dailyLowestTemp}
      />

      <div className="mt-6 flex flex-col  justify-between gap-10">
        <HourlyItem hourlyWeatherData={hourlyWeatherData} />
        <div className="border-2 rounded-lg w-full  text-white"></div>

        <WeeklyItem dateList={dateList} />
      </div>
    </>
  );
};

export default Weather;
