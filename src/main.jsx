import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { useBusinessStore } from './store/useBusinessStore'
import { mockServices, mockAppointments, mockCustomers, mockInventory, mockStats } from './data/mockData'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// Initialize mock data once
const { initializeData } = useBusinessStore.getState();
initializeData({
  services: mockServices,
  appointments: mockAppointments,
  customers: mockCustomers,
  inventory: mockInventory,
  stats: mockStats,
});