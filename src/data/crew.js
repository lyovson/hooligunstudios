const info = [
  {
    name: "Serj Gabyan",
    slug: "gabyan",
    role: "Producer",
    image: "",
    phone: "+37455567372",
    email: "info@hooligunstudios.com",
  },
  {
    name: "Rafa Lyovson",
    slug: "lyovson",
    role: "Exec. Producer",
    image: "",
    phone: "+37455567372",
    email: "info@hooligunstudios.com",
  },
  {
    name: "Lilit Mkrtchyan",
    slug: "lilit",
    role: "Exec. Producer",
    image: "",
    phone: "+37455567372",
    email: "info@hooligunstudios.com",
  },
  {
    name: "Milena Mikaelyan",
    slug: "milena",
    role: "Production Assistent",
    image: "",
    phone: "+37455567372",
    email: "info@hooligunstudios.com",
  },
  {
    name: "Ruby Davies",
    slug: "ruby",
    role: "US Distribution",
    image: "",
    phone: "+37455567372",
    email: "info@hooligunstudios.com",
  },
  {
    name: "Hasmik Khachunts",
    slug: "jess",
    role: "Copywriter",
    image: "",
    phone: "+37455567372",
    email: "info@hooligunstudios.com",
  },
  {
    name: "Tika Agasimova",
    slug: "tika",
    role: "East-Europe Distribution",
    image: "",
    phone: "+37455567372",
    email: "info@hooligunstudios.com",
  },
  {
    name: "Roza Grigoryan",
    slug: "roza",
    role: "East-European Distribution",
    image: "",
    phone: "+37455567372",
    email: "info@hooligunstudios.com",
  },
];

const crew = info.map((person) => ({
  ...person,
  image: "/crew/" + person.slug + ".png",
}));

export default crew;
