import React from "react"
import { graphql, Link } from "gatsby"
import { PortfolioItem } from "../components/portfolio-item"

export const query = graphql`
  query {
    allContentfulPortfolioItem {
      nodes {
        id
        projectName
        gatsbyPath(filePath: "/portfolio/{ContentfulPortfolioItem.projectName}")
        screenshot {
          fluid {
            ...GatsbyContentfulFluid_withWebp
          }
          description
        }
        description {
          json
        }
      }
    }
  }
`

export default function Home({ data }) {
  const items = data.allContentfulPortfolioItem.nodes

  return (
    <>
      <h1>My Portfolio!</h1>
      {items.map(item => (
        <Link key={item.id} to={item.gatsbyPath}>
          <PortfolioItem item={item} isPage={false} />
        </Link>
      ))}
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  )
}
