// Sample Playoffs Data
const playoffsData = [
  {
    round: 'Quarterfinals',
    matchups: [
      {
        team1: 'Smashing Duo',
        team2: 'Ping Masters',
        score1: 3,
        score2: 1
      },
      {
        team1: 'Spin Doctors',
        team2: 'Net Ninjas',
        score1: 2,
        score2: 3
      }
    ]
  },
  {
    round: 'Semifinals',
    matchups: [
      {
        team1: 'Smashing Duo',
        team2: 'Net Ninjas',
        score1: null,
        score2: null
      }
    ]
  },
  {
    round: 'Finals',
    matchups: [
      {
        team1: null,
        team2: null,
        score1: null,
        score2: null
      }
    ]
  }
];

// Function to display the playoffs bracket
function displayBracket(data) {
  const bracketContainer = document.getElementById('bracket');

  data.forEach((roundData) => {
    const roundDiv = document.createElement('div');
    roundDiv.className = 'round';

    const roundTitle = document.createElement('h3');
    roundTitle.innerText = roundData.round;
    roundDiv.appendChild(roundTitle);

    roundData.matchups.forEach((match) => {
      const matchupDiv = document.createElement('div');
      matchupDiv.className = 'matchup';

      const team1Div = document.createElement('div');
      team1Div.className = 'team';
      team1Div.innerHTML = `
        <span class="team-name">${match.team1 || 'TBD'}</span>
        <span class="score">${match.score1 !== null ? match.score1 : ''}</span>
      `;

      const team2Div = document.createElement('div');
      team2Div.className = 'team';
      team2Div.innerHTML = `
        <span class="team-name">${match.team2 || 'TBD'}</span>
        <span class="score">${match.score2 !== null ? match.score2 : ''}</span>
      `;

      matchupDiv.appendChild(team1Div);
      matchupDiv.appendChild(team2Div);
      roundDiv.appendChild(matchupDiv);
    });

    bracketContainer.appendChild(roundDiv);
  });
}

// Call the function to display the bracket
displayBracket(playoffsData);
