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
        },{id: "nav-cooking",
          title: "Cooking",
          description: "Food I like to eat and some of it I can cook, I have simple tastes.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cooking/";
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
            },},{id: "news-the-original-jamesthomson-org-uk-is-launched-using-adobe-flash-and-actionscript-3",
          title: 'The original jamesthomson.org.uk is launched using Adobe Flash and ActionScript 3',
          description: "",
          section: "News",},{id: "news-page-migration-to-github-version-2",
          title: 'Page migration to GitHub - Version 2',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
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
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%6F%75@%65%78%61%6D%70%6C%65.%63%6F%6D", "_blank");
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
          window.open("https://youtube.com/@youtube.com/@EchoesofPerception", "_blank");
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
