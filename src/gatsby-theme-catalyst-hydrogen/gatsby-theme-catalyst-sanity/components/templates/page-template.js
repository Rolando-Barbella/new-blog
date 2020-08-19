/** @jsx jsx */
import { jsx } from "theme-ui"
import { SEO, Layout } from "gatsby-theme-catalyst-core"
import PageHeader from "../../../components/page-header"
import {
  SanityContent,
  SanityThemeProvider,
} from "gatsby-theme-catalyst-sanity"

const PageTemplate = ({ data }) => {
  const result = data.sanityPage
  return (
    <SanityThemeProvider>
      <Layout>
        <div
          sx={{
            mt: 50,
            mb: 0,
          }}
        >
          <SEO title={result.title} />
          <PageHeader
            topImageAlt={result.featuredImage.alt}
            title={result.title}
          />
          <SanityContent data={result._rawBody} />
        </div>
      </Layout>
    </SanityThemeProvider>
  )
}

export default PageTemplate
