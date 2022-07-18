import axios from "axios";

function fetchRepositories(query, page) {
  if (!query) {
    return Promise.reject("query should be provided");
  }

  return axios.get(`https://api.github.com/search/repositories?q=${query}&per_page=10&page=${page}`, {
   
  });
}

export { fetchRepositories };
