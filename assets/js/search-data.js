// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-",
    title: "",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-about",
          title: "About",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/index";
          },
        },{id: "nav-people",
          title: "People",
          description: "members of our group",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people/";
          },
        },{id: "nav-research",
          title: "Research",
          description: "Our interested topics and detailed works",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "Publications by categories in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/Publications/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "Course information and related materials.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-opening",
          title: "Opening",
          description: "Positions opening for application.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/opening/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-a-paper-is-accepted-by-ieee-transactions-on-network-science-and-engineering",
          title: 'A paper is accepted by IEEE Transactions on Network Science and Engineering!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_8/";
            },},{id: "news-西湖大学赵世钰研究员与北京大学李阿明研究员来访",
          title: '西湖大学赵世钰研究员与北京大学李阿明研究员来访',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_7/";
            },},{id: "news-a-paper-is-accepted-by-ieee-transactions-on-automatic-control-as-a-full-paper",
          title: 'A paper is accepted by IEEE Transactions on Automatic Control as a full...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_4/";
            },},{id: "news-another-paper-is-accepted-by-ieee-transactions-on-automatic-control-as-a-full-paper",
          title: 'Another paper is accepted by IEEE Transactions on Automatic Control as a full...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_5/";
            },},{id: "news-a-paper-is-accepted-as-a-regular-paper-by-automatica-congratulations-gen-he",
          title: 'A paper is accepted as a regular paper by Automatica. Congratulations, Gen He!...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_6/";
            },},{id: "news-prof-jing-gave-an-invited-talk-graph-rigidity-theory-and-its-application-on-multi-agent-coordination-problems-in-the-2025-academic-annual-conference-of-the-automation-and-instrumentation-association-of-the-three-provinces-and-one-municipality-in-southwest-china",
          title: 'Prof. Jing gave an invited talk “Graph Rigidity Theory and its Application on...',
          description: "",
          section: "News",},{id: "news-an-open-position-for-phd-student-we-have-a-phd-student-position-opening-for-3rd-year-undergraduate-students-click-here-to-see-the-details",
          title: 'An Open Position for PhD Student. We have a PhD student position opening...',
          description: "",
          section: "News",},{id: "projects-to-appear",
          title: 'To appear',
          description: "Our specific research works",
          section: "Projects",handler: () => {
              window.location.href = "/projects/10_project/";
            },},{id: "projects-formation-control",
          title: 'Formation Control',
          description: "Cooperatively form and maneuver a shape to perform tasks in complex environments.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-network-localization",
          title: 'Network Localization',
          description: "Cooperative localizing unknown nodes in a network.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-multi-agent-reinforcement-learning",
          title: 'Multi-Agent Reinforcement Learning',
          description: "Cooperative decision making in dynamic environments.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-cooperative-manipulation",
          title: 'Cooperative Manipulation',
          description: "Planning for cooperative motion of multiple robots or components.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
