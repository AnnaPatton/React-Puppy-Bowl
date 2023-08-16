import { useState, useEffect } from "react";
import { fetchSinglePlayer } from "../API";
import { useParams } from "react-router-dom";

const SinglePlayer = () => {
    const[player,setPlayer]=useState("");
    const[error,setError]=useState(null);
    const { id }=useParams();
    // console.log(player)
    
    useEffect(() => {
        async function GetSinglePlayer() {
            try {  
                const response = await fetchSinglePlayer(id);
                // removed () that makes it a function and changed it to just player
                const result = await response.data.player;
                setPlayer(result);
            } catch (error) {
                console.error(error.message);
            }
        }
        GetSinglePlayer()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[id]);

    return (
        <div>
            <h2>Additional Info</h2>
            <img src={player.imageUrl}/>
            <p>ID: {player.id}</p>
            <p>Name: {player.name}</p>
            <p>Breed: {player.breed}</p>
            <p>Status: {player.status}</p>
            <p>Team ID: {player.teamId}</p>
        </div>
    );
};

export default SinglePlayer;