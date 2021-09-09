const { ApolloServer, gql } = require("apollo-server");
const resolverFunctions = require("./reducers");
// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  # This "Person" type defines the queryable fields for every Person in our data source.
  type Person {
    name: String
    birth_year: String
    eye_color: String
    gender: String
    homeworld: String
    height: Int
    mass: Int
  }

  type Planet {
    name: String
    rotation_period: Int
    orbital_period: Int
    population: String
  }
  
  type Starship {
    name: String
    model : String
  }
  
  type Me {
    name: String
    firstName: String
    age: Int
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    hello: String
    me: [Me]
    people: [Person]
    planet: [Planet]
    starships: [Starship]
  }
`;

// ---------------------Example Data Set---------------------
// const me = [
//   {
//     name: "Alex Billson",
//     firstName: 'Alex',
//     age: 24
//   }
// ];


// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const { hello, people, planet, starships } = resolverFunctions.Query
const resolvers = {
  Query: {
    hello: () => hello(),
    people: () => people(),
    planet: () => planet(),
    starships: () => starships()
  },
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
