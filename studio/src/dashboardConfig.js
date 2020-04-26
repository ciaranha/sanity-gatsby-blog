export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ea602514c181e60ad2d56a3',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-zfvqz819',
                  apiId: '4fc6df96-302d-4bc3-b282-de34f7fa19ee'
                },
                {
                  buildHookId: '5ea602525418c38fcc1d763d',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-ihb81pe3',
                  apiId: '0c7820ba-2cc1-4db2-b5c8-70588f962966'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Jaibles/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-ihb81pe3.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
