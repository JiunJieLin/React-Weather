import cloudIcon from "@/public/cloud.png";
import sunnyIcon from "@/public/sunny.png";
import rainIcon from "@/public/rain.png";

// 19 November
export function formatDateInfo(dateString) {
  const [day, month] = dateString.split(" ");
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const dateObj = new Date(`${month} ${day}, ${year}`); // 2023-11-19T05:00:00.000Z

  return {
    year, // 2023
    month: dateObj.toLocaleDateString("en-US", { month: "long" }), // November
    date: dateObj.getDate(), // 19
    dayOfWeek: dateObj.toLocaleDateString("en-US", { weekday: "long" }), // Saturday
  };
}


export function renderIcon(weatherObj) {
  const weatherIcons = {
    Sunny: sunnyIcon,
    Cloudy: cloudIcon,
    Rainy: rainIcon,
  };

  const hourlyWeatherIcon = weatherIcons[weatherObj] || sunnyIcon;
  return hourlyWeatherIcon;
}