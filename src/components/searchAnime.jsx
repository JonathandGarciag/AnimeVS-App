import React, { useState } from 'react';

export const BuscarCharacter = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (onSearch && searchTerm.trim() !== '') {
            onSearch(searchTerm);
        }
    };

    return (
        <>
            <nav class="navbar bg-body-tertiary" style={{ backgroundColor: 'purple' }}>
                <div class="container" style={{ backgroundColor: 'purple' }}>
                    <h1 className="fw-light fs-2">{searchTerm ? `Buscando: ${searchTerm}` : "Busca tu Personaje"}</h1>
                </div>
            </nav>

            <div className="container">
                <nav className="navbar bg-body-tertiary">
                    <form className="container-fluid" onSubmit={handleSubmit}>
                        <div className="input-group">
                            <span className="input-group-text" id="basic-addon1">MARVEL PERSONAJE</span>
                            <input className="form-control" placeholder="Ingrese Nombre " aria-label="Username" aria-describedby="basic-addon1" 
                                 type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <input type="submit" value="Buscar" className="btn btn-outline-success" />
                        </div>
                    </form>
                </nav>
            </div>

        </>
    );
};