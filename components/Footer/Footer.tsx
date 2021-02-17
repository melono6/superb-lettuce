import React from "react";
import Link from "next/link";
import Grid from "../Grid/Grid";
import styles from "./Footer.module.scss";
import SbEditable from "storyblok-react";
import styleNames from "../../utilities/style-names";

export type FooterProps = {
  links: string[];
  copyright: string;
  _uid: string;
  component: string;
  navLinks: string[];
  logo: any;
};

export const Footer = ({
  globalContent,
}: {
  globalContent: { footer: FooterProps };
}) => {
  const {
    links,
    copyright,
    navLinks,
    logo
  } = globalContent.footer;

  return (
      <div className={styles.Wrapper}>
        <Grid row>
          <Grid column sm={12}>
            <footer className={styles.Footer}>
              <div className={styles.LogoContainerMobile}>
                
              </div>

              <div className={styles.DesktopLeft}>
                <div className={styles.Copyright}>{copyright}</div>
                <nav className={styles.socialLinks}>
                  {links?.map((link) => {
                    return (
                        <p>{link}</p>
                    );
                  })}
                </nav>
              </div>

              <div
                className={styleNames(styles, ["DiamondBreak", "HideDesktop"])}
              >
                <div></div>
                <div></div>
                <div></div>
              </div>

              <div className={styles.LogoContainerDesktop}>
               <img className={styles.Logo} src={logo.fields.file.url} />
              </div>

              <nav className={styles.Nav}>
                {navLinks.map((navlink) => {
                  return (
                      <p>{navlink}</p>
                  );
                })}
              </nav>
            </footer>
          </Grid>
        </Grid>
      </div>
  );
};
export default Footer;
