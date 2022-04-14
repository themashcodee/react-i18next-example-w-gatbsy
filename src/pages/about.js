import { graphql } from 'gatsby';
import * as React from "react"

import { useTranslation } from 'react-i18next'
import { Layout } from '../components/layout';

const About = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <p>{t('greeting', { page: "About Page" })}</p>
      <p>{t('welcome')}</p>
      <p>{t('about')}</p>
    </Layout>
  )
}

export default About

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