(() => {
    const addNumbers = (a: number, b: number): number => a + b;
    const greet = (name: string) => `Hola ${name}`;
    const saveTheWorld = (): string => `El mundo está salvado`;

    let myFunction: Function;

    // myFunction = 10;
    // console.log(myFunction);

    myFunction = addNumbers;
    console.log(myFunction(1, 2));

    myFunction = greet;
    console.log(myFunction('Spiderman'));

    myFunction = saveTheWorld;
    console.log(myFunction());

})();