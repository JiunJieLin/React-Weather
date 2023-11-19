import cloudIcon from "@/public/cloud.png";
import sunnyIcon from "@/public/sunny.png";
import rainIcon from "@/public/rain.png";
import Image from "next/image";
import fakeDatas from "./fakeData";
const Weather = ({ selectedLocationIndex }) => {
  const selectedLocation = fakeDatas[selectedLocationIndex];

  return (
    <>
      <div className="flex justify-start flex-col text-white sm:justify-center sm:items-center ">
        <h1 className="text-[50px] sm:text-[35px]">
          {selectedLocation.location}
        </h1>
        <p className="text-lg ">{`${selectedLocation.day} ${selectedLocation.date}`}</p>
      </div>
      <div className="flex gap-10 sm:flex-col items-center ">
        <div className="flex pl-[100px] gap-2 sm:flex-col sm:items-center sm: justify-cener sm:pl-0  ">
          <Image
            src={
              selectedLocation.weather === "Sunny"
                ? sunnyIcon
                : selectedLocation.weather === "Cloudy"
                ? cloudIcon
                : rainIcon
            }
            alt="cloud"
            className="w-[180px] h-[180px] sm:opacity-40  sm:w-[150px] sm:h-[150px] "
          />
          <div className="text-white flex flex-col  sm:items-center sm:justify-center ">
            <div className="text-[60px]">
              {`${selectedLocation.hourlyTemperatures[0]}°C`}
            </div>
            <p className="text-2xl">{selectedLocation.hourlyWeather[0]}</p>
          </div>
          <div className="text-white flex flex-col pl-8  justify-around sm:flex-row sm:pl-0  sm:gap-3">
            <div className="flex flex-col items-center">
              <p>{selectedLocation.maxTemperature}</p>
              <p>Hight</p>
            </div>
            <div className="flex flex-col items-center">
              <p>{selectedLocation.minTemperature}</p>
              <p>Low</p>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-10 sm:pt-0">
        <h2 className="text-white text-lg pb-3 ">Forecast</h2>
        <div className="flex gap-4 sm:flex-col">
          {selectedLocation.time.map((time, index) => (
            <div
              key={index}
              className="px-10 py-5 bg-white bg-opacity-90 flex flex-col items-center gap-6 rounded-2xl sm:flex-row sm:bg-opacity-50 sm:justify-around"
            >
              <p>{time}</p>
              <Image
                src={
                  selectedLocation.hourlyWeather[index] === "Sunny"
                    ? sunnyIcon
                    : selectedLocation.hourlyWeather[index] === "Cloudy"
                    ? cloudIcon
                    : rainIcon
                }
                alt={selectedLocation.weather}
                className="w-10 h-10"
              />
              <p>{`${selectedLocation.hourlyTemperatures[index]}°C`}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Weather;
