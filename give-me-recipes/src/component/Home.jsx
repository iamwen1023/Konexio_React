import React, {useEffect, useState } from 'react'

function Home() {
    const[id, setId] = useState(1)
    const [name, setName] = useState("")
    const [height, setHeight] = useState("")
    const [weight, setWeight] = useState("")
    const [type, setType] = useState([])
    function randomNumber() {
        let num = Math.floor(Math.random() * 100) + 1 
        setId(num)
      }
    useEffect( () => {
        async function fetchData() {
        console.log("i click :", id);
        try{
          let url = 'https://pokeapi.co/api/v2/pokemon/' + id;
          const link = await fetch(url)
          const result =  await link.json()
          let arr = [];
          result.types.map(x => arr.push(x.type.name));
          setName(result.name)
          setHeight(result.height)
          setWeight(result.weight)
          setType(arr.join(" "))
          //console.log(this.state);
        }catch(error){
          console.error(error)
        }
    }
    fetchData();
    }, [id])

  return (
    <div className="container" >
        <div className="row justify-content-md-center">
        <button onClick= {randomNumber}>Get a Pokeman</button>
        <br />
        <div className="row justify-content-md-center">
            <h6>Name: {name}</h6>
            <h6>Height: {height}</h6>
            <h6>Weight: {weight}</h6>
            <h6>Type: {type}</h6>
        </div>
        </div>
    </div>
  );
}

export default Home;
