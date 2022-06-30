var oddOne = document.querySelector("#oddBar");
console.log(oddOne);
const guardar = document.querySelector("#oddBar");
console.log(guardar)

fetch("./data.json", {
   method: "GET",
   headers: {"Content-type": "application/json;charset=UTF-8"}
 })
.then(response => {
   const res = response.json();
   return res;
})
.then(jsondata => console.log(jsondata));



// const API_URL = "./data.json";

/** async function loadData() {
   const response = await fetch('./data.json');
   const data = response.json();
   return data;
}

loadData(); **/

