// import React, { useState } from "react";
// import Card from "./components/Card";

// const App = () => {
//   const [jock, setJocks] = useState([]);

//  console.log(jock);

//  const generateJock = (e) => {
//   e.preventDefault();
//   setJocks();
//  }

//   return (
    // <div className="flex justify-center item-center">
    //   <div className="flex flex-col justify-center item-center h-screen">
    //     <input
    //       className="border-2 p-10 mb-5 text-center rounded-sm"
    //       type="text"
    //       placeholder="Here is the jock"
    //       value={jock}
    //     />
    //     <button onClick={generateJock} className="border-2 py-2 px-4 hover:bg-black hover:text-white rounded-2xl">
    //       Generate Jock
    //     </button>
    //   </div>
    // </div>
//   );
// };
// <Card />;

// export default App;

import React from 'react'
import Card from './components/Card'
import { useState } from "react";

function App () {
  const [jock, setJocks] = useState([]);

  const generateJock = (e)=> {
    e.preventDefault();
    console.log(jock);
  }
  return (
    <>
    <div className="flex justify-center item-center">
      <div className="flex flex-col justify-center item-center h-screen">
        <input
          className="border-2 p-10 mb-5 text-center rounded-sm"
          type="text"
          placeholder="Here is the jock"
          value={jock}
        />
        <button onClick={generateJock} className="border-2 py-2 px-4 hover:bg-black hover:text-white rounded-2xl">
          Generate Jock
        </button>
      </div>
      <div>
        {jock.map(setJocks)}
      </div>
    </div>
    <Card/>
    </>
  );
}

export default App;