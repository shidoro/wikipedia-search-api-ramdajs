import { path } from 'ramda';

export const displayResult = ({ content_urls, displaytitle, extract_html }) => `
    <div class="card">
        <div class="card-body">
            <h5 class="card-title">${displaytitle}</h5>
            <p class="card-text">${extract_html}</p>
            <a href=${path(
              ['desktop', 'page'],
              content_urls
            )} target="_blank" class="card-link">Read on Wikipedia</a>
        </div>
    </div>
`;

export const displayNoResult = ({ detail }) => `
    <h2 class="h2 text-danger">${detail}</h2>
`;
