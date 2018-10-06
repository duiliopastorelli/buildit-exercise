export const defaultAppState = {
  _isMounted:true,
  forecasts:{
    city: {
      name: "",
      country: "",
    },
    list: []
  }
};

export const fullWeatherAPIResponse =
  {
    "cod": "200",
    "message": 0.5432,
    "cnt": 40,
    "list": [
      {
        "dt": 1538740800,
        "main": {
          "temp": 14.23,
          "temp_min": 14.23,
          "temp_max": 17.3,
          "pressure": 1026.39,
          "sea_level": 1038.54,
          "grnd_level": 1026.39,
          "humidity": 65,
          "temp_kf": -3.06
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 5.02,
          "deg": 232.501
        },
        "rain": {},
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2018-10-05 12:00:00"
      },
      {
        "dt": 1538751600,
        "main": {
          "temp": 13.94,
          "temp_min": 13.94,
          "temp_max": 16.24,
          "pressure": 1025.35,
          "sea_level": 1037.48,
          "grnd_level": 1025.35,
          "humidity": 60,
          "temp_kf": -2.3
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 3.47,
          "deg": 217.004
        },
        "rain": {},
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2018-10-05 15:00:00"
      },
      {
        "dt": 1538762400,
        "main": {
          "temp": 9.27,
          "temp_min": 9.27,
          "temp_max": 10.8,
          "pressure": 1024.96,
          "sea_level": 1037.26,
          "grnd_level": 1024.96,
          "humidity": 76,
          "temp_kf": -1.53
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 3.41,
          "deg": 187.001
        },
        "rain": {},
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2018-10-05 18:00:00"
      },
      {
        "dt": 1538773200,
        "main": {
          "temp": 7.78,
          "temp_min": 7.78,
          "temp_max": 8.55,
          "pressure": 1024.04,
          "sea_level": 1036.47,
          "grnd_level": 1024.04,
          "humidity": 84,
          "temp_kf": -0.77
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 4.11,
          "deg": 188
        },
        "rain": {},
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2018-10-05 21:00:00"
      },
      {
        "dt": 1538784000,
        "main": {
          "temp": 8.02,
          "temp_min": 8.02,
          "temp_max": 8.02,
          "pressure": 1023.03,
          "sea_level": 1035.46,
          "grnd_level": 1023.03,
          "humidity": 83,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 3.82,
          "deg": 185.001
        },
        "rain": {},
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2018-10-06 00:00:00"
      },
      {
        "dt": 1538794800,
        "main": {
          "temp": 7.54,
          "temp_min": 7.54,
          "temp_max": 7.54,
          "pressure": 1021.82,
          "sea_level": 1034.3,
          "grnd_level": 1021.82,
          "humidity": 81,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 4.36,
          "deg": 182.003
        },
        "rain": {},
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2018-10-06 03:00:00"
      },
      {
        "dt": 1538805600,
        "main": {
          "temp": 8.58,
          "temp_min": 8.58,
          "temp_max": 8.58,
          "pressure": 1020.82,
          "sea_level": 1033.11,
          "grnd_level": 1020.82,
          "humidity": 74,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 3.46,
          "deg": 184
        },
        "rain": {},
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2018-10-06 06:00:00"
      },
      {
        "dt": 1538816400,
        "main": {
          "temp": 15.15,
          "temp_min": 15.15,
          "temp_max": 15.15,
          "pressure": 1019.42,
          "sea_level": 1031.43,
          "grnd_level": 1019.42,
          "humidity": 68,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 4.36,
          "deg": 172.501
        },
        "rain": {},
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2018-10-06 09:00:00"
      },
      {
        "dt": 1538827200,
        "main": {
          "temp": 18.92,
          "temp_min": 18.92,
          "temp_max": 18.92,
          "pressure": 1016.55,
          "sea_level": 1028.62,
          "grnd_level": 1016.55,
          "humidity": 63,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 5.46,
          "deg": 190.502
        },
        "rain": {},
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2018-10-06 12:00:00"
      },
      {
        "dt": 1538838000,
        "main": {
          "temp": 18.41,
          "temp_min": 18.41,
          "temp_max": 18.41,
          "pressure": 1014.89,
          "sea_level": 1026.96,
          "grnd_level": 1014.89,
          "humidity": 59,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 4.9,
          "deg": 217.004
        },
        "rain": {},
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2018-10-06 15:00:00"
      },
      {
        "dt": 1538848800,
        "main": {
          "temp": 12.75,
          "temp_min": 12.75,
          "temp_max": 12.75,
          "pressure": 1014.54,
          "sea_level": 1026.72,
          "grnd_level": 1014.54,
          "humidity": 69,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "02n"
          }
        ],
        "clouds": {
          "all": 8
        },
        "wind": {
          "speed": 3.4,
          "deg": 215.001
        },
        "rain": {},
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2018-10-06 18:00:00"
      },
      {
        "dt": 1538859600,
        "main": {
          "temp": 10.96,
          "temp_min": 10.96,
          "temp_max": 10.96,
          "pressure": 1014.3,
          "sea_level": 1026.46,
          "grnd_level": 1014.3,
          "humidity": 80,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03n"
          }
        ],
        "clouds": {
          "all": 32
        },
        "wind": {
          "speed": 3.27,
          "deg": 206.5
        },
        "rain": {},
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2018-10-06 21:00:00"
      },
      {
        "dt": 1538870400,
        "main": {
          "temp": 11.09,
          "temp_min": 11.09,
          "temp_max": 11.09,
          "pressure": 1013.98,
          "sea_level": 1026.2,
          "grnd_level": 1013.98,
          "humidity": 90,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04n"
          }
        ],
        "clouds": {
          "all": 56
        },
        "wind": {
          "speed": 4.22,
          "deg": 201
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2018-10-07 00:00:00"
      },
      {
        "dt": 1538881200,
        "main": {
          "temp": 12.13,
          "temp_min": 12.13,
          "temp_max": 12.13,
          "pressure": 1013.49,
          "sea_level": 1025.57,
          "grnd_level": 1013.49,
          "humidity": 82,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03n"
          }
        ],
        "clouds": {
          "all": 32
        },
        "wind": {
          "speed": 4.54,
          "deg": 198.505
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2018-10-07 03:00:00"
      },
      {
        "dt": 1538892000,
        "main": {
          "temp": 14.21,
          "temp_min": 14.21,
          "temp_max": 14.21,
          "pressure": 1013.34,
          "sea_level": 1025.41,
          "grnd_level": 1013.34,
          "humidity": 71,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04d"
          }
        ],
        "clouds": {
          "all": 64
        },
        "wind": {
          "speed": 4.7,
          "deg": 199.503
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2018-10-07 06:00:00"
      },
      {
        "dt": 1538902800,
        "main": {
          "temp": 18.28,
          "temp_min": 18.28,
          "temp_max": 18.28,
          "pressure": 1013.84,
          "sea_level": 1025.92,
          "grnd_level": 1013.84,
          "humidity": 67,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ],
        "clouds": {
          "all": 76
        },
        "wind": {
          "speed": 5.39,
          "deg": 210.505
        },
        "rain": {
          "3h": 0.005
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2018-10-07 09:00:00"
      },
      {
        "dt": 1538913600,
        "main": {
          "temp": 19.61,
          "temp_min": 19.61,
          "temp_max": 19.61,
          "pressure": 1013.85,
          "sea_level": 1025.88,
          "grnd_level": 1013.85,
          "humidity": 68,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04d"
          }
        ],
        "clouds": {
          "all": 76
        },
        "wind": {
          "speed": 4.53,
          "deg": 226.501
        },
        "rain": {},
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2018-10-07 12:00:00"
      },
      {
        "dt": 1538924400,
        "main": {
          "temp": 19.83,
          "temp_min": 19.83,
          "temp_max": 19.83,
          "pressure": 1014.09,
          "sea_level": 1026.13,
          "grnd_level": 1014.09,
          "humidity": 66,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03d"
          }
        ],
        "clouds": {
          "all": 36
        },
        "wind": {
          "speed": 2.37,
          "deg": 237.501
        },
        "rain": {},
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2018-10-07 15:00:00"
      },
      {
        "dt": 1538935200,
        "main": {
          "temp": 14.57,
          "temp_min": 14.57,
          "temp_max": 14.57,
          "pressure": 1015.63,
          "sea_level": 1027.79,
          "grnd_level": 1015.63,
          "humidity": 86,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "02n"
          }
        ],
        "clouds": {
          "all": 8
        },
        "wind": {
          "speed": 1.81,
          "deg": 238.002
        },
        "rain": {},
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2018-10-07 18:00:00"
      },
      {
        "dt": 1538946000,
        "main": {
          "temp": 12.61,
          "temp_min": 12.61,
          "temp_max": 12.61,
          "pressure": 1017.86,
          "sea_level": 1029.99,
          "grnd_level": 1017.86,
          "humidity": 91,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 5.12,
          "deg": 10.5012
        },
        "rain": {},
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2018-10-07 21:00:00"
      },
      {
        "dt": 1538956800,
        "main": {
          "temp": 10.28,
          "temp_min": 10.28,
          "temp_max": 10.28,
          "pressure": 1019.78,
          "sea_level": 1032.13,
          "grnd_level": 1019.78,
          "humidity": 92,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 3.75,
          "deg": 10.5015
        },
        "rain": {},
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2018-10-08 00:00:00"
      },
      {
        "dt": 1538967600,
        "main": {
          "temp": 8.2,
          "temp_min": 8.2,
          "temp_max": 8.2,
          "pressure": 1020.88,
          "sea_level": 1033.19,
          "grnd_level": 1020.88,
          "humidity": 97,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 2.87,
          "deg": 12.0058
        },
        "rain": {},
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2018-10-08 03:00:00"
      },
      {
        "dt": 1538978400,
        "main": {
          "temp": 8.83,
          "temp_min": 8.83,
          "temp_max": 8.83,
          "pressure": 1022.18,
          "sea_level": 1034.53,
          "grnd_level": 1022.18,
          "humidity": 96,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04d"
          }
        ],
        "clouds": {
          "all": 68
        },
        "wind": {
          "speed": 3.56,
          "deg": 29.0087
        },
        "rain": {},
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2018-10-08 06:00:00"
      },
      {
        "dt": 1538989200,
        "main": {
          "temp": 12.52,
          "temp_min": 12.52,
          "temp_max": 12.52,
          "pressure": 1023.74,
          "sea_level": 1035.91,
          "grnd_level": 1023.74,
          "humidity": 81,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ],
        "clouds": {
          "all": 56
        },
        "wind": {
          "speed": 2.95,
          "deg": 41.0029
        },
        "rain": {
          "3h": 0.04
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2018-10-08 09:00:00"
      },
      {
        "dt": 1539000000,
        "main": {
          "temp": 15.15,
          "temp_min": 15.15,
          "temp_max": 15.15,
          "pressure": 1023.76,
          "sea_level": 1035.93,
          "grnd_level": 1023.76,
          "humidity": 82,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 2.31,
          "deg": 25.5006
        },
        "rain": {
          "3h": 0.01
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2018-10-08 12:00:00"
      },
      {
        "dt": 1539010800,
        "main": {
          "temp": 15.3,
          "temp_min": 15.3,
          "temp_max": 15.3,
          "pressure": 1023.5,
          "sea_level": 1035.75,
          "grnd_level": 1023.5,
          "humidity": 69,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 2.02,
          "deg": 36.0001
        },
        "rain": {},
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2018-10-08 15:00:00"
      },
      {
        "dt": 1539021600,
        "main": {
          "temp": 10.1,
          "temp_min": 10.1,
          "temp_max": 10.1,
          "pressure": 1024.41,
          "sea_level": 1036.82,
          "grnd_level": 1024.41,
          "humidity": 90,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 2.26,
          "deg": 21.0008
        },
        "rain": {},
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2018-10-08 18:00:00"
      },
      {
        "dt": 1539032400,
        "main": {
          "temp": 7.43,
          "temp_min": 7.43,
          "temp_max": 7.43,
          "pressure": 1025,
          "sea_level": 1037.32,
          "grnd_level": 1025,
          "humidity": 93,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 1.36,
          "deg": 52.5003
        },
        "rain": {},
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2018-10-08 21:00:00"
      },
      {
        "dt": 1539043200,
        "main": {
          "temp": 5.98,
          "temp_min": 5.98,
          "temp_max": 5.98,
          "pressure": 1025.31,
          "sea_level": 1037.76,
          "grnd_level": 1025.31,
          "humidity": 89,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 1.31,
          "deg": 22.5001
        },
        "rain": {},
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2018-10-09 00:00:00"
      },
      {
        "dt": 1539054000,
        "main": {
          "temp": 5.54,
          "temp_min": 5.54,
          "temp_max": 5.54,
          "pressure": 1025.3,
          "sea_level": 1037.85,
          "grnd_level": 1025.3,
          "humidity": 90,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 1.63,
          "deg": 41.0001
        },
        "rain": {},
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2018-10-09 03:00:00"
      },
      {
        "dt": 1539064800,
        "main": {
          "temp": 7.27,
          "temp_min": 7.27,
          "temp_max": 7.27,
          "pressure": 1025.79,
          "sea_level": 1038.39,
          "grnd_level": 1025.79,
          "humidity": 91,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ],
        "clouds": {
          "all": 56
        },
        "wind": {
          "speed": 1.31,
          "deg": 53.5
        },
        "rain": {
          "3h": 0.03
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2018-10-09 06:00:00"
      },
      {
        "dt": 1539075600,
        "main": {
          "temp": 12.61,
          "temp_min": 12.61,
          "temp_max": 12.61,
          "pressure": 1026.98,
          "sea_level": 1039.19,
          "grnd_level": 1026.98,
          "humidity": 87,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ],
        "clouds": {
          "all": 12
        },
        "wind": {
          "speed": 2.07,
          "deg": 70.0018
        },
        "rain": {
          "3h": 0.08
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2018-10-09 09:00:00"
      },
      {
        "dt": 1539086400,
        "main": {
          "temp": 17.97,
          "temp_min": 17.97,
          "temp_max": 17.97,
          "pressure": 1026.56,
          "sea_level": 1038.7,
          "grnd_level": 1026.56,
          "humidity": 81,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 1.97,
          "deg": 76.504
        },
        "rain": {
          "3h": 0.01
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2018-10-09 12:00:00"
      },
      {
        "dt": 1539097200,
        "main": {
          "temp": 18.94,
          "temp_min": 18.94,
          "temp_max": 18.94,
          "pressure": 1025.93,
          "sea_level": 1038.04,
          "grnd_level": 1025.93,
          "humidity": 70,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 1.9,
          "deg": 95.0012
        },
        "rain": {},
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2018-10-09 15:00:00"
      },
      {
        "dt": 1539108000,
        "main": {
          "temp": 13.54,
          "temp_min": 13.54,
          "temp_max": 13.54,
          "pressure": 1026.24,
          "sea_level": 1038.49,
          "grnd_level": 1026.24,
          "humidity": 87,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 2.66,
          "deg": 79.5016
        },
        "rain": {},
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2018-10-09 18:00:00"
      },
      {
        "dt": 1539118800,
        "main": {
          "temp": 11.37,
          "temp_min": 11.37,
          "temp_max": 11.37,
          "pressure": 1026.61,
          "sea_level": 1039.02,
          "grnd_level": 1026.61,
          "humidity": 90,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10n"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 3.46,
          "deg": 140.501
        },
        "rain": {
          "3h": 0.0075
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2018-10-09 21:00:00"
      },
      {
        "dt": 1539129600,
        "main": {
          "temp": 9.08,
          "temp_min": 9.08,
          "temp_max": 9.08,
          "pressure": 1026.89,
          "sea_level": 1039.38,
          "grnd_level": 1026.89,
          "humidity": 86,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 2.46,
          "deg": 102.502
        },
        "rain": {},
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2018-10-10 00:00:00"
      },
      {
        "dt": 1539140400,
        "main": {
          "temp": 8.64,
          "temp_min": 8.64,
          "temp_max": 8.64,
          "pressure": 1026.62,
          "sea_level": 1039.19,
          "grnd_level": 1026.62,
          "humidity": 92,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 3.92,
          "deg": 115.501
        },
        "rain": {},
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2018-10-10 03:00:00"
      },
      {
        "dt": 1539151200,
        "main": {
          "temp": 9.12,
          "temp_min": 9.12,
          "temp_max": 9.12,
          "pressure": 1026.65,
          "sea_level": 1039.1,
          "grnd_level": 1026.65,
          "humidity": 86,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 4.66,
          "deg": 121.009
        },
        "rain": {},
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2018-10-10 06:00:00"
      },
      {
        "dt": 1539162000,
        "main": {
          "temp": 15.55,
          "temp_min": 15.55,
          "temp_max": 15.55,
          "pressure": 1026.93,
          "sea_level": 1039.08,
          "grnd_level": 1026.93,
          "humidity": 69,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 5.66,
          "deg": 123.5
        },
        "rain": {},
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2018-10-10 09:00:00"
      }
    ],
    "city": {
      "id": 6695624,
      "name": "Warszawa",
      "coord": {
        "lat": 52.2355,
        "lon": 21.0419
      },
      "country": "PL"
    }
  };

export const fullWeatherAPIResponseLondon =
  {
    "cod": "200",
    "message": 0.5432,
    "cnt": 40,
    "list": [
      {
        "dt": 1538740800,
        "main": {
          "temp": 14.23,
          "temp_min": 14.23,
          "temp_max": 17.3,
          "pressure": 1026.39,
          "sea_level": 1038.54,
          "grnd_level": 1026.39,
          "humidity": 65,
          "temp_kf": -3.06
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 5.02,
          "deg": 232.501
        },
        "rain": {},
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2018-10-05 12:00:00"
      },
      {
        "dt": 1538751600,
        "main": {
          "temp": 13.94,
          "temp_min": 13.94,
          "temp_max": 16.24,
          "pressure": 1025.35,
          "sea_level": 1037.48,
          "grnd_level": 1025.35,
          "humidity": 60,
          "temp_kf": -2.3
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 3.47,
          "deg": 217.004
        },
        "rain": {},
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2018-10-05 15:00:00"
      },
      {
        "dt": 1538762400,
        "main": {
          "temp": 9.27,
          "temp_min": 9.27,
          "temp_max": 10.8,
          "pressure": 1024.96,
          "sea_level": 1037.26,
          "grnd_level": 1024.96,
          "humidity": 76,
          "temp_kf": -1.53
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 3.41,
          "deg": 187.001
        },
        "rain": {},
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2018-10-05 18:00:00"
      },
      {
        "dt": 1538773200,
        "main": {
          "temp": 7.78,
          "temp_min": 7.78,
          "temp_max": 8.55,
          "pressure": 1024.04,
          "sea_level": 1036.47,
          "grnd_level": 1024.04,
          "humidity": 84,
          "temp_kf": -0.77
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 4.11,
          "deg": 188
        },
        "rain": {},
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2018-10-05 21:00:00"
      },
      {
        "dt": 1538784000,
        "main": {
          "temp": 8.02,
          "temp_min": 8.02,
          "temp_max": 8.02,
          "pressure": 1023.03,
          "sea_level": 1035.46,
          "grnd_level": 1023.03,
          "humidity": 83,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 3.82,
          "deg": 185.001
        },
        "rain": {},
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2018-10-06 00:00:00"
      },
      {
        "dt": 1538794800,
        "main": {
          "temp": 7.54,
          "temp_min": 7.54,
          "temp_max": 7.54,
          "pressure": 1021.82,
          "sea_level": 1034.3,
          "grnd_level": 1021.82,
          "humidity": 81,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 4.36,
          "deg": 182.003
        },
        "rain": {},
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2018-10-06 03:00:00"
      },
      {
        "dt": 1538805600,
        "main": {
          "temp": 8.58,
          "temp_min": 8.58,
          "temp_max": 8.58,
          "pressure": 1020.82,
          "sea_level": 1033.11,
          "grnd_level": 1020.82,
          "humidity": 74,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 3.46,
          "deg": 184
        },
        "rain": {},
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2018-10-06 06:00:00"
      },
      {
        "dt": 1538816400,
        "main": {
          "temp": 15.15,
          "temp_min": 15.15,
          "temp_max": 15.15,
          "pressure": 1019.42,
          "sea_level": 1031.43,
          "grnd_level": 1019.42,
          "humidity": 68,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 4.36,
          "deg": 172.501
        },
        "rain": {},
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2018-10-06 09:00:00"
      },
      {
        "dt": 1538827200,
        "main": {
          "temp": 18.92,
          "temp_min": 18.92,
          "temp_max": 18.92,
          "pressure": 1016.55,
          "sea_level": 1028.62,
          "grnd_level": 1016.55,
          "humidity": 63,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 5.46,
          "deg": 190.502
        },
        "rain": {},
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2018-10-06 12:00:00"
      },
      {
        "dt": 1538838000,
        "main": {
          "temp": 18.41,
          "temp_min": 18.41,
          "temp_max": 18.41,
          "pressure": 1014.89,
          "sea_level": 1026.96,
          "grnd_level": 1014.89,
          "humidity": 59,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 4.9,
          "deg": 217.004
        },
        "rain": {},
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2018-10-06 15:00:00"
      },
      {
        "dt": 1538848800,
        "main": {
          "temp": 12.75,
          "temp_min": 12.75,
          "temp_max": 12.75,
          "pressure": 1014.54,
          "sea_level": 1026.72,
          "grnd_level": 1014.54,
          "humidity": 69,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "02n"
          }
        ],
        "clouds": {
          "all": 8
        },
        "wind": {
          "speed": 3.4,
          "deg": 215.001
        },
        "rain": {},
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2018-10-06 18:00:00"
      },
      {
        "dt": 1538859600,
        "main": {
          "temp": 10.96,
          "temp_min": 10.96,
          "temp_max": 10.96,
          "pressure": 1014.3,
          "sea_level": 1026.46,
          "grnd_level": 1014.3,
          "humidity": 80,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03n"
          }
        ],
        "clouds": {
          "all": 32
        },
        "wind": {
          "speed": 3.27,
          "deg": 206.5
        },
        "rain": {},
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2018-10-06 21:00:00"
      },
      {
        "dt": 1538870400,
        "main": {
          "temp": 11.09,
          "temp_min": 11.09,
          "temp_max": 11.09,
          "pressure": 1013.98,
          "sea_level": 1026.2,
          "grnd_level": 1013.98,
          "humidity": 90,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04n"
          }
        ],
        "clouds": {
          "all": 56
        },
        "wind": {
          "speed": 4.22,
          "deg": 201
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2018-10-07 00:00:00"
      },
      {
        "dt": 1538881200,
        "main": {
          "temp": 12.13,
          "temp_min": 12.13,
          "temp_max": 12.13,
          "pressure": 1013.49,
          "sea_level": 1025.57,
          "grnd_level": 1013.49,
          "humidity": 82,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03n"
          }
        ],
        "clouds": {
          "all": 32
        },
        "wind": {
          "speed": 4.54,
          "deg": 198.505
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2018-10-07 03:00:00"
      },
      {
        "dt": 1538892000,
        "main": {
          "temp": 14.21,
          "temp_min": 14.21,
          "temp_max": 14.21,
          "pressure": 1013.34,
          "sea_level": 1025.41,
          "grnd_level": 1013.34,
          "humidity": 71,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04d"
          }
        ],
        "clouds": {
          "all": 64
        },
        "wind": {
          "speed": 4.7,
          "deg": 199.503
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2018-10-07 06:00:00"
      },
      {
        "dt": 1538902800,
        "main": {
          "temp": 18.28,
          "temp_min": 18.28,
          "temp_max": 18.28,
          "pressure": 1013.84,
          "sea_level": 1025.92,
          "grnd_level": 1013.84,
          "humidity": 67,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ],
        "clouds": {
          "all": 76
        },
        "wind": {
          "speed": 5.39,
          "deg": 210.505
        },
        "rain": {
          "3h": 0.005
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2018-10-07 09:00:00"
      },
      {
        "dt": 1538913600,
        "main": {
          "temp": 19.61,
          "temp_min": 19.61,
          "temp_max": 19.61,
          "pressure": 1013.85,
          "sea_level": 1025.88,
          "grnd_level": 1013.85,
          "humidity": 68,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04d"
          }
        ],
        "clouds": {
          "all": 76
        },
        "wind": {
          "speed": 4.53,
          "deg": 226.501
        },
        "rain": {},
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2018-10-07 12:00:00"
      },
      {
        "dt": 1538924400,
        "main": {
          "temp": 19.83,
          "temp_min": 19.83,
          "temp_max": 19.83,
          "pressure": 1014.09,
          "sea_level": 1026.13,
          "grnd_level": 1014.09,
          "humidity": 66,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03d"
          }
        ],
        "clouds": {
          "all": 36
        },
        "wind": {
          "speed": 2.37,
          "deg": 237.501
        },
        "rain": {},
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2018-10-07 15:00:00"
      },
      {
        "dt": 1538935200,
        "main": {
          "temp": 14.57,
          "temp_min": 14.57,
          "temp_max": 14.57,
          "pressure": 1015.63,
          "sea_level": 1027.79,
          "grnd_level": 1015.63,
          "humidity": 86,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "02n"
          }
        ],
        "clouds": {
          "all": 8
        },
        "wind": {
          "speed": 1.81,
          "deg": 238.002
        },
        "rain": {},
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2018-10-07 18:00:00"
      },
      {
        "dt": 1538946000,
        "main": {
          "temp": 12.61,
          "temp_min": 12.61,
          "temp_max": 12.61,
          "pressure": 1017.86,
          "sea_level": 1029.99,
          "grnd_level": 1017.86,
          "humidity": 91,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 5.12,
          "deg": 10.5012
        },
        "rain": {},
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2018-10-07 21:00:00"
      },
      {
        "dt": 1538956800,
        "main": {
          "temp": 10.28,
          "temp_min": 10.28,
          "temp_max": 10.28,
          "pressure": 1019.78,
          "sea_level": 1032.13,
          "grnd_level": 1019.78,
          "humidity": 92,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 3.75,
          "deg": 10.5015
        },
        "rain": {},
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2018-10-08 00:00:00"
      },
      {
        "dt": 1538967600,
        "main": {
          "temp": 8.2,
          "temp_min": 8.2,
          "temp_max": 8.2,
          "pressure": 1020.88,
          "sea_level": 1033.19,
          "grnd_level": 1020.88,
          "humidity": 97,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 2.87,
          "deg": 12.0058
        },
        "rain": {},
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2018-10-08 03:00:00"
      },
      {
        "dt": 1538978400,
        "main": {
          "temp": 8.83,
          "temp_min": 8.83,
          "temp_max": 8.83,
          "pressure": 1022.18,
          "sea_level": 1034.53,
          "grnd_level": 1022.18,
          "humidity": 96,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04d"
          }
        ],
        "clouds": {
          "all": 68
        },
        "wind": {
          "speed": 3.56,
          "deg": 29.0087
        },
        "rain": {},
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2018-10-08 06:00:00"
      },
      {
        "dt": 1538989200,
        "main": {
          "temp": 12.52,
          "temp_min": 12.52,
          "temp_max": 12.52,
          "pressure": 1023.74,
          "sea_level": 1035.91,
          "grnd_level": 1023.74,
          "humidity": 81,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ],
        "clouds": {
          "all": 56
        },
        "wind": {
          "speed": 2.95,
          "deg": 41.0029
        },
        "rain": {
          "3h": 0.04
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2018-10-08 09:00:00"
      },
      {
        "dt": 1539000000,
        "main": {
          "temp": 15.15,
          "temp_min": 15.15,
          "temp_max": 15.15,
          "pressure": 1023.76,
          "sea_level": 1035.93,
          "grnd_level": 1023.76,
          "humidity": 82,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 2.31,
          "deg": 25.5006
        },
        "rain": {
          "3h": 0.01
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2018-10-08 12:00:00"
      },
      {
        "dt": 1539010800,
        "main": {
          "temp": 15.3,
          "temp_min": 15.3,
          "temp_max": 15.3,
          "pressure": 1023.5,
          "sea_level": 1035.75,
          "grnd_level": 1023.5,
          "humidity": 69,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 2.02,
          "deg": 36.0001
        },
        "rain": {},
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2018-10-08 15:00:00"
      },
      {
        "dt": 1539021600,
        "main": {
          "temp": 10.1,
          "temp_min": 10.1,
          "temp_max": 10.1,
          "pressure": 1024.41,
          "sea_level": 1036.82,
          "grnd_level": 1024.41,
          "humidity": 90,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 2.26,
          "deg": 21.0008
        },
        "rain": {},
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2018-10-08 18:00:00"
      },
      {
        "dt": 1539032400,
        "main": {
          "temp": 7.43,
          "temp_min": 7.43,
          "temp_max": 7.43,
          "pressure": 1025,
          "sea_level": 1037.32,
          "grnd_level": 1025,
          "humidity": 93,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 1.36,
          "deg": 52.5003
        },
        "rain": {},
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2018-10-08 21:00:00"
      },
      {
        "dt": 1539043200,
        "main": {
          "temp": 5.98,
          "temp_min": 5.98,
          "temp_max": 5.98,
          "pressure": 1025.31,
          "sea_level": 1037.76,
          "grnd_level": 1025.31,
          "humidity": 89,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 1.31,
          "deg": 22.5001
        },
        "rain": {},
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2018-10-09 00:00:00"
      },
      {
        "dt": 1539054000,
        "main": {
          "temp": 5.54,
          "temp_min": 5.54,
          "temp_max": 5.54,
          "pressure": 1025.3,
          "sea_level": 1037.85,
          "grnd_level": 1025.3,
          "humidity": 90,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 1.63,
          "deg": 41.0001
        },
        "rain": {},
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2018-10-09 03:00:00"
      },
      {
        "dt": 1539064800,
        "main": {
          "temp": 7.27,
          "temp_min": 7.27,
          "temp_max": 7.27,
          "pressure": 1025.79,
          "sea_level": 1038.39,
          "grnd_level": 1025.79,
          "humidity": 91,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ],
        "clouds": {
          "all": 56
        },
        "wind": {
          "speed": 1.31,
          "deg": 53.5
        },
        "rain": {
          "3h": 0.03
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2018-10-09 06:00:00"
      },
      {
        "dt": 1539075600,
        "main": {
          "temp": 12.61,
          "temp_min": 12.61,
          "temp_max": 12.61,
          "pressure": 1026.98,
          "sea_level": 1039.19,
          "grnd_level": 1026.98,
          "humidity": 87,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ],
        "clouds": {
          "all": 12
        },
        "wind": {
          "speed": 2.07,
          "deg": 70.0018
        },
        "rain": {
          "3h": 0.08
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2018-10-09 09:00:00"
      },
      {
        "dt": 1539086400,
        "main": {
          "temp": 17.97,
          "temp_min": 17.97,
          "temp_max": 17.97,
          "pressure": 1026.56,
          "sea_level": 1038.7,
          "grnd_level": 1026.56,
          "humidity": 81,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 1.97,
          "deg": 76.504
        },
        "rain": {
          "3h": 0.01
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2018-10-09 12:00:00"
      },
      {
        "dt": 1539097200,
        "main": {
          "temp": 18.94,
          "temp_min": 18.94,
          "temp_max": 18.94,
          "pressure": 1025.93,
          "sea_level": 1038.04,
          "grnd_level": 1025.93,
          "humidity": 70,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 1.9,
          "deg": 95.0012
        },
        "rain": {},
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2018-10-09 15:00:00"
      },
      {
        "dt": 1539108000,
        "main": {
          "temp": 13.54,
          "temp_min": 13.54,
          "temp_max": 13.54,
          "pressure": 1026.24,
          "sea_level": 1038.49,
          "grnd_level": 1026.24,
          "humidity": 87,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 2.66,
          "deg": 79.5016
        },
        "rain": {},
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2018-10-09 18:00:00"
      },
      {
        "dt": 1539118800,
        "main": {
          "temp": 11.37,
          "temp_min": 11.37,
          "temp_max": 11.37,
          "pressure": 1026.61,
          "sea_level": 1039.02,
          "grnd_level": 1026.61,
          "humidity": 90,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10n"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 3.46,
          "deg": 140.501
        },
        "rain": {
          "3h": 0.0075
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2018-10-09 21:00:00"
      },
      {
        "dt": 1539129600,
        "main": {
          "temp": 9.08,
          "temp_min": 9.08,
          "temp_max": 9.08,
          "pressure": 1026.89,
          "sea_level": 1039.38,
          "grnd_level": 1026.89,
          "humidity": 86,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 2.46,
          "deg": 102.502
        },
        "rain": {},
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2018-10-10 00:00:00"
      },
      {
        "dt": 1539140400,
        "main": {
          "temp": 8.64,
          "temp_min": 8.64,
          "temp_max": 8.64,
          "pressure": 1026.62,
          "sea_level": 1039.19,
          "grnd_level": 1026.62,
          "humidity": 92,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 3.92,
          "deg": 115.501
        },
        "rain": {},
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2018-10-10 03:00:00"
      },
      {
        "dt": 1539151200,
        "main": {
          "temp": 9.12,
          "temp_min": 9.12,
          "temp_max": 9.12,
          "pressure": 1026.65,
          "sea_level": 1039.1,
          "grnd_level": 1026.65,
          "humidity": 86,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 4.66,
          "deg": 121.009
        },
        "rain": {},
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2018-10-10 06:00:00"
      },
      {
        "dt": 1539162000,
        "main": {
          "temp": 15.55,
          "temp_min": 15.55,
          "temp_max": 15.55,
          "pressure": 1026.93,
          "sea_level": 1039.08,
          "grnd_level": 1026.93,
          "humidity": 69,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 5.66,
          "deg": 123.5
        },
        "rain": {},
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2018-10-10 09:00:00"
      }
    ],
    "city": {
      "id": 6695624,
      "name": "London",
      "coord": {
        "lat": 52.2355,
        "lon": 21.0419
      },
      "country": "UK"
    }
  };