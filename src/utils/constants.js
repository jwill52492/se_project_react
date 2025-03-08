export const weatherOptions = [
  {
    day: true,
    condition: "clear",
    url: new URL("../assets/day/clear.svg", import.meta.url).href,
  },
  {
    day: true,
    condition: "cloudy",
    url: new URL("../assets/day/cloudy.svg", import.meta.url).href,
  },
  {
    day: true,
    condition: "partly-cloudy",
    url: new URL("../assets/day/partly-cloudy.svg", import.meta.url).href,
  },
  {
    day: true,
    condition: "rain",
    url: new URL("../assets/day/rain.svg", import.meta.url).href,
  },
  {
    day: true,
    condition: "thunderstorm",
    url: new URL("../assets/day/thunderstorm.svg", import.meta.url).href,
  },
  {
    day: true,
    condition: "snow",
    url: new URL("../assets/day/snow.svg", import.meta.url).href,
  },
  {
    day: false,
    condition: "clear",
    url: new URL("../assets/night/clear.svg", import.meta.url).href,
  },
  {
    day: false,
    condition: "cloudy",
    url: new URL("../assets/night/cloudy.svg", import.meta.url).href,
  },
  {
    day: false,
    condition: "partly-cloudy",
    url: new URL("../assets/night/partly-cloudy.svg", import.meta.url).href,
  },
  {
    day: false,
    condition: "rain",
    url: new URL("../assets/night/rain.svg", import.meta.url).href,
  },
  {
    day: false,
    condition: "thunderstorm",
    url: new URL("../assets/night/thunderstorm.svg", import.meta.url).href,
  },
  {
    day: false,
    condition: "snow",
    url: new URL("../assets/night/snow.svg", import.meta.url).href,
  }
];

export const defaultWeatherOptions = {
  day: {
    url: new URL("../assets/day/day.svg", import.meta.url).href,
  },
  night: {
    url: new URL("../assets/night/night.svg", import.meta.url).href,
  }
}

export const defaultClothingItems = [
  {
    _id: 0,
    name: "Cap",
    weather: "hot",
    link: "src/assets/Goat.jpg",
  },
  {
    _id: 1,
    name: "Hoodie",
    weather: "warm",
    link: "src/assets/hoodie.jpg",
  },
  {
    _id: 2,
    name: "Jacket",
    weather: "cold",
    link: "src/assets/jacket.jpg",
  },
  {
    _id: 3,
    name: "Sneakers",
    weather: "cold",
    link: "src/assets/sneakers.jpg",
  },
  {
    _id: 4,
    name: "T-Shirt",
    weather: "hot",
    link: "src/assets/t-shirt.jpg",
  },
  {
    _id: 5,
    name: "Coat",
    weather: "cold",
    link: "src/assets/coat.jpg",
  }
]

  export const coordinates = {
    latitude: 35.052666,
    longitude: -78.878357,
  };

  export const APIkey = "28851d7d969d8b14c015e65ea3ca6c55";
