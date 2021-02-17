import React, { useEffect, useState } from "react";
import styles from "./CookieBanner.module.scss";
import SbEditable from "storyblok-react";
import { getCookie, setCookie } from "../../utilities/cookies";
import styleNames from "../../utilities/style-names";

export type CookieBannerProps = {
  Title: string;
  Information: string;
  ButtonText: string;
  _uid: string;
  component: string;
};

export const CookieBanner = ({
  globalContent,
}: {
  globalContent: { cookieBanner: CookieBannerProps };
}) => {
  const {
    Title: title,
    Information: information,
    ButtonText: buttonText,
  } = globalContent.cookieBanner;

  const [showBanner, setShowBanner]: [boolean, Function] = useState(false)

  useEffect(() => {
    const cookie = getCookie('cookieAccepted');
    if (!cookie) {
      setShowBanner(true);
    }
  }, []);

  return (
    <SbEditable content={globalContent.cookieBanner}>
      <div className={styleNames(styles, ['CookieBanner', showBanner && 'CookieBanner--show'])}>
        <div className={styles.Inner}>
          <div>
            <h4 className={styles.Title}>{title}</h4>
            <p className={styles.Information}>{information}</p>
          </div>
          <button
            className={styles.Button}
            onClick={(() => {
              setShowBanner(false);
              setCookie({ cookieName: 'cookieAccepted', value: true, expiryDays: 365 });
            })}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </SbEditable>
  );
};
export default CookieBanner;
