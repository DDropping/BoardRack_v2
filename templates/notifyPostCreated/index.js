const generateInline = (postUrl) => {
  return `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Post Created</title>
    <style type="text/css">
      body {
        margin: 0;
        padding: 0;
        background-color: #f6f9fc;
      }
      table {
        border-spacing: 0;
      }
      td {
        padding: 0;
      }
      img {
        border: 0;
      }
      .wrapper {
        width: 100%;
        background-color: #f6f9fc;
        padding: 40px 0;
        font-family: Helvetica, Arial, sans-serif, "Avalon";
      }
      .header {
        max-width: 600px;
        background-color: #00458a;
        padding: 20px 0;
      }
      .header-logo {
        max-height: 65px;
      }
      .content {
        max-width: 600px;
        background-color: #ffffff;
        margin-top: 0;
        padding: 40px 0;
      }
      .title {
        text-align: center;
        font-weight: bold;
        font-size: 32px;
        color: #1a1a1a;
        line-height: 36px;
      }
      .subtitle {
        margin-top: 20px;
        text-align: center;
        font-size: 18px;
        color: #1a1a1a;
        line-height: 18px;
      }
      .activateButton {
        margin: 25px 0;
        font-size: 12px;
        font-family: "open sans semi", Helvetica, Arial, sans-serif;
        color: #ffffff;
        text-decoration: none;
        text-decoration: none;
        border-radius: 0px;
        padding: 12px 18px;
        border: 1px solid #1a1a1a;
        background-color: #00458a;
        display: inline-block;
        line-height: 26px;
        letter-spacing: 2px;
        text-transform: uppercase;
        cursor: pointer;
      }
      .footer {
        max-width: 600px;
        padding: 30px 0;
        background-color: #00458a;
      }
      .footerContent {
        color: #e6e6e6;
        font-size: 14px;
      }
      .social-logo {
        display: inline-block;
        margin: 0 20px 10px 20px;
        cursor: pointer;
      }
      .link-text {
        color: #00458a;
      }
    </style>
  </head>
  <body style="margin: 0;padding: 0;background-color: #f6f9fc;">
    <center class="wrapper" style="width: 100%;background-color: #f6f9fc;padding: 40px 0;font-family: Helvetica, Arial, sans-serif, &quot;Avalon&quot;;">
      <div class="header" style="max-width: 600px;background-color: #00458a;padding: 20px 0;">
        <img class="header-logo" src="https://ddimagelibrary.s3-us-west-1.amazonaws.com/br_logo_white.png" alt="BoardRack" style="border: 0;max-height: 65px;">
      </div>
      <div class="content" style="max-width: 600px;background-color: #ffffff;margin-top: 0;padding: 40px 0;">
        <div class="title" style="text-align: center;font-weight: bold;font-size: 32px;color: #1a1a1a;line-height: 36px;">Post Created!</div>
        <div class="subtitle" style="margin-top: 20px;text-align: center;font-size: 18px;color: #1a1a1a;line-height: 18px;">Your post has been created and is now live.</div>
        <div class="subtitle" style="margin-top: 20px;text-align: center;font-size: 18px;color: #1a1a1a;line-height: 18px;">Click below to view your post.</div>
        <a class="activateButton" href=${postUrl} target="_blank" style="margin: 25px 0;font-size: 12px;font-family: &quot;open sans semi&quot;, Helvetica, Arial, sans-serif;color: #ffffff;text-decoration: none;border-radius: 0px;padding: 12px 18px;border: 1px solid #1a1a1a;background-color: #00458a;display: inline-block;line-height: 26px;letter-spacing: 2px;text-transform: uppercase;cursor: pointer;">
          View Your Post
        </a>
        <div>Or copy this link and paste in your web browser:</div>
        <br>
        <a href=${postUrl} class="link-text" style="color: #00458a;">
          <div>${postUrl}</div>
        </a>
        <br>
        <div style>Cheers, The BoardRack Team</div>
      </div>
      <div class="footer" style="max-width: 600px;padding: 30px 0;background-color: #00458a;">
        <div>
          <a href="https://facebook.com" target="_blank" class="social-logo" style="display: inline-block;margin: 0 20px 10px 20px;cursor: pointer;">
            <img src="https://ddimagelibrary.s3-us-west-1.amazonaws.com/facebook_logo_white.png" style="border: 0;">
          </a>
          <a href="https://twitter.com" target="_blank" class="social-logo" style="display: inline-block;margin: 0 20px 10px 20px;cursor: pointer;">
            <img src="https://ddimagelibrary.s3-us-west-1.amazonaws.com/twitter_logo_white.png" style="border: 0;">
          </a>
          <a href="https://instagram.com" target="_blank" class="social-logo" style="display: inline-block;margin: 0 20px 10px 20px;cursor: pointer;">
            <img src="https://ddimagelibrary.s3-us-west-1.amazonaws.com/instagram_logo_white.png" style="border: 0;">
          </a>
          <a href="https://youtube.com" target="_blank" class="social-logo" style="display: inline-block;margin: 0 20px 10px 20px;cursor: pointer;">
            <img src="https://ddimagelibrary.s3-us-west-1.amazonaws.com/youtube_logo_white.png" style="border: 0;">
          </a>
        </div>
        <div class="footerContent" style="color: #e6e6e6;font-size: 14px;">BoardRack • San Francisco, CA 94122</div>
      </div>
    </center>
  </body>
</html>

`;
};

export default generateInline;
