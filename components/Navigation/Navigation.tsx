import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import SbEditable from "storyblok-react";
import Link from "next/link";
import NavigationLink from "./NavigationLink";
import getDevice from "../../utilities/getDevice";
import styleNames from "../../utilities/style-names";
import Grid from "../Grid/Grid";
import LogoOut from "../../public/svg/creative-salon-logo.svg";
import LogoIn from "../../public/svg/the-salon-logo.svg";
import Search from "../../public/svg/search.svg";
import styles from "../Navigation/Navigation.module.scss";
import SearchOverlay from "../SearchOverlay/SearchOverlay";

type NavigationProps = {
  initialLoggedIn: boolean;
  globalContent: {
    header: {
      HeaderNavigation: [HeaderNavigationProps];
      _uid: string;
      component: string;
    };
  };
};

type HeaderNavigationProps = {
  _uid: string;
  component: string;
  NavLink: { cached_url: string };
  NavLinkTitle: string;
};

export const Navigation = ({
  globalContent,
  initialLoggedIn,
}: NavigationProps) => {
  const router = useRouter();
  const { HeaderNavigation } = globalContent.header;
  const [searchOpen, setSearchOpen] = useState(false);
  const device = getDevice();
  const isMobile = device === "mobile";
  const [menuOpen, setMenuOpen] = useState(false);
  const ariaExpanded = menuOpen ? "true" : "false";
  const toggleMobileMenu = () => {
    setTimeout(() => {
      setMenuOpen(!menuOpen);
    }, 200);
  };

  const [user, setUser] = useState(initialLoggedIn);
  const [netlifyIdentity, setIdentity]: [any, Function] = useState(null);

  import("../../utilities/login-widget/netlify-identity").then(
    ({ default: identity }) => {
      setIdentity(identity);
    }
  );

  useEffect(() => {
    if (netlifyIdentity) {
      netlifyIdentity?.on("init", () => {
        let user = netlifyIdentity.currentUser();
        if (user) {
          setUser(user);
          user.jwt().then(function(accessToken) {
            setUser({...user, token: {...user.token, accessToken}});
          });
        }
      });
      netlifyIdentity?.init({
        locale: "en", // defaults to 'en',
        disable_signup: true,
      });
      netlifyIdentity?.on("login", (user) => {
        if (router.asPath.indexOf("member") > -1) {
          location.reload();
        }
        setUser(user);
      });
      netlifyIdentity?.on("logout", () => {
        if (router.asPath.indexOf("member") > -1) {
          location.reload();
        }
        setUser(false);
      });
    }
  }, [netlifyIdentity]);

  const Logo = user ? LogoIn : LogoOut;

  return (
    <SbEditable content={globalContent.header}>
      <style jsx>{`
        body {
          overflow: ${menuOpen ? "hidden" : "auto"};
          background-color: ${user ? "#FFF6E0 !important" : "#F2E1D8"};
        }
        html {
          background-color: ${user ? "#FFF6E0 !important" : "#F2E1D8"};
        }
        #primary-menu {
          background-color: ${user ? "#FFF6E0 !important" : "#F2E1D8"};
        }
      `}</style>
      <header className={styles.Header}>
        <div className={styles.NavWrapper}>
          <Grid row alignItems="center">
            <Grid column sm={3} md={3}>
              <nav className={styles.Nav} role="navigation">
                {isMobile && (
                  <button
                    className={styles.MobileNavButton}
                    aria-expanded={ariaExpanded}
                    aria-controls="primary-menu"
                    aria-label="Menu"
                    onClick={() => toggleMobileMenu()}
                  >
                    <span className={styles.MobileNavIcon}>
                      <span className={styles.NavTopBar} />
                      <span className={styles.NavBottomBar} />
                    </span>
                  </button>
                )}
                <div
                  id="primary-menu"
                  className={styleNames(styles, ["NavLinkWrapper", user && "NavLinkWrapper-in"])}
                  aria-expanded={ariaExpanded}
                >
                  <Grid row>
                    <Grid column sm={12} expanded>
                      {isMobile && (
                        <a
                          className={styleNames(styles, [
                            "NavItem",
                            "NavItem__Login",
                          ])}
                          onClick={(e) => {
                            e.preventDefault();
                            netlifyIdentity && netlifyIdentity.open();
                          }}
                        >
                          {user ? "LOGOUT" : "LOGIN"}
                        </a>
                      )}
                      {HeaderNavigation?.map(
                        (navItem: HeaderNavigationProps) => {
                          const { _uid, NavLink, NavLinkTitle } = navItem;
                          return (
                            <SbEditable content={navItem} key={_uid}>
                              <NavigationLink
                                activeClassName={styles.ActiveNavLink}
                                href={`/${NavLink.cached_url}`}
                              >
                                <a 
                                  className={styleNames(styles, [
                                    "NavItem",
                                    user && "NavItem__LoggedIn",
                                  ])}
                                >
                                  {NavLinkTitle}
                                </a>
                              </NavigationLink>
                            </SbEditable>
                          );
                        }
                      )}
                    </Grid>
                  </Grid>
                </div>
              </nav>
            </Grid>
            <Grid column sm={6} md={6}>
              <div className={styleNames(styles, ["LogoWrapper", user && "LogoWrapper-in"])}>
                <Link href="/" passHref>
                  <a aria-label="Creative Salon">
                    <Logo />
                  </a>
                </Link>
              </div>
            </Grid>
            <Grid column sm={3} md={3}>
              <div className={styles.ButtonWrapper}>
                <button
                  onClick={() => {
                    setSearchOpen(!searchOpen);
                  }}
                  className={styles.SearchButton}
                  aria-label="Search"
                >
                  <Search />
                </button>
                {!isMobile && (
                  <button
                    className={styles.LoginButton}
                    onClick={(e) => {
                      e.preventDefault();
                      netlifyIdentity && netlifyIdentity.open();
                    }}
                  >
                    <span className={styles.LoginText}>
                      {user ? "Logout" : "Login"}
                    </span>
                  </button>
                )}
              </div>
            </Grid>
          </Grid>
        </div>
        {searchOpen && (
          <SearchOverlay
            content={globalContent.header}
            closeCallback={() => {
              setSearchOpen(false);
            }}
          />
        )}
      </header>
    </SbEditable>
  );
};
export default Navigation;
