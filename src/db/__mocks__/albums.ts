export const albums = [
  {
    id: "123",
    title: "My First Album",
    artist: { name: "Subhas" },
    description: "This is part one of a two-part sophomore album by Subhas",
    price: 2000,
    lyrics: "https://genius.com/albums/Subhas/Tabula-rasa",
    cover:
      "https://images.genius.com/a9fa6c9b468a68a781a9ca4748f9dc84.1000x1000x1.png",
    credits: [
      { role: "Production", name: "FAUXE" },
      { role: "Vocals", name: "FAUXE" },
      { role: "Tabla", name: "Sana Shajip Komar" },
      { role: "Flute", name: "Islam Robiul" },
      { role: "Additional Vocals", name: "JQ" },
      { role: "Vocal Engineering", name: "FAUXE" },
      { role: "Mixing", name: "FAUXE" },
      { role: "Mastering", name: "FAUXE" },
    ],
    tracks: [
      {
        id: "974524d1-83da-4035-ba07-32062750d564",
        albumId: "589d0e63-4deb-4c3c-891f-151d9876149e",
        title: "My First Song",
        files: [
          {
            id: "001",
            name: "my-first-song-preview.mp3",
            source: "web",
            mime: "audio/mpeg",
            category: "preview",
          },
          {
            id: "002",
            name: "my-first-song.mp3",
            source: "web",
            mime: "audio/mpeg",
            category: "song",
          },
        ],
      },
      {
        id: "f6b7097c-bd81-40fd-abd4-046265f89bc3",
        albumId: "589d0e63-4deb-4c3c-891f-151d9876149e",
        title: "My Second Song",
        files: [
          {
            id: "003",
            name: "my-second-song-preview.mp3",
            source: "web",
            mime: "audio/mpeg",
            category: "preview",
          },
        ],
      },
    ],
  },
];
