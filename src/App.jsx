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
        <div className="">
          <div className="flex justify-end py-1">
            <nav className="hidden dm:flex space-x-10">
              <a href="#" className="text-gray-500 hover:text-gray-900">Inicio</a>
              <a href="#" className="text-gray-500 hover:text-gray-900">Productos</a>
              <a href="#" className="text-gray-500 hover:text-gray-900">Carrito</a>
            </nav>
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
            <div>
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
          <div className="bg-white rounded-lg shadow w-full h-full">
            <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              ¡Bienvenido a mi tienda online!
            </h2>
            </div>
              {/* Carrusel de productos destacados */}
              <div className="w-full h-full 
              [&>Swiper]:rounded-lg [&>Swiper]:shadow-lg
              [&>Swiper>SwiperSlide]:h-full [&>Swiper>SwiperSlide]:w-full 
              [&>Swiper>SwiperSlide>div]:flex [&>Swiper>SwiperSlide>div]:flex-col [&>Swiper>SwiperSlide>div]:justify-center [&>Swiper>SwiperSlide>div]:items-center
              ">
                <Swiper
                  modules={[Navigation, Pagination, Autoplay]}
                  navigation
                  pagination={{ 
                    clickable: true
                  }}
                  autoplay={{ delay: 5000 }}
                  loop={true}
                >
                  <SwiperSlide>
                    <div>
                      <p className="text-gray-600 mb-2">
                        Este es un nuevo proyecto de E-Commerce.
                      </p>
                      <img src="public/images/portada.png" alt="portada" className="w-full h-full object-cover" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div>
                      <p className="text-gray-600 mb-6">
                        Se trabajó con React, Vite y Tailwind CSS.
                      </p>
                      <img src="public/images/portada2.png" alt="portada" className="w-full h-full object-cover" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div>
                      <p className="text-gray-600 mb-2">
                        Esta página busca igualar las principales funcionalidades de una tienda competitiva.
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
