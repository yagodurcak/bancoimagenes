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

function Listadoimg({rtdo}) {

  
    return (
        <div className="grid grid-cols-4 gap-4 mx-40 mt-10">
            {rtdo.map(casa => (  <div className= "bg-gray-400 p-10" key={rtdo.id}>
                <Imagen src={casa.previewURL} alt="" />
                <div className="grid justify-items-center mt-5">
                    <h3 className="text-center text-xl font-bold text-white">Previews: {casa.previewWidth}</h3>
                    <h3 className="text-center text-xl font-bold text-white">Likes: {casa.likes}</h3>
                    <Boton><a  href={casa.largeImageURL} target="_blank" rel="noopener noreferrer">Ver Imagen</a></Boton>
                </div>
            </div>))}
          
             
       
        </div>
    )
}

export default Listadoimg
