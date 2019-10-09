import React from 'react'
import { graphql } from 'gatsby'
import styles from '../css/single-blog.module.css'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const Blog = ({ data }) => {
    const { title, published, text: { json } } = data.post
    const options = {
        renderNode: {
            "embedded-asset-block": (node) => {
                return (
                    <div className="rich">
                        <h3>This is awesome image</h3>
                        <img width="400" src={node.data.target.fields.file['en-US'].url} alt="" />
                        <p>images provided by <strong>John Doe</strong></p>
                    </div>
                )
            }
        }
    }

    return (
        <section className={styles.blog}>
            <div className={styles.center}>
                <h1>{title}</h1>
                <h4>published at : {published}</h4>
                <article className={styles.post}>
                    {documentToReactComponents(json, options)}
                </article>
                <AniLink fade to='/blog' className="btn-primary">back to posts</AniLink>
            </div>
        </section>
    )
}

export const query = graphql`
query getPost($slug:String!){
  post:contentfulPost(slug:{eq:$slug}){
    title
    published(formatString: "MMMM Do, YYYY")
    text{
      json
    }
  }
}
`

export default Blog