import { useState } from "react";
import { alerta } from '../functions';

const Suma = () => {
    const [n1, setN1] = useState('');
    const [n2, setN2] = useState('');
    const [resultado, setResultado] = useState('');

    const sumar = () => {
        if (n1.trim() === '') {
            alerta('Ingrese primer número', 'warning', 'txtN1');
        } else if (n2.trim() === '') {
            alerta('Ingrese segundo número', 'warning', 'txtN2');
        } else {
            let valor1 = parseInt(n1);
            let valor2 = parseInt(n2);
            setResultado(valor1 + valor2);
        }
    }

    const limpiar = () => {
        setN1('');
        setN2('');
        setResultado('');
    }

    return (
        <div className="form-control">
            <div className="mb-2">
                <div className="row">
                    <div className="col-2">
                        <label className="form-label">Valor 1:</label>
                    </div>
                    <div className="col-auto">
                        <input type="number" id="txtN1" className="from-control" value={n1} onChange={(e) => setN1(e.target.value)} />
                    </div>
                </div>
            </div>
            <div className="mb-2">
                <div className="row">
                    <div className="col-2">
                        <label className="form-label">Valor 2:</label>
                    </div>
                    <div className="col-auto">
                        <input type="number" id="txtN2" className="from-control" value={n2} onChange={(e) => setN2(e.target.value)} />
                    </div>
                </div>
            </div>
            <div className="mb-2">
                <div className="row">
                    <div className="col-2">
                        <label className="form-label">Resultado:</label>
                    </div>
                    <div className="col-auto">
                        <input type="number" id="txtResultado" className="from-control" value={resultado} onChange={(e) => setResultado(e.target.value)} readOnly />
                    </div>
                </div>
            </div>
            <div className="mb-2">
                <div className="row">
                    <div className="col-6">
                        <button type="button" className="btn btn-primary" onClick={() => sumar()} >Sumar</button>
                        <button type="button" className="btn btn-danger" onClick={() => limpiar()} >Limpiar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Suma;