// Fetch and display fixtures
fetch('data/fixtures.json')
  .then(response => response.json())
  .then(fixtures => {
    const container = document.getElementById('fixtures-container');
    fixtures.forEach(match => {
      const matchDiv = document.createElement('div');
      matchDiv.className = 'match-card';
      matchDiv.innerHTML = `
        <h3>${match.team1} <span>vs</span> ${match.team2}</h3>
        <p><strong>Date:</strong> ${match.date} | <strong>Time:</strong> ${match.time}</p>
        <p><strong>Location:</strong> ${match.location}</p>
      `;
      container.appendChild(matchDiv);
    });
  })
  .catch(error => console.error('Error loading fixtures:', error));
