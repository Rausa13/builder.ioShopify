import { Builder, builder, BuilderComponent } from '@builder.io/react'
import '@builder.io/widgets'
import React, { useContext } from 'react'
import StoreContext from '~/context/StoreContext'
import Link from '~/components/Link'

builder.init(process.env.BUILDER_API_KEY)

Builder.isStatic = true

const ShopifyBuilderComponent = ({ content, data, ...props }) => {
  console.log('data  2 .. ', data, props.model);
 //  const { store } = useContext(StoreContext)
  return <BuilderComponent
        renderLink={Link}
        data={{
          // store,
          ...data,
        }}
        {...(!(Builder.isEditing || Builder.isPreviewing) &&
          content && { content })}
        {...props}
      />
}

export default ShopifyBuilderComponent
