import { useEffect, useState } from "react";
import { fetchAllPlayers } from "../API";
import { useNavigate } from "react-router-dom";
import SinglePlayer from "./SinglePlayer";

export default function AllPlayers() {
    const [players, setPlayers] = useState([]);
    const [error, setError] = useState (null);
    const [searchParam, setSearchParam] = useState("");
    const navigate = useNavigate();

useEffect(()=> {
    async function getAllPlayers() {
        const APIResponse= await fetchAllPlayers();
        if (APIResponse.success) {
            setPlayers(APIResponse.data.players);
        } else {
            setError(APIResponse.error.message);
        }
        }
        getAllPlayers();
    }, []);

    const playersToDisplay = searchParam ? players.filter((player) =>
    player.name.toLowerCase().includes(searchParam)
    )
    : players;
    
    return (
        <>
        <div>
        <label>
            Search: {""}
            <input type="text" placeholder="Search" onChange={(e) => setSearchParam(e.target.value.toLowerCase())}/>
        </label>
        </div>

        {playersToDisplay.map((player) => {
            return <h3 key= {player.id}>{player.name}
             <button onClick={() => navigate(`/SinglePlayer/${player.id}`)}>Details</button>
             </h3>;
        })}
        </>
    );   
};


