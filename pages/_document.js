import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <script src="https://www.gstatic.com/firebasejs/7.14.4/firebase-app.js"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src="https://www.gstatic.com/firebasejs/7.14.4/firebase-auth.js"></script>
          <script src="https://www.gstatic.com/firebasejs/7.14.4/firebase-firestore.js"></script>
        </body>
      </Html>
    );
  }
}
