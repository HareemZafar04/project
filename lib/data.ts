export const collections = [
  {
    id: "01",
    name: "The Amarante",
    latin: "Amaranthus caudatus",
    description:
      "Trailing plumes of deep garnet amaranth, gathered loose around a single white ranunculus. Our signature arrangement, and the one the house is named for.",
    price: "$285",
  },
  {
    id: "02",
    name: "Quiet Anemone",
    latin: "Anemone coronaria",
    description:
      "A low, wide bowl of anemones in bone and ink, still on the stem. Reads as a single gesture rather than a bouquet.",
    price: "$220",
  },
  {
    id: "03",
    name: "Winter Sprig",
    latin: "Eucalyptus & Ranunculus",
    description:
      "Silvered eucalyptus and a handful of ranunculus in dusted rose, built for a mantel or a narrow console.",
    price: "$195",
  },
  {
    id: "04",
    name: "The Editorial",
    latin: "Mixed seasonal",
    description:
      "Our largest standing arrangement — an asymmetric column of whatever is most beautiful the morning it's cut.",
    price: "$410",
  },
] as const;

export const process = [
  {
    step: "01",
    title: "Sourced before sunrise",
    copy: "We buy directly from three growers before the flower markets open to the trade, choosing stems by hand rather than by order sheet.",
  },
  {
    step: "02",
    title: "Designed on paper first",
    copy: "Every arrangement is sketched in the atelier before a single stem is cut, so the proportion is decided before the flowers can decide it for us.",
  },
  {
    step: "03",
    title: "Built without foam",
    copy: "We arrange in water, on frames of our own hazel and copper, so the flowers can breathe and drink for the whole of their life indoors.",
  },
  {
    step: "04",
    title: "Delivered within the hour",
    copy: "Nothing leaves the atelier until it's ready to be looked at — arrangements are delivered the same morning they're finished.",
  },
] as const;

export const journal = [
  {
    id: "01",
    tag: "Field notes",
    title: "Why we stopped using floral foam",
    excerpt:
      "A short case for water, copper, and patience — and what changes in an arrangement when you stop reaching for foam.",
    date: "Jun 2026",
  },
  {
    id: "02",
    tag: "Seasonal",
    title: "The last of the summer dahlias",
    excerpt:
      "Notes from our grower in the Hudson Valley on a dahlia season that ran three weeks longer than expected.",
    date: "Sep 2025",
  },
  {
    id: "03",
    tag: "Atelier",
    title: "On building for a single flower",
    excerpt:
      "Most arrangements are designed to impress from across a room. Ours are designed to be looked at up close, alone.",
    date: "Apr 2025",
  },
] as const;

export const nav = [
  { label: "Collections", href: "#collections" },
  { label: "Atelier", href: "#atelier" },
  { label: "Bespoke", href: "#bespoke" },
  { label: "Journal", href: "#journal" },
] as const;
