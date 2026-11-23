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
        },{id: "post-20-11-26-barnsley-1-2-swfc-not-so-easy-does-it-as-owls-go-third",
        
          title: "20/11/26 Barnsley 1-2 SWFC: Not so easy does it as Owls go third...",
        
        description: "Sheffield Wednesday made very hard work of a game against almost bottom of the table. Barnsley two early goals and then they clung on and ran out two one winners",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/20-11-26-barnsley-1-2-swfc-not-so-easy-does-it-as-owls-go-third/";
          
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
      },{id: "post-08-11-26-oldham-2-1-swfc-aet-same-old-owls",
        
          title: "08/11/26 Oldham 2-1 SWFC aet: Same old owls",
        
        description: "Loads of hype, hope and promises but she old Wednesday as they failed to penetrate the Oldham defence.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/08-11-26-oldham-2-1-swfc-aet-same-old-owls/";
          
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
        
          title: "22/09/26 Salford 1-2 SWFC: A game of two halves",
        
        description: "After a dire first half the owls managed to show quality and turn the game around, coming from behind to win 2-1 in the Football League Trophy against a side who they had never played before",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/22-09-26-salford-1-2-swfc-a-game-of-two-halves/";
          
        },
      },{id: "post-19-09-26-swfc-0-0-stockport-promising-a-lot-and-delivering-nothing",
        
          title: "19/09/26 SWFC 0-0 Stockport: Promising a lot and delivering nothing",
        
        description: "The owls flattered to deceive against a free scoring Stockport on the game that everyone was expecting goals there wasn&#39;t any",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/19-09-26-swfc-0-0-stockport-promising-a-lot-and-delivering-nothing/";
          
        },
      },{id: "post-12-09-26-swfc-0-0-wigan-flat-but-still-top",
        
          title: "12 09 26 Swfc 0 0 Wigan Flat But Still Top",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/12-09-26-swfc-0-0-wigan-flat-but-still-top/";
          
        },
      },{id: "post-05-09-26-peterborough-1-2-swfc-grinding-out-the-results",
        
          title: "05 09 26 Peterborough 1 2 Swfc Grinding Out The Results",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/05-09-26-peterborough-1-2-swfc-grinding-out-the-results/";
          
        },
      },{id: "post-01-09-26-wycombe-1-2-swfc-flat-but-still-winning",
        
          title: "01 09 26 Wycombe 1 2 Swfc Flat But Still Winning",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/01-09-26-wycombe-1-2-swfc-flat-but-still-winning/";
          
        },
      },{id: "post-29-08-26-swfc-7-2-bromley-magnificent-seven-for-super-owls",
        
          title: "29 08 26 Swfc 7 2 Bromley Magnificent Seven For Super Owls",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/29-08-26-swfc-7-2-bromley-magnificent-seven-for-super-owls/";
          
        },
      },{id: "post-25-08-26-swfc-0-2-wolverhampton-wanderers-men-against-boys-with-no-plan",
        
          title: "25/08/26 SWFC 0-2 Wolverhampton Wanderers: Men against boys with no plan",
        
        description: "Tough game against a team full of multi million pounds players but did we do enough?",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/25-08-26-swfc-0-2-wolverhampton-wanderers-men-against-boys-with-no-plan/";
          
        },
      },{id: "post-20-08-26-swfc-0-1-bradford-substance-over-style-as-the-owls-league-1-honeymoon-is-over",
        
          title: "20/08/26 SWFC 0-1 Bradford: Substance over style as the Owls league 1 honeymoon...",
        
        description: "Fanfares, fireworks and former players but no magical start to life at home in league 1",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/20-08-26-swfc-0-1-bradford-substance-over-style-as-the-owls-league-1-honeymoon-is-over/";
          
        },
      },{id: "post-15-08-26-leyton-orient-1-2-swfc-sicknote-wednesday-pass-their-first-test",
        
          title: "15/08/26 Leyton Orient 1-2 SWFC: Sicknote Wednesday pass their first test",
        
        description: "The team that couldn&#39;t win a game for toffee, the player that couldn&#39;t score. The owls came through the test 2-1 at a trickier than expected Leyton Orient",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/15-08-26-leyton-orient-1-2-swfc-sicknote-wednesday-pass-their-first-test/";
          
        },
      },{id: "post-08-08-26-swfc-1-0-bolton-proud-of-the-boys",
        
          title: "08/08/26 SWFC 1-0 Bolton: Proud of the boys",
        
        description: "The owls have the perfect response to the Oldham game with a great performance and a win as a bonus",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/08-08-26-swfc-1-0-bolton-proud-of-the-boys/";
          
        },
      },{id: "post-06-08-26-preview-post-oldham-pre-bolton",
        
          title: "06/08/26 Preview: Post-Oldham, Pre-Bolton",
        
        description: "Got those post Oldham blues? Well I try and take a positive stance from sunny Crete where I&#39;ve been following the action",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/06-08-26-preview-post-oldham-pre-bolton/";
          
        },
      },{id: "post-25-07-26-stoke-2-4-0-0-swfc-a-game-of-four-halves",
        
          title: "25/07/26 Stoke 2+4-0+0 SWFC: A game of four halves",
        
        description: "A decent run out, well actually two against championship opposition including Inglesson but the defensive frailties are still there",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/25-07-26-stoke-2-4-0-0-swfc-a-game-of-four-halves/";
          
        },
      },{id: "post-09-05-26-swfc-legends-24-3-community-xi-carlos-comes-back-for-the-dream",
        
          title: "09/05/26 SWFC Legends 24-3 Community XI: Carlos comes back for the dream",
        
        description: "Carlos returned with the players from 2016 to thrill Hillsborough in aid of charity",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/09-05-26-swfc-legends-24-3-community-xi-carlos-comes-back-for-the-dream/";
          
        },
      },{id: "post-02-05-26-swfc-2-1-west-bromwich-albion-best-day-ever",
        
          title: "02/05/26 SWFC 2-1 West Bromwich Albion: Best day ever",
        
        description: "tbc",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/02-05-26-swfc-2-1-west-bromwich-albion-best-day-ever/";
          
        },
      },{id: "post-25-04-26-oxford-4-1-swfc-half-hearted-fiat-footed-but-the-youth-show-the-way",
        
          title: "25/04/26 Oxford 4-1 SWFC: Half-hearted, fiat-footed but the youth show the way",
        
        description: "The owls take a hammering away as the season comes to a close, but the future looks bright as Grainger gets his first professional goal",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/25-04-26-oxford-4-1-swfc-half-hearted-fiat-footed-but-the-youth-show-the-way/";
          
        },
      },{id: "post-22-04-26-middlesbrough-1-0-swfc-owls-slump-again-as-we-gift-boro-the-win",
        
          title: "22/04/26 Middlesbrough 1-0 SWFC: Owls slump again as we gift Boro the win...",
        
        description: "The fans were premier League but the defence had a Sunday league moment as we gifted a close game to promotion chasing Boro",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/22-04-26-middlesbrough-1-0-swfc-owls-slump-again-as-we-gift-boro-the-win/";
          
        },
      },{id: "post-18-04-26-swfc-1-1-charlton-benny-hill-vs-keystone-cops",
        
          title: "18/04/26 SWFC 1-1 Charlton: Benny Hill Vs Keystone Cops",
        
        description: "Not the most beautiful of games against a poor Charlton side, and we felt cheated at the end as a win was in sight",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/18-04-26-swfc-1-1-charlton-benny-hill-vs-keystone-cops/";
          
        },
      },{id: "post-11-04-26-coventry-0-0-swfc-david-vs-goliath-how-far-we-39-ve-come",
        
          title: "11/04/26 Coventry 0-0 SWFC: David Vs Goliath, how far We&#39;ve come",
        
        description: "The season keeps getting better as we take on the likely champions at their own ground after getting battered at home.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/11-04-26-coventry-0-0-swfc-david-vs-goliath-how-far-we-ve-come/";
          
        },
      },{id: "post-06-04-26-swfc-1-1-leicester-owls-stop-the-losses-as-charles-shines",
        
          title: "06/04/26 SWFC 1-1 Leicester: Owls stop the losses as Charles shines",
        
        description: "The owls were leading for most of the game but given how one sided it was we have to be happy with the result",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/06-04-26-swfc-1-1-leicester-owls-stop-the-losses-as-charles-shines/";
          
        },
      },{id: "post-03-04-26-stoke-2-0-swfc-same-old-faults-but-still-singing",
        
          title: "03/04/26 - Stoke 2-0 SWFC: Same old faults but still singing",
        
        description: "Sheffield Wednesday went down two nil away at Stoke. the fans were amazing if not the team but we still keep trying. still keep singing",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/03-04-26-stoke-2-0-swfc-same-old-faults-but-still-singing/";
          
        },
      },{id: "post-14-03-26-swfc-0-2-ipswich-hirst-the-panto-villain-but-she-old-wednesday",
        
          title: "14/03/26 - SWFC 0-2 Ipswich: Hirst the panto villain but she old Wednesday...",
        
        description: "The owls were undone by two late goals again as the large away following went home happy, but premiership they are not",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/14-03-26-swfc-0-2-ipswich-hirst-the-panto-villain-but-she-old-wednesday/";
          
        },
      },{id: "post-11-03-26-swfc-1-1-watford-palmer-gets-500-as-owls-make-a-point",
        
          title: "11/03/26 - SWFC 1-1 Watford: Palmer gets 500 as Owls make a point...",
        
        description: "we nearly did it! Sheffield Wednesday. managed to get a point and were so close to getting a comfortable victory against a promotion chase in Watford",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/11-03-26-swfc-1-1-watford-palmer-gets-500-as-owls-make-a-point/";
          
        },
      },{id: "post-07-03-26-derby-2-1-swfc-a-missed-opportunity-must-try-harder",
        
          title: "07/03/26 - Derby 2-1 SWFC: A missed opportunity, must try harder",
        
        description: "The fans were again magnificent but as always the owls came up short. we scored again but we concede far too easily",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/07-03-26-derby-2-1-swfc-a-missed-opportunity-must-try-harder/";
          
        },
      },{id: "post-28-02-26-swfc-1-3-southampton-same-struggle-same-result",
        
          title: "28/02/26 - SWFC 1-3 Southampton: Same struggle, same result",
        
        description: "The owls went down again at home after showing some spirit but were again undone by poor defending. The glimmers of hope are still there, we are capable of beating someone, we just need to find them!",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/28-02-26-swfc-1-3-southampton-same-struggle-same-result/";
          
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
