let GetDays = document.querySelector(".weather-card");
let search = document.getElementById("searchInpput");

let DataEntry; 

let weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let apiResponse;
let elnateg;
async function getWeatherDate(location = "cairo", num = 3) {
  elnateg = num;
  apiResponse = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=adcaf837dd1243608a5124416232812&q=${location}&days=${num}`
  );
  DataEntry = await apiResponse.json();
  displayCurrentDay();
  displayNextDays();
}
function displayCurrentDay() {
  let cartona = "";
  cartona += `<div class="col-lg-4 p-2 col-md-6">
    <div class="inner-item text-white bg-dark rounded-4 p-1 px-3">
      <div class="head d-flex justify-content-between">
        <p class="font">${
          weekDays[new Date(DataEntry.forecast.forecastday[0].date).getDay()]
        }</p>
        <p class="font">
        ${new Date(DataEntry.forecast.forecastday[0].date).getDate()} 
        ${
          months[new Date(DataEntry.forecast.forecastday[0].date).getMonth()]
        }</p>
      </div>
      <p class="font">${DataEntry.location.name}, ${
    DataEntry.location.region
  }, ${DataEntry.location.country}</p>
      <div class="d-flex justify-content-between">
        <div class="num">${DataEntry.current.temp_c}<sup>o</sup>C</div>
        <div class=" w-25">
            <img src="./img/76818-forecasting-material-rain-shower-weather-icon.png"
              
          alt="weather condition icon" class=" w-100" />
          </div>
      </div>
      <p  class="text-capitalize fs-5 pt-4 text-primary">${
        DataEntry.current.condition.text
      }</p>
      <div class=" mt-4 mb-3">
        <span class="me-4" style="color: #6a6d71"
          ><i class="fa-solid fa-umbrella me-1"></i>${
            DataEntry.current.humidity
          }%
        </span>
        
        <span class="me-4" style="color: #6a6d71"
          ><i class="fa-solid fa-wind me-1"></i> ${
            DataEntry.current.wind_kph
          }km/h</span
        >
        <span class="me-4" style="color: #6a6d71"
          ><i class="fa-solid fa-compass "></i>East</span
        >
      </div>
    </div>
  </div>`;
  GetDays.innerHTML = cartona;
}
function displayNextDays() {
  let cartona = "";
  for (let i = 1; i < elnateg; i++) {
    cartona += `<div class="col-lg-4 p-2 col-md-6">
    <div class="inner-item text-white bg-dark rounded-4 p-1 px-3">
      <div class="head d-flex justify-content-between">
        <p class="font">${
          weekDays[new Date(DataEntry.forecast.forecastday[i].date).getDay()]
        }</p>
        
        <p class="font">
        ${new Date(DataEntry.forecast.forecastday[i].date).getDate()} 
        ${
          months[new Date(DataEntry.forecast.forecastday[i].date).getMonth()]
        }</p>
      </div>
      <p class="font">${DataEntry.location.name} , ${
      DataEntry.location.region
    } , ${DataEntry.location.country}</p>
      <div class="d-flex justify-content-between">
        <div class="num">${
          DataEntry.forecast.forecastday[i].day.maxtemp_c
        }<sup>o</sup>C</div>
        <div class=" w-25">
        <img src="./img/76818-forecasting-material-rain-shower-weather-icon.png"
          
      alt="weather condition icon" class=" w-100" />
      </div>
      </div>
      <p  class="text-capitalize fs-5 pt-4 text-primary">${
        DataEntry.forecast.forecastday[i].day.condition.text
      }</p>
      <div class=" mt-4 mb-3">
        <span class="me-4" style="color: #6a6d71"
          ><i class="fa-solid fa-umbrella me-1"></i>${
            DataEntry.forecast.forecastday[i].day.avghumidity
          }%
        </span>
        <span class="me-4" style="color: #6a6d71"
          ><i class="fa-solid fa-wind me-1"></i> ${
            DataEntry.forecast.forecastday[i].day.maxwind_kph
          }km/h</span
        >
        <span class="me-4" style="color: #6a6d71"
          ><i class="fa-solid fa-compass"></i>East</span
        >
      </div>
    </div>
  </div>`;
  }
  GetDays.innerHTML += cartona;
}
function searchFun() {
  if (searchInput.value === "") {
    getWeatherDate("");
  } else if (searchInput.value !== "") {
    getWeatherDate(searchInput.value);
  }
}

async function displayAllData() {
  await getWeatherDate();
  
}
displayAllData();