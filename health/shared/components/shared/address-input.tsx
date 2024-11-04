'use client';

import React, { useState } from 'react'; // Оставляем только один импорт React
import 'react-dadata/dist/react-dadata.css';
import { AddressSuggestions } from 'react-dadata';
import 'react-dadata/dist/react-dadata.css';

interface Props {
  onChange?: (value?: string) => void;
}

export const AdressInput: React.FC<Props> = ({ onChange }) => {
  const [suggestions, setSuggestions] = useState([]);

  const fetchSuggestions = async (query) => {
    if (query.length < 3) return; // Запросы только для длинны строки >= 3
    try {
      const response = await fetch(`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(query)}&format=json&addressdetails=1`);
      const data = await response.json();
      setSuggestions(data);
    } catch (error) {
      console.error('Error fetching address suggestions:', error);
    }
  };

  const handleChange = (event) => {
    const value = event.target.value;
    onChange?.(value);
    fetchSuggestions(value);
  };

  return (
    <div>
      <input
        type="text"
        onChange={handleChange}
        placeholder="Введите адрес..."
        style={{ width: '400px', fontSize: '16px', padding: '8px' }} // Увеличение размера строки
      />
      {suggestions.length > 0 && (
        <ul>
          {suggestions.map((suggestion) => (
            <li key={suggestion.place_id} onClick={() => onChange?.(suggestion.display_name)}>
              {suggestion.display_name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};