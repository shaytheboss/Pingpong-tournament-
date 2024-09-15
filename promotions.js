// Fetch and display promotions
fetch('data/promotions.json')
  .then(response => response.json())
  .then(promotions => {
    const container = document.getElementById('promotions-container');
    promotions.forEach(promo => {
      const promoDiv = document.createElement('div');
      promoDiv.className = 'promotion-card';
      promoDiv.innerHTML = `
        <a href="${promo.link}">
          <img src="images/${promo.image}" alt="Promotion" class="promo-image">
          <p>${promo.text}</p>
        </a>
      `;
      container.appendChild(promoDiv);
    });
  })
  .catch(error => console.error('Error loading promotions:', error));
