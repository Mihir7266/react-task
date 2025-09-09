// src/Sidebar.js

import React from 'react';

function Sidebar({ items, onItemClick }) {
  return (
    <div className="sidebar">
      <h2>Tables</h2>
      <ul>
        {items.map(item => (
          <li key={item.id} onClick={() => onItemClick(item.id)}>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;