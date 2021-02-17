import React, { useState, useEffect, useRef } from "react";
import { useRouter } from 'next/router'
import SbEditable from "storyblok-react";
import styleNames from "../../utilities/style-names";
import isEditMode from '../../utilities/isEditMode';
import styles from "./SearchResults.module.scss";
import SearchResult from "./SearchResult";


export type SearchResultsProps = {
  LoadMoreText: string;
  NoResultsMsg: string;
  ResultsText: string;
  SearchInputPlaceholder: string;
  SearchSubmitText: string;
  ItemsFoundText: string;
  _uid: string;
  component: string;
  ResultsPerPage: number;
};

export const SearchResults = ({content}: {content: SearchResultsProps}) => {
  const router = useRouter();
  const editMode = isEditMode();

  const paginationNumber: number = 6
  let user: any = null; // sort out user later
  const resultsContainer: any = useRef();

  const {
    LoadMoreText: loadMoreText,
    NoResultsMsg: noResultsMsg,
    ResultsText: resultsText,
    SearchInputPlaceholder: searchPlaceholder,
    SearchSubmitText: searchSubmitText,
    ItemsFoundText: itemsFoundText,
    ResultsPerPage: resultsPerPage,
  } = content;

  const [results, setResults]: any = useState([]);
  const [resultTotal, setResultTotal] = useState(0);
  const [searchInput, setSearchInput]: any = useState('');
  const [hasSearched, setHasSearched] = useState(false);
  const [page, setPage] = useState(1);
  

  const search = (query: string | string[], page: number = 1, perPageOverride?: number) => {
     return fetch(`/.netlify/functions/search?query=${query}&page=${page}&resultsPerPage=${perPageOverride || resultsPerPage}`, {
      method: 'GET',
      credentials: 'include',
      headers: {
          'Authorization': 'Bearer ' + (user ? user.token.access_token : ''),
          'Content-Type': 'application/json'
      }
    }).then(responseJson => {
        return responseJson.json();
    }).then((response) => {
      setResultTotal(response.total)
      setHasSearched(true);
      if (page === 1) {
        setResults(response.data?.stories || response.data?.story || [])
      } else {
        setResults(results.concat(response.data.stories));
        router.push(`/search?search=${searchInput}&pages=${page}`, undefined, {shallow:true, scroll:false});
      }
      !perPageOverride && setPage(page);
    })
    .catch(() => {
        setResults([])
        setHasSearched(true);
    });
  }

  useEffect(() => {
    if (router.query.search && !router.query.pages) {
      setPage(1);
      search(router.query.search);
      setSearchInput(router.query.search);
    } else if(!hasSearched && router.query.search && router.query.pages) {
      setPage(Number(router.query.pages));
      setSearchInput(router.query.search);
      search(router.query.search, 1, Number(router.query.pages) * resultsPerPage).then(() => {
        if (router.query.scroll)
        resultsContainer.current.querySelectorAll('div h3')[Number(router.query.scroll)].scrollIntoView();
      });
    }
  }, [router]);

  const saveScroll = (index) => {
    router.replace(`/search?search=${router.query.search}&pages=${router.query.pages}&scroll=${index}`, undefined, {shallow:true, scroll:false});
  }

  return (
    <SbEditable content={content}>
      <div className={styles.SearchResults}>
          <div className={styles.DiamondBreak}>
            <div></div>
            <div></div>
            <div></div>
          </div>

          <div className={styleNames(styles, ['ResultsText', (hasSearched || editMode) && 'ShowResultsText'])}>{resultsText}</div>

          <form
            className={styles.SearchContainer}
            onSubmit={((e) => {
              e.preventDefault();
              if (searchInput) {
                router.push(`/search?search=${searchInput}`, undefined, {shallow:true, scroll:false});
              }
            })}
          >
              <input
                type="text"
                value={searchInput || ''}
                placeholder={searchPlaceholder}
                className={styles.SearchInput}
                onChange={((e) => {
                  setSearchInput(e.target.value);
                })}
              />
              <button 
                type="submit"
                className={styles.SearchSubmit}
                disabled={!searchInput || searchInput.trim() === ""}
              >
                {searchSubmitText}
              </button>
          </form>

          {((!results.length && hasSearched) || editMode) && (
            <div className={styles.NoResults}>{noResultsMsg}</div>
          )}

          {(!!results.length || editMode) && (
            <>
              <div className={styles.ResultsCount}>{resultTotal} {itemsFoundText}</div>

              <div className={styles.ResultsContainer} ref={resultsContainer}>
                {results.map((result, i) => {
                  return <SearchResult saveScroll={saveScroll} resultIndex={i} content={{...result.content, tag_list: result.tag_list, full_slug: result.full_slug}} />;
                })}
              </div>

              {((resultTotal > results.length) || editMode) && (
                <div className={styles.LoadMoreContainer}>
                  <button
                    className={styles.LoadMore}
                    onClick={(() => {
                      search(searchInput, page+1);
                    })}
                  >
                    {loadMoreText}
                  </button>
                </div>
              )}
            </>
          )}
      </div>
    </SbEditable>
  );
};
export default SearchResults;
