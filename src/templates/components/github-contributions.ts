import { fetchGitHubContributions } from '../../lib/github-contributions.js';

export const renderGithubContributions = async () => {
  const contributionsData = await fetchGitHubContributions('themattmayfield');

  return `
    <div class="github-contributions-container mb-6">
      <div class="contributions-chart">
        <div class="contributions-wrapper">
          ${contributionsData.svg}
        </div>
        ${contributionsData.stats}
      </div>
      <style>
        .contributions-chart {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 8px;
        }
        .contributions-wrapper {
          overflow-x: auto;
          overflow-y: hidden;
          width: 100%;
          max-width: 100%;
        }
        .contributions-wrapper svg {
          min-width: 700px;
          height: auto;
          flex-shrink: 0;
        }
        .contributions-stats {
          margin-top: 8px;
        }
        .contributions-count {
          font-size: 12px;
          color: #8b949e;
          font-family: monospace;
        }
        
        @media (min-width: 768px) {
          .contributions-wrapper {
            overflow-x: visible;
          }
          .contributions-wrapper svg {
            min-width: auto;
            max-width: 100%;
            flex-shrink: 1;
          }
        }
      </style>
    </div>
  `;
};
