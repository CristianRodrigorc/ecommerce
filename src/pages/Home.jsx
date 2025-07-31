import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Home() {
    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
            const elementId = hash.substring(1);
            const element = document.getElementById(elementId);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, []);
    return (
        <>
            <div className="w-full mx-auto py-4 px-4 flex flex-col items-center gap-4 md:gap-8 lg:gap-16">

                <h2 className="font-michroma text-2xl font-semibold text-orange-500 mt-6 mb-2 sm:text-3xl md:text-5xl lg:text-7xl text-center underline">
                    ¡Bienvenido!
                </h2>


                <div className="bg-white rounded-3xl shadow max-w-7xl h-full w-full md:mx-8 lg:mx-16">
                    {/* Carrusel */}
                    <div className="w-full h-full
              [&_.swiper]:rounded-lg [&_.swiper]:shadow-lg
              [&_.swiper-slide]:h-full 
              [&_.swiper-slide]:w-full 
              [&_.swiper-slide>div]:flex 
              [&_.swiper-slide>div]:flex-col 
              [&_.swiper-slide>div]:justify-center 
              [&_.swiper-slide>div]:items-center 
              [&_.swiper-slide>div]:py-2 
              [&_.swiper-slide>div]:pb-10 
              [&_.swiper-slide>div]:px-4
              [&_.swiper-button-prev]:hidden [&_.swiper-button-next]:hidden
              [&_.swiper-pagination]:block
              [&_.swiper-slide>div>p]:mb-3
              [&_.swiper-slide>div>p]:text-md
              [&_.swiper-slide>div>img]:rounded-2xl
              [&_.swiper-slide>div>img]:shadow-lg
              [&_.swiper-slide>div>img]:shadow-black
              [&_.swiper-slide>div>img]:w-full
              [&_.swiper-slide>div>img]:h-full
              [&_.swiper-slide>div>img]:object-cover
              sm:[&_.swiper-slide>div]:mx-4
              sm:[&_.swiper-slide>div>p]:text-2xl
              sm:[&_.swiper-slide>div>p]:my-2
              md:[&_.swiper-slide>div]:mx-9
              md:[&_.swiper-button-prev]:block md:[&_.swiper-button-next]:block
              md:[&_.swiper-slide>div>p]:text-3xl
              md:[&_.swiper-slide>div>p]:my-6
              lg:[&_.swiper-slide>div>p]:text-5xl
              lg:[&_.swiper-slide>div>p]:mt-8
              lg:[&_.swiper-slide>div>p]:mb-10
              ">
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
                                    <p>
                                        Nuevo proyecto de E-Commerce.
                                    </p>
                                    <img src="/images/portada.png" alt="portada" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    <p>
                                        Un trabajo con React, Vite y Tailwind CSS.
                                    </p>
                                    <img src="/images/portada2.png" alt="portada" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    <p>
                                        Un diseño agradable y funcional.
                                    </p>
                                    <img src="/images/portada3.png" alt="portada" />
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>


                {/* Productos */}
                <div className="h-full w-full max-w-7xl mx-auto space-y-4 mt-6" id="productos">
                    <div className="rounded-lg pb-1 mb-2 bg-white">
                        <h2 className="font-michroma text-2xl font-semibold text-orange-500 mt-8 mb-2 md:text-5xl lg:text-8xl text-center underline" id="productos">
                            Productos
                        </h2>
                    </div>
                    <div className="rounded-lg shadow p-2 mt-2 bg-white">
                        <div>
                            <h3 className="font-goldman text-xl font-semibold text-orange-500  mb-4 md:text-5xl lg:text-8xl text-start underline">
                                <Link to="/moda">Moda</Link>
                            </h3>
                            <div className="flex flex-col gap-4">
                                <div>
                                    <img src="/images/moda/oferta-moda.png" alt="portada" className="w-full h-full object-cover rounded-lg shadow-lg hover:scale-105 transition-all duration-300" />
                                </div>
                                <div className="flex flex-row gap-4">
                                    <div className="w-1/2">
                                        <img src="/images/moda/moda-ninos9-16.png" alt="portada" className="w-full h-full object-cover rounded-lg shadow-lg hover:scale-105 transition-all duration-300" />
                                    </div>
                                    <div className="w-1/2">
                                        <div className="mb-4">
                                            <img src="/images/moda/moda-hombre1-1.png" alt="portada" className="w-full h-full object-cover rounded-lg shadow-lg hover:scale-105 transition-all duration-300" />
                                        </div>
                                        <div>
                                            <img src="/images/moda/moda-mujer1-1.png" alt="portada" className="w-full h-full object-cover rounded-lg shadow-lg hover:scale-105 transition-all duration-300" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="rounded-lg shadow p-2 bg-white">
                        <h3 className="font-goldman text-xl font-semibold text-orange-500 mb-4 md:text-5xl lg:text-8xl text-start underline">
                        <Link to="/accesorios">Accesorios</Link>
                        </h3>
                        <div className="flex flex-row gap-4">
                            <div className="w-1/2">
                                <div className="mb-4">
                                    <img src="/images/accesorios/accesorio-hombre1-1.png" alt="portada" className="w-full h-full object-cover rounded-lg shadow-lg hover:scale-105 transition-all duration-300" />
                                </div>
                                <div>
                                    <img src="/images/accesorios/accesorio-mujer1-1.png" alt="portada" className="w-full h-full object-cover rounded-lg shadow-lg hover:scale-105 transition-all duration-300" />
                                </div>
                            </div>
                            <div className="w-1/2">
                                <img src="/images/accesorios/oferta-accesorio9-16.png" alt="portada" className="w-full h-full object-cover rounded-lg shadow-lg hover:scale-105 transition-all duration-300" />
                            </div>
                        </div>
                    </div>

                    <div className="rounded-lg shadow p-2 mt-2 bg-white">
                        <h3 className="font-goldman text-xl font-semibold text-orange-500 mb-4 md:text-5xl lg:text-8xl text-start underline">
                        <Link to="/hogar">Hogar</Link>
                        </h3>
                        <div className="flex flex-col gap-4">
                            <div className="grid grid-cols-2 grid-rows-3 gap-4 [&>div:hover>img]:scale-105 [&>div>img]:transition-all [&>div>img]:duration-300">
                                <div className="col-span-2 shadow-black shadow-lg rounded-lg">
                                    <img src="/images/hogar/oferta-hogar.png" alt="portada" className="w-full h-full object-cover rounded-lg shadow-lg" />
                                </div>
                                <div className="row-span-2 shadow-black shadow-lg rounded-lg">
                                    <img src="/images/hogar/muebles-piscina9-16.png" alt="portada" className="w-full h-full object-cover rounded-lg" />
                                </div>
                                <div className="row-span-1 shadow-black shadow-lg rounded-lg">
                                    <img src="/images/hogar/muebles-bano1-1.png" alt="portada" className="w-full h-full object-cover rounded-lg" />
                                </div>
                                <div className="row-span-2 shadow-black shadow-lg rounded-lg">
                                    <img src="/images/hogar/muebles-oficina9-16.png" alt="portada" className="w-full h-full object-cover rounded-lg" />
                                </div>
                                <div className="row-span-1 shadow-black shadow-lg rounded-lg">
                                    <img src="/images/hogar/muebles-salon1-1.png" alt="portada" className="w-full h-full object-cover rounded-lg" />
                                </div>
                                <div className="col-span-2 shadow-black shadow-lg rounded-lg">
                                    <img src="/images/hogar/muebles-habitacion16-9.png" alt="portada" className="w-full h-full object-cover rounded-lg" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-lg shadow p-2 mt-2 bg-white">
                        <h3 className="font-goldman text-xl font-semibold text-orange-500 mb-4 md:text-5xl lg:text-8xl text-start underline">
                        <Link to="/tecnologia">Tecnología</Link>
                        </h3>
                        <div className="flex flex-col gap-4">
                            <div className="grid grid-cols-3 grid-rows-1 gap-4 [&>div:hover>img]:scale-105 [&>div>img]:transition-all [&>div>img]:duration-300">
                                <div className="col-span-3 shadow-black shadow-lg rounded-lg">
                                    <img src="/images/tecnologia/oferta-tecnologia.png" alt="portada" className="w-full h-full object-cover rounded-lg" />
                                </div>
                                <div className="row-span-2 shadow-black shadow-lg rounded-lg">
                                    <img src="/images/tecnologia/tecnologia-mobil9-16.png" alt="portada" className="w-full h-full object-cover rounded-lg" />
                                </div>
                                <div className="shadow-black shadow-lg rounded-lg">
                                    <img src="/images/tecnologia/tecnologia-consola1-1.png" alt="portada" className="w-full h-full object-cover rounded-lg" />
                                </div>
                                <div className="shadow-black shadow-lg rounded-lg">
                                    <img src="/images/tecnologia/tecnologia-portatil1-1.png" alt="portada" className="w-full h-full object-cover rounded-lg" />
                                </div>
                                <div className="col-span-2 shadow-black shadow-lg rounded-lg">
                                    <img src="/images/tecnologia/tecnologia-tv16-9.png" alt="portada" className="w-full h-full object-cover rounded-lg" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;