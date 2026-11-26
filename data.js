const STARTUP = {
  name: "Who's in Net?"
};

const RINKS = [
  "Harbourview Arena",
  "North Halifax Rink",
  "Metro Ice Centre",
  "Sackville Community Arena"
];

const GAME_TIMES = [
  "6:00 PM",
  "7:30 PM",
  "9:00 PM",
  "10:30 PM"
];

const GOALIES = [
  { id: "milo", name: "Milo", level: "Recreational", initials: "M" },
  { id: "jordan", name: "Jordan", level: "Intermediate", initials: "J" },
  { id: "sam", name: "Sam", level: "Recreational", initials: "S" },
  { id: "alex", name: "Alex", level: "Intermediate", initials: "A" },
  { id: "nora", name: "Nora", level: "Recreational", initials: "N" }
];

const AVAILABILITY = [
  { goalieId: "milo", rink: "Harbourview Arena", date: "2026-12-05", time: "7:30 PM" },
  { goalieId: "jordan", rink: "North Halifax Rink", date: "2026-12-05", time: "9:00 PM" },
  { goalieId: "sam", rink: "Metro Ice Centre", date: "2026-12-05", time: "6:00 PM" },
  { goalieId: "alex", rink: "Harbourview Arena", date: "2026-12-06", time: "10:30 PM" },
  { goalieId: "nora", rink: "Sackville Community Arena", date: "2026-12-08", time: "7:30 PM" }
];

const DEMO_LOCAL_GOALIES = [
  { id: "casey", name: "Casey", level: "Recreational", initials: "C" },
  { id: "taylor", name: "Taylor", level: "Intermediate", initials: "T" },
  { id: "riley", name: "Riley", level: "Recreational", initials: "R" },
  { id: "morgan", name: "Morgan", level: "Intermediate", initials: "M" },
  { id: "devon", name: "Devon", level: "Recreational", initials: "D" },
  { id: "avery", name: "Avery", level: "Intermediate", initials: "A" },
  { id: "jules", name: "Jules", level: "Recreational", initials: "J" },
  { id: "logan", name: "Logan", level: "Intermediate", initials: "L" },
  { id: "quinn", name: "Quinn", level: "Recreational", initials: "Q" },
  { id: "blake", name: "Blake", level: "Intermediate", initials: "B" },
  { id: "sage", name: "Sage", level: "Recreational", initials: "S" },
  { id: "rowan", name: "Rowan", level: "Intermediate", initials: "R" },
  { id: "reese", name: "Reese", level: "Recreational", initials: "R" },
  { id: "drew", name: "Drew", level: "Intermediate", initials: "D" },
  { id: "kai", name: "Kai", level: "Recreational", initials: "K" },
  { id: "finley", name: "Finley", level: "Intermediate", initials: "F" },
  { id: "parker", name: "Parker", level: "Recreational", initials: "P" },
  { id: "skyler", name: "Skyler", level: "Intermediate", initials: "S" },
  { id: "ellis", name: "Ellis", level: "Recreational", initials: "E" },
  { id: "lennon", name: "Lennon", level: "Intermediate", initials: "L" }
];

const DEMO_GOALIES = GOALIES.concat(DEMO_LOCAL_GOALIES);
const DEMO_SAMPLE_GAME = {
  rink: "Sackville Community Arena",
  date: "2026-12-08",
  time: "7:30 PM"
};
const DEMO_AVAILABILITY = AVAILABILITY.concat([
  { goalieId: "casey", rink: "Sackville Community Arena", date: "2026-12-08", time: "7:30 PM" },
  { goalieId: "taylor", rink: "Sackville Community Arena", date: "2026-12-08", time: "7:30 PM" },
  { goalieId: "riley", rink: "Sackville Community Arena", date: "2026-12-08", time: "7:30 PM" },
  { goalieId: "morgan", rink: "Sackville Community Arena", date: "2026-12-08", time: "7:30 PM" },
  { goalieId: "devon", rink: "Sackville Community Arena", date: "2026-12-08", time: "7:30 PM" },
  { goalieId: "avery", rink: "Sackville Community Arena", date: "2026-12-08", time: "7:30 PM" },
  { goalieId: "jules", rink: "North Halifax Rink", date: "2026-12-05", time: "9:00 PM" },
  { goalieId: "logan", rink: "Metro Ice Centre", date: "2026-12-05", time: "6:00 PM" },
  { goalieId: "quinn", rink: "Harbourview Arena", date: "2026-12-06", time: "10:30 PM" },
  { goalieId: "blake", rink: "Sackville Community Arena", date: "2026-12-09", time: "7:30 PM" },
  { goalieId: "sage", rink: "Harbourview Arena", date: "2026-12-05", time: "6:00 PM" },
  { goalieId: "rowan", rink: "North Halifax Rink", date: "2026-12-06", time: "7:30 PM" },
  { goalieId: "reese", rink: "Metro Ice Centre", date: "2026-12-08", time: "9:00 PM" },
  { goalieId: "drew", rink: "Sackville Community Arena", date: "2026-12-10", time: "10:30 PM" },
  { goalieId: "kai", rink: "Harbourview Arena", date: "2026-12-12", time: "7:30 PM" },
  { goalieId: "finley", rink: "North Halifax Rink", date: "2026-12-12", time: "6:00 PM" },
  { goalieId: "parker", rink: "Metro Ice Centre", date: "2026-12-14", time: "7:30 PM" },
  { goalieId: "skyler", rink: "Sackville Community Arena", date: "2026-12-15", time: "9:00 PM" },
  { goalieId: "ellis", rink: "Harbourview Arena", date: "2026-12-16", time: "10:30 PM" },
  { goalieId: "lennon", rink: "North Halifax Rink", date: "2026-12-17", time: "7:30 PM" }
]);
