const info = [
  {
    name: "OTTK",
    role: "Movie",
    slug: "ottk",
    image: "",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quibusdam optio temporibus quam earum velit atque dignissimos,molestiae doloribus magni esse? Mollitia eos quo cumque.",
  },
  {
    name: "OTTK OST",
    role: "OST",
    slug: "ottk",
    image: "",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quibusdam optio temporibus quam earum velit atque dignissimos,molestiae doloribus magni esse? Mollitia eos quo cumque.",
  },
  {
    name: "OTTK",
    role: "Movie",
    slug: "ottk",
    image: "",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quibusdam optio temporibus quam earum velit atque dignissimos,molestiae doloribus magni esse? Mollitia eos quo cumque.",
  },
  {
    name: "OTTK",
    role: "Movie",
    slug: "ottk",
    image: "",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quibusdam optio temporibus quam earum velit atque dignissimos,molestiae doloribus magni esse? Mollitia eos quo cumque.",
  },
];

const projects = info.map((project) => ({
  ...project,
  image: "/projects/" + project.slug + ".jpeg",
}));

export default projects;
