const info = [
  {
    name: "Serj Gabyan",
    slug: "gabyan",
    role: "CEO",
    image: "",
    bio: "CONTACT",
  },
  {
    name: "Rafa Lyovson",
    slug: "lyovson",
    role: "CEO",
    image: "",
    bio: "CONTACT",
  },
  {
    name: "Lilit Mkrtchyan",
    slug: "lilit",
    role: "CEO",
    image: "",
    bio: "CONTACT",
  },
  {
    name: "Milena Mikaelyan",
    slug: "milena",
    role: "CEO",
    image: "",
    bio: "CONTACT",
  },
  {
    name: "Ruby Davies",
    slug: "ruby",
    role: "CEO",
    image: "",
    bio: "CONTACT",
  },
];

const crew = info.map((person) => ({
  ...person,
  image: "/crew/" + person.slug + ".jpeg",
}));

export default crew;
