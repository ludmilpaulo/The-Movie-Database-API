import React, {useEffect, useState} from 'react';
import axios from "axios";

function App() {

  const API_CALL="https://api.themoviedb.org/3/movie/popular?";
  const API_KEY="6802651e847439a9b1d064176b06c639";

  const [movies, setMovies] = useState<string>("");

  

  const getMovies = async () => {
    const res = await axios
      .get(
        API_CALL,
        {
          headers: {
            api_key: `${API_KEY}`,
          },
        }
      )
      .then((res) => {
        setMovies(res);
      })
      .catch((error:any) => {
        console.error(error);
      });
    return res;
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
  <div className="App">
  <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    </div>
  );
}

export default App;
