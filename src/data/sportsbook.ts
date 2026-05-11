export type Sport = {
  id: string;
  name: string;
  icon: string;
  live: number;
  prematch: number;
};

export type League = {
  id: string;
  sportId: string;
  country: string;
  name: string;
  count: number;
};

export type Match = {
  id: string;
  sportId: string;
  leagueId: string;
  league: string;
  date: string;
  time: string;
  status: "Live" | "Prematch";
  home: string;
  away: string;
  venue: string;
  headline: string;
  markets: number;
  odds: {
    home: string;
    draw?: string;
    away: string;
    over: string;
    under: string;
  };
};

export type Market = {
  id: string;
  title: string;
  columns: string[];
  prices: string[];
  featured?: boolean;
};

export type BetSelection = {
  id: string;
  matchId: string;
  label: string;
  market: string;
  odds: string;
};

export const sports: Sport[] = [
  { id: "basketball", name: "Basketball", icon: "B", live: 52, prematch: 312 },
  { id: "football", name: "Football", icon: "F", live: 34, prematch: 548 },
  { id: "boxing", name: "Boxing", icon: "X", live: 2, prematch: 27 },
  { id: "tennis", name: "Tennis", icon: "T", live: 18, prematch: 166 },
  { id: "baseball", name: "Baseball", icon: "M", live: 9, prematch: 86 },
  { id: "esports", name: "E-Sports", icon: "E", live: 11, prematch: 94 },
];

export const leagues: League[] = [
  { id: "nba", sportId: "basketball", country: "North America", name: "NBA", count: 3 },
  { id: "nba-playoffs", sportId: "basketball", country: "North America", name: "NBA Playoffs Series", count: 3 },
  { id: "wnba-outright", sportId: "basketball", country: "North America", name: "WNBA Outright", count: 1 },
  { id: "pba", sportId: "basketball", country: "Philippines", name: "PBA Commissioner's Cup", count: 4 },
  { id: "epl", sportId: "football", country: "England", name: "Premier League", count: 8 },
  { id: "laliga", sportId: "football", country: "Spain", name: "La Liga", count: 6 },
];

export const matches: Match[] = [
  {
    id: "det-cle",
    sportId: "basketball",
    leagueId: "nba",
    league: "NBA",
    date: "12.05.2026",
    time: "08:00",
    status: "Live",
    home: "Detroit Pistons",
    away: "Cleveland Cavaliers",
    venue: "Play-off Quarterfinals",
    headline: "Best of 7 series. Detroit leads 2:1.",
    markets: 249,
    odds: { home: "2.33", away: "1.58", over: "213", under: "1.89" },
  },
  {
    id: "okc-lal",
    sportId: "basketball",
    leagueId: "nba",
    league: "NBA",
    date: "12.05.2026",
    time: "10:30",
    status: "Prematch",
    home: "Oklahoma City Thunder",
    away: "Los Angeles Lakers",
    venue: "Western Conference",
    headline: "Thunder carry a top seed pace into a prime-time matchup.",
    markets: 277,
    odds: { home: "1.17", away: "4.70", over: "214", under: "1.93" },
  },
  {
    id: "min-sas",
    sportId: "basketball",
    leagueId: "nba",
    league: "NBA",
    date: "13.05.2026",
    time: "08:00",
    status: "Prematch",
    home: "Minnesota Timberwolves",
    away: "San Antonio Spurs",
    venue: "Regular Season",
    headline: "Young frontcourt duel with a fast total board.",
    markets: 207,
    odds: { home: "4.10", away: "1.21", over: "217", under: "1.89" },
  },
  {
    id: "smb-gin",
    sportId: "basketball",
    leagueId: "pba",
    league: "PBA",
    date: "13.05.2026",
    time: "19:30",
    status: "Prematch",
    home: "San Miguel Beermen",
    away: "Barangay Ginebra",
    venue: "Smart Araneta Coliseum",
    headline: "Manila rivalry night with heavy local handle.",
    markets: 128,
    odds: { home: "1.64", away: "2.28", over: "198", under: "1.86" },
  },
  {
    id: "mci-ars",
    sportId: "football",
    leagueId: "epl",
    league: "EPL",
    date: "14.05.2026",
    time: "03:00",
    status: "Prematch",
    home: "Manchester City",
    away: "Arsenal",
    venue: "Etihad Stadium",
    headline: "Title race six-pointer with full-time result and goal markets.",
    markets: 318,
    odds: { home: "1.75", draw: "3.50", away: "4.20", over: "1.82", under: "2.04" },
  },
];

export const matchMarkets: Market[] = [
  {
    id: "winner",
    title: "Match Winner",
    columns: ["Detroit Pistons", "Cleveland Cavaliers"],
    prices: ["2.33", "1.58"],
    featured: true,
  },
  {
    id: "regular",
    title: "Match Result (Regular Time)",
    columns: ["Detroit Pistons", "Draw", "Cleveland Cavaliers"],
    prices: ["2.51", "12.00", "1.70"],
    featured: true,
  },
  {
    id: "halftime",
    title: "1st Half/Full Time",
    columns: ["Pistons/Pistons", "Draw/Pistons", "Cavaliers/Pistons", "Pistons/Cavaliers", "Draw/Cavaliers", "Cavaliers/Cavaliers"],
    prices: ["3.05", "51.00", "7.30", "5.80", "34.00", "1.97"],
  },
  {
    id: "pistons-total",
    title: "Detroit Pistons Total Odd/Even",
    columns: ["Even", "Odd"],
    prices: ["1.93", "1.88"],
  },
  {
    id: "cavaliers-total",
    title: "Cleveland Cavaliers Total Odd/Even",
    columns: ["Even", "Odd"],
    prices: ["1.89", "1.92"],
  },
  {
    id: "wire",
    title: "Wire To Wire",
    columns: ["Detroit Pistons", "Any Other Result", "Cleveland Cavaliers"],
    prices: ["5.00", "1.75", "2.95"],
  },
];

export const betSelections: BetSelection[] = [
  {
    id: "bet-det",
    matchId: "det-cle",
    label: "Detroit Pistons",
    market: "Match Result (Regular Time)",
    odds: "2.51",
  },
  {
    id: "bet-draw",
    matchId: "det-cle",
    label: "Draw",
    market: "Match Result (Regular Time)",
    odds: "12.00",
  },
];

export const featuredMatch = matches[0];
