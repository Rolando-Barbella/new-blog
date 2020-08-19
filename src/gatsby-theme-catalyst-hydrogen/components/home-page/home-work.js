/** @jsx jsx */
import React from "react"
import { jsx, Styled } from "theme-ui"
import { graphql, useStaticQuery } from "gatsby"
import Card from "./home-card"
import { Fragment } from "react"

const FeaturedWork = () => {
  const data = useStaticQuery(graphql`
    query {
      allSanityHomePage(limit: 1, sort: { fields: _updatedAt, order: DESC }) {
        nodes {
          workTitle
        }
      }
      allSanityWork(sort: {order: ASC, fields: _id}, limit: 10) {
        edges {
          next {
            date
            title
            categories {
              title
            }
          }
          node {
            _createdAt(formatString: "")
            slug {
              current
            }
            date(formatString: "")
            title
            _id
          }
        }
      }
    }
  `);

  const lastPosts = data.allSanityWork.edges
  const result = data.allSanityHomePage.nodes[0]
  return (
    <>
      <Styled.h3>{result.workTitle}</Styled.h3>
      <div
        sx={{
          mt: 4,
        }}
      >
        {lastPosts.map(published => (
          <Fragment key={published.node._id}>
            <Card
              title={published.node.title}
              createdAt={published.node.date}
              slug={published.node.slug.current}
            />
            <div
              sx={{
                display: "grid",
                justifyItems: ["stretch", "start", null, null, null],
              }}
            >
            </div>
          </Fragment>
        ))
        }
      </div>
    </>
  )
}

export default FeaturedWork

// {/* <ButtonSecondary to="/work">More Published Work</ButtonSecondary> */ }