/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { Fragment } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { SanityContent } from "gatsby-theme-catalyst-sanity"

const HomeContact = () => {
  const data = useStaticQuery(graphql`
    query {
      sanityHomePage {
        contactTitle
        _rawContactText
      }
      headshot: file(relativePath: { eq: "bri-headshot.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 768) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  const result = data.sanityHomePage
  return (
    <Fragment>
      <Styled.h3>{result.contactTitle}</Styled.h3>
      <div
        sx={{
          flex: "2",
          "p:first-of-type": {
            mt: 0,
          },
        }}
      >
        <SanityContent data={result._rawContactText} />
      </div>
    </Fragment>
  )
}

export default HomeContact