import Image from "next/image";
const CurrentWeather = ({
  currentIcon,
  currentWeather,
  tempNow,
  dailyHighestTemp,
  dailyLowestTemp,
}) => {
  return (
    <div className="flex  sm:flex-col items-center ">
      <div className="flex gap-2 sm:flex-col sm:items-center sm: justify-cener">
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
  );
};

export default CurrentWeather;
