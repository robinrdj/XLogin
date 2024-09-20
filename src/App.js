import React,{useState} from "react";

function App() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [signed, setSigned] = useState(false);
  function handleSubmit(e){
    e.preventDefault();
     if(userName=="user" && password=="password"){
      setSigned(true);
     }
  }
  function handleInputChange(e){
      setUserName(e.target.value);
  }
  function handlePasswordChange(e){
     setPassword(e.target.value);
  }
  return (
    <div className="App">
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <label>Username:</label>
       <input type="text" value={userName} required onChange={handleInputChange} placeholder="username"/>
       <br></br>
       <label>Password:</label>
       <input type="text" value={password} required onChange={handlePasswordChange} placeholder="password"/>
       <br></br>
       <button type="submit">Submit</button>
      </form>
      {signed && <h1>"Welcome, user" </h1>}
    </div>
  );
}

export default App;
