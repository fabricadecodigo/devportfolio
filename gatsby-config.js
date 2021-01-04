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
          link: 'https://youtube.com.br/fabricadecodigo'
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
    jobs: [
      {
        date: '05/2013 - atual',
        company: 'Thomson Reuters',
        role: 'Desenvolvedor Sênior',
        description: `<p>Atuo na criação de uma plataforma para software jurídico desenvolvendo
        novas features, correções de bugs e ajudando tecnicamente todos os times
        (Desenvolvimento, Qualidade, Especificação e Analistas de requisitos).</p>
        <p><strong>Tecnologias: </strong>HTML, CSS, JavaScript, C#, ASP NET MVC, ASP.NET Web API, .Net Core, Angular, SQL Server e Scrum.</p>`
      },
      {
        date: '09/2009 - 05/2013',
        company: 'CEOsoftware',
        role: 'Desenvolvedor .Net',
        description: `<p>Desenvolvimento de novas features, correções de bugs e melhorias em geral para mobile, web e desktop. </p>
        <p><strong>Tecnologias: </strong>HTML, CSS, JavaScript, VB.NET, ASP NET Web Forms, ASP NET Windows Forms, 
        ASP.NET Soap web service, SQL Server, Windows Mobile e Android.</p>`
      }
    ],
    skills: [
      { name: 'Html', progress: 100 },
      { name: 'CSS', progress: 90 },
      { name: 'JavaScript', progress: 100 },
      { name: '.Net', progress: 100 },
      { name: 'Node JS', progress: 50 },
      { name: 'Ionic Framework', progress: 90 }
    ],
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
