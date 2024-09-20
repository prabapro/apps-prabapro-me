import { pushToDataLayer } from '../utils/analytics.js';

const profile_github = 'https://github.com/prabapro';
const profile_linkedin = 'https://linkedin.com/in/prabaponnambalam';
const profile_twitter = 'https://twitter.com/prabapro';
const profile_medium = 'https://prabapro.me';
const profile_stackoverflow =
	'https://stackoverflow.com/users/3892603/praba-ponnambalam'; // Replace with your actual Stack Overflow profile URL

export function Header() {
	const headerHTML = `
    <div class="container">
      <div class="row">
        <div class="col-md-8 offset-md-2">
          <nav class="navbar navbar-expand-lg py-3 mb-4 border-bottom">
            <div class="container-fluid px-0">
              <a class="navbar-brand d-flex align-items-center" href="/">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-leaf me-2">
                  <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" fill="#4CAF50" stroke="#45a049"/>
                  <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" stroke="#45a049"/>
                </svg>
                <span>Praba's Apps</span>
              </a>
              <div class="navbar-nav ms-auto d-flex flex-row">
                <a class="nav-link px-2" href="${profile_github}" target="_blank" rel="noopener noreferrer" data-bs-toggle="tooltip" data-bs-placement="bottom" title="GitHub" data-nav-item="github">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                </a>
                <a class="nav-link px-2" href="${profile_linkedin}" target="_blank" rel="noopener noreferrer" data-bs-toggle="tooltip" data-bs-placement="bottom" title="LinkedIn" data-nav-item="linkedin">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                </a>
                <a class="nav-link px-2" href="${profile_twitter}" target="_blank" rel="noopener noreferrer" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Twitter" data-nav-item="twitter">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                </a>
                <a class="nav-link px-2" href="${profile_stackoverflow}" target="_blank" rel="noopener noreferrer" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Stack Overflow" data-nav-item="stackoverflow">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-layers">
                    <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/>
                    <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/>
                    <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/>
                  </svg>
                </a>
                <a class="nav-link px-2" href="${profile_medium}" target="_blank" rel="noopener noreferrer" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Medium" data-nav-item="medium">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-book-open"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
    `;

	return headerHTML;
}

export function setupHeaderEventListeners() {
	const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
	navLinks.forEach((link) => {
		link.addEventListener('click', (e) => {
			const navItem = e.currentTarget.getAttribute('data-nav-item');
			pushToDataLayer('nav_item_clicked', {
				nav_item: navItem,
				link_url: e.currentTarget.href,
			});
		});
	});
}
