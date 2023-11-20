import CurrentWeather from "./current-weather";
import ForecastItem from "./fore-cast-weather";
import HourlyForecast from "./hourly-forecast";
import { formatDateInfo, renderIcon } from "../utils/formatDateInfo";

const Weather = ({ data }) => {
  // - first date Convert to 19 November 2023
  const firstDate = data.dateList[0].date; // 19 November
  const currentDate = formatDateInfo(firstDate);
  const convertedDate = `${currentDate.month} ${currentDate.date} ${currentDate.year}`; // November 19 2023

  // - Current weather & icon
  const currentWeather = data.dateList[0].weather;
  const currentIcon = renderIcon(currentWeather);

  // - hourlyWeatherData
  const hourlyWeatherData = data.dateList[0].hourlyWeather;

  const timeValues = hourlyWeatherData.map(
    (hourData) => Object.values(hourData)[0]
  );
  const tempNow = timeValues[0];
  const dailyHighestTemp = Math.max(...timeValues);
  const dailyLowestTemp = Math.min(...timeValues);

  return (
    <>
      <div className="flex flex-col justify-start text-white sm:justify-center sm:items-center">
        <h1 className="text-[60px] sm:text-[35px]">{data.location}</h1>
        <p className="text-lg">{convertedDate}</p>
      </div>
      <CurrentWeather
        currentIcon={currentIcon}
        currentWeather={currentWeather}
        tempNow={tempNow}
        dailyHighestTemp={dailyHighestTemp}
        dailyLowestTemp={dailyLowestTemp}
      />
      <div className="mt-6">
        <HourlyForecast hourlyWeatherData={data.dateList[0].hourlyWeather} />
      </div>
      <hr className="bg-white h-1 w-full text-white" />
      <div className="flex gap-4 sm:flex-col">
        {data.dateList.slice(1).map((dayData, index) => (
          <ForecastItem
            key={index}
            date={dayData.date}
            weather={dayData.weather}
            hourlyWeather={dayData.hourlyWeather}
          />
        ))}
      </div>
    </>
  );
};

export default Weather;
