import React from "react"
import { graphql, Link } from "gatsby"
import { PortfolioItem } from "../../components/portfolio-item"

export const query = graphql`
  query($id: String = "") {
    contentfulPortfolioItem(id: { eq: $id }) {
      projectName
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
`

export default function PortfolioItemPage({ data }) {
  const item = data.contentfulPortfolioItem

  return (
    <>
      <PortfolioItem item={item} isPage />
      <Link to="/">Back to all portfolio items</Link>
    </>
  )
}
