import React from 'react';

function ConfirmationPopup(props) {
  return (
    <div className={`popup ${props.show ? 'show' : 'hide'}`}>
      <p>Tus datos han sido almacenados correctamente.</p>
      <button onClick={props.onClose}>Cerrar</button>
    </div>
  );
}

export default ConfirmationPopup;