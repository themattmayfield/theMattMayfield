interface ContributionDay {
  date: string;
  contributionCount: number;
  color: string;
}

interface ContributionWeek {
  contributionDays: ContributionDay[];
}

interface ContributionsData {
  weeks: ContributionWeek[];
}

interface GitHubContributionDay {
  contributionCount: number;
  date: string;
}

interface GitHubContributionWeek {
  contributionDays: GitHubContributionDay[];
}

interface GitHubContributionsResponse {
  data: {
    user: {
      contributionsCollection: {
        contributionCalendar: {
          weeks: GitHubContributionWeek[];
        };
      };
    };
  };
}

// GitHub's dark theme colors
const GITHUB_COLORS = {
  background: '#161b22',
  border: '#21262d',
  text: '#8b949e',
  levels: [
    '#161b22', // 0 contributions
    '#0e4429', // 1-3 contributions
    '#006d32', // 4-6 contributions
    '#26a641', // 7-9 contributions
    '#39d353', // 10+ contributions
  ],
};

function getContributionLevel(count: number): number {
  if (count === 0) return 0;
  if (count <= 3) return 1;
  if (count <= 6) return 2;
  if (count <= 9) return 3;
  return 4;
}

export async function fetchGitHubContributions(
  username: string
): Promise<{ svg: string; stats: string }> {
  try {
    const token = process.env.GITHUB_PAT;
    if (!token) {
      console.warn(
        'GITHUB_PAT environment variable not found, using mock data'
      );
      const mockData = generateMockContributions();
      return generateContributionsWithStats(mockData);
    }

    const contributionsData = await fetchRealContributions(username, token);
    return generateContributionsWithStats(contributionsData);
  } catch (error) {
    console.error('Error fetching GitHub contributions:', error);
    // Fallback to mock data on error
    const mockData = generateMockContributions();
    return generateContributionsWithStats(mockData);
  }
}

async function fetchRealContributions(
  username: string,
  token: string
): Promise<ContributionsData> {
  const query = `
    query($username: String!) {
      user(login: $username) {
        contributionsCollection {
          contributionCalendar {
            weeks {
              contributionDays {
                contributionCount
                date
              }
            }
          }
        }
      }
    }
  `;

  const response = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query,
      variables: { username },
    }),
  });

  if (!response.ok) {
    throw new Error(
      `GitHub API error: ${response.status} ${response.statusText}`
    );
  }

  const result: GitHubContributionsResponse = await response.json();

  if (
    !result.data?.user?.contributionsCollection?.contributionCalendar?.weeks
  ) {
    throw new Error('Invalid response structure from GitHub API');
  }

  // Transform GitHub API response to our internal format
  const weeks: ContributionWeek[] =
    result.data.user.contributionsCollection.contributionCalendar.weeks.map(
      (week) => ({
        contributionDays: week.contributionDays.map((day) => ({
          date: day.date,
          contributionCount: day.contributionCount,
          color:
            GITHUB_COLORS.levels[getContributionLevel(day.contributionCount)],
        })),
      })
    );

  return { weeks };
}

function generateMockContributions(): ContributionsData {
  const weeks: ContributionWeek[] = [];
  const today = new Date();
  const oneYearAgo = new Date(
    today.getFullYear() - 1,
    today.getMonth(),
    today.getDate()
  );

  // Generate 53 weeks of data
  for (let weekIndex = 0; weekIndex < 53; weekIndex++) {
    const contributionDays: ContributionDay[] = [];

    for (let dayIndex = 0; dayIndex < 7; dayIndex++) {
      const date = new Date(oneYearAgo);
      date.setDate(date.getDate() + weekIndex * 7 + dayIndex);

      // Generate random contribution count (weighted towards lower numbers)
      const contributionCount =
        Math.random() < 0.3 ? 0 : Math.floor(Math.random() * 15);
      const level = getContributionLevel(contributionCount);

      contributionDays.push({
        date: date.toISOString().split('T')[0],
        contributionCount,
        color: GITHUB_COLORS.levels[level],
      });
    }

    weeks.push({ contributionDays });
  }

  return { weeks };
}

function calculateTotalContributions(data: ContributionsData): number {
  return data.weeks.reduce((total, week) => {
    return (
      total +
      week.contributionDays.reduce((weekTotal, day) => {
        return weekTotal + day.contributionCount;
      }, 0)
    );
  }, 0);
}

function generateContributionsWithStats(data: ContributionsData): {
  svg: string;
  stats: string;
} {
  const svg = generateContributionsSVG(data);
  const totalContributions = calculateTotalContributions(data);

  return {
    svg,
    stats: `<div class="contributions-stats">
      <span class="contributions-count">${totalContributions.toLocaleString()} contributions in the last year</span>
    </div>`,
  };
}

function generateContributionsSVG(data: ContributionsData): string {
  const cellSize = 11;
  const cellGap = 2;
  const monthLabelHeight = 20;
  const chartWidth = data.weeks.length * (cellSize + cellGap);
  const chartHeight = 7 * (cellSize + cellGap);
  const totalWidth = chartWidth;
  const totalHeight = chartHeight + monthLabelHeight;

  let svg = `<svg width="${totalWidth}" height="${totalHeight}" viewBox="0 0 ${totalWidth} ${totalHeight}" xmlns="http://www.w3.org/2000/svg">`;

  // Add month labels
  svg += generateMonthLabels(data, cellSize, cellGap, monthLabelHeight);

  // Add contribution squares
  data.weeks.forEach((week, weekIndex) => {
    week.contributionDays.forEach((day, dayIndex) => {
      const x = weekIndex * (cellSize + cellGap);
      const y = monthLabelHeight + dayIndex * (cellSize + cellGap);

      svg += `<rect x="${x}" y="${y}" width="${cellSize}" height="${cellSize}" fill="${day.color}" rx="2" ry="2">`;
      svg += `<title>${formatDate(day.date)}: ${day.contributionCount} contribution${day.contributionCount !== 1 ? 's' : ''}</title>`;
      svg += `</rect>`;
    });
  });

  svg += '</svg>';
  return svg;
}

function generateMonthLabels(
  data: ContributionsData,
  cellSize: number,
  cellGap: number,
  monthLabelHeight: number
): string {
  let labels = '';
  const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  let currentMonth = -1;
  let monthStartWeek = 0;

  data.weeks.forEach((week, weekIndex) => {
    if (week.contributionDays.length > 0) {
      const firstDay = new Date(week.contributionDays[0].date);
      const month = firstDay.getMonth();

      if (month !== currentMonth) {
        // Add previous month label if we have one
        if (currentMonth !== -1 && weekIndex > monthStartWeek + 2) {
          const x =
            (monthStartWeek + (weekIndex - monthStartWeek) / 2) *
            (cellSize + cellGap);
          labels += `<text x="${x}" y="12" text-anchor="middle" fill="${GITHUB_COLORS.text}" font-family="monospace" font-size="10">${monthNames[currentMonth]}</text>`;
        }

        currentMonth = month;
        monthStartWeek = weekIndex;
      }
    }
  });

  // Add the last month label
  if (currentMonth !== -1) {
    const x =
      (monthStartWeek + (data.weeks.length - monthStartWeek) / 2) *
      (cellSize + cellGap);
    labels += `<text x="${x}" y="12" text-anchor="middle" fill="${GITHUB_COLORS.text}" font-family="monospace" font-size="10">${monthNames[currentMonth]}</text>`;
  }

  return labels;
}

function generateDayLabels(
  cellSize: number,
  cellGap: number,
  monthLabelHeight: number,
  dayLabelWidth: number
): string {
  const days = ['Mon', 'Wed', 'Fri'];
  const dayIndices = [1, 3, 5]; // Monday, Wednesday, Friday
  let labels = '';

  dayIndices.forEach((dayIndex, i) => {
    const y =
      monthLabelHeight + dayIndex * (cellSize + cellGap) + cellSize / 2 + 3;
    labels += `<text x="12" y="${y}" text-anchor="middle" fill="${GITHUB_COLORS.text}" font-family="monospace" font-size="9">${days[i]}</text>`;
  });

  return labels;
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return `${days[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
}

function generateErrorSVG(): string {
  return `<svg width="400" height="100" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="100" fill="${GITHUB_COLORS.background}" rx="6"/>
    <text x="200" y="50" text-anchor="middle" fill="${GITHUB_COLORS.text}" font-family="monospace" font-size="14">
      Unable to load contributions
    </text>
  </svg>`;
}
