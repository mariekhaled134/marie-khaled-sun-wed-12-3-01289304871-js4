var showBttn = document.getElementById("showBttn");
var serchInput = document.getElementById("searchInput");

function getDayName(dateString){
const days=[
  "saturday",
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday"
]
let date =new Date(dateString);
return days[date.getDay()]
}


async function getWeather(city) {
  var res = await fetch(
    `http://api.weatherapi.com/v1/forecast.json?key=eeb2f4b099234769a32221102251811&q=${city}&days=3`
  );

  var data = await res.json();

  displayData(data);
}



getWeather("cairo");





function displayData(data) {
  let today = data.forecast.forecastday[0];
  let tomorrow = data.forecast.forecastday[1];
  let dayAfter = data.forecast.forecastday[2];

  var cartona = "";

  cartona += `<div class="col-md-4 rounded-2  ">
  <div class="card-today ">
  <div class="card-header text-light d-flex justify-content-between">
    <p >${getDayName(today.date)}</p>
  </div>
<div class="card-body ms-3 text-light">
    <h5 class="title-city">${data.location.name}</h5>
    <div class="degree fw-bold">${today.day.avgtemp_c}°c</div>
    <div class="image"><img src="https:${today.day.condition.icon}" alt="">
</div>
    <p class="state-cloud text-primary">${today.day.condition.text}</p>
 <div class="states d-flex p-2 gap-4"> <div class="state-one"> <img src="./images/icon-umberella.png" alt="">20% </div> <div class="state-two"> <img src="./images/icon-wind.png" alt="">18km/h </div> <div class="state-three"> <img src="./images/icon-compass.png" alt="">East </div> </div>
  </div>
    </div>
</div>
<div class="col-md-4 rounded-2  "> 
<div class=" card-tomorow   text-center  " >
  <div class="card-header p-1 ">
    <p>${getDayName(tomorrow.date)}</p>
  </div>
<div class="card-body text-light">
    <img class="card-title" src="http:${tomorrow.day.condition.icon}">

    <p class="tom-degree fw-bold fs-1">${tomorrow.day.maxtemp_c}c</p>

   <div class="twice-degree"><p>${tomorrow.day.mintemp_c}c</p>
  <p class="text-primary">${tomorrow.day.condition.text}</p></div>
        

</div>
</div></div>
<div class="col-md-4  ">
<div class="  card-last-tomorow  text-center  " >
  <div class="card-header p-1">
    <p>${getDayName(dayAfter.date)}</p>
  </div>
  <div class="card-body text-light">
    <img class="card-title" src="http:${dayAfter.day.condition.icon}">

    <p class="ltom-degree fw-bold fs-1">${dayAfter.day.maxtemp_c}c</p>

   <div class="twice-degree"><p>${dayAfter.day.mintemp_c}c</p>
  <p class="text-primary">${dayAfter.day.condition.text}</p></div>
        

</div></div>




</div>`;
  document.getElementById("rowData").innerHTML = cartona;
}

serchInput.addEventListener("keydown", function () {
  getWeather(serchInput.value);
  serchInput.value=''
} );

