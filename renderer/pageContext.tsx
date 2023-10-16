import type {
  PageContextBuiltInServer,
  PageContextBuiltInClientWithServerRouting as PageContextBuiltInClient
} from 'vite-plugin-ssr/types';

type Page = (pageProps: PageProps) => React.ReactElement;
type PageProps = Record<string, unknown>;

export type PageContextCustom = {
  Page: Page;
  pageProps?: PageProps;
  urlPathname: string;
  exports: {
    documentProps?: {
      title?: string;
      description?: string;
    }
  }
}

type PageContextServer = PageContextBuiltInServer<Page> & PageContextCustom;
type PageContextClient = PageContextBuiltInClient<Page> & PageContextCustom;
type PageContext = PageContextClient | PageContextServer;

export type { PageContextServer }
export type { PageContextClient }
export type { PageContext }
export type { PageProps }
