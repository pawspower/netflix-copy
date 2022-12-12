const key = 'ba8911610b50138ceb3a9d6d9f602d9f'

const requests = {
 requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
 requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
 requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2`,
//  requestHorror: `https://api.themoviedb.org/3/movie/?api_key=${key}&language=en-US&query=horror&page=1&include,
 requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
};

export default requests;