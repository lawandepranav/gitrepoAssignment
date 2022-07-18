import React from "react";
import { fetchRepositories } from "./fetchRepositories";
import { usePagination } from '@mui/material/Pagination';


const GitRepo = () => {
  const [query, setQuery] = React.useState("");
  const [isError, setIsError] = React.useState(false);
  const [repo, setrepo] = React.useState([]);

  React.useEffect(() => {

    setIsError(false);
    fetchRepositories("react")
      .then((res) => {
        setrepo(res.data.items);
      })
      .catch((err) => {
        setIsError(true);
      })
    
  }, []);

  const handleSearch = () => {
  
    setIsError(false);
    fetchRepositories(query)
      .then((res) => {
        setrepo(res.data.items);
      })
      .catch((err) => {
        setIsError(true);
      })
  
  };
  return (
    <>
      <h1> Github Repositories </h1>
      <div>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="search"
        />
        <button  onClick={handleSearch}>
       Search
        </button>
      </div>
      {isError ? "please fill in text" : null}
    
      <div>
        {repo?.map((item) => (
          <div key={item.id}> {item.full_name} </div>
        ))}
      </div>
    </>
  );
};

export { GitRepo };
