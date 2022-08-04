import React from 'react';


function PlayerDescriptionClass(playerDescription) {
    console.log(playerDescription)
    return (
        <div className='playerDescriptionContainer'>
                <label className='playerCardHeader'>
                    Player Card
                </label>
                <div className='playerCardStats'>
                    <div className='column'> Name: {playerDescription['playerDescription']['first_name']} {playerDescription['playerDescription']['last_name']} </div>
                    <div className='column'> Height: {playerDescription['playerDescription']['height_feet']}'{playerDescription['playerDescription']['height_inches']} </div>
                    <div className='column'> Weight: {playerDescription['playerDescription']['weight_pounds']}</div>
                    <div className='column'> Position: {playerDescription['playerDescription']['position']}</div>
                </div>
        </div> 
    )
};

export default PlayerDescriptionClass;