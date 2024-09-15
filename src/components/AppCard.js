import { pushToDataLayer } from '../utils/analytics.js';

export function AppCard(app) {
	const card = document.createElement('div');
	card.className = 'card h-100 clickable-card';
	card.innerHTML = `
    <img src="${app.logo}" class="card-img-top" alt="${app.name} logo">
    <div class="card-body d-flex flex-column">
      <h5 class="card-title">${app.name}</h5>
      <p class="card-text flex-grow-1">${app.description}</p>
      <div class="mt-auto">
        <span class="badge bg-primary">${app.type}</span>
      </div>
    </div>
  `;

	card.addEventListener('click', (e) => {
		e.preventDefault();
		window.history.pushState({}, '', `/${app.slug}`);
		handleRoute();
		pushToDataLayer('app_card_clicked', {
			app_name: app.name,
			app_slug: app.slug,
		});
	});

	return card;
}
