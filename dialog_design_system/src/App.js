import { useState } from 'react';
import './App.css';
import AlertButtons from './AlertButtons';
import AlertBox from './AlertBox.js'
import { IoAlertOutline } from 'react-icons/io5';
import { TiTick } from "react-icons/ti"
import { MdCancel } from "react-icons/md"
import Signature from './Signature';



function App() {

  const [show, setShow] = useState(null)

  return (
    <div className="App">
      <div id='header'>
      <h1 id='titlePage'>Push you alerts</h1>
        <AlertButtons show={show} setShow={setShow} />
      </div>
      <div id='main'>
        {show === 'warning' &&
          <AlertBox
            show={show}
            setShow={setShow}
            icon={<IoAlertOutline className="warning" />}
            alertTitle="¡ Cuidado !"
            alertDescription=" No podras volver atras "
            buttonDelete=" Borrar "
            buttonCancel=" Cancelar "
          />}
        {show === 'ok' &&
          <AlertBox
            show={show}
            setShow={setShow}
            icon={<TiTick className='ok' />}
            alertTitle="¡ Vamos !"
            alertDescription=" Todo ha salido bien "
            buttonCloseTag=" Cerrar pestaña "
          />}
        {show === 'error' &&
          <AlertBox
            show={show}
            setShow={setShow}
            icon={<MdCancel className='error' />}
            alertTitle=" Upss "
            alertDescription=" Algo ha pasado "
          />}
      </div>
      <div id='footer' >
        <Signature />
      </div>

    </div>
  );
}

export default App;
