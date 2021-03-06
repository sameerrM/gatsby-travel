import React from 'react'
import Image from 'gatsby-image'
import styles from '../../css/tour.module.css'
import { FaGlobeAmericas } from 'react-icons/fa'
import Anilink from 'gatsby-plugin-transition-link/AniLink'

const Tour = ({ tour }) => {
    const { name, price, country, days, slug, images } = tour

    let mainImage = images[0].fluid

    return (
        <div>
            <article className={styles.tour}>
                <div className={styles.imgContainer}>
                    <Image fluid={mainImage} className={styles.img} alt="single tour" />
                    <Anilink fade className={styles.link} to={`/tours/${slug}`}>Details</Anilink>
                </div>
                <div className={styles.footer}>
                    <h3>{name}</h3>
                    <div className={styles.info}>
                        <h4 className={styles.country}>
                            <FaGlobeAmericas className={styles.icon} />
                            {country}
                        </h4>
                        <div className={styles.details}>
                            <h6>{days} days</h6>
                            <h6>from ${price}</h6>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}

export default Tour
