import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";
import { createCache, extractStyle, StyleProvider } from "@ant-design/cssinjs";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const cache = createCache();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(
              <StyleProvider cache={cache} hashPriority='high'>
                <App {...props} />
              </StyleProvider>
            ),
        });

      const initialProps = await Document.getInitialProps(ctx);

      // antd v5 generates its CSS at render time, so it has to be extracted
      // from the cache and inlined here or the first paint is unstyled.
      const antdStyle = extractStyle(cache, true);

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            <style
              id='antd-cssinjs'
              dangerouslySetInnerHTML={{ __html: antdStyle }}
            />
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
      <Html lang='en'>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
