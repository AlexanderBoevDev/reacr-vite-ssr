import React from 'react';
import { PageContextProvider } from './usePageContext';
import type { PageContext } from './pageContext';
import { Link } from './components/Link';
import { Layout } from './components/Layout';
import { Sidebar } from './components/Sidebar';
import { Logo } from './components/Logo';
import { Content } from './components/Content';

// console.log(import.meta.env);

function App({ children, pageContext }: { children: React.ReactNode; pageContext: PageContext }) {
  return (
    <React.StrictMode>
      <PageContextProvider pageContext={pageContext}>
        <Layout>
          <Sidebar>
            <Logo />
            <Link className="navitem" href="/">
              Home
            </Link>
            <Link className="navitem" href="/about">
              About
            </Link>
            <Link className="navitem" href="/contact">
              Contact
            </Link>
          </Sidebar>
          <Content>
            {children}
          </Content>
        </Layout>
      </PageContextProvider>
    </React.StrictMode>
  )
}

export { App }
