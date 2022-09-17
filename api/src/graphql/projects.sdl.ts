export const schema = gql`
  type Project {
    Id: String!
    Creator: User!
    userId: String!
    Name: String!
    PreviewImage: String!
    Height: Int!
    Width: Int!
    BackgroundColor: String!
    Slug: String!
    Serialization: String!
  }

  type Query {
    projects: [Project!]! @requireAuth
    project(id: String!): Project @requireAuth
  }

  input CreateProjectInput {
    Id: String!
    userId: String!
    Name: String!
    PreviewImage: String!
    Height: Int!
    Width: Int!
    BackgroundColor: String!
    Slug: String!
    Serialization: String!
  }

  input UpdateProjectInput {
    Id: String
    userId: String
    Name: String
    PreviewImage: String
    Height: Int
    Width: Int
    BackgroundColor: String
    Slug: String
    Serialization: String
  }

  type Mutation {
    createProject(input: CreateProjectInput!): Project! @requireAuth
    updateProject(id: String!, input: UpdateProjectInput!): Project!
      @requireAuth
    deleteProject(id: String!): Project! @requireAuth
  }
`
