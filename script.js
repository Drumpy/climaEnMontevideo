const url =
    "https://api.openweathermap.org/data/2.5/weather?q=Montevideo,uy&APPID=fbc43e1c31ea3236bb5d38d13f2a41ef";
//dirección de la API. Puede ser la ruta a un archivo json. CREA LA TUYA.

fetch(url) //Realizamos el fetch que devolverá una promesa
    .then((respuesta) => respuesta.json()) //Obtenemos una promesa que trataremos como json
    .then((datos) => {
        //obtenemos una nueva promesa, pero los datos ya están como json.
        document.getElementById("ciudad").innerHTML =
            datos.name + ", " + datos.sys.country; //escribo los datos del país

        let temperatura = datos.main.temp - 273.15;
        let cargarImg = document.getElementById("img");

        if (temperatura <= 15) {
            cargarImg.setAttribute("src", "invierno.png");
        } else if (temperatura > 15 && temperatura <= 20) {
            cargarImg.setAttribute("src", "primavera.png");
        } else {
            cargarImg.setAttribute("src", "verano.png");
        }

        document.getElementById("temp").innerHTML =
            temperatura.toFixed(1) + "º"; //escribo la temperatura. la convierto de kelvin a celsius

        document.getElementById("imagen").src =
            "http://openweathermap.org/img/wn/" +
            datos.weather[0].icon +
            ".png"; //imagen

        // document.getElementById("descripcion").innerHTML =
        //     datos.weather[0].description;

        document.getElementById("humedad").innerHTML =
            datos.main.humidity + "% de Humedad";

        document.getElementById("st").innerHTML =
            (datos.main.feels_like - 273.15).toFixed(1) +
            "º - Sensacion Térmica";
    })
    .catch((error) => alert("Hubo un error: " + error));
