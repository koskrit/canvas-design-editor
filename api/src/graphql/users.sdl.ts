export const schema = gql`
  type User {
    Id: String!
    Email: String!
    Name: String!
    CreatedDate: DateTime!
    ModifiedDate: DateTime!
    Slug: String!
    ProfilePhoto: String!
    Project: [Project]!
  }

  type Query {
    users: [User!]! @skipAuth
    user(id: String!): User @skipAuth
  }

  input CreateUserInput {
    Id: String!
    Email: String!
    Name: String!
    CreatedDate: DateTime
    ModifiedDate: DateTime
    Slug: String!
    ProfilePhoto: String!
  }

  input UpdateUserInput {
    Id: String
    Email: String
    Name: String
    CreatedDate: DateTime
    ModifiedDate: DateTime
    Slug: String
    ProfilePhoto: String
  }

  type Mutation {
    createUser(input: CreateUserInput!): User! @skipAuth
    updateUser(id: String!, input: UpdateUserInput!): User! @skipAuth
    deleteUser(id: String!): User! @skipAuth
  }
`
