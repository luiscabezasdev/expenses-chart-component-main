// var oddContainer = document.querySelector("div.content__bar");
// console.log(oddContainer);


function nuevo() {
   fetch("./data.json", {
      method: "GET",
      headers: {"Content-type": "application/json;charset=UTF-8"}
    })
   .then(response => response.json())
   .then(jsondata => {
      var oddContainer = document.querySelector("div.content__bar");
      const p = document.createElement('p');
      const div = document.createElement('div')
      oddContainer.appendChild(div);
      oddContainer.appendChild(p);
      const month = document.createTextNode(jsondata[2].day);
      p.appendChild(month)
      div.style.height = (((jsondata[2].amount) * 200 / 100) + (jsondata[2].amount)) + 'px';
      console.log((((jsondata[2].amount) * 200 / 100) + (jsondata[0].amount)))
      console.log(jsondata.length)
      /* for (let i = 0; i >= jsondata.length; i++ ) {
         var oddContainer = document.querySelector("div.content__bar");
         const p = document.createElement('p');
         const div = document.createElement('div')
         oddContainer.appendChild(div);
         oddContainer.appendChild(p);
         let month = document.createTextNode(jsondata[i].day);
         p.appendChild(month)
         div.style.height = (((jsondata[i].amount) * 150 / 100) + (jsondata[i].amount)) + 'px';
      }*/
   });
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

