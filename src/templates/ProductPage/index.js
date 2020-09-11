import React from 'react'
import { graphql } from 'gatsby'
import SEO from '~/components/seo'
import {
  Container,
} from '~/utils/styles'
import ShopifyBuilderComponent from '../../components/ShopifyBuilderComponent'
import './productBody.builder';

const ProductPage = ({ data }) => {
  const product = data.shopifyProduct
  const builderContent = data.allBuilderModels?.productPage?.[0]?.content
  console.log('product 22 2 ', product)

  return (
    <>
      <SEO title={product.title} description={product.description} />
      <Container>
  { product && <ShopifyBuilderComponent model='product-page' content={builderContent} data={ { product } } /> }
      </Container>
    </>
  )
}

export const query = graphql`
  query($handle: String!) {
    allBuilderModels {
      productPage(limit: 1, options: { cachebust: true }) {
        content
      }
    }
    shopifyProduct(handle: { eq: $handle }) {
      id
      title
      handle
      productType
      description
      descriptionHtml
      shopifyId
      options {
        id
        name
        values
      }
      variants {
        id
        title
        price
        availableForSale
        shopifyId
        selectedOptions {
          name
          value
        }
      }
      priceRange {
        minVariantPrice {
          amount
          currencyCode
        }
        maxVariantPrice {
          amount
          currencyCode
        }
      }
      images {
        originalSrc
        id
        localFile {
          childImageSharp {
            fluid(maxWidth: 910) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default ProductPage
