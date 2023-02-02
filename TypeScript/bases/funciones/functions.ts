(() => {
    const hero: string = 'Flash';

    function returnName(): string {
        return hero;
    }

    const active = function(): string {
        return `${hero} is active`;
    }

    console.log(typeof active);

    const heroName = returnName();

    console.log(heroName);
    
}) ();