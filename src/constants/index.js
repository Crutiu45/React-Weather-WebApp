export const DEFAULT_PLACE = {
    name:"Calgary",
    place_id:"calgary",
    adm_area1:"Alberta",
    adm_area2:null,
    country:"Canada",
    lat:"51.05011N",
    lon:"114.08529W",
    timezone:"America/Edmonton",
    type:"settlement",
};

export const MEASUREMENT_SYSTEMS = {
    AUTO: 'auto',
    METRIC: 'metric',
    UK: 'uk',
    US: 'us',
    CA: 'ca',
};

export const UNITS = {
  metric: {
    temperature: '°C',
    precipitation: 'mm/h',
    wind_speed: 'm/s',
    visibility: 'km',
    humidity: '%',
    uv_index: '',
    cloud_cover: '%',
  },
  us: {
    temperature: '°F',
    precipitation: 'in/h',
    wind_speed: 'mph',
    visibility: 'mi',
    humidity: '%',
    uv_index: '',
    cloud_cover: '%',
  },
  uk: {
    temperature: '°C',
    precipitation: 'mm/h',
    wind_speed: 'mph',
    visibility: 'mi',
    humidity: '%',
    uv_index: '',
    cloud_cover: '%',
  },
  ca: {
    temperature: '°C',
    precipitation: 'mm/h',
    wind_speed: 'km/h',
    visibility: 'km',
    humidity: '%',
    uv_index: '',
    cloud_cover: '%',
  },
};

export const getMoonPhaseIcon = (phase) => {
  switch (phase) {
    case "new_moon":
      return "bi-moon-fill"; // 🌑
    case "waxing_crescent":
      return "bi-moon"; // 🌒
    case "first_quarter":
      return "bi-moon"; // You can substitute with bi-moon
    case "waxing_gibbous":
      return "bi-moon"; // 🌔
    case "full_moon":
      return "bi-moon-stars-fill"; // 🌕
    case "waning_gibbous":
      return "bi-moon"; // 🌖
    case "last_quarter":
      return "bi-moon"; // Last quarter approximation
    case "waning_crescent":
      return "bi-moon"; // 🌘
    default:
      return "bi-moon";
  }
};
