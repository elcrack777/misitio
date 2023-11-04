const container = document.querySelector(".container")

const coffees = [
  {
    name: "Explorer",
    image: "images/explorer.png"
  },
  {
    name: "Raptor",
    image: "images/raptor.png"
  },
  {
    name: "Spark",
    image: "images/spark.png"
  },
  {
    name: "Vento",
    image: "images/vento.png"
  }

]

const showCoffees = () => {
  let output = "";
  coffees.forEach(
    ({ name, image }) =>
      (output += `
              <div class="card">
                <img class="card--avatar" src=${image} />
                <h1 class="card--title">${name}</h1>
                <a class="card--link" href="#">Taste</a>
              </div>
              `)
  )
  container.innerHTML = output;
}

document.addEventListener("DOMContentLoaded", showCoffees)

if ("serviceWorker" in navigator) {
	window.addEventListener("load", function() {
		navigator.serviceWorker
		.register("serviceWorker.js")
		.then(registration => console.log("service worker registered"))
		.catch(err => console.log("service worker not registered", err))
	})
  }
