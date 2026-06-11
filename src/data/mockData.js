export const mockServices = [
  {
    id: 1,
    name: "Basic Wash",
    price: 350,
    duration: "30 min",
    description: "Exterior wash, tire shine, and interior vacuum",
    category: "Wash"
  },
  {
    id: 2,
    name: "Premium Detailing",
    price: 1200,
    duration: "2 hours",
    description: "Full interior + exterior detailing, wax, polish",
    category: "Detailing"
  },
  {
    id: 3,
    name: "Engine Bay Cleaning",
    price: 650,
    duration: "45 min",
    description: "Deep engine cleaning and degreasing",
    category: "Detailing"
  },
  {
    id: 4,
    name: "Interior Deep Clean",
    price: 850,
    duration: "1.5 hours",
    description: "Seats, carpets, dashboard, and windows",
    category: "Interior"
  },
];

export const mockAppointments = [
  {
    id: 101,
    customerName: "Abebe Kebede",
    vehicle: "Toyota Camry 2022",
    service: "Premium Detailing",
    date: "2026-06-12",
    time: "10:00",
    status: "Confirmed",
    amount: 1200
  },
  {
    id: 102,
    customerName: "Meron Tesfaye",
    vehicle: "Honda Civic 2021",
    service: "Basic Wash",
    date: "2026-06-12",
    time: "14:30",
    status: "In Progress",
    amount: 350
  },
  {
    id: 103,
    customerName: "Samuel Haile",
    vehicle: "Suzuki Vitara 2023",
    service: "Interior Deep Clean",
    date: "2026-06-13",
    time: "09:00",
    status: "Completed",
    amount: 850
  },
];

export const mockCustomers = [
  { id: 1, name: "Abebe Kebede", phone: "+251 911 234 567", vehicle: "Toyota Camry", visits: 5 },
  { id: 2, name: "Meron Tesfaye", phone: "+251 922 345 678", vehicle: "Honda Civic", visits: 3 },
  { id: 3, name: "Samuel Haile", phone: "+251 933 456 789", vehicle: "Suzuki Vitara", visits: 7 },
];

export const mockInventory = [
  { id: 1, item: "Car Shampoo", stock: 45, unit: "Liters" },
  { id: 2, item: "Microfiber Cloths", stock: 120, unit: "Pieces" },
  { id: 3, item: "Tire Shine", stock: 18, unit: "Cans" },
  { id: 4, item: "Interior Cleaner", stock: 8, unit: "Bottles" },
];

export const mockStats = {
  todayRevenue: 2450,
  weeklyRevenue: 18400,
  monthlyRevenue: 67200,
  appointmentsToday: 7,
  completionRate: 94,
};