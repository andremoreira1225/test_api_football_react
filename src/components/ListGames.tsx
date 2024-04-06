import React, {useEffect, useState} from "react";
import Axios from "axios";

function ListGames () {

  const [games, setGames] = useState<any[]>([]);

  const fetchGames = async () => {
    const { data } = await Axios.get("https://v3.football.api-sports.io/fixtures?league=94&season=2023&date=2024-04-06", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "v3.football.api-sports.io",
		"x-rapidapi-key": "47f89c4060e1377be493baf893dcd19f"
	}
});

  const games = data["response"]
  setGames(games);
  var index = 1
  console.log(games[index].teams.home.name);
  console.log(games)

  };

  useEffect(() => {
    fetchGames();
  }, []);


  return <div>
    <ul className="list-group">
      <p>games</p>
      {games.map((game, index: number) => (
        <li key={game.teams.id} className="list-group-item">
          Casa: {(game.teams.home.name)} | Fora: {game.teams.away.name}
        </li>
      ))};  
    </ul>
  </div>;



}


export default ListGames;
