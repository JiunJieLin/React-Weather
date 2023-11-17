import cloudIcon from "@/public/cloud.png";
import sunnyIcon from "@/public/sunny.png";
import rainIcon from "@/public/rain.png";
import Image from "next/image";
import fakeDatas from "./fakeData";
const Weather = ({ selectedLocationIndex }) => {
  const selectedLocation = fakeDatas[selectedLocationIndex];

  return (
    <>
      <div className="flex justify-start flex-col text-white ">
        <h1 className="text-[50px]">{selectedLocation.location}</h1>
        <p className="text-lg">{`${selectedLocation.day} ${selectedLocation.date}`}</p>
      </div>
      <div className="flex gap-10">
        <div className="flex pl-[100px] gap-2">
          <Image
            src={
              selectedLocation.weather === "Sunny"
                ? sunnyIcon
                : selectedLocation.weather === "Cloudy"
                ? cloudIcon
                : rainIcon
            }
            alt="cloud"
            className="w-[180px] h-[180px]"
          />
          <div className="text-white flex flex-col ">
            <div className="text-[60px]">
              {selectedLocation.hourlyTemperatures[0]}
            </div>
            <p className="text-2xl">{selectedLocation.hourlyWeather[0]}</p>
          </div>
          <div className="text-white flex flex-col gap-10 pl-8 ">
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

      <div className="pt-10">
        <h2 className="text-white text-lg">Forecast</h2>
        <div className="flex gap-2">
          {selectedLocation.time.map((time, index) => (
            <div
              key={index}
              className="px-10 py-5 bg-white bg-opacity-90 flex flex-col items-center gap-6"
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
