import React from "react";
import styles from "./ImageCaption.module.scss";
import SbEditable from "storyblok-react";
import Image from "../Image/Image";

export type ImageCaptionProps = {
  Caption: string;
  Copyright: string;
  Image: {
    filename: string;
    alt: string;
  };
  Link?: {
    url?: string;
    cached_url?: string;
  };
  _uid: string;
  component: string;
};

export const ImageCaption = ({
  content,
}: {
  content: ImageCaptionProps;
}) => {
  const {
    Caption: caption,
    Copyright: copyright,
    Image: image,
    Link: link,
  } = content;

  const url = link?.cached_url || link?.url;

  return (
    <SbEditable content={content}>
      <div className={styles.ImageCaption}>
        <div className={styles.Image}>
          
          {url 
            ? <a href={url}><Image src={image.filename} alt={image.alt} width={325} height={325} desktopWidth={1220} isSmart /></a>
            : <Image src={image.filename} alt={image.alt} width={325} height={325} desktopWidth={1220} isSmart />
          }
        </div>
        <div className={styles.TextContainer}>
          <p className={styles.Caption}>
            {url ? <a href={url}>{caption}</a> : <>{caption}</>}
          </p>
          <p className={styles.Copyright}>{copyright}</p>
        </div>
      </div>
    </SbEditable>
  );
};
export default ImageCaption;
