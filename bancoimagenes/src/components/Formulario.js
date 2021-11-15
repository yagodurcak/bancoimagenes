import React, {useState} from 'react'

import styled from '@emotion/styled';

const Input = styled.input`
width: 600px;
height: 50px;
border-radius: 30px;
`
const Boton = styled.button`
width: 200px;
height: 50px;
background-color: gray;
border-radius: 30px;
margin-left: 30px;
color: white;
font-size: 30px;

`
const InputContainer = styled.div`
  background-color: coral;
  height: fit-content;
  width: 100%;
  display: flex;
  
  align-items: center;
  justify-content: space-around;
  
`

function Formulario({setBusqueda}) {
    const [palabra, setPalabra] = useState("");
    const [error, setError] = useState(false)

    const guardarBusqueda = e => {
         e.preventDefault();
        if (palabra.trim() === "") {
            setError(true);
            return
        }else {
            setError(false);
            console.log("lleno");
            setBusqueda(palabra)
            setPalabra("")
        }
    }
    

    return (
        <div>
                   {error ?  <div className="bg-red-600 m-4 ">
                       <h2 className=" text-center text-xl p-6 text-white">Complete el apartado</h2>
                   </div> : null}
            <form  onSubmit= {guardarBusqueda} >
                <InputContainer>                               
                    <Input type="text" value={palabra} onChange={(e)=> setPalabra(e.target.value)}/>
                    <Boton type="submit">Buscar</Boton>
                </InputContainer>
            </form>
            
        </div>
    )
}

export default Formulario
