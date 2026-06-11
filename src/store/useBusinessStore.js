import { create } from 'zustand';

export const useBusinessStore = create((set) => ({
  services: [],
  appointments: [],
  customers: [],
  inventory: [],
  stats: {},

  // Initialize data
  initializeData: (data) => set({
    services: data.services || [],
    appointments: data.appointments || [],
    customers: data.customers || [],
    inventory: data.inventory || [],
    stats: data.stats || {},
  }),

  // Appointments
  addAppointment: (newAppointment) => set((state) => ({
    appointments: [...state.appointments, newAppointment]
  })),

  updateAppointmentStatus: (id, status) => set((state) => ({
    appointments: state.appointments.map(app =>
      app.id === id ? { ...app, status } : app
    )
  })),

  // Services
  addService: (newService) => set((state) => ({
    services: [...state.services, newService]
  })),
}));