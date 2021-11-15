import './App.css';

import React, {useEffect, useState} from 'react';

import Formulario from './components/Formulario';
import Listadoimg from './components/Listadoimg';
import styled from '@emotion/styled';

const Container = styled.div`
  background-color: coral;
  height: 400px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  
`
const Title = styled.h1`
font-size: 90px;
margin-bottom  : 50px;
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

function App() {

  const [busqueda, setBusqueda] = useState("");
  const [rtdo, setRtdo] = useState([])
  const [pagActual, setPagActual] = useState(1);
  const [totalPaginas, setTotalPaginas] = useState(1);

  useEffect(() => {
    const Apirtdo = async () => {
      if (busqueda === "") return;

      const imgporpag = 20;
      const key = "23281847-15060561ca46cab48b434ee84"
      const apiUrl= `https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page=${imgporpag}&page=${pagActual}`

      const respuesta = await fetch(apiUrl);
      const respuesta2 = await respuesta.json();
      setRtdo(respuesta2.hits)

      // contando cantidad de paginas a mostrar 

      const totalPag = Math.ceil(respuesta2.totalHits / imgporpag);
      setTotalPaginas(totalPag)

      // mover pantalla hacia arriba
      const jumbotron = document.querySelector('.jumbotron');
      jumbotron.scrollIntoView({ behavior: 'smooth' })
     
    };
    Apirtdo()
  }, [busqueda, pagActual]);

  const PaginaAnterior = () => {
    
    if (pagActual > 1) {
      const nuevaPagActual = pagActual - 1 ;
    setPagActual(nuevaPagActual)
    }
  }

  const PaginaPosterior = () => {

    if (totalPaginas > pagActual) {
      
      const nuevaPagActual = pagActual + 1 ;
      setPagActual(nuevaPagActual)
    }
  }
  
  

  return (
    <div>
      <Container className="jumbotron">
        <div>
         <Title className="title text-white text-center">Buscador de Imagenes</Title>
          <Formulario setBusqueda={setBusqueda}/>
        </div>
      </Container>
      
        <Listadoimg rtdo={rtdo}/>


        <div className= "flex justify-center mt-20">
        {(pagActual === 1)  ? null : (<Boton onClick={PaginaAnterior}>&laquo; Anterior </Boton>)}
        {(pagActual === totalPaginas)  ? null : (<Boton onClick={PaginaPosterior}>Siguiente &raquo;</Boton>) }
          
          
        </div>
        
    </div>
  );
}

export default App;
