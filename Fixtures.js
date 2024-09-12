// Fetch and display fixtures
fetch('data/fixtures.json')
  .then(response => response.json())
  .then(fixtures => {
    const container = document.getElementById('fixtures-container');
    fixtures.forEach(match => {
      const matchDiv = document.createElement('div');
      matchDiv.className = 'match';
      matchDiv.innerHTML = `
        <h4>${match.team1} vs ${match.team2}</h4>
        <p>Date: ${match.date} | Time: ${match.time}</p>
        <p>Location: ${match.location}</p>
      `;
      container.appendChild(matchDiv);
    });
  })
  .catch(error => console.error('Error loading fixtures:', error));

// Fetch and display results (if on the same page)
fetch('data/results.json')
  .then(response => response.json())
  .then(results => {
    // Code to display results
  })
  .catch(error => console.error('Error loading results:', error));
