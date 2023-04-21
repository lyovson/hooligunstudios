const info = [
  {
    name: "Serj Gabyan",
    slug: "gabyan",
    role: "Producer",
    image: "",
    phone: "+37443607977",
    email: "gabyan@hooligunstudios.com",
  },
  {
    name: "Rafa Lyovson",
    slug: "lyovson",
    role: "Exec. Producer",
    image: "",
    phone: "+37455567372",
    email: "lyovson@hooligunstudios.com",
  },
  {
    name: "Lilit Mkrtchyan",
    slug: "lilit",
    role: "Exec. Producer",
    image: "",
    phone: "+37491403128",
    email: "info@hooligunstudios.com",
  },
  {
    name: "Milena Mikaelyan",
    slug: "milena",
    role: "Production Assistent",
    image: "",
    phone: "+37493818191",
    email: "milka@hooligunstudios.com",
  },
  {
    name: "Ruby Davies",
    slug: "ruby",
    role: "US Distribution",
    image: "",
    phone: "+37455567372",
    email: "distribution@hooligunstudios.com",
  },
  {
    name: "Hasmik Khachunts",
    slug: "jess",
    role: "Copywriter",
    image: "",
    phone: "+37455188870",
    email: "pr@hooligunstudios.com",
  },
  {
    name: "Tika Agasimova",
    slug: "tika",
    role: "East-Europe Distribution",
    image: "",
    phone: "+79259103996",
    email: "distribution@hooligunstudios.com",
  },
  {
    name: "Roza Grigoryan",
    slug: "roza",
    role: "Russian Distribution",
    image: "",
    phone: "+37477303484",
    email: "pr@hooligunstudios.com",
  },
];

const crew = info.map((person) => ({
  ...person,
  image: "/crew/" + person.slug + ".png",
}));

export default crew;
