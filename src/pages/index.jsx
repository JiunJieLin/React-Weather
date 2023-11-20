import backgroundImage from "../public/backgroundImage.jpg";

import Weather from "@/components/weather";
import fakeDatas from "@/components/fakeData";
const Home = () => {
  const weatherLocation = fakeDatas[0];
  return (
    <div
      className="min-h-screen bg-center bg-cover flex flex-col relative sm:justify-center justify-center items-center"
      style={{ backgroundImage: `url(${backgroundImage.src})` }}
    >
      <div className="flex flex-col items-center gap-6 sm:gap-3 relative z-10">
        <Weather data={weatherLocation} />
      </div>

      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
    </div>
  );
};

export default Home;
