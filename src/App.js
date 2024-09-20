import React,{useState} from "react";

function App() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [signed, setSigned] = useState(false);
  const [message,setMessage] = useState("");
  function handleSubmit(e){
    e.preventDefault();
    
     if(userName==="user" && password==="password"){
         setMessage("Welcome, user");
     }else{
      // alert("Invalid Credentials");
      // throw new Error("Invalid Credentials");
      setMessage("Invalid username or password");
     }
     setSigned(true);
  }
  function handleInputChange(e){
      setUserName(e.target.value);
      setSigned(false);
  }
  function handlePasswordChange(e){
     setPassword(e.target.value);
     setSigned(false);
  }
  return (
    <div className="App">
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <label>Username:</label>
       <input type="text" value={userName} required onChange={handleInputChange} placeholder="username"/>
       <br></br>
       <label>Password:</label>
       <input type="password" value={password} required onChange={handlePasswordChange} placeholder="password"/>
       <br></br>
       <button type="submit">Submit</button>
      </form>
      {signed && <h1>{message}</h1>}
    </div>
  );
}

export default App;
