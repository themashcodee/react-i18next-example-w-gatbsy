import * as React from "react"
import { graphql } from "gatsby"

import { useTranslation } from 'react-i18next'
import { Layout } from '../components/layout'

const IndexPage = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <p>{t('greeting', { page: "Home Page" })}</p>
      <p>{t('welcome')}</p>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: {language: {eq: $language}}) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
