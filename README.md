![screenshot](https://github.com/DDropping/portfolio/blob/master/src/images/project-boardrackv2.png)

# BoardRack (version 2)

## [Demo Website: https://boardrack.dev](https://boardrack.dev/)

Classified Advertisement Website for New / Used / Custom Suftboards

---

## Technologies

- [Next.js](https://nextjs.org/) (v16, Pages Router) replaced Create-React-App for improved Search Engine Optimization and Server Side Rendering.

- Next.js' [pages/api](https://nextjs.org/docs/api-routes/introduction) replaced the custom Express server to allow for a serverless configuration

- [Styled-Components](https://github.com/styled-components/styled-components) replaced CSS to keep the concerns of styling and element architecture separated while also increasing code readability.

- Unit and integration testing with [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/react)

- [AWS S3](https://aws.amazon.com/s3/) via the AWS SDK v3, using presigned URLs for browser uploads.

- [HERE API](https://developer.here.com/) (Geocoding & Search v7, Map Image v3) for location based services.

- IP-based geolocation from Vercel's edge headers, falling back to the [IPStack API](https://ipstack.com/) off-platform.

- [Ant Design](https://ant.design/components/overview/) v5 (CSS-in-JS) component library used for rich ui elements.

- [Redux](https://redux.js.org/) used for application state management.

- [JWT](https://jwt.io/) used for authorization.

---

## Version History

### [BoardRack (version 1)](https://github.com/DDropping/BoardRack)

Built Using CRA, React, Redux, MongoDB, Express.js, Node.js with Ant design UI framework and CSS

---

## Developer Notes

global theme: /pages/\_app.js (`theme`)  
theme provider: /pages/\_app.js  
antd theme: /pages/\_app.js (`antdTheme` design tokens)  
global css: /styles/globals.css  
protected routes: /pages/\_app.js  

## Deployment (Vercel)

1. Copy `.env.example` and set every variable in **Project Settings -> Environment
   Variables**. `NEXT_PUBLIC_SITE_URL` is optional: without it the app falls back
   to `NEXT_PUBLIC_VERCEL_URL`, which Vercel injects per deployment.
2. MongoDB Atlas must allow `0.0.0.0/0` -- Vercel's functions have no static IP.
3. The S3 bucket needs a **bucket policy** granting public read. Public ACLs are
   blocked by default since 2023, so the old `ACL: public-read` approach is gone.
4. Create the support user in the new database and put its `_id` in
   `SUPPORT_USER_ID`, or leave it unset to skip the welcome message.

## Production Notes

- enable location based filtering, code is currently commented out: pages/api/posts/postdetails/index
- the welcome message in pages/api/auth/register still describes the site as a demo

## Other Notes

- antd v5 is CSS-in-JS: components no longer need their styles pre-loaded in
  \_app.js, and the theme lives in the `antdTheme` tokens rather than a Less file.

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

```

```
