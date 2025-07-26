import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <h1 className="text-3xl font-bold text-gray-900">
              Mi E-commerce
            </h1>
            <nav className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-gray-900">Inicio</a>
              <a href="#" className="text-gray-500 hover:text-gray-900">Productos</a>
              <a href="#" className="text-gray-500 hover:text-gray-900">Carrito</a>
            </nav>
          </div>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              ¡Bienvenido a tu tienda online!
            </h2>
            <p className="text-gray-600">
              Este es tu nuevo proyecto de e-commerce con React, Vite y Tailwind CSS.
            </p>
            <div className="mt-6">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-200">
                Comenzar
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
