import '../assets/styles/AddCod.css';
import { useState, useEffect } from 'react';

function AddCod({ show, onClose, onSave }) {
    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');

    useEffect(() => {
        if (!show) {
            setInput1('');
            setInput2('');
        }
    }, [show]);

    const handleSave = () => {
        if (input1.length > 0 && input1.length <= 6 && input2 >= 1 && input2 <= 100) {
            onSave(input1, input2);
            setInput1(''); // Clear input1
            setInput2(''); // Clear input2
            onClose();
        } else {
            alert('Por favor, asegúrese de que todos los campos sean válidos.');
        }
    };

    if (!show) {
        return null;
    }

    return (
        <div className="popup-overlay">
            <div className="popup">
                <div className='datosCodigo'></div>
                <input 
                    type='text' 
                    className='input-Cod' 
                    placeholder='Codigo' 
                    maxLength={6}
                    value={input1} 
                    onChange={(e) => setInput1(e.target.value)} 
                />
                <input 
                    type='number' 
                    className='input-Cod' 
                    placeholder='Porcentaje' 
                    min={1} 
                    max={100} 
                    value={input2} 
                    onChange={(e) => setInput2(e.target.value)} 
                />
                <button className='boton-Cod' onClick={handleSave}>Activar</button>
                <button className='boton-Cod' onClick={onClose}>Cerrar</button>
            </div>
        </div>
    );
}

export default AddCod;