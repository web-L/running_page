interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const data: ISiteMetadataResult = {
  siteTitle: 'Ali Running Page',
  siteUrl: 'https://alimb.com',
  logo: 'https://avatars.githubusercontent.com/u/23280434?v=4',
  description: 'Personal site and blog',
  navLinks: [
    {
      name: 'Blog',
      url: 'https://github.com/web-L/',
    },
    {
      name: 'About',
      url: '',
    },
  ],
};

export default data;
