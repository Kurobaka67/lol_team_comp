var K=Object.defineProperty;var O=(v,a,s)=>a in v?K(v,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):v[a]=s;var B=(v,a,s)=>O(v,typeof a!="symbol"?a+"":a,s);import{a as $,b as M,C as Q}from"./ChampionDetail-BENuArFZ.js";import{r as c,o as T,j as d,c as r,a as o,t as D,F as f,h as S,g as w,k as b,_ as U}from"./index-DN3tPcEb.js";const I=class I{_getAllCompo(){return I._compo==null?fetch("data/team_comp.json").then(a=>a.json()).then(a=>(I._compo=a,[...I._compo])):new Promise(a=>{a([...I._compo])})}getCompositions(){return this._getAllCompo()}getChampionsTopByCompo(a){return this._getAllCompo().then(s=>{const p=s.filter(m=>m.name==a);return new $().getChampionsById(p[0].top)})}getChampionsJungleByCompo(a){return this._getAllCompo().then(s=>{const p=s.filter(m=>m.name==a);return new $().getChampionsById(p[0].jungle)})}getChampionsMidByCompo(a){return this._getAllCompo().then(s=>{const p=s.filter(m=>m.name==a);return new $().getChampionsById(p[0].mid)})}getChampionsAdcByCompo(a){return this._getAllCompo().then(s=>{const p=s.filter(m=>m.name==a);return new $().getChampionsById(p[0].adc)})}getChampionsSupportByCompo(a){return this._getAllCompo().then(s=>{const p=s.filter(m=>m.name==a);return new $().getChampionsById(p[0].support)})}};B(I,"_compo",null);let E=I;class X{constructor(){B(this,"ruleSet",new Map);B(this,"results",[])}addRule(a,s){this.ruleSet.set(a,s)}evalRules(a){this.results=[];for(const[s,p]of this.ruleSet)s(a)&&this.results.push({rule:s,result:p});return this.results}}const Z={class:"d-flex flex-row"},ee={class:"d-flex flex-column-reverse justify-content-end",style:{"padding-left":"40px"}},ne={class:"form-check form-check-inline"},le=["name","onClick"],oe={class:"form-check-label",for:"hardcc"},se={class:"d-flex flex-column-reverse justify-content-end",style:{"padding-left":"40px"}},ae={class:"form-check form-check-inline"},te=["name","onClick"],ce={class:"form-check-label",for:"hardcc"},ie={class:"d-flex flex-column-reverse justify-content-end",style:{"padding-left":"40px"}},ue={class:"form-check form-check-inline"},de=["name","onClick"],re={class:"form-check-label",for:"hardcc"},pe={class:"d-flex flex-column-reverse justify-content-end",style:{"padding-left":"40px"}},me={class:"form-check form-check-inline"},he=["name","onClick"],ge={class:"form-check-label",for:"hardcc"},ve={class:"d-flex flex-column-reverse justify-content-end",style:{"padding-left":"40px"}},Ce={class:"form-check form-check-inline"},fe=["name","onClick"],_e={class:"form-check-label",for:"hardcc"},ke={class:"d-flex flex-row"},ye={class:"d-flex flex-column",style:{color:"red"}},xe={style:{"font-size":"20px"}},Ae={class:"d-flex flex-column",style:{color:"red"}},Se={key:0,style:{"font-size":"20px"}},we={class:"d-flex flex-column",style:{color:"red"}},Ie={key:0,style:{"font-size":"20px"}},Re={class:"d-flex flex-column",style:{color:"red"}},Le={key:0,style:{"font-size":"20px"}},Pe={__name:"TeamAnalysis",props:["compo"],emits:["showDetail"],setup(v,{emit:a}){const s=v,p=c(null),C=c(null),h=c(null),m=c(null),j=c(null),_=c(null),k=c(null),y=c(null),x=c(null),A=c(null),z=c([]);c(!1),c(!1),c(!1),c(!1),c(!1),c(!1),c(!1),c(!1);const Y=c(!1),G=c(!1),H=c(!1),L=new E,J=a;let g=new X;g.addRule(e=>{var n,l,t,i,u;return!((n=e.top)!=null&&n.damage.includes("MAGICAL"))&&!((l=e.jungle)!=null&&l.damage.includes("MAGICAL"))&&!((t=e.mid)!=null&&t.damage.includes("MAGICAL"))&&!((i=e.adc)!=null&&i.damage.includes("MAGICAL"))&&!((u=e.support)!=null&&u.damage.includes("MAGICAL"))},"Pas assez de dégats magiques"),g.addRule(e=>{var n,l,t,i,u;return!((n=e.top)!=null&&n.damage.includes("PHYSICAL"))&&!((l=e.jungle)!=null&&l.damage.includes("PHYSICAL"))&&!((t=e.mid)!=null&&t.damage.includes("PHYSICAL"))&&!((i=e.adc)!=null&&i.damage.includes("PHYSICAL"))&&!((u=e.support)!=null&&u.damage.includes("PHYSICAL"))},"Pas assez de dégats physiques"),g.addRule(e=>{var n,l,t,i,u;return!((n=e.top)!=null&&n.game.includes("EARLY"))&&!((l=e.jungle)!=null&&l.game.includes("EARLY"))&&!((t=e.mid)!=null&&t.game.includes("EARLY"))&&!((i=e.adc)!=null&&i.game.includes("EARLY"))&&!((u=e.support)!=null&&u.game.includes("EARLY"))},"Pas assez d'early game"),g.addRule(e=>{var n,l,t,i,u;return!((n=e.top)!=null&&n.game.includes("MID"))&&!((l=e.jungle)!=null&&l.game.includes("MID"))&&!((t=e.mid)!=null&&t.game.includes("MID"))&&!((i=e.adc)!=null&&i.game.includes("MID"))&&!((u=e.support)!=null&&u.game.includes("MID"))},"Pas assez de mid game"),g.addRule(e=>{var n=0;return _.value.game.includes("LATE")||n++,k.value.game.includes("LATE")||n++,y.value.game.includes("LATE")||n++,x.value.game.includes("LATE")||n++,A.value.game.includes("LATE")||n++,n>3},"Pas assez de late game"),g.addRule(e=>{var n=0;return _.value.hardCC||n++,k.value.hardCC||n++,y.value.hardCC||n++,x.value.hardCC||n++,A.value.hardCC||n++,n>2},"Pas assez de CC"),g.addRule(e=>{var n=0;return _.value.hardEngage||n++,k.value.hardEngage||n++,y.value.hardEngage||n++,x.value.hardEngage||n++,A.value.hardEngage||n++,n>3},"Pas assez d'engage"),g.addRule(e=>{var n,l,t,i,u;return!((n=e.top)!=null&&n.disengage)&&!((l=e.jungle)!=null&&l.disengage)&&!((t=e.mid)!=null&&t.disengage)&&!((i=e.adc)!=null&&i.disengage)&&!((u=e.support)!=null&&u.disengage)},"Pas assez de disengage"),g.addRule(e=>{var n,l,t,i,u;return!((n=e.top)!=null&&n.poke)&&!((l=e.jungle)!=null&&l.poke)&&!((t=e.mid)!=null&&t.poke)&&!((i=e.adc)!=null&&i.poke)&&!((u=e.support)!=null&&u.poke)},"Pas assez de poke"),g.addRule(e=>{var n,l,t,i,u;return!((n=e.top)!=null&&n.waveclear)&&!((l=e.jungle)!=null&&l.waveclear)&&!((t=e.mid)!=null&&t.waveclear)&&!((i=e.adc)!=null&&i.waveclear)&&!((u=e.support)!=null&&u.waveclear)},"Pas assez de wave clear"),g.addRule(e=>{var n=0;return _.value.tank||n++,k.value.tank||n++,y.value.tank||n++,x.value.tank||n++,A.value.tank||n++,n>3},"Pas assez de tank"),T(()=>{L.getChampionsTopByCompo(s.compo).then(e=>{p.value=e,_.value=e[e.length-1]}),L.getChampionsJungleByCompo(s.compo).then(e=>{C.value=e,k.value=e[e.length-1]}),L.getChampionsMidByCompo(s.compo).then(e=>{h.value=e,y.value=e[e.length-1]}),L.getChampionsAdcByCompo(s.compo).then(e=>{m.value=e,x.value=e[e.length-1]}),L.getChampionsSupportByCompo(s.compo).then(e=>{j.value=e,A.value=e[e.length-1],R()})});const P=e=>{J("showDetail",e)},N=e=>{_.value=e,R()},V=e=>{k.value=e,R()},q=e=>{y.value=e,R()},F=e=>{x.value=e,R()},W=e=>{A.value=e,R()},R=()=>{const e={top:_.value,jungle:k.value,mid:y.value,adc:x.value,support:A.value};console.log(z.value),z.value=[];const n=g.evalRules(e);if(n)for(const l of n)console.log(`Rule: ${l.rule} result: ${l.result}`),console.log("hey"),z.value.push(l.result)};return(e,n)=>(d(),r(f,null,[o("h2",null,D(s.compo),1),o("div",Z,[o("div",ee,[(d(!0),r(f,null,S(p.value,l=>(d(),r("div",null,[o("div",ne,[o("input",{class:"form-check-input",type:"radio",name:`${s.compo}championTop`,onClick:t=>N(l),style:{"margin-top":"40px"},checked:""},null,8,le),o("label",oe,[w(M,{champion:l,onClick:t=>P(l)},null,8,["champion","onClick"])])])]))),256)),n[0]||(n[0]=o("p",null,"Icon Top",-1))]),o("div",se,[(d(!0),r(f,null,S(C.value,l=>(d(),r("div",null,[o("div",ae,[o("input",{class:"form-check-input",type:"radio",name:`${s.compo}championJungle`,onClick:t=>V(l),style:{"margin-top":"40px"},checked:""},null,8,te),o("label",ce,[w(M,{champion:l,onClick:t=>P(l)},null,8,["champion","onClick"])])])]))),256)),n[1]||(n[1]=o("p",null,"Icon Jungle",-1))]),o("div",ie,[(d(!0),r(f,null,S(h.value,l=>(d(),r("div",null,[o("div",ue,[o("input",{class:"form-check-input",type:"radio",name:`${s.compo}championMid`,onClick:t=>q(l),style:{"margin-top":"40px"},checked:""},null,8,de),o("label",re,[w(M,{champion:l,onClick:t=>P(l)},null,8,["champion","onClick"])])])]))),256)),n[2]||(n[2]=o("p",null,"Icon Mid",-1))]),o("div",pe,[(d(!0),r(f,null,S(m.value,l=>(d(),r("div",null,[o("div",me,[o("input",{class:"form-check-input",type:"radio",name:`${s.compo}championAdc`,onClick:t=>F(l),style:{"margin-top":"40px"},checked:""},null,8,he),o("label",ge,[w(M,{champion:l,onClick:t=>P(l)},null,8,["champion","onClick"])])])]))),256)),n[3]||(n[3]=o("p",null,"Icon Adc",-1))]),o("div",ve,[(d(!0),r(f,null,S(j.value,l=>(d(),r("div",null,[o("div",Ce,[o("input",{class:"form-check-input",type:"radio",name:`${s.compo}championSupport`,onClick:t=>W(l),style:{"margin-top":"40px"},checked:""},null,8,fe),o("label",_e,[w(M,{champion:l,onClick:t=>P(l)},null,8,["champion","onClick"])])])]))),256)),n[4]||(n[4]=o("p",null,"Icon Support",-1))])]),o("div",ke,[n[5]||(n[5]=o("h3",{style:{"padding-left":"50px","padding-right":"20px"}},"Analyse : ",-1)),o("div",ye,[(d(!0),r(f,null,S(z.value,l=>(d(),r("p",xe,"- "+D(l),1))),256))]),o("div",Ae,[Y.value?(d(),r("p",Se,"- Pas assez de poke")):b("",!0)]),o("div",we,[G.value?(d(),r("p",Ie,"- Pas assez de wave clear")):b("",!0)]),o("div",Re,[H.value?(d(),r("p",Le,"- Pas assez de tank")):b("",!0)])])],64))}},$e={class:"d-flex flex-row main"},Me={class:"team-comp d-flex flex-column"},je={style:{width:"40%"}},ze={__name:"TeamComp",setup(v){const a=c(null),s=c(null),p=new E;T(()=>{p.getCompositions().then(h=>s.value=h)});const C=h=>{a.value=h};return(h,m)=>(d(),r("div",$e,[o("div",Me,[(d(!0),r(f,null,S(s.value,j=>(d(),r("div",null,[w(Pe,{compo:j.name,onShowDetail:C},null,8,["compo"])]))),256))]),o("div",je,[w(Q,{champion:a.value},null,8,["champion"])])]))}},De=U(ze,[["__scopeId","data-v-33b67404"]]);export{De as default};
