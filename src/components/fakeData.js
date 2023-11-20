const fakeDatas = [
  {
    location: "Kaoshiung",
    dateList: [
      {
        id: "01",
        date: "19 November",
        today: true,
        weather: "Sunny",
        hourlyWeather: [
          { "01:00": 26, weather: "Rainy" },
          { "02:00": 24, weather: "Cloudy" },
          { "03:00": 10, weather: "Cloudy" },
        ],
      },
      {
        id: "02",
        date: "20 November",
        today: true,
        weather: "Rainy",
        hourlyWeather: [
          { "01:00": 23, weather: "Rainy" },
          { "02:00": 24, weather: "Cloudy" },
          { "03:00": 10, weather: "Cloudy" },
        ],
      },
      {
        id: "03",
        date: "21 November",
        today: true,
        weather: "Cloudy",
        hourlyWeather: [
          { "01:00": 23, weather: "Rainy" },
          { "02:00": 24, weather: "Cloudy" },
          { "03:00": 10, weather: "Cloudy" },
        ],
      },
    ],
  },
];
export default fakeDatas;
