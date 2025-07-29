import React from "react";

function Tecnologia(){
    return(
        <div className="min-h-screen bg-gray-100">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <h3 className="font-viga text-3xl font-bold text-orange-500 sm:text-4xl md:text-5xl lg:text-6xl text-center mb-8">
                    Top Categorías en Tecnología
                </h3>
                <p className="text-gray-600 text-center text-lg md:text-xl mb-8">
                    Descubre lo último en tecnología
                </p>

                <div className="bg-white rounded-2xl shadow-lg p-6">
                    <p className="font-michroma text-2xl font-semibold text-orange-500 mb-6 text-center">
                        Próximamente
                    </p>
                    <p className="text-gray-600 text-center">
                        Aquí irá el contenido de la página de Tecnología
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Tecnologia;