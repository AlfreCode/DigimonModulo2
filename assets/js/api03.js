const main = document.querySelector('main')

let url = 'https://digimon-api.vercel.app/api/digimon'
fetch(url)
    .then(Response => Response.json())
    .then(data => mostrarData(data))
    .catch(error => {
        alert("error en la consulta")
        alert("Revise su coneccion a internet")
    });


const mostrarData = (data) => {
    let arrayDigimones = data
    arrayDigimones.forEach(digimon => {

    // const card = document.createElement('div')
    // card.className = "card"

    // const img = document.createElement('img')
    // img.src = digimon.img

    // const titulo = document.createElement('h3')
    // titulo.textContent = digimon.name

    // const level = document.createElement('h4')
    // level.textContent = digimon.level

    // card.append(titulo, img, level)
    // main.append(card) 
 
let cardHtml = `
<div class="card col-12 col-md-4 col-lg-3 col-xl-3 m-3" style="width: 18rem;">
  <img src="${digimon.img} " class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-text">${digimon.name}</p>
    <p class="card-text">${digimon.level}</p>
  </div>
</div>
`
document.getElementById("digiTools").innerHTML += cardHtml

 }
    )}

