import React from 'react';
import NewInput from '../../components/aux/NewInput';
import { Link } from 'react-router-dom';

const SettingsPage = () => {
  return (
    <div className="page-wrapper">
        <h1>Ajustes</h1>
        <p>Configura opciones generales, preferencias de usuario y temas.</p>
        <NewInput label="Nombre de Usuario" />
        <br />
        <Link to="/" className="btn btn-primary">
            <button>Ir a Inicio</button>
        </Link>
    </div>
  );
};

export default SettingsPage;