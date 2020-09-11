import React from 'react'
import SEO from '~/components/seo'
import { Builder } from '@builder.io/react'
import { Router } from '@reach/router'
import BuilderPreview from '~/components/BuilderPreview'
import loadable from '@loadable/component'

const AsyncDev404 = loadable(() => import('~/components/Dev404'))

export default function FourOhFour(props) {
  return (
    <Router>
      {(Builder.isEditing || Builder.isPreviewing) && (
        <BuilderPreview path='/*'/>
      )}
      {process.env.NODE_ENV === 'development' ? (
        <AsyncDev404 default />
      ) : (
        <NotFoundPage default />
      )}
    </Router>
  )
}

const NotFoundPage = () => (
  <>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </>
)