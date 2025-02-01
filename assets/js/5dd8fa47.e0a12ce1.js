"use strict";(self.webpackChunkreact_native_paper_dates_docusaurus=self.webpackChunkreact_native_paper_dates_docusaurus||[]).push([[792],{2428:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>d,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"date-picker/input-date-picker","title":"Input Date Picker","description":"The input date picker provides a text field allowing for a date to be input or the date picker to be opened and selected.","source":"@site/docs/date-picker/input-date-picker.md","sourceDirName":"date-picker","slug":"/date-picker/input-date-picker","permalink":"/react-native-paper-dates/docs/date-picker/input-date-picker","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"tutorialSidebar","previous":{"title":"Range Date Picker","permalink":"/react-native-paper-dates/docs/date-picker/range-date-picker"},"next":{"title":"Multiple Dates Picker","permalink":"/react-native-paper-dates/docs/date-picker/multiple-dates-picker"}}');var s=t(4848),i=t(8453);const d={sidebar_position:3},a="Input Date Picker",o={},l=[{value:"Usage",id:"usage",level:2},{value:"Live Example",id:"live-example",level:2},{value:"Props",id:"props",level:2}];function c(e){const n={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"input-date-picker",children:"Input Date Picker"})}),"\n",(0,s.jsx)(n.p,{children:"The input date picker provides a text field allowing for a date to be input or the date picker to be opened and selected."}),"\n",(0,s.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:'import React from "react";\nimport { View, Text } from "react-native";\nimport { DatePickerInput } from \'react-native-paper-dates\';\nimport { SafeAreaProvider } from "react-native-safe-area-context";\n\nexport default function App() {\n  const [inputDate, setInputDate] = React.useState(undefined)\n\n  return (\n    <SafeAreaProvider>\n      <View style={{ justifyContent: \'center\', flex: 1, alignItems: \'center\' }}>\n        <DatePickerInput\n          locale="en"\n          label="Birthdate"\n          value={inputDate}\n          onChange={(d) => setInputDate(d)}\n          inputMode="start"\n        />\n      </View>\n    </SafeAreaProvider>\n  )\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"live-example",children:"Live Example"}),"\n",(0,s.jsxs)(n.p,{children:["View an interactive ",(0,s.jsx)(n.a,{href:"https://snack.expo.dev/@fitzwabs/react-native-paper-dates-input",children:"Expo snack"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"props",children:"Props"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"locale (Required)"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.code,{children:"Type: String"}),(0,s.jsx)(n.br,{}),"\n","A locale can be composed of both a base language, the country (territory) of use, and possibly codeset (which is usually assumed). For example, German is de."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"label (Required)"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.code,{children:"Type: String"}),(0,s.jsx)(n.br,{}),"\n","The label used to display in the component."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"value (Required)"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.code,{children:"Type: Date | undefined"}),(0,s.jsx)(n.br,{}),"\n","The value used to populate the component."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"inputMode (Required)"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.code,{children:"Type: String"}),(0,s.jsx)(n.br,{}),"\n","The type of input needed for the the picker component."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"onChange"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.code,{children:"Type: Function"}),(0,s.jsx)(n.br,{}),"\n","Callback event when the component date mask length matches the text input length."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"onChangeText"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.code,{children:"Type: Function"}),(0,s.jsx)(n.br,{}),"\n","Callback event when the component text input changes."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"mode"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.code,{children:"Type: 'flat' | 'outlined'"}),(0,s.jsx)(n.br,{}),"\n","See ",(0,s.jsx)(n.a,{href:"https://callstack.github.io/react-native-paper/text-input.html#mode",children:"react-native-paper text-input"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"iconSize"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.code,{children:"Type: Number"}),(0,s.jsx)(n.br,{}),"\n","Specifies the size of the icon in pixels."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"iconColor"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.code,{children:"Type: String"}),(0,s.jsx)(n.br,{}),"\n","Sets the color of the icon."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"iconStyle"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.code,{children:"Type: React.CSSProperties"}),(0,s.jsx)(n.br,{}),"\n","Defines the CSS styles for the icon element."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"validRange"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.code,{children:"Type: {   startDate: Date | undefined,   endDate: Date | undefined,   disabledDates: Date[] | undefined }"}),(0,s.jsx)(n.br,{}),"\n","Limits which dates the user can navigate to and where events can go. Dates outside of the valid range will be grayed-out."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"withDateFormatInLabel"}),"\n",(0,s.jsx)(n.code,{children:"Type: boolean | undefined"}),(0,s.jsx)(n.br,{}),"\n","Flag indicating if the date format should be inside the components label."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"hasError"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.code,{children:"Type: boolean | undefined"}),(0,s.jsx)(n.br,{}),"\n","Flag indicating if the the component should display error styles."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"hideValidationErrors"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.code,{children:"Type: boolean | undefined"}),(0,s.jsx)(n.br,{}),"\n","Flag indicating if the the component should hide error styles along with the ",(0,s.jsx)(n.code,{children:"helperText"})," component displaying the error message."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"onValidationError"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.code,{children:"Type: Function | undefined"}),(0,s.jsx)(n.br,{}),"\n","Callback used to return any error messages from the components validation."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"saveLabelDisabled"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.code,{children:"Type: boolean | undefined"}),(0,s.jsx)(n.br,{}),"\n","Flag indicating if the save label should be disabled and unable to receive events. Defaults to ",(0,s.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"uppercase"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.code,{children:"Type: boolean | undefined"}),(0,s.jsx)(n.br,{}),"\n","Flag indicating if the text in the component should be uppercase. Defaults to ",(0,s.jsx)(n.code,{children:"true"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"startYear"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.code,{children:"Type: number | undefined"}),(0,s.jsx)(n.br,{}),"\n","The start year when the component is rendered. Defaults to ",(0,s.jsx)(n.code,{children:"1800"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"endYear"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.code,{children:"Type: number | undefined"}),(0,s.jsx)(n.br,{}),"\n","The end year when the component is rendered. Defaults to ",(0,s.jsx)(n.code,{children:"2200"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"startWeekOnMonday"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.code,{children:"Type: boolean | undefined"}),(0,s.jsx)(n.br,{}),"\n","Flag indicating if calendar grid sould show monday as the first column. Defaults to ",(0,s.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"inputEnabled"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.code,{children:"Type: boolean | undefined"}),(0,s.jsx)(n.br,{}),"\n","Flag indicating if the component should be enabled or not. Behavior similarly to ",(0,s.jsx)(n.code,{children:"disabled"}),". Defaults to ",(0,s.jsx)(n.code,{children:"true"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"disableStatusBarPadding"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.code,{children:"Type: boolean | undefined"}),(0,s.jsx)(n.br,{}),"\n","Flag indicating if the status bar padding should be enabled or not. Defaults to ",(0,s.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"presentationStyle"}),"\n",(0,s.jsx)(n.code,{children:"Type: 'fullScreen' | 'pageSheet' | 'formSheet' | 'overFullScreen'"}),"\nDetermines the visual presentation style of the date picker modal. This prop allows you to define how the modal appears on the screen when it is displayed."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"'fullScreen'"}),": Presents the modal as a full-screen overlay."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"'pageSheet'"}),": Displays the modal as a card-style sheet that covers a portion of the screen."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"'formSheet'"}),": Renders the modal as a smaller form-style sheet."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"'overFullScreen'"}),": Overlays the modal on top of the content, allowing interaction with the underlying content."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"animationType"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.code,{children:"Type: 'slide' | 'fade' | 'none' | undefined"}),(0,s.jsx)(n.br,{}),"\n","The animation used when opening the date picker modal. Defaults to ",(0,s.jsx)(n.code,{children:"'slide'"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["For example, if you set ",(0,s.jsx)(n.code,{children:"presentationStyle"})," to ",(0,s.jsx)(n.code,{children:"'pageSheet'"}),", the modal will be presented as a card-like sheet."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Other ",(0,s.jsx)(n.a,{href:"https://reactnative.dev/docs/textinput#props",children:"react-native TextInput props"}),".*"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>a});var r=t(6540);const s={},i=r.createContext(s);function d(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);