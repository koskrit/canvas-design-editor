import type {
  QueryResolvers,
  MutationResolvers,
  ProjectRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const projects: QueryResolvers['projects'] = () => {
  return db.project.findMany()
}

export const project: QueryResolvers['project'] = ({ id }) => {
  return db.project.findUnique({
    where: { id },
    include: {
      Image: true,
    },
  })
}

export const createProject: MutationResolvers['createProject'] = ({
  input,
}) => {
  input.ModifiedDate = new Date()
  return db.project.create({
    data: input,
  })
}

export const updateProject: MutationResolvers['updateProject'] = ({
  id: Id,
  input,
}) => {
  input.ModifiedDate = new Date()

  return db.project.update({
    data: input,
    where: { Id },
  })
}

export const deleteProject: MutationResolvers['deleteProject'] = ({ id }) => {
  return db.project.delete({
    where: { id },
  })
}

export const Project: ProjectRelationResolvers = {
  Creator: (_obj, { root }) => {
    return db.project.findUnique({ where: { id: root?.id } }).Creator()
  },
}
