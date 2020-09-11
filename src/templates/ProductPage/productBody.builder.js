import React from 'react'
import { Builder } from '@builder.io/react'
import {
  ProductTitle,
  ProductDescription,
} from './styles'
import { Img, TwoColumnGrid, GridLeft, GridRight } from '~/utils/styles'
import ProductForm from '~/components/ProductForm'

const ProductBody = ({ product }) => (<TwoColumnGrid>
<GridLeft>
  {product.images.map(image => (
    <Img
      fluid={image.localFile.childImageSharp.fluid}
      key={image.id}
      alt={product.title}
    />
  ))}
</GridLeft>
<GridRight>
  <ProductTitle>{product.title}</ProductTitle>
  <ProductDescription
    dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
  />
  <ProductForm product={product} />
</GridRight>
</TwoColumnGrid>)


Builder.registerComponent(ProductBody, {
  name: 'Product page body',
  defaults: {
    bindings: {
     'component.options.product': 'state.product'
    }
  }
})