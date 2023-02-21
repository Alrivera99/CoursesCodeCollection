(() => {
    
    const abc = (message: string):(never|number) => {
    
        if ( false ){
            throw new Error(message)
        }

        return 1
    }

    abc('auxilio');
})()