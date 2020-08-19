/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { Fragment } from "react"
import Img from "gatsby-image"

const PageHeader = ({ title, topImage, topImageAlt }) => {
  return (
    <Fragment>
      <Styled.h1>{title}</Styled.h1>
    </Fragment>
  )
}

export default PageHeader
