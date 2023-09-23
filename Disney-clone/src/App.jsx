import "./App.css";
import GenreMovieList from "./Components/GenreMovieList";
import Header from "./Components/Header";
import ProductionHouse from "./Components/ProductionHouse";
import Slider from "./Components/Slider";
import { useState, useEffect } from "react";
import HashLoader from  "react-spinners/HashLoader";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 6000);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <div>
          <HashLoader className="loader"
          color={"#ffffff"}
          loading={loading}
          size={70}
          style={{width:"100%",height:"100vh"}}
        />
        <h1 className=" flex text-center justify-center absolute left-[726px] top-[420px] pt-6 font-bold text-3xl text-white  ">Disney</h1>
        </div>
      ) : (
        <div>
          <Header />
          <Slider />
          <ProductionHouse />

          <GenreMovieList />
        </div>
      )}
    </div>
  );
}

export default App;
