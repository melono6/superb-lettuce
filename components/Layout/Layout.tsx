import React from "react";
import Head from "next/head";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import CookieBanner from "../CookieBanner/CookieBanner";
import isEditMode from "../../utilities/isEditMode";

type LayoutProps = {
  globalContent: any;
  children: any;
  initialLoggedIn?: boolean;
};

export const Layout = ({
  globalContent,
  children,
  initialLoggedIn = false,
}: LayoutProps) => {
  const environment = process.env.NODE_ENV;
  const title = `ENV: ${environment} - Storyblok, Netlify and Next.js`;
  const faviconPath =
    environment === "development" ? "development" : "production";
  const gtmTag = process.env.GTM_ID;

  const editMode = isEditMode();

  return (
    <>
      <Head>
        <title>{title}</title>
        <link 
          rel="shortcut icon" 
          href={`/favicon/${faviconPath}/favicon.ico`}
          type="image/x-icon" />
        <link 
          rel="icon"
          href={`/favicon/${faviconPath}/favicon.ico`}
          type="image/x-icon"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`/favicon/${faviconPath}/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`/favicon/${faviconPath}/favicon-32x32.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`/favicon/${faviconPath}/favicon-16x16.png`}
        />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Storyblok, Netlify and Next.js PoC. Use this as a jumping off point for starting Storyblok projects."
        />
      </Head>
      <Navigation
        globalContent={globalContent}
        initialLoggedIn={initialLoggedIn}
      />
      <div>{children}</div>
      <Footer globalContent={globalContent} />
    </>
  );
};
export default Layout;
