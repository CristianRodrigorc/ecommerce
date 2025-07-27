import './App.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

function App() {
  return (
    <div className="h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div>
          <div className="flex justify-end py-1">
            <nav className="hidden md:flex space-x-10">
              <a href="#" className="text-gray-500 hover:text-gray-900">Inicio</a>
              <a href="#" className="text-gray-500 hover:text-gray-900">Productos</a>
              <a href="#" className="text-gray-500 hover:text-gray-900">Carrito</a>
            </nav>
            <div className="md:hidden">
             <button className="p-2 text-gray-500 hover:text-gray-900 transition-colors border border-gray-200 rounded-lg">
              <i className="bi bi-person-fill text-xl"></i>
            </button>
            <button className="p-2 text-gray-500 hover:text-gray-900 transition-colors border border-gray-200 rounded-lg">
              <i className="bi bi-heart-fill text-xl"></i>
            </button>
            <button className="p-2 text-gray-500 hover:text-gray-900 transition-colors border border-gray-200 rounded-lg">
              <i className="bi bi-cart-fill text-xl"></i>
            </button> 
            </div>
          </div>
          <div className="flex justify-between items-center py-1">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Mi E-commerce
              </h1>
            </div>
            <div>
              <ul className="hidden md:flex flex-row space-x-8">
                <li><a href="#">Hombre</a></li>
                <li><a href="#">Mujer</a></li>
                <li><a href="#">Niño</a></li>
                <li><a href="#">Niña</a></li>
              </ul>
            </div>
            <div className="md:flex">
              <input
                type="text"
                placeholder="🔎 Buscar productos..."
                className="px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full"
              />
              <div className="hidden md:flex justify-end">
                <button className="p-2 text-gray-500 hover:text-gray-900 transition-colors border border-gray-200 rounded-lg">
                  <i className="bi bi-person-fill text-xl"></i>
                </button>
                <button className="p-2 text-gray-500 hover:text-gray-900 transition-colors border border-gray-200 rounded-lg">
                  <i className="bi bi-heart-fill text-xl"></i>
                </button>
                <button className="p-2 text-gray-500 hover:text-gray-900 transition-colors border border-gray-200 rounded-lg">
                  <i className="bi bi-cart-fill text-xl"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="w-full mx-auto py-4 px-4">

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          ¡Bienvenido!
        </h2>
        <div className="bg-white rounded-lg shadow w-full h-full">
          {/* Carrusel de productos destacados */}
          <div className="w-full h-full
              [&_.swiper]:rounded-lg [&_.swiper]:shadow-lg
              [&_.swiper-slide]:h-full [&_.swiper-slide]:w-full 
              [&_.swiper-slide>div]:flex [&_.swiper-slide>div]:flex-col [&_.swiper-slide>div]:justify-center [&_.swiper-slide>div]:items-center [&_.swiper-slide>div]:py-8
              [&_.swiper-button-prev]:hidden [&_.swiper-button-next]:hidden
              md:[&_.swiper-button-prev]:block md:[&_.swiper-button-next]:block">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              navigation
              pagination={{
                clickable: true
              }}
              autoplay={{ delay: 6000 }}
              loop={true}
            >
              <SwiperSlide >
                <div>
                  <p className="text-gray-600 mb-2">
                    Este es un nuevo proyecto de E-Commerce.
                  </p>
                  <img src="public/images/portada.png" alt="portada" className="w-full h-full object-cover" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <p className="text-gray-600 mb-2">
                    Se trabajó con React, Vite y Tailwind CSS.
                  </p>
                  <img src="public/images/portada2.png" alt="portada" className="w-full h-full object-cover" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <p className="text-gray-600 mb-2">
                    Se trabajó en un diseño agradable y funcional.
                  </p>
                  <img src="public/images/portada3.png" alt="portada" className="w-full h-full object-cover" />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
