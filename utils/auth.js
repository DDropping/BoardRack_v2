import cookie from 'js-cookie';
import Router from 'next/router';

//set JTW token as cookie
export function setCookieToken(token) {
  cookie.set('token', token);
}

//redirect
export function redirectUser(ctx, location) {
  //check if on server
  if (ctx.req) {
    ctx.res.writeHead(302, { Location: location });
    ctx.res.end();
    //else on client
  } else {
    Router.push(location);
  }
}
