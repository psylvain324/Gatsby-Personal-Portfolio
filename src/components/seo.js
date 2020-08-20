import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

function SEO({ description, lang, meta, title}) {
  const metaDescription = description

  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      title={title}
      meta={[
        {
           name: `description`,
           content: metaDescription,
         },
         {
           property: `og:title`,
           content: title,
         },
         {
           property: `og:description`,
           content: metaDescription,
         },
         {
           property: `og:type`,
           content: `website`,
         },
         {
           name: `twitter:card`,
           content: `summary`,
         },
         {
           name: `twitter:creator`,
           content: `Phillip Sylvain`,
         },
         {
           name: `twitter:title`,
           content: title,
         },
         {
            name: `facebook:card`,
            content: `summary`,
          },
          {
            name: `facebook:creator`,
            content: `Phillip Sylvain`,
          },
          {
            name: `facebook:title`,
            content: title,
          },
         {
           name: `facebook:description`,
           content: metaDescription,
         }
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired
}


export default SEO