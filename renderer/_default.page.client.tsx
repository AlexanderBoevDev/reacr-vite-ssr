import { hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Routers } from "./routers";


// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
async function render(pageContext) {
  const { Page } = pageContext
  hydrateRoot(
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    document.getElementById('react-root'),
    <BrowserRouter>
      {/*eslint-disable-next-line @typescript-eslint/ban-ts-comment*/}
      {/*@ts-ignore*/}
      <Routers>
        <Page {...pageContext.pageProps} />
      </Routers>
    </BrowserRouter>
  )
}

export { render }
