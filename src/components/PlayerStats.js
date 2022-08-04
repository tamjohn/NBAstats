import React, { useState } from 'react';
import axios from "axios";
import PlayerDescriptionClass from './PlayerDescriptionClass';
import PlayerStatsClass from './PlayerStatsClass';
import { Link } from "react-router-dom";

function PlayerStats () {

    const [playerName, setPlayerName] = useState(null);
    const [seasonYear, setSeasonYear] = useState(null);
    const [playerStats, setPlayerStats] = useState({});
    const [playerDescription, setPlayerDescription] = useState({});
    const [isVisible, setIsVisible] = useState(false);
    
    const handleSubmit = (e) => {
      e.preventDefault();
      getPlayerId();
      getPlayerDescription();
      setIsVisible(!isVisible);
      console.log(playerName);
      console.log(seasonYear);
      console.log(playerDescription);
      console.log(playerStats);
    }
    
    const handleChange = (event) => {
      const replace = event.target.value.split(" ").join("_");
      if(replace.length > 0){
        setPlayerName(replace)
      } else {
        alert("Please type players name!")
      }
    }
    
    const handleChange2 = (event) => {
      setSeasonYear(event.target.value)
    }
    
    const getPlayerId = () => {
        axios.get(`https://www.balldontlie.io/api/v1/players?search=${playerName}`)
        .then(async res => {
          if(res.data.data[0] === undefined){
            alert("This player is either injured or hasn't played yet!")
          } else if(res.data.data.length > 1){
            alert("Pleases specify the name more!")
          } else{
            console.log(res.data.data[0].id)
            getPlayerStats(res.data.data[0].id)
            getPlayerDescription(res.data.data[0].first_name)
            setPlayerDescription(res.data.data[0])
          }
        }).catch(err => {
          console.log(err)
        })
    }
    
    const getPlayerStats = (playerId) => {
        axios.get(`https://www.balldontlie.io/api/v1/season_averages?season=${seasonYear}&player_ids[]=${playerId}`)
        .then(async res => {
          console.log(res.data.data)
          setPlayerStats(res.data.data[0])
        }).catch(err => {
          console.log(err)
        })
    }

    const getPlayerDescription = () => {
        axios.get(`https://www.balldontlie.io/api/v1/players?search=${playerName}`)
        .then(async result => {
            console.log(result.data.data)
            setPlayerDescription(result.data.data[0])
            console.log(playerDescription)
        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <div className='PlayerStatsBody'>
            <header>
                Single Player Season Statistics
            </header>
            <div className='EntryFieldContainer'>
                <form onSubmit={handleSubmit}>
                    <label className='EntryFieldLabel'>Name </label>
                        <input
                            name = "Name" 
                            type="text"
                            placeholder="Enter the player's name"
                            value={playerName}
                            onChange={handleChange}
                        />
                    <label className='EntryFieldLabel'>Season </label>
                    <input className='seasonInput'
                        name = "Season"
                        placeholder="Enter the season"
                        type="number"
                        value={seasonYear}
                        onChange={handleChange2}
                    />
                    <button className="submitButton"> GO! </button>
                </form>
                <div>
                  <Link to="/">
                  <button className="returnButton"> Return Home </button>
                  </Link>
                </div>
            </div>
            {isVisible ? <PlayerDescriptionClass
              playerDescription = {playerDescription}
              /> : null}
            {isVisible ? <PlayerStatsClass 
              playerStats = {playerStats}
              /> : null}
        </div>

    );
}


export default PlayerStats;