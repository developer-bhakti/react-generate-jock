import React, { useEffect, useState } from "react";

const Card = () => {
  // madam jo data aa raha hai vo array hai kai ?
  // hook
  const [data, setData] = useState();

  const api = "https://official-joke-api.appspot.com/random_joke";

  const fetchData = async () => {
    const response = await fetch(api);
    const data = await response.json();
    console.log(data);
    // api ne data dal diya data
    setData(data);
  };

  // compoent mount hota hai to useEffe
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-screen gap-4">
      <div className="border-2 p-20">
        {" "}
        <div className="mb-10">
          {data && (
            <>
              <p>Setup : {data.setup}</p>
              <p>Punchline : {data.punchline}</p>
            </>
          )}
          <p className="border-2 p-10 rounded-2xl mt-5">Loading ..... </p>
        </div>
        <button
          onClick={() => fetchData()}
          className="border-2 py-2 px-4 hover:bg-black hover:text-white rounded-2xl"
        >
          Generate Jock
        </button>
      </div>
    </div>
  );
};

export default Card;
