var oddContainer = document.querySelector(".odd__Container");
console.log(oddContainer);


function nuevo() {
   fetch("./data.json", {
      method: "GET",
      headers: {"Content-type": "application/json;charset=UTF-8"}
    })
   .then(response => response.json())
   .then(jsondata => {
      const firstDay = document.querySelector(".firstDay");
      firstDay.nodeValue = jsondata[3].day;
      console.log(firstDay)
      console.log(jsondata[3].day
   )});
}

//      <div class="content__bar">
//          <div class="bar"></div>
//        <p class="days">mon</p>
//      </div>

console.log('Respuesta de la funcion '+nuevo());
// Revisar los conceptos básicos para consumir una API.

// const API_URL = "./data.json";

/** async function loadData() {
   const response = await fetch('./data.json');
   const data = response.json();
   return data;
}

loadData(); **/

