import React, {useEffect, useState} from "react";
import Axios from "axios";

function ListGames () {

  const [games, setGames] = useState([]);

  const fetchGames = async () => {
    const { data } = await Axios.get("https://v3.football.api-sports.io/fixtures?league=94&season=2023&date=2024-03-30", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "v3.football.api-sports.io",
		"x-rapidapi-key": "47f89c4060e1377be493baf893dcd19f"
	}
});

  const games = data["response"]
  setGames(games);
  console.log(games['1'].teams.home.name);

  };

  useEffect(() => {
    fetchGames();
  }, []);


  return <div>
    <ul className="list-group">
      <p>games</p>
      {games.map((game) => (
        <li  className="list-group-item">
          Casa: {game.fixtures}
        </li>
      ))};  
    </ul>
  </div>;



}


export default ListGames;
