import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import SbEditable from "storyblok-react";
import styles from "./SearchOverlay.module.scss";
import CloseIcon from "../../public/svg/close.svg";

export type SearchOverlayProps = {
  content: {
    SearchPlaceholder: string;
    SearchPlaceholderWidth: string;
    SubmitText: string;
  };
  closeCallback: Function;
};

export const SearchOverlay = ({ content, closeCallback }) => {
  const router = useRouter();
  const { SearchPlaceholder: placeholder, SubmitText: submitText, SearchPlaceholderWidth: searchPlaceholderWidth } = content;

  const [inputValue, setInputValue] = useState("");

  const inputEl: any = useRef(null);

  useEffect(() => {
    if (inputEl && inputEl.current) {
      inputEl.current.focus();
    }
  }, [inputEl]);

  return (
    <SbEditable content={content}>
      <div className={styles.SearchOverlay}>
        <div className={styles.Inner}>
          <div className={styles.Close}>
            <button
              onClick={() => {
                closeCallback();
              }}
              className={styles.CloseButton}
            >
              <CloseIcon />
            </button>
          </div>
          <form
            className={styles.SearchContainer}
            onSubmit={(e) => {
              e.preventDefault();
              if (inputValue) {
                router.push(`/search?search=${inputValue}`);
                closeCallback();
              }
            }}
          >
            <input
              ref={inputEl}
              value={inputValue}
              type="text"
              placeholder={placeholder}
              className={styles.SearchInput}
              onChange={(e) => {
                setInputValue(e.target.value);
              }}
              style={{
                width: inputValue ? 'auto' : `${searchPlaceholderWidth}px`
              }}
            />
            <button
              type="submit"
              className={styles.SearchSubmit}
              disabled={!inputValue || inputValue.trim() === ""}
            >
              {submitText}
            </button>
          </form>
        </div>
      </div>
    </SbEditable>
  );
};
export default SearchOverlay;
