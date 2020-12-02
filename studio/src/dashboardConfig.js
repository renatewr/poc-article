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
                  buildHookId: '5fc75efeddfbcd52db9090a4',
                  title: 'Sanity Studio',
                  name: 'poc-article-studio',
                  apiId: 'f7b698e2-2397-4366-bfd5-b8a484ef7c58'
                },
                {
                  buildHookId: '5fc75efe8cb0055a7e279f4d',
                  title: 'Blog Website',
                  name: 'poc-article',
                  apiId: 'a6a969c8-7048-4713-ab50-c5ce11033149'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/renatewr/poc-article',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://poc-article.netlify.app', category: 'apps' }
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
