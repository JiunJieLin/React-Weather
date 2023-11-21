import { renderIcon, formatDateInfo } from "@/components/formattedData.js";
import CurrentWeather from "./CurrentWeather";
import HourlyItem from "./hourlyItem";
import WeeklyItem from "./weeklyItem";
const Weather = ({ data }) => {
  const dateList = data.dateList;
  const firstDate = formatDateInfo(dateList[0].date);
  const transformedFirstDate = `${firstDate.month} ${firstDate.date},${firstDate.year}`;
  const currentWeather = data.dateList[0].weather;

  const currentIcon = renderIcon(currentWeather);

  const hourlyWeatherData = data.dateList[0].hourlyWeather;

  const timeValues = hourlyWeatherData.map((hourData) => {
    const time = Object.values(hourData)[0];
    return time;
  });
  const tempNow = timeValues[0];

  const dailyHighestTemp = Math.max(...timeValues);
  const dailyLowestTemp = Math.min(...timeValues);

  return (
    <>
      <div className="flex justify-start flex-col text-white sm:justify-center sm:items-center ">
        <h1 className="text-[60px] sm:text-[35px]">{data.location}</h1>
        <p className="text-lg ">{transformedFirstDate}</p>
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
