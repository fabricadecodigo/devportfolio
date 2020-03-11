/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    presentation: {
      hi: 'Olá, Eu sou o',
      name: 'Felipe Franco',
      title: 'Desenvolvedor full stack com experiência em todos os aspectos do ciclo de vida de desenvolvimento de software',
      socialMedia: [
        {
          name: 'github',
          link: 'https://github.com/fabricadecodigo'
        },
        {
          name: 'instagram',
          link: 'https://www.instagram.com/fabricadecodigo/'
        },
        {
          name: 'youtube',
          link: 'http://youtube.com.br/fabricadecodigo'
        },
        {
          name: 'linkedin',
          link: 'https://www.linkedin.com/in/feliperfranco/'
        },
        {
          name: 'twitter',
          link: 'https://twitter.com/fabricadecodigo'
        }
      ]
    },
    aboutMe: {
      title: 'Eu sou um desenvolvedor com 10 anos de experiencia',
      description: `Desenvolvedor web full-stack com mais de 10 anos de experiência com .NET. Experiência sólida
      em integrações com APIs REST e na criação de features de finanças como por exemplo
      integrações para emissão de NFe. Também tenho experiência em todos os aspectos de
      desenvolvimento de software, incluindo análise de requisitos, design, desenvolvimento e
      suporte a produção. As características que me destaca de outros candidatos são:
      Relacionamento interpessoal, capacidade de liderança e gosto de ajudar outros colegas de
      trabalho.`,
      photoUrl: 'https://pt.gravatar.com/userimage/9719393/0d8d6806fb996d79982e7af82653ef51.png?size=200'
    },
    footerText: 'Fábrica de Código',
    homePage: {
      title: 'Página Inicial',
      img: 'https://images.unsplash.com/photo-1546464033-5b15cf1168f1?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=800'
    },
    aboutPage: {
      title: 'Sobre',
      img: 'https://images.unsplash.com/photo-1569693799105-4eb645d89aea?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=800'
    }
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        postCssPlugins: [
          require("tailwindcss")
        ]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    'gatsby-transformer-remark'
  ]
}
