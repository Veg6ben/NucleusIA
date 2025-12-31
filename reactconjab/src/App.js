import { useFormState } from 'react-dom';
import logo from './logo.svg';
import './miCss.css';
import { useState, useEffect } from 'react';

 const reyes=[
  {
      nombre:"Atanagildo",
      reinado:15,
      vacasComidas:9
  },{
      nombre:"Ervigio",
      reinado:7,
      vacasComidas:3
  },{
      nombre:"Ataúlfo",
      reinado:5,
      vacasComidas:16
  },{
      nombre:"Leovigildo",
      reinado:18,
      vacasComidas:3
  },{
      nombre:"Sisebuto",
      reinado:9,
      vacasComidas:13
  },{
      nombre:"Recesvinto",
      reinado:19,
      vacasComidas:11
  },{
      nombre:"Teodorico",
      reinado:33,
      vacasComidas:12
  }
]


//const guardar = reyes.filter(reyes=> reyes.nombre.startsWith("A")).map(rey => (
//< div key={rey.nombre}>
//<p>{rey.nombre}</p>
//</div>
//))
//{guardar.length > 0 ? guardar : <p>No se ha encontrado</p>}

//const resultado = reyes.find(e => e.nombre.substring(0,1) == 'e' || e.nombre.substring(0,1) == 'E')
//{resultado == undefined ? "No se encontro" : resultado.nombre}

export default function App() {
  //const [datos, setDatos] = useState ([]);
  const [chiste, setChiste] = useState ("")
  const sumar = (e) => {
    e.target.innerHTML++;
  }

  // const resultado = reyes.filter(e=> e.vacasComidas > 10 && e.reinado > 10).map(rey => (
  //   <div key={rey.nombre}>
  //   <p>{rey.nombre}</p>
  //   <div onClick={sumar}>0</div>
  //   </div>
  //   ))
  //    useEffect (() => {
  //     const url = "https://randomuser.me/api/?results=4"
  //     const peticion = fetch (url)
  //     peticion
  //     .then (response => response.json())
  //     .then (lectura => {
  //       lectura.results.map((persona)=> ( 
  //         setDatos((e) => (
  //           [...e,<div key={persona.email}>
  //             <div>{persona.name.first}</div>
  //             <div>{persona.name.last}</div>
  //             <div><img src={persona.picture.large} alt="foto"/></div>
  //           </div>
  //           ]

  //          )
  //         )
  //       ))

  //     })
  //     .catch (error => console.log (error))
  //   }, [])
  const pasar=() =>{
    const url = "https://api.chucknorris.io/jokes/random"
    const peticion = fetch (url)
    peticion
    .then (datos => datos.json())
    .then (lectura => {setChiste(lectura.value)})
    .catch (error => console.log (error))
  }

    useEffect (() => {
      pasar()
    },[])
    //object.value

    
  return (
    <div className="App">
     <h1>Actividad7</h1>
     {/* {resultado}
     <h1>Empleado/a del mes</h1>
      {datos} */}
      {chiste}
      <button onClick={pasar}>Otro Chis</button>
    </div>
  );
}


    
