const API_KEY = "6b2c6d04eddf105bce8699c23fa6ae19";
const requests = {
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=123`,
    fetchActionMovies: `/discover/?api_key=${API_KEY}&with_networks=28`,
    fetchComedyMovies: `/discover/tv?api_key=${API_KEY}&with_networks=35`,
    fetchHorrorMovies: `/discover/tv?api_key=${API_KEY}&with_networks=27`,
    fetchRomanceMovies: `/discover/tv?api_key=${API_KEY}&with_networks=10749`,
    fetchDocumentaries: `/discover/tv?api_key=${API_KEY}&with_networks=99`,


};
//"https://api.themoviedb.org/3/trending/all/week?api_key=6b2c6d04eddf105bce8699c23fa6ae19&language=en-US" 
export default requests;
//https://api.themoviedb.org/3/movie/550?api_key=6b2c6d04eddf105bce8699c23fa6ae19