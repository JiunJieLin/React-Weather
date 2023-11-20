import cloudIcon from "@/public/cloud.png";
import sunnyIcon from "@/public/sunny.png";
import rainIcon from "@/public/rain.png";
import Image from "next/image";

const Weather = ({ data }) => {
  console.log(Date.now());
  const date = data.dateList[0].date;
  const transformedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  console.log(transformedDate);
  const currentWeather = data.dateList[0].weather;

  const currentIcon =
    currentWeather === "Sunny"
      ? sunnyIcon
      : currentWeather === "Cloudy"
      ? cloudIcon
      : rainIcon;

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
        <p className="text-lg ">{transformedDate}</p>
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
      <div className="mt-6 flex flex-col  justify-between">
        <div className="flex items-center gap-2 ">
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
                src={
                  hour.weather === "Sunny"
                    ? sunnyIcon
                    : hour.weather === "Cloudy"
                    ? cloudIcon
                    : rainIcon
                }
                alt="sunny"
                className="w-10 h-10"
              />
              <p>{Object.values(hour)[0]}°C</p>
            </div>
          ))}
        </div>
        <div className="pt-10 sm:pt-0">
          <h2 className="text-white text-lg pb-3 ">Forecast</h2>
          <div className="flex gap-4 sm:flex-col">
            {data.dateList.map((dayData, index) => {
              const timeValues = dayData.hourlyWeather.map((hourData) => {
                const time = Object.values(hourData)[0];
                return time;
              });
              const dailyHighestTemp = Math.max(...timeValues);
              const dailyLowestTemp = Math.min(...timeValues);
              const hourlyWeather =
                dayData.weather === "Sunny"
                  ? sunnyIcon
                  : dayData.weather === "Cloudy"
                  ? cloudIcon
                  : rainIcon;

              return (
                <div
                  key={index}
                  className="px-5 py-5 text-white bg-white bg-opacity-30 flex flex-col items-center gap-6 rounded-2xl sm:flex-row sm:bg-opacity-50 sm:justify-around"
                >
                  <p>今天</p>
                  <Image
                    src={hourlyWeather}
                    alt="sunny"
                    className="w-10 h-10"
                  />
                  <p>
                    {dailyLowestTemp}°C---{dailyHighestTemp}°C
                  </p>
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
