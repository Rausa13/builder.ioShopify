import * as React from 'react';
import { graphql } from 'gatsby';
import SEO from '~/components/seo'
import ShopifyBuilderComponent from '../../components/ShopifyBuilderComponent';
import '~/components/ProductGrid/ProductGrid.builder';

const defaultDescription = 'Edit this in your entry for a better SEO';
const defaultTitle = 'Builder: Drag and Drop Page Building for Any Site';


function LandingPageTemplate({ data }) {
  const models = data?.allBuilderModels;
  const landingPage = models?.landingPage[0]?.content;

  return (
    <>
    <SEO title={(landingPage && landingPage.data.title) || defaultTitle}
         description={(landingPage && landingPage.data.description) || defaultDescription}
          urlPath="" />
      <ShopifyBuilderComponent
        content={landingPage}
        model="landing-page"
      />
    </>
  );
};

export default LandingPageTemplate;

export const query = graphql`
  query($path: String!) {
    allBuilderModels {
      landingPage(
        target: { urlPath: $path }
        limit: 1
        options: { cachebust: true }
      ) {
        content
      }
    }
  }
`;
