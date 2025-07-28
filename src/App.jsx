import 'bootstrap-icons/font/bootstrap-icons.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import MobileMenu from './components/Menu'

function App() {
  return (
    <div className="h-full w-full bg-gray-100 ">
      <header className="bg-white shadow-sm px-3">
        <div>
          <div className="flex justify-end py-1">
            <nav className="hidden md:flex space-x-10">
              <a href="#" className="text-gray-500 hover:text-gray-900">Inicio</a>
              <a href="#" className="text-gray-500 hover:text-gray-900">Productos</a>
              <a href="#" className="text-gray-500 hover:text-gray-900">Carrito</a>
            </nav>
          </div>
          <div className="flex md:justify-between items-center py-1">
            <div className="w-3/6 md:w-1/3">
              <h1 className="font-viga text-xl font-bold text-left text-orange-500 md:text-4xl" id="inicio">
                Mi E-commerce
              </h1>
            </div>
            <div>
              <ul className="hidden md:flex flex-row md:w-1/3 gap-4 text-md md:text-2xl">
                <li><a href="#">Moda</a></li>
                <li><a href="#">Accesorios</a></li>
                <li><a href="#">Hogar</a></li>
                <li><a href="#">Tecnología</a></li>
              </ul>
            </div>
            <div className="w-2/6 md:flex md:w-1/3 md:ml-10">
              <input
                type="text"
                placeholder="🔎 Buscar productos..."
                className="px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full"
              />
            </div>
            <MobileMenu />
          </div>
        </div>
      </header>

      <main className="w-full mx-auto py-4 px-4 flex flex-col gap-4 md:gap-8">

        <h2 className="font-michroma text-2xl font-semibold text-orange-500 mt-6 mb-2 md:text-5xl lg:text-8xl text-center underline">
          ¡Bienvenido!
        </h2>


        <div className="bg-white rounded-lg shadow w-full h-full">
          {/* Carrusel */}
          <div className="w-full h-full
              [&_.swiper]:rounded-lg [&_.swiper]:shadow-lg
              [&_.swiper-slide]:h-full [&_.swiper-slide]:w-full 
              [&_.swiper-slide>div]:flex [&_.swiper-slide>div]:flex-col [&_.swiper-slide>div]:justify-center [&_.swiper-slide>div]:items-center [&_.swiper-slide>div]:py-7
              [&_.swiper-button-prev]:hidden [&_.swiper-button-next]:hidden
              md:[&_.swiper-button-prev]:block md:[&_.swiper-button-next]:block
              [&_.swiper-slide>div>p]:text-lg
              md:[&_.swiper-slide>div>p]:text-lg">
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
                  <p className=" mb-2">
                    Nuevo proyecto de E-Commerce.
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
                    Un diseño agradable y funcional.
                  </p>
                  <img src="public/images/portada3.png" alt="portada" className="w-full h-full object-cover" />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        {/* Productos */}
        <div className="h-full w-full">
          <h2 className="font-michroma text-2xl font-semibold text-orange-500 mt-8 mb-2 md:text-5xl lg:text-8xl text-center underline" id="productos">
            Productos
          </h2>
          <div>
            <h3 className="font-goldman text-xl font-semibold text-orange-500 mt-4 mb-4 md:text-5xl lg:text-8xl text-start underline">
              Moda
            </h3>
            <div className="flex flex-col gap-4">
              <div>
                <img src="public/images/moda/oferta-moda.png" alt="portada" className="w-full h-full object-cover rounded-lg shadow-lg hover:scale-105 transition-all duration-300" />
              </div>
              <div className="flex flex-row gap-4">
                <div className="w-1/2">
                  <img src="public/images/moda/moda-ninos9-16.png" alt="portada" className="w-full h-full object-cover rounded-lg shadow-lg hover:scale-105 transition-all duration-300" />
                </div>
                <div className="w-1/2">
                  <div className="mb-4">
                    <img src="public/images/moda/moda-hombre1-1.png" alt="portada" className="w-full h-full object-cover rounded-lg shadow-lg hover:scale-105 transition-all duration-300" />
                  </div>
                  <div>
                    <img src="public/images/moda/moda-mujer1-1.png" alt="portada" className="w-full h-full object-cover rounded-lg shadow-lg hover:scale-105 transition-all duration-300" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-goldman text-xl font-semibold text-orange-500 mt-12 mb-4 md:text-5xl lg:text-8xl text-start underline">
              Accesorios
            </h3>
            <div className="flex flex-row gap-4">
              <div className="w-1/2">
                <div className="mb-4">
                  <img src="public/images/accesorios/accesorio-hombre1-1.png" alt="portada" className="w-full h-full object-cover rounded-lg shadow-lg hover:scale-105 transition-all duration-300" />
                </div>
                <div>
                  <img src="public/images/accesorios/accesorio-mujer1-1.png" alt="portada" className="w-full h-full object-cover rounded-lg shadow-lg hover:scale-105 transition-all duration-300" />
                </div>
              </div>
              <div className="w-1/2">
                <img src="public/images/accesorios/oferta-accesorio9-16.png" alt="portada" className="w-full h-full object-cover rounded-lg shadow-lg hover:scale-105 transition-all duration-300" />
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-goldman text-xl font-semibold text-orange-500 mt-12 mb-4 md:text-5xl lg:text-8xl text-start underline">
              Hogar
            </h3>
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-2 grid-rows-3 gap-4 [&>div:hover>img]:scale-105 [&>div>img]:transition-all [&>div>img]:duration-300">
                <div className="col-span-2 shadow-black shadow-lg rounded-lg">
                  <img src="public/images/hogar/oferta-hogar.png" alt="portada" className="w-full h-full object-cover rounded-lg shadow-lg" />
                </div>
                <div className="row-span-2 shadow-black shadow-lg rounded-lg">
                  <img src="public/images/hogar/muebles-piscina9-16.png" alt="portada" className="w-full h-full object-cover rounded-lg" />
                </div>
                <div className="row-span-1 shadow-black shadow-lg rounded-lg">
                  <img src="public/images/hogar/muebles-bano1-1.png" alt="portada" className="w-full h-full object-cover rounded-lg" />
                </div>
                <div className="row-span-2 shadow-black shadow-lg rounded-lg">
                  <img src="public/images/hogar/muebles-oficina9-16.png" alt="portada" className="w-full h-full object-cover rounded-lg" />
                </div>
                <div className="row-span-1 shadow-black shadow-lg rounded-lg">
                  <img src="public/images/hogar/muebles-salon1-1.png" alt="portada" className="w-full h-full object-cover rounded-lg" />
                </div>
                <div className="col-span-2 shadow-black shadow-lg rounded-lg">
                  <img src="public/images/hogar/muebles-habitacion16-9.png" alt="portada" className="w-full h-full object-cover rounded-lg" />
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-goldman text-xl font-semibold text-orange-500 mt-12 mb-4 md:text-5xl lg:text-8xl text-start underline">
              Tecnología
            </h3>
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-3 grid-rows-1 gap-4 [&>div:hover>img]:scale-105 [&>div>img]:transition-all [&>div>img]:duration-300">
                <div className="col-span-3 shadow-black shadow-lg rounded-lg">
                  <img src="public/images/tecnologia/oferta-tecnologia.png" alt="portada" className="w-full h-full object-cover rounded-lg" />
                </div>
                <div className="row-span-2 shadow-black shadow-lg rounded-lg">
                  <img src="public/images/tecnologia/tecnologia-mobil9-16.png" alt="portada" className="w-full h-full object-cover rounded-lg" />
                </div>
                <div className="shadow-black shadow-lg rounded-lg">
                  <img src="public/images/tecnologia/tecnologia-consola1-1.png" alt="portada" className="w-full h-full object-cover rounded-lg" />
                </div>
                <div className="shadow-black shadow-lg rounded-lg">
                  <img src="public/images/tecnologia/tecnologia-portatil1-1.png" alt="portada" className="w-full h-full object-cover rounded-lg" />
                </div>
                <div className="col-span-2 shadow-black shadow-lg rounded-lg">
                  <img src="public/images/tecnologia/tecnologia-tv16-9.png" alt="portada" className="w-full h-full object-cover rounded-lg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-16" id="contacto">
        <div className="max-w-7xl mx-auto px-4 py-12">
          {/* Sección principal del footer */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-8 text-center">

            {/* Logo y descripción */}
            <div className="lg:col-span-2 text-center">
              <h3 className="font-goldman text-2xl font-bold text-orange-400 mb-4">
                Mi E-commerce
              </h3>
              <p className="text-gray-300 mb-4 leading-relaxed text-md">
                Tu tienda online de confianza con los mejores productos.
                Ofrecemos calidad, variedad y un servicio excepcional para
                satisfacer todas tus necesidades.
              </p>
              <div className="flex space-x-8 justify-center">
                <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                  <i className="bi bi-facebook text-xl"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                  <i className="bi bi-instagram text-xl"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                  <i className="bi bi-twitter text-xl"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                  <i className="bi bi-youtube text-xl"></i>
                </a>
              </div>
            </div>

            {/* Enlaces rápidos */}
            <div className="text-center">
              <h4 className="font-semibold text-lg mb-4 text-white">Enlaces Rápidos</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">Inicio</a></li>
                <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">Productos</a></li>
                <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">Ofertas</a></li>
                <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">Novedades</a></li>
                <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">Blog</a></li>
              </ul>
            </div>

            {/* Categorías */}
            <div className="text-center">
              <h4 className="font-semibold text-lg mb-4 text-white">Categorías</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">Ropa</a></li>
                <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">Accesorios</a></li>
                <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">Hogar</a></li>
                <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">Tecnología</a></li>
                <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">Deportes</a></li>
              </ul>
            </div>
          </div>

          {/* Sección de contacto */}
          <div className="border-t border-gray-700 pt-8 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center">
                <i className="bi bi-geo-alt-fill text-orange-400 text-xl mb-2"></i>
                <div className="text-center">
                  <p className="font-semibold">Dirección</p>
                  <p className="text-gray-300 text-sm">Calle Principal 123, Ciudad</p>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <i className="bi bi-telephone-fill text-orange-400 text-xl mb-2"></i>
                <div className="text-center">
                  <p className="font-semibold">Teléfono</p>
                  <p className="text-gray-300 text-sm">+34 662 174 211</p>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <i className="bi bi-envelope-fill text-orange-400 text-xl mb-2"></i>
                <div className="text-center">
                  <p className="font-semibold">Email</p>
                  <p className="text-gray-300 text-sm">cristian24121997@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="border-t border-gray-700 pt-8 mb-8">
            <div className="text-center">
              <h4 className="font-semibold text-lg mb-4">Suscríbete a nuestro newsletter</h4>
              <p className="text-gray-300 mb-6">Recibe las últimas ofertas y novedades</p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Tu email"
                  className="flex-1 px-4 py-2 rounded-lg bg-gray-800 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-orange-400"
                />
                <button className="px-6 py-2 bg-orange-400 text-white rounded-lg hover:bg-orange-500 transition-colors font-semibold">
                  Suscribirse
                </button>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-700 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2025 Mi E-commerce. Todos los derechos reservados. |
              <a href="#" className="text-orange-400 hover:text-orange-300 ml-1">Política de Privacidad</a> |
              <a href="#" className="text-orange-400 hover:text-orange-300 ml-1">Términos de Servicio</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
