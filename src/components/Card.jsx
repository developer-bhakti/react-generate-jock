import React, { useEffect, useState } from 'react'

const Card = () => {
    const [data, setData] = useState([]);

    const api = "https://official-joke-api.appspot.com/random_joke";
     
    useEffect(()=> {
      const fetchData = async () => {
        const response = await fetch(api);
        const data = await response.json();
        console.log(data);
        setData(data);
      };

      fetchData();
    },[]);


    return (
        <div>
            
            {data.map((data,index)=> {
                return (
                    <>
                    <div key={index}>
                        <p>{data.type}</p>
                        <p>{data.setup}</p>
                        <p>{data.punchline}</p>
                    </div>
                    </>
                )
            })}
        </div>
      )
}

export default Card;