// /src/components/Header.js
import { pushToDataLayer } from '../utils/analytics.js';

const profile_github = 'https://github.com/prabapro';
const profile_linkedin = 'https://linkedin.com/in/prabaponnambalam';
const profile_twitter = 'https://twitter.com/prabapro';
const profile_medium = 'https://prabapro.me';
const profile_stackoverflow =
	'https://stackoverflow.com/users/3892603/praba-ponnambalam';

export const Header = () => {
	const headerHTML = `
    <header class="sticky-top">
      <nav class="navbar navbar-expand-lg py-3 mb-4 nav-border bg-white">
        <div class="container">
          <div class="row w-100">
            <div class="col-md-8 offset-md-2">
              <div class="d-flex justify-content-between align-items-center w-100">
                <a class="navbar-brand d-flex align-items-center" href="/">
                  <i class="bi bi-tree-fill me-2" style="color: #4CAF50; font-size: 1.5rem;"></i>
                  <span>Praba's Apps</span>
                </a>
                <div class="navbar-nav d-flex flex-row">
                  <a class="nav-link px-2" href="${profile_github}" target="_blank" rel="noopener noreferrer" data-bs-toggle="tooltip" data-bs-placement="bottom" title="GitHub" data-nav-item="github">
                    <i class="bi bi-github"></i>
                  </a>
                  <a class="nav-link px-2" href="${profile_linkedin}" target="_blank" rel="noopener noreferrer" data-bs-toggle="tooltip" data-bs-placement="bottom" title="LinkedIn" data-nav-item="linkedin">
                    <i class="bi bi-linkedin"></i>
                  </a>
                  <a class="nav-link px-2" href="${profile_twitter}" target="_blank" rel="noopener noreferrer" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Twitter X" data-nav-item="twitter">
                    <i class="bi bi-twitter-x"></i>
                  </a>
                  <a class="nav-link px-2" href="${profile_stackoverflow}" target="_blank" rel="noopener noreferrer" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Stack Overflow" data-nav-item="stackoverflow">
                    <i class="bi bi-stack-overflow"></i>
                  </a>
                  <a class="nav-link px-2" href="${profile_medium}" target="_blank" rel="noopener noreferrer" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Medium" data-nav-item="medium">
                    <i class="bi bi-medium"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  `;

	return headerHTML;
};

export const setupHeaderEventListeners = () => {
	const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
	navLinks.forEach((link) => {
		link.addEventListener('click', (e) => {
			const navItem = e.currentTarget.getAttribute('data-nav-item');
			pushToDataLayer('nav_item_clicked', {
				nav_item: navItem,
				link_url: e.currentTarget.href,
				nav_position: 'header',
			});
		});
	});
};
