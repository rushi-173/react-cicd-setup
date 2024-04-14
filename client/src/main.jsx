import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

const App = () => {
  const [st, setSt] = useState("hello")
  useEffect(()=>{
fetch("http://localhost:5000/").then(res=>res.json()).then((res)=>{
  console.log(res)
  setSt(res?.text)
}).catch(err=>{
  setSt("Error occured in backend")
  console.log("error ", err)
});

  },[])
  return(
    <div>
      <h1>Hello WOrld</h1>
      <h1>{st}</h1>
    </div>
  )
}


ReactDOM.createRoot(document.getElementById("root")).render(
 <App />
);
