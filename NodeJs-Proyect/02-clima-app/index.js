const {leerInput, inquirerMenu, pausa} = require('./helpers/inquirer');
const Busquedas = require('./models/busqueda');

const main = async() => {
    const busquedas = new Busquedas();
    let opt;
    
    do{
        opt = await inquirerMenu()
    
        switch(opt){
            case 1:
            // Mostrar mensaje
            const lugar = await leerInput('Ciudad: ');
            await busquedas.cuidad(lugar)

            // Buscar los lugares

            // Seleccionar el lugar

            // Clima  

            // Mostrar resultados
            console.log("\nInformación de la cuidad\n".green);
            console.log('Cuidad: ', );
            console.log('Lat: ', );
            console.log('Lng: ', );
            console.log('Temperatura: ', );
            console.log('Minima: ', );
            console.log('Maxima: ', );
        }
        
        if(opt !==0) await pausa()
    
    } while (opt != 0)
}

main();