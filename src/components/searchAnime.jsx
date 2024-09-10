import React, { useState } from 'react';

export const SearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchTerm) {
            onSearch(searchTerm);
        }
    };

    return (
        <form onSubmit={handleSearch} className="mb-4">
        <input
            type="text"
            className="form-control"
            placeholder="Buscar anime..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit" className="btn btn-primary mt-2">Buscar</button>
        </form>

        
    );
};
