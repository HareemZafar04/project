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
    slug: "why-we-stopped-using-floral-foam",
    tag: "Field notes",
    title: "Why we stopped using floral foam",
    excerpt:
      "A short case for water, copper, and patience — and what changes in an arrangement when you stop reaching for foam.",
    date: "Jun 2026",
    content: [
      "Floral foam is fast. It holds a stem exactly where you put it, it's cheap, and it lets you build a large arrangement in a fraction of the time water and structure would take. For years we used it the way most florists do — without thinking about it much.",
      "We stopped for two reasons. The first is longevity: foam starves stems of the volume of water they'd get in a vase, and most arrangements built in foam are visibly tired within three days. The second is more philosophical. Foam lets you force a stem into a position it wouldn't hold on its own, and we started to notice that arrangements built this way had a slightly artificial stiffness — flowers held at angles that didn't quite belong to them.",
      "What we use now is slower: hand-tied structures of hazel and copper wire, built stem by stem in water from the first cut. It takes roughly twice as long per arrangement. It also means every flower is drinking freely for the whole of its life indoors, and the shape of the arrangement comes from the flowers themselves rather than from foam holding them in place.",
      "The trade-off is real — foam-free arrangements are more labor, and they don't ship as easily. For a florist building at scale, foam will probably always make sense. For a house our size, building four or five arrangements a day rather than forty, it was an easy decision once we saw the difference in how long the flowers lasted.",
    ],
  },
  {
    id: "02",
    slug: "the-last-of-the-summer-dahlias",
    tag: "Seasonal",
    title: "The last of the summer dahlias",
    excerpt:
      "Notes from our grower in the Hudson Valley on a dahlia season that ran three weeks longer than expected.",
    date: "Sep 2025",
    content: [
      "Most years, our dahlia supply from the Hudson Valley starts to thin by the first week of September. This year it didn't — a cooler August and a late round of rain kept the tubers producing well past the point we'd normally be moving on to asters and chrysanthemum.",
      "The extra weeks changed what we could put in front of people. Dahlias are generous flowers — dense, a little theatrical, happy to be the only bloom in an arrangement — and having them available into late September meant we could keep The Editorial built around them for almost a full extra month.",
      "It also meant a harder conversation with our grower about next year: do we plant for a season this long as the expectation, or treat this year as the exception it probably was? We landed on treating it as an exception. Planning around the best possible season, rather than an average one, is how a lot of floral supply chains end up overcommitted.",
    ],
  },
  {
    id: "03",
    slug: "on-building-for-a-single-flower",
    tag: "Atelier",
    title: "On building for a single flower",
    excerpt:
      "Most arrangements are designed to impress from across a room. Ours are designed to be looked at up close, alone.",
    date: "Apr 2025",
    content: [
      "A lot of floral design is built for distance — for the arrangement to read well from across a room, at the entrance to an event, from the far end of a dinner table. That's a reasonable thing to design for, and most of the industry does it well.",
      "We've made a point of designing for the opposite situation: one person, standing close, with nothing else to look at. It changes almost every decision. Distance-first arrangements lean on volume and repetition — a mass of one flower reads clearly from twenty feet. Up-close arrangements can't hide behind volume; every stem is doing visible work, and a single flower placed slightly wrong is obvious in a way it never would be from across a room.",
      "It also changes what we choose to include. A flower that's beautiful but uniform — a flower that looks the same from every angle — is more useful at a distance than up close, where its one good angle will be the only one anyone sees. We now spend a meaningful amount of our sourcing time looking for stems with some asymmetry to them: a bloom that's slightly more open on one side, a stem with a natural bend. Those are the ones that hold up to being looked at for a long time.",
    ],
  },
] as const;

export const testimonials = [
  {
    id: "01",
    name: "Elena Marsh",
    role: "Creative Director, Marsh & Co.",
    avatar: "/images/avatar-1.jpg",
    quote:
      "Amarante builds the only arrangements I've ever wanted to photograph before anyone touched them. Every stem earns its place.",
  },
  {
    id: "02",
    name: "Julian Reyes",
    role: "Private client, five seasons",
    avatar: "/images/avatar-2.jpg",
    quote:
      "I stopped asking for specific flowers years ago. Whatever the atelier sends the morning of is always the better choice.",
  },
  {
    id: "03",
    name: "Priya Nathan",
    role: "Event Producer, Nathan Studio",
    avatar: "/images/avatar-3.jpg",
    quote:
      "They design for the room, not the catalogue. Our installation looked like it belonged to the building, not just placed in it.",
  },
] as const;

export const gallery = [
  { id: "01", src: "/images/gallery-1.jpg", caption: "Studio proof, early spring" },
  { id: "02", src: "/images/gallery-2.jpg", caption: "The Amarante, in progress" },
  { id: "03", src: "/images/gallery-3.jpg", caption: "Sourcing morning, Union Sq." },
  { id: "04", src: "/images/gallery-4.jpg", caption: "Quiet Anemone, detail" },
  { id: "05", src: "/images/gallery-5.jpg", caption: "Winter Sprig, mantel study" },
  { id: "06", src: "/images/gallery-6.jpg", caption: "Wedding installation, private" },
  { id: "07", src: "/images/gallery-7.jpg", caption: "The Editorial, full column" },
  { id: "08", src: "/images/gallery-8.jpg", caption: "Atelier worktable, hazel frames" },
] as const;

export const collectionImages: Record<string, string> = {
  "01": "/images/collection-1.jpg",
  "02": "/images/collection-2.jpg",
  "03": "/images/collection-3.jpg",
  "04": "/images/collection-4.jpg",
};

export const nav = [
  { label: "Collections", href: "/#collections" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Atelier", href: "/#atelier" },
  { label: "Bespoke", href: "/#bespoke" },
  { label: "Journal", href: "/journal" },
] as const;
