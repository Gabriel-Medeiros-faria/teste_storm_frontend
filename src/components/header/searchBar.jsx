import { useState } from "react";
import Autosuggest from "react-autosuggest";
import styled from "styled-components";

export default function SearchBar() {
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const getSuggestions = async (value) => {
    try {
      const response = await fetch(`/api/search?q=${value}`);
      const data = await response.json();
      return data.movies;
    } catch (error) {
      console.error("Erro ao buscar filmes:", error);
      return [];
    }
  };

  const onChange = (event, { newValue }) => {
    setValue(newValue);
  };

  const onSuggestionsFetchRequested = async ({ value }) => {
    const movies = await getSuggestions(value);
    setSuggestions(movies);
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const renderSuggestion = (suggestion) => (
    <div>
      <img src={suggestion.image} alt={suggestion.nome_do_filme} />
      <h3>{suggestion.nome_do_filme}</h3>
      <p>{suggestion.descricao_do_filme}</p>
    </div>
  );

  const inputProps = {
    placeholder: "Digite para pesquisar...",
    value,
    onChange: onChange,
  };

  // Autosugestões de acordo com o que o usuário for digitando no input
  return (
    <AutosuggestWrapper>
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        onSuggestionsClearRequested={onSuggestionsClearRequested}
        getSuggestionValue={(suggestion) => suggestion.nome_do_filme}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
      />
      <SuggestionsList>
        {suggestions.map((suggestion, index) => (
          <SuggestionItem key={index}>
            <img src={suggestion.image} alt={suggestion.nome_do_filme} />
            <h3>{suggestion.nome_do_filme}</h3>
            <p>{suggestion.descricao_do_filme}</p>
          </SuggestionItem>
        ))}
      </SuggestionsList>
    </AutosuggestWrapper>
  );
}


const AutosuggestWrapper = styled.div`
    width: 300px;

    .react-autosuggest__input {
      width: 100%;
      padding: 10px;
      font-size: 16px;
      border: 1px solid #ccc;
      border-radius: 5px;
      outline: none;
    }

    .react-autosuggest__suggestions-container {
      display: none;
      position: absolute;
      top: 100%;
      width: 100%;
      z-index: 5;
    }

    .react-autosuggest__suggestions-container--open {
      display: block;
    }

    .react-autosuggest__suggestions-list {
      margin: 0;
      padding: 0;
      list-style-type: none;
      background-color: #fff;
      border: 1px solid #ccc;
      border-radius: 5px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .react-autosuggest__suggestion {
      padding: 10px;
      cursor: pointer;
    }

    .react-autosuggest__suggestion--highlighted {
      background-color: #f0f0f0;
    }
  `;

const SuggestionsList = styled.ul`
  position: absolute;
  top: 40px; /* Altura da barra de pesquisa */
  left: 0;
  right: 0;
  margin: 0;
  padding: 0;
  background-color: #ffffff;
  border-top: none;
  border-radius: 0 0 5px 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  list-style-type: none;
`;

const SuggestionItem = styled.li`
  padding: 10px;
  border-bottom: 1px solid #ccc;

  &:last-child {
    border-bottom: none;
  }
`;
