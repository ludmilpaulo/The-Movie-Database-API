export const getAllCartmovies = (items: any[]) => {
  let allmovies: any[] = [];
  const moviesData = items.map((x: { movies: any }) => x.movies);
  moviesData.map((movie: any[]) => {
    movie.map((x: any) => {
      allmovies = [...allmovies, x];
    });
  });
  return allmovies;
};

export const getTotalCartItemPrice = (items: any[]) => {
  let allmovies: any[] = [];
  const moviesData = items.map((x: { movies: any }) => x.movies);
  moviesData.map((movie: any[]) => {
    movie.map((x: any) => {
      allmovies = [...allmovies, x];
    });
  });
  return allmovies; //.reduce((total, item) => total + item.price, 0).toFixed(1)
};
