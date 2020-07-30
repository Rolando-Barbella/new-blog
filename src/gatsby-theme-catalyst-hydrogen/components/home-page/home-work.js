/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { Fragment } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Card from "./home-card"
// import ButtonSecondary from "../button-secondary"

const FeaturedWork = () => {
  const data = useStaticQuery(graphql`
    query {
      allSanityHomePage(limit: 1, sort: { fields: _updatedAt, order: DESC }) {
        nodes {
          workTitle
        }
      }
      allSanityPage{
        nodes {
          id
          title
          _createdAt
          slug {
            current
          }
        }
      }
    }
  `)
  const writing = data.allSanityPage.nodes
  const result = data.allSanityHomePage.nodes[0]
  return (
    <Fragment>
      <Styled.h3>{result.workTitle}</Styled.h3>
      <div
        sx={{
          mt: 4,
          mb: 5,
        }}
      >
        {writing.map(published => (
          <Card
            title={published.title}
            createdAt={published._createdAt}
            slug={published.slug.current}
            key={published.id}
          />
        ))}
        <div
          sx={{
            display: "grid",
            justifyItems: ["stretch", "start", null, null, null],
          }}
        >
          {/* <ButtonSecondary to="/work">More Published Work</ButtonSecondary> */}
        </div>
      </div>
    </Fragment>
  )
}

export default FeaturedWork
