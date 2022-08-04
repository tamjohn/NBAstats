import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import {Link} from 'react-router-dom';

function LandingPage() {
  return (
    <body class='LandingPageBody'>
        <div className='landingContainer'>
            <div className="NBALogo">
                <img src='https://teamworxteambuilding.com/wp-content/uploads/2018/08/nba-logo-72dpi.jpg'
                    style={{
                        height: '17vh',
                        width: '32vh',
                }}/>
            </div>
            <h1 className="WelcomeText">
                Welcome to the NBA stats generator
            </h1>
            <p className="WelcomeMessage">
                You can use this website to retrieve advanced basketball statistics of any NBA player for any active season they were in the NBA, compare the statistics of two NBA players, and retrieve box scores from a particular game.
                To begin, click on one of the two options below:
            </p>
            <div className="ButtonContainer">
                <Stack direction="row" spacing={3}>
                    <Link to='PlayerStats'>
                        <Button variant="contained" sx={{width:150, height: 55,}}>
                            Player Stats
                        </Button>
                    </Link>
                    <Button variant="contained" sx={{width:150, height: 55,}}>
                        Box scores
                    </Button>
                    <Button variant="contained" sx={{width:175, height: 55,}}>
                        Player vs Player
                    </Button>
                </Stack>
            </div>
        </div>
    </body>
  )
}

export default LandingPage;