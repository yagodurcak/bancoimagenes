import './App.css';

import React, {useState} from 'react';

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

function App() {

  const [busqueda, setBusqueda] = useState("");
  console.log(busqueda);
  return (
    <div>
      <Container>
        <div>
         <Title className="title text-white text-center">Buscador de Imagenes</Title>
          <Formulario setBusqueda={setBusqueda}/>
        </div>
      </Container>
        <Listadoimg/>
    </div>
  );
}

export default App;
