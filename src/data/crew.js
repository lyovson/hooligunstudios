const info = [
  {
    name: "Serj Gabyan",
    slug: "gabyan",
    role: "Producer",
    image: "",
    phone: "+37443607977",
    email: "gabyan@hooligunstudios.com",
    fb: "https://www.facebook.com/197gabyan",
    ig: "https://www.instagram.com/serjgabyan/",
  },
  {
    name: "Lilit Mkrtchyan",
    slug: "lilit",
    role: "Exec. Producer",
    image: "",
    phone: "+37491403128",
    email: "info@hooligunstudios.com",
    fb: "https://www.facebook.com/lilit.mkrtchyan.9237",
    ig: "https://www.instagram.com/lilitgabyan/",
  },
  {
    name: "Milena Mikaelyan",
    slug: "milena",
    role: "Production Assistent",
    image: "",
    phone: "+37455567372",
    email: "milka@hooligunstudios.com",
    fb: "https://www.facebook.com/milena.mikayelyan.am",
    ig: "https://www.instagram.com/milena__mik/",
  },
  {
    name: "Tika Agasimova",
    slug: "tika",
    role: "Russian Distribution",
    image: "",
    phone: "+79259103996",
    email: "distribution@hooligunstudios.com",
    fb: "https://www.facebook.com/profile.php?id=100006159557670&mibextid=ZbWKwL",
    ig: "https://www.instagram.com/tikairon/",
  },
  {
    name: "Roza Grigoryan",
    slug: "roza",
    role: "Public Relations",
    image: "",
    phone: "+37477303484",
    email: "pr@hooligunstudios.com",
    fb: "https://www.facebook.com/WithLoveRozi",
    ig: "https://www.instagram.com/prshik_/",
  },
];

const crew = info.map((person) => ({
  ...person,
  image: "/crew/" + person.slug + ".png",
}));

export default crew;
