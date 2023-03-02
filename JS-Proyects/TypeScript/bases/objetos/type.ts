(() => {
    type Hero = {
        nombre: string;
        edad?: number;
        poderes: string[];
        getName?: () => string;
    }
    let flash: Hero = {
        nombre: "Barry Allen",
        edad: 24,
        poderes: ["Puede correr muy rápido", "Viajar por el tiempo"]
    }

    let superman: Hero = {
        nombre: "Clark Kent",
        edad: 60,
        poderes: ["Puede correr muy rápido"],
        getName() {
            return this.nombre;
        }
    }

})();