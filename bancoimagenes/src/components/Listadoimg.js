import React from 'react';
import prod from "../assets/prod.png"
import styled from '@emotion/styled';

const Imagen = styled.img`
    height: 70%;
    width: 100%;
`
const Boton = styled.button`
    height: 60px;
    width: 300px;
    background-color: salmon;
    margin: 10px 10px;
    font-size: 20px;
    font-weight: 700;
    color: white;
`

function Listadoimg() {
    return (
        <div className="grid grid-cols-4 gap-4 mx-40 mt-10">
            <div className= "bg-gray-400 p-10">
                <Imagen src={prod} alt="" />
                <div className="grid justify-items-center mt-5">
                    <h3 className="text-center text-xl font-bold text-white">Vistas</h3>
                    <h3 className="text-center text-xl font-bold text-white">Vistas</h3>
                    <Boton>Ver Imagen</Boton>
                </div>
            </div>
            <div className= "bg-gray-400 p-10">
                <Imagen src={prod} alt="" />
                <div className="grid justify-items-center mt-5">
                    <h3 className="text-center text-xl font-bold text-white">Vistas</h3>
                    <h3 className="text-center text-xl font-bold text-white">Vistas</h3>
                    <Boton>Ver Imagen</Boton>
                </div>
            </div>
            <div className= "bg-gray-400 p-10">
                <Imagen src={prod} alt="" />
                <div className="grid justify-items-center mt-5">
                    <h3 className="text-center text-xl font-bold text-white">Vistas</h3>
                    <h3 className="text-center text-xl font-bold text-white">Vistas</h3>
                    <Boton>Ver Imagen</Boton>
                </div>
            </div>
            <div className= "bg-gray-400 p-10">
                <Imagen src={prod} alt="" />
                <div className="grid justify-items-center mt-5">
                    <h3 className="text-center text-xl font-bold text-white">Vistas</h3>
                    <h3 className="text-center text-xl font-bold text-white">Vistas</h3>
                    <Boton>Ver Imagen</Boton>
                </div>
            </div>
   
       
        </div>
    )
}

export default Listadoimg
