// src/data.js

export const tableData = {
  companyDetails: {
    name: 'Company Details',
    headers: ['ID', 'Company Name', 'Founded', 'Headquarters'],
    rows: [
      ['C001', 'Innovate Corp.', '2005', 'San Francisco, USA'],
      ['C002', 'Tech Solutions Ltd.', '2010', 'London, UK'],
      ['C003', 'Future Systems', '2012', 'Tokyo, Japan'],
    ],
  },
  employeeDetails: {
    name: 'Employee Details',
    headers: ['Employee ID', 'Name', 'Department', 'Join Date'],
    rows: [
      ['E101', 'Alice Johnson', 'Engineering', '2020-03-15'],
      ['E102', 'Bob Williams', 'Marketing', '2019-07-22'],
      ['E103', 'Charlie Brown', 'HR', '2021-01-10'],
    ],
  },
  salaryDetails: {
    name: 'Salary Details',
    headers: ['Employee ID', 'Name', 'Role', 'Salary (USD)'],
    rows: [
      ['E101', 'Alice Johnson', 'Sr. Developer', '95,000'],
      ['E102', 'Bob Williams', 'Marketing Head', '85,000'],
      ['E103', 'Charlie Brown', 'HR Manager', '78,000'],
    ],
  },
  projectDetails: {
    name: 'Project Details',
    headers: ['Project ID', 'Project Name', 'Lead', 'Status'],
    rows: [
      ['P501', 'Project Phoenix', 'Alice Johnson', 'In Progress'],
      ['P502', 'Project Titan', 'David Smith', 'Completed'],
      ['P503', 'Project Neptune', 'Eve Davis', 'Planning'],
    ],
  },
};