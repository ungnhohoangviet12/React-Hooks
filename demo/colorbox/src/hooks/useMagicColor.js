import  { useEffect, useState } from 'react';

function randomColor() {
    return 'green';
}

function useMagicColor() {
    const [color, setColor] = useState('transparent');

    // Change color everyone 1 second
    useEffect(() => {
        const colorInterval = setInterval(() =>{
            const newColor = randomColor();
            setColor(newColor);
        }, 1000);

        return () => {
            clearInterval(colorInterval);

        }
    }, []);

    return color;

}
export default useMagicColor;