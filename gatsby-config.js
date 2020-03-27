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
    projects: [
      {
        title: 'HandsOn Ionic 4 para iniciantes',
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam maximus urna ac lectus maximus, nec hendrerit turpis consequat. 
        Aenean porta tincidunt neque a vulputate. Nullam at sapien mollis, pellentesque sapien sed, porta ex. Nam vitae ultrices ligula. Vivamus 
        justo nulla, ullamcorper ac fermentum eget, convallis nec ligula. In elementum laoreet tempor. Vivamus convallis nibh et vulputate efficitur. 
        Nam pellentesque ex in feugiat molestie.`,
        technologies: ['Ionic', 'Html', 'CSS', 'JavaScript'],
        img: 'http://www.fabricadecodigo.com/wp-content/uploads/elementor/thumbs/app-todo-com-ionic-ogd6rpbwgkg8mbyll61x8ez2zohiqvp8xbg4eysni8.png'
      },
      {
        title: 'HandsOn Ionic e SQLite',
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam maximus urna ac lectus maximus, nec hendrerit turpis consequat. 
        Aenean porta tincidunt neque a vulputate. Nullam at sapien mollis, pellentesque sapien sed, porta ex. Nam vitae ultrices ligula. Vivamus 
        justo nulla, ullamcorper ac fermentum eget, convallis nec ligula. In elementum laoreet tempor. Vivamus convallis nibh et vulputate efficitur. 
        Nam pellentesque ex in feugiat molestie.`,
        technologies: ['Ionic', 'Html', 'CSS', 'JavaScript'],
        img: 'http://www.fabricadecodigo.com/wp-content/uploads/elementor/thumbs/app-lista-de-compras-com-ionic-ogd6rlkjp8b3bw4274feyfx8m501w3abksu6huy874.png'
      },
      {
        title: 'HandsOn Ionic e APIs REST',
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam maximus urna ac lectus maximus, nec hendrerit turpis consequat. 
        Aenean porta tincidunt neque a vulputate. Nullam at sapien mollis, pellentesque sapien sed, porta ex. Nam vitae ultrices ligula. Vivamus 
        justo nulla, ullamcorper ac fermentum eget, convallis nec ligula. In elementum laoreet tempor. Vivamus convallis nibh et vulputate efficitur. 
        Nam pellentesque ex in feugiat molestie.`,
        technologies: ['Ionic', 'Html', 'CSS', 'JavaScript'],
        img: 'http://www.fabricadecodigo.com/wp-content/uploads/elementor/thumbs/app-agendamento-de-servi%C3%A7os-com-ionic-ogd6rir14q78d285nl7j8ymutzdy8zz4kevq212eps.png'
      }
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
