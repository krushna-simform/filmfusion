import type { MovieDetails } from "../utils/interface";

export const MovieData: Array<MovieDetails> = [
  {
    id: 1,
    title: "Avengers Infinity War",
    description:
      "The Avengers face their most powerful enemy yet—Thanos, who is on a mission to collect all six Infinity Stones and wipe out half of the universe. Heroes must unite to stop him in this thrilling action-packed sci-fi adventure.",
    genre: "Action/Sci-fi",
    posterUrl:
      "https://i.ytimg.com/vi/OvngUkG_Stw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCa8F6gB_1SWm4svhbCnYj2VNF8ww",
    backPosterUrl:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_FMjpg_UX1000_.jpg",
    cast: [
      {
        actorName: "Robert Downey Jr.",
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqYcTz6JIaJsEIjsqcIHs5r0M0SgIZF0hI1g&s",
        role: "Tony Stark",
      },
      {
        actorName: "Chris Hemsworth",
        imageUrl:
          "https://hips.hearstapps.com/hmg-prod/images/chris-hemsworth-attends-marvel-studios-thor-love-and-news-photo-1709740913.jpg?crop=0.873xw:0.764xh;0.0472xw,0.0128xh&resize=1200:*",
        role: "Thor",
      },
      {
        actorName: "Mark Ruffalo",
        imageUrl:
          "https://www.usatoday.com/gcdn/media/USATODAY/USATODAY/2013/05/30/1369952109000-D03-Indie-Ruffalo-28-1305301815_1_1.jpg",
        role: "Bruce Banner",
      },
      {
        actorName: "Chris Evans",
        imageUrl:
          "https://imgs.search.brave.com/OSbw682R0jP1JYNfNztbG_RiTdH4Jw6bYK6Nlem6opI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2I1LzZi/Lzc5L2I1NmI3OTNk/Yjc4MzY1MGFhNzkx/ZTU0ZjhmZDhjODcx/LmpwZw",
        role: "Strave Rogers",
      },
      {
        actorName: "Scarlett Johansson",
        imageUrl:
          "https://m.media-amazon.com/images/M/MV5BMTM3OTUwMDYwNl5BMl5BanBnXkFtZTcwNTUyNzc3Nw@@._V1_.jpg",
        role: "Natasha Romanoff",
      },
    ],
    director: [
      {
        directorName: "Anthony Russo",
        imageUrl:
          "https://imgs.search.brave.com/S4qTzvXgoKY5cKqeEQkrNoGo1hx5wnhCFSwIL8zNWo8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZGljZXN1bW1pdC5v/cmcvaW1hZ2VzL3Nw/ZWFrZXJzLzIyLUFu/dGhvbnktUnVzc28t/MzkwLmpwZw",
      },
      {
        directorName: "Joe Russo",
        imageUrl:
          "https://imgs.search.brave.com/m6rbKZ7NabWJvFdTNU-sy9Z9xdK3OSBpJmyX3Q9xfuQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZmFtb3VzYmlydGhk/YXlzLmNvbS9mYWNl/cy9ydXNzby1qb2Ut/ZGlyZWN0b3ItaW1h/Z2UuanBn",
      },
    ],
    votes: {
      total: 5000,
      positive: 4500,
      negative: 500,
    },
  },
  {
    id: 2,
    title: "Avengers Endgame",
    description:
      "After Thanos' devastating snap, the Avengers must navigate a broken world to find a way to reverse the damage and bring back their loved ones. A powerful conclusion to the Infinity Saga.",
    genre: "Action/Sci-fi",
    posterUrl:
      "https://c4.wallpaperflare.com/wallpaper/36/558/326/avengers-infinity-war-robert-downey-jr-tony-stark-iron-man-wallpaper-preview.jpg",
    backPosterUrl:
      "https://rukminim3.flixcart.com/image/850/1000/jtltw280/poster/t/x/7/medium-endgame3-avengers-endgame-new-poster-for-room-office-original-imafew7m4ggkqm9r.jpeg?q=90&crop=false",
    cast: [
      {
        actorName: "Robert Downey Jr.",
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqYcTz6JIaJsEIjsqcIHs5r0M0SgIZF0hI1g&s",
        role: "Tony Stark",
      },
      {
        actorName: "Chris Hemsworth",
        imageUrl:
          "https://hips.hearstapps.com/hmg-prod/images/chris-hemsworth-attends-marvel-studios-thor-love-and-news-photo-1709740913.jpg?crop=0.873xw:0.764xh;0.0472xw,0.0128xh&resize=1200:*",
        role: "Thor",
      },
      {
        actorName: "Mark Ruffalo",
        imageUrl:
          "https://www.usatoday.com/gcdn/media/USATODAY/USATODAY/2013/05/30/1369952109000-D03-Indie-Ruffalo-28-1305301815_1_1.jpg",
        role: "Bruce Banner",
      },
      {
        actorName: "Chris Evans",
        imageUrl:
          "https://imgs.search.brave.com/OSbw682R0jP1JYNfNztbG_RiTdH4Jw6bYK6Nlem6opI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2I1LzZi/Lzc5L2I1NmI3OTNk/Yjc4MzY1MGFhNzkx/ZTU0ZjhmZDhjODcx/LmpwZw",
        role: "Strave Rogers",
      },
      {
        actorName: "Scarlett Johansson",
        imageUrl:
          "https://m.media-amazon.com/images/M/MV5BMTM3OTUwMDYwNl5BMl5BanBnXkFtZTcwNTUyNzc3Nw@@._V1_.jpg",
        role: "Natasha Romanoff",
      },
    ],
    director: [
      {
        directorName: "Anthony Russo",
        imageUrl:
          "https://imgs.search.brave.com/S4qTzvXgoKY5cKqeEQkrNoGo1hx5wnhCFSwIL8zNWo8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZGljZXN1bW1pdC5v/cmcvaW1hZ2VzL3Nw/ZWFrZXJzLzIyLUFu/dGhvbnktUnVzc28t/MzkwLmpwZw",
      },
      {
        directorName: "Joe Russo",
        imageUrl:
          "https://imgs.search.brave.com/m6rbKZ7NabWJvFdTNU-sy9Z9xdK3OSBpJmyX3Q9xfuQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZmFtb3VzYmlydGhk/YXlzLmNvbS9mYWNl/cy9ydXNzby1qb2Ut/ZGlyZWN0b3ItaW1h/Z2UuanBn",
      },
    ],
    votes: { total: 6000, positive: 5400, negative: 600 },
  },
  {
    id: 3,
    title: "Harry Potter and the Prisoner of Azkaban",
    description:
      "Harry faces danger from escaped prisoner Sirius Black while uncovering the truth about his family's past. A magical journey packed with mystery and intrigue.",
    genre: "Family/Fantasy",
    posterUrl:
      "https://i.pinimg.com/474x/51/26/63/51266379e60e6333017b74486d33ea19.jpg",
    backPosterUrl:
      "https://m.media-amazon.com/images/M/MV5BMTY4NTIwODg0N15BMl5BanBnXkFtZTcwOTc0MjEzMw@@._V1_.jpg",
    cast: [
      {
        actorName: "Daniel Radcliffe",
        imageUrl:
          "https://variety.com/wp-content/uploads/2024/06/daniel.jpg?w=1000&h=667&crop=1",
        role: "Harry Potter",
      },
      {
        actorName: "Emma Watson",
        imageUrl:
          "https://hips.hearstapps.com/hmg-prod/images/Emma-Watson_GettyImages-619546914.jpg?crop=1xw:1.0xh;center,top&resize=640:*",
        role: "Hermione Granger",
      },
      {
        actorName: "Rupert Grint",
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuLwOHzy5Rlxl1z3Mgle7baxFZm1O5cFs1BQ&s",
        role: "Ron Weasley",
      },
      {
        actorName: "Gray Oldman",
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuR0T3MCZgUYYkclNMMzo0sSzptufOAi_faw&s",
        role: "Sirius Black",
      },
      {
        actorName: "Michael Gambon",
        imageUrl: "https://ntvb.tmsimg.com/assets/assets/71763_v9_bc.jpg",
        role: "Dumbledore",
      },
    ],
    director: [
      {
        directorName: "Alfonso Cuarón",
        imageUrl:
          "https://resizing.flixster.com/rupBodlTYX9tE4BptG11ALLNqyE=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/74161_v9_bb.jpg",
      },
    ],
    votes: { total: 4000, positive: 3600, negative: 400 },
  },
  {
    id: 4,
    title: "Doctor Strange",
    description:
      "Surgeon Stephen Strange's life takes an otherworldly turn after an accident leads him to discover the mystic arts and become the Sorcerer Supreme, protecting Earth from magical threats.",
    genre: "Fantasy/Action",
    posterUrl: "https://i.redd.it/rww3fgutaxp01.jpg",
    backPosterUrl:
      "https://i.pinimg.com/736x/0f/f3/c9/0ff3c9f36e5a4cc6db99981f33b964d1.jpg",
    cast: [
      {
        actorName: "Benedict Cumberbatch",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/4/4b/Benedict_Cumberbatch_SDCC_2014.jpg",
        role: "Dr. Stephen Strange",
      },
      {
        actorName: "Chiwetel Ejiofor",
        imageUrl:
          "https://images.mubicdn.net/images/cast_member/16850/cache-5714-1652166320/image-w856.jpg",
        role: "Baron Mordo",
      },
      {
        actorName: "Rachel McAdams",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Rachel_McAdams_3_%28cropped%29.jpg/250px-Rachel_McAdams_3_%28cropped%29.jpg",
        role: "Dr. Christine Palmer",
      },
      {
        actorName: "Benedict Wong",
        imageUrl:
          "https://media.themoviedb.org/t/p/w500/yYfLyrC2CE6vBWSJfkpuVKL2POM.jpg",
        role: "Wong",
      },
      {
        actorName: "Mads Mikkelsen",
        imageUrl:
          "https://media.gq-magazine.co.uk/photos/5d1394a6533a2324d9c61fef/1:1/w_1280,h_1280,c_limit/Mads-Mikkelsen-02-GQ-13Oct16_b.jpg",
        role: "Kaecilius",
      },
    ],
    director: [
      {
        directorName: "Scott Derrickson",
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW3jElpXccEwkcdDuQ8F7Usx_kuENX6o6cXw&s",
      },
    ],
    votes: { total: 4500, positive: 4000, negative: 500 },
  },
  {
    id: 5,
    title: "Mission: Impossible - The Final Reckoning",
    description:
      "Ethan Hunt takes on his most challenging mission yet, confronting dark forces and breathtaking action to uncover a final reckoning in this edge-of-your-seat thriller.",
    genre: "Action/Thriller",
    posterUrl: "https://cdn.kinocheck.com/i/w=1200/zx68usyjqz.jpg",
    backPosterUrl:
      "https://posterspy.com/wp-content/uploads/2024/11/Poster-Mission-Impossible-final-reckoning-Grievity-V2.jpg",
    cast: [
      {
        actorName: "Tom Cruise",
        imageUrl:
          "https://live.screendollars.com/wp-content/uploads/2021/10/TOM-CRUISE-3-683x1024.jpg",
        role: "Ethan Hunt",
      },
      {
        actorName: "Hayley Atwell",
        imageUrl:
          "https://m.media-amazon.com/images/M/MV5BYjc1YmI2N2MtYTFkYS00NzcxLTlmN2QtOWQ1OWY0MTkxNTQzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        role: "Grace",
      },
      {
        actorName: "Simon Pegg",
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0YYEa3rr5vjUanX8LivXZqkb5YZAwXiiMLg&s",
        role: "Benji Dunn",
      },
      {
        actorName: "Ving Rhames",
        imageUrl:
          "https://media.themoviedb.org/t/p/w500/4gpLVNKPZlVucc4fT2fSZ7DksTK.jpg",
        role: "Luther Stickell",
      },
      {
        actorName: "Vanessa Kirby",
        imageUrl:
          "https://resizing.flixster.com/iZY8JxsuHXeJ9nbl7D6YgR3DQRQ=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/631337_v9_bb.jpg",
        role: "The White Widow",
      },
    ],
    director: [
      {
        directorName: "Christopher McQuarrie",
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLIxDpkSMXVIrCEc9hmavJBTntYNwXDEkybQ&s",
      },
    ],
    votes: { total: 5500, positive: 5000, negative: 500 },
  },
  {
    id: 6,
    title: "Doctor Strange in the Multiverse of Madness",
    description:
      "Doctor Strange embarks on a mind-bending journey through alternate dimensions, encountering new allies and foes in an action-filled quest to save the multiverse.",
    genre: "Fantasy/Action",
    posterUrl:
      "https://i.pinimg.com/736x/5f/78/16/5f7816d32e221fa134ec60fd4fab2777.jpg",
    backPosterUrl:
      "https://m.media-amazon.com/images/I/71BisddDMfL._AC_UF1000,1000_QL80_.jpg",
    cast: [
      {
        actorName: "Benedict Cumberbatch",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/4/4b/Benedict_Cumberbatch_SDCC_2014.jpg",
        role: "Dr. Stephen Strange",
      },
      {
        actorName: "Elizabeth Olsen",
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTedZIM9qPgZeQP4_v2nXixl8BMqwF0nvuvpw&s",
        role: "Wanda Maximoff",
      },
      {
        actorName: "Chiwetel Ejiofor",
        imageUrl:
          "https://images.mubicdn.net/images/cast_member/16850/cache-5714-1652166320/image-w856.jpg",
        role: "Baron Mordo",
      },
      {
        actorName: "Benedict Wong",
        imageUrl:
          "https://media.themoviedb.org/t/p/w500/yYfLyrC2CE6vBWSJfkpuVKL2POM.jpg",
        role: "Wong",
      },
      {
        actorName: "Xochitl Gomez",
        imageUrl:
          "https://hips.hearstapps.com/hmg-prod/images/gettyimages-1326191145.jpg?crop=1xw:1.0xh;center,top&resize=640:*",
        role: "America Chavez",
      },
    ],
    director: [
      {
        directorName: "Sam Raimi",
        imageUrl:
          "https://m.media-amazon.com/images/M/MV5BODQ0NjI0NzkzMV5BMl5BanBnXkFtZTYwMDc0ODk1._V1_FMjpg_UX1000_.jpg",
      },
    ],
    votes: { total: 4800, positive: 4300, negative: 500 },
  },
  {
    id: 7,
    title: "Oppenheimer",
    description:
      "A gripping historical drama about J. Robert Oppenheimer, the father of the atomic bomb, as he grapples with the moral and scientific challenges of his groundbreaking invention.",
    genre: "Thriller/Historical Drama",
    posterUrl:
      "https://www.thetimes.com/imageserver/image/%2Fmethode%2Fsundaytimes%2Fprod%2Fweb%2Fbin%2F8a94d29c-2566-11ee-bb13-0dec735736e8.jpg?crop=7956%2C5304%2C0%2C0",
    backPosterUrl:
      "https://imgs.search.brave.com/KD40eyuqHVYkyqpXY4wKqFwmDu5GjlvLlEJW0l41G_8/rs:fit:500:0:0:0/g:ce/aHR0cDovL3d3dy5p/bXBhd2FyZHMuY29t/LzIwMjMvcG9zdGVy/cy9vcHBlbmhlaW1l/cl92ZXIzLmpwZw",
    cast: [
      {
        actorName: "Cillian Murphy",
        imageUrl:
          "https://cdn.britannica.com/10/215010-050-A44F9280/Irish-actorName-Cillian-Murphy-2017.jpg",
        role: "J. Robert Oppenheimer",
      },
      {
        actorName: "Emily Blunt",
        imageUrl:
          "https://cdn.britannica.com/16/189516-050-E05AC3FA/Emily-Blunt-2013.jpg",
        role: "Kitty Oppenheimer",
      },
      {
        actorName: "Matt Damon",
        imageUrl:
          "https://m.media-amazon.com/images/M/MV5BMTM0NzYzNDgxMl5BMl5BanBnXkFtZTcwMDg2MTMyMw@@._V1_.jpg",
        role: "Leslie Groves",
      },
      {
        actorName: "Robert Downey Jr.",
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqYcTz6JIaJsEIjsqcIHs5r0M0SgIZF0hI1g&s",
        role: "Lewis Strauss",
      },
      {
        actorName: "Florence Pugh",
        imageUrl:
          "https://cdn.britannica.com/20/217320-050-181C95DC/English-actorName-Florence-Pugh-2019.jpg",
        role: "Jean Tatlock",
      },
    ],
    director: [
      {
        directorName: "Christopher Nolan",
        imageUrl:
          "https://resizing.flixster.com/WV9j5EZBP-RY_y_phbu4Rp-DVIM=/fit-in/352x330/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/233377_v9_bb.jpg",
      },
    ],
    votes: { total: 7000, positive: 6500, negative: 500 },
  },
  {
    id: 8,
    title: "No Country for Old Men",
    description:
      "A tense thriller where a hunter's discovery of a drug deal gone wrong sets off a violent chain of events, with a chilling hitman and a weary sheriff at its core.",
    genre: "Thriller/Western",
    posterUrl:
      "https://m.media-amazon.com/images/M/MV5BMjAxOTU1NzgyMl5BMl5BanBnXkFtZTYwNzM0MTM3._V1_.jpg",
    backPosterUrl:
      "https://s3.amazonaws.com/nightjarprod/content/uploads/sites/34/2019/11/13130306/No-Country-Poster.jpg",
    cast: [
      {
        actorName: "Tommy Lee Jones",
        imageUrl:
          "https://images.mubicdn.net/images/cast_member/2242/cache-2553-1561582001/image-w856.jpg",
        role: "Ed Tom Bell",
      },
      {
        actorName: "Javier Bardem",
        imageUrl:
          "https://images.squarespace-cdn.com/content/v1/5c6bd5f54d546e480d70927d/1569923127891-UMMS832TOITEKPC7GURI/Javier_Bardem-6554108+copy.jpg",
        role: "Anton Chigurh",
      },
      {
        actorName: "Josh Brolin",
        imageUrl:
          "https://hips.hearstapps.com/hmg-prod/images/josh-brolin-gettyimages-1138769016.jpg",
        role: "Llewelyn Moss",
      },
      {
        actorName: "Woody Harrelson",
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHaDGrqJ7jo3R_bTUlvRx1J_kYgilWqTq1Qg&s",
        role: "Carson Wells",
      },
      {
        actorName: "kelly Macdonald",
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5c11PAw2RpuUVEtOlGhQY8x4FEwpMlNF2ag&s",
        role: "Carla Jean Moss",
      },
    ],
    director: [
      {
        directorName: "Joel Coen",
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpjmvkbtvElEnUTp4Q4pwOQKChb3TVsJXu6Q&s",
      },
      {
        directorName: "Ethan Coen",
        imageUrl:
          "https://resizing.flixster.com/GXs5cv3yZDmnp6tVG6-hAwXiQmU=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/70553_v9_bb.jpg",
      },
    ],
    votes: { total: 6000, positive: 5500, negative: 500 },
  },
  {
    id: 9,
    title: "Top Gun: Maverick",
    description:
      "Ace pilot Maverick returns to train a new generation of fighter pilots while confronting the ghosts of his past in this high-octane aerial adventure.",
    genre: "Action/Adventure",
    posterUrl:
      "https://m.media-amazon.com/images/M/MV5BZmNiNGVlNGYtMDVjMy00MjNmLWI3ODYtM2NkNWMxNmVkMjBjXkEyXkFqcGc@._V1_.jpg",
    backPosterUrl:
      "https://m.media-amazon.com/images/I/71BokibfVUL._AC_UF894,1000_QL80_.jpg",
    cast: [
      {
        actorName: "Tom Cruise",
        imageUrl:
          "https://live.screendollars.com/wp-content/uploads/2021/10/TOM-CRUISE-3-683x1024.jpg",
        role: "Capt. Pete 'Maverick'",
      },
      {
        actorName: "Miles Teller",
        imageUrl:
          "https://hips.hearstapps.com/hmg-prod/images/gettyimages-1144626740.jpg?crop=0.6666666666666666xw:1xh;center,top&resize=640:*",
        role: "Lt. Bradley 'Rooster'",
      },
      {
        actorName: "Jennifer Connelly",
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3AmqSRdFNTXujBbxhMje9Ef1khMfQfWr31A&s",
        role: "Penny Benjamin",
      },
      {
        actorName: "Jon Hamm",
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHTqU93bUBh9DHfqFdhA6F3gBSCUEQ03tQ0Q&s",
        role: "Adm. Beau 'Cyclone'",
      },
      {
        actorName: "Glen Powell",
        imageUrl: "https://www.famousbirthdays.com/faces/powell-glen-image.jpg",
        role: "Lt. Jake 'Hangman'",
      },
    ],
    director: [
      {
        directorName: "Joseph Kosinski",
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3GPM_ZNYnRgDDEZ5yJIjJMJhXk7Q8U1lSeA&s",
      },
    ],
    votes: { total: 8000, positive: 7500, negative: 500 },
  },
  {
    id: 10,
    title: "Spider-Man: No Way Home",
    description:
      "Spider-Man faces his greatest challenge yet as multiverse villains wreak havoc, and allies from other dimensions lend a helping hand in this exhilarating superhero spectacle.",
    genre: "Action/Sci-fi",
    posterUrl:
      "https://cdn.theatlantic.com/thumbor/q-kk4nfMcCheC0ObDQHtnF356VY=/400x0:1806x1406/1080x1080/media/img/mt/2021/12/DF_12080_rv2/original.jpg",
    backPosterUrl:
      "https://cdn.marvel.com/content/1x/snh_online_6072x9000_posed_01.jpg",
    cast: [
      {
        actorName: "Tom Holland",
        imageUrl:
          "https://images.mubicdn.net/images/cast_member/499823/cache-587716-1600297708/image-w856.jpg",
        role: "Peter Parker",
      },
      {
        actorName: "Zendaya",
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFHVtnXJojAC1FnBdzkWtiK7M4STIeYPcLqA&s",
        role: "MJ",
      },
      {
        actorName: "Benedict Cumberbatch",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/4/4b/Benedict_Cumberbatch_SDCC_2014.jpg",
        role: "Dr. Stephen Strange",
      },
      {
        actorName: "Andrew Garfield",
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYGtU8SSjXCksgesiN_9IHkI2nnZWR-qps7Q&s",
        role: "Peter Parker",
      },
      {
        actorName: "Tobey Maguire",
        imageUrl:
          "https://hips.hearstapps.com/hmg-prod/images/gettyimages-455277688-copy.jpg",
        role: "Peter Parker",
      },
    ],
    director: [
      {
        directorName: "Jon Watts",
        imageUrl:
          "https://in.bmscdn.com/iedb/artist/images/website/poster/large/jon-watts-1057903-24-03-2017-17-55-32.jpg",
      },
    ],
    votes: { total: 9000, positive: 8500, negative: 500 },
  },
  {
    id: 11,
    title: "Ne Zha",
    description:
      "A rebellious young boy born with unique powers battles to change his fate and save his world in this visually stunning fantasy adventure.",
    genre: "Fantasy/Adventure",
    posterUrl:
      "https://i.pinimg.com/736x/a4/a9/1f/a4a91fbdff3b822df2d2574944af3bcb.jpg",
    backPosterUrl:
      "https://upload.wikimedia.org/wikipedia/en/a/a2/Nezha_film_poster.jpg",
    cast: [
      {
        actorName: "Yanting Lü",
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfgkF--a28uIFV3SpskPvTmwzz5x8TKuD8BA&s",
        role: "Boy Nezha (voice)",
      },
      {
        actorName: "Joseph",
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi9pPUEF0_70O532DuZAAN8bTP1Hyb1lRq5g&s",
        role: "Teenager Nezha (voice)",
      },
      {
        actorName: "Mo Han",
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfYsGPbIb_85z0CTFCtTJ9OdRNbBjqFIlOow&s",
        role: "Aobing (voice)",
      },
      {
        actorName: "Hao Chen",
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc-f1pm3Ga_sI4GJCFk7nsfGlUi-ztVnMgkw&s",
        role: "Li Jing (voice)",
      },
    ],
    director: [
      {
        directorName: "Yu Yang (Jiaozi)",
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBkm_iJqDIoVGNRdQ5_GjwNdW4walLibPSow&s",
      },
    ],
    votes: { total: 3000, positive: 2700, negative: 300 },
  },
  {
    id: 12,
    title: "The Pursuit of Happyness",
    description:
      "A heartwarming story of a father and son as they overcome homelessness and challenges, proving the power of determination and love.",
    genre: "Family/Drama",
    posterUrl:
      "https://image.tmdb.org/t/p/original/5jhG1lTgV0MS6tDkBMQSSitttTT.jpg",
    backPosterUrl:
      "https://m.media-amazon.com/images/M/MV5BMTQ5NjQ0NDI3NF5BMl5BanBnXkFtZTcwNDI0MjEzMw@@._V1_.jpg",
    cast: [
      {
        actorName: "Will Smith",
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeAJRn8SrkfuOOt024SDrRM0K0xOqD71suxA&s",
        role: "Chris Gardner",
      },
      {
        actorName: "Jaden Smith",
        imageUrl:
          "https://resizing.flixster.com/Y_oAT88rzeqsN62vRu8MBbxGdDw=/fit-in/352x330/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/276691_v9_bd.jpg",
        role: "Christopher",
      },
      {
        actorName: "Thandiwe Newton",
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSZfx-DQTMX-sSI3ziUXJ10VVXhZBLQJD8MA&s",
        role: "Linda",
      },
      {
        actorName: "Brian Howe",
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_DZXkLkpGOlo-JBM5VVtJ5dKHMzGmTpi4NA&s",
        role: "Jay Twistle",
      },
      {
        actorName: "James Karen",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/b/b2/James_Karen.jpg",
        role: "Martin Frohm",
      },
    ],
    director: [
      {
        directorName: "Gabriele Muccino",
        imageUrl:
          "https://images.mubicdn.net/images/cast_member/36814/cache-60551-1656675749/image-w856.jpg",
      },
    ],
    votes: { total: 4000, positive: 3800, negative: 200 },
  },
  {
    id: 13,
    title: "Raone",
    description:
      "An ambitious action-packed sci-fi about a video game villain brought to life, who must be stopped by a father and son duo in this Bollywood extravaganza.",
    genre: "Action/Sci-fi",
    posterUrl:
      "https://w0.peakpx.com/wallpaper/398/515/HD-wallpaper-shahrukh-khan-new-ra-one-movie-look-shahrukh-khan-ra-one-movie-look-shahrukh-khan-indian-actor-srk-king-khan-hero.jpg",
    backPosterUrl:
      "https://rukminim2.flixcart.com/image/850/1000/l2dmky80/poster/z/r/e/small-poster-ra-one-sl1251-wall-poster-13x19-inches-matte-original-imagdqezfpzvcz75.jpeg?q=90&crop=false",
    cast: [
      {
        actorName: "Shah Rukh Khan",
        imageUrl:
          "https://m.media-amazon.com/images/M/MV5BODk3OWIyY2MtM2E0MS00OWYyLTlkNDktMzY4MTE1MDhiYzBiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        role: "Shekhar Subramanium",
      },
      {
        actorName: "Kareena Kapoor",
        imageUrl:
          "https://filmfare.wwmindia.com/content/2025/apr/kareenakapoorkhanbotox31743661050.jpg",
        role: "Sonia Subramanium",
      },
      {
        actorName: "Arjun Rampal",
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOKRdTXUETRDCBDVdoEXrh2GiNhpngCtHRUA&s",
        role: "Ra.One",
      },
    ],
    director: [
      {
        directorName: "Anubhav Sinha",
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPoJdt8DEj5aMMz9CnI-VXaNVEyQJKyyz7fg&s",
      },
    ],
    votes: { total: 3500, positive: 3000, negative: 500 },
  },
  {
    id: 14,
    title: "Gladiator",
    description:
      "A Roman general seeks vengeance against the corrupt emperor who betrayed him, in an epic tale of honor, revenge, and survival.",
    genre: "Action/Adventure",
    posterUrl:
      "https://s.yimg.com/ny/api/res/1.2/gTbQ21ATu6iXrzVRo6yK7A--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTY0MA--/https://media.zenfs.com/en/people_218/7ab5f7b8e69e152fd99c997e94b419d0",
    backPosterUrl:
      "https://upload.wikimedia.org/wikipedia/en/thumb/f/fb/Gladiator_%282000_film_poster%29.png/250px-Gladiator_%282000_film_poster%29.png",
    cast: [
      {
        actorName: "Russell Crowe",
        imageUrl:
          "https://in.bmscdn.com/iedb/artist/images/website/poster/large/russell-crowe-4436-24-03-2017-12-35-39.jpg",
        role: "Maximus",
      },
      {
        actorName: "Joaquin Phoenix",
        imageUrl:
          "https://resizing.flixster.com/5xDRvR6lbvn_zmQYjNpSE_dpFc4=/fit-in/352x330/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/69768_v9_bc.jpg",
        role: "Commodus",
      },
      {
        actorName: "Connie Nielsen",
        imageUrl: "https://ntvb.tmsimg.com/assets/assets/155555_v9_bb.jpg",
        role: "Lucilla",
      },
      {
        actorName: "Oliver Reed",
        imageUrl:
          "https://m.media-amazon.com/images/M/MV5BMTM3NDg5MDg1MF5BMl5BanBnXkFtZTcwNzEwODkyOA@@._V1_.jpg",
        role: "Proximo",
      },
      {
        actorName: "Djimon Hounsou",
        imageUrl:
          "https://m.media-amazon.com/images/M/MV5BMjQ2NTM4MzI4M15BMl5BanBnXkFtZTcwOTkxMjcxNA@@._V1_FMjpg_UX1000_.jpg",
        role: "Juba",
      },
    ],
    director: [
      {
        directorName: "Ridley Scott",
        imageUrl:
          "https://resizing.flixster.com/Sq-ycGHye1a9rMDveBNRfWIoxwc=/fit-in/352x330/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/1575_v9_bb.jpg",
      },
    ],
    votes: { total: 5000, positive: 4700, negative: 300 },
  },
  {
    id: 15,
    title: "The Dark Knight",
    description:
      "Batman faces his greatest psychological and physical challenge yet as he battles the Joker, a criminal mastermind intent on unleashing chaos in Gotham City.",
    genre: "Action/Crime",
    posterUrl:
      "https://people.com/thmb/oz-pfgzByv4DqJ6w4jiiECCqv-I=/4000x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(667x0:669x2)/heath-ledger21-1-2000-2e816830729b4f3d8315f7bd192f42e3.jpg",
    backPosterUrl:
      "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_FMjpg_UX1000_.jpg",
    cast: [
      {
        actorName: "Christian Bale",
        imageUrl:
          "https://hips.hearstapps.com/hmg-prod/images/christian-bale-arrives-at-the-pale-blue-eye-los-angeles-news-photo-1706895210.jpg?crop=0.670xw:1.00xh;0.167xw,0&resize=1200:*",
        role: "Bruce Wayne",
      },
      {
        actorName: "Heath Ledger",
        imageUrl:
          "https://hips.hearstapps.com/hmg-prod/images/heath_ledger_getty_images_photo_bob_riha_jr_wireimage_116948085.jpg",
        role: "Joker",
      },
      {
        actorName: "Aaron Eckhart",
        imageUrl:
          "https://media.themoviedb.org/t/p/w235_and_h235_face/u5JjnRMr9zKEVvOP7k3F6gdcwT6.jpg",
        role: "Harvey Dent",
      },
      {
        actorName: "Michael Caine",
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2Bj0l8DTVhZUsMpLUl8EcBPHtzhrF2LAm6g&s",
        role: "Alfred",
      },
      {
        actorName: "Maggie Gyllenhaal",
        imageUrl:
          "https://sm.ign.com/ign_gr/cover/m/maggie-gyl/maggie-gyllenhaal_1tzc.jpg",
        role: "Rachel",
      },
    ],
    director: [
      {
        directorName: "Christopher Nolan",
        imageUrl:
          "https://resizing.flixster.com/WV9j5EZBP-RY_y_phbu4Rp-DVIM=/fit-in/352x330/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/233377_v9_bb.jpg",
      },
    ],
    votes: { total: 8000, positive: 7800, negative: 200 },
  },
  {
    id: 16,
    title: "Kingdom of Heaven",
    description:
      "A young blacksmith becomes a knight and embarks on a journey to defend Jerusalem during the Crusades in this epic tale of courage and faith.",
    genre: "Adventure/War",
    posterUrl:
      "https://i.pinimg.com/736x/ba/a5/c9/baa5c98749ffb09d9302568b88e067f8.jpg",
    backPosterUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcY33gVGSeNoXPreHLOMwBeKQ4Ohs7mXadaw&s",
    cast: [
      {
        actorName: "Orlando Bloom",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/UNICEF_Youth_for_Recovery_-_Orlando_Bloom_-_045A4280_%2852782827426%29_%28cropped%29_%28cropped%29_%28cropped%29.jpg/500px-UNICEF_Youth_for_Recovery_-_Orlando_Bloom_-_045A4280_%2852782827426%29_%28cropped%29_%28cropped%29_%28cropped%29.jpg",
        role: "Balian de Ibelin",
      },
      {
        actorName: "Eva Green",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/5/59/Eva_Green_%28Headshot%29.jpg",
        role: "Sibylla",
      },
      {
        actorName: "Jeremy Irons",
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2eyOk-h0uMqyuB3vCnDYMJR6vLVS-YYlO0w&s",
        role: "Tiberias",
      },
      {
        actorName: "David Thewlis",
        imageUrl:
          "https://resizing.flixster.com/obkJ7aGqUteWhwmJ6zlFymYDBKQ=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/15771_v9_bc.jpg",
        role: "Hospitaler",
      },
      {
        actorName: "Liam Neeson",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/f/f2/Liam_Neeson_Deauville_2012_3.jpg",
        role: "Godfrey de Ibelin",
      },
    ],
    director: [
      {
        directorName: "Ridley Scott",
        imageUrl:
          "https://resizing.flixster.com/Sq-ycGHye1a9rMDveBNRfWIoxwc=/fit-in/352x330/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/1575_v9_bb.jpg",
      },
    ],
    votes: { total: 4000, positive: 3700, negative: 300 },
  },
  {
    id: 17,
    title: "Udaan",
    description:
      "A coming-of-age drama that follows a teenager's journey to pursue his dreams and find freedom despite living under an oppressive father.",
    genre: "Drama/Melodrama",
    posterUrl:
      "https://img.mensxp.com/media/content/2023/Jul/fc_64b15b1061f01.jpeg?w=720&h=1280&cc=1",
    backPosterUrl:
      "https://occ-0-191-2433.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABQ0gYg9nK8QPzzUjKyIzOTd3zvV8F_Uw6CtXHEy3esHFrMEmqpi4oZRQI468fWRQb_CVM6vjhBrOOplYTq3RON_7SiCGD2cnzkzm.jpg?r=cae",
    cast: [
      {
        actorName: "Rajat Barmecha",
        imageUrl:
          "https://media.themoviedb.org/t/p/w235_and_h235_face/weOvUPazrHA1eLLUC6yccjg6Cpe.jpg",
        role: "Rohan Singh",
      },
      {
        actorName: "Ronit Roy",
        imageUrl:
          "https://media.themoviedb.org/t/p/w500/4ki1I9lH2TU0W5ZPMG5T90It9pc.jpg",
        role: "Bhairav Singh",
      },
      {
        actorName: "Ram Kapoor",
        imageUrl:
          "https://m.media-amazon.com/images/M/MV5BYWY3ZWIyMjQtNDIwYi00NTIzLWE2YzgtM2IyNjExMGZlNzQ0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        role: "Jimmy Singh",
      },
      {
        actorName: "Aayan Boradia",
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGbXLv90S_7cL0hdodaMkMbWgFDJc9nsp8hg&s",
        role: "Arjun Singh",
      },
      {
        actorName: "Manjot Singh",
        imageUrl:
          "https://m.media-amazon.com/images/M/MV5BOGE5NDM4ZWQtNzMxOS00ZjA4LWI5NWMtMTBhNmQ5MmQwODU3XkEyXkFqcGc@._V1_.jpg",
        role: "Maninder Singh",
      },
    ],
    director: [
      {
        directorName: "Vikramaditya Motwane",
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6MGMRbVEK3EgcqMP8sP8g2iRPLI0RPVkBfQ&s",
      },
    ],
    votes: { total: 2500, positive: 2300, negative: 200 },
  },
  {
    id: 18,
    title: "Bhavesh Joshi Superhero",
    description:
      "A young man embarks on a quest for justice as a masked vigilante, tackling corruption and crime in this gritty superhero drama.",
    genre: "Action/Drama",
    posterUrl:
      "https://media.assettype.com/film-companion%2Fimport%2Fwp-content%2Fuploads%2F2018%2F06%2FFilm_Companion_Review_Rahul_Bhavesh-Joshi_lead_1.jpg",
    backPosterUrl:
      "https://upload.wikimedia.org/wikipedia/en/6/64/Bhavesh_Joshi.jpg",
    cast: [
      {
        actorName: "Harshvardhan Kapoor",
        imageUrl:
          "https://m.media-amazon.com/images/M/MV5BZTQyMzcwODMtMjU5Zi00YjU2LThkNjAtOTRmNTk2ODExNmRlXkEyXkFqcGc@._V1_.jpg",
        role: "Sikander Khanna",
      },
      {
        actorName: "Priyanshu Painyuli",
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHuaTSUcyW8nSvUN0pvnnacbYYEZVl1NSYrw&s",
        role: "Bhavesh Joshi",
      },
      {
        actorName: "Ashish Verma",
        imageUrl:
          "https://in.bmscdn.com/iedb/artist/images/website/poster/large/ashish-verma-1067359-1708155587.jpg",
        role: "Rajat",
      },
      {
        actorName: "Nishikant Kamat",
        imageUrl:
          "https://in.bmscdn.com/iedb/artist/images/website/poster/large/nishikant-kamat-1609-08-09-2017-10-51-33.jpg",
        role: "Rana",
      },
    ],
    director: [
      {
        directorName: "Vikramaditya Motwane",
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6MGMRbVEK3EgcqMP8sP8g2iRPLI0RPVkBfQ&s",
      },
    ],
    votes: { total: 3000, positive: 2700, negative: 300 },
  },
  {
    id: 19,
    title: "Laal Kaptan",
    description:
      "Set in 18th century India, a relentless bounty hunter seeks vengeance in this atmospheric and action-packed period thriller.",
    genre: "Action/Thriller",
    posterUrl:
      "https://assets.telegraphindia.com/telegraph/30d260d8-1bab-4a11-ad57-57765d029528.jpg",
    backPosterUrl:
      "https://m.media-amazon.com/images/S/pv-target-images/c3bdf73f6c82a3ceca77a558f3b980fd8d546e352e20c7525260d7026914d832.jpg",
    cast: [
      {
        actorName: "Saif Ali Khan",
        imageUrl:
          "https://img.etimg.com/thumb/width-1200,height-1200,imgsize-30472,resizemode-75,msid-117347276/news/india/saif-ali-khan-recovering-well-expected-to-be-discharged-in-two-to-three-days-say-doctors.jpg",
        role: "Gossain",
      },
      {
        actorName: "Zoya Hussain",
        imageUrl:
          "https://in.bmscdn.com/iedb/artist/images/website/poster/large/zoya-hussain-1088348-08-12-2017-11-36-28.jpg",
        role: "Widow",
      },
      {
        actorName: "Manav Vij",
        imageUrl:
          "https://in.bmscdn.com/iedb/artist/images/website/poster/large/manav-vij-4560-01-09-2017-11-27-33.jpg",
        role: "Rehmat Khan",
      },
      {
        actorName: "Deepak Dobriyal",
        imageUrl:
          "https://static.toiimg.com/thumb/msid-51120201,width-400,resizemode-4/51120201.jpg",
        role: "Teacker",
      },
    ],
    director: [
      {
        directorName: "Navdeep Singh",
        imageUrl:
          "https://in.bmscdn.com/iedb/artist/images/website/poster/large/navdeep-singh-2746-24-03-2017-13-56-22.jpg",
      },
    ],
    votes: { total: 2000, positive: 1800, negative: 200 },
  },
  {
    id: 20,
    title: "Retro",
    description:
      "A stylish and intense drama about a man's battle against powerful foes, with a retro aesthetic and powerful action sequences.",
    genre: "Action/Drama",
    posterUrl:
      "https://assets.telegraphindia.com/telegraph/2024/Dec/1735112831_retro.jpg",
    backPosterUrl:
      "https://cdn.123telugu.com/content/wp-content/uploads/2025/04/retro-3.jpg",
    cast: [
      {
        actorName: "Suriya",
        imageUrl:
          "https://i.pinimg.com/736x/64/63/8e/64638e8280d312460783468232e83fa5.jpg",
        role: "Paarivel Kannan",
      },
      {
        actorName: "Pooja Hegde",
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXamKWm8fK3-b-adNBr7kABIFbVauyyRrMOg&s",
        role: "Rukmini",
      },
      {
        actorName: "Joju George",
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXaddbjMW1iPzLHyv84_gcHTH1XBE6y7cBZQ&s",
        role: "Singer",
      },
      {
        actorName: "Prakash Raj",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/1/14/Prakash_Raj_at_KLF_18_kozhikode.jpg",
        role: "",
      },
    ],
    director: [
      {
        directorName: "Karthik Subbaraj",
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT00gv-2qPh-MR_NiBswX4lj1-kqY-E_gPzSw&s",
      },
    ],
    votes: { total: 3500, positive: 3200, negative: 300 },
  },
  {
    id: 21,
    title: "Aavesham",
    description:
      "An action-packed comedy where an eccentric team takes on chaotic situations, blending hilarious antics with thrilling sequences.",
    genre: "Action/Comedy",
    posterUrl:
      "https://image.tmdb.org/t/p/original/5qBCsbbQQ1AP5O0xj9vguaJPlwz.jpg",
    backPosterUrl:
      "https://image.tmdb.org/t/p/original/zzq0aDpAltmyPsMD9vhSMe8F8T5.jpg",
    cast: [
      {
        actorName: "Fahadh Faasil",
        imageUrl:
          "https://media.themoviedb.org/t/p/w235_and_h235_face/wmkwZWFHqMptqdt4HacMIAe8OBP.jpg",
        role: "Ranga",
      },
      {
        actorName: "Hipzster",
        imageUrl:
          "https://images.filmibeat.com/img/popcorn/profile_photos/hipster-20240410175109-62780.jpg",
        role: "Aju",
      },
      {
        actorName: "Mithun Jai Shankar",
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRJKzmzWzoNkkpfB8R3YqbiuTq0FLvza_XxQ&s",
        role: "Bibin",
      },
      {
        actorName: "Roshan",
        imageUrl:
          "https://images.filmibeat.com/img/popcorn/profile_photos/roshanshanavas-20240410175247-62781.jpg",
        role: "Shanthan",
      },
      {
        actorName: "Sajin Gopu",
        imageUrl:
          "https://m.media-amazon.com/images/M/MV5BNmM1OGZiZmQtZTg4NS00MzI3LThlNGMtYTZkZjM3ZGM1MGRkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        role: "Amban",
      },
    ],
    director: [
      {
        directorName: "Jithu Madhavan",
        imageUrl:
          "https://media.themoviedb.org/t/p/w500/hw3v8VDPlMBdVDweSKH5IcLgdGP.jpg",
      },
    ],
    votes: { total: 2800, positive: 2500, negative: 300 },
  },
];
