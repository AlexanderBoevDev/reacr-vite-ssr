import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { escapeInject, dangerouslySkipEscape } from 'vike/server';
import { Routers } from "./routers";

const passToClient = ['pageProps']

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
async function render(pageContext) {
  const { Page, pageProps, urlPathname } = pageContext
  const pageHtml = renderToString(
    <StaticRouter location={urlPathname}>
      {/*eslint-disable-next-line @typescript-eslint/ban-ts-comment*/}
      {/*@ts-ignore*/}
      <Routers>
        <Page {...pageProps} />
      </Routers>
    </StaticRouter>
  )
  return escapeInject`<!DOCTYPE html>
    <html lang="en">
      <body>
        <div id="react-root">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`
}

export { render }
export { passToClient }
