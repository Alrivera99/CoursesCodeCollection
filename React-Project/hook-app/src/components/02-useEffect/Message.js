import React, { useEffect, useState } from 'react'

export const Message = () => {

    const [coords, setcoords] = useState({x:0,y:0});
    const {x,y} = coords;
    
    useEffect(() => {
        console.log('componentente montado');

        const mouseMove = (e) =>{
           const coords = { x: e.x, y: e.y };
                setcoords(coords)
           
        }
        window.addEventListener('mousemove', mouseMove);
        return () => {
            window.removeEventListener('mousemove', mouseMove)
            console.log('componentente desmontado');
        }
    }, [])
    return (
        <div>
            <h3>Eres genial</h3>
            <p>
                x:{x}, y:{y}
            </p>
        </div>
    )
}
