import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head />
        <body className="lg:overflow-scroll">
        <script src="noflash.js" />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument