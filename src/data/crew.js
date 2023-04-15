const info = [
  {
    name: "Serj Gabyan",
    slug: "gabyan",
    role: "CEO",
    image: "",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quibusdam optio temporibus quam earum velit atque dignissimos,molestiae doloribus magni esse? Mollitia eos quo cumque.",
  },
  {
    name: "Rafa Lyovson",
    slug: "lyovson",
    role: "CEO",
    image: "",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quibusdam optio temporibus quam earum velit atque dignissimos,molestiae doloribus magni esse? Mollitia eos quo cumque.",
  },
  {
    name: "Lilit Mkrtchyan",
    slug: "lilit",
    role: "CEO",
    image: "",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quibusdam optio temporibus quam earum velit atque dignissimos,molestiae doloribus magni esse? Mollitia eos quo cumque.",
  },
  {
    name: "Milena Mikaelyan",
    slug: "milena",
    role: "CEO",
    image: "",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quibusdam optio temporibus quam earum velit atque dignissimos,molestiae doloribus magni esse? Mollitia eos quo cumque.",
  },
  {
    name: "Ruby Davies",
    slug: "ruby",
    role: "CEO",
    image: "",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quibusdam optio temporibus quam earum velit atque dignissimos,molestiae doloribus magni esse? Mollitia eos quo cumque.",
  },
];

const crew = info.map((person) => ({
  ...person,
  image: "/crew/" + person.slug + ".jpeg",
}));

export default crew;
