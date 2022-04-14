import React from "react"
import { graphql } from 'gatsby';
import { useTranslation } from 'react-i18next';
import { Layout } from '../components/layout';

const UsingSSR = ({ serverData }) => {
  const { t } = useTranslation();
  console.log('SSR', serverData);

  return (
    <Layout>
      <p>{t('greeting', { page: "SSR Page" })}</p>
      <p>{t('welcome')}</p>
    </Layout>
  )
}

export default UsingSSR

export async function getServerData() {
  try {
    const res = await fetch(`https://dog.ceo/api/breeds/image/random`)
    if (!res.ok) {
      throw new Error(`Response failed`)
    }
    return {
      props: await res.json(),
    }
  } catch (error) {
    return {
      status: 500,
      headers: {},
      props: {},
    }
  }
}

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
