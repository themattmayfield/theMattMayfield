import { fetchGitHubContributions } from '../../lib/github-contributions.js';

export const renderGithubContributions = async () => {
  const contributionsSVG = await fetchGitHubContributions('themattmayfield');
  
  return `
    <div class="github-contributions-container mb-6">
      <div class="contributions-chart">
        ${contributionsSVG}
      </div>
      <style>
        .contributions-chart {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          min-height: 100px;
          overflow-x: auto;
          overflow-y: hidden;
        }
        .contributions-chart svg {
          min-width: 700px;
          height: auto;
          flex-shrink: 0;
        }
        
        @media (min-width: 768px) {
          .contributions-chart {
            overflow-x: visible;
          }
          .contributions-chart svg {
            min-width: auto;
            max-width: 100%;
            flex-shrink: 1;
          }
        }
      </style>
    </div>
  `;
};

