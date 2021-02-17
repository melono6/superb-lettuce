import React from "react";
import Ratio from "react-ratio";
import styleNames from "../../utilities/style-names";
import styles from "../Image/Image.module.scss";
import getDevice from "../../utilities/getDevice";

export type ImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  desktopWidth?: number;
  desktopHeight?: number;
  isSmart?: boolean;
  eager?: boolean;
};

export const Image = ({
  src,
  alt,
  width,
  height,
  desktopWidth,
  desktopHeight,
  isSmart,
  eager,
}: ImageProps) => {
  // Using the Storyblok img2 service to add the correct image size and smart crop image
  const imageService = (width: number, height: number) => {
    return src?.replace(
      "a.storyblok.com",
      `img2.storyblok.com/${width}x${height}`
    );
  };
  const imageServiceSmart = (width: number, height: number) => {
    return src?.replace(
      "a.storyblok.com",
      `img2.storyblok.com/${width}x${height}/smart`
    );
  };
  const imageServiceWebp = (width: number, height: number) => {
    return src?.replace(
      "a.storyblok.com",
      `img2.storyblok.com/${width}x${height}/filters:format(webp)`
    );
  };

  const device = getDevice();

  const ratioCalculator = (width: number, height: number) => {
    const aspectRatio = width / height;
    const widthT = height * aspectRatio;
    const heightT = width / aspectRatio;
    return widthT / heightT;
  };

  const ratio =
    device === "desktop"
      ? ratioCalculator(desktopWidth || width, desktopHeight || height)
      : ratioCalculator(width, height);

  return (
    <Ratio className={styles.Ratio} ratio={ratio}>
      <picture className={styleNames(styles, ["Wrapper"])}>
        {(desktopWidth || desktopHeight) && (
          <>
            <source
              srcSet={
                isSmart
                  ? imageServiceSmart(
                      desktopWidth || width,
                      desktopHeight || height
                    )
                  : imageServiceWebp(
                      desktopWidth || width,
                      desktopHeight || height
                    )
              }
              type="image/webp"
              media="(min-width: 1024px)"
            />
            <source
              srcSet={imageService(
                desktopWidth || width,
                desktopHeight || height
              )}
              type="image/jpeg"
              media="(min-width: 1024px)"
            />
          </>
        )}
        <source
          srcSet={
            isSmart
              ? imageServiceSmart(width, height)
              : imageServiceWebp(width, height)
          }
          type="image/webp"
        />
        <source srcSet={imageService(width, height)} type="image/jpeg" />

        <img
          className={styleNames(styles, ["Image"])}
          src={imageService(width, height)}
          alt={alt}
          width={width}
          height={height}
          loading={eager ? "eager" : "lazy"}
        />
      </picture>
    </Ratio>
  );
};
export default Image;
