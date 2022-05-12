import React, { useState, useEffect } from "react";
import axios from "axios";
import { queryByTitle } from "@testing-library/react";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("programming");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const searchResponse = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: searchTerm,
        },
      });
      setResults(data.query.search);
    };

    if (searchTerm && !results.length) {
      searchResponse();
    } else {
      const timeOutId = setTimeout(() => {
        if (searchTerm) {
          searchResponse();
        }
      }, 1000);

      return () => {
        clearTimeout(timeOutId);
      };
    }
  }, [searchTerm]);

  const renderedResults = results.map((result) => {
    return (
      <div key={result.pageid} className="item">
        <div className="right floated content">
          <a
            className="ui button"
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
          >
            Go
          </a>
        </div>
        <div className="header">{result.title}</div>

        <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
      </div>
    );
  });

  return (
    <div className="ui container">
      <div className="ui form">
        <div className="ui field">
          <label>Enter Search term</label>
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      <div className="ui celled list">{renderedResults}</div>
    </div>
  );
};

export default Search;
