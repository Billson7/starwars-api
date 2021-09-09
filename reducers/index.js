const axios = require("axios");

const resolverFunctions = {
  Query: {
    hello: () => "world",
    people: async () => {
      const response = await axios.get("https://swapi.dev/api/people");
      return response.data.results;
    },
    planet: async () => {
      const response = await axios.get('https://swapi.dev/api/planets');
      return response.data.results
    },
    starships: async () => {
      const response = await axios.get('https://swapi.dev/api/starships');
      return response.data.results
    }
  },

};


module.exports = resolverFunctions
