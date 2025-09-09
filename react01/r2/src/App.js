import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [activeTable, setActiveTable] = useState('Employee Records');
  const [activeTab, setActiveTab] = useState('Personal Info');
  
  // Table data with different tabs for each table type
  const tableData = {
    "Employee Records": {
      tabs: ["Personal Info", "Employment Details", "Salary History", "Performance"],
      data: {
        "Personal Info": {
          headers: ["Employee ID", "Name", "Department", "Position", "Hire Date"],
          rows: [
            ["EMP-001", "John Smith", "Engineering", "Senior Developer", "2020-03-15"],
            ["EMP-002", "Emily Johnson", "Marketing", "Marketing Manager", "2019-07-22"],
            ["EMP-003", "Michael Brown", "Sales", "Sales Executive", "2021-01-10"]
          ]
        },
        "Employment Details": {
          headers: ["Employee ID", "Status", "Contract Type", "Hours/Week", "Manager"],
          rows: [
            ["EMP-001", "Active", "Full-time", "40", "Sarah Wilson"],
            ["EMP-002", "Active", "Full-time", "40", "David Lee"],
            ["EMP-003", "Active", "Part-time", "30", "Jennifer Taylor"]
          ]
        },
        "Salary History": {
          headers: ["Employee ID", "Current Salary", "Last Increase", "Next Review", "Bonus Eligibility"],
          rows: [
            ["EMP-001", "$95,000", "5% (2024-01-15)", "2025-01-15", "Yes"],
            ["EMP-002", "$110,000", "7% (2024-02-10)", "2025-02-10", "Yes"],
            ["EMP-003", "$75,000", "4% (2024-03-05)", "2025-03-05", "No"]
          ]
        },
        "Performance": {
          headers: ["Employee ID", "Last Review Score", "Goals Completion", "Skills", "Training Needs"],
          rows: [
            ["EMP-001", "4.8/5", "95%", "React, Node.js, Python", "Advanced Cloud Architecture"],
            ["EMP-002", "4.5/5", "92%", "Digital Marketing, Analytics", "Data Visualization"],
            ["EMP-003", "4.2/5", "85%", "Sales, Negotiation", "CRM Software"]
          ]
        }
      }
    },
    "Project Management": {
      tabs: ["Active Projects", "Completed Projects", "Resource Allocation", "Timelines"],
      data: {
        "Active Projects": {
          headers: ["Project ID", "Project Name", "Manager", "Team Size", "Status", "% Complete"],
          rows: [
            ["PROJ-101", "Website Redesign", "Sarah Wilson", "5", "In Progress", "65%"],
            ["PROJ-102", "Mobile App Development", "David Lee", "8", "In Progress", "40%"],
            ["PROJ-103", "Database Migration", "Michael Brown", "3", "Planning", "10%"]
          ]
        },
        "Completed Projects": {
          headers: ["Project ID", "Project Name", "Manager", "Duration", "Final Budget", "Client Rating"],
          rows: [
            ["PROJ-095", "E-commerce Platform", "Emily Johnson", "6 months", "$150,000", "4.8/5"],
            ["PROJ-096", "CRM Implementation", "John Smith", "4 months", "$95,000", "4.5/5"],
            ["PROJ-097", "Cloud Infrastructure", "Jennifer Taylor", "5 months", "$120,000", "4.9/5"]
          ]
        },
        "Resource Allocation": {
          headers: ["Project ID", "Project Name", "Assigned Team", "Budget", "Tools", "Deadline"],
          rows: [
            ["PROJ-101", "Website Redesign", "Frontend Team", "$75,000", "Figma, React", "2025-10-15"],
            ["PROJ-102", "Mobile App Development", "Mobile Team", "$125,000", "React Native, Firebase", "2025-12-20"],
            ["PROJ-103", "Database Migration", "Backend Team", "$60,000", "AWS, MongoDB", "2025-11-30"]
          ]
        },
        "Timelines": {
          headers: ["Project ID", "Project Name", "Start Date", "Deadline", "Critical Path", "Dependencies"],
          rows: [
            ["PROJ-101", "Website Redesign", "2025-06-01", "2025-10-15", "Design Approval", "PROJ-102"],
            ["PROJ-102", "Mobile App Development", "2025-07-15", "2025-12-20", "API Completion", "PROJ-101"],
            ["PROJ-103", "Database Migration", "2025-08-01", "2025-11-30", "Data Validation", "None"]
          ]
        }
      }
    },
    "Financial Reports": {
      tabs: ["Revenue", "Expenses", "Profit & Loss", "Forecasting"],
      data: {
        "Revenue": {
          headers: ["Product/Service", "Q1 2025", "Q2 2025", "Q3 2025", "Q4 2025", "Total"],
          rows: [
            ["Software Licenses", "$250,000", "$275,000", "$290,000", "$310,000", "$1,125,000"],
            ["Consulting Services", "$180,000", "$195,000", "$210,000", "$230,000", "$815,000"],
            ["Support & Maintenance", "$120,000", "$125,000", "$130,000", "$140,000", "$515,000"]
          ]
        },
        "Expenses": {
          headers: ["Category", "Q1 2025", "Q2 2025", "Q3 2025", "Q4 2025", "Total"],
          rows: [
            ["Salaries", "$350,000", "$355,000", "$360,000", "$365,000", "$1,430,000"],
            ["Marketing", "$45,000", "$50,000", "$55,000", "$60,000", "$210,000"],
            ["Infrastructure", "$30,000", "$32,000", "$35,000", "$38,000", "$135,000"]
          ]
        },
        "Profit & Loss": {
          headers: ["Metric", "Q1 2025", "Q2 2025", "Q3 2025", "Q4 2025", "Annual Total"],
          rows: [
            ["Revenue", "$550,000", "$595,000", "$630,000", "$680,000", "$2,455,000"],
            ["Expenses", "$425,000", "$437,000", "$450,000", "$463,000", "$1,775,000"],
            ["Net Profit", "$125,000", "$158,000", "$180,000", "$217,000", "$680,000"]
          ]
        },
        "Forecasting": {
          headers: ["Metric", "Q1 2026 Forecast", "Q2 2026 Forecast", "Q3 2026 Forecast", "Q4 2026 Forecast"],
          rows: [
            ["Expected Revenue", "$700,000", "$750,000", "$800,000", "$850,000"],
            ["Projected Expenses", "$480,000", "$490,000", "$500,000", "$510,000"],
            ["Forecasted Profit", "$220,000", "$260,000", "$300,000", "$340,000"]
          ]
        }
      }
    },
    "Customer Database": {
      tabs: ["Contact Info", "Order History", "Support Tickets", "Feedback"],
      data: {
        "Contact Info": {
          headers: ["Customer ID", "Name", "Email", "Phone", "Company", "Account Manager"],
          rows: [
            ["CUST-1001", "Robert Davis", "robert@example.com", "(555) 123-4567", "TechCorp", "Sarah Wilson"],
            ["CUST-1002", "Lisa Garcia", "lisa@example.com", "(555) 987-6543", "DataSystems", "David Lee"],
            ["CUST-1003", "James Anderson", "james@example.com", "(555) 456-7890", "WebSolutions", "Michael Brown"]
          ]
        },
        "Order History": {
          headers: ["Customer ID", "Product", "Order Date", "Value", "Status", "Renewal Date"],
          rows: [
            ["CUST-1001", "Enterprise Suite", "2025-01-15", "$50,000", "Active", "2026-01-15"],
            ["CUST-1002", "Business Package", "2025-02-20", "$35,000", "Active", "2026-02-20"],
            ["CUST-1003", "Starter Plan", "2025-03-10", "$15,000", "Active", "2026-03-10"]
          ]
        },
        "Support Tickets": {
          headers: ["Ticket ID", "Customer", "Issue", "Opened", "Status", "Assigned To"],
          rows: [
            ["TKT-5001", "Robert Davis", "Integration problem", "2025-08-15", "Resolved", "John Smith"],
            ["TKT-5002", "Lisa Garcia", "Feature request", "2025-08-18", "In Progress", "Emily Johnson"],
            ["TKT-5003", "James Anderson", "Billing question", "2025-08-20", "Open", "Jennifer Taylor"]
          ]
        },
        "Feedback": {
          headers: ["Customer ID", "Survey Date", "Product Rating", "Support Rating", "Comments", "Follow-up Required"],
          rows: [
            ["CUST-1001", "2025-07-15", "4.5/5", "4.8/5", "Great product, would like more customization options", "No"],
            ["CUST-1002", "2025-07-20", "4.2/5", "4.5/5", "Good overall experience", "No"],
            ["CUST-1003", "2025-07-25", "4.7/5", "4.9/5", "Excellent support team", "Yes - send thank you note"]
          ]
        }
      }
    }
  };

  const handleTableClick = (tableName) => {
    setActiveTable(tableName);
    // Set the first tab of the new table as active
    setActiveTab(tableData[tableName].tabs[0]);
  };

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="app">
      <div className="sidebar">
        <h2>Table Navigator</h2>
        <ul>
          {Object.keys(tableData).map((tableName) => (
            <li 
              key={tableName}
              className={activeTable === tableName ? 'active' : ''}
              onClick={() => handleTableClick(tableName)}
            >
              {tableName}
            </li>
          ))}
        </ul>
      </div>
      
      <div className="main-content">
        <div className="content-header">
          <h1>{activeTable}</h1>
          <div className="table-tabs">
            {tableData[activeTable].tabs.map(tab => (
              <div 
                key={tab}
                className={`tab ${activeTab === tab ? 'active-tab' : ''}`}
                onClick={() => handleTabClick(tab)}
              >
                {tab}
              </div>
            ))}
          </div>
        </div>
        
        <div className="table-container">
          <table className="data-table">
            <thead>
              <tr>
                {tableData[activeTable].data[activeTab].headers.map((header, index) => (
                  <th key={index}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableData[activeTable].data[activeTab].rows.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default App;