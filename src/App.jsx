import {useState} from 'react'

function App() {
  let [counter, setcoutner] = useState(0)

  const conting = 0
  if(counter >= 10){
    console.log("That it")
    setcoutner(9)
  }

  if(counter < 0){
    console.log('Zero is end number')
    setcoutner(0)
  }

  function count(){
    setcoutner(counter+1);
    conting + 1;

  }

  function de_count(){
    setcoutner(counter-1)

  }


  return (
    <>
    <div className="bg-gray-500 m-3 p-3 rounded-xl text-center">
      <div>
      <h1 className="text-center text-xl font-bold">Copy Your Password</h1>
      <br />

      <input 
      className="rounded-xl "
      type="text" 
     />

     <br />

     <h1 className="font-extrabold text-2xl">Counter: {counter}</h1>

     <br />
     <br />

     <button className=" bg-black text-white rounded-xl p-3" onClick={count}>Increasing</button>
     <br />
     <br />
     <button className=" bg-red-500 text-white rounded-xl p-3 " onClick={de_count}>decreasing</button>

      </div>

    </div>

    </>
  )
}

export default App;