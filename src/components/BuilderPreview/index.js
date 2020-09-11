import React, { useContext, useState, useEffect } from 'react'
import { Router } from '@reach/router'
import BuilderProductPage from '~/templates/ProductPage'
import LandingPageTemplate from '~/templates/LandingPage'
import StoreContext from '~/context/StoreContext'

const BuilderPreview = () => {
  return (
    <Router>
      <ProductPagePreview path="/products/:productHandle" />
      <LandingPagePreview path="/:pageSlug" />
      <LandingPagePreview path="/" />
    </Router>
  )
}

const LandingPagePreview = ({ pageSlug }) => {
  return <LandingPageTemplate />
}

// productHandle will be passed from Routers when /product/....
const ProductPagePreview = ({ productHandle }) => {
  const { store } = useContext(StoreContext)
  const [data, setData] = useState(null)
  useEffect(() => {
    store.client.product.fetchByHandle(productHandle).then(product => {
      if (product) {
        setData({
          shopifyProduct: product,
        })
      }
    })
  }, [productHandle, store])
  return data ? <BuilderProductPage data={data} /> : null
}

export default BuilderPreview
