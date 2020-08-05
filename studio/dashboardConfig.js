export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5f2a1ea94552d3e0538ab309',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-wnwg3mai',
                  apiId: '94f1a18f-a6b9-4639-8501-20b87d86d534'
                },
                {
                  buildHookId: '5f2a1ea951515350e6ce96a0',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-as159mqi',
                  apiId: '6b856a9f-b7c2-4f95-b7b1-f5199bee6451'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/JackovAlltrades/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-as159mqi.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
