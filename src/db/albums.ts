import { Album } from "./types";

export const albums: Album[] = [
  {
    id: "589d0e63-4deb-4c3c-891f-151d9876149e",
    title: "Tabula Rasa",
    artist: { name: "Subhas" },
    description: "Singapore's Top Music Album",
    price: 2000,
    lyrics: "https://genius.com/albums/Subhas/Tabula-rasa",
    credits: [
      { role: "Production", name: "FAUXE" },
      { role: "Vocals", name: "FAUXE" },
      { role: "Tabla", name: "Sana Shajip Komar" },
      { role: "Flute", name: "Islam Robiul" },
      { role: "Additional Vocals", name: "JQ" },
      { role: "Vocal Engineering, Mixing, Mastering", name: "FAUXE" },
      { role: "Vocal Engineering, Mixing, Mastering", name: "FAUXE" },
    ],
    songs: [
      {
        id: "974524d1-83da-4035-ba07-32062750d564",
        title: "MALABAR",
      },
      {
        id: "f6b7097c-bd81-40fd-abd4-046265f89bc3",
        title: "WHOSAID?",
      },
      {
        id: "75c2ba35-b603-4340-8e71-464686246e96",
        title: "MEET THE PEOPLE",
      },
      {
        id: "8f6e909f-299c-4f32-91e4-dc19b14c4051",
        title: "BHASA",
      },
      {
        id: "4ef881aa-6bfe-4b34-b0f8-1db2d247f183",
        title: "LONG2BEFREE",
      },
      {
        id: "d1313fe6-8b1a-4d94-90df-31f88670a464",
        title: "WHITE COLLAR CRIMES",
      },
      {
        id: "abc7f443-cb8c-473d-801e-ba1207868078",
        title: "UTOPIA (ft. Migrants Band Singapore)",
      },
      {
        id: "133291b4-48a2-4b4e-bc9d-b90c23be5208",
        title: "HEART OF GOLD",
      },
    ],
  },
];
