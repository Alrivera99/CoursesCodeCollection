import {useEffect, useState} from "react";
import Message from "./Messaje";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });

    const {name, email} = formState;

    const onInputChange = ({target}) => {
        const {name, value} = target;
        setFormState({
            ...formState,
            [name]: value
        });
    }

    // useEffect(() => {
    //     console.log('Hey!');
    // }, [formState]);

    return (
        <>
            <h1>Formulario Simple</h1>
            <hr/>
            <input type="text" className="form-control" placeholder="Username" value={name} name="name"
                   onChange={onInputChange}/>
            <input type="text" className="form-control mt-4" placeholder="email" value={email} name="email"
                   onChange={onInputChange}/>

            {
                (name === '123') && <Message/>
            }
        </>
    );
};
