const axios = require("axios");

class Busquedas {
  historial = ["Tegucigalpa", "Madrid", "San Jose"];

  constructor() {
    // TODO: leer DB si existe
  }

  async cuidad(lugar = "") {
    try {
      // peticion http
      // console.log('cuidad',lugar);
      const resp = await axios.get("https://reqres.in/api/users?page=2");
      console.log(resp.data);
      return []; // retornar los lugares
    } catch (error) {
        return []
    }
  }
}

module.exports = Busquedas;
