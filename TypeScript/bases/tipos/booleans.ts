(() => { 
    let isSuperman: boolean = true;
    let isBatman: boolean;
    let isAquaman = true;

    if (isSuperman) {
        console.log('Estamos salvados');
    } else {
        console.log('Oooops');
    }

    isSuperman = convertirClark();
    console.log(isSuperman);

    function convertirClark() {
        return false;
    }
})();
