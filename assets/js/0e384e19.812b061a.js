"use strict";(self.webpackChunkreact_native_paper_dates_docusaurus=self.webpackChunkreact_native_paper_dates_docusaurus||[]).push([[671],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>f});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(a),c=r,f=m["".concat(s,".").concat(c)]||m[c]||u[c]||i;return a?n.createElement(f,o(o({ref:t},d),{},{components:a})):n.createElement(f,o({ref:t},d))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},9881:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const i={sidebar_position:1},o="Introduction",l={unversionedId:"intro",id:"intro",title:"Introduction",description:"Minified zip badge",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Time Picker",permalink:"/docs/time-picker"}},s={},p=[{value:"Installation",id:"installation",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Yarn",id:"yarn",level:3},{value:"Npm",id:"npm",level:3},{value:"Register Translation",id:"register-translation",level:2},{value:"Supported",id:"supported",level:3},{value:"Custom",id:"custom",level:3},{value:"Android Caveats",id:"android-caveats",level:2},{value:"Below React Native 0.66",id:"below-react-native-066",level:3},{value:"Yarn Polyfills",id:"yarn-polyfills",level:3},{value:"Npm Polyfills",id:"npm-polyfills",level:3},{value:"Tips &amp; Tricks",id:"tips--tricks",level:2}],d={toc:p};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://badgen.net/bundlephobia/minzip/react-native-paper-dates",alt:"Minified zip badge"}),"\n",(0,r.kt)("img",{parentName:"p",src:"https://badgen.net/npm/dy/react-native-paper-dates",alt:"NPM downloads per year badge"}),"\n",(0,r.kt)("img",{parentName:"p",src:"https://badgen.net/npm/types/react-native-paper-dates",alt:"Types logo"}),"\n",(0,r.kt)("img",{parentName:"p",src:"https://badgen.net/npm/license/react-native-paper-dates",alt:"License badge"}),"\n",(0,r.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/Runs%20with%20Expo-4630EB.svg?style=flat-square&logo=EXPO&labelColor=f3f3f3&logoColor=000",alt:"Runs with expo badge"})),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/web-ridge/react-native-paper-dates"},"React Native Paper Dates")," is a cross-platform ",(0,r.kt)("a",{parentName:"p",href:"https://m3.material.io/"},"Material Design")," date and time picker library for ",(0,r.kt)("a",{parentName:"p",href:"https://reactnativepaper.com/"},"React Native Paper"),"."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=SHhQU2doTug"},(0,r.kt)("img",{parentName:"a",src:"https://user-images.githubusercontent.com/6492229/98866767-bd3f2780-246d-11eb-890e-3491b47c95c5.gif",alt:"Demo of react-native-paper-dates"}))),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"Install and follow the guide at ",(0,r.kt)("a",{parentName:"p",href:"https://callstack.github.io/react-native-paper/getting-started.html"},"react-native-paper"),"."),(0,r.kt)("h3",{id:"yarn"},"Yarn"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add react-native-paper-dates\n")),(0,r.kt)("h3",{id:"npm"},"Npm"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install react-native-paper-dates --save\n")),(0,r.kt)("h2",{id:"register-translation"},"Register Translation"),(0,r.kt)("h3",{id:"supported"},"Supported"),(0,r.kt)("p",null,"React-Native-Paper-Dates currently supports ",(0,r.kt)("inlineCode",{parentName:"p"},"en/nl/de/pl/pt/ar/ko/fr/enGB")," translations. Ideally you would do this somewhere before react-native-paper-dates is used. For example, you might add the follow to your ",(0,r.kt)("inlineCode",{parentName:"p"},"index.js")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"app.js"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import {\n  enGB,\n  registerTranslation,\n} from 'react-native-paper-dates'\nregisterTranslation('en-GB', enGB)\n")),(0,r.kt)("h3",{id:"custom"},"Custom"),(0,r.kt)("p",null,"React-Native-Paper-Dates also provides the ability to register your own translation. Ideally you would do this somewhere before react-native-paper-dates is used. For example, you might add the follow to your ",(0,r.kt)("inlineCode",{parentName:"p"},"index.js")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"app.js"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import {\n  registerTranslation,\n} from 'react-native-paper-dates'\nregisterTranslation(\"pl\", {\n  save: 'Save',\n  selectSingle: 'Select date',\n  selectMultiple: 'Select dates',\n  selectRange: 'Select period',\n  notAccordingToDateFormat: (inputFormat) =>\n    `Date format must be ${inputFormat}`,\n  mustBeHigherThan: (date) => `Must be later then ${date}`,\n  mustBeLowerThan: (date) => `Must be earlier then ${date}`,\n  mustBeBetween: (startDate, endDate) =>\n    `Must be between ${startDate} - ${endDate}`,\n  dateIsDisabled: 'Day is not allowed',\n  previous: 'Previous',\n  next: 'Next',\n  typeInDate: 'Type in date',\n  pickDateFromCalendar: 'Pick date from calendar',\n  close: 'Close',\n})\n")),(0,r.kt)("admonition",{title:"Note",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If a language is not supported. Consider creating a pull request so that it can officially be supported.")),(0,r.kt)("h2",{id:"android-caveats"},"Android Caveats"),(0,r.kt)("admonition",{title:"Tip",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"We recommend Hermes with React Native >= 0.66 you won't need these polyfills at all!")),(0,r.kt)("h3",{id:"below-react-native-066"},"Below React Native 0.66"),(0,r.kt)("p",null,"You will need to add a polyfill for the Intl API on Android if:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You have ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/facebook/hermes/issues/23"},"Hermes")," enabled and are below React Native 0.66."),(0,r.kt)("li",{parentName:"ul"},"You have ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/facebook/hermes/issues/23"},"Hermes")," disabled and you want to support locales outside of en-US and you don't have the org.webkit:android-jsc-intl:+ variant enabled in your ",(0,r.kt)("inlineCode",{parentName:"li"},"app/build.gradle"),".")),(0,r.kt)("h3",{id:"yarn-polyfills"},"Yarn Polyfills"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add react-native-localize @formatjs/intl-pluralrules @formatjs/intl-getcanonicallocales @formatjs/intl-listformat @formatjs/intl-displaynames @formatjs/intl-locale @formatjs/intl-datetimeformat @formatjs/intl-numberformat @formatjs/intl-relativetimeformat\n")),(0,r.kt)("h3",{id:"npm-polyfills"},"Npm Polyfills"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install react-native-localize @formatjs/intl-pluralrules @formatjs/intl-getcanonicallocales @formatjs/intl-listformat @formatjs/intl-displaynames @formatjs/intl-locale @formatjs/intl-datetimeformat @formatjs/intl-numberformat @formatjs/intl-relativetimeformat --save\n")),(0,r.kt)("p",null,"If using ",(0,r.kt)("a",{parentName:"p",href:"https://docs.expo.dev/"},"Expo"),", omit ",(0,r.kt)("inlineCode",{parentName:"p"},"react-native-localize")," and use ",(0,r.kt)("inlineCode",{parentName:"p"},"expo install expo-localization")," instead. Read more ",(0,r.kt)("a",{parentName:"p",href:"https://docs.expo.dev/versions/latest/sdk/localization/#installation"},"here"),"."),(0,r.kt)("p",null,"In your app starting entrypoint e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"./index.js")," or even better use a ",(0,r.kt)("inlineCode",{parentName:"p"},"index.android.js")," to prevent importing on iOS/web add the following code."),(0,r.kt)("admonition",{title:"Note",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Don't forget to import the languages you want to support, in the example only english language is supported.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// on top of your index.android.js file\nconst isAndroid = require('react-native').Platform.OS === 'android'; // this line is only needed if you don't use an .android.js file\nconst isHermesEnabled = !!global.HermesInternal;  // this line is only needed if you don't use an .android.js file\n\n// in your index.js file\nif (isHermesEnabled || isAndroid) {  // this line is only needed if you don't use an .android.js file\n\n  require('@formatjs/intl-getcanonicallocales/polyfill');\n  require('@formatjs/intl-locale/polyfill');\n\n  require('@formatjs/intl-pluralrules/polyfill');\n  require('@formatjs/intl-pluralrules/locale-data/en.js'); // USE YOUR OWN LANGUAGE OR MULTIPLE IMPORTS YOU WANT TO SUPPORT\n\n  require('@formatjs/intl-displaynames/polyfill');\n  require('@formatjs/intl-displaynames/locale-data/en.js'); // USE YOUR OWN LANGUAGE OR MULTIPLE IMPORTS YOU WANT TO SUPPORT\n\n  require('@formatjs/intl-listformat/polyfill');\n  require('@formatjs/intl-listformat/locale-data/en.js'); // USE YOUR OWN LANGUAGE OR MULTIPLE IMPORTS YOU WANT TO SUPPORT\n\n  require('@formatjs/intl-numberformat/polyfill');\n  require('@formatjs/intl-numberformat/locale-data/en.js'); // USE YOUR OWN LANGUAGE OR MULTIPLE IMPORTS YOU WANT TO SUPPORT\n\n  require('@formatjs/intl-relativetimeformat/polyfill');\n  require('@formatjs/intl-relativetimeformat/locale-data/en.js'); // USE YOUR OWN LANGUAGE OR MULTIPLE IMPORTS YOU WANT TO SUPPORT\n\n  require('@formatjs/intl-datetimeformat/polyfill');\n  require('@formatjs/intl-datetimeformat/locale-data/en.js'); // USE YOUR OWN LANGUAGE OR MULTIPLE IMPORTS YOU WANT TO SUPPORT\n\n  require('@formatjs/intl-datetimeformat/add-golden-tz.js');\n\n  // https://formatjs.io/docs/polyfills/intl-datetimeformat/#default-timezone\n  if ('__setDefaultTimeZone' in Intl.DateTimeFormat) {\n\n    // If you are using react-native-cli\n    let RNLocalize = require('react-native-localize');\n    Intl.DateTimeFormat.__setDefaultTimeZone(RNLocalize.getTimeZone());\n\n    //  Are you using Expo, use this instead of previous 2 lines\n    //  Intl.DateTimeFormat.__setDefaultTimeZone(\n    //    require(\"expo-localization\").timezone\n    //  );\n  }\n} // this line is only needed if you don't use an .android.js file\n")),(0,r.kt)("h2",{id:"tips--tricks"},"Tips & Tricks"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Use 0.14+ version of React-Native-Web (Modal and better number input)"),(0,r.kt)("li",{parentName:"ul"},"Try to avoid putting the Picker Modals inside of a scrollView If that is not possible use the following props on the surrounding ScrollViews/Flatlists")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'  keyboardDismissMode="on-drag"\n  keyboardShouldPersistTaps="handled"\n  contentInsetAdjustmentBehavior="always"\n')),(0,r.kt)("p",null,"This is to prevent the need to press 2 times before save or close button in modal works (1 press for closing keyboard, 1 press for confirm/close) ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/facebook/react-native/issues/10138"},"React Native Issue: #10138")))}m.isMDXComponent=!0}}]);