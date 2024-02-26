import {useState} from "react";

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
    return (
        <>
            <h1>useEffect</h1>
            <hr/>
            <input type="text" className="form-control" placeholder="Username" value={name} onChange={onInputChange}/>
            <input type="text" className="form-control mt-4" placeholder="email" value={email}/>
        </>
    );
};
