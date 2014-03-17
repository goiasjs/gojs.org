module.exports = {

  prompts: false,

  // These are variables will be accessible via our templates
  templateData: {

    // Conference info
    conf: {
      name: "1º Workshop",
      description: "Grupos de Usuários Javascript de Goiás",
      logo: "themes/gojs.org/img/logo_gojs.png",
      date: "2014-03-29 15:00",
      // If your event is free, just comment this line
      // price: "R$ 12",
      venue: "Salão de festas do Edifício Itaipu",
      address: "Avenida República do Líbano, 1135 - Setor Aeroporto",
      city: "Goiânia",
      state: "Goiás "
    },

    // The Call To Action button at the header,
    // If you don't want this, just remove the callToAction property.
    callToAction: {
        text: "Inscreva-se agora!",
        link: "https://meubilhete.com/workshopgojs"
    },

    // "Fork me on GitHub", if you don't want this, just remove the forkButton property
    // forkButton: {
    //     repository: "https://github.com/goiasjs/goiasjs.org"
    // },

    // Site info
    site: {
      theme: "gojs.org",
      url: "http://gojs.org",
      googleanalytics: "UA-44629992-1"
    },

    // Active sections on the website
    // to deactivate comment out with '//'
    // you can also change order here and it will reflect on page
    sections: [
      'about',
      'location',
      'speakers',
      'schedule',
      'sponsors',
      'partners',
      'contact'
    ],

    // Labels which you can translate to other languages
    labels: {
      about: "Quem somos",
      location: "Local",
      speakers: "Palestrantes",
      schedule: "Cronograma",
      sponsors: "Patrocinadores",
      partners: "Parceiros",
      contact: "Contato"
    },

    // The entire schedule
    schedule: [
      {
        name: "Boas vindas",
        time: "15h00"
      },
      {
        name: "Pedro Nasser",
        photo: "themes/yellow-swan/img/speaker.jpg",
        bio: "Javascript and Node.JS developer",
        company: "YEPT",
        link: {
          href: "http://twitter.com/pedroNCS",
          text: "@pedroNCS"
        },
        presentation: {
          title: "Prototype, é sempre bom?",
          description: "Prós, contras e alternativas para as mais diversas situações",
          time: "15h15"
        }
      },
      {
        name: "Edygar de Lima",
        photo: "themes/yellow-swan/img/speaker.jpg",
        // bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
        // company: "Microsoft",
        link: {
          href: "http://twitter.com/edygarDeLima",
          text: "@edygarDeLima"
        },
        presentation: {
          title: "Eventos / Sinais / Mensagens",
          // description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
          time: "15h45"
        }
      },
      {
        name: "Coffee-break",
        time: "16h15"
      },
      {
        name: "Luiz Gonzaga dos Santos Filho",
        photo: "http://luiz.in/c/xing.jpg",
        bio: "JS learner and lover",
        company: "Vega Sistemas",
        link: {
          href: "http://twitter.com/luizmarelo",
          text: "@luizmarelo"
        },
        presentation: {
          title: "Promessas",
          description: "Introdução à nova funcionalidade da ES6: promessas. Sugere-se conhecimento prévio de callbacks e bibliotecas de controle de fluxo, como a async.",
          time: "16h45"
        }
      },
      {
        name: "Kássio Maia",
        photo: "themes/yellow-swan/img/speaker.jpg",
        // bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
        // company: "Apple, Inc.",
        link: {
          href: "http://twitter.com/kassiomaia",
          text: "@kassiomaia"
        },
        presentation: {
          title: "Design Patterns com Javascript",
          // description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
          time: "17h15"
        }
      }
    ],

    // List of Sponsors
    sponsors: [
      // {
      //   name: "Seja um patrocinador",
      //   logo: "themes/yellow-swan/img/your-logo.png",
      //   url: ""
      // }
    ],

    // List of Partners
    partners: [
        {
            name: "BrazilJS",
            logo: "themes/gojs.org/img/partner_braziljs.png",
            url: "http://braziljs.org"
        }, {
            name: "FGSL",
            logo: "themes/gojs.org/img/partner_fgsl.jpg",
            url: "http://www.fgsl.com.br"
        }, {
            name: "ASL",
            logo: "themes/gojs.org/img/partner_asl.png",
            url: "http://aslgo.org.br/"
        }, {
            name: "Grão JS",
            logo: "themes/gojs.org/img/partner_graojs.png",
            url: "https://github.com/synackbr/graojs"
        // }, {
        //     name: "Vision TI",
        //     logo: "themes/gojs.org/img/partner_visionti.png",
        //     url: "http://www.vision-ti.com.br"
        }
    ],

    // Theme path
    getTheme: function() {
      return "themes/" + this.site.theme;
    }
  }
};
