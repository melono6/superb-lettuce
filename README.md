# Template for StoryblokCMS, Next, Typescript, Storybook, SCSS and Jest

This simple guide will help you to set up `StoryblokCMS`, `Next`, `Typescript`, `Storybook`, `SCSS` and `Jest`.

## ✅ Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

Requires node version 10.6+

### ⚒️ Installation

```
# Clone this repository
$ git clone https://gitlab.com/DPudsey/accelerator-react-project-base.git

# Go into the repository
$ cd accelerator-react-project-base

# Install client dependencies
$ npm i

# Start client on localhost:3000
first time:

$ npm install netlify-cli -g

then

$ netlify dev

or if you have having issues with the redirect for the home page use

$ netlify dev -t

this allows you to work with the lambda / serveless functions within Netlify for routing and the search API

# Start Storybook
$ npm run storybook

# Run your unit test(s)
$ npm run test

# Run your E2E test(s)
$ npm run cypress

# Static site generator
$ npm run export
```

### Static generation
All pages are generated from the [...pages].tsx file
Slugs are built using the folder structure within storyblok.
Paywalled content is detected by searching the tag_list for 'member'. If detected, the generator will add /member/ to the front of the path and also generate a /article-preview/ path version which contains a preview mode of the page. A netlify redirect is then used to determine which version a user sees based on role.

### Redirects
redirects are contained in the netlify.toml file  (NOTE: some redirects dont fully work locally when using netlify dev, so comment out as needed when working locally)
https://docs.netlify.com/routing/redirects/redirect-options/

main redirects:
- index logged in/out
    - using role based redirect to show a logged in/out initial view of the homepage
- showing preview view of paywalled content
    - Using role based redirects where if a user is not logged in as a 'member' they are redirected to a /preview version of the page/article. Same redirect is applied to the prefetch .json files of paywalled content.

### Netlify functions
Located in /api

#### search
Used for the search results screen. takes a string as a search term and does a lookup on all articles in storyblok, returning them. we also strip out the body content of the results so no paywall data is exposed.

#### preview
In order to keep preview content hidden and also our api keys safe, we use a netlify function to retrieve the preview data from storyblok. This funcions takes parameters from the preview view in storyblok to then validate against before returning data (https://www.storyblok.com/faq/how-to-verify-the-preview-query-parameters-of-the-visual-editor)


### role
used by a hook in netlify when a user is invited - it automatically sets a users role to 'member'


### Netlify login widget
We are using a forked version of the netlify login widget: https://github.com/melono6/netlify-identity-widget we had to fork off in order to do our own styling as theming is not currently supported by the official widget.
In order to make changes, you will need to refork this repo, make changes and run yarn build - then move compiled netlify-widget.js to /utils/login-widget