export const schema = gql`
  type Image {
    Id: String!
    Creator: User!
    userId: String!
    ImageUrl: String!
    CreatedAt: DateTime!
    ProjectId: String!
  }

  type Query {
    images: [Image!]! @skipAuth
    image(id: String!): Image @skipAuth
  }

  input CreateImageInput {
    Id: String
    userId: String!
    ImageUrl: String!
    CreatedAt: DateTime
    ProjectId: String!
  }

  input UpdateImageInput {
    Id: String
    userId: String
    ImageUrl: String
    CreatedAt: DateTime
  }

  type Mutation {
    createImage(input: CreateImageInput!): Image! @skipAuth
    updateImage(id: String!, input: UpdateImageInput!): Image! @skipAuth
    deleteImage(id: String!): Image! @skipAuth
  }
`
