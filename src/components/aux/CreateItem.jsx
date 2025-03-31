import React, { useState, useEffect } from 'react';
import { FaPlusCircle, FaListUl } from 'react-icons/fa';
import './styles/Aux.css';

const CreateItem = () => {
  const [activeTab, setActiveTab] = useState('create');
  const [form, setForm] = useState({
    name: '',
    category: '',
    season: '',
    image: '',
    description: ''
  });
  const [items, setItems] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    const url = 'http://localhost:5001/nm-project-5ceba/us-central1/createInventoryItem';
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ orgId: 'demo-org', item: form }),
      });
      const result = await response.json();
      if (result.success) {
        alert('Item creado exitosamente');
        setForm({ name: '', category: '', season: '', image: '', description: '' });
        fetchItems();
      } else {
        alert('Error al crear item');
      }
    } catch (err) {
      console.error(err);
      alert('Error inesperado al crear el item');
    }
  };

  const fetchItems = async () => {
    const url = 'http://localhost:5001/nm-project-5ceba/us-central1/listInventoryItems';
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data: { orgId: 'demo-org' } }),
      });
      const data = await response.json();
      setItems(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (activeTab === 'list') fetchItems();
  }, [activeTab]);

  return (
    <div className="create-item-container">
      <div className="tab-switcher">
        <button
          className={`tab-button ${activeTab === 'create' ? 'active' : ''}`}
          onClick={() => setActiveTab('create')}
        >
          <FaPlusCircle /> Crear Item
        </button>
        <button
          className={`tab-button ${activeTab === 'list' ? 'active' : ''}`}
          onClick={() => setActiveTab('list')}
        >
          <FaListUl /> Ver Items
        </button>
      </div>

      {activeTab === 'create' && (
        <div className="form-section">
          <h2>Nuevo Item</h2>
          <form onSubmit={handleCreate} className="form-grid">
            <input type="text" name="name" placeholder="Nombre" value={form.name} onChange={handleInputChange} required />
            <input type="text" name="category" placeholder="Categoría" value={form.category} onChange={handleInputChange} required />
            <input type="text" name="season" placeholder="Temporada" value={form.season} onChange={handleInputChange} required />
            <input type="text" name="image" placeholder="URL de la imagen" value={form.image} onChange={handleInputChange} />
            <textarea name="description" placeholder="Descripción" value={form.description} onChange={handleInputChange}></textarea>
            <button type="submit" className="submit-button">Crear</button>
          </form>
        </div>
      )}

      {activeTab === 'list' && (
        <div className="list-section">
          <h2>Inventario</h2>
          {items.length === 0 ? (
            <p className="no-items">No hay items para mostrar.</p>
          ) : (
            <div className="item-scroll">
              {items.map((item) => (
                <div key={item.id} className="item-card">
                  {item.image && <img src={item.image} alt={item.name} className="item-image" />}
                  <div className="item-details">
                    <h3>{item.name}</h3>
                    <p><strong>Categoría:</strong> {item.category}</p>
                    <p><strong>Temporada:</strong> {item.season}</p>
                    {item.description && <p>{item.description}</p>}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CreateItem;