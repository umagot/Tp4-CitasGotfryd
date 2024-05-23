
import { useState } from 'react';
import './App.css';
import Card from './components/Card/Card';
import FormCitas from './components/FormCitas/FormCitas';

function App() {
    const [citas, setCitas] = useState([]);

    const agregarCita = (nuevaCita) => {
        nuevaCita.id = Date.now(); 
        setCitas([...citas, nuevaCita]);
    };

    const eliminarCita = (id) => {
        setCitas(citas.filter(cita => cita.id !== id));
    };

    return (
        <div className="App">
            <h1>Administrador de Citas</h1>
            <FormCitas agregarCita={agregarCita} />
            <div className="citas-lista">
                {citas.map(cita => (
                    <Card
                        id={cita.id}
                        mascota={cita.mascota}
                        dueño={cita.dueño}
                        fecha={cita.fecha}
                        hora={cita.hora}
                        sintomas={cita.sintomas}
                        eliminarCita={eliminarCita}
                    />
                ))}
            </div>
        </div>
    );
}

export default App;
