const previewToken = process.env.STORYBLOK_TOKEN_PREVIEW;

import StoryblokClient from "storyblok-js-client";
import React from "react";

class StoryblokService {
  token: string | undefined;
  devMode: boolean;
  client: any;
  query: {};
  constructor() {
    this.devMode = false; // If true it always loads draft
    this.token = previewToken;
    this.client = new StoryblokClient({
      accessToken: this.token,
      cache: {
        clear: "auto",
        type: "memory",
      },
    });

    this.query = {};
  }

  async getStaticProps(pageSlug) {
    const header = await this.get("cdn/stories/global/header", {});
    const footer = await this.get("cdn/stories/global/footer", {});
    const cookieBanner = await this.get("cdn/stories/global/cookiebanner", {});
    const socialShare = await this.get("cdn/stories/global/socialshare", {});
    const articleSettings = await this.get("cdn/stories/global/articlesettings", {});

    const page = await this.get(`cdn/stories/${pageSlug}`, {
      resolve_relations:
        "ArticleSmallThumbnails.Article,ArticleMediumThumbnails.Article,ArticleLargeThumbnails.Article,ArticleWideImage.Article,HomepageHero.Article,RelatedArticles.Article,Social.GlobalContent",
    });

    return {
      props: {
        globalContent: {
          header: header.data.story.content,
          footer: footer.data.story.content,
          cookieBanner: cookieBanner.data.story.content,
          socialShare: socialShare.data.story.content,
          articleSettings: articleSettings.data.story.content,
        },
        pageContent: page.data.story.content,
        pageMeta: {
          tagList: page.data.story.tag_list,
        },
      },
    };
  }

  getCacheVersion() {
    return this.client.cacheVersion;
  }

  get(slug, params, draft = false) {
    params = params || {};

    if (
      draft ||
      this.getQuery("_storyblok") ||
      this.devMode ||
      (typeof window !== "undefined" && window.storyblok)
    ) {
      params.version = "draft";
    }

    if (
      typeof window !== "undefined" &&
      typeof window.StoryblokCacheVersion !== "undefined"
    ) {
      params.cv = window.StoryblokCacheVersion;
    }

    return this.client.get(slug, params);
  }

  getType(type) {
    return this.client.getAll(`cdn/stories`, {
      filter_query: { component: { in: type } },
    });
  }

  searchType(
    type: string,
    query: string | string[],
    page: number,
    perPage: number
  ) {
    return this.client.get(`cdn/stories`, {
      search_term: query,
      page: page,
      per_page: perPage,
      filter_query: { component: { in: type } },
    });
  }

  initEditor(reactComponent, force = false) {
    if (force || window.storyblok) {
      window.storyblok.init({ accessToken: this.token });
      window.storyblok.on(["change", "published"], () => location.reload(true));
      document.querySelectorAll('a').forEach((anc) => {
          anc.addEventListener('click', (e) => {
              e.preventDefault();
          });
      });
      window.storyblok.on("input", (event) => {
        window.storyblok.resolveRelations(
          event?.story,
          [
            "ArticleSmallThumbnails.Article",
            "ArticleMediumThumbnails.Article",
            "ArticleLargeThumbnails.Article",
            "ArticleWideImage.Article",
            "HomepageHero.Article",
            "RelatedArticles.Article",
            "Social.GlobalContent",
          ],
          () => {
            // event.story.content has now the resolved relations
            // this.content = event.story.content
            if (
              event?.story.content._uid ===
              reactComponent.state.pageContent._uid
            ) {
              reactComponent.setState({
                ...reactComponent.state,
                pageContent: event?.story.content,
              });
            } else {
              Object.keys(reactComponent.state.globalContent).forEach((key) => {
                if (
                  event?.story.content._uid ===
                  reactComponent.state.globalContent[key]._uid
                ) {
                  reactComponent.setState({
                    ...reactComponent.state,
                    globalContent: {
                      ...reactComponent.state.globalContent,
                      [key]: event?.story.content,
                    },
                  });
                }
              });
            }
          }
        );
      });
    }
  }

  setQuery(query) {
    this.query = query;
  }

  getQuery(param) {
    return this.query[param];
  }

  bridge(force = false) {
    if (!this.getQuery("_storyblok") && !force) {
      return "";
    }
    return <script src="//app.storyblok.com/f/storyblok-latest.js"></script>;
  }
}

const storyblokInstance = new StoryblokService();

export default storyblokInstance;
