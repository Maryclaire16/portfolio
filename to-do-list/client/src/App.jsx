import axios from "axios";
import { useState } from "react"
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPAssword] = useState('');

  const [showError, setShowError] = useState(false);

  const handleLogin = async () => {
    console.log(username, password);
    await axios.post('http://localhost:3000/check-user', { username, password })
      .then((response) => {
        if(response.data.exist){
          setShowError(false);
          navigate('/todo');
        }

        else {
          setShowError(true);
        }
      });
  }



  return (
    <>
      <div className="w-screen h-screen flex justify-center items-center bg-blue-400">

        <div className="w-xl h-[500px] bg-cyan-300 flex flex-col justify-center p-5 gap-1 rounded-4xl"
          style={{
            backgroundImage: "url('/cc.jpg')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat",}}>
          <h1 className="text-5xl mx-5 py-5 text-center font-bold text-pink-500">SOAH MANEN!!!</h1>


          {
            showError &&
          <div className="bg-red-200 text-red-500 p-3 rounded-lg font-medium">Invalid username or password!</div>
          }


          <div className="flex flex-col">
            <label htmlFor="username ">USERNAME:</label>
            <input type="text" className="outline text-white font-medium" onChange={(e) => setUsername(e.target.value)} />
          </div>

          <div className="flex flex-col">
            <label htmlFor="password">PASSWORD:</label>
            <input type="password" className="outline text-white font-medium" onChange={(e) => setPAssword(e.target.value)} />
          </div>
          <button type="button" onClick={handleLogin} className="bg-blue-400 text-white py-3 font-medium text-xl">LOGIN</button>
        </div>
      </div>
    </>
  )
}

export default App