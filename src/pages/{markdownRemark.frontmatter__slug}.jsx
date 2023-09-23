import * as React from "react"
import { graphql } from "gatsby"
import {Container, createTheme} from "@mui/material";
import Header from "../components/Header";
import {ThemeProvider} from "@mui/material/styles";
import "./Main.css"

const theme = createTheme({
  components: {
    MuiToolbar: {
      styleOverrides: {
        root: {
          backgroundColor: "#f7f7f7 !important",
        },

      },
    },
    MuiButton: {
     styleOverrides: {
         text: {
             color: "#267896 !important",
         }
     }
    }
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
          <Container maxWidth={"xl"}>
              <Header />
          </Container>
      </ThemeProvider>
      <Container maxWidth={"xl"}>
        <h1>{frontmatter.title}</h1>
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
        slug
        title
      }
    }
  }
`