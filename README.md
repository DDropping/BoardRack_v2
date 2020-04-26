# BoardRack (version 2)

### Classified Advertisement Website for New / Used / Custom Suftboards

#### BoardRack (version 2) replaces the default Create React App framework and replaces it with the [Next.js](https://github.com/zeit/next.js/) framework. Aswell doing away with the need for Express.js replaced by Next.js' [pages/api](https://nextjs.org/docs/api-routes/introduction) routing. Version 2 also replaces the standard css styling convention with CSS in JS conventions using [Styled-Components](https://github.com/styled-components/styled-components) along with implementation of unit testing and overall code refactoring for readability and better code structure.

## Change log:

### Major Changes

- Migrate from Create-React-App => [Next.js](https://github.com/zeit/next.js/)
- Migrate from Express.js => Next.js' [pages/api](https://nextjs.org/docs/api-routes/introduction)
- Migrate from CSS style sheets => [Styled-Components](https://github.com/styled-components/styled-components) css in js
- Move towards Server Side Rendering (SSR)
- Implementation of unit testing with [Jest](https://github.com/facebook/jest) and [Enzyme](https://github.com/enzymejs/enzyme)
- App-wide code optimization and refactoring
- App-wide component style update

### Minor Changes

- Implementation of global theme
- Use of JWT stored in localstorage => cookie
- Reduced bloat in redux store
- Use of presigned urls for image uploads

## Version History

### [BoardRack (version 1)](https://github.com/DDropping/BoardRack)

Built Using CRA, React, Redux, MongoDB, Express.js, Node.js with Ant design UI framework and CSS

### [BoardRack (version 2)](https://github.com/DDropping/BoardRack_v2)

Built Using Next.js, React, Redux, MongoDB, Node.js with Ant design UI framework and Styled-Components

## Developer Notes

global theme: /pages/\_app.js  
theme provider: /pages/\_app.js  
antd theme: /public/antd-custom.less  
protected routes: /pages/\_app.js

## Production Notes

change base url: utils/baseUrl

## Other Notes

antd-less and next compatibility issue made some antd component styles fail to load on initial render
- fix: pre-load antd library styles into _app.js  
- note: any antd components used need to be pre-loaded into _app.js

## Authors

- **David Dropping** - [ddropping](https://github.com/ddropping)
