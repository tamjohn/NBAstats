import React from 'react';

function PlayerStatsClass(playerStats) {
    return (
        <div className='playerStatsContainer'>
                <table>
                    <thead>
                        <tr>
                            <th>GP</th>
                            <th>PPG</th>
                            <th>RPG</th>
                            <th>ORPG</th>
                            <th>DRPG</th>
                            <th>APG</th>
                            <th>SPG</th>
                            <th>BPG</th>
                            <th>TPG</th>
                        </tr>
                    </thead>
                    <tbody> 
                        <tr>
                            <td>{playerStats['playerStats']["games_played"]}</td>
                            <td>{playerStats['playerStats']["pts"]}</td>
                            <td>{playerStats['playerStats']["reb"]}</td>
                            <td>{playerStats['playerStats']["oreb"]}</td>
                            <td>{playerStats['playerStats']["dreb"]}</td>
                            <td>{playerStats['playerStats']["ast"]}</td>
                            <td>{playerStats['playerStats']["stl"]}</td>
                            <td>{playerStats['playerStats']["blk"]}</td>
                            <td>{playerStats['playerStats']["turnover"]}</td>
                        </tr>
                    </tbody>
                </table>
                <table>
                    <thead>
                        <tr>
                            <th>FGA</th>
                            <th>FGM</th>
                            <th>FG%</th>
                            <th>3PA</th>
                            <th>3PM</th>
                            <th>3P%</th>
                            <th>FTA</th>
                            <th>FTM</th>
                            <th>FT%</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{playerStats['playerStats']["fga"]}</td>
                            <td>{playerStats['playerStats']["fgm"]}</td>
                            <td>{playerStats['playerStats']["fg_pct"]}</td>
                            <td>{playerStats['playerStats']["fg3a"]}</td>
                            <td>{playerStats['playerStats']["fg3m"]}</td>
                            <td>{playerStats['playerStats']["fg3_pct"]}</td>
                            <td>{playerStats['playerStats']["fta"]}</td>
                            <td>{playerStats['playerStats']["ftm"]}</td>
                            <td>{playerStats['playerStats']["ft_pct"]}</td>
                        </tr>
                    </tbody>
                </table>
        </div>
    )
}

export default PlayerStatsClass;