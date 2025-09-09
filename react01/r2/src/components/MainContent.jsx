// src/MainContent.js

import React from 'react';

function MainContent({ openTabs, activeTab, onTabClick, onCloseTab, data }) {
  const activeTableData = activeTab ? data[activeTab] : null;

  return (
    <div className="main-content">
      <div className="tabs-container">
        {openTabs.map(tab => (
          <div
            key={tab.id}
            className={`tab-item ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => onTabClick(tab.id)}
          >
            {tab.name}
            <button
              className="close-tab-btn"
              onClick={(e) => {
                e.stopPropagation(); // Prevent tab click when closing
                onCloseTab(tab.id);
              }}
            >
              &times;
            </button>
          </div>
        ))}
      </div>
      <div className="table-display-area">
        {activeTableData ? (
          <>
            <h3>{activeTableData.name}</h3>
            <table>
              <thead>
                <tr>
                  {activeTableData.headers.map(header => (
                    <th key={header}>{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {activeTableData.rows.map((row, index) => (
                  <tr key={index}>
                    {row.map((cell, cellIndex) => (
                      <td key={cellIndex}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        ) : (
          <p className="placeholder-text">Select an item from the sidebar to view its data.</p>
        )}
      </div>
    </div>
  );
}

export default MainContent;