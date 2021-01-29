import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html id="html">
        <Head />
        <body className="lg:overflow-scroll">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument