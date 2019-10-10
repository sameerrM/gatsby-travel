import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import TourList from "./TourList"
const Tours = () => {
  const { tours } = useStaticQuery(graphql`
    query {
      tours: allContentfulTour {
        edges {
          node {
            name
            price
            slug
            country
            contentful_id
            days
            images {
              fluid {
                ...GatsbyContentfulFluid
              }
            }
          }
        }
      }
    }
  `)

  return <TourList tours={tours} />
}

export default Tours