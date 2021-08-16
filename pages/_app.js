import Layout from 'layouts/Layout'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from 'styles/global'
import theme from "styles/theme"

function MyApp({ Component, pageProps }) {

  return <>
    <Head>
      <title>D&C | Digital Services</title>
      <meta charSet="utf-8" />
      <meta name="viewport"content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Demol & Co. met à votre disposition nos ingénieurs pour développer votre entreprise et répondre à vos besoins se rapportant aux technologies de l’information et de la communication. Des solutions digitales sur mesure et efficaces pour les PME/TPE, rejoignez D&C dès maitenant pour en savoir plus !" />
      <meta name="author" content="Demol Nicolas" />
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap" rel="stylesheet" />
      <link rel="icon" type="image/png" href="images/logodncround.png" />
    </Head>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  </>
}
export default MyApp
