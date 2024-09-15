// Fetch results data
fetch('data/results.json')
  .then(response => response.json())
  .then(results => {
    calculateStatistics(results);
  })
  .catch(error => console.error('Error loading results:', error));

// Function to calculate and display statistics
function calculateStatistics(results) {
  const statisticsContainer = document.getElementById('statistics-container');

  // Calculate average points lost per team
  const teamStats = {};

  results.forEach(match => {
    // Update stats for team1
    if (!teamStats[match.team1]) {
      teamStats[match.team1] = { pointsLost: 0, matches: 0 };
    }
    teamStats[match.team1].pointsLost += match.score2;
    teamStats[match.team1].matches += 1;

    // Update stats for team2
    if (!teamStats[match.team2]) {
      teamStats[match.team2] = { pointsLost: 0, matches: 0 };
    }
    teamStats[match.team2].pointsLost += match.score1;
    teamStats[match.team2].matches += 1;
  });

  // Calculate average points lost
  const teams = Object.keys(teamStats);
  teams.forEach(team => {
    teamStats[team].averagePointsLost = (teamStats[team].pointsLost / teamStats[team].matches).toFixed(2);
  });

  // Find team with least average points lost
  teams.sort((a, b) => teamStats[a].averagePointsLost - teamStats[b].averagePointsLost);
  const bestDefensiveTeam = teams[0];

  // Display statistics
  const statsDiv = document.createElement('div');
  statsDiv.className = 'stats';

  statsDiv.innerHTML = `
    <h3>Team with Least Average Points Lost</h3>
    <p><strong>${bestDefensiveTeam}</strong> with an average of ${teamStats[bestDefensiveTeam].averagePointsLost} points lost per match.</p>
  `;

  statisticsContainer.appendChild(statsDiv);
}
