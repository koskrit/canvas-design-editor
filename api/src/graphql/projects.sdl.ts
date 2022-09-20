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
    Image: [Image]
  }

  type Query {
    projects: [Project!]! @skipAuth
    project(id: String!): Project @skipAuth
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
    createProject(input: CreateProjectInput!): Project! @skipAuth
    updateProject(id: String!, input: UpdateProjectInput!): Project! @skipAuth
    deleteProject(id: String!): Project! @skipAuth
  }
`
