"use strict";(self.webpackChunkreact_native_paper_dates_docusaurus=self.webpackChunkreact_native_paper_dates_docusaurus||[]).push([[56],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>k});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},p=Object.keys(e);for(a=0;a<p.length;a++)t=p[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)t=p[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),s=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=s(e.components);return a.createElement(l.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,p=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=s(t),u=r,k=c["".concat(l,".").concat(u)]||c[u]||m[u]||p;return t?a.createElement(k,i(i({ref:n},d),{},{components:t})):a.createElement(k,i({ref:n},d))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var p=t.length,i=new Array(p);i[0]=u;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o[c]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<p;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},3136:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>p,metadata:()=>o,toc:()=>s});var a=t(7462),r=(t(7294),t(3905));const p={sidebar_position:1},i="Single Date Picker",o={unversionedId:"date-picker/single-date-picker",id:"date-picker/single-date-picker",title:"Single Date Picker",description:"The single date picker provides a modal allowing only a single date selection.",source:"@site/docs/date-picker/single-date-picker.md",sourceDirName:"date-picker",slug:"/date-picker/single-date-picker",permalink:"/react-native-paper-dates/docs/date-picker/single-date-picker",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Date Picker",permalink:"/react-native-paper-dates/docs/category/date-picker"},next:{title:"Range Date Picker",permalink:"/react-native-paper-dates/docs/date-picker/range-date-picker"}},l={},s=[{value:"Usage",id:"usage",level:2},{value:"Live Example",id:"live-example",level:2},{value:"Props",id:"props",level:2}],d={toc:s};function c(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"single-date-picker"},"Single Date Picker"),(0,r.kt)("p",null,"The single date picker provides a modal allowing only a single date selection."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'import React from "react";\nimport { View, Text } from "react-native";\nimport { Button } from \'react-native-paper\';\nimport { DatePickerModal } from \'react-native-paper-dates\';\nimport { SafeAreaProvider } from "react-native-safe-area-context";\n\nexport default function App() {\n  const [date, setDate] = React.useState(undefined);\n  const [open, setOpen] = React.useState(false);\n\n  const onDismissSingle = React.useCallback(() => {\n    setOpen(false);\n  }, [setOpen]);\n\n  const onConfirmSingle = React.useCallback(\n    (params) => {\n      setOpen(false);\n      setDate(params.date);\n    },\n    [setOpen, setDate]\n  );\n\n  return (\n    <SafeAreaProvider>\n      <View style={{justifyContent: \'center\', flex: 1, alignItems: \'center\'}}>\n        <Button onPress={() => setOpen(true)} uppercase={false} mode="outlined">\n          Pick single date\n        </Button>\n        <DatePickerModal\n          locale="en"\n          mode="single"\n          visible={open}\n          onDismiss={onDismissSingle}\n          date={date}\n          onConfirm={onConfirmSingle}\n        />\n      </View>\n    </SafeAreaProvider>\n  );\n}\n')),(0,r.kt)("h2",{id:"live-example"},"Live Example"),(0,r.kt)("p",null,"View an interactive ",(0,r.kt)("a",{parentName:"p",href:"https://snack.expo.dev/@fitzwabs/react-native-paper-dates-single-picker"},"Expo snack"),"."),(0,r.kt)("h2",{id:"props"},"Props"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"locale (Required)"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Type: String"),(0,r.kt)("br",{parentName:"p"}),"\n","A locale can be composed of both a base language, the country (territory) of use, and possibly codeset (which is usually assumed). For example, German is de."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"mode (Required)"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Type: 'single' | 'multiple' | 'range'"),(0,r.kt)("br",{parentName:"p"}),"\n","The selection type for the date picker. For this example it is ",(0,r.kt)("inlineCode",{parentName:"p"},'"single"'),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"visible (Required)"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Type: boolean"),(0,r.kt)("br",{parentName:"p"}),"\n","Flag indicating if the component should be displayed."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"onDismiss (Required)"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Type: Function"),(0,r.kt)("br",{parentName:"p"}),"\n","The action to take when the component is closed."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"date (Required)"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Type: Date"),(0,r.kt)("br",{parentName:"p"}),"\n","The date value used to populate the component."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"onConfirm (Required)"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Type: Function"),(0,r.kt)("br",{parentName:"p"}),"\n","The action to take when the date is selected."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"validRange"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Type: {\n  startDate: Date | undefined,\n  endDate: Date | undefined,\n  disabledDates: Date[] | undefined\n}"),(0,r.kt)("br",{parentName:"p"}),"\n","Limits which dates the user can navigate to and where events can go. Dates outside of the valid range will be grayed-out."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"onChange"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Type: Function"),(0,r.kt)("br",{parentName:"p"}),"\n","Event handler when the component changes."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"saveLabel"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Type: String | undefined"),(0,r.kt)("br",{parentName:"p"}),"\n","The label used confirm a date selection. Defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"'Save'"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"saveLabelDisabled"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Type: boolean | undefined"),(0,r.kt)("br",{parentName:"p"}),"\n","Flag indicating if the save label should be disabled and unable to receive events. Defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"uppercase"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Type: boolean | undefined"),(0,r.kt)("br",{parentName:"p"}),"\n","Flag indicating if the text in the component should be uppercase. Defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"label"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Type: String | undefined"),(0,r.kt)("br",{parentName:"p"}),"\n","The label used as the header in the component. Defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"'Select date'"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"animationType"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Type: String | undefined"),(0,r.kt)("br",{parentName:"p"}),"\n","The animation used when opening the component. Defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"'slide'")," on ios/android and ",(0,r.kt)("inlineCode",{parentName:"p"},"'none'")," on web."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"startYear"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Type: number | undefined"),(0,r.kt)("br",{parentName:"p"}),"\n","The start year when the component is rendered. Defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"1800"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"endYear"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Type: number | undefined"),(0,r.kt)("br",{parentName:"p"}),"\n","The end year when the component is rendered. Defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"2200"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"closeIcon"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Type: string | undefined"),(0,r.kt)("br",{parentName:"p"}),"\n","The icon used to close the component. Defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"close"),". You can pass the name of an icon from ",(0,r.kt)("a",{parentName:"p",href:"https://materialdesignicons.com/"},"MaterialCommunityIcons"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"editIcon"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Type: string | undefined"),(0,r.kt)("br",{parentName:"p"}),"\n","The edit icon used to toggle between calendar and input. Defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"pencil"),". You can pass the name of an icon from ",(0,r.kt)("a",{parentName:"p",href:"https://materialdesignicons.com/"},"MaterialCommunityIcons"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"calendarIcon"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Type: string | undefined"),(0,r.kt)("br",{parentName:"p"}),"\n","The edit icon used to toggle between input and calendar. Defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"calendar"),". You can pass the name of an icon from ",(0,r.kt)("a",{parentName:"p",href:"https://materialdesignicons.com/"},"MaterialCommunityIcons"),"."))}c.isMDXComponent=!0}}]);