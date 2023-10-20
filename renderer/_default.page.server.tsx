import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { Provider } from "react-redux";
import { getStore } from "./store";
import { escapeInject, dangerouslySkipEscape } from "vike/server";
import { Router } from "./_default.page.route";

const passToClient = ["PRELOADED_STATE","pageProps"];

async function render(pageContext) {
  const { pageHtml } = pageContext;
  
  return escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <title>React vite SSR</title>
        <meta name="description" content="React pattern with vite and ssr page.">
        <meta name="viewport" content="width=device-width, initial-scale=1">
      </head>
      <body>
        <div id="app">
          ${dangerouslySkipEscape(pageHtml)}
         </div>
      </body>
    </html>`
}

async function onBeforeRender(pageContext) {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const store = getStore();
  const { Page, pageProps, urlPathname } = pageContext;
  const pageHtml = renderToString(
    <StaticRouter location={urlPathname}>
      <Provider store={store}>
        <Router{...pageContext.pageProps}>
          <Page {...pageProps}/>
        </Router>
      </Provider>
    </StaticRouter>
  )
  
  // Grab the initial state from our Redux store
  const PRELOADED_STATE = store.getState();
  
  return {
    pageContext: {
      PRELOADED_STATE,
      pageHtml
    }
  }
}

export { render }
export { onBeforeRender }
export { passToClient }
