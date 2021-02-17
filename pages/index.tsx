import React from "react";
import Components from "../components/__Components__/Components";
import Layout from "../components/Layout/Layout";
import contentfulService from "../utilities/contentful";

contentfulService.init('ykfadgud3ei5', 'nhqKOl9MIAgEvVx1c8HULPLcidnGd1UKd5VJwS__whU');

export default function Page({ globalContent, pageContent, pageMeta }) {
  return (
    <Layout globalContent={globalContent}>{Components(pageContent)}</Layout>
  );
}

export async function getStaticProps({ params, test }) {
  console.log('hmm', params);
  console.log('?????', test);
  const page = await contentfulService.fetchEntries({
    content_type: 'page',
    'fields.slug': 'home'
  });
  const footer = await contentfulService.fetchEntries({
    content_type: 'footer',
  });
  const header = await contentfulService.fetchEntries({
    content_type: 'header',
  });

  console.log('wtf', page[0].sys.contentType.sys.id);
  console.log('wtf', page[0].fields);
  // console.log(page.contentType);
  // let isPreview = false;
  // if (params.page.includes("article-preview")) {
  //   isPreview = true;
  // }
  // if (params.page.includes("member") || params.page.includes("article-preview")) {
  //   params.page.shift();
  // }
  // let data = await StoryblokService.getStaticProps(params.page.join("/"));

  // if (data.props.pageContent.Body && isPreview) {
  //   data.props.pageContent.Body = [];
  //   data.props.pageContent.articlePreview = true;
  // }

  // data.props.pageContent.articleSettings = data.props.globalContent.articleSettings;

  return {
    props: {
      pageContent: {
        component: page[0].sys.contentType.sys.id,
        ...page[0].fields,
      },
      globalContent: {
        header: header[0].fields,
        footer: footer[0].fields,
      }
    },
  };
}
