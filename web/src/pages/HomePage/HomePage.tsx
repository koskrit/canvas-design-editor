import { Spinner } from '@chakra-ui/react'

import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import ProjectsCell from 'src/components/cells/ProjectsCell'
import useGlobalState from 'src/contexts/initialization'

const HomePage = () => {
  const { currentUser } = useAuth()
  console.log(currentUser)

  return (
    <>
      <MetaTags title="Home" description="Home page" />
      {currentUser ? (
        <ProjectsCell Id={currentUser?.sub} />
      ) : (
        <Spinner size={'xl'} />
      )}
    </>
  )
}

export default HomePage
