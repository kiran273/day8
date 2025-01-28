const cinema = {
  name: "AMB Cinemas",
  location: "HiTech City",
  screens: 3,
  movies: [
    {
      title: "Kalki",
      shows: ["10AM", "3PM", "6.30PM"],
      seats: [150, 180, 120],
      image:
        "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/kalki-2898-ad-et00352941-1718275859.jpg",
    },
    {
      title: "Pushpa 2",
      shows: ["11AM", "4PM", "7PM"],
      seats: [60, 100, 140],
      image:
        "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/pushpa-2-the-rule-et00356724-1737184762.jpg",
    },
    {
      title: "Guntur Kaaram",
      shows: ["9AM", "4PM", "5PM"],
      seats: [60, 90, 120],
      image:
        "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/guntur-kaaram-et00310760-1686726453.jpg",
    },
  ],
};

// Display in Console
console.log("Theater Name:", cinema.name);
console.log("First Movie:", cinema.movies[0].title);
console.log("Second Movie:", cinema.movies[1].title);
console.log("Third Movie:", cinema.movies[2].title);
console.log(cinema.movies[0].image);
