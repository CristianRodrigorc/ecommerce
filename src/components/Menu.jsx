import { useState, useEffect } from 'react';

const MobileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Cerrar menú cuando se hace click fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.menu-container')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <div className="w-1/6 md:hidden relative menu-container">
      <button 
        onClick={toggleMenu}
        className="p-2 text-gray-500 hover:text-gray-900 transition-colors border border-gray-200 rounded-lg"
      >
        <img 
          src="https://img.icons8.com/?size=100&id=AIKpBfRmU6YN&format=png&color=000000" 
          alt="menu" 
          className={`w-6 h-6 transition-transform duration-300 ${isMenuOpen ? 'rotate-90' : 'rotate-0'}`}
        />
      </button>
      
      {/* Menú desplegable */}
      {isMenuOpen && (
        <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
          <div className="py-2">
            <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors">
              <i className="bi bi-person-fill mr-2"></i>
              Mi Cuenta
            </a>
            <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors">
              <i className="bi bi-heart-fill mr-2"></i>
              Favoritos
            </a>
            <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors">
              <i className="bi bi-cart-fill mr-2"></i>
              Carrito
            </a>
            <hr className="my-2" />
            <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors">
              Inicio
            </a>
            <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors">
              Productos
            </a>
            <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors">
              Contacto
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileMenu; 