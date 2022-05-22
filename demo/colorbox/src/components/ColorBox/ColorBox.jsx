
import React, { useState } from 'react';
import './index.scss'
ColorBox.propTypes = {
    
};

function randomColor() {
    const listcolor = ['blue', 'gray', 'red', 'brown', 'yellow'];
    const index = Math.trunc(Math.random() * 5);
    return listcolor[index];
}

function ColorBox() {
    const [color, setColor] = useState(() => {
        const initcolor = localStorage.getItem('color' || 'blue');
        return initcolor;
    })


    function handleClick() {
        const newcolor = randomColor();
        setColor(newcolor);
        localStorage.setItem('color', newcolor);
    }
    return (
        <div className='color-box'
        style={{backgroundColor:color}}
        onClick={handleClick}
        >
            
        </div>
    );
}

export default ColorBox;