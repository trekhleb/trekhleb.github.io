(self.webpackChunktrekhleb_github_io=self.webpackChunktrekhleb_github_io||[]).push([[7047],{2210:function(e,t,n){var a=n(9720).w_;e.exports.D=function(e){return a({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"}}]})(e)}},4363:function(e,t,n){var a=n(9720).w_;e.exports.v=function(e){return a({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}},{tag:"line",attr:{x1:"16",y1:"2",x2:"16",y2:"6"}},{tag:"line",attr:{x1:"8",y1:"2",x2:"8",y2:"6"}},{tag:"line",attr:{x1:"3",y1:"10",x2:"21",y2:"10"}}]})(e)}},3839:function(e,t,n){"use strict";var a=n(7294);t.Z=e=>{const{children:t,className:n=""}=e;if(!t)return null;const r="bg-gray-200 px-1 rounded text-xs "+n;return a.createElement("div",{className:r},t)}},7966:function(e,t,n){"use strict";n.d(t,{Dp:function(){return r}});var a=n(7294);const r="row",i="column";t.ZP=e=>{const{children:t,mode:n=i}=e;if(!t)return null;const o="transition duration-200 ease-in-out shadow-card rounded-md overflow-hidden bg-white flex flex-col",l=n===r?o+" sm:flex-row items-stretch":""+o;return a.createElement("div",{className:l},t)}},9879:function(e,t,n){"use strict";n.d(t,{tt:function(){return r}});var a=n(7294);const r="row",i="column";t.ZP=e=>{const{children:t,className:n="",mode:o=i}=e;if(!t)return null;const l="p-6 "+n,s=o===r?l+" sm:w-3/5 lg:w-3/4":""+l;return a.createElement("div",{className:s,style:{flex:1}},t)}},7439:function(e,t,n){"use strict";var a=n(7294),r=n(4519),i=n(1705);t.Z=e=>{const{children:t,link:n}=e;if(!t)return null;const o=a.createElement(r.Z,{level:r._.h3},t),l=n?a.createElement(i.Z,{link:n},o):null;return a.createElement("div",{className:"mb-3"},l||o)}},7307:function(e,t,n){"use strict";n.d(t,{iT:function(){return r}});var a=n(7294);const r="list",i="grid";t.ZP=e=>{const{children:t,mode:n=i}=e;if(!t)return null;const r="grid gap-12 grid-cols-1",o=n===i?r+" sm:grid-cols-2 lg:grid-cols-3":""+r;return a.createElement("div",{className:o},t)}},3354:function(e,t,n){"use strict";var a=n(7294),r=n(4363),i=n(5103);const o=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],l=function(e,t){void 0===t&&(t=!1);return""+o[e.getMonth()]+(t?" "+e.getDate()+", ":" ")+e.getFullYear()};t.Z=e=>{const{startDate:t,endDate:n,className:o="",withDay:s=!1}=e;if(!t&&!n)return null;const c=t?l(new Date(t),s):null,m=t&&n?" → ":null,u=n?l(new Date(n),s):null;return a.createElement("div",{className:o},a.createElement(i.Z,null,a.createElement(r.v,{className:"mr-1"}),a.createElement("div",null,c,m,u)))}},9737:function(e,t,n){"use strict";var a=n(7294),r=n(4519);t.Z=e=>{const{children:t,className:n=""}=e,i="mb-6 uppercase font-extrabold "+n;return a.createElement(r.Z,{level:r._.h1,className:i},t)}},5656:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return D}});var a=n(7294),r=n(6669),i=n(9737),o=n(3839),l=n(5103),s=n(7943),c=n(7307),m=n(2210),u=n(3354),h=n(7966),p=n(9879),d=n(7439),g=n(6945);var b=e=>{const{publisher:t,publisherLogo:n}=e;return a.createElement("div",{key:t,className:"inline-block rounded-sm text-xs font-normal  flex flex-row justify-center items-center gap-1"},a.createElement(g.Z,{image:n,className:"w-5"}),a.createElement("div",null,t))};let w=function(e){return e.AITimeJournal="AI Time Journal",e.CodeProject="CodeProject",e.DOU="DOU",e.DataDrivenInvestor="Data Driven Investor",e.GeeksForGeeks="GeeksForGeeks",e.HackerNews="Hacker News",e.HackerNoon="HackerNoon",e.HowIGotJob="HowIGotJob",e.ITNEXT="ITNEXT",e.JavaScriptInPlainEnglish="JavaScript in Plain English",e.KDnuggets="KDnuggets",e.Newline="Newline",e.TechCrunch="TechCrunch",e.TowardsDataScience="Towards Data Science",e}({});var f=e=>{const{href:t,children:n}=e;return a.createElement("a",{href:t,target:"_blank",rel:"noopener noreferrer"},n)};const k={[w.AITimeJournal]:{logo:{srcPath:"publishers/ai-time-journal.jpg"},description:a.createElement(a.Fragment,null,a.createElement("p",null,a.createElement("b",null,"AI Time Journal"),a.createElement("br",null),a.createElement(f,{href:"https://www.aitimejournal.com/"},"aitimejournal.com")),a.createElement("p",null,"~9K followers on LinkedIn."))},[w.CodeProject]:{logo:{srcPath:"publishers/code-project.jpg"},description:a.createElement(a.Fragment,null,a.createElement("p",null,a.createElement("b",null,"CodeProject"),a.createElement("br",null),a.createElement(f,{href:"https://www.codeproject.com/"},"codeproject.com")),a.createElement("p",null,"A community for computer programmers with articles on different topics and programming languages such as web development, software development, C++, Java, and other topics."),a.createElement("p",null,"~3K followers on LinkedIn."),a.createElement("p",null,"~16K followers on X."))},[w.DOU]:{logo:{srcPath:"publishers/dou.jpg"},description:a.createElement(a.Fragment,null,a.createElement("p",null,a.createElement("b",null,"DOU (Developers Of Ukraine)"),a.createElement("br",null),a.createElement(f,{href:"https://dou.ua/"},"dou.ua")),a.createElement("p",null,"DOU is the largest IT community in Ukraine. DOU has 700K registered users, more than 14K companies, and articles and topics receive over 2.5M views per month (and the entire site receives 9M)."),a.createElement("p",null,"~180K followers on LinkedIn."),a.createElement("p",null,"~70K followers on Facebook."),a.createElement("p",null,"~27K followers on X."))},[w.DataDrivenInvestor]:{logo:{srcPath:"publishers/data-driven-investor.jpg"},description:a.createElement(a.Fragment,null,a.createElement("p",null,a.createElement("b",null,"Data Driven Investor"),a.createElement("br",null),a.createElement(f,{href:"https://www.datadriveninvestor.com/"},"datadriveninvestor.com")),a.createElement("p",null,"Data Driven Investor (DDI) publishes various news and op-ed pieces in the areas of technologies, finance, and society. They are dedicated to relentlessly covering tech topics, their anomalies and controversies, and reviewing all things fascinating and worth knowing."),a.createElement("p",null,"~2K followers on LinkedIn."),a.createElement("p",null,"~2K followers on X."))},[w.GeeksForGeeks]:{logo:{srcPath:"publishers/geeks-for-geeks.jpg"},description:a.createElement(a.Fragment,null,a.createElement("p",null,a.createElement("b",null,"GeeksForGeeks"),a.createElement("br",null),a.createElement(f,{href:"https://www.geeksforgeeks.org/"},"geeksforgeeks.org")),a.createElement("p",null,"GeeksforGeeks is a leading platform that provides computer science resources and coding challenges for programmers and technology enthusiasts, along with interview and exam preparations for upcoming aspirants."),a.createElement("p",null,"~2M followers on LinkedIn."),a.createElement("p",null,"~73K followers on X."))},[w.HackerNews]:{logo:{srcPath:"publishers/hacker-news.png"},description:a.createElement(a.Fragment,null,a.createElement("p",null,a.createElement("b",null,"Hacker News (HN)"),a.createElement("br",null),a.createElement(f,{href:"https://news.ycombinator.com/"},"news.ycombinator.com")),a.createElement("p",null,"A social news website focusing on computer science and entrepreneurship. It is run by the investment fund and startup incubator Y Combinator."))},[w.HackerNoon]:{logo:{srcPath:"publishers/hacker-noon.jpg"},description:a.createElement(a.Fragment,null,a.createElement("p",null,a.createElement("b",null,"HackerNoon"),a.createElement("br",null),a.createElement(f,{href:"https://hackernoon.com/"},"hackernoon.com")),a.createElement("p",null,"HackerNoon is a free platform with 25k+ contributing writers. 100M+ humans have visited HackerNoon to learn about technology."),a.createElement("p",null,"~87K followers on X."),a.createElement("p",null,"~16K followers on LinkedIn."))},[w.HowIGotJob]:{logo:{srcPath:"publishers/how-i-got-job.jpg"},description:a.createElement(a.Fragment,null,a.createElement("p",null,a.createElement("b",null,"HowIGotJob"),a.createElement("br",null),a.createElement(f,{href:"https://howigotjob.com/"},"howigotjob.com")),a.createElement("p",null,"A blog dedicated to curating experiences of people on how they got their job, choosing a career path, lesson learnt."),a.createElement("p",null,"~12K followers on LinkedIn."))},[w.ITNEXT]:{logo:{srcPath:"publishers/itnext.png"},description:a.createElement(a.Fragment,null,a.createElement("p",null,a.createElement("b",null,"ITNEXT"),a.createElement("br",null),a.createElement(f,{href:"https://itnext.io/"},"itnext.io")),a.createElement("p",null,"A platform for IT developers & software engineers to share knowledge, connect, collaborate, learn and experience next-gen technologies."),a.createElement("p",null,"~1.4K followers on LinkedIn."),a.createElement("p",null,"~4K followers on X."))},[w.JavaScriptInPlainEnglish]:{logo:{srcPath:"publishers/javascript-in-plain-english.jpg"},description:a.createElement(a.Fragment,null,a.createElement("p",null,a.createElement("b",null,"JavaScript in Plain English"),a.createElement("br",null),a.createElement(f,{href:"https://javascript.plainenglish.io/"},"javascript.plainenglish.io")),a.createElement("p",null,"~114K followers on Medium."),a.createElement("p",null,"~5K followers on X."))},[w.KDnuggets]:{logo:{srcPath:"publishers/kdnuggets.jpg"},description:a.createElement(a.Fragment,null,a.createElement("p",null,a.createElement("b",null,"KDnuggets"),a.createElement("br",null),a.createElement(f,{href:"https://www.kdnuggets.com/"},"kdnuggets.com")),a.createElement("p",null,"KDnuggets is a leading site on Data Science, Machine Learning, AI and Analytics."),a.createElement("p",null,"~218K followers on X."),a.createElement("p",null,"~52K followers on LinkedIn."),a.createElement("p",null,"~39K followers on Facebook."))},[w.Newline]:{logo:{srcPath:"publishers/newline.png"}},[w.TechCrunch]:{logo:{srcPath:"publishers/tech-crunch.png"},description:a.createElement(a.Fragment,null,a.createElement("p",null,a.createElement("b",null,"TechCrunch"),a.createElement("br",null),a.createElement(f,{href:"https://techcrunch.com/"},"techcrunch.com")),a.createElement("p",null,"An American global online newspaper focusing on topics regarding high-tech and startup companies."),a.createElement("p",null,"~10M followers on X."),a.createElement("p",null,"~3M followers on LinkedIn."),a.createElement("p",null,"~3M followers on Facebook."))},[w.TowardsDataScience]:{logo:{srcPath:"publishers/towards-data-science.jpg"},description:a.createElement(a.Fragment,null,a.createElement("p",null,a.createElement("b",null,"Towards Data Science"),a.createElement("br",null),a.createElement(f,{href:"https://towardsdatascience.com/"},"towardsdatascience.com")),a.createElement("p",null,"The world's leading publication for data science, AI, data analytics, data engineering and ML professionals."),a.createElement("p",null,"The publication requires an editorial review and approval process (",a.createElement(f,{href:"https://towardsdatascience.com/questions-96667b06af5"},"rules"),")."),a.createElement("p",null,"~700K followers ",a.createElement(f,{href:"https://towardsdatascience.com/questions-96667b06af5"},"on Medium"),"."),a.createElement("p",null,"~639K followers ",a.createElement(f,{href:"https://www.linkedin.com/company/towards-data-science/"},"on LinkedIn"),"."),a.createElement("p",null,"~234K followers ",a.createElement(f,{href:"https://x.com/TDataScience"},"on X"),"."))}};var v=e=>{const{children:t,content:n}=e,[r,i]=a.useState(!1),o="absolute flex z-10 transition-all duration-200 w-screen sm:w-64 left-0 sm:left-auto sm:-translate-x-1/2",l=r?o+" opacity-100":o+" invisible opacity-0";return a.createElement("div",{className:"shared-tooltip-container",onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1)},a.createElement("div",{className:"cursor-pointer"},t),a.createElement("div",{role:"tooltip",className:l},a.createElement("div",{className:"shared-tooltip-content px-3 py-2 mx-2 text-sm text-white bg-black rounded-lg drop-shadow-md w-full"},n)))};var y=e=>{const{publication:t}=e;if(!t)return null;const n=t.summary.map(((e,t)=>a.createElement("p",{key:t},e))),r=n?a.createElement("div",{className:"mb-3 font-light"},n):null,i=k[t.publisher].description?a.createElement("div",{className:"ml-2"},a.createElement(v,{content:k[t.publisher].description},a.createElement(m.D,null))):null;return a.createElement(h.ZP,{mode:h.Dp},a.createElement(p.ZP,{mode:p.tt},a.createElement(d.Z,{link:t.link},t.title),a.createElement(l.Z,{className:"mb-3 justify-between"},a.createElement("div",{className:"flex flex-row justify-center items-center"},a.createElement(b,{publisher:t.publisher,publisherLogo:k[t.publisher].logo}),i,a.createElement("div",{className:"text-gray-500 text-sm mr-3 ml-3"},"•"),a.createElement(u.Z,{startDate:t.date,className:"text-xs text-gray-500"}))),r))};var E=e=>{const{publications:t}=e,n=t.sort(((e,t)=>{const n=new Date(e.date).getTime();return new Date(t.date).getTime()-n})).map((e=>a.createElement(y,{publication:e,key:e.publisher+e.title})));return a.createElement(c.ZP,{mode:c.iT},n)};var N=e=>{const{publications:t,publisher:n,onPublisherSelect:r}=e,i=t.reduce(((e,t)=>(void 0===e[t.publisher]&&(e[t.publisher]=0),e[t.publisher]+=1,e)),{}),o=Object.keys(i).sort().map((e=>a.createElement("option",{key:e,value:e},e," (",i[e],")")));return a.createElement("div",null,a.createElement(l.Z,null,a.createElement("div",{className:"text-sm text-gray-500 mr-1"},"Publisher:"),a.createElement("div",null,a.createElement("select",{onChange:e=>{const t=e.target.value;r(t)},defaultValue:n,className:"text-sm"},a.createElement("option",{value:"All"},"All (",t.length,")"),o))))};var T=e=>{const{publications:t}=e,[n,c]=a.useState("All"),m=t.filter((e=>"All"===n||e.publisher===n)),u=t.length;return a.createElement(r.Z,null,a.createElement(s.ZP,{title:"Publications",description:"Trekhleb's publications"}),a.createElement(l.Z,null,a.createElement(i.Z,null,"Publications"),a.createElement(o.Z,{className:"ml-3 self-start"},u)),a.createElement(l.Z,{className:"mb-6 justify-between"},a.createElement(N,{publications:t,publisher:n,onPublisherSelect:e=>{c(e)}})),a.createElement(E,{publications:m}))};const x=[{title:"How X (Twitter) Designed Its Home Timeline API: Lessons to Learn",summary:["A closer look at X’s API: fetching data, linking entities, and solving under-fetching."],date:"2024-12-15",publisher:w.TowardsDataScience,link:{url:"https://towardsdatascience.com/api-design-of-x-twitter-home-timeline-da426f19edfe"}},{title:"System Design Sketches",summary:["System design sketches for popular system design interview questions."],date:"2024-07-15",publisher:w.ITNEXT,link:{url:"https://itnext.io/system-design-sketches-d8cb8e1d539f"}},{title:"JavaScript-algorithms: Algorithms and data structures implemented in JavaScript (github.com/trekhleb)",summary:["Published on Hacker News frontpage. The link leads to the Hacker News archive for that day where the mention can be found."],date:"2023-04-07",publisher:w.HackerNews,link:{url:"https://news.ycombinator.com/front?day=2023-04-07"}},{title:"TLDraw offers a collaborative whiteboard without any login",summary:["My okso.app drawing app is mentioned in the TechCrunch article related to TLDraw app"],date:"2022-12-16",publisher:w.TechCrunch,link:{url:"https://techcrunch.com/2022/12/16/tldraw-offers-a-collaborative-whiteboard-without-any-login/"}},{title:"Data Structures Sketches (okso.app)",summary:["Published on Hacker News frontpage. The link leads to the Hacker News archive for that day where the mention can be found."],date:"2022-10-09",publisher:w.HackerNews,link:{url:"https://news.ycombinator.com/front?day=2022-10-09"}},{title:"Ukrainian developers — about the benefits of participating in open source (in UA)",summary:["The article discusses the growth and challenges of open-source development in Ukraine, highlighting notable Ukrainian contributors and projects, the community's role in fostering collaboration, and how open-source tools are being leveraged to support Ukraine"],date:"2022-02-03",publisher:w.DOU,link:{url:"https://dou.ua/lenta/articles/open-source-in-ukraine/"}},{title:"Content-Aware Image Resizing in JavaScript",summary:["JavaScript implementation of so-called Seam Carving algorithm for content-aware image resizing"],date:"2022-01-19",publisher:w.CodeProject,link:{url:"https://www.codeproject.com/Articles/5322937/Content-Aware-Image-Resizing-in-JavaScript"}},{title:"JavaScript Algorithms and Data Structures (2018) (github.com/trekhleb)",summary:["Published on Hacker News frontpage. The link leads to the Hacker News archive for that day where the mention can be found."],date:"2021-10-22",publisher:w.HackerNews,link:{url:"https://news.ycombinator.com/front?day=2021-10-22"}},{title:"Free resources to promote your next startup (github.com/trekhleb)",summary:["Published on Hacker News 2nd page. The link leads to the Hacker News archive for that day where the mention can be found."],date:"2021-10-09",publisher:w.HackerNews,link:{url:"https://news.ycombinator.com/front?day=2021-10-09&p=2"}},{title:"Show HN: Self-Parking Car Evolution (trekhleb.dev)",summary:["Published on Hacker News 2nd page. The link leads to the Hacker News archive for that day where the mention can be found."],date:"2021-09-28",publisher:w.HackerNews,link:{url:"https://news.ycombinator.com/front?day=2021-09-28&p=2"}},{title:"Self-Parking Car in <500 Lines of Code",summary:["Training the car to do self-parking using a genetic algorithm"],date:"2021-09-28",publisher:w.TowardsDataScience,link:{url:"https://towardsdatascience.com/self-parking-car-in-500-lines-of-code-c1b2a57455af"}},{title:"Binary representation of floating-point numbers (github.com/trekhleb)",summary:["Published on Hacker News 2nd page. The link leads to the Hacker News archive for that day where the mention can be found."],date:"2021-07-26",publisher:w.HackerNews,link:{url:"https://news.ycombinator.com/front?day=2021-07-26&p=2"}},{title:"Binary representation of the floating-point numbers",summary:["Interactive example of how the floating-point numbers like -27.156 are stored in binary format in a computer's memory"],date:"2021-07-15",publisher:w.TowardsDataScience,link:{url:"https://towardsdatascience.com/binary-representation-of-the-floating-point-numbers-77d7364723f1"}},{title:"Content-aware image resizing in JavaScript",summary:["JavaScript implementation of so-called Seam Carving algorithm for the content-aware image resizing and object removal. A dynamic programming approach is applied to optimize the resizing time."],date:"2021-04-30",publisher:w.HackerNoon,link:{url:"https://hackernoon.com/how-to-resize-an-image-correctly-in-javascript-4548336j"}},{title:"Dynamic Programming vs. Divide-and-Conquer (2018) (trekhleb.dev)",summary:["Published on Hacker News frontpage. The link leads to the Hacker News archive for that day where the mention can be found."],date:"2021-04-25",publisher:w.HackerNews,link:{url:"https://news.ycombinator.com/front?day=2021-04-25"}},{title:"Content-aware image resizing in JavaScript (trekhleb.dev)",summary:["Published on Hacker News frontpage. The link leads to the Hacker News archive for that day where the mention can be found."],date:"2021-04-16",publisher:w.HackerNews,link:{url:"https://news.ycombinator.com/front?day=2021-04-16"}},{title:"Content-Aware Image Resizing in JavaScript",summary:["JavaScript implementation of so-called Seam Carving algorithm for the content-aware image resizing and object removal. A dynamic programming approach is applied to optimize the resizing time."],date:"2021-04-16",publisher:w.JavaScriptInPlainEnglish,link:{url:"https://javascript.plainenglish.io/content-aware-image-resizing-in-javascript-89144c1b5a5c"}},{title:"How To Build Links Detector That Making Links in Your Book Clickable",summary:["In this article I'm solving the issue of making the printed links (i.e. in a book or in a magazine) clickable via your smartphone camera. We will use TensorFlow 2 Object Detection API to train a custom object detector model to find positions and bounding boxes of the sub-strings like https:// in the text image (i.e. in smartphone camera stream)."],date:"2020-12-06",publisher:w.HackerNoon,link:{url:"https://hackernoon.com/how-to-build-links-detector-that-making-links-in-your-book-clickable-d11h31v2"}},{title:"Making the Printed Links Clickable Using TensorFlow 2 Object Detection API",summary:["In this article I'm solving the issue of making the printed links (i.e. in a book or in a magazine) clickable via your smartphone camera. We will use TensorFlow 2 Object Detection API to train a custom object detector model to find positions and bounding boxes of the sub-strings like https:// in the text image (i.e. in smartphone camera stream)."],date:"2020-12-01",publisher:w.TowardsDataScience,link:{url:"https://towardsdatascience.com/making-the-printed-links-clickable-using-tensorflow-2-object-detection-api-be42bd65488a"}},{title:"NanoNeuron — 7 simple JS functions that explain how machines learn",summary:["7 simple JavaScript functions that will give you a feeling of how machines can actually “learn”."],date:"2020-07-04",publisher:w.TowardsDataScience,link:{url:"https://towardsdatascience.com/making-the-printed-links-clickable-using-tensorflow-2-object-detection-api-be42bd65488a"}},{title:"Generating cooking recipes using TensorFlow and LSTM Recurrent Neural Network: A step-by-step guide",summary:['A character-level LSTM (Long short-term memory) RNN (Recurrent Neural Network) is trained on ~100k recipes dataset using TensorFlow. The model suggested the recipes "Cream Soda with Onions", "Puff Pastry Strawberry Soup", "Zucchini flavor Tea", and "Salmon Mousse of Beef and Stilton Salad with Jalapenos". Yum!? Follow along this detailed guide with code to create your own recipe-generating chef.'],date:"2020-07-03",publisher:w.KDnuggets,link:{url:"https://www.kdnuggets.com/2020/07/generating-cooking-recipes-using-tensorflow.html"}},{title:"[Book] JavaScript Algorithms",summary:["Pass your algorithms interview with confidence by learning data structures and algorithms in JavaScript. The book should help engineers to better prepare for tech interviews."],date:"2020-07-02",publisher:w.Newline,link:{url:"https://www.newline.co/javascript-algorithms"}},{title:"Generating weird cooking recipes with TensorFlow (github.com/trekhleb)",summary:["Published on Hacker News 2nd page. The link leads to the Hacker News archive for that day where the mention can be found."],date:"2020-06-22",publisher:w.HackerNews,link:{url:"https://news.ycombinator.com/front?day=2020-06-22&p=2"}},{title:"Generating cooking recipes using TensorFlow and LSTM Recurrent Neural Network: A step-by-step guide",summary:["This article contains details of how the recipes generator LSTM model may be trained trained on Python using TensorFlow 2 with Keras API."],date:"2020-06-20",publisher:w.TowardsDataScience,link:{url:"https://towardsdatascience.com/generating-cooking-recipes-using-tensorflow-and-lstm-recurrent-neural-network-a7bf242acad3"}},{title:"How I work: Oleksii Trekhleb, Front-end Engineer at Uber (in UA)",summary:["About my work, workspace organization, useful tools, life hacks and how I learn new technologies on my pet projects."],date:"2020-06-10",publisher:w.DOU,link:{url:"https://dou.ua/lenta/articles/how-i-work-trekhleb/"}},{title:"Interactive Machine Learning Experiments",summary:["A collection of interactive machine-learning experiments. Each experiment consists of Jupyter/Colab notebook (to see how a model was trained) and demo page (to see a model in action right in your browser)."],date:"2020-06-26",publisher:w.KDnuggets,link:{url:"https://www.kdnuggets.com/2020/05/interactive-machine-learning-experiments.html"}},{title:"Interactive Machine Learning Experiments",summary:["A collection of interactive machine-learning experiments. Each experiment consists of Jupyter/Colab notebook (to see how a model was trained) and demo page (to see a model in action right in your browser)."],date:"2020-05-06",publisher:w.TowardsDataScience,link:{url:"https://towardsdatascience.com/interactive-machine-learning-experiments-e9b29b0cb7b9"}},{title:"NanoNeuron – simple JavaScript functions that explain how machines learn (github.com/trekhleb)",summary:["Published on Hacker News frontpage. The link leads to the Hacker News archive for that day where the mention can be found."],date:"2019-12-06",publisher:w.HackerNews,link:{url:"https://news.ycombinator.com/front?day=2019-12-06"}},{title:"Creating React usePosition() hook for getting browser’s geolocation",summary:["In this article I'm explaining how to create React usePosition() hook to fetch and follow browser’s location."],date:"2019-07-01",publisher:w.ITNEXT,link:{url:"https://itnext.io/creating-react-useposition-hook-for-getting-browsers-geolocation-2f27fc1d96de"}},{title:"Technical Interview Preparation Checklist",summary:["This article is my attempt to summarize common technical interview process steps and to collect in one place some useful insights from recruiters that they normally send to applicants before the interviews."],date:"2019-05-01",publisher:w.ITNEXT,link:{url:"https://itnext.io/technical-interview-preparation-checklist-b000125f1535"}},{title:"Homemade Machine Learning is a repository for learning ML in Python with a Jupyter demo",summary:["Article about the project that contains examples of popular machine learning algorithms implemented in Python with mathematics behind them being explained."],date:"2019-01-08",publisher:w.DOU,link:{url:"https://dou.ua/lenta/articles/dou-projector-homemade-machine-learning/"}},{title:"Homemade Machine Learning in Python",summary:["Article about the project that contains examples of popular machine learning algorithms implemented in Python with mathematics behind them being explained."],date:"2018-12-21",publisher:w.AITimeJournal,link:{url:"https://www.aitimejournal.com/@oleksii.trekhleb/homemade-machine-learning-in-python"}},{title:"Homemade Machine Learning in Python",summary:["Article about the project that contains examples of popular machine learning algorithms implemented in Python with mathematics behind them being explained."],date:"2018-12-21",publisher:w.DataDrivenInvestor,link:{url:"https://medium.datadriveninvestor.com/homemade-machine-learning-in-python-ed77c4d6e25b"}},{title:"Machine Learning in MatLab/Octave",summary:["MatLab/Octave examples of popular machine learning algorithms with code examples and mathematics behind them being explained."],date:"2018-10-31",publisher:w.DataDrivenInvestor,link:{url:"https://medium.datadriveninvestor.com/machine-learning-in-matlab-octave-e0492cd803c0"}},{title:"Dynamic Programming vs Divide-and-Conquer",summary:["In this article I’m trying to explain the difference/similarities between dynamic programming and divide and conquer approaches based on two examples: binary search and minimum edit distance (Levenshtein distance)."],date:"2018-09-19",publisher:w.GeeksForGeeks,link:{url:"https://www.geeksforgeeks.org/dynamic-programming-vs-divide-and-conquer/"}},{title:"Playground and Cheatsheet for Learning Python (in UA)",summary:["Collection of Python scripts that are split by topics and contain code examples with explanations."],date:"2018-09-04",publisher:w.DOU,link:{url:"https://dou.ua/lenta/articles/dou-projector-playground-for-learning-python/"}},{title:"Classic Algorithms Implemented in JavaScript (github.com/trekhleb)",summary:["Published on Hacker News frontpage. The link leads to the Hacker News archive for that day where the mention can be found."],date:"2018-07-20",publisher:w.HackerNews,link:{url:"https://news.ycombinator.com/front?day=2018-07-20"}},{title:"What I Learned In My Career Developing 50+ Web-Projects, Launching 2 Startups And 2 Open-Source Projects",summary:["How to stay productive and to be open to new opportunities (career developing)."],date:"2018-07-09",publisher:w.HowIGotJob,link:{url:"https://howigotjob.com/software-engineer/what-i-learned-in-my-career-developing-50-web-projects-2-open-source-projects/?utm_content=cmp-true"}},{title:"Permutations/Combinations Algorithms Cheat Sheets",summary:["This article briefly describes the difference between mathematical permutations and combinations, explains the main idea behind permutations and combinations algorithms and contains links to algorithms implementation in JavaScript."],date:"2018-06-29",publisher:w.ITNEXT,link:{url:"https://itnext.io/permutations-combinations-algorithms-cheat-sheet-68c14879aba5"}},{title:"Dynamic Programming vs Divide-and-Conquer",summary:["In this article I’m trying to explain the difference/similarities between dynamic programming and divide and conquer approaches based on two examples: binary search and minimum edit distance (Levenshtein distance)."],date:"2018-06-15",publisher:w.ITNEXT,link:{url:"https://itnext.io/dynamic-programming-vs-divide-and-conquer-2fea680becbe"}},{title:"Algorithms and Data Structures Explained and Implemented in JavaScript (github.com/trekhleb)",summary:["Published on Hacker News frontpage. The link leads to the Hacker News archive for that day where the mention can be found."],date:"2018-05-23",publisher:w.HackerNews,link:{url:"https://news.ycombinator.com/front?day=2018-05-23"}},{title:"Algorithms and Data Structures in JavaScript",summary:["Algorithms and data structures implemented in JavaScript with explanations and links to further readings."],date:"2018-05-21",publisher:w.ITNEXT,link:{url:"https://itnext.io/algorithms-and-data-structures-in-javascript-a71548f902cb"}}];var D=()=>a.createElement(T,{publications:x})}}]);
//# sourceMappingURL=component---src-pages-publications-tsx-d7020ae16c4aeb099145.js.map