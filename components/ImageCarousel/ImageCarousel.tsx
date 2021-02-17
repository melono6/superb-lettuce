import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import Grid from "../Grid/Grid";
import Image from "../Image/Image";
import styles from "../ImageCarousel/ImageCarousel.module.scss";

export type ImageCarouselProps = {
  Slide: SlideProps[];
};

type SlideProps = {
  Caption: string;
  Image: {
    alt: string;
    copyright: string;
    filename: string;
    title: string;
  };
};

export const ImageCarousel = (props: { content: ImageCarouselProps }) => {
  const { content } = props;
  const numberOfSlides = content.Slide.length;
  return (
    <section className={styles.ImageCarousel}>
      <style jsx>
        {`
          .carousel__slide {
            height: auto;
          }
          .carousel__slide::after {
            display: none;
          }
          .carousel__slide[aria-selected="false"] span[data-counter="true"] {
            opacity: 0;
          }
          .carousel__slider {
            overflow-x: hidden;
            overflow-y: visible;
          }
          .carousel__slider-tray-wrapper {
            width: 100%;
          }
          @media (min-width: 768px) {
            .carousel__slider-tray-wrapper {
              width: 90%;
            }
          }
        `}
      </style>
      <Grid row justify="flex-end">
        <Grid column md={10} sm={12}>
          <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={66}
            totalSlides={numberOfSlides}
          >
            <Slider>
              {content.Slide.map((slideItem, index) => {
                const { Image: ImageContent, Caption } = slideItem;
                const { alt, filename } = ImageContent;
                return (
                  <Slide index={index} key={index}>
                    <div className={styles.ImageWrapper}>
                      <Image
                        src={filename}
                        alt={alt}
                        width={811}
                        height={456}
                        isSmart
                      />
                    </div>
                    <div>
                      <p className={styles.CaptionText}>
                        <span className={styles.CaptionCounter} data-counter>
                          {index + 1}/{numberOfSlides}
                        </span>
                        <span className={styles.Caption}>{Caption}</span>
                      </p>
                    </div>
                  </Slide>
                );
              })}
            </Slider>
            <div className={styles.ButtonNextWrapper}>
              <ButtonNext className={styles.ButtonNext}>Next slide</ButtonNext>
            </div>
          </CarouselProvider>
        </Grid>
      </Grid>
    </section>
  );
};

export default ImageCarousel;
