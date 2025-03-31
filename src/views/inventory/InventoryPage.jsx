import React from 'react';
import CreateItem from '../../components/aux/CreateItem';

const InventoryPage = () => {
  return (
    <div className="page-wrapper">
      <h1>Gestión de Inventario</h1>
      <CreateItem />
    </div>
  );
};

export default InventoryPage;