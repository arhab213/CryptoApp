import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";
import Crypto from "./component/Crypto";

function App() {
  let [data, setdata] = useState([]);

  const GetApi = async () => {
    const res = await axios.get("https://api.coincap.io/v2/assets?limit=20");
    try {
      if (!res) {
        return alert("Toujour le probleme");
      }
      setdata(res.data.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    GetApi();
  }, []);

  return (
    <>
      <div className="Stats">
        <div id="Type">Name</div>
        <div id="Rank">Rank</div>
        <div id="Symbole">Symbole</div>
        <div id="Supply">Supply</div>
        <div id="Price">Price in $</div>
      </div>
      {data
        ? data.map((e) => {
            return <Crypto elem={e} />;
          })
        : null}
    </>
  );
}

export default App;
