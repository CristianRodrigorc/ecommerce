import React, { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';
import { useCart } from '../context/CartContext';

function Hogar(){
    //Estado para el carrito
    const { addToCart } = useCart();

    //Estado para los productos
    const [productos, setProductos] = useState([]);
    const [productosFiltrados, setProductosFiltrados] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    // Estados para filtros
    const [filtros, setFiltros] = useState({
      categoria: '',
      material: '',
      color: '',
      room: '',
      precioMin: '',
      precioMax: '',
      busqueda: ''
    });

    async function cargarProductos() {
        try {
          setLoading(true);
          const { data, error } = await supabase
            .from('home')
            .select('*');
          if (error) throw error;
          setProductos(data || []);
        } catch {
          setError('Error al cargar los productos');
        } finally {
          setLoading(false);
        }
      }

    useEffect(()=>{
        cargarProductos();
    }, []);

    useEffect(() => {
        aplicarFiltros();
    }, [productos, filtros]);

    function aplicarFiltros(){
        let filtrados = [...productos];

        // Filtro por búsqueda (nombre)
        if (filtros.busqueda) {
          filtrados = filtrados.filter(producto =>
            producto.name.toLowerCase().includes(filtros.busqueda.toLowerCase())
          );
        }

        // Filtro por categoría
        if (filtros.categoria) {
          filtrados = filtrados.filter(producto => producto.category === filtros.categoria);
        }

        // Filtro por material
        if (filtros.material) {
          filtrados = filtrados.filter(producto => producto.material === filtros.material);
        }

        // Filtro por color
        if (filtros.color) {
          filtrados = filtrados.filter(producto => producto.color === filtros.color);
        }

        // Filtro por habitación
        if (filtros.room) {
          filtrados = filtrados.filter(producto => producto.room === filtros.room);
        }

        // Filtro por precio mínimo
        if (filtros.precioMin) {
          filtrados = filtrados.filter(producto => producto.price >= parseFloat(filtros.precioMin));
        }

        // Filtro por precio máximo
        if (filtros.precioMax) {
          filtrados = filtrados.filter(producto => producto.price <= parseFloat(filtros.precioMax));
        }

        setProductosFiltrados(filtrados);
    }

    function limpiarFiltros() {
        setFiltros({
          categoria: '',
          material: '',
          color: '',
          room: '',
          precioMin: '',
          precioMax: '',
          busqueda: ''
        });
    }

    // Obtener valores únicos para los filtros
    const categorias = [...new Set(productos.map(p => p.category))];
    const materiales = [...new Set(productos.map(p => p.material))];
    const colores = [...new Set(productos.map(p => p.color))];
    const rooms = [...new Set(productos.map(p => p.room))];

    return (
        <div className="min-h-screen bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 py-8">
            <h3 className="font-viga text-3xl font-bold text-orange-500 sm:text-4xl md:text-5xl lg:text-6xl text-center mb-8">
              Muebles y Decoración para el Hogar
            </h3>
            <p className="text-gray-600 text-center text-lg md:text-xl mb-8">
              Transforma tu hogar con los mejores muebles y accesorios
            </p>

            {/* Filtros */}
            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
              <h4 className="font-semibold text-lg text-gray-800 mb-4">Filtros</h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Búsqueda */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Buscar producto
                  </label>
                  <input
                    type="text"
                    placeholder="Nombre del producto..."
                    value={filtros.busqueda}
                    onChange={(e) => setFiltros({...filtros, busqueda: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>

                {/* Categoría */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Categoría
                  </label>
                  <select
                    value={filtros.categoria}
                    onChange={(e) => setFiltros({...filtros, categoria: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  >
                    <option value="">Todas las categorías</option>
                    {categorias.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>

                {/* Material */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Material
                  </label>
                  <select
                    value={filtros.material}
                    onChange={(e) => setFiltros({...filtros, material: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  >
                    <option value="">Todos los materiales</option>
                    {materiales.map(mat => (
                      <option key={mat} value={mat}>{mat}</option>
                    ))}
                  </select>
                </div>

                {/* Color */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Color
                  </label>
                  <select
                    value={filtros.color}
                    onChange={(e) => setFiltros({...filtros, color: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  >
                    <option value="">Todos los colores</option>
                    {colores.map(col => (
                      <option key={col} value={col}>{col}</option>
                    ))}
                  </select>
                </div>

                {/* Habitación */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Habitación
                  </label>
                  <select
                    value={filtros.room}
                    onChange={(e) => setFiltros({...filtros, room: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  >
                    <option value="">Todas las habitaciones</option>
                    {rooms.map(room => (
                      <option key={room} value={room}>{room}</option>
                    ))}
                  </select>
                </div>

                {/* Precio mínimo */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Precio mínimo (€)
                  </label>
                  <input
                    type="number"
                    placeholder="0"
                    value={filtros.precioMin}
                    onChange={(e) => setFiltros({...filtros, precioMin: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>

                {/* Precio máximo */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Precio máximo (€)
                  </label>
                  <input
                    type="number"
                    placeholder="10000"
                    value={filtros.precioMax}
                    onChange={(e) => setFiltros({...filtros, precioMax: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
              </div>

              {/* Botón limpiar filtros */}
              <div className="mt-4 flex justify-end">
                <button
                  onClick={limpiarFiltros}
                  className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
                >
                  Limpiar filtros
                </button>
              </div>
            </div>

            {/* Resultados */}
            <div className="mb-4">
              <p className="text-gray-600">
                Mostrando {productosFiltrados.length} de {productos.length} productos
              </p>
            </div>
      
            {/* Mostrar spinner mientras carga */}
            {loading && (
              <div className="flex items-center justify-center py-8">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
                <p className="ml-4 text-gray-600">Cargando productos...</p>
              </div>
            )}
      
            {/* Mostrar error si hay alguno */}
            {error && (
              <div className="text-center py-8">
                <p className="text-red-500 mb-4">{error}</p>
                <button 
                  onClick={cargarProductos}
                  className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600"
                >
                  Intentar de nuevo
                </button>
              </div>
            )}
      
            {/* Mostrar productos */}
            {!loading && !error && productosFiltrados.length === 0 ? (
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <p className="font-michroma text-2xl font-semibold text-orange-500 mb-6 text-center">
                  No se encontraron productos
                </p>
                <p className="text-gray-600 text-center">
                  Intenta ajustar los filtros o busca otro producto
                </p>
              </div>
            ) : (
              !loading && !error && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {productosFiltrados.map((producto) => (
                    <div key={producto.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                      {producto.img && (
                        <img 
                          src={producto.img} 
                          alt={producto.name}
                          className="w-full h-48 object-cover"
                        />
                      )}
                      <div className="p-4">
                        <h4 className="font-semibold text-lg text-gray-800 mb-2">
                          {producto.name}
                        </h4>
                        <p className="text-gray-600 text-sm mb-1">
                          <b>Categoría:</b> {producto.category}
                        </p>
                        <p className="text-gray-600 text-sm mb-1">
                          <b>Material:</b> {producto.material}
                        </p>
                        <p className="text-gray-600 text-sm mb-1">
                          <b>Color:</b> {producto.color}
                        </p>
                        <p className="text-gray-600 text-sm mb-1">
                          <b>Habitación:</b> {producto.room}
                        </p>
                        <p className="text-gray-600 text-sm mb-1">
                          <b>Dimensiones:</b> {producto.dimensions}
                        </p>
                        <div className="flex justify-between items-center mt-2">
                          <span className="text-orange-500 font-bold text-lg">
                            €{producto.price}
                          </span>
                          <button 
                            onClick={() => addToCart(producto)}
                            className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors"
                          >
                            Añadir al carrito
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )
            )}
          </div>
        </div>
      );
}

export default Hogar;