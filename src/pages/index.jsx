import backgroundImage from "../public/backgroundImage.jpg";
import SearchBar from "@/components/searchBar";
import cloudIcon from "@/public/cloud.png";
import sunnyIcon from "@/public/sunny.png";
import rainIcon from "@/public/rain.png";
import Image from "next/image";
import { useState } from "react";

const Home = () => {
  const fakeDatas = [
    {
      day: "Monday",
      date: "November 13",
      weather: "Sunny",
      img: sunnyIcon,
      minTemperature: 18,
      maxTemperature: 25,
      location: "Kaoshiung",
      time: ["現在", "下午1點", "下午2點", "下午3點", "下午4點"],
      hourlyWeather: ["Sunny", "Sunny", "Cloudy", "Rainy", "Rainy"],
      hourlyTemperatures: [20, 22, 23, 24, 25],
    },
    {
      day: "Tuesday",
      date: "November 14",
      weather: "Cloudy",
      img: cloudIcon,
      minTemperature: 15,
      maxTemperature: 21,
      location: "Taipei",
      time: ["現在", "下午1點", "下午2點", "下午3點", "下午4點"],
      hourlyWeather: ["Cloudy", "Cloudy", "Rainy", "Rainy", "Rainy"],
      hourlyTemperatures: [16, 17, 30, 19, 20],
    },
    {
      day: "Tuesday",
      date: "November 14",
      weather: "Rainy",
      img: rainIcon,
      minTemperature: 13,
      maxTemperature: 20,
      location: "Taoyuan",
      time: ["現在", "下午1點", "下午2點", "下午3點", "下午4點"],
      hourlyWeather: ["Cloudy", "Cloudy", "Rainy", "Rainy", "Rainy"],
      hourlyTemperatures: [18, 17, 21, 19, 20],
    },
  ];
  const [selectLocation, setSelectLocation] = useState(fakeDatas[0]);
  return (
    <div
      className=" min-h-screen bg-center bg-cover flex flex-col  border-2 gap-10 p-4"
      style={{ backgroundImage: `url(${backgroundImage.src})` }}
    >
      <div className="flex flex-col items-center w-full pt-16">
        <p className="text-purple-300 text-3xl font-bold ">WEATHER APP</p>
        <SearchBar />
      </div>
      <div className="flex justify-start flex-col text-white ">
        <h1 className="text-[50px]">New York, US</h1>
        <p className="text-lg">Wednesday 1 April</p>
      </div>
      <div className="flex pl-[100px] gap-2">
        <Image src={cloudIcon} alt="cloud" className="w-[180px] h-[180px]" />
        <div className="text-white flex flex-col ">
          <div className="text-[60px]">20°C</div>
          <p className="text-lg">多雲時陰</p>
        </div>
      </div>
      <div>
        <h2>Forecast</h2>
      </div>
    </div>
  );
};

export default Home;
