import { useBusinessStore } from '../../store/useBusinessStore';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import { useState } from 'react';
import { Package, AlertTriangle } from 'lucide-react';

export default function Inventory() {
  const { inventory } = useBusinessStore();
  const [lowStockFilter, setLowStockFilter] = useState(false);

  const filteredInventory = lowStockFilter 
    ? inventory.filter(item => item.stock < 20)
    : inventory;

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold">Inventory Management</h1>
          <p className="text-gray-600">Track cleaning supplies and equipment</p>
        </div>
        <Button>+ Add New Item</Button>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <Card className="p-6">
          <p className="text-gray-600">Total Items</p>
          <p className="text-4xl font-bold mt-2">{inventory.length}</p>
        </Card>
        <Card className="p-6">
          <p className="text-gray-600 flex items-center gap-2">
            Low Stock Items <AlertTriangle className="text-amber-500" size={20} />
          </p>
          <p className="text-4xl font-bold mt-2 text-amber-600">
            {inventory.filter(i => i.stock < 20).length}
          </p>
        </Card>
        <Card className="p-6">
          <p className="text-gray-600">Total Stock Value</p>
          <p className="text-4xl font-bold mt-2">~₦248,000</p>
        </Card>
      </div>

      <Card>
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-xl font-semibold">Stock Items</h2>
          <label className="flex items-center gap-2 text-sm">
            <input 
              type="checkbox" 
              checked={lowStockFilter}
              onChange={(e) => setLowStockFilter(e.target.checked)}
            />
            Show Low Stock Only
          </label>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b text-left text-sm text-gray-600">
                <th className="px-8 py-5 font-medium">Item</th>
                <th className="px-8 py-5 font-medium">Current Stock</th>
                <th className="px-8 py-5 font-medium">Unit</th>
                <th className="px-8 py-5 font-medium">Status</th>
                <th className="px-8 py-5 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {filteredInventory.map((item) => {
                const isLow = item.stock < 20;
                return (
                  <tr key={item.id} className="hover:bg-gray-50">
                    <td className="px-8 py-6 font-medium flex items-center gap-3">
                      <Package className="text-primary-600" />
                      {item.item}
                    </td>
                    <td className="px-8 py-6">
                      <span className={`font-semibold ${isLow ? 'text-red-600' : 'text-gray-900'}`}>
                        {item.stock}
                      </span>
                    </td>
                    <td className="px-8 py-6 text-gray-600">{item.unit}</td>
                    <td className="px-8 py-6">
                      <span className={`px-4 py-1.5 rounded-full text-xs font-medium
                        ${isLow ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
                        {isLow ? 'Low Stock' : 'In Stock'}
                      </span>
                    </td>
                    <td className="px-8 py-6">
                      <Button variant="outline" size="sm">Update Stock</Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}