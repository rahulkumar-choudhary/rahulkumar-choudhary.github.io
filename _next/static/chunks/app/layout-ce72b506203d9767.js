(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{3039:function(e,t,n){Promise.resolve().then(n.t.bind(n,4418,23)),Promise.resolve().then(n.t.bind(n,3517,23)),Promise.resolve().then(n.bind(n,4195)),Promise.resolve().then(n.bind(n,8113)),Promise.resolve().then(n.t.bind(n,1400,23)),Promise.resolve().then(n.t.bind(n,6874,23))},4195:function(e,t,n){"use strict";n.d(t,{GamingLayout:function(){return r}});var a=n(5559),o=n(4561),c=n(263);function r(e){let{children:t,className:n}=e;return(0,a.jsxs)("div",{className:(0,o.cn)("min-h-screen bg-background font-mono relative","before:content-[''] before:fixed before:inset-0 before:bg-grid-pattern before:opacity-10 before:pointer-events-none before:z-0",n),children:[(0,a.jsx)("div",{className:"fixed inset-0 pointer-events-none animate-scanline opacity-10 z-50"}),(0,a.jsx)(c.E.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},className:"relative z-10",children:(0,a.jsxs)("div",{className:"container max-w-5xl mx-auto px-6 py-12 min-h-screen flex flex-col",children:[(0,a.jsxs)("header",{className:"text-center mb-16",children:[(0,a.jsx)("h1",{className:"text-4xl md:text-5xl font-pixel text-glow-lg animate-glow mb-4",children:"Rahulkumar Choudhary"}),(0,a.jsx)("p",{className:"text-muted-foreground animate-pulse text-lg",children:"DevOps Engineer \uD83D\uDC0B and Cloud Computing Enthusiast ☁️"})]}),(0,a.jsx)("main",{className:"retro-container flex-grow mx-auto w-full",children:(0,a.jsx)("div",{className:"max-w-4xl mx-auto",children:t})}),(0,a.jsx)("footer",{className:"mt-12 text-center text-sm text-muted-foreground",children:(0,a.jsx)("p",{className:"animate-pixel-shift",children:"\xa9 2024 Rahulkumar Choudhary • All rights reserved"})})]})})]})}},8113:function(e,t,n){"use strict";n.d(t,{ThemeProvider:function(){return b}});var a=n(5559),o=n(6763),c=["light","dark"],r="(prefers-color-scheme: dark)",s="undefined"==typeof window,l=o.createContext(void 0),i=e=>o.useContext(l)?e.children:o.createElement(d,{...e}),m=["light","dark"],d=e=>{let{forcedTheme:t,disableTransitionOnChange:n=!1,enableSystem:a=!0,enableColorScheme:s=!0,storageKey:i="theme",themes:d=m,defaultTheme:b=a?"system":"light",attribute:y="data-theme",value:x,children:g,nonce:p}=e,[_,w]=o.useState(()=>h(i,b)),[S,k]=o.useState(()=>h(i)),C=x?Object.values(x):d,N=o.useCallback(e=>{let t=e;if(!t)return;"system"===e&&a&&(t=v());let o=x?x[t]:t,r=n?f():null,l=document.documentElement;if("class"===y?(l.classList.remove(...C),o&&l.classList.add(o)):o?l.setAttribute(y,o):l.removeAttribute(y),s){let e=c.includes(b)?b:null,n=c.includes(t)?t:e;l.style.colorScheme=n}null==r||r()},[]),E=o.useCallback(e=>{let t="function"==typeof e?e(e):e;w(t);try{localStorage.setItem(i,t)}catch(e){}},[t]),T=o.useCallback(e=>{k(v(e)),"system"===_&&a&&!t&&N("system")},[_,t]);o.useEffect(()=>{let e=window.matchMedia(r);return e.addListener(T),T(e),()=>e.removeListener(T)},[T]),o.useEffect(()=>{let e=e=>{e.key===i&&E(e.newValue||b)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[E]),o.useEffect(()=>{N(null!=t?t:_)},[t,_]);let j=o.useMemo(()=>({theme:_,setTheme:E,forcedTheme:t,resolvedTheme:"system"===_?S:_,themes:a?[...d,"system"]:d,systemTheme:a?S:void 0}),[_,E,t,S,a,d]);return o.createElement(l.Provider,{value:j},o.createElement(u,{forcedTheme:t,disableTransitionOnChange:n,enableSystem:a,enableColorScheme:s,storageKey:i,themes:d,defaultTheme:b,attribute:y,value:x,children:g,attrs:C,nonce:p}),g)},u=o.memo(e=>{let{forcedTheme:t,storageKey:n,attribute:a,enableSystem:s,enableColorScheme:l,defaultTheme:i,value:m,attrs:d,nonce:u}=e,h="system"===i,f="class"===a?"var d=document.documentElement,c=d.classList;".concat("c.remove(".concat(d.map(e=>"'".concat(e,"'")).join(","),")"),";"):"var d=document.documentElement,n='".concat(a,"',s='setAttribute';"),v=l?(c.includes(i)?i:null)?"if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'".concat(i,"'"):"if(e==='light'||e==='dark')d.style.colorScheme=e":"",b=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=!(arguments.length>2)||void 0===arguments[2]||arguments[2],o=m?m[e]:e,r=t?e+"|| ''":"'".concat(o,"'"),s="";return l&&n&&!t&&c.includes(e)&&(s+="d.style.colorScheme = '".concat(e,"';")),"class"===a?t||o?s+="c.add(".concat(r,")"):s+="null":o&&(s+="d[s](n,".concat(r,")")),s},y=t?"!function(){".concat(f).concat(b(t),"}()"):s?"!function(){try{".concat(f,"var e=localStorage.getItem('").concat(n,"');if('system'===e||(!e&&").concat(h,")){var t='").concat(r,"',m=window.matchMedia(t);if(m.media!==t||m.matches){").concat(b("dark"),"}else{").concat(b("light"),"}}else if(e){").concat(m?"var x=".concat(JSON.stringify(m),";"):"").concat(b(m?"x[e]":"e",!0),"}").concat(h?"":"else{"+b(i,!1,!1)+"}").concat(v,"}catch(e){}}()"):"!function(){try{".concat(f,"var e=localStorage.getItem('").concat(n,"');if(e){").concat(m?"var x=".concat(JSON.stringify(m),";"):"").concat(b(m?"x[e]":"e",!0),"}else{").concat(b(i,!1,!1),";}").concat(v,"}catch(t){}}();");return o.createElement("script",{nonce:u,dangerouslySetInnerHTML:{__html:y}})}),h=(e,t)=>{let n;if(!s){try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t}},f=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},v=e=>(e||(e=window.matchMedia(r)),e.matches?"dark":"light");function b(e){let{children:t,...n}=e;return(0,a.jsx)(i,{...n,children:t})}},4561:function(e,t,n){"use strict";n.d(t,{cn:function(){return c}});var a=n(2142),o=n(770);function c(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,o.m6)((0,a.W)(t))}},6874:function(){},1400:function(){},3517:function(e){e.exports={style:{fontFamily:"'__Manrope_1b340f', '__Manrope_Fallback_1b340f'",fontStyle:"normal"},className:"__className_1b340f",variable:"__variable_1b340f"}},4418:function(e){e.exports={style:{fontFamily:"'__Poppins_1fa6f9', '__Poppins_Fallback_1fa6f9'",fontStyle:"normal"},className:"__className_1fa6f9",variable:"__variable_1fa6f9"}}},function(e){e.O(0,[941,996,263,595,192,221,744],function(){return e(e.s=3039)}),_N_E=e.O()}]);