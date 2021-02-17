import React, { useEffect, useState } from "react";
import SbEditable from "storyblok-react";
import Grid from "../Grid/Grid";
import { useRouter } from "next/router";
import styles from "../SocialShare/SocialShare.module.scss";

export type SocialShareProps = {
  Heading?: string;
  _uid: string;
  component: string;
  GlobalContent?: {
    content: GlobalSocialShareProps;
  };
  SocialShareLink?: SocialShareLinkProps[];
};

type GlobalSocialShareProps = {
  Heading: string;
  _uid: string;
  component: string;
  SocialShareLink: SocialShareLinkProps[];
};

type SocialShareLinkProps = {
  Name: string;
  DynamicURL: string;
  Icon: {
    alt: string;
    copyright: string;
    filename: string;
    title: string;
  };
  _uid: string;
  component: string;
};

export const SocialShare = (props: { content: SocialShareProps }) => {
  const { content } = props;
  const isGlobal = "GlobalContent" in content;
  const socialShareObj = isGlobal ? content?.GlobalContent?.content : content;
  const { Heading, SocialShareLink } = { ...socialShareObj };
  const [domain, setDomain] = useState("");
  useEffect(() => {
    setDomain(window.location.origin);
  });

  return (
    <SbEditable content={content}>
      <section className={styles.Wrapper}>
        <Grid justify="center">
          <Grid column sm={12} md={8}>
            <p className={styles.Heading}>{Heading}</p>
            <div className={styles.Container}>
              {SocialShareLink?.map((socialLink: SocialShareLinkProps) => {
                const { Name, Icon, DynamicURL } = socialLink;
                const { asPath } = useRouter() || "";
                const shareUrl = DynamicURL.replace(
                  "{url}",
                  `${domain}${asPath}`
                );
                return (
                  <SbEditable content={socialLink} key={socialLink._uid}>
                    <a
                      className={styles.SocialLink}
                      href={shareUrl}
                      target="blank"
                    >
                      <img
                        className={styles.Icon}
                        src={Icon.filename}
                        alt={Icon.alt}
                        title={Name}
                      />
                    </a>
                  </SbEditable>
                );
              })}
            </div>
          </Grid>
        </Grid>
      </section>
    </SbEditable>
  );
};

export default SocialShare;
