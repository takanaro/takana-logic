export default {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"

  siteTitle: 'たかなろじっく', // Navigation and Site Title
  siteTitleAlt: 'たかなろじっく | バックエンドエンジニア情報誌', // Alternative Site title for SEO
  siteUrl: 'https://takanalogic.com', // Domain of your site. No trailing slash!
  siteLanguage: 'ja', // Language Tag on <html> element
  siteBanner: '/assets/banner.jpg', // Your image for og:image tag. You can find it in the /static folder
  defaultBg: '/assets/bg.png', // default post background header
  favicon: 'static/favicon.ico', // Your image for favicons. You can find it in the /src folder
  siteDescription: 'Backend Engineerたかなろの知識をモリモリアウトプットするサイト。技術、節約、投資関係の情報を随時配信します。GatsbyJSをマスターし、より可読性の高いサイトを目指していきます。', // Your site description
  author: 'Takanaro', // Author for schemaORGJSONLD
  siteLogo: '/assets/logo.png', // Image for schemaORGJSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@takanar0', // Twitter Username - Optional
  ogSiteName: 'たかなろじっく | バックエンドエンジニア情報誌', // Facebook Site Name - Optional
  ogLanguage: 'ja_JP', // Facebook Language

  // Manifest and Progress color
  // See: https://developers.google.com/web/fundamentals/web-app-manifest/
  themeColor: '#3498DB',
  backgroundColor: '#2b2e3c',

  // Settings for typography.ts
  headerFontFamily: 'Bitter',
  bodyFontFamily: 'Open Sans',
  baseFontSize: '18px',

  // Social media
  siteFBAppID: '',

  //
  Google_Tag_Manager_ID: 'GTM-XXXXXXX',
  POST_PER_PAGE: 4,
};
