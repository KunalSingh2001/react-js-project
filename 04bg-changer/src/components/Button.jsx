import { useState } from 'react'
function Button () {
    const [color, setColor] = useState('yellow')
    return (
        <>
            <div className="w-full h-screen duration-200" style={{backgroundColor: color,  width:"900px", height: "900px"}}>
                <button onClick={() => setColor('red')} style = {{backgroundColor: "red"}}>Red</button>
                <button onClick={() => setColor('green')} style = {{backgroundColor: "green"}}>Green</button>
            </div>
        </>
    );

}

export default Button;