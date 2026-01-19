(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,75254,e=>{"use strict";var t=e.i(71645);let a=e=>{let t=e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,a)=>a?a.toUpperCase():t.toLowerCase());return t.charAt(0).toUpperCase()+t.slice(1)},s=(...e)=>e.filter((e,t,a)=>!!e&&""!==e.trim()&&a.indexOf(e)===t).join(" ").trim();var r={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let i=(0,t.forwardRef)(({color:e="currentColor",size:a=24,strokeWidth:i=2,absoluteStrokeWidth:l,className:n="",children:o,iconNode:c,...d},p)=>(0,t.createElement)("svg",{ref:p,...r,width:a,height:a,stroke:e,strokeWidth:l?24*Number(i)/Number(a):i,className:s("lucide",n),...!o&&!(e=>{for(let t in e)if(t.startsWith("aria-")||"role"===t||"title"===t)return!0})(d)&&{"aria-hidden":"true"},...d},[...c.map(([e,a])=>(0,t.createElement)(e,a)),...Array.isArray(o)?o:[o]])),l=(e,r)=>{let l=(0,t.forwardRef)(({className:l,...n},o)=>(0,t.createElement)(i,{ref:o,iconNode:r,className:s(`lucide-${a(e).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,`lucide-${e}`,l),...n}));return l.displayName=a(e),l};e.s(["default",()=>l],75254)},63488,e=>{"use strict";let t=(0,e.i(75254).default)("mail",[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]]);e.s(["Mail",()=>t],63488)},18566,(e,t,a)=>{t.exports=e.r(76562)},50630,20278,94983,37727,7486,e=>{"use strict";var t=e.i(43476),a=e.i(71645),s=e.i(22016),r=e.i(18566),i=e.i(75254);let l=(0,i.default)("layout-dashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]),n=(0,i.default)("chevron-right",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]),o=(0,i.default)("chevron-down",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]),c=(0,i.default)("chevrons-left",[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]]),d=(0,i.default)("chevrons-right",[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]]);var p=e.i(63488);let m=(0,i.default)("target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);e.s(["Target",()=>m],20278);let h=(0,i.default)("message-circle",[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",key:"1sd12s"}]]);e.s(["MessageCircle",()=>h],94983);let x=(0,i.default)("x",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);e.s(["X",()=>x],37727);let g=(0,i.default)("building-2",[["path",{d:"M10 12h4",key:"a56b0p"}],["path",{d:"M10 8h4",key:"1sr2af"}],["path",{d:"M14 21v-3a2 2 0 0 0-4 0v3",key:"1rgiei"}],["path",{d:"M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2",key:"secmi2"}],["path",{d:"M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16",key:"16ra0t"}]]);e.s(["Building2",()=>g],7486);let u=[{name:"Dashboard",href:"/admin",icon:l},{name:"Hotel Catalogue",href:"/admin/hotel-catalogue",icon:g},{name:"Sales Funnel",href:"/admin/funnel",icon:m},{name:"WhatsApp",href:"/admin/whatsapp",icon:h},{name:"Inquiries",href:"/admin/inquiries",icon:p.Mail}],f=({item:e,isCollapsed:a,pathname:r,onClose:i,expandedMenus:l,toggleMenu:c})=>{let d=e.icon,p=e.children&&e.children.length>0,m=l.includes(e.name),h=r===e.href||"/admin"!==e.href&&r.startsWith(e.href),x=p&&e.children?.some(e=>r.startsWith(e.href));return p?(0,t.jsxs)("div",{className:"relative",children:[(0,t.jsxs)("button",{onClick:()=>c(e.name),title:a?e.name:void 0,className:`w-full flex items-center ${a?"justify-center":"justify-between"} px-4 py-3 rounded-xl transition-all duration-200 group ${h||x?"bg-green-800/20 text-emerald-400":"text-gray-400 hover:text-white"}`,children:[(0,t.jsxs)("div",{className:`flex items-center ${!a&&"gap-3"}`,children:[(0,t.jsx)(d,{className:`w-5 h-5 ${h||x?"text-emerald-400":"text-gray-400 group-hover:text-white"}`}),!a&&(0,t.jsx)("span",{className:"font-medium",children:e.name})]}),!a&&(0,t.jsx)(o,{className:`w-4 h-4 transition-transform ${m?"rotate-180":""}`})]}),a&&m&&(0,t.jsx)("div",{className:"fixed ml-2 z-[100] animate-in fade-in slide-in-from-left-2 duration-200",style:{left:"80px",top:"auto"},children:(0,t.jsxs)("div",{className:"bg-[#1a1c23] border border-gray-700 rounded-xl shadow-2xl py-2 min-w-[180px]",children:[(0,t.jsx)("div",{className:"px-4 py-2 text-xs font-bold text-gray-500 uppercase tracking-wider border-b border-gray-700 mb-1",children:e.name}),e.children?.map(a=>{let l=a.icon,n=r===a.href||r.startsWith(a.href);return(0,t.jsxs)(s.default,{href:a.href,onClick:()=>{c(e.name),window.innerWidth<1024&&i()},className:`flex items-center gap-3 px-4 py-2.5 transition-all duration-200 ${n?"bg-green-800 text-white":"text-gray-400 hover:text-white hover:bg-gray-800"}`,children:[(0,t.jsx)(l,{className:"w-4 h-4"}),(0,t.jsx)("span",{className:"text-sm font-medium",children:a.name})]},a.name)})]})}),!a&&m&&(0,t.jsx)("div",{className:"ml-6 mt-1 space-y-1",children:e.children?.map(e=>{let a=e.icon,l=r===e.href||r.startsWith(e.href);return(0,t.jsxs)(s.default,{href:e.href,onClick:()=>window.innerWidth<1024&&i(),className:`flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-200 ${l?"bg-green-800 text-white shadow-lg shadow-green-500/20":"text-gray-400 hover:text-white hover:bg-gray-800"}`,children:[(0,t.jsx)(a,{className:"w-4 h-4"}),(0,t.jsx)("span",{className:"text-sm",children:e.name})]},e.name)})})]}):(0,t.jsxs)(s.default,{href:e.href,onClick:()=>window.innerWidth<1024&&i(),title:a?e.name:void 0,className:`flex items-center ${a?"justify-center":"justify-between"} px-4 py-3 rounded-xl transition-all duration-200 group ${h?"bg-green-800 text-white shadow-lg shadow-green-500/20":"text-gray-400 hover:text-white"}`,children:[(0,t.jsxs)("div",{className:`flex items-center ${!a&&"gap-3"}`,children:[(0,t.jsx)(d,{className:`w-5 h-5 ${h?"text-white":"text-gray-400 group-hover:text-white"}`}),!a&&(0,t.jsx)("span",{className:"font-medium",children:e.name})]}),!a&&h&&(0,t.jsx)(n,{className:"w-4 h-4 opacity-75"})]})},b=({isCollapsed:e,onClose:a,onToggleCollapse:s,pathname:r,expandedMenus:i,toggleMenu:l})=>(0,t.jsxs)("div",{className:"flex flex-col h-full bg-[#1a1c23] text-white",children:[(0,t.jsxs)("div",{className:`h-20 flex items-center ${e?"justify-center":"px-6"} border-b border-gray-800`,children:[(0,t.jsx)("div",{className:"flex items-center gap-3",children:(0,t.jsx)("div",{className:"w-10 h-10 rounded-xl overflow-hidden flex-shrink-0 group",children:(0,t.jsx)("img",{src:"/logo.png",alt:"Harbigreen",className:"w-full h-full object-contain"})})}),(0,t.jsx)("button",{type:"button",onClick:a,className:"lg:hidden ml-auto p-2 text-gray-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors","aria-label":"Close menu",children:(0,t.jsx)(x,{className:"w-6 h-6"})})]}),(0,t.jsx)("div",{className:"flex-1 py-6 overflow-y-auto custom-scrollbar",children:(0,t.jsx)("nav",{className:`space-y-1 ${e?"px-2":"px-4"}`,children:u.map(s=>(0,t.jsx)(f,{item:s,isCollapsed:e,pathname:r,onClose:a,expandedMenus:i,toggleMenu:l},s.name))})}),(0,t.jsxs)("div",{className:"p-4 border-t border-gray-800 space-y-2",children:[(0,t.jsxs)("button",{type:"button",onClick:a,className:"lg:hidden flex items-center justify-center gap-2 w-full p-3 text-gray-400 hover:text-white rounded-xl hover:bg-white/5 transition-colors group",children:[(0,t.jsx)(c,{className:"w-5 h-5 group-hover:-translate-x-0.5 transition-transform"}),(0,t.jsx)("span",{className:"font-medium",children:"Close Sidebar"})]}),(0,t.jsx)("button",{type:"button",onClick:s,className:"hidden lg:flex items-center justify-center w-full p-2 text-gray-500 hover:text-white rounded-lg transition-colors",title:e?"Expand Sidebar":"Collapse Sidebar",children:e?(0,t.jsx)(d,{className:"w-5 h-5"}):(0,t.jsx)(c,{className:"w-5 h-5"})})]})]});function v({isOpen:e,onClose:s,isCollapsed:i,onToggleCollapse:l}){let n=(0,r.usePathname)(),[o,c]=(0,a.useState)([]),d=e=>{c(t=>t.includes(e)?t.filter(t=>t!==e):[...t,e])};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:"fixed inset-y-0 left-0 z-50 w-72 bg-[#1a1c23] transition-transform duration-300 ease-in-out lg:hidden max-h-screen overflow-hidden",style:{transform:e?"translateX(0)":"translateX(-100%)",visibility:e?"visible":"hidden"},children:(0,t.jsx)(b,{isCollapsed:!1,onClose:s,onToggleCollapse:l,pathname:n,expandedMenus:o,toggleMenu:d})}),(0,t.jsx)("div",{className:`hidden lg:flex lg:flex-col sticky top-0 h-screen z-30 transition-all duration-300 border-r border-gray-800 flex-shrink-0 ${i?"lg:w-20":"lg:w-72"}`,children:(0,t.jsx)(b,{isCollapsed:i,onClose:s,onToggleCollapse:l,pathname:n,expandedMenus:o,toggleMenu:d})})]})}let y=(0,i.default)("menu",[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]]),w=(0,i.default)("log-out",[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]]),j=(0,i.default)("settings",[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);function N({onMenuClick:e}){let[s,i]=(0,a.useState)(!1),l=(0,r.useRouter)(),n=async()=>{try{(await fetch("/api/admin/logout",{method:"POST"})).ok&&(l.push("/admin/login"),l.refresh())}catch(e){console.error("Logout error:",e)}};return(0,t.jsx)("header",{className:"sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-gray-100/50",children:(0,t.jsxs)("div",{className:"flex items-center justify-between h-16 lg:h-20 px-4 sm:px-8 lg:px-12 xl:px-16",children:[(0,t.jsxs)("div",{className:"flex items-center gap-4",children:[(0,t.jsx)("button",{onClick:e,className:"lg:hidden text-gray-700 p-2.5 -ml-2 rounded-xl transition-colors active:bg-gray-100","aria-label":"Open menu",children:(0,t.jsx)(y,{className:"w-6 h-6"})}),(0,t.jsxs)("div",{className:"hidden lg:block",children:[(0,t.jsx)("h2",{className:"text-xl font-bold text-gray-900 leading-tight",children:"Welcome back, Admin! 👋"}),(0,t.jsx)("p",{className:"text-xs text-gray-500 font-medium mt-0.5",children:"Managing Harbigreen Admin Panel"})]}),(0,t.jsx)("div",{className:"lg:hidden",children:(0,t.jsx)("h2",{className:"text-base font-bold text-gray-900",children:"Harbigreen"})})]}),(0,t.jsx)("div",{className:"flex items-center gap-4 ml-auto",children:(0,t.jsxs)("div",{className:"relative",children:[(0,t.jsxs)("button",{onClick:()=>i(!s),className:"flex items-center gap-3 p-1 sm:p-2 rounded-2xl hover:bg-gray-50 transition-all border border-transparent group",children:[(0,t.jsxs)("div",{className:"hidden sm:block text-right mr-1",children:[(0,t.jsx)("p",{className:"font-bold text-gray-900 text-sm leading-tight",children:"Admin User"}),(0,t.jsx)("p",{className:"text-[10px] text-emerald-600 font-black uppercase tracking-widest mt-0.5",children:"Online"})]}),(0,t.jsx)("div",{className:"w-10 h-10 bg-green-800 rounded-xl flex items-center justify-center shadow-lg shadow-green-500/20 group-hover:scale-105 transition-transform",children:(0,t.jsx)("span",{className:"text-white font-bold text-lg",children:"A"})})]}),s&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:"fixed inset-0 z-10",onClick:()=>i(!1)}),(0,t.jsxs)("div",{className:"absolute right-0 z-20 mt-3 w-64 bg-white rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 py-2 overflow-hidden transform origin-top-right transition-all animate-in fade-in zoom-in-95 duration-200",children:[(0,t.jsxs)("div",{className:"px-5 py-4 border-b border-gray-100 bg-gray-50/50",children:[(0,t.jsx)("p",{className:"text-sm font-bold text-gray-900",children:"Admin User"}),(0,t.jsx)("p",{className:"text-xs text-gray-500 mt-1",children:"admin@harbigreen.com"})]}),(0,t.jsxs)("div",{className:"p-2 space-y-1",children:[(0,t.jsxs)("button",{onClick:()=>{window.location.href="/admin/profile",i(!1)},className:"flex items-center w-full px-3 py-2.5 text-sm font-medium text-gray-700 rounded-xl hover:bg-gray-50 transition-colors gap-3 group",children:[(0,t.jsx)("div",{className:"w-8 h-8 rounded-lg bg-gray-100 group-hover:bg-emerald-100 text-gray-400 group-hover:text-emerald-600 flex items-center justify-center transition-colors",children:(0,t.jsx)(j,{className:"w-4 h-4"})}),"Security Settings"]}),(0,t.jsxs)("button",{onClick:n,className:"flex items-center w-full px-3 py-2.5 text-sm font-medium text-red-600 rounded-xl hover:bg-red-50 transition-colors gap-3 group",children:[(0,t.jsx)("div",{className:"w-8 h-8 rounded-lg bg-black text-white flex items-center justify-center transition-colors",children:(0,t.jsx)(w,{className:"w-4 h-4"})}),"Sign out"]})]})]})]})]})})]})})}function k({children:e}){let[s,r]=(0,a.useState)(!1),[i,l]=(0,a.useState)(()=>{try{let e=localStorage.getItem("adminSidebarCollapsed");if(e)return JSON.parse(e)}catch(e){console.error("Error reading from localStorage:",e)}return!1});return(0,t.jsxs)("div",{className:"flex min-h-screen bg-[#f8f9fc]",children:[(0,t.jsx)(v,{isOpen:s,onClose:()=>r(!1),isCollapsed:i,onToggleCollapse:()=>{let e=!i;l(e);try{localStorage.setItem("adminSidebarCollapsed",JSON.stringify(e))}catch(e){console.error("Error saving to localStorage:",e)}}}),(0,t.jsxs)("div",{className:"flex-1 flex flex-col min-w-0 transition-all duration-300",children:[(0,t.jsx)(N,{onMenuClick:()=>r(!s)}),(0,t.jsx)("main",{className:"flex-1 py-6 sm:py-10 px-4 sm:px-8 lg:px-12 xl:px-16 max-w-full overflow-x-hidden",children:(0,t.jsx)("div",{className:"max-w-[1440px] mx-auto w-full",children:e})})]}),s&&(0,t.jsx)("div",{className:"fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden",onClick:()=>r(!1)})]})}e.s(["default",()=>k],50630)},7233,e=>{"use strict";let t=(0,e.i(75254).default)("plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);e.s(["Plus",()=>t],7233)},27612,e=>{"use strict";let t=(0,e.i(75254).default)("trash-2",[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]]);e.s(["Trash2",()=>t],27612)},88844,e=>{"use strict";let t=(0,e.i(75254).default)("package",[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]]);e.s(["Package",()=>t],88844)},55436,e=>{"use strict";let t=(0,e.i(75254).default)("search",[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]]);e.s(["Search",()=>t],55436)},2438,e=>{"use strict";var t=e.i(43476),a=e.i(71645),s=e.i(50630),r=e.i(22016),i=e.i(7233),l=e.i(55436),n=e.i(75254);let o=(0,n.default)("square-pen",[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",key:"ohrbg2"}]]);var c=e.i(27612),d=e.i(7486);let p=(0,n.default)("download",[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]]);var m=e.i(88844);let h=(0,n.default)("eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]),x=[{value:"ALL",label:"All Categories"},{value:"CONSUMABLES",label:"Consumables"},{value:"MOPS_WIPERS",label:"Mops & Wipers"},{value:"BROOMS_DUSTPANS",label:"Brooms, Dustpans & Dustbins"},{value:"HANDLING_EQUIPMENTS",label:"Handling Equipments"},{value:"UTILITIES",label:"Utilities"},{value:"DISPENSORS",label:"Dispensors"},{value:"CARTS_TROLLIES",label:"Carts and Trollies"},{value:"MACHINERIES",label:"Machineries"},{value:"DRY_AMENITY",label:"Dry Amenity"},{value:"WET_AMENITY",label:"Wet Amenity"}],g=e=>e?e.startsWith("/")||e.startsWith("http")?e:`/api/media/${e}`:"/assets/images/product/1000x1000.png";function u(){let[e,n]=(0,a.useState)([]),[u,f]=(0,a.useState)(!0),[b,v]=(0,a.useState)(""),[y,w]=(0,a.useState)("ALL"),[j,N]=(0,a.useState)(!1),[k,S]=(0,a.useState)(!1);(0,a.useEffect)(()=>{C()},[b,y]);let C=async()=>{try{f(!0);let e=new URLSearchParams;b&&e.set("search",b),y&&"ALL"!==y&&e.set("category",y);let t=await fetch(`/api/admin/hotel-catalogue?${e}`),a=await t.json();n(a.amenities||[])}catch(e){console.error("Error fetching amenities:",e)}finally{f(!1)}},M=async e=>{if(confirm("Are you sure you want to delete this amenity?"))try{(await fetch(`/api/admin/hotel-catalogue/${e}`,{method:"DELETE"})).ok?C():alert("Failed to delete amenity")}catch(e){console.error("Error deleting amenity:",e),alert("An error occurred")}},A=async()=>{if(confirm("This will add sample hotel amenities. Continue?"))try{S(!0);let e=await fetch("/api/admin/hotel-catalogue/seed",{method:"POST"}),t=await e.json();e.ok?(alert(`Successfully added ${t.count||"sample"} amenities!`),C()):alert(t.message||t.error||"Failed to seed data")}catch(e){console.error("Error seeding data:",e),alert("Failed to seed data")}finally{S(!1)}},z=async()=>{try{N(!0);let e=await fetch("/api/admin/hotel-catalogue?limit=1000"),t=(await e.json()).amenities||[];t.sort((e,t)=>t.priority-e.priority);let a=$(t),s=window.open("","_blank");s&&(s.document.write(a),s.document.close(),s.onload=()=>{s.print()})}catch(e){console.error("Error generating PDF:",e),alert("Failed to generate PDF")}finally{N(!1)}},$=e=>{let t=e.length,a=e.map((e,t)=>`
            <div class="product-card">
                <div class="product-image-container">
                    <img src="${g(e.image)}" alt="${e.name}" onerror="this.src='/assets/images/product/1000x1000.png'" />
                    <div class="product-badge">${String(t+1).padStart(2,"0")}</div>
                </div>
                <div class="product-details">
                    <h3 class="product-title">${e.name}</h3>
                    <div class="product-price-row">
                        <span class="product-price">₹${e.price.toFixed(2)}</span>
                        <span class="product-unit">per unit</span>
                    </div>
                    <div class="product-specs">
                        <div class="spec-item">
                            <span class="spec-label">MOQ</span>
                            <span class="spec-value">${e.minOrderQty} units</span>
                        </div>
                        ${e.sizes?`
                            <div class="spec-item">
                                <span class="spec-label">Sizes</span>
                                <span class="spec-value">${JSON.parse(e.sizes).join(", ")}</span>
                            </div>
                        `:""}
                        ${e.packing?`
                            <div class="spec-item">
                                <span class="spec-label">Packing</span>
                                <span class="spec-value">${e.packing}</span>
                            </div>
                        `:""}
                        ${e.contents?`
                            <div class="spec-item">
                                <span class="spec-label">Contents</span>
                                <span class="spec-value">${JSON.parse(e.contents).join(", ")}</span>
                            </div>
                        `:""}
                        ${e.material?`
                            <div class="spec-item">
                                <span class="spec-label">Material</span>
                                <span class="spec-value">${e.material}</span>
                            </div>
                        `:""}
                        ${e.color?`
                            <div class="spec-item">
                                <span class="spec-label">Colors</span>
                                <span class="spec-value">${e.color}</span>
                            </div>
                        `:""}
                    </div>
                    ${e.description?`<p class="product-desc">${e.description}</p>`:""}
                </div>
            </div>
        `).join("");return`
            <!DOCTYPE html>
            <html>
            <head>
                <title>Anose Beauty - Hotel Amenities Catalogue ${new Date().getFullYear()}</title>
                <style>
                    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap');
                    
                    :root {
                        --primary: #7c3aed;
                        --primary-light: #a855f7;
                        --primary-dark: #5b21b6;
                        --dark: #1a1c23;
                        --dark-light: #2d2f36;
                        --text: #374151;
                        --text-light: #6b7280;
                        --bg-cream: #faf9f7;
                    }
                    
                    @page { size: A4; margin: 0; }
                    
                    * { margin: 0; padding: 0; box-sizing: border-box; }
                    
                    body {
                        font-family: 'Inter', sans-serif;
                        color: var(--text);
                        background: #fff;
                        line-height: 1.5;
                        -webkit-print-color-adjust: exact;
                        print-color-adjust: exact;
                    }
                    
                    .cover-page {
                        width: 100%;
                        height: 100vh;
                        background: linear-gradient(135deg, var(--dark) 0%, var(--dark-light) 50%, var(--primary-dark) 100%);
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        position: relative;
                        overflow: hidden;
                        page-break-after: always;
                    }
                    
                    .cover-decoration {
                        position: absolute;
                        width: 500px;
                        height: 500px;
                        border: 1px solid rgba(168, 85, 247, 0.2);
                        border-radius: 50%;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                    }
                    
                    .cover-content {
                        position: relative;
                        z-index: 10;
                        text-align: center;
                        padding: 40px;
                    }
                    
                    .cover-logo {
                        width: 120px;
                        height: auto;
                        margin-bottom: 25px;
                        filter: brightness(0) invert(1);
                    }
                    
                    .cover-brand {
                        font-family: 'Playfair Display', serif;
                        font-size: 16px;
                        letter-spacing: 6px;
                        text-transform: uppercase;
                        color: var(--primary-light);
                        margin-bottom: 15px;
                    }
                    
                    .cover-title {
                        font-family: 'Playfair Display', serif;
                        font-size: 60px;
                        font-weight: 400;
                        color: white;
                        line-height: 1.1;
                        margin-bottom: 15px;
                    }
                    
                    .cover-subtitle {
                        font-size: 14px;
                        font-weight: 300;
                        color: rgba(255,255,255,0.7);
                        letter-spacing: 2px;
                        text-transform: uppercase;
                        margin-bottom: 30px;
                    }
                    
                    .cover-stats {
                        display: flex;
                        justify-content: center;
                        gap: 50px;
                        margin-bottom: 40px;
                    }
                    
                    .cover-stat { text-align: center; }
                    
                    .cover-stat-number {
                        font-family: 'Playfair Display', serif;
                        font-size: 42px;
                        color: var(--primary-light);
                        display: block;
                    }
                    
                    .cover-stat-label {
                        font-size: 10px;
                        text-transform: uppercase;
                        letter-spacing: 2px;
                        color: rgba(255,255,255,0.5);
                    }
                    
                    .cover-footer {
                        position: absolute;
                        bottom: 30px;
                        left: 0;
                        right: 0;
                        display: flex;
                        justify-content: center;
                        gap: 30px;
                        color: rgba(255,255,255,0.5);
                        font-size: 11px;
                    }
                    
                    .cover-footer span {
                        display: flex;
                        align-items: center;
                        gap: 6px;
                    }
                    
                    .products-page {
                        padding: 60px 50px;
                        background: var(--bg-cream);
                        min-height: 100vh;
                    }
                    
                    .products-header {
                        text-align: center;
                        margin-bottom: 40px;
                        padding-bottom: 30px;
                        border-bottom: 2px solid var(--primary);
                    }
                    
                    .products-header h2 {
                        font-family: 'Playfair Display', serif;
                        font-size: 36px;
                        color: var(--dark);
                        margin-bottom: 8px;
                    }
                    
                    .products-header p {
                        font-size: 14px;
                        color: var(--text-light);
                    }
                    
                    .products-grid {
                        display: grid;
                        grid-template-columns: repeat(2, 1fr);
                        gap: 25px;
                    }
                    
                    .product-card {
                        background: white;
                        border-radius: 10px;
                        overflow: hidden;
                        box-shadow: 0 3px 15px rgba(0,0,0,0.06);
                        page-break-inside: avoid;
                    }
                    
                    .product-image-container {
                        width: 100%;
                        height: 160px;
                        position: relative;
                        background: #f8f8f8;
                    }
                    
                    .product-image-container img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }
                    
                    .product-badge {
                        position: absolute;
                        top: 10px;
                        left: 10px;
                        width: 30px;
                        height: 30px;
                        background: var(--primary);
                        color: white;
                        border-radius: 50%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-size: 11px;
                        font-weight: 600;
                    }
                    
                    .product-details { padding: 15px; }
                    
                    .product-title {
                        font-family: 'Playfair Display', serif;
                        font-size: 16px;
                        font-weight: 500;
                        color: var(--dark);
                        margin-bottom: 8px;
                    }
                    
                    .product-price-row {
                        display: flex;
                        align-items: baseline;
                        gap: 6px;
                        margin-bottom: 12px;
                        padding-bottom: 12px;
                        border-bottom: 1px solid #eee;
                    }
                    
                    .product-price {
                        font-size: 20px;
                        font-weight: 700;
                        color: var(--primary);
                    }
                    
                    .product-unit {
                        font-size: 11px;
                        color: var(--text-light);
                    }
                    
                    .product-specs {
                        display: grid;
                        grid-template-columns: repeat(2, 1fr);
                        gap: 8px;
                        margin-bottom: 10px;
                    }
                    
                    .spec-item {
                        display: flex;
                        flex-direction: column;
                        gap: 1px;
                    }
                    
                    .spec-label {
                        font-size: 9px;
                        text-transform: uppercase;
                        letter-spacing: 0.5px;
                        color: var(--text-light);
                    }
                    
                    .spec-value {
                        font-size: 11px;
                        font-weight: 500;
                        color: var(--dark);
                    }
                    
                    .product-desc {
                        font-size: 10px;
                        color: var(--text-light);
                        line-height: 1.5;
                        border-top: 1px solid #eee;
                        padding-top: 10px;
                    }
                    
                    .back-cover {
                        width: 100%;
                        height: 100vh;
                        background: var(--dark);
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        text-align: center;
                        padding: 50px;
                        page-break-before: always;
                    }
                    
                    .back-brand {
                        font-family: 'Playfair Display', serif;
                        font-size: 12px;
                        letter-spacing: 5px;
                        text-transform: uppercase;
                        color: var(--primary-light);
                        margin-bottom: 25px;
                    }
                    
                    .back-title {
                        font-family: 'Playfair Display', serif;
                        font-size: 40px;
                        font-weight: 400;
                        color: white;
                        margin-bottom: 15px;
                    }
                    
                    .back-subtitle {
                        font-size: 14px;
                        color: rgba(255,255,255,0.6);
                        margin-bottom: 50px;
                        max-width: 450px;
                    }
                    
                    .contact-grid {
                        display: flex;
                        justify-content: center;
                        gap: 50px;
                        margin-bottom: 50px;
                    }
                    
                    .contact-box { text-align: center; }
                    
                    .contact-icon {
                        width: 50px;
                        height: 50px;
                        background: var(--primary);
                        border-radius: 50%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        margin: 0 auto 15px;
                        font-size: 20px;
                    }
                    
                    .contact-label {
                        font-size: 10px;
                        text-transform: uppercase;
                        letter-spacing: 1px;
                        color: rgba(255,255,255,0.5);
                        margin-bottom: 5px;
                    }
                    
                    .contact-value {
                        font-size: 13px;
                        color: white;
                        font-weight: 500;
                    }
                    
                    .back-cta {
                        display: inline-block;
                        padding: 15px 40px;
                        background: var(--primary);
                        color: white;
                        font-size: 12px;
                        font-weight: 600;
                        text-transform: uppercase;
                        letter-spacing: 1px;
                        border-radius: 40px;
                        margin-bottom: 40px;
                    }
                    
                    .back-terms {
                        font-size: 10px;
                        color: rgba(255,255,255,0.4);
                        line-height: 1.8;
                    }
                    
                    .back-copyright {
                        margin-top: 25px;
                        padding-top: 25px;
                        border-top: 1px solid rgba(255,255,255,0.1);
                        font-size: 11px;
                        color: rgba(255,255,255,0.3);
                    }

                    @media print {
                        .cover-page, .products-page, .back-cover {
                            -webkit-print-color-adjust: exact !important;
                            print-color-adjust: exact !important;
                        }
                    }
                </style>
            </head>
            <body>
                <div class="cover-page">
                    <div class="cover-decoration"></div>
                    <div class="cover-content">
                        <img src="/assets/images/anose-logo.png" alt="Anose Beauty" class="cover-logo" onerror="this.style.display='none'" />
                        <div class="cover-brand">Anose Beauty</div>
                        <h1 class="cover-title">Catalogue</h1>
                        <p class="cover-subtitle">Premium Hotel Amenities</p>
                        <div class="cover-stats">
                            <div class="cover-stat">
                                <span class="cover-stat-number">${t}</span>
                                <span class="cover-stat-label">Products</span>
                            </div>
                            <div class="cover-stat">
                                <span class="cover-stat-number">100+</span>
                                <span class="cover-stat-label">Hotels Served</span>
                            </div>
                            <div class="cover-stat">
                                <span class="cover-stat-number">${new Date().getFullYear()}</span>
                                <span class="cover-stat-label">Edition</span>
                            </div>
                        </div>
                    </div>
                    <div class="cover-footer">
                        <span>📧 wecare@anosebeauty.com</span>
                        <span>📞 +91 9110134408</span>
                        <span>🌐 www.anosebeauty.com</span>
                    </div>
                </div>
                
                <div class="products-page">
                    <div class="products-header">
                        <h2>Our Products</h2>
                        <p>Premium quality hotel amenities for exceptional guest experiences</p>
                    </div>
                    <div class="products-grid">
                        ${a}
                    </div>
                </div>
                
                <div class="back-cover">
                    <div class="back-brand">Anose Beauty</div>
                    <h2 class="back-title">Ready to Order?</h2>
                    <p class="back-subtitle">Contact us today for bulk pricing, customization options, and exclusive partnership opportunities.</p>
                    
                    <div class="contact-grid">
                        <div class="contact-box">
                            <div class="contact-icon">📧</div>
                            <div class="contact-label">Email</div>
                            <div class="contact-value">wecare@anosebeauty.com</div>
                        </div>
                        <div class="contact-box">
                            <div class="contact-icon">📞</div>
                            <div class="contact-label">Phone</div>
                            <div class="contact-value">+91 9110134408</div>
                        </div>
                        <div class="contact-box">
                            <div class="contact-icon">🌐</div>
                            <div class="contact-label">Website</div>
                            <div class="contact-value">www.anosebeauty.com</div>
                        </div>
                    </div>
                    
                    <div class="back-cta">Get Quote Now</div>
                    
                    <div class="back-terms">
                        <p>* Prices are subject to change without prior notice</p>
                        <p>* Minimum order quantities apply</p>
                        <p>* Customization available for orders above 500 units</p>
                    </div>
                    
                    <div class="back-copyright">
                        \xa9 ${new Date().getFullYear()} Anose Beauty. All rights reserved.
                    </div>
                </div>
            </body>
            </html>
        `};return(0,t.jsx)(s.default,{children:(0,t.jsxs)("div",{className:"space-y-6",children:[(0,t.jsxs)("div",{className:"flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4",children:[(0,t.jsxs)("div",{children:[(0,t.jsxs)("h1",{className:"text-3xl font-bold text-gray-900 flex items-center gap-3",children:[(0,t.jsx)(d.Building2,{className:"w-8 h-8 text-purple-600"}),"Hotel Catalogue"]}),(0,t.jsx)("p",{className:"mt-2 text-gray-500",children:"Manage hotel amenities and supplies"})]}),(0,t.jsxs)("div",{className:"flex gap-3",children:[(0,t.jsxs)(r.default,{href:"/catalogue",target:"_blank",className:"flex items-center justify-center gap-2 px-5 py-2.5 bg-white border-2 border-purple-600 text-purple-600 rounded-xl font-medium hover:bg-purple-50 transition-colors",children:[(0,t.jsx)(h,{className:"w-5 h-5"}),"View Catalogue"]}),(0,t.jsxs)("button",{onClick:z,disabled:j||0===e.length,className:"flex items-center justify-center gap-2 px-5 py-2.5 bg-purple-600 text-white rounded-xl font-medium hover:bg-purple-700 transition-colors disabled:opacity-50",children:[(0,t.jsx)(p,{className:"w-5 h-5"}),j?"Generating...":"Download PDF"]}),(0,t.jsxs)(r.default,{href:"/admin/hotel-catalogue/add",className:"flex items-center justify-center gap-2 px-5 py-2.5 bg-black text-white rounded-xl font-medium hover:bg-gray-800 transition-colors",children:[(0,t.jsx)(i.Plus,{className:"w-5 h-5"}),"Add Amenity"]})]})]}),(0,t.jsxs)("div",{className:"flex flex-col sm:flex-row gap-4",children:[(0,t.jsxs)("div",{className:"relative flex-1",children:[(0,t.jsx)(l.Search,{className:"absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"}),(0,t.jsx)("input",{type:"text",placeholder:"Search amenities by name or description...",value:b,onChange:e=>v(e.target.value),className:"w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white shadow-sm transition-all outline-none"})]}),(0,t.jsx)("div",{className:"w-full sm:w-64",children:(0,t.jsx)("select",{value:y,onChange:e=>w(e.target.value),className:"w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white shadow-sm transition-all outline-none cursor-pointer",children:x.map(e=>(0,t.jsx)("option",{value:e.value,children:e.label},e.value))})})]}),(0,t.jsx)("div",{className:"bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden",children:u?(0,t.jsxs)("div",{className:"flex flex-col items-center justify-center py-20",children:[(0,t.jsx)("div",{className:"w-8 h-8 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"}),(0,t.jsx)("p",{className:"text-gray-500 mt-3",children:"Loading amenities..."})]}):0===e.length?(0,t.jsxs)("div",{className:"flex flex-col items-center justify-center py-20",children:[(0,t.jsx)("div",{className:"w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mb-4",children:(0,t.jsx)(m.Package,{className:"w-10 h-10 text-purple-500"})}),(0,t.jsx)("h3",{className:"text-lg font-semibold text-gray-900 mb-2",children:"No amenities found"}),(0,t.jsx)("p",{className:"text-gray-500 mb-6",children:"Get started by adding your first amenity or load sample data"}),(0,t.jsxs)("div",{className:"flex gap-3",children:[(0,t.jsx)("button",{onClick:A,disabled:k,className:"px-5 py-2.5 bg-purple-100 text-purple-700 rounded-xl font-medium hover:bg-purple-200 transition-colors disabled:opacity-50",children:k?"Adding...":"Load Sample Data"}),(0,t.jsx)(r.default,{href:"/admin/hotel-catalogue/add",className:"px-5 py-2.5 bg-black text-white rounded-xl font-medium hover:bg-gray-800 transition-colors",children:"Add Manually"})]})]}):(0,t.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6",children:e.map(e=>{let a;return(0,t.jsxs)("div",{className:"bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all group",children:[(0,t.jsxs)("div",{className:"aspect-square bg-gray-100 relative overflow-hidden",children:[(0,t.jsx)("img",{src:g(e.image),alt:e.name,className:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-300",onError:e=>{e.target.src="/assets/images/product/1000x1000.png"}}),(0,t.jsx)("div",{className:"absolute top-3 left-3",children:(0,t.jsx)("span",{className:`px-3 py-1 text-xs font-semibold rounded-full ${{CONSUMABLES:"bg-green-100 text-green-700",MOPS_WIPERS:"bg-blue-100 text-blue-700",BROOMS_DUSTPANS:"bg-amber-100 text-amber-700",HANDLING_EQUIPMENTS:"bg-purple-100 text-purple-700",UTILITIES:"bg-teal-100 text-teal-700",DISPENSORS:"bg-pink-100 text-pink-700",CARTS_TROLLIES:"bg-orange-100 text-orange-700",MACHINERIES:"bg-indigo-100 text-indigo-700",DRY_AMENITY:"bg-stone-100 text-stone-700",WET_AMENITY:"bg-cyan-100 text-cyan-700"}[e.category]||"bg-gray-100 text-gray-700"}`,children:(a=e.category,x.find(e=>e.value===a)?.label||a)})}),!e.isActive&&(0,t.jsx)("div",{className:"absolute top-3 right-3",children:(0,t.jsx)("span",{className:"px-3 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-700",children:"Inactive"})})]}),(0,t.jsxs)("div",{className:"p-4",children:[(0,t.jsx)("h3",{className:"font-semibold text-gray-900 mb-1 truncate",children:e.name}),(0,t.jsxs)("p",{className:"text-xl font-bold text-purple-600 mb-2",children:["₹",e.price.toFixed(2)]}),(0,t.jsxs)("p",{className:"text-sm text-gray-500 mb-3",children:["Min. Order: ",e.minOrderQty," units"]}),e.sizes&&(0,t.jsxs)("p",{className:"text-xs text-gray-500 mb-1",children:[(0,t.jsx)("span",{className:"font-medium",children:"Sizes:"})," ",JSON.parse(e.sizes).join(", ")]}),e.material&&(0,t.jsxs)("p",{className:"text-xs text-gray-500 mb-1",children:[(0,t.jsx)("span",{className:"font-medium",children:"Material:"})," ",e.material]}),(0,t.jsxs)("div",{className:"flex gap-2 mt-4 pt-4 border-t border-gray-100",children:[(0,t.jsxs)(r.default,{href:`/admin/hotel-catalogue/${e.id}/edit`,className:"flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-black text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors",children:[(0,t.jsx)(o,{className:"w-4 h-4"}),"Edit"]}),(0,t.jsx)("button",{onClick:()=>M(e.id),className:"flex items-center justify-center px-3 py-2 bg-red-50 text-red-600 rounded-lg text-sm font-medium hover:bg-red-100 transition-colors",children:(0,t.jsx)(c.Trash2,{className:"w-4 h-4"})})]})]})]},e.id)})})})]})})}e.s(["default",()=>u],2438)}]);