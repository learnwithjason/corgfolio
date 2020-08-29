import React from "react"
import Image from "gatsby-image"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { MARKS } from "@contentful/rich-text-types"

export function PortfolioItem({ item, isPage = true }) {
  const HeadingComponent = ({ children }) =>
    isPage ? <h1>{children}</h1> : <h2>{children}</h2>

  const description = documentToReactComponents(item.description.json, {
    renderMark: {
      [MARKS.ITALIC]: text => <em>{text}</em>,
    },
  })

  return (
    <>
      <HeadingComponent>{item.projectName}</HeadingComponent>
      <Image fluid={item.screenshot.fluid} alt={item.screenshot.description} />
      <div>{description}</div>
    </>
  )
}
