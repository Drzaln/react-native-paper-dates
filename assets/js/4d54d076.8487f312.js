"use strict";(self.webpackChunkreact_native_paper_dates_docusaurus=self.webpackChunkreact_native_paper_dates_docusaurus||[]).push([[459],{4753:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"contributing","title":"Contributing","description":"We want this community to be friendly and respectful to each other. Please follow it in all your interactions with the project.","source":"@site/docs/contributing.md","sourceDirName":".","slug":"/contributing","permalink":"/react-native-paper-dates/docs/contributing","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"tutorialSidebar","previous":{"title":"Multiple Dates Picker","permalink":"/react-native-paper-dates/docs/date-picker/multiple-dates-picker"},"next":{"title":"Showcase","permalink":"/react-native-paper-dates/docs/showcase"}}');var r=i(4848),o=i(8453);const s={sidebar_position:3},a="Contributing",l={},c=[{value:"Development workflow",id:"development-workflow",level:2},{value:"Linting and tests",id:"linting-and-tests",level:3},{value:"Scripts",id:"scripts",level:3},{value:"Sending a pull request",id:"sending-a-pull-request",level:3},{value:"Code of Conduct",id:"code-of-conduct",level:2},{value:"Our Pledge",id:"our-pledge",level:3},{value:"Our Standards",id:"our-standards",level:3},{value:"Enforcement Responsibilities",id:"enforcement-responsibilities",level:3},{value:"Scope",id:"scope",level:3},{value:"Enforcement",id:"enforcement",level:3},{value:"Enforcement Guidelines",id:"enforcement-guidelines",level:3},{value:"1. Correction",id:"1-correction",level:4},{value:"2. Warning",id:"2-warning",level:4},{value:"3. Temporary Ban",id:"3-temporary-ban",level:4},{value:"4. Permanent Ban",id:"4-permanent-ban",level:4},{value:"Attribution",id:"attribution",level:3}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"contributing",children:"Contributing"})}),"\n",(0,r.jsx)(n.p,{children:"We want this community to be friendly and respectful to each other. Please follow it in all your interactions with the project."}),"\n",(0,r.jsx)(n.h2,{id:"development-workflow",children:"Development workflow"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Working on a Windows machine?"})," Before executing any of the commands below, please make sure to comment out the line: ",(0,r.jsx)(n.code,{children:'yarn-path "scripts/bootstrap.js"'})," in the ",(0,r.jsx)(n.code,{children:".yarnrc"})," file located at the project's root."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["To get started with the project, run ",(0,r.jsx)(n.code,{children:"yarn bootstrap"})," in the root directory to install the required dependencies for each package:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"yarn bootstrap\n"})}),"\n",(0,r.jsxs)(n.p,{children:["While developing, you can run the ",(0,r.jsx)(n.a,{href:"https://github.com/web-ridge/react-native-paper-dates/tree/master/example",children:"example app"})," to test your changes."]}),"\n",(0,r.jsx)(n.p,{children:"To start the packager:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"yarn example start\n"})}),"\n",(0,r.jsx)(n.p,{children:"To run the example app on Android:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"yarn example android\n"})}),"\n",(0,r.jsx)(n.p,{children:"To run the example app on iOS:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"yarn example ios\n"})}),"\n",(0,r.jsx)(n.p,{children:"Make sure your code passes TypeScript and ESLint. Run the following to verify:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"yarn typescript\nyarn lint\n"})}),"\n",(0,r.jsx)(n.p,{children:"To fix formatting errors, run the following:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"yarn lint --fix\n"})}),"\n",(0,r.jsx)(n.p,{children:"Remember to add tests for your change if possible. Run the unit tests by:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"yarn test\n"})}),"\n",(0,r.jsxs)(n.p,{children:["To edit the Objective-C files, open ",(0,r.jsx)(n.code,{children:"example/ios/PaperDatesExample.xcworkspace"})," in XCode and find the source files at ",(0,r.jsx)(n.code,{children:"Pods > Development Pods > react-native-paper-dates"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["To edit the Kotlin files, open ",(0,r.jsx)(n.code,{children:"example/android"})," in Android studio and find the source files at ",(0,r.jsx)(n.code,{children:"reactnativepaperdates"})," under ",(0,r.jsx)(n.code,{children:"Android"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"linting-and-tests",children:"Linting and tests"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://eslint.org/",children:"ESLint"}),", ",(0,r.jsx)(n.a,{href:"https://prettier.io/",children:"Prettier"}),", ",(0,r.jsx)(n.a,{href:"https://www.typescriptlang.org/",children:"TypeScript"})]}),"\n",(0,r.jsxs)(n.p,{children:["We use ",(0,r.jsx)(n.a,{href:"https://www.typescriptlang.org/",children:"TypeScript"})," for type checking, ",(0,r.jsx)(n.a,{href:"https://eslint.org/",children:"ESLint"})," with ",(0,r.jsx)(n.a,{href:"https://prettier.io/",children:"Prettier"})," for linting and formatting the code, and ",(0,r.jsx)(n.a,{href:"https://jestjs.io/",children:"Jest"})," for testing."]}),"\n",(0,r.jsx)(n.p,{children:"Our pre-commit hooks verify that the linter and tests pass when committing."}),"\n",(0,r.jsx)(n.h3,{id:"scripts",children:"Scripts"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"package.json"})," file contains various scripts for common tasks:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"yarn bootstrap"}),": setup project by installing all dependencies and pods."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"yarn typescript"}),": type-check files with TypeScript."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"yarn lint"}),": lint files with ESLint."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"yarn test"}),": run unit tests with Jest."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"yarn example start"}),": start the Metro server for the example app."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"yarn example android"}),": run the example app on Android."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"yarn example ios"}),": run the example app on iOS."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"sending-a-pull-request",children:"Sending a pull request"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Working on your first pull request?"})," You can learn how from this ",(0,r.jsx)(n.em,{children:"free"})," series: ",(0,r.jsx)(n.a,{href:"https://egghead.io/series/how-to-contribute-to-an-open-source-project-on-github",children:"How to Contribute to an Open Source Project on GitHub"}),".\nWhen you're sending a pull request:"]}),"\n"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Prefer small pull requests focused on one change."}),"\n",(0,r.jsx)(n.li,{children:"Verify that linters and tests are passing."}),"\n",(0,r.jsx)(n.li,{children:"Review the documentation to make sure it looks good."}),"\n",(0,r.jsx)(n.li,{children:"Follow the pull request template when opening a pull request."}),"\n",(0,r.jsx)(n.li,{children:"For pull requests that change the API or implementation, discuss with maintainers first by opening an issue."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"code-of-conduct",children:"Code of Conduct"}),"\n",(0,r.jsx)(n.h3,{id:"our-pledge",children:"Our Pledge"}),"\n",(0,r.jsx)(n.p,{children:"We as members, contributors, and leaders pledge to make participation in our community a harassment-free experience for everyone, regardless of age, body size, visible or invisible disability, ethnicity, sex characteristics, gender identity and expression, level of experience, education, socio-economic status, nationality, personal appearance, race, religion, or sexual identity and orientation."}),"\n",(0,r.jsx)(n.p,{children:"We pledge to act and interact in ways that contribute to an open, welcoming, diverse, inclusive, and healthy community."}),"\n",(0,r.jsx)(n.h3,{id:"our-standards",children:"Our Standards"}),"\n",(0,r.jsx)(n.p,{children:"Examples of behavior that contributes to a positive environment for our community include:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Demonstrating empathy and kindness toward other people"}),"\n",(0,r.jsx)(n.li,{children:"Being respectful of differing opinions, viewpoints, and experiences"}),"\n",(0,r.jsx)(n.li,{children:"Giving and gracefully accepting constructive feedback"}),"\n",(0,r.jsx)(n.li,{children:"Accepting responsibility and apologizing to those affected by our mistakes, and learning from the experience"}),"\n",(0,r.jsx)(n.li,{children:"Focusing on what is best not just for us as individuals, but for the overall community"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Examples of unacceptable behavior include:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"The use of sexualized language or imagery, and sexual attention or\nadvances of any kind"}),"\n",(0,r.jsx)(n.li,{children:"Trolling, insulting or derogatory comments, and personal or political attacks"}),"\n",(0,r.jsx)(n.li,{children:"Public or private harassment"}),"\n",(0,r.jsx)(n.li,{children:"Publishing others' private information, such as a physical or email\naddress, without their explicit permission"}),"\n",(0,r.jsx)(n.li,{children:"Other conduct which could reasonably be considered inappropriate in a\nprofessional setting"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"enforcement-responsibilities",children:"Enforcement Responsibilities"}),"\n",(0,r.jsx)(n.p,{children:"Community leaders are responsible for clarifying and enforcing our standards of acceptable behavior and will take appropriate and fair corrective action in response to any behavior that they deem inappropriate, threatening, offensive, or harmful."}),"\n",(0,r.jsx)(n.p,{children:"Community leaders have the right and responsibility to remove, edit, or reject comments, commits, code, wiki edits, issues, and other contributions that are not aligned to this Code of Conduct, and will communicate reasons for moderation decisions when appropriate."}),"\n",(0,r.jsx)(n.h3,{id:"scope",children:"Scope"}),"\n",(0,r.jsx)(n.p,{children:"This Code of Conduct applies within all community spaces, and also applies when an individual is officially representing the community in public spaces. Examples of representing our community include using an official e-mail address, posting via an official social media account, or acting as an appointed representative at an online or offline event."}),"\n",(0,r.jsx)(n.h3,{id:"enforcement",children:"Enforcement"}),"\n",(0,r.jsx)(n.p,{children:"Instances of abusive, harassing, or otherwise unacceptable behavior may be reported to the community leaders responsible for enforcement at [INSERT CONTACT METHOD]. All complaints will be reviewed and investigated promptly and fairly."}),"\n",(0,r.jsx)(n.p,{children:"All community leaders are obligated to respect the privacy and security of the reporter of any incident."}),"\n",(0,r.jsx)(n.h3,{id:"enforcement-guidelines",children:"Enforcement Guidelines"}),"\n",(0,r.jsx)(n.p,{children:"Community leaders will follow these Community Impact Guidelines in determining the consequences for any action they deem in violation of this Code of Conduct:"}),"\n",(0,r.jsx)(n.h4,{id:"1-correction",children:"1. Correction"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Community Impact"}),": Use of inappropriate language or other behavior deemed unprofessional or unwelcome in the community."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Consequence"}),": A private, written warning from community leaders, providing clarity around the nature of the violation and an explanation of why the behavior was inappropriate. A public apology may be requested."]}),"\n",(0,r.jsx)(n.h4,{id:"2-warning",children:"2. Warning"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Community Impact"}),": A violation through a single incident or series of actions."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Consequence"}),": A warning with consequences for continued behavior. No interaction with the people involved, including unsolicited interaction with those enforcing the Code of Conduct, for a specified period of time. This includes avoiding interactions in community spaces as well as external channels like social media. Violating these terms may lead to a temporary or permanent ban."]}),"\n",(0,r.jsx)(n.h4,{id:"3-temporary-ban",children:"3. Temporary Ban"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Community Impact"}),": A serious violation of community standards, including sustained inappropriate behavior."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Consequence"}),": A temporary ban from any sort of interaction or public communication with the community for a specified period of time. No public or private interaction with the people involved, including unsolicited interaction with those enforcing the Code of Conduct, is allowed during this period. Violating these terms may lead to a permanent ban."]}),"\n",(0,r.jsx)(n.h4,{id:"4-permanent-ban",children:"4. Permanent Ban"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Community Impact"}),": Demonstrating a pattern of violation of community standards, including sustained inappropriate behavior, harassment of an individual, or aggression toward or disparagement of classes of individuals."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Consequence"}),": A permanent ban from any sort of public interaction within the community."]}),"\n",(0,r.jsx)(n.h3,{id:"attribution",children:"Attribution"}),"\n",(0,r.jsxs)(n.p,{children:["This Code of Conduct is adapted from the ",(0,r.jsx)(n.a,{href:"https://www.contributor-covenant.org/version/2/0/code_of_conduct.html",children:"Contributor Covenant homepage"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Community Impact Guidelines were inspired by ",(0,r.jsx)(n.a,{href:"https://github.com/mozilla/diversity",children:"Mozilla's code of conduct enforcement ladder"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["For answers to common questions about this code of conduct, see the ",(0,r.jsx)(n.a,{href:"https://www.contributor-covenant.org/faq",children:"FAQ"}),". Translations are ",(0,r.jsx)(n.a,{href:"https://www.contributor-covenant.org/translations",children:"here"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>a});var t=i(6540);const r={},o=t.createContext(r);function s(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);