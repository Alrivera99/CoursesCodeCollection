import {useEffect, useState} from "react";

const Message = () => {

    const [coords, setCoords] = useState({x: 0, y: 0});
    useEffect(() => {
        console.log('Componente montado');
        const mouseMove = (e) => {
            setCoords({x: e.x, y: e.y});
        }

        window.addEventListener('mousemove', mouseMove);
        return () => {
            window.removeEventListener('mousemove', mouseMove);
        }
    }, []);

    return (
        <>
            <h3>Eres genial!</h3>
            <p>
                x: {coords.x}, y: {coords.y}
            </p>
        </>
    );
};

export default Message;
