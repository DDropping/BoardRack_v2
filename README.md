![screenshot](https://github.com/DDropping/portfolio/blob/master/src/images/project-boardrackv2.png)

# BoardRack (version 2)

### Site Currently Not Live

Classified Advertisement Website for New / Used / Custom Suftboards

---

### Clone

- Clone this repo to your local machine using `https://github.com/DDropping/BoardRack_v2.git`

### Setup

```shell
$ npm install
$ npm run dev
```

---

## Technologies

- [Next.js](https://github.com/zeit/next.js/) replced Create-React-App for improved Search Engine Optimization and Server Side Rendering.

- Next.js' [pages/api](https://nextjs.org/docs/api-routes/introduction) replaced the custom Express server to allow for a serverless configuration

- [Styled-Components](https://github.com/styled-components/styled-components) replaced CSS to keep the concerns of styling and element architecture separated while also increasing code readability.

- Implementation of unit, integration, & snapshot testing with [Jest](https://github.com/facebook/jest) and [Enzyme](https://github.com/enzymejs/enzyme)

- [Here API](https://developer.here.com/) integration for location based services.

- [IPStack API](https://ipstack.com/) integration for IP location based services.

- [Ant Design](https://ant.design/components/overview/) component library used for rich ui elements.

- [Redux](https://redux.js.org/) used for application state management.

- [JWT](https://jwt.io/) used for authorization.

---

## Version History

### [BoardRack (version 1)](https://github.com/DDropping/BoardRack)

Built Using CRA, React, Redux, MongoDB, Express.js, Node.js with Ant design UI framework and CSS

---

## Developer Notes

global theme: /pages/\_app.js  
theme provider: /pages/\_app.js  
antd theme: /public/antd-custom.less  
protected routes: /pages/\_app.js

## Production Notes

change base url: utils/baseUrl

## Other Notes

- fix: pre-load antd library styles into \_app.js
- note: any antd components used need to be pre-loaded into \_app.js

---

## Support

Reach out to me at one of the following places!

- Website at <a href="http://ddropping.com" target="_blank">`ddropping.com`</a>
- LinkedIn at <a href="https://www.linkedin.com/in/ddropping/" target="_blank">`@ddropping`</a>
- Email at <a href="mailto:ddropping@gmail.com" target="_blank">`ddropping@gmail.com`</a>

---

## Authors

- **David Dropping** - [ddropping](https://github.com/ddropping)

---

## License

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

- **[MIT license](http://opensource.org/licenses/mit-license.php)**
- Copyright 2020 © <a href="http://ddropping.com" target="_blank">David Dropping</a>
