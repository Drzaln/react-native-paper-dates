"use strict";(self.webpackChunkreact_native_paper_dates_docusaurus=self.webpackChunkreact_native_paper_dates_docusaurus||[]).push([[976],{619:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var a=n(4848),i=n(8453);const r={sidebar_position:1},s="Introduction",l={id:"intro",title:"Introduction",description:"Minified zip badge",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/react-native-paper-dates/docs/intro",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Time Picker",permalink:"/react-native-paper-dates/docs/time-picker"}},o={},d=[{value:"Installation",id:"installation",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Yarn",id:"yarn",level:3},{value:"Npm",id:"npm",level:3},{value:"Register Translation",id:"register-translation",level:2},{value:"Supported",id:"supported",level:3},{value:"Custom",id:"custom",level:3},{value:"Android Caveats",id:"android-caveats",level:2},{value:"Below React Native 0.66",id:"below-react-native-066",level:3},{value:"Yarn Polyfills",id:"yarn-polyfills",level:3},{value:"Npm Polyfills",id:"npm-polyfills",level:3},{value:"Tips &amp; Tricks",id:"tips--tricks",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"introduction",children:"Introduction"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.img,{src:"https://badgen.net/bundlephobia/minzip/react-native-paper-dates",alt:"Minified zip badge"}),"\n",(0,a.jsx)(t.img,{src:"https://badgen.net/npm/dy/react-native-paper-dates",alt:"NPM downloads per year badge"}),"\n",(0,a.jsx)(t.img,{src:"https://badgen.net/npm/types/react-native-paper-dates",alt:"Types logo"}),"\n",(0,a.jsx)(t.img,{src:"https://badgen.net/npm/license/react-native-paper-dates",alt:"License badge"}),"\n",(0,a.jsx)(t.img,{src:"https://img.shields.io/badge/Runs%20with%20Expo-4630EB.svg?style=flat-square&logo=EXPO&labelColor=f3f3f3&logoColor=000",alt:"Runs with expo badge"})]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"https://github.com/web-ridge/react-native-paper-dates",children:"React Native Paper Dates"})," is a cross-platform ",(0,a.jsx)(t.a,{href:"https://m3.material.io/",children:"Material Design"})," date and time picker library for ",(0,a.jsx)(t.a,{href:"https://reactnativepaper.com/",children:"React Native Paper"}),"."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.a,{href:"https://www.youtube.com/watch?v=SHhQU2doTug",children:(0,a.jsx)(t.img,{src:"https://github.com/web-ridge/react-native-paper-dates/assets/7604441/c1ae6c92-94a6-43f8-90b0-8f21c20fd4e9",alt:"Demo of react-native-paper-dates"})})}),"\n",(0,a.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,a.jsx)(t.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,a.jsxs)(t.p,{children:["Install and follow the guide at ",(0,a.jsx)(t.a,{href:"https://callstack.github.io/react-native-paper/getting-started.html",children:"react-native-paper"}),"."]}),"\n",(0,a.jsx)(t.h3,{id:"yarn",children:"Yarn"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"yarn add react-native-paper-dates\n"})}),"\n",(0,a.jsx)(t.h3,{id:"npm",children:"Npm"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"npm install react-native-paper-dates --save\n"})}),"\n",(0,a.jsx)(t.h2,{id:"register-translation",children:"Register Translation"}),"\n",(0,a.jsx)(t.h3,{id:"supported",children:"Supported"}),"\n",(0,a.jsxs)(t.p,{children:["React-Native-Paper-Dates currently supports ",(0,a.jsx)(t.code,{children:"ar/ca/de/en/en-GB/es/fr/he/hi/it/ko/nl/pl/pt/tr/zh/zh-TW/cs/el/ru/ro/id/ja/th/uk-UA/no-NO"})," translations. Ideally you would do this somewhere before react-native-paper-dates is used. For example, you might add the follow to your ",(0,a.jsx)(t.code,{children:"index.js"})," or ",(0,a.jsx)(t.code,{children:"app.js"}),"."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:"import { enGB, registerTranslation } from 'react-native-paper-dates'\nregisterTranslation('en-GB', enGB)\n"})}),"\n",(0,a.jsx)(t.h3,{id:"custom",children:"Custom"}),"\n",(0,a.jsxs)(t.p,{children:["React-Native-Paper-Dates also provides the ability to register your own translation. Ideally you would do this somewhere before react-native-paper-dates is used. For example, you might add the follow to your ",(0,a.jsx)(t.code,{children:"index.js"})," or ",(0,a.jsx)(t.code,{children:"app.js"}),"."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:"import { registerTranslation } from 'react-native-paper-dates'\nregisterTranslation('pl', {\n  save: 'Save',\n  selectSingle: 'Select date',\n  selectMultiple: 'Select dates',\n  selectRange: 'Select period',\n  notAccordingToDateFormat: (inputFormat) =>\n    `Date format must be ${inputFormat}`,\n  mustBeHigherThan: (date) => `Must be later then ${date}`,\n  mustBeLowerThan: (date) => `Must be earlier then ${date}`,\n  mustBeBetween: (startDate, endDate) =>\n    `Must be between ${startDate} - ${endDate}`,\n  dateIsDisabled: 'Day is not allowed',\n  previous: 'Previous',\n  next: 'Next',\n  typeInDate: 'Type in date',\n  pickDateFromCalendar: 'Pick date from calendar',\n  close: 'Close',\n})\n"})}),"\n",(0,a.jsx)(t.admonition,{title:"Note",type:"info",children:(0,a.jsx)(t.p,{children:"If a language is not supported, consider creating a pull request so that it can officially be supported."})}),"\n",(0,a.jsx)(t.h2,{id:"android-caveats",children:"Android Caveats"}),"\n",(0,a.jsx)(t.admonition,{title:"Tip",type:"tip",children:(0,a.jsx)(t.p,{children:"We recommend Hermes with React Native >= 0.66 you won't need these polyfills at all!"})}),"\n",(0,a.jsx)(t.h3,{id:"below-react-native-066",children:"Below React Native 0.66"}),"\n",(0,a.jsx)(t.p,{children:"You will need to add a polyfill for the Intl API on Android if:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["You have ",(0,a.jsx)(t.a,{href:"https://github.com/facebook/hermes/issues/23",children:"Hermes"})," enabled and are below React Native 0.66."]}),"\n",(0,a.jsxs)(t.li,{children:["You have ",(0,a.jsx)(t.a,{href:"https://github.com/facebook/hermes/issues/23",children:"Hermes"})," disabled and you want to support locales outside of en-US and you don't have the org.webkit:android-jsc-intl:+ variant enabled in your ",(0,a.jsx)(t.code,{children:"app/build.gradle"}),"."]}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"yarn-polyfills",children:"Yarn Polyfills"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"yarn add react-native-localize @formatjs/intl-pluralrules @formatjs/intl-getcanonicallocales @formatjs/intl-listformat @formatjs/intl-displaynames @formatjs/intl-locale @formatjs/intl-datetimeformat @formatjs/intl-numberformat @formatjs/intl-relativetimeformat\n"})}),"\n",(0,a.jsx)(t.h3,{id:"npm-polyfills",children:"Npm Polyfills"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"npm install react-native-localize @formatjs/intl-pluralrules @formatjs/intl-getcanonicallocales @formatjs/intl-listformat @formatjs/intl-displaynames @formatjs/intl-locale @formatjs/intl-datetimeformat @formatjs/intl-numberformat @formatjs/intl-relativetimeformat --save\n"})}),"\n",(0,a.jsxs)(t.p,{children:["If using ",(0,a.jsx)(t.a,{href:"https://docs.expo.dev/",children:"Expo"}),", omit ",(0,a.jsx)(t.code,{children:"react-native-localize"})," and use ",(0,a.jsx)(t.code,{children:"expo install expo-localization"})," instead. Read more ",(0,a.jsx)(t.a,{href:"https://docs.expo.dev/versions/latest/sdk/localization/#installation",children:"here"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["In your app starting entrypoint e.g. ",(0,a.jsx)(t.code,{children:"./index.js"})," or even better use a ",(0,a.jsx)(t.code,{children:"index.android.js"})," to prevent importing on iOS/web add the following code."]}),"\n",(0,a.jsx)(t.admonition,{title:"Note",type:"info",children:(0,a.jsx)(t.p,{children:"Don't forget to import the languages you want to support, in the example only english language is supported."})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:"// on top of your index.android.js file\nconst isAndroid = require('react-native').Platform.OS === 'android' // this line is only needed if you don't use an .android.js file\nconst isHermesEnabled = !!global.HermesInternal // this line is only needed if you don't use an .android.js file\n\n// in your index.js file\nif (isHermesEnabled || isAndroid) {\n  // this line is only needed if you don't use an .android.js file\n\n  require('@formatjs/intl-getcanonicallocales/polyfill')\n  require('@formatjs/intl-locale/polyfill')\n\n  require('@formatjs/intl-pluralrules/polyfill')\n  require('@formatjs/intl-pluralrules/locale-data/en.js') // USE YOUR OWN LANGUAGE OR MULTIPLE IMPORTS YOU WANT TO SUPPORT\n\n  require('@formatjs/intl-displaynames/polyfill')\n  require('@formatjs/intl-displaynames/locale-data/en.js') // USE YOUR OWN LANGUAGE OR MULTIPLE IMPORTS YOU WANT TO SUPPORT\n\n  require('@formatjs/intl-listformat/polyfill')\n  require('@formatjs/intl-listformat/locale-data/en.js') // USE YOUR OWN LANGUAGE OR MULTIPLE IMPORTS YOU WANT TO SUPPORT\n\n  require('@formatjs/intl-numberformat/polyfill')\n  require('@formatjs/intl-numberformat/locale-data/en.js') // USE YOUR OWN LANGUAGE OR MULTIPLE IMPORTS YOU WANT TO SUPPORT\n\n  require('@formatjs/intl-relativetimeformat/polyfill')\n  require('@formatjs/intl-relativetimeformat/locale-data/en.js') // USE YOUR OWN LANGUAGE OR MULTIPLE IMPORTS YOU WANT TO SUPPORT\n\n  require('@formatjs/intl-datetimeformat/polyfill')\n  require('@formatjs/intl-datetimeformat/locale-data/en.js') // USE YOUR OWN LANGUAGE OR MULTIPLE IMPORTS YOU WANT TO SUPPORT\n\n  require('@formatjs/intl-datetimeformat/add-golden-tz.js')\n\n  // https://formatjs.io/docs/polyfills/intl-datetimeformat/#default-timezone\n  if ('__setDefaultTimeZone' in Intl.DateTimeFormat) {\n    // If you are using react-native-cli\n    let RNLocalize = require('react-native-localize')\n    Intl.DateTimeFormat.__setDefaultTimeZone(RNLocalize.getTimeZone())\n\n    //  Are you using Expo, use this instead of previous 2 lines\n    //  Intl.DateTimeFormat.__setDefaultTimeZone(\n    //    require(\"expo-localization\").timezone\n    //  );\n  }\n} // this line is only needed if you don't use an .android.js file\n"})}),"\n",(0,a.jsx)(t.h2,{id:"tips--tricks",children:"Tips & Tricks"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Use 0.14+ version of React-Native-Web (Modal and better number input)"}),"\n",(0,a.jsx)(t.li,{children:"Try to avoid putting the Picker Modals inside of a scrollView If that is not possible use the following props on the surrounding ScrollViews/Flatlists"}),"\n"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:"keyboardDismissMode = 'on-drag'\nkeyboardShouldPersistTaps = 'handled'\ncontentInsetAdjustmentBehavior = 'always'\n"})}),"\n",(0,a.jsxs)(t.p,{children:["This is to prevent the need to press 2 times before save or close button in modal works (1 press for closing keyboard, 1 press for confirm/close) ",(0,a.jsx)(t.a,{href:"https://github.com/facebook/react-native/issues/10138",children:"React Native Issue: #10138"})]})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>l});var a=n(6540);const i={},r=a.createContext(i);function s(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);