import Image from "next/image";
import { renderIcon, formatDateInfo } from "@/components/formattedData.js";
const Weather = ({ data }) => {
  const firstDate = formatDateInfo(data.dateList[0].date);
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
      <div className="flex  sm:flex-col items-center ">
        <div className="flex  gap-2 sm:flex-col sm:items-center sm: justify-cener ">
          <Image
            priority={true}
            src={currentIcon}
            alt={currentWeather}
            className="w-[200px] h-[200px] sm:opacity-40  sm:w-[150px] sm:h-[150px] "
          />
          <div className="text-white flex flex-col items-center sm:justify-center ">
            <div className="text-[70px]">{tempNow}°C</div>
            <p className="text-2xl ">{currentWeather}</p>
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
      </div>
      <div className="mt-6 flex flex-col  justify-between gap-10">
        <div className="flex items-center gap-2 justify-center ">
          {data.dateList[0].hourlyWeather.map((hour, index) => (
            <div
              key={index}
              className="rounded-full  bg-black bg-opacity-40 text-white px-5 py-5 "
            >
              <p>
                {Object.keys(hour)[0] === "01:00"
                  ? "現在"
                  : Object.keys(hour)[0]}
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
        <div className="border-2 rounded-lg w-full  text-white"></div>
        <div className=" sm:pt-0">
          <div className="flex gap-4 sm:flex-col">
            {data.dateList.map((dayData, index) => {
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
                  <Image
                    src={hourlyWeather}
                    alt="sunny"
                    className="w-10 h-10"
                  />

                  <div className="flex gap-2">
                    <p className="text-blue-400">{dailyLowestTemp}°C</p>
                    <div className="border-2 rounded-lg w-full  text-white"></div>
                    <p className="text-red-400">{dailyHighestTemp}°C</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Weather;
