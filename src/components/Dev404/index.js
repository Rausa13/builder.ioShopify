import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Container } from '~/utils/styles'
import { Link as GatsbyLink } from 'gatsby'

const Dev404 = () => {
  const allPages = useStaticQuery(graphql`
    query PagesQuery {
      allSitePage(filter: { path: { ne: "/dev-404-page/" } }) {
        nodes {
          path
          component
        }
      }
    }
  `)

  return (
    <Container>
      <h2>Custom Dev page</h2>
      <p>This is a development only page</p>
      <ul>
        {allPages.allSitePage.nodes.map(item => (
          <li key={item.path}>
            <GatsbyLink title={item.component} to={item.path}>  {item.path} </GatsbyLink>
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default Dev404
