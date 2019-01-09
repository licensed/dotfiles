objects = [
    Google = {
        links: [ 
            link1 = {name:"Google",url:"https://www.google.com.br"},
            link2 = {name:"Fotos",url:"https://www.google.com/photos/"},
            link3 = {name:"Gmail",url:"https://www.google.com/gmail/"},
            link4 = {name:"Drive",url:"https://www.google.com/drive/"}, 
            link5 = {name:"Maps",url:"https://www.google.com/maps"},  
        ],
        icon:"fa-google",
        url:"https://google.com.br/search",
        query:"?q=",
        ph:"Pesquisa Google",
        name:"google",
        method:"post",
        color:"#555" //Not used yet
    },
    Reddit = {
        links: [ 
            link1 = {name:"Reddit",url:"https://reddit.com"}, 
            link2 = {name:"Startpages",url:"https://www.reddit.com/r/startpages"},
            link3 = {name:"Unixporn",url:"https://www.reddit.com/r/unixporn"}, 
        ],
        icon:"fa-reddit",
        url:"https://reddit.com/r/",
        query:"",
        ph:"r/",
        name:"reddit",
        method:"post",
        color:"#555" //Not used yet
    },
    Youtube = {
        links: [ 
            link1 = {name:"Youtube",url:"https://www.youtube.com"}, 
            link2 = {name:"Inscrições",url:"https://www.youtube.com/feed/subscriptions"}, 
        ],
        icon:"fa-youtube",
        url:"https://www.youtube.com/results",
        query:"?search_query=",
        ph:"Pesquisa Youtube",
        name:"youtube",
        method:"post",
        color:"#555" //Not used yet
    },
    Twitch = {
        links: [ 
            link1 = {name:"Twitch",url:"https://www.twitch.tv/"}, 
            link2 = {name:"Seguindo",url:"https://www.twitch.tv/directory/following"}, 
        ],
        icon:"fa-twitch",
        url:"https://www.twitch.tv/",
        query:"",
        ph:"Canal",
        name:"twitch",
        method:"post",
        color:"#555" //Not used yet
    },
    Facebook = {
        links: [ 
            link1 = {name:"Facebook",url:"https://www.facebook.com/"}, 
            link2 = {name:"Messenger",url:"https://www.messenger.com/"},  
        ],
        icon:"fa-facebook",
        //url:"https://facebook.com/search?",
        url:"https://www.facebook.com/search/str/",
        query:"",
        ph:"Pesquisa Facebook",
        name:"facebook",
        method:"post",
        color:"#555" //Not used yet
    },
    Github = {
        links: [ 
            link1 = {name:"Github",url:"https://github.com/"},  
            link2 = {name:"Sistematico",url:"https://github.com/sistematico"},
            link3 = {name:"Arch Dev BR",url:"https://github.com/sistematico"},
        ],
        icon:"fa-github-alt",
        url:"https://github.com/search",
        query:"?q=",
        ph:"Pesquisa Github",
        name:"github",
        method:"post",
        color:"#555" //Not used yet
    },
    Gitlab = {
        links: [ 
            link1 = {name:"Gitlab",url:"https://gitlab.com"}, 
        ],
        icon:"fa-gitlab",
        url:"https://github.com/search",
        query:"?q=",
        ph:"Pesquisa Gitlab",
        name:"gitlab",
        method:"post",
        color:"#555" //Not used yet
    },
    Archwiki = {
        links: [ 
            link1 = {name:"Arch Wiki",url:"https://wiki.archlinux.org"}, 
        ],
        icon:"fa-linux",
        url:"https://wiki.archlinux.org/index.php",
        query:"?search=",
        ph:"Arch Wiki",
        name:"archwiki",
        method:"post",
        color:"#555" //Not used yet
    },
];
