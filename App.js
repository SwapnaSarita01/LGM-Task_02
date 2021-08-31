import './style.css';
import React, { useState } from "react";




function App() {
  const [users, setUsers] = useState();
  const loadUsers = async () => {
    const response = await fetch("https://reqres.in/api/users?");
    const jsonresponse = await response.json();
    setUsers(jsonresponse.data);
  };

  return (
    <>
      <header className="navbar">
        <h1 className="adv">
          ADVENTURE
        </h1>
        <button class="botton" onClick={loadUsers}>
          GET USERS

        </button>
        
      </header>
      <div className="mainpage"><h2 className="thanku">....I am really grateful for this opportunity....</h2>
        {users?.map((current, index) => {
          return ( 
          
          
            <div className="columnpage" key={index}>
             
              <img src={current.avatar} className="card-img-top" alt="..." />
              <div className="card-body">
                <h3 className="card-name">
                  {current.first_name} {current.last_name}
                </h3>
                <h4 className="card-email">{current.email}</h4>
              </div>
            </div>
          );
        })}
      </div>
      
    </>
  );
}

export default App;
