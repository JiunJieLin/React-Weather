import backgroundImage from "../public/backgroundImage.jpg";

import Weather from "@/components/weather";
import fakeDatas from "@/components/fakeData";
const Home = () => {
  const weatherLocation = fakeDatas[0];
  return (
    <div
      className=" min-h-screen bg-center bg-cover flex flex-col relative sm: justify-center "
      style={{ backgroundImage: `url(${backgroundImage.src})` }}
    >
      <p className="text-purple-300 text-2xl font-bold absolute top-0 left-0 sm:text-lg">
        WEATHER APP
      </p>
      <div className="flex flex-col items-center gap-6 sm:gap-3 ">
        <Weather data={weatherLocation} />
      </div>
    </div>
  );
};

export default Home;
