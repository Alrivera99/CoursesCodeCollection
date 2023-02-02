(() => {
    const batman: string = 'Batman';
    const linternaVerde: string = 'Linterna Verde';
    const volcanNegro:string = `Heroe: Volcan Negro`;

    console.log(` I am ${batman} and I am ${linternaVerde} `);

    console.log(batman.toUpperCase());
    
    console.log(batman[10]?.toUpperCase() || 'No existe');
    
}) ();