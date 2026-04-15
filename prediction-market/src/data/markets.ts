export interface Market {
  id: string;
  title: string;
  category: string;
  probability_yes: number;
  probability_no: number;
  probability_draw?: number;
  volume: string;
  end_time: string;
  tag?: "LIVE" | "NEW";
  chartData: { time: string; yes: number; no: number; draw?: number }[];
  icon?: string;
}

export interface BreakingItem {
  id: string;
  title: string;
  probability: number;
  trend: "up" | "down";
  category: string;
}

export interface HotTopic {
  id: string;
  title: string;
  volume: string;
  rank: number;
}

export interface Comment {
  id: string;
  avatar: string;
  name: string;
  message: string;
  time: string;
}

function generateChartData(yesBase: number, noBase: number, drawBase?: number) {
  const data = [];
  for (let i = 30; i >= 0; i--) {
    const jitter = () => (Math.random() - 0.5) * 6;
    data.push({
      time: `-${i}h`,
      yes: Math.round(Math.min(95, Math.max(5, yesBase + jitter()))),
      no: Math.round(Math.min(95, Math.max(5, noBase + jitter()))),
      ...(drawBase !== undefined ? { draw: Math.round(Math.min(95, Math.max(5, drawBase + jitter()))) } : {}),
    });
  }
  return data;
}

export const markets: Market[] = [
  {
    id: "1",
    title: "FC Bayern München vs Real Madrid CF",
    category: "Sports",
    probability_yes: 66,
    probability_no: 19,
    probability_draw: 15,
    volume: "$2.4M",
    end_time: "2d 14h",
    tag: "LIVE",
    chartData: generateChartData(66, 19, 15),
  },
  {
    id: "2",
    title: "Will the Fed cut rates in June 2026?",
    category: "Economy",
    probability_yes: 42,
    probability_no: 58,
    volume: "$8.1M",
    end_time: "62d",
    chartData: generateChartData(42, 58),
  },
  {
    id: "3",
    title: "Bitcoin above $100K by end of Q2?",
    category: "Crypto",
    probability_yes: 31,
    probability_no: 69,
    volume: "$5.6M",
    end_time: "45d",
    tag: "NEW",
    chartData: generateChartData(31, 69),
  },
  {
    id: "4",
    title: "Tesla stock above $300 end of May?",
    category: "Tech",
    probability_yes: 54,
    probability_no: 46,
    volume: "$1.8M",
    end_time: "30d",
    chartData: generateChartData(54, 46),
  },
  {
    id: "5",
    title: "Next UK Prime Minister: Labour win?",
    category: "Politics",
    probability_yes: 72,
    probability_no: 28,
    volume: "$3.2M",
    end_time: "120d",
    tag: "LIVE",
    chartData: generateChartData(72, 28),
  },
  {
    id: "6",
    title: "Apple announces AR glasses at WWDC?",
    category: "Tech",
    probability_yes: 23,
    probability_no: 77,
    volume: "$980K",
    end_time: "58d",
    tag: "NEW",
    chartData: generateChartData(23, 77),
  },
  {
    id: "7",
    title: "Ethereum ETF approval by July?",
    category: "Crypto",
    probability_yes: 61,
    probability_no: 39,
    volume: "$4.1M",
    end_time: "90d",
    chartData: generateChartData(61, 39),
  },
  {
    id: "8",
    title: "NBA Finals: Celtics repeat?",
    category: "Sports",
    probability_yes: 38,
    probability_no: 62,
    volume: "$1.5M",
    end_time: "75d",
    chartData: generateChartData(38, 62),
  },
  {
    id: "9",
    title: "US GDP growth above 3% Q2?",
    category: "Economy",
    probability_yes: 27,
    probability_no: 73,
    volume: "$2.9M",
    end_time: "48d",
    chartData: generateChartData(27, 73),
  },
  {
    id: "10",
    title: "OpenAI IPO before 2027?",
    category: "Tech",
    probability_yes: 45,
    probability_no: 55,
    volume: "$6.3M",
    end_time: "365d",
    chartData: generateChartData(45, 55),
  },
  {
    id: "11",
    title: "Gold price above $3500 by August?",
    category: "Economy",
    probability_yes: 33,
    probability_no: 67,
    volume: "$1.2M",
    end_time: "110d",
    tag: "NEW",
    chartData: generateChartData(33, 67),
  },
  {
    id: "12",
    title: "Will SpaceX launch Starship orbital in June?",
    category: "Tech",
    probability_yes: 58,
    probability_no: 42,
    volume: "$2.1M",
    end_time: "40d",
    chartData: generateChartData(58, 42),
  },
];

export const breakingNews: BreakingItem[] = [
  { id: "b1", title: "Fed rate decision imminent", probability: 78, trend: "up", category: "Economy" },
  { id: "b2", title: "BTC flash crash recovery", probability: 45, trend: "down", category: "Crypto" },
  { id: "b3", title: "EU AI Act enforcement begins", probability: 92, trend: "up", category: "Tech" },
  { id: "b4", title: "China GDP surprise beat", probability: 34, trend: "down", category: "Economy" },
  { id: "b5", title: "Ukraine ceasefire probability", probability: 21, trend: "down", category: "Politics" },
];

export const hotTopics: HotTopic[] = [
  { id: "h1", title: "Federal Reserve Rate Decision", volume: "$12.4M", rank: 1 },
  { id: "h2", title: "Bitcoin Halving Impact", volume: "$9.8M", rank: 2 },
  { id: "h3", title: "US Presidential Election", volume: "$8.2M", rank: 3 },
  { id: "h4", title: "AI Regulation Landscape", volume: "$6.5M", rank: 4 },
  { id: "h5", title: "Tesla Robotaxi Launch", volume: "$5.1M", rank: 5 },
];

export const comments: Comment[] = [
  { id: "c1", avatar: "MK", name: "Michael K.", message: "Bayern's home record is incredible this season", time: "2m ago" },
  { id: "c2", avatar: "SL", name: "Sarah L.", message: "Madrid always shows up in big matches though", time: "5m ago" },
  { id: "c3", avatar: "JR", name: "James R.", message: "The odds shifted 4% after the injury report", time: "8m ago" },
  { id: "c4", avatar: "AT", name: "Anna T.", message: "Taking the draw at 15% seems like value", time: "12m ago" },
  { id: "c5", avatar: "DP", name: "David P.", message: "Volume is surging — smart money moving in", time: "18m ago" },
];
