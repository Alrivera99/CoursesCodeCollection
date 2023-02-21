(() => {
    function callBatman(): void {
        console.log('Batiseñal activada');
    }

    const callSuperman = (): void => {
        return;
    }
    const a = callBatman();
    console.log(a);
})() 