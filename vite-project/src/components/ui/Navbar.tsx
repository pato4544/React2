import React from 'react'

const Navbar = () => {
    return (
        <div>
            <nav className="fixed w-full bg-black p-4 flex justify-between">

                <div className="text-white h-[19] overflow-hidden">
                    <img  className="size-20" src="https://th.bing.com/th/id/OIP.eKf--08jEc5GpvjzhtULmAHaEK?rs=1&pid=ImgDetMain" alt="" />
                </div>

                <div className="flex justify-around w-1/2">
                    <button className="text-white">Noticias </button>
                    <button className="text-white">Tienda</button>
                    <button className="text-white">Contacto</button>
                </div>

            </nav>
        </div>
    )
}

export default Navbar