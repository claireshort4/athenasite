import * as React from "react"
import { graphql } from "gatsby"
import {Container, createTheme} from "@mui/material";
import Header from "../components/Header";
import {ThemeProvider} from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiToolbar: {
      styleOverrides: {
        root: {
          backgroundColor: "green !important"
        }
      },
    },
  },
});

export default function PageTemplate({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
      const { frontmatter, html } = markdownRemark
  return (
    <div>
      <ThemeProvider theme={theme}>
          <Container maxWidth={"lg"}>
              <Header />
          </Container>
      </ThemeProvider>
      <Container>
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.date}</h2>
        <div
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </Container>
    </div>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`