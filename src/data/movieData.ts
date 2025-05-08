import type { MovieDetails } from "./interface";

export const MovieData: Array<MovieDetails> = [
  {
    title: "Avengers Infinity War",
    description:
      "The Avengers face their most powerful enemy yet—Thanos, who is on a mission to collect all six Infinity Stones and wipe out half of the universe. Heroes must unite to stop him in this thrilling action-packed sci-fi adventure.",
    genre: "Action/Sci-fi",
    posterUrl:
      "https://i.ytimg.com/vi/OvngUkG_Stw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCa8F6gB_1SWm4svhbCnYj2VNF8ww",
    backPosterUrl:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_FMjpg_UX1000_.jpg",
    cast: [
      "Robert Downey Jr.",
      "Chris Hemsworth",
      "Mark Ruffalo",
      "Chris Evans",
      "Scarlett Johansson",
    ],
    director: ["Anthony Russo, Joe Russo"],
    votes: { total: 5000, positive: 4500, negative: 500 },
  },
  {
    title: "Avengers Endgame",
    description:
      "After Thanos' devastating snap, the Avengers must navigate a broken world to find a way to reverse the damage and bring back their loved ones. A powerful conclusion to the Infinity Saga.",
    genre: "Action/Sci-fi",
    posterUrl:
      "https://c4.wallpaperflare.com/wallpaper/36/558/326/avengers-infinity-war-robert-downey-jr-tony-stark-iron-man-wallpaper-preview.jpg",
    backPosterUrl:
      "https://rukminim3.flixcart.com/image/850/1000/jtltw280/poster/t/x/7/medium-endgame3-avengers-endgame-new-poster-for-room-office-original-imafew7m4ggkqm9r.jpeg?q=90&crop=false",
    cast: [
      "Robert Downey Jr.",
      "Chris Evans",
      "Mark Ruffalo",
      "Chris Hemsworth",
      "Scarlett Johansson",
    ],
    director: "Anthony Russo, Joe Russo",
    votes: { total: 6000, positive: 5400, negative: 600 },
  },
  {
    title: "Harry Potter and the Prisoner of Azkaban",
    description:
      "Harry faces danger from escaped prisoner Sirius Black while uncovering the truth about his family's past. A magical journey packed with mystery and intrigue.",
    genre: "Family/Fantasy",
    posterUrl:
      "https://i.pinimg.com/474x/51/26/63/51266379e60e6333017b74486d33ea19.jpg",
    backPosterUrl:
      "https://m.media-amazon.com/images/M/MV5BMTY4NTIwODg0N15BMl5BanBnXkFtZTcwOTc0MjEzMw@@._V1_.jpg",
    cast: [
      "Daniel Radcliffe",
      "Emma Watson",
      "Rupert Grint",
      "Gary Oldman",
      "Michael Gambon",
    ],
    director: "Alfonso Cuarón",
    votes: { total: 4000, positive: 3600, negative: 400 },
  },
  {
    title: "Doctor Strange",
    description:
      "Surgeon Stephen Strange's life takes an otherworldly turn after an accident leads him to discover the mystic arts and become the Sorcerer Supreme, protecting Earth from magical threats.",
    genre: "Fantasy/Action",
    posterUrl: "https://i.redd.it/rww3fgutaxp01.jpg",
    backPosterUrl:
      "https://i.pinimg.com/736x/0f/f3/c9/0ff3c9f36e5a4cc6db99981f33b964d1.jpg",
    cast: [
      "Benedict Cumberbatch",
      "Chiwetel Ejiofor",
      "Rachel McAdams",
      "Benedict Wong",
      "Mads Mikkelsen",
    ],
    director: "Scott Derrickson",
    votes: { total: 4500, positive: 4000, negative: 500 },
  },
  {
    title: "Mission: Impossible - The Final Reckoning",
    description:
      "Ethan Hunt takes on his most challenging mission yet, confronting dark forces and breathtaking action to uncover a final reckoning in this edge-of-your-seat thriller.",
    genre: "Action/Thriller",
    posterUrl: "https://cdn.kinocheck.com/i/w=1200/zx68usyjqz.jpg",
    backPosterUrl:
      "https://posterspy.com/wp-content/uploads/2024/11/Poster-Mission-Impossible-final-reckoning-Grievity-V2.jpg",
    cast: [
      "Tom Cruise",
      "Hayley Atwell",
      "Simon Pegg",
      "Ving Rhames",
      "Vanessa Kirby",
    ],
    director: "Christopher McQuarrie",
    votes: { total: 5500, positive: 5000, negative: 500 },
  },
  {
    title: "Doctor Strange in the Multiverse of Madness",
    description:
      "Doctor Strange embarks on a mind-bending journey through alternate dimensions, encountering new allies and foes in an action-filled quest to save the multiverse.",
    genre: "Fantasy/Action",
    posterUrl:
      "https://i.pinimg.com/736x/5f/78/16/5f7816d32e221fa134ec60fd4fab2777.jpg",
    backPosterUrl:
      "https://m.media-amazon.com/images/I/71BisddDMfL._AC_UF1000,1000_QL80_.jpg",
    cast: [
      "Benedict Cumberbatch",
      "Elizabeth Olsen",
      "Chiwetel Ejiofor",
      "Benedict Wong",
      "Xochitl Gomez",
    ],
    director: "Sam Raimi",
    votes: { total: 4800, positive: 4300, negative: 500 },
  },
  {
    title: "Oppenheimer",
    description:
      "A gripping historical drama about J. Robert Oppenheimer, the father of the atomic bomb, as he grapples with the moral and scientific challenges of his groundbreaking invention.",
    genre: "Thriller/Historical Drama",
    posterUrl:
      "https://www.thetimes.com/imageserver/image/%2Fmethode%2Fsundaytimes%2Fprod%2Fweb%2Fbin%2F8a94d29c-2566-11ee-bb13-0dec735736e8.jpg?crop=7956%2C5304%2C0%2C0",
    backPosterUrl:
      "https://imgs.search.brave.com/KD40eyuqHVYkyqpXY4wKqFwmDu5GjlvLlEJW0l41G_8/rs:fit:500:0:0:0/g:ce/aHR0cDovL3d3dy5p/bXBhd2FyZHMuY29t/LzIwMjMvcG9zdGVy/cy9vcHBlbmhlaW1l/cl92ZXIzLmpwZw",
    cast: [
      "Cillian Murphy",
      "Emily Blunt",
      "Matt Damon",
      "Robert Downey Jr.",
      "Florence Pugh",
    ],
    director: "Christopher Nolan",
    votes: { total: 7000, positive: 6500, negative: 500 },
  },
  {
    title: "No Country for Old Men",
    description:
      "A tense thriller where a hunter's discovery of a drug deal gone wrong sets off a violent chain of events, with a chilling hitman and a weary sheriff at its core.",
    genre: "Thriller/Western",
    posterUrl:
      "https://m.media-amazon.com/images/M/MV5BMjAxOTU1NzgyMl5BMl5BanBnXkFtZTYwNzM0MTM3._V1_.jpg",
    backPosterUrl:
      "https://s3.amazonaws.com/nightjarprod/content/uploads/sites/34/2019/11/13130306/No-Country-Poster.jpg",
    cast: [
      "Tommy Lee Jones",
      "Javier Bardem",
      "Josh Brolin",
      "Woody Harrelson",
      "Kelly Macdonald",
    ],
    director: "Joel Coen, Ethan Coen",
    votes: { total: 6000, positive: 5500, negative: 500 },
  },
  {
    title: "Top Gun: Maverick",
    description:
      "Ace pilot Maverick returns to train a new generation of fighter pilots while confronting the ghosts of his past in this high-octane aerial adventure.",
    genre: "Action/Adventure",
    posterUrl:
      "https://m.media-amazon.com/images/M/MV5BZmNiNGVlNGYtMDVjMy00MjNmLWI3ODYtM2NkNWMxNmVkMjBjXkEyXkFqcGc@._V1_.jpg",
    backPosterUrl:
      "https://m.media-amazon.com/images/I/71BokibfVUL._AC_UF894,1000_QL80_.jpg",
    cast: [
      "Tom Cruise",
      "Miles Teller",
      "Jennifer Connelly",
      "Jon Hamm",
      "Glen Powell",
    ],
    director: "Joseph Kosinski",
    votes: { total: 8000, positive: 7500, negative: 500 },
  },
  {
    title: "Spider-Man: No Way Home",
    description:
      "Spider-Man faces his greatest challenge yet as multiverse villains wreak havoc, and allies from other dimensions lend a helping hand in this exhilarating superhero spectacle.",
    genre: "Action/Sci-fi",
    posterUrl:
      "https://cdn.theatlantic.com/thumbor/q-kk4nfMcCheC0ObDQHtnF356VY=/400x0:1806x1406/1080x1080/media/img/mt/2021/12/DF_12080_rv2/original.jpg",
    backPosterUrl:
      "https://cdn.marvel.com/content/1x/snh_online_6072x9000_posed_01.jpg",
    cast: [
      "Tom Holland",
      "Zendaya",
      "Benedict Cumberbatch",
      "Andrew Garfield",
      "Tobey Maguire",
    ],
    director: "Jon Watts",
    votes: { total: 9000, positive: 8500, negative: 500 },
  },
  {
    title: "Ne Zha",
    description:
      "A rebellious young boy born with unique powers battles to change his fate and save his world in this visually stunning fantasy adventure.",
    genre: "Fantasy/Adventure",
    posterUrl:
      "https://i.pinimg.com/736x/a4/a9/1f/a4a91fbdff3b822df2d2574944af3bcb.jpg",
    backPosterUrl:
      "https://upload.wikimedia.org/wikipedia/en/a/a2/Nezha_film_poster.jpg",
    cast: ["Yanting Lü", "Joseph", "Mo Han", "Hao Chen", "Qi Lü"],
    director: "Yu Yang (Jiaozi)",
    votes: { total: 3000, positive: 2700, negative: 300 },
  },
  {
    title: "The Pursuit of Happyness",
    description:
      "A heartwarming story of a father and son as they overcome homelessness and challenges, proving the power of determination and love.",
    genre: "Family/Drama",
    posterUrl:
      "https://image.tmdb.org/t/p/original/5jhG1lTgV0MS6tDkBMQSSitttTT.jpg",
    backPosterUrl:
      "https://m.media-amazon.com/images/M/MV5BMTQ5NjQ0NDI3NF5BMl5BanBnXkFtZTcwNDI0MjEzMw@@._V1_.jpg",
    cast: [
      "Will Smith",
      "Jaden Smith",
      "Thandiwe Newton",
      "Brian Howe",
      "James Karen",
    ],
    director: "Gabriele Muccino",
    votes: { total: 4000, positive: 3800, negative: 200 },
  },
  {
    title: "Raone",
    description:
      "An ambitious action-packed sci-fi about a video game villain brought to life, who must be stopped by a father and son duo in this Bollywood extravaganza.",
    genre: "Action/Sci-fi",
    posterUrl:
      "https://w0.peakpx.com/wallpaper/398/515/HD-wallpaper-shahrukh-khan-new-ra-one-movie-look-shahrukh-khan-ra-one-movie-look-shahrukh-khan-indian-actor-srk-king-khan-hero.jpg",
    backPosterUrl:
      "https://rukminim2.flixcart.com/image/850/1000/l2dmky80/poster/z/r/e/small-poster-ra-one-sl1251-wall-poster-13x19-inches-matte-original-imagdqezfpzvcz75.jpeg?q=90&crop=false",
    cast: [
      "Shah Rukh Khan",
      "Kareena Kapoor",
      "Arjun Rampal",
      "Armaan Verma",
      "Shahana Goswami",
    ],
    director: "Anubhav Sinha",
    votes: { total: 3500, positive: 3000, negative: 500 },
  },
  {
    title: "Gladiator",
    description:
      "A Roman general seeks vengeance against the corrupt emperor who betrayed him, in an epic tale of honor, revenge, and survival.",
    genre: "Action/Adventure",
    posterUrl:
      "https://s.yimg.com/ny/api/res/1.2/gTbQ21ATu6iXrzVRo6yK7A--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTY0MA--/https://media.zenfs.com/en/people_218/7ab5f7b8e69e152fd99c997e94b419d0",
    backPosterUrl:
      "https://upload.wikimedia.org/wikipedia/en/thumb/f/fb/Gladiator_%282000_film_poster%29.png/250px-Gladiator_%282000_film_poster%29.png",
    cast: [
      "Russell Crowe",
      "Joaquin Phoenix",
      "Connie Nielsen",
      "Oliver Reed",
      "Djimon Hounsou",
    ],
    director: "Ridley Scott",
    votes: { total: 5000, positive: 4700, negative: 300 },
  },
  {
    title: "The Dark Knight",
    description:
      "Batman faces his greatest psychological and physical challenge yet as he battles the Joker, a criminal mastermind intent on unleashing chaos in Gotham City.",
    genre: "Action/Crime",
    posterUrl:
      "https://people.com/thmb/oz-pfgzByv4DqJ6w4jiiECCqv-I=/4000x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(667x0:669x2)/heath-ledger21-1-2000-2e816830729b4f3d8315f7bd192f42e3.jpg",
    backPosterUrl:
      "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_FMjpg_UX1000_.jpg",
    cast: [
      "Christian Bale",
      "Heath Ledger",
      "Aaron Eckhart",
      "Michael Caine",
      "Maggie Gyllenhaal",
    ],
    director: "Christopher Nolan",
    votes: { total: 8000, positive: 7800, negative: 200 },
  },
  {
    title: "Kingdom of Heaven",
    description:
      "A young blacksmith becomes a knight and embarks on a journey to defend Jerusalem during the Crusades in this epic tale of courage and faith.",
    genre: "Adventure/War",
    posterUrl:
      "https://i.pinimg.com/736x/ba/a5/c9/baa5c98749ffb09d9302568b88e067f8.jpg",
    backPosterUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcY33gVGSeNoXPreHLOMwBeKQ4Ohs7mXadaw&s",
    cast: [
      "Orlando Bloom",
      "Eva Green",
      "Jeremy Irons",
      "David Thewlis",
      "Liam Neeson",
    ],
    director: "Ridley Scott",
    votes: { total: 4000, positive: 3700, negative: 300 },
  },
  {
    title: "Udaan",
    description:
      "A coming-of-age drama that follows a teenager's journey to pursue his dreams and find freedom despite living under an oppressive father.",
    genre: "Drama/Melodrama",
    posterUrl:
      "https://img.mensxp.com/media/content/2023/Jul/fc_64b15b1061f01.jpeg?w=720&h=1280&cc=1",
    backPosterUrl:
      "https://occ-0-191-2433.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABQ0gYg9nK8QPzzUjKyIzOTd3zvV8F_Uw6CtXHEy3esHFrMEmqpi4oZRQI468fWRQb_CVM6vjhBrOOplYTq3RON_7SiCGD2cnzkzm.jpg?r=cae",
    cast: [
      "Rajat Barmecha",
      "Ronit Roy",
      "Ram Kapoor",
      "Aayan Boradia",
      "Manjot Singh",
    ],
    director: "Vikramaditya Motwane",
    votes: { total: 2500, positive: 2300, negative: 200 },
  },
  {
    title: "Bhavesh Joshi Superhero",
    description:
      "A young man embarks on a quest for justice as a masked vigilante, tackling corruption and crime in this gritty superhero drama.",
    genre: "Action/Drama",
    posterUrl:
      "https://media.assettype.com/film-companion%2Fimport%2Fwp-content%2Fuploads%2F2018%2F06%2FFilm_Companion_Review_Rahul_Bhavesh-Joshi_lead_1.jpg",
    backPosterUrl:
      "https://upload.wikimedia.org/wikipedia/en/6/64/Bhavesh_Joshi.jpg",
    cast: [
      "Harshvardhan Kapoor",
      "Priyanshu Painyuli",
      "Ashish Verma",
      "Nishikant Kamat",
      "Shreiyah Sabharwal",
    ],
    director: "Vikramaditya Motwane",
    votes: { total: 3000, positive: 2700, negative: 300 },
  },
  {
    title: "Laal Kaptan",
    description:
      "Set in 18th century India, a relentless bounty hunter seeks vengeance in this atmospheric and action-packed period thriller.",
    genre: "Action/Thriller",
    posterUrl:
      "https://assets.telegraphindia.com/telegraph/30d260d8-1bab-4a11-ad57-57765d029528.jpg",
    backPosterUrl:
      "https://m.media-amazon.com/images/S/pv-target-images/c3bdf73f6c82a3ceca77a558f3b980fd8d546e352e20c7525260d7026914d832.jpg",
    cast: [
      "Saif Ali Khan",
      "Zoya Hussain",
      "Manav Vij",
      "Deepak Dobriyal",
      "Simone Singh",
    ],
    director: "Navdeep Singh",
    votes: { total: 2000, positive: 1800, negative: 200 },
  },
  {
    title: "Retro",
    description:
      "A stylish and intense drama about a man's battle against powerful foes, with a retro aesthetic and powerful action sequences.",
    genre: "Action/Drama",
    posterUrl:
      "https://assets.telegraphindia.com/telegraph/2024/Dec/1735112831_retro.jpg",
    backPosterUrl:
      "https://cdn.123telugu.com/content/wp-content/uploads/2025/04/retro-3.jpg",
    cast: ["Suriya", "Pooja Hegde", "Joju George", "Prakash Raj", "Nassar"],
    director: "Karthik Subbaraj",
    votes: { total: 3500, positive: 3200, negative: 300 },
  },
  {
    title: "Aavesham",
    description:
      "An action-packed comedy where an eccentric team takes on chaotic situations, blending hilarious antics with thrilling sequences.",
    genre: "Action/Comedy",
    posterUrl:
      "https://image.tmdb.org/t/p/original/5qBCsbbQQ1AP5O0xj9vguaJPlwz.jpg",
    backPosterUrl:
      "https://image.tmdb.org/t/p/original/zzq0aDpAltmyPsMD9vhSMe8F8T5.jpg",
    cast: [
      "Fahadh Faasil",
      "Hipzster",
      "Mithun Jai Shankar",
      "Roshan Shanavas",
      "Sajin Gopu",
    ],
    director: "Jithu Madhavan",
    votes: { total: 2800, positive: 2500, negative: 300 },
  },
];
