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
    users: [User!]! @requireAuth
    user(id: String!): User @requireAuth
  }

  input CreateUserInput {
    Id: String!
    Email: String!
    Name: String!
    CreatedDate: DateTime!
    ModifiedDate: DateTime!
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
    createUser(input: CreateUserInput!): User! @requireAuth
    updateUser(id: String!, input: UpdateUserInput!): User! @requireAuth
    deleteUser(id: String!): User! @requireAuth
  }
`
