import{u as tl,a as u,c as w,r as h,o as Ee,b as o,d as s,e as d,f as me,n as x,w as al,t as $,F as f,g as I,h as r,i as b,j as he,k as ol,l as ul,m as sl,q as Ve,Z as il,D as nl,p as je,s as rl,Q as Re,v as U,x as vl,y as cl,H as S,z as K,A as dl,B as F,C as te,E as ae,J as hl,G as ce,I as yl,K as fl,R as T,L as X,M as m,T as de,N as He,O as pl,P as gl,X as bl,S as ml,V as wl,U as xl,W as kl,Y as $l}from"./index-C4AKVw_k.js";import{u as Cl,$ as _l,r as Pl,S as zl,x as Fl,a as Ll,C as Sl,R as Tl,O as Il,k as Yl}from"./Legend-BorSDXCj-BkxGKX2N.js";import{s as qe,p as Nl,C as Al,E as Xl}from"./Tooltip-qod9o4Vz-BP7tfvn1.js";import{c as We}from"./useNestedProp-BxrcwmTZ-BajGsoxe.js";const Ol={class:"vue-ui-data-table"},Bl={style:{display:"flex","align-items":"center","justify-content":"flex-end","padding-right":"3px",gap:"3px"}},Dl={key:0,height:"12",width:"12",viewBox:"0 0 20 20",style:{background:"none"}},Gl=["fill"],Ml=["data-cell"],Vl={dir:"auto",style:{display:"flex","align-items":"center",gap:"5px","justify-content":"flex-end",width:"100%","padding-right":"3px"}},jl={key:0,height:"12",width:"12",viewBox:"0 0 20 20",style:{background:"none",overflow:"visible"}},Rl={__name:"DataTable",props:{colNames:{type:Array,default(){return[]}},head:Array,body:Array,title:String,config:Object},emits:["close"],setup(C,{emit:ye}){const J=C;tl(V=>({"72ac81a5":u(ue)}));const{backgroundColor:_,color:oe,outline:G}=J.config.th,{backgroundColor:M,color:fe,outline:ue}=J.config.td,Z=w(()=>J.config.breakpoint),Q=h(null),se=h(!1);return Ee(()=>{const V=new ResizeObserver(B=>{B.forEach(Y=>{se.value=Y.contentRect.width<Z.value})});Q.value&&V.observe(Q.value)}),(V,B)=>(o(),s("div",{ref_key:"tableContainer",ref:Q,style:{width:"100%","container-type":"inline-size",position:"relative","padding-top":"36px",overflow:"auto"},class:he({"vue-ui-responsive":se.value})},[d("div",{"data-html2canvas-ignore":"",role:"button",tabindex:"0",style:x(`width:32px; position: absolute; top: 0; right:4px; padding: 0 0px; display: flex; align-items:center;justify-content:center;height: 36px; width: 32px; cursor:pointer; background:${u(_)};`),onClick:B[0]||(B[0]=Y=>ye("close")),onKeypress:B[1]||(B[1]=al(Y=>ye("close"),["enter"]))},[me(Cl,{name:"close",stroke:u(oe),"stroke-width":2},null,8,["stroke"])],36),d("table",Ol,[d("caption",{style:x({backgroundColor:u(_),color:u(oe),outline:u(G)}),class:"vue-ui-data-table__caption"},$(C.title),5),d("thead",null,[d("tr",{role:"row",style:x([{"font-variant-numeric":"tabular-nums"},{backgroundColor:u(_),color:u(oe)}]),class:"vue-ui-data-table__thead-row"},[(o(!0),s(f,null,I(C.head,(Y,W)=>(o(),s("th",{role:"cell",style:x({outline:u(G)}),key:`th_${W}`},[d("div",Bl,[Y.color?(o(),s("svg",Dl,[d("circle",{cx:"10",cy:"10",r:"10",fill:Y.color},null,8,Gl)])):r("",!0),b(V.$slots,"th",{th:Y},void 0,!0)])],4))),128))],4)]),d("tbody",null,[(o(!0),s(f,null,I(C.body,(Y,W)=>(o(),s("tr",{role:"row",style:x([{"font-variant-numeric":"tabular-nums"},{backgroundColor:u(M),color:u(fe)}]),class:he({"vue-ui-data-table__tbody__row":!0,"vue-ui-data-table__tbody__row-even":W%2===0,"vue-ui-data-table__tbody__row-odd":W%2!==0})},[(o(!0),s(f,null,I(Y,(y,ee)=>(o(),s("td",{role:"cell","data-cell":(C.colNames[ee]&&C.colNames[ee].name?C.colNames[ee].name:"")||C.colNames[ee]||"",style:x({outline:u(ue)}),class:"vue-ui-data-table__tbody__td"},[d("div",Vl,[y.color?(o(),s("svg",jl,[me(_l,{plot:{x:10,y:10},color:y.color,radius:9,shape:C.config.shape||y.shape||"circle"},null,8,["color","shape"])])):r("",!0),b(V.$slots,"td",{td:y},void 0,!0)])],12,Ml))),256))],6))),256))])])],2))}},Hl=qe(Rl,[["__scopeId","data-v-5cbf64d8"]]),Wl=C=>(kl("data-v-897a9187"),C=C(),$l(),C),El=["id"],ql=["xmlns","viewBox"],Ul={key:0},Kl=["id"],Jl=["stop-color"],Zl=["offset","stop-color"],Ql=["offset","stop-color"],et=["stop-color"],lt={key:1},tt=["id","cx","cy"],at=["stop-color","stop-opacity"],ot=["stop-color"],ut=["id"],st=["id"],it=Wl(()=>d("feColorMatrix",{type:"saturate",values:"0"},null,-1)),nt=["id"],rt=["flood-color"],vt=["id"],ct=["flood-color"],dt=["d","stroke","filter"],ht=["x1","y1","x2","y2","stroke","filter"],yt=["cx","cy","r","fill","filter"],ft=["stroke","d"],pt=["d","fill","stroke","stroke-width","filter"],gt={key:0},bt=["stroke","d"],mt={key:0},wt=["d","stroke","stroke-width","filter"],xt=["d","fill","stroke","stroke-width","filter"],kt={key:1},$t=["cx","cy","r","fill","stroke","stroke-width"],Ct=["cx","cy","r","stroke"],_t=["cx","cy","r","fill"],Pt={key:0},zt=["d","fill","onMouseenter","onClick"],Ft={key:1},Lt=["cx","cy","r","fill"],St=["x","y","fill","font-size"],Tt=["x","y","fill","font-size"],It=["x","y","fill","font-size"],Yt=["x","y","fill","font-size"],Nt=["filter"],At={key:0},Xt=["x","y"],Ot={key:1},Bt=["cx","cy","fill","stroke","filter","onClick"],Dt=["cx","cy","fill","stroke","filter","onClick"],Gt=["text-anchor","x","y","fill","font-size","onClick"],Mt=["text-anchor","x","y","fill","font-size","onClick"],Vt=["text-anchor","x","y","fill","font-size","onClick"],jt=["text-anchor","x","y","fill","font-size","onClick"],Rt={key:2},Ht=["x","y","width"],Wt=["x","y","width"],Et={key:5,class:"vue-data-ui-watermark"},qt=["onClick"],Ut={key:0,style:{"font-variant-numeric":"tabular-nums"}},Kt={key:1},Jt=["innerHTML"],Zt={__name:"vue-ui-donut",props:{config:{type:Object,default(){return{}}},dataset:{type:Array,default(){return[]}}},emits:["selectLegend","selectDatapoint"],setup(C,{expose:ye,emit:J}){const _=C,{vue_ui_donut:oe}=ol(),G=w({get(){return!!_.dataset&&_.dataset.length},set(t){return t}}),M=h(null),fe=h(null),ue=h(null),Z=h(null),Q=h(null),se=h(null),V=h(0),B=h(0),Y=h(0);Ee(()=>{W()}),ul(()=>{Z.value&&Z.value.disconnect()});function W(){if(sl(_.dataset)?Ve({componentName:"VueUiDonut",type:"dataset"}):_.dataset.forEach((t,n)=>{il({datasetObject:t,requiredAttributes:["name","values"]}).forEach(l=>{G.value=!1,Ve({componentName:"VueUiDonut",type:"datasetSerieAttribute",property:l,index:n})})}),e.value.responsive){const t=Il(()=>{const{width:n,height:l}=Yl({chart:M.value,title:e.value.style.chart.title.text?fe.value:null,legend:e.value.style.chart.legend.show?ue.value:null,source:Q.value,noTitle:se.value});i.value.width=n,i.value.height=l});Z.value=new ResizeObserver(t),Z.value.observe(M.value.parentNode)}}const y=h(nl()),ee=h(null),pe=h(!1),we=h(""),L=h(null),Ce=h(0);function _e(){const t=We({userConfig:_.config,defaultConfig:oe});return t.theme?{...We({userConfig:pl.vue_ui_donut[t.theme]||_.config,defaultConfig:t}),customPalette:gl[t.theme]||U}:t}const e=w({get:()=>_e(),set:t=>t});je(()=>_.config,t=>{e.value=_e(),W(),V.value+=1,B.value+=1,Y.value+=1},{deep:!0});const{isPrinting:Pe,isImaging:ze,generatePdf:Fe,generateImage:Le}=Pl({elementId:`donut__${y.value}`,fileName:e.value.style.chart.title.text||"vue-ui-donut"}),Ue=w(()=>e.value.userOptions.show&&!e.value.style.chart.title.text),Se=w(()=>rl(e.value.customPalette)),p=h({dataLabels:{show:e.value.style.chart.layout.labels.dataLabels.show},showTable:e.value.table.show,showTooltip:e.value.style.chart.tooltip.show}),i=h({height:360,width:512}),ie=w(()=>{const t=e.value.style.chart.layout.donut.strokeWidth/512,n=i.value.width*t,l=n>P.value?P.value:n;return l<24?24:l}),E=w(()=>_.dataset.map((t,n)=>({name:t.name,color:Re(t.color)||Se.value[n]||U[n]||U[n%U.length],value:t.values.reduce((l,a)=>l+a,0),absoluteValues:t.values,comment:t.comment||""}))),N=h(E.value);je(()=>E.value,t=>N.value=t);function Ke(){return E.value.map(t=>({name:t.name,color:t.color,value:t.value}))}const O=h([]),Te=h(null),Ie=h(null),q=h(!1);function Ye(t){const n=E.value.find((a,v)=>v===t);let l=N.value.find((a,v)=>v===t).value;if(O.value.includes(t)){let a=function(){l>v?(cancelAnimationFrame(Te.value),N.value=N.value.map((k,D)=>t===D?{...k,value:v}:k),q.value=!1):(q.value=!0,l+=v*.025,N.value=N.value.map((k,D)=>t===D?{...k,value:l}:k),Te.value=requestAnimationFrame(a))};O.value=O.value.filter(k=>k!==t);const v=n.value;a()}else if(O.value.length<E.value.length-1){let a=function(){l<.1?(cancelAnimationFrame(Ie.value),O.value.push(t),N.value=N.value.map((v,k)=>t===k?{...v,value:0}:v),q.value=!1):(q.value=!0,l/=1.1,N.value=N.value.map((v,k)=>t===k?{...v,value:l}:v),Ie.value=requestAnimationFrame(a))};a()}J("selectLegend",j.value.map(a=>({name:a.name,color:a.color,value:a.value})))}const j=w(()=>(N.value.forEach((t,n)=>{if([null,void 0].includes(t.values))return{...t,values:[]}}),N.value.map((t,n)=>({...t,seriesIndex:n})).filter((t,n)=>!O.value.includes(n)))),Ne=w(()=>_.dataset.map((t,n)=>({name:t.name,color:Re(t.color)||Se.value[n]||U[n]||U[n%U.length],value:(t.values||[]).reduce((l,a)=>l+a,0),shape:"circle"})).map((t,n)=>({...t,proportion:t.value/_.dataset.map(l=>(l.values||[]).reduce((a,v)=>a+v,0)).reduce((l,a)=>l+a,0),opacity:O.value.includes(n)?.5:1,segregate:()=>Ye(n),isSegregated:O.value.includes(n)}))),Je=w(()=>({cy:"donut-div-legend",backgroundColor:e.value.style.chart.legend.backgroundColor,color:e.value.style.chart.legend.color,fontSize:e.value.style.chart.legend.fontSize,paddingBottom:12,fontWeight:e.value.style.chart.legend.bold?"bold":""})),P=w(()=>{const t=Math.min(i.value.width/3,i.value.height/3);return t<55?55:t}),g=w(()=>vl({series:j.value},i.value.width/2,i.value.height/2,P.value,P.value,1.99999,2,1,360,105.25,ie.value)),c=w(()=>{const t=Math.max(...j.value.map(l=>l.value)),n=j.value.map(l=>l.value/t);return cl({series:n,center:{x:i.value.width/2,y:i.value.height/2},maxRadius:Math.min(i.value.width,i.value.height)/3})});function le(t){return t.x>i.value.width/2+6?"start":t.x<i.value.width/2-6?"end":"middle"}function Ze(t){return t.middlePoint.y>i.value.height/2?T({initX:t.middlePoint.x,initY:t.middlePoint.y,offset:100,centerX:i.value.width/2,centerY:i.value.height/2}).y:T({initX:t.middlePoint.x,initY:t.middlePoint.y,offset:0,centerX:i.value.width/2,centerY:i.value.height/2}).y-100}function A(t){return t.proportion*100>e.value.style.chart.layout.labels.dataLabels.hideUnderValue}function xe(t,n){const l=t.value/Qe(n);return isNaN(l)?0:X(e.value.style.chart.layout.labels.percentage.formatter,l*100,S({v:l*100,s:"%",r:e.value.style.chart.layout.labels.percentage.rounding}),{datapoint:t})}function Qe(t){return[...t].map(n=>n.value).reduce((n,l)=>n+l,0)}const z=w(()=>j.value.map(t=>t.value).reduce((t,n)=>t+n,0)),Ae=w(()=>z.value/j.value.length),ke=h(null),ne=h(!1);function Xe({datapoint:t,relativeIndex:n,seriesIndex:l,show:a=!1}){ke.value={datapoint:t,seriesIndex:l,config:e.value,series:E.value},pe.value=a,L.value=n;let v="";const k=e.value.style.chart.tooltip.customFormat;if(ne.value=!1,bl(k))try{const D=k({seriesIndex:l,datapoint:t,series:E.value,config:e.value});typeof D=="string"&&(we.value=D,ne.value=!0)}catch{console.warn("Custom format cannot be applied."),ne.value=!1}if(!ne.value){if(v+=`<div style="width:100%;text-align:center;border-bottom:1px solid ${e.value.style.chart.tooltip.borderColor};padding-bottom:6px;margin-bottom:3px;">${t.name}</div>`,v+=`<div style="display:flex;flex-direction:row;gap:6px;align-items:center;"><svg viewBox="0 0 12 12" height="14" width="14"><circle cx="6" cy="6" r="6" stroke="none" fill="${t.color}"/></svg>`,e.value.style.chart.tooltip.showValue&&(v+=`<b>${X(e.value.style.chart.layout.labels.value.formatter,t.value,S({p:e.value.style.chart.layout.labels.dataLabels.prefix,v:t.value,s:e.value.style.chart.layout.labels.dataLabels.suffix,r:e.value.style.chart.tooltip.roundingValue}),{datapoint:t,relativeIndex:n,seriesIndex:l})}</b>`),e.value.style.chart.tooltip.showPercentage){const D=X(e.value.style.chart.layout.labels.percentage.formatter,t.proportion*100,S({v:t.proportion*100,s:"%",r:e.value.style.chart.tooltip.roundingPercentage}),{datapoint:t,relativeIndex:n,seriesIndex:l});e.value.style.chart.tooltip.showValue?v+=`<span>(${D})</span></div>`:v+=`<b>${D}</b></div>`}e.value.style.chart.comments.showInTooltip&&t.comment&&(v+=`<div class="vue-data-ui-tooltip-comment" style="background:${t.color}20; padding: 6px; margin-bottom: 6px; margin-top:6px; border-left: 1px solid ${t.color}">${t.comment}</div>`),we.value=`<div>${v}</div>`}}function re(t){return e.value.useBlurOnHover&&![null,void 0].includes(L.value)&&L.value!==t?`url(#blur_${y.value})`:""}const R=w(()=>{const t=j.value.map(l=>({name:l.name,color:l.color})),n=j.value.map(l=>l.value);return{head:t,body:n}});function Oe(){ml(()=>{const t=R.value.head.map((a,v)=>[[a.name],[R.value.body[v]],[isNaN(R.value.body[v]/z.value)?"-":R.value.body[v]/z.value*100]]),n=[[e.value.style.chart.title.text],[e.value.style.chart.title.subtitle.text],[[""],["val"],["%"]]].concat(t),l=wl(n);xl({csvContent:l,title:e.value.style.chart.title.text||"vue-ui-donut"})})}const ge=w(()=>{const t=[' <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 16v2a1 1 0 0 1 -1 1h-11l6 -7l-6 -7h11a1 1 0 0 1 1 1v2" /></svg>',S({p:e.value.style.chart.layout.labels.dataLabels.prefix,v:z.value,s:e.value.style.chart.layout.labels.dataLabels.suffix,r:e.value.table.td.roundingValue}),"100%"],n=R.value.head.map((a,v)=>{const k=S({p:e.value.style.chart.layout.labels.dataLabels.prefix,v:R.value.body[v],s:e.value.style.chart.layout.labels.dataLabels.suffix,r:e.value.table.td.roundingValue});return[{color:a.color,name:a.name},k,isNaN(R.value.body[v]/z.value)?"-":(R.value.body[v]/z.value*100).toFixed(e.value.table.td.roundingPercentage)+"%"]}),l={th:{backgroundColor:e.value.table.th.backgroundColor,color:e.value.table.th.color,outline:e.value.table.th.outline},td:{backgroundColor:e.value.table.td.backgroundColor,color:e.value.table.td.color,outline:e.value.table.td.outline},breakpoint:e.value.table.responsiveBreakpoint};return{colNames:[e.value.table.columnNames.series,e.value.table.columnNames.value,e.value.table.columnNames.percentage],head:t,body:n,config:l}}),ve=h(!1);function el(t){ve.value=t,Ce.value+=1}const Be=w(()=>/^((?!chrome|android).)*safari/i.test(navigator.userAgent));function ll(t){return t.toFixed(e.value.style.chart.legend.roundingPercentage).split("").map(n=>"-").join("")}function H(t,n){J("selectDatapoint",{datapoint:t,index:n})}function De(){p.value.showTable=!p.value.showTable}function Ge(){p.value.dataLabels.show=!p.value.dataLabels.show}function Me(){p.value.showTooltip=!p.value.showTooltip}const be=h(!1);function $e(){be.value=!be.value}return ye({getData:Ke,generatePdf:Fe,generateCsv:Oe,generateImage:Le,toggleTable:De,toggleLabels:Ge,toggleTooltip:Me,toggleAnnotator:$e}),(t,n)=>(o(),s("div",{ref_key:"donutChart",ref:M,class:he(`vue-ui-donut ${ve.value?"vue-data-ui-wrapper-fullscreen":""} ${e.value.useCssAnimation?"":"vue-ui-dna"}`),style:x(`font-family:${e.value.style.fontFamily};width:100%; ${e.value.responsive?"height:100%;":""} text-align:center;background:${e.value.style.chart.backgroundColor}`),id:`donut__${y.value}`},[e.value.userOptions.buttons.annotator?(o(),K(zl,{key:0,parent:M.value,backgroundColor:e.value.style.chart.backgroundColor,color:e.value.style.chart.color,active:be.value,onClose:$e},null,8,["parent","backgroundColor","color","active"])):r("",!0),b(t.$slots,"userConfig",{},void 0,!0),Ue.value?(o(),s("div",{key:1,ref_key:"noTitle",ref:se,class:"vue-data-ui-no-title-space",style:"height:36px; width: 100%;background:transparent"},null,512)):r("",!0),e.value.style.chart.title.text?(o(),s("div",{key:2,ref_key:"chartTitle",ref:fe,style:"width:100%;background:transparent;padding-bottom:24px"},[(o(),K(Fl,{key:`title_${V.value}`,config:{title:{cy:"donut-div-title",...e.value.style.chart.title},subtitle:{cy:"donut-div-subtitle",...e.value.style.chart.title.subtitle}}},null,8,["config"]))],512)):r("",!0),e.value.userOptions.show&&G.value?(o(),K(Ll,{ref_key:"details",ref:ee,key:`user_option_${Ce.value}`,backgroundColor:e.value.style.chart.backgroundColor,color:e.value.style.chart.color,isPrinting:u(Pe),isImaging:u(ze),uid:y.value,hasTooltip:e.value.style.chart.tooltip.show&&e.value.userOptions.buttons.tooltip,hasPdf:e.value.userOptions.buttons.pdf,hasImg:e.value.userOptions.buttons.img,hasXls:e.value.userOptions.buttons.csv,hasTable:e.value.userOptions.buttons.table,hasLabel:e.value.userOptions.buttons.labels,hasFullscreen:e.value.userOptions.buttons.fullscreen,isFullscreen:ve.value,chartElement:M.value,position:e.value.userOptions.position,isTooltip:p.value.showTooltip,titles:{...e.value.userOptions.buttonTitles},hasAnnotator:e.value.userOptions.buttons.annotator,isAnnotation:be.value,onToggleFullscreen:el,onGeneratePdf:u(Fe),onGenerateCsv:Oe,onGenerateImage:u(Le),onToggleTable:De,onToggleLabels:Ge,onToggleTooltip:Me,onToggleAnnotator:$e},dl({_:2},[t.$slots.optionTooltip?{name:"optionTooltip",fn:F(()=>[b(t.$slots,"optionTooltip",{},void 0,!0)]),key:"0"}:void 0,t.$slots.optionPdf?{name:"optionPdf",fn:F(()=>[b(t.$slots,"optionPdf",{},void 0,!0)]),key:"1"}:void 0,t.$slots.optionCsv?{name:"optionCsv",fn:F(()=>[b(t.$slots,"optionCsv",{},void 0,!0)]),key:"2"}:void 0,t.$slots.optionImg?{name:"optionImg",fn:F(()=>[b(t.$slots,"optionImg",{},void 0,!0)]),key:"3"}:void 0,t.$slots.optionTable?{name:"optionTable",fn:F(()=>[b(t.$slots,"optionTable",{},void 0,!0)]),key:"4"}:void 0,t.$slots.optionLabels?{name:"optionLabels",fn:F(()=>[b(t.$slots,"optionLabels",{},void 0,!0)]),key:"5"}:void 0,t.$slots.optionFullscreen?{name:"optionFullscreen",fn:F(({toggleFullscreen:l,isFullscreen:a})=>[b(t.$slots,"optionFullscreen",te(ae({toggleFullscreen:l,isFullscreen:a})),void 0,!0)]),key:"6"}:void 0,t.$slots.optionAnnotator?{name:"optionAnnotator",fn:F(({toggleAnnotator:l,isAnnotator:a})=>[b(t.$slots,"optionAnnotator",te(ae({toggleAnnotator:l,isAnnotator:a})),void 0,!0)]),key:"7"}:void 0]),1032,["backgroundColor","color","isPrinting","isImaging","uid","hasTooltip","hasPdf","hasImg","hasXls","hasTable","hasLabel","hasFullscreen","isFullscreen","chartElement","position","isTooltip","titles","hasAnnotator","isAnnotation","onGeneratePdf","onGenerateImage"])):r("",!0),G.value?(o(),s("svg",{key:4,xmlns:u(hl),class:he({"vue-data-ui-fullscreen--on":ve.value,"vue-data-ui-fulscreen--off":!ve.value}),viewBox:`0 0 ${i.value.width<=0?10:i.value.width} ${i.value.height<=0?10:i.value.height}`,style:x(`max-width:100%; overflow: visible; background:transparent;color:${e.value.style.chart.color}`)},[me(Nl),e.value.type==="classic"?(o(),s("defs",Ul,[e.value.style.chart.useGradient?(o(),s("radialGradient",{key:0,id:`gradient_${y.value}`},[d("stop",{offset:"0%","stop-color":u(ce)(e.value.style.chart.backgroundColor,0),"stop-opacity":"0"},null,8,Jl),d("stop",{offset:`${(1-ie.value/P.value)*100}%`,"stop-color":u(ce)("#FFFFFF",0),"stop-opacity":"0"},null,8,Zl),d("stop",{offset:`${(1-ie.value/P.value/2)*100}%`,"stop-color":u(ce)("#FFFFFF",e.value.style.chart.gradientIntensity)},null,8,Ql),d("stop",{offset:"100%","stop-color":u(ce)(e.value.style.chart.backgroundColor,0),"stop-opacity":"0"},null,8,et)],8,Kl)):r("",!0)])):r("",!0),e.value.type==="polar"?(o(),s("defs",lt,[(o(!0),s(f,null,I(c.value,(l,a)=>(o(),s("radialGradient",{id:`polar_gradient_${a}_${y.value}`,cx:l.middlePoint.x/i.value.width*100+"%",cy:l.middlePoint.y/i.value.height*100+"%",r:"62%"},[d("stop",{offset:"0%","stop-color":u(yl)(g.value[a].color,.05),"stop-opacity":e.value.style.chart.gradientIntensity/100},null,8,at),d("stop",{offset:"100%","stop-color":g.value[a].color},null,8,ot)],8,tt))),256))])):r("",!0),d("defs",null,[d("filter",{id:`blur_${y.value}`,x:"-50%",y:"-50%",width:"200%",height:"200%"},[d("feGaussianBlur",{in:"SourceGraphic",stdDeviation:2,id:`blur_std_${y.value}`},null,8,st),it],8,ut),d("filter",{id:`shadow_${y.value}`,"color-interpolation-filters":"sRGB"},[d("feDropShadow",{dx:"0",dy:"0",stdDeviation:"10","flood-opacity":"0.5","flood-color":e.value.style.chart.layout.donut.shadowColor},null,8,rt)],8,nt),d("filter",{id:`drop_shadow_${y.value}`,"color-interpolation-filters":"sRGB",x:"-50%",y:"-50%",width:"200%",height:"200%"},[d("feDropShadow",{dx:"0",dy:"0",stdDeviation:"3","flood-opacity":"1","flood-color":e.value.style.chart.layout.donut.shadowColor},null,8,ct)],8,vt)]),e.value.type==="classic"?(o(!0),s(f,{key:2},I(g.value,(l,a)=>(o(),s("g",null,[A(l)&&p.value.dataLabels.show?(o(),s("path",{key:0,d:u(fl)(l,{x:i.value.width/2,y:i.value.height/2},16,16,!1,!1,ie.value),stroke:l.color,"stroke-width":"1","stroke-linecap":"round","stroke-linejoin":"round",fill:"none",filter:re(a)},null,8,dt)):r("",!0)]))),256)):r("",!0),e.value.type==="polar"?(o(!0),s(f,{key:3},I(g.value,(l,a)=>(o(),s("g",null,[A(l)&&p.value.dataLabels.show?(o(),s("line",{key:0,x1:u(T)({initX:c.value[a].middlePoint.x,initY:c.value[a].middlePoint.y,offset:24,centerX:i.value.width/2,centerY:i.value.height/2}).x,y1:u(T)({initX:c.value[a].middlePoint.x,initY:c.value[a].middlePoint.y,offset:24,centerX:i.value.width/2,centerY:i.value.height/2}).y,x2:c.value[a].middlePoint.x,y2:c.value[a].middlePoint.y,stroke:l.color,"stroke-width":"1","stroke-linecap":"round","stroke-linejoin":"round",fill:"none",filter:re(a)},null,8,ht)):r("",!0)]))),256)):r("",!0),e.value.type==="classic"?(o(),s("circle",{key:4,cx:i.value.width/2,cy:i.value.height/2,r:P.value<=0?10:P.value,fill:e.value.style.chart.backgroundColor,filter:e.value.style.chart.layout.donut.useShadow?`url(#shadow_${y.value})`:""},null,8,yt)):r("",!0),z.value&&e.value.type==="classic"?(o(),s(f,{key:5},[(o(!0),s(f,null,I(g.value,(l,a)=>(o(),s("path",{stroke:e.value.style.chart.backgroundColor,d:l.arcSlice,fill:"#FFFFFF"},null,8,ft))),256)),(o(!0),s(f,null,I(g.value,(l,a)=>(o(),s("path",{class:"vue-ui-donut-arc-path",d:l.arcSlice,fill:u(ce)(l.color,80),stroke:e.value.style.chart.backgroundColor,"stroke-width":e.value.style.chart.layout.donut.borderWidth,filter:re(a)},null,8,pt))),256))],64)):r("",!0),z.value&&e.value.type==="polar"?(o(),s(f,{key:6},[g.value.length>1?(o(),s("g",gt,[(o(!0),s(f,null,I(g.value,(l,a)=>(o(),s("path",{stroke:e.value.style.chart.backgroundColor,d:c.value[a].path,fill:"#FFFFFF"},null,8,bt))),256)),e.value.style.chart.layout.donut.useShadow?(o(),s("g",mt,[(o(!0),s(f,null,I(g.value,(l,a)=>(o(),s("path",{class:"vue-ui-donut-arc-path",d:c.value[a].path,fill:"transparent",stroke:e.value.style.chart.backgroundColor,"stroke-width":e.value.style.chart.layout.donut.borderWidth,filter:`url(#drop_shadow_${y.value})`},null,8,wt))),256))])):r("",!0),(o(!0),s(f,null,I(g.value,(l,a)=>(o(),s("path",{class:"vue-ui-donut-arc-path",d:c.value[a].path,fill:e.value.style.chart.useGradient?`url(#polar_gradient_${a}_${y.value})`:l.color,stroke:e.value.style.chart.backgroundColor,"stroke-width":e.value.style.chart.layout.donut.borderWidth,filter:re(a)},null,8,xt))),256))])):(o(),s("g",kt,[d("circle",{cx:i.value.width/2,cy:i.value.height/2,r:P.value,fill:e.value.style.chart.useGradient?`url(#polar_gradient_0_${y.value})`:g.value[0].color,stroke:e.value.style.chart.backgroundColor,"stroke-width":e.value.style.chart.layout.donut.borderWidth},null,8,$t)]))],64)):(o(),s("circle",{key:7,cx:i.value.width/2,cy:i.value.height/2,r:P.value<=0?10:P.value,fill:"transparent",stroke:e.value.style.chart.backgroundColor},null,8,Ct)),e.value.style.chart.useGradient&&e.value.type==="classic"?(o(),s("circle",{key:8,cx:i.value.width/2,cy:i.value.height/2,r:P.value<=0?10:P.value,fill:`url(#gradient_${y.value})`},null,8,_t)):r("",!0),z.value?(o(),s(f,{key:9},[g.value.length>1||e.value.type==="classic"?(o(),s("g",Pt,[(o(!0),s(f,null,I(g.value,(l,a)=>(o(),s("path",{"data-cy-donut-trap":"",d:e.value.type==="classic"?l.arcSlice:c.value[a].path,fill:L.value===a?"rgba(0,0,0,0.1)":"transparent",onMouseenter:v=>Xe({datapoint:l,relativeIndex:a,seriesIndex:l.seriesIndex,show:!0}),onMouseleave:n[0]||(n[0]=v=>{pe.value=!1,L.value=null}),onClick:v=>H(l,a)},null,40,zt))),256))])):(o(),s("g",Ft,[d("circle",{cx:i.value.width/2,cy:i.value.height/2,r:P.value,fill:L.value===t.i?"rgba(0,0,0,0.1)":"transparent","data-cy-donut-trap":"",onMouseenter:n[1]||(n[1]=l=>Xe({datapoint:g.value[0],relativeIndex:0,seriesIndex:g.value[0].seriesIndex,show:!0})),onMouseleave:n[2]||(n[2]=l=>{pe.value=!1,L.value=null}),onClick:n[3]||(n[3]=l=>H(g.value[0],t.i))},null,40,Lt)]))],64)):r("",!0),e.value.type==="classic"?(o(),s(f,{key:10},[e.value.style.chart.layout.labels.hollow.total.show?(o(),s("text",{key:0,"text-anchor":"middle",x:i.value.width/2,y:i.value.height/2-(e.value.style.chart.layout.labels.hollow.average.show?e.value.style.chart.layout.labels.hollow.total.fontSize:0)+e.value.style.chart.layout.labels.hollow.total.offsetY,fill:e.value.style.chart.layout.labels.hollow.total.color,"font-size":e.value.style.chart.layout.labels.hollow.total.fontSize,style:x(`font-weight:${e.value.style.chart.layout.labels.hollow.total.bold?"bold":""}`)},$(e.value.style.chart.layout.labels.hollow.total.text),13,St)):r("",!0),e.value.style.chart.layout.labels.hollow.total.show?(o(),s("text",{key:1,"text-anchor":"middle",x:i.value.width/2,y:i.value.height/2+e.value.style.chart.layout.labels.hollow.total.fontSize-(e.value.style.chart.layout.labels.hollow.average.show?e.value.style.chart.layout.labels.hollow.total.fontSize:0)+e.value.style.chart.layout.labels.hollow.total.value.offsetY,fill:e.value.style.chart.layout.labels.hollow.total.value.color,"font-size":e.value.style.chart.layout.labels.hollow.total.value.fontSize,style:x(`font-weight:${e.value.style.chart.layout.labels.hollow.total.value.bold?"bold":""}`)},$(u(X)(e.value.style.chart.layout.labels.hollow.total.value.formatter,z.value,u(S)({p:e.value.style.chart.layout.labels.hollow.total.value.prefix,v:z.value,s:e.value.style.chart.layout.labels.hollow.total.value.suffix}))),13,Tt)):r("",!0),e.value.style.chart.layout.labels.hollow.average.show?(o(),s("text",{key:2,"text-anchor":"middle",x:i.value.width/2,y:i.value.height/2+(e.value.style.chart.layout.labels.hollow.total.show?e.value.style.chart.layout.labels.hollow.average.fontSize:0)+e.value.style.chart.layout.labels.hollow.average.offsetY,fill:e.value.style.chart.layout.labels.hollow.average.color,"font-size":e.value.style.chart.layout.labels.hollow.average.fontSize,style:x(`font-weight:${e.value.style.chart.layout.labels.hollow.average.bold?"bold":""}`)},$(e.value.style.chart.layout.labels.hollow.average.text),13,It)):r("",!0),e.value.style.chart.layout.labels.hollow.average.show?(o(),s("text",{key:3,"text-anchor":"middle",x:i.value.width/2,y:i.value.height/2+(e.value.style.chart.layout.labels.hollow.total.show?e.value.style.chart.layout.labels.hollow.average.fontSize:0)+e.value.style.chart.layout.labels.hollow.average.fontSize+e.value.style.chart.layout.labels.hollow.average.value.offsetY,fill:e.value.style.chart.layout.labels.hollow.average.value.color,"font-size":e.value.style.chart.layout.labels.hollow.average.value.fontSize,style:x(`font-weight:${e.value.style.chart.layout.labels.hollow.average.value.bold?"bold":""}`)},$(q.value?"--":u(X)(e.value.style.chart.layout.labels.hollow.average.value.formatter,Ae.value,u(S)({p:e.value.style.chart.layout.labels.hollow.average.value.prefix,v:Ae.value,s:e.value.style.chart.layout.labels.hollow.average.value.suffix,r:e.value.style.chart.layout.labels.hollow.average.value.rounding}))),13,Yt)):r("",!0)],64)):r("",!0),(o(!0),s(f,null,I(g.value,(l,a)=>(o(),s("g",{filter:re(a),class:he({animated:e.value.useCssAnimation})},[e.value.style.chart.layout.labels.dataLabels.useLabelSlots?(o(),s("g",At,[(o(),s("foreignObject",{x:u(m)(l,!0).anchor==="end"?u(m)(l).x-120:u(m)(l,!0).anchor==="middle"?u(m)(l).x-60:u(m)(l).x,y:u(de)(l)-(Be.value?20:0),width:"120",height:"60",style:{overflow:"visible"}},[d("div",null,[b(t.$slots,"dataLabel",te(ae({datapoint:l,isBlur:!e.value.useBlurOnHover||[null,void 0].includes(L.value)||L.value===a,isSafari:Be.value,isVisible:A(l)&&p.value.dataLabels.show,textAlign:u(m)(l,!0,16,!0).anchor,flexAlign:u(m)(l,!0,16).anchor,percentage:xe(l,g.value)})),void 0,!0)])],8,Xt))])):(o(),s("g",Ot,[e.value.type==="classic"?(o(),s(f,{key:0},[A(l)&&p.value.dataLabels.show?(o(),s("circle",{key:0,cx:u(m)(l).x,cy:u(de)(l)-3.5,fill:l.color,stroke:e.value.style.chart.backgroundColor,"stroke-width":1,r:3,filter:!e.value.useBlurOnHover||[null,void 0].includes(L.value)||L.value===a?"":`url(#blur_${y.value})`,onClick:v=>H(l,a)},null,8,Bt)):r("",!0)],64)):r("",!0),e.value.type==="polar"?(o(),s(f,{key:1},[A(l)&&p.value.dataLabels.show?(o(),s("circle",{key:0,cx:u(T)({initX:c.value[a].middlePoint.x,initY:c.value[a].middlePoint.y,offset:24,centerX:i.value.width/2,centerY:i.value.height/2}).x,cy:u(T)({initX:c.value[a].middlePoint.x,initY:c.value[a].middlePoint.y,offset:24,centerX:i.value.width/2,centerY:i.value.height/2}).y,fill:l.color,stroke:e.value.style.chart.backgroundColor,"stroke-width":1,r:3,filter:!e.value.useBlurOnHover||[null,void 0].includes(L.value)||L.value===a?"":`url(#blur_${y.value})`,onClick:v=>H(l,a)},null,8,Dt)):r("",!0)],64)):r("",!0),e.value.type==="classic"?(o(),s(f,{key:2},[A(l)&&p.value.dataLabels.show?(o(),s("text",{key:0,"text-anchor":u(m)(l,!0,12).anchor,x:u(m)(l,!0,12).x,y:u(de)(l),fill:e.value.style.chart.layout.labels.percentage.color,"font-size":e.value.style.chart.layout.labels.percentage.fontSize,style:x(`font-weight:${e.value.style.chart.layout.labels.percentage.bold?"bold":""}`),onClick:v=>H(l,a)},$(xe(l,g.value))+" "+$(e.value.style.chart.layout.labels.value.show?`(${u(X)(e.value.style.chart.layout.labels.value.formatter,l.value,u(S)({p:e.value.style.chart.layout.labels.dataLabels.prefix,v:l.value,s:e.value.style.chart.layout.labels.dataLabels.suffix,r:e.value.style.chart.layout.labels.value.rounding}),{datapoint:l})})`:""),13,Gt)):r("",!0),A(l)&&p.value.dataLabels.show?(o(),s("text",{key:1,"text-anchor":u(m)(l).anchor,x:u(m)(l,!0,12).x,y:u(de)(l)+e.value.style.chart.layout.labels.percentage.fontSize,fill:e.value.style.chart.layout.labels.name.color,"font-size":e.value.style.chart.layout.labels.name.fontSize,style:x(`font-weight:${e.value.style.chart.layout.labels.name.bold?"bold":""}`),onClick:v=>H(l,a)},$(l.name),13,Mt)):r("",!0)],64)):r("",!0),e.value.type==="polar"?(o(),s(f,{key:3},[A(l)&&p.value.dataLabels.show?(o(),s("text",{key:0,"text-anchor":le(c.value[a].middlePoint),x:u(T)({initX:c.value[a].middlePoint.x,initY:c.value[a].middlePoint.y,offset:42,centerX:i.value.width/2,centerY:i.value.height/2}).x,y:u(T)({initX:c.value[a].middlePoint.x,initY:c.value[a].middlePoint.y,offset:42,centerX:i.value.width/2,centerY:i.value.height/2}).y,fill:e.value.style.chart.layout.labels.percentage.color,"font-size":e.value.style.chart.layout.labels.percentage.fontSize,style:x(`font-weight:${e.value.style.chart.layout.labels.percentage.bold?"bold":""}`),onClick:v=>H(l,a)},$(xe(l,g.value))+" "+$(e.value.style.chart.layout.labels.value.show?`(${u(X)(e.value.style.chart.layout.labels.value.formatter,l.value,u(S)({p:e.value.style.chart.layout.labels.dataLabels.prefix,v:l.value,s:e.value.style.chart.layout.labels.dataLabels.suffix,r:e.value.style.chart.layout.labels.value.rounding}),{datapoint:l})})`:""),13,Vt)):r("",!0),A(l)&&p.value.dataLabels.show?(o(),s("text",{key:1,"text-anchor":le(c.value[a].middlePoint),x:u(T)({initX:c.value[a].middlePoint.x,initY:c.value[a].middlePoint.y,offset:42,centerX:i.value.width/2,centerY:i.value.height/2}).x,y:u(T)({initX:c.value[a].middlePoint.x,initY:c.value[a].middlePoint.y,offset:42,centerX:i.value.width/2,centerY:i.value.height/2}).y+e.value.style.chart.layout.labels.percentage.fontSize,fill:e.value.style.chart.layout.labels.name.color,"font-size":e.value.style.chart.layout.labels.name.fontSize,style:x(`font-weight:${e.value.style.chart.layout.labels.name.bold?"bold":""}`),onClick:v=>H(l,a)},$(l.name),13,jt)):r("",!0)],64)):r("",!0)])),p.value.dataLabels.show&&e.value.style.chart.comments.show&&l.comment?(o(),s("g",Rt,[A(l)&&e.value.type==="classic"?(o(),s("foreignObject",{key:0,x:e.value.style.chart.comments.offsetX+(u(m)(l,!0).anchor==="end"?u(m)(l).x-e.value.style.chart.comments.width:u(m)(l,!0).anchor==="middle"?u(m)(l).x-e.value.style.chart.comments.width/2:u(m)(l).x),y:u(de)(l)+24+e.value.style.chart.comments.offsetY,width:e.value.style.chart.comments.width,height:"200",style:{overflow:"visible","pointer-events":"none"}},[d("div",null,[b(t.$slots,"plot-comment",{plot:{...l,textAlign:u(m)(l,!0,16,!0).anchor,flexAlign:u(m)(l,!0,16).anchor}},void 0,!0)])],8,Ht)):r("",!0),A(l)&&e.value.type==="polar"?(o(),s("foreignObject",{key:1,x:e.value.style.chart.comments.offsetX+(le(c.value[a].middlePoint)==="end"?u(T)({initX:c.value[a].middlePoint.x,initY:c.value[a].middlePoint.y,offset:42,centerX:i.value.width/2,centerY:i.value.height/2}).x-e.value.style.chart.comments.width:le(c.value[a].middlePoint)==="middle"?u(T)({initX:c.value[a].middlePoint.x,initY:c.value[a].middlePoint.y,offset:42,centerX:i.value.width/2,centerY:i.value.height/2}).x-e.value.style.chart.comments.width/2:u(T)({initX:c.value[a].middlePoint.x,initY:c.value[a].middlePoint.y,offset:42,centerX:i.value.width/2,centerY:i.value.height/2}).x),y:Ze(c.value[a])+e.value.style.chart.comments.offsetY,width:e.value.style.chart.comments.width,height:"200",style:{overflow:"visible","pointer-events":"none"}},[d("div",null,[b(t.$slots,"plot-comment",{plot:{...l,textAlign:le(c.value[a].middlePoint),flexAlign:le(c.value[a].middlePoint)}},void 0,!0)])],8,Wt)):r("",!0)])):r("",!0)],10,Nt))),256)),b(t.$slots,"svg",{svg:i.value},void 0,!0)],14,ql)):r("",!0),t.$slots.watermark?(o(),s("div",Et,[b(t.$slots,"watermark",te(ae({isPrinting:u(Pe)||u(ze)})),void 0,!0)])):r("",!0),G.value?r("",!0):(o(),K(Al,{key:6,config:{type:"donut",style:{backgroundColor:e.value.style.chart.backgroundColor,donut:{color:"#CCCCCC",strokeWidth:ie.value*.8}}}},null,8,["config"])),d("div",{ref_key:"chartLegend",ref:ue},[e.value.style.chart.legend.show?(o(),K(Sl,{key:`legend_${Y.value}`,legendSet:Ne.value,config:Je.value,onClickMarker:n[4]||(n[4]=({i:l})=>Ye(l))},{item:F(({legend:l,index:a})=>[d("div",{onClick:v=>l.segregate(),style:x(`opacity:${O.value.includes(a)?.5:1}`)},[He($(l.name)+": "+$(u(X)(e.value.style.chart.layout.labels.value.formatter,l.value,u(S)({p:e.value.style.chart.layout.labels.dataLabels.prefix,v:l.value,s:e.value.style.chart.layout.labels.dataLabels.suffix,r:e.value.style.chart.legend.roundingValue}),{datapoint:l,index:a}))+" ",1),O.value.includes(a)?(o(),s("span",Kt," ( "+$(ll(l.proportion*100))+" % ) ",1)):(o(),s("span",Ut," ("+$(isNaN(l.value/z.value)?"-":u(X)(e.value.style.chart.layout.labels.percentage.formatter,q.value?l.proportion*100:l.value/z.value*100,u(S)({v:q.value?l.proportion*100:l.value/z.value*100,s:"%",r:e.value.style.chart.legend.roundingPercentage})))+") ",1))],12,qt)]),_:1},8,["legendSet","config"])):r("",!0),b(t.$slots,"legend",{legend:Ne.value},void 0,!0)],512),t.$slots.source?(o(),s("div",{key:7,ref_key:"source",ref:Q,dir:"auto"},[b(t.$slots,"source",{},void 0,!0)],512)):r("",!0),me(Xl,{show:p.value.showTooltip&&pe.value,backgroundColor:e.value.style.chart.tooltip.backgroundColor,color:e.value.style.chart.tooltip.color,fontSize:e.value.style.chart.tooltip.fontSize,borderRadius:e.value.style.chart.tooltip.borderRadius,borderColor:e.value.style.chart.tooltip.borderColor,borderWidth:e.value.style.chart.tooltip.borderWidth,backgroundOpacity:e.value.style.chart.tooltip.backgroundOpacity,position:e.value.style.chart.tooltip.position,offsetY:e.value.style.chart.tooltip.offsetY,parent:M.value,content:we.value,isCustom:ne.value},{"tooltip-before":F(()=>[b(t.$slots,"tooltip-before",te(ae({...ke.value})),void 0,!0)]),"tooltip-after":F(()=>[b(t.$slots,"tooltip-after",te(ae({...ke.value})),void 0,!0)]),_:3},8,["show","backgroundColor","color","fontSize","borderRadius","borderColor","borderWidth","backgroundOpacity","position","offsetY","parent","content","isCustom"]),G.value?(o(),K(Tl,{key:8,hideDetails:"",config:{open:p.value.showTable,maxHeight:1e4,body:{backgroundColor:e.value.style.chart.backgroundColor,color:e.value.style.chart.color},head:{backgroundColor:e.value.style.chart.backgroundColor,color:e.value.style.chart.color}}},{content:F(()=>[(o(),K(Hl,{key:`table_${B.value}`,colNames:ge.value.colNames,head:ge.value.head,body:ge.value.body,config:ge.value.config,title:`${e.value.style.chart.title.text}${e.value.style.chart.title.subtitle.text?` : ${e.value.style.chart.title.subtitle.text}`:""}`,onClose:n[5]||(n[5]=l=>p.value.showTable=!1)},{th:F(({th:l})=>[d("div",{innerHTML:l,style:{display:"flex","align-items":"center"}},null,8,Jt)]),td:F(({td:l})=>[He($(l.name?l.name:isNaN(Number(l))?l.includes("%")?l:u(X)(e.value.style.chart.layout.labels.percentage.formatter,l,u(S)({v:l,s:"%",r:e.value.style.chart.layout.labels.percentage.rounding})):u(X)(e.value.style.chart.layout.labels.value.formatter,l,u(S)({p:e.value.style.chart.layout.labels.dataLabels.prefix,v:l,s:e.value.style.chart.layout.labels.dataLabels.suffix,r:e.value.style.chart.layout.labels.value.rounding}))),1)]),_:1},8,["colNames","head","body","config","title"]))]),_:1},8,["config"])):r("",!0)],14,El))}},aa=qe(Zt,[["__scopeId","data-v-897a9187"]]);export{aa as default};
