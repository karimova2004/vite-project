// import React, { Component } from "react";
// import Transaction from "./Transaction";

// class App extends Component{
//   render(){
//   <div>
//     <Transaction />

//   </div>
//   }
// }

// export default App;




// siyahilarin deyisdirlmesi


import React, { useState, useEffect } from "react";
import Filter from "./Filter";
import "./index.css"; 

const App = () => {
  const [employees, setEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [department, setDepartment] = useState("All");

  useEffect(() => {
    fetch("https://5ea5ca472d86f00016b4626d.mockapi.io/brotherhood")
      .then((response) => response.json())
      .then((data) => setEmployees(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="container">
      <h1>İşçilər Siyahısı</h1>
      <Filter
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        department={department}
        onDepartmentChange={setDepartment}
        employees={employees}
      />
    </div>
  );
};

export default App;

