// Fetch and display teams
fetch('data/teams.json')
  .then(response => response.json())
  .then(teams => {
    const container = document.getElementById('teams-container');
    teams.forEach(team => {
      const teamDiv = document.createElement('div');
      teamDiv.className = 'team-card';
      teamDiv.innerHTML = `
        <img src="images/${team.logo}" alt="${team.team_name} Logo" class="team-logo">
        <h3>${team.team_name}</h3>
        <p><strong>Players:</strong> ${team.players.join(' & ')}</p>
        <p>${team.bio}</p>
      `;
      container.appendChild(teamDiv);
    });
  })
  .catch(error => console.error('Error loading teams:', error));
