(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[32],{"0142":function(e,n,r){"use strict";r.r(n);var t=function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("div",[r("q-tabs",{staticClass:"text-teal",attrs:{align:"left","inline-label":"",dense:""},model:{value:e.tab,callback:function(n){e.tab=n},expression:"tab"}},e._l(e.tabs,(function(e,n){return r("q-tab",{key:"tabs_"+n,attrs:{name:""+e.value,label:n+1+"."+e.label}})})),1),r(""+e.tab,{tag:"component"})],1)},a=[],o=function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("div",{},[r("q-markdown",{attrs:{extend:e.extendMarkdown,src:e.MainComponent}})],1)},i=[],s=(r("caad"),r("ac1f"),r("2532"),r("1276"),"```html\r\nI want to travel         --------   2021.08.07    \r\n\r\nChina has the world's third largest land , area of 9.6 million square kilometers, accounting for about 1/15 of the world's total land area.\r\nChina has 34 provinces, 56 ethnic groups, and lots of foreign tourists and immigrants.\r\nEach province has its own unique culture. When you travel around China, you can see different landscapes and cultures.\r\n\r\nTibet has the highest mountain in the world and the highest average altitude in the world. \r\nThe Tibetan people are honest, trust nature and live in harmony with nature.\r\nThere are also many Buddhist temples with a long history and culture.\r\nThe sky is very blue and clear and  there are many holy lakes, very clean.\r\n\r\nShenzhen is a young fashionable modern city with advanced science and technology. \r\nA lot of young people go there to chase their dreams. There are lots of parks. \r\nAmong them Xianhu Botanical Garden and Wutong Mountain park and Binhai Park is the most worth going to.\r\n\r\nYou can walk through the gate of Wutong Mountain to the Xianhu Botanical Garden, and then go out from the main gate to take the bus and subway home. \r\nThe route, which can be more than 20 kilometers, has beautiful scenery and humid air, making it ideal for hiking.\r\nShenzhen Binhai Park contains 12 theme parks and stretches about 11 kilometers along the coast. Opposite is Hong Kong.\r\n\r\nI also dreamed of driving a car, or riding a motorcycle, to have a In-depth Travel of China  . \r\nBut my parents are getting older and older, I need to take care of them, and I need to get married and have a family of my own. I need to make plans for my future.\r\nBesides, traveling is expensive and I never have enough money to travel.\r\n\r\nI need to work hard for my dreams.\r\n\r\n\r\n```\r\n\r\n<br/>\r\n\r\n```html\r\nHow I wish...          ------2021.08.08\r\nHow I  wish I could finish reading this  English novel smoothly . \r\nI wish I was a kid again,no worryies,no pressure,like a happy bird every day.\r\nThe blue sky ,the clean river ,the beautiful butterfly ,so desirable.\r\nI have never played the piano.\r\nI have never drawn a picture.\r\nI wish I could play the violin.\r\nThe  pronuncition of this word is very strange.\r\nI wake up at 5.00 this morning.\r\nI woke up at 5.00 yesterday morning.\r\nI have never woken up before 4.00 in the morning.\r\nIf you don't use English often ,you will forget quickly.\r\nThere are many kinds of instruments in the world.\r\nThere are a lot of private luxury cars parked in that parking lot.\r\nPersonality affects life.\r\nCharacter affects life.\r\nInstant noodles are not healthy.\r\nInregular verbs are used a lot in daily life.\r\n\r\n \r\n```\r\n\r\n<br/>\r\n\r\n```\r\n------2021.08.09\r\nI will use my way to organize these knowledge points and document them .\r\nWhat suits you is the best.\r\nThe best way to lern English is to use English to lern English.\r\nWhen you read the passage ,you can learn the new words according to the context.\r\nThis vodeo website has no advertisements and does not require registration.\r\n```\r\n\r\n<br>\r\n\r\n```\r\n------2021.08.11\r\nCambridge English Language Assessment is undertaking a long-term study to measure the impact of Cambridge English: Young Learners on Chinese schools. \r\n```\r\n\r\n<br>\r\n\r\n```\r\n------2021.08.12\r\nCan you  brighten the lamp ?\r\nCosts should be kept to a minimum.\r\nSome of them earn below the minimum wage.\r\nThis booklet is filled with misstatements of fact.\r\nThe man  looked at his girlfriend suspiciously.\r\nHer answer amounted to a complete refusal.\r\nWhen we gets older and older ,we will be more forgetful.\r\nExcitement was shining in her eyes.\r\nThey yelled with excitement.\r\nShe was a kind, motherly woman.\r\nGlasses is fragile.\r\nShe puts a spoonful of milk in the cup.\r\nInterestingly, some men are even lazier than women.\r\nShe is known as a great beauty.\r\nHer beauty appeared ageless.\r\nBeautify life, purify the soul.\r\nWhat is the absolute maximum you can afford to pay?\r\nHarden the Web server and host.\r\nYou must harden yourself.\r\n```\r\n\r\n<br>\r\n\r\n```\r\n------2021.08.13\r\nA wedding involves  negotiating with everyone in the family.\r\nThat criminal deserves to get  a long sentence.  那个罪犯应该被判很长的刑期。\r\nI pretended to be  sick so I didn't have to go to work.\r\nHe claims to be a millionaire but I don't believe him.\r\nHe denies stealing  the money. \r\nI anticipate  arriving  on Tuesday.\r\nPlease don't forget  to pick up  some juice on your way home.\r\nI remember going  to the beach as a child.\r\nI regret telling Julie my secret. Now she has told everyone. \r\nI regret to tell  you the train has been delayed.\r\n \r\n \r\n```\r\n\r\n"),l={data:function(){return{MainComponent:s,img_prefix:"./img/linux/heima-Linux云计算/讲义/"}},methods:{extendMarkdown:function(e){var n=this;console.log(e.renderer.rules);var r=e.renderer.rules.html_block;e.renderer.rules.html_block=function(e,t,a,o,i){var s=e[t];if(console.log("1"),s.content.includes("<img")){console.log("token-- ",s);var l="";l=s.content;var h=l.split('src="'),u=h[0]+' src="'+n.img_prefix+h[1];s.content=u}return s.attrSet("class","q-markdown--token  "),r(e,t,a,o,i)},e.renderer.rules.image=function(e,r,t,a,o){var i=e[r];console.log("3"),i.attrSet("class","q-markdown--image"),console.log("token--- "+r+"-----",i);var s=i.attrGet("src");return console.log(s),i.attrSet("src",n.img_prefix+s),o.renderToken(e,r,t)}}}},h=l,u=r("2877"),d=Object(u["a"])(h,o,i,!1,null,"41ddd937",null),c=d.exports,m=function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("div",[r("div",{staticClass:"row  "},[r("q-select",{attrs:{"use-input":"","input-debounce":"0",clearable:"",options:e.book_options},on:{filter:e.filterFn},model:{value:e.book,callback:function(n){e.book=n},expression:"book"}},[r("template",{slot:"before"},[r("div")])],2)],1),r("div",{staticClass:"q-pdfviewer-container   "},[r("q-pdfviewer",{attrs:{src:e.src,type:"html5","content-class":" fit   q-pdfviewer-container","inner-content-class":" fit   q-pdfviewer-container"},model:{value:e.show,callback:function(n){e.show=n},expression:"show"}})],1)])},g=[],f=r("1b62"),p=["/第1阶段-运维基本功（升级7.6版本）/01运维概述与Linux系统安装.pdf","/第1阶段-运维基本功（升级7.6版本）/02Linux基础命令.pdf"],b="linux/heima-Linux云计算",y={mixins:[f["d"]],data:function(){return{prefix:b,book_options:p,show:!0,book:p[0],src:""}}},w=y,v=Object(u["a"])(w,m,g,!1,null,null,null),k=v.exports,I={mixins:[f["c"]],components:{m1:c,m2:k},data:function(){return{tab:"m1",tab_level:2,tabs:[{label:"note-202108",value:"m1"}]}}},x=I,T=Object(u["a"])(x,t,a,!1,null,"68d8ba31",null);n["default"]=T.exports}}]);