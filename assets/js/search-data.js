// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "A growing collection of your cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "Repositories",
          description: "My GitHub stats and some useful repository links",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-podcasts",
          title: "Podcasts",
          description: "This page contains an RSS updated feed of my audio podcasts",
          section: "Navigation",
          handler: () => {
            window.location.href = "/Podcast/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "Interesting subjects I have taught over the years.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-videos",
          title: "Videos",
          description: "Videos from my channel",
          section: "Navigation",
          handler: () => {
            window.location.href = "/videos/";
          },
        },{id: "post-",
        
          title: "",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/2026-11-08-08-11-26-oldham-2-1-swfc-aet-same-old-owls/";
          
        },
      },{id: "post-14-11-26-swfc-3-0-plymouth-here-we-go-goals-and-hot-water",
        
          title: "14/11/26 SWFC 3-0 Plymouth: Here we go. Goals and hot water",
        
        description: "What a great performance from the owls as the season starts here under Challinor",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/14-11-26-swfc-3-0-plymouth-here-we-go-goals-and-hot-water/";
          
        },
      },{id: "post-11-11-26-swfc-0-4-accrington-lambs-to-the-slaughter",
        
          title: "11/11/26 SWFC 0-4 Accrington: Lambs to the slaughter",
        
        description: "famously the advert said accrington Stanley who are they? well Sheffield Wednesday found out tonight as a very young inexperienced side. got well and truly hammered in the Jersey Mike&#39;s trophy",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/11-11-26-swfc-0-4-accrington-lambs-to-the-slaughter/";
          
        },
      },{id: "post-01-11-26-swfc-1-1-blackpool-handball",
        
          title: "01/11/26 SWFC 1-1 Blackpool: Handball!",
        
        description: "A new dawn, a spirited display but ultimately the owls shot themselves in the feet",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/01-11-26-swfc-1-1-blackpool-handball/";
          
        },
      },{id: "post-27-10-26-swfc-1-1-cambridge-baby-steps-forward",
        
          title: "27/10/26 SWFC 1-1 Cambridge: Baby steps forward",
        
        description: "Managerless Sheffield Wednesday took a little bit of a step forward by getting a draw against 6th place Cambridge United. An improved performance and something to build on for the new manager",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/27-10-26-swfc-1-1-cambridge-baby-steps-forward/";
          
        },
      },{id: "post-24-10-26-doncaster-2-0-swfc-sideways-and-backwards",
        
          title: "24/10/26 Doncaster 2-0 SWFC: Sideways and backwards",
        
        description: "The owls regress further with a hapless performance against Doncaster Rovers. Arse and elbow come to mind",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/24-10-26-doncaster-2-0-swfc-sideways-and-backwards/";
          
        },
      },{id: "post-20-10-26-notts-county-2-0-swfc-a-series-of-unfortunate-events",
        
          title: "20/10/26 Notts County 2-0 SWFC: A series of unfortunate events",
        
        description: "A poor showing away in Nottingham, two sides amongst the oldest in the league but will we ever learn?",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/20-10-26-notts-county-2-0-swfc-a-series-of-unfortunate-events/";
          
        },
      },{id: "post-17-10-26-swfc-5-0-wimbledon-hawaii-five-o-owls",
        
          title: "17/10/26 SWFC 5-0 Wimbledon: Hawaii five-o owls",
        
        description: "Never mind Honolulu we were in Hawaii today as everything clicked against the Dons",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/17-10-26-swfc-5-0-wimbledon-hawaii-five-o-owls/";
          
        },
      },{id: "post-10-10-26-huddersfield-2-2-swfc-owls-get-out-of-jail",
        
          title: "10/10/26 Huddersfield 2-2 SWFC: Owls get out of jail",
        
        description: "88 minutes and we were down and out, and then in Fergie time we managed to pull it out of the bag",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/10-10-26-huddersfield-2-2-swfc-owls-get-out-of-jail/";
          
        },
      },{id: "post-06-10-26-swfc-2-0-sunderland-u21-enough-as-owls-play-to-the-opposition",
        
          title: "06/10/26 SWFC 2-0 Sunderland U21: Enough as Owls play to the opposition",
        
        description: "The owls keep up at the top of the division in the Jersey Mike&#39;s trophy with a display short of comfortable but enough",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/06-10-26-swfc-2-0-sunderland-u21-enough-as-owls-play-to-the-opposition/";
          
        },
      },{id: "post-22-09-26-salford-1-2-swfc-a-game-of-two-halves",
        
          title: "22 09 26 Salford 1 2 Swfc A Game Of Two Halves",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/22-09-26-salford-1-2-swfc-a-game-of-two-halves/";
          
        },
      },{id: "post-becoming-a-genealogist-getting-started-with-ancestry",
        
          title: "Becoming a Genealogist - Getting Started with Ancestry",
        
        description: "Getting Started with Ancestry, why I decided to create a family tree, how to start, the pitfalls and benefits",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/an-introduction-to-genealogy/";
          
        },
      },{id: "post-haze-the-waters-edge-review",
        
          title: "Haze - The Waters Edge Review",
        
        description: "Review of the 2024 studio album by Haze from Sheffield",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/haze-the-waters-edge/";
          
        },
      },{id: "post-the-horror-of-health-creep",
        
          title: "The horror of health creep",
        
        description: "Navigating whole body health",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/mental-and-physical-health/";
          
        },
      },{id: "post-my-love-of-music",
        
          title: "My Love of Music",
        
        description: "Musical Therapy",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/love-of-music/";
          
        },
      },{id: "post-if-it-39-s-not-broken",
        
          title: "If it&#39;s not broken...",
        
        description: "1970s Technology, does it hold up?",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/old-vs-new-speakers/";
          
        },
      },{id: "post-my-initial-proper-experience-with-gitpages",
        
          title: "my initial (proper) experience with GitPages",
        
        description: "To start the posts",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/gitpages/";
          
        },
      },{id: "post-guts2025-james-thomson",
        
          title: '#guts2025 | James Thomson <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "What the future of Engineering could hold, from #GUTS2025",
        section: "Posts",
        handler: () => {
          
            window.open("https://www.linkedin.com/posts/jameswathomson_guts2025-activity-7309238842916524034-Clp_?utm_source=share&utm_medium=member_desktop&rcm=ACoAAASDVlIB_xXd-HtraqqxZy0zIubxq17kfHI", "_blank");
          
        },
      },{id: "post-embracing-ai-redefining-education-for-a-collaborative-future",
        
          title: 'Embracing AI: Redefining Education for a Collaborative Future <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Some years ago I took a short online course called &#39;The Mind is Flat&#39; which proposes that much of our behavior, thoughts, and feelings are shaped by external influences and immediate contexts, we basically learn from the available surroundings. Back in the early 80&#39;s when I was first at college our",
        section: "Posts",
        handler: () => {
          
            window.open("https://www.linkedin.com/pulse/embracing-ai-redefining-education-collaborative-future-james-thomson-s0mle/", "_blank");
          
        },
      },{id: "post-nurturing-the-nurturers-health-and-well-being-in-further-education",
        
          title: 'Nurturing the Nurturers: Health and Well-being in Further Education <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "I have had a fair few jobs in my time, in industry and also in education over the last 20 years. People come to FE for a number of reasons.",
        section: "Posts",
        handler: () => {
          
            window.open("https://www.linkedin.com/pulse/nurturing-nurturers-health-well-being-further-james-thomson-lbcle/?trackingId=4AjdKcZqq3kgf076Om0EzQ%3D%3D", "_blank");
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-the-original-adobe-flash-version-of-jamesthomson-org-uk",
          title: 'The original Adobe Flash version of Jamesthomson.org.uk',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_1/";
            },},{id: "news-page-migration-to-github-version-2",
          title: 'Page migration to GitHub - Version 2',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-my-current-top-tunes",
          title: 'My current top tunes',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_3/";
            },},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
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
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/jameswathomson", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/jameswathomson", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/JamesWAThomson", "_blank");
        },
      },{
        id: 'social-youtube',
        title: 'YouTube',
        section: 'Socials',
        handler: () => {
          window.open("https://youtube.com/@EchoesofPerception", "_blank");
        },
      },{
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
