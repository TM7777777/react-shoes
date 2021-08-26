(this["webpackJsonpreact-sneakers"]=this["webpackJsonpreact-sneakers"]||[]).push([[0],{23:function(e,t,c){},68:function(e,t,c){"use strict";c.r(t);var a=c(1),r=c.n(a),n=c(12),s=c(32),i=c.n(s),l=c(4),o=c(13),d=c(8),j=c.n(d),u=c(14),b=c(5),m=(c(23),c(6)),h=c.n(m),x=c(2),f=c(0),O=function(e){return Object(f.jsxs)("header",{className:"header d-flex justify-between align-center p-40",children:[Object(f.jsx)(n.b,{to:"/react-shoes/",children:Object(f.jsxs)("div",{className:"headLefr d-flex align-center",children:[Object(f.jsx)("img",{width:40,heigth:40,src:"img/logo.png",alt:"",className:"mr-15"}),Object(f.jsxs)("div",{className:"",children:[Object(f.jsx)("h3",{className:"text-uppercase",children:"Shoes Store"}),Object(f.jsx)("p",{className:"opacity-5",children:"\u041c\u0430\u0433\u0430\u0437\u0438\u043d \u043b\u0443\u0447\u0448\u0438\u0445 \u043a\u0440\u043e\u0441\u0441\u043e\u0432\u043e\u043a"})]})]})}),Object(f.jsxs)("ul",{className:"headerRight d-flex",children:[Object(f.jsxs)("li",{className:"val mr-20 cu-p",onClick:e.clickCart,children:[Object(f.jsx)("img",{width:18,height:18,src:"img/cart.svg",alt:"img",className:"mr-15"}),Object(f.jsx)("span",{className:"val",children:"".concat(e.sum," \u0440\u0443\u0431.")})]}),Object(f.jsx)("li",{children:Object(f.jsx)(n.b,{to:"/react-shoes/favorites",children:Object(f.jsx)("img",{width:19,height:19,className:"cu-p mr-15",src:"img/favorite.svg",alt:""})})}),Object(f.jsx)(n.b,{to:"/react-shoes/orders",children:Object(f.jsx)("li",{children:Object(f.jsx)("img",{src:"img/acc.svg",alt:"img",className:"cu-p"})})})]})]})},p=function(e){var t=e.path,c=e.title,a=e.price,r=e.id,n=e.click;return Object(f.jsxs)("div",{className:"cartItem d-flex align-center mb-20",children:[Object(f.jsx)("div",{className:"cartImage",style:{backgroundImage:"url(".concat(t,")")}}),Object(f.jsxs)("div",{className:"mr-20 flex",children:[Object(f.jsx)("p",{className:"mb-5",children:c}),Object(f.jsx)("strong",{children:a})]}),Object(f.jsx)("img",{onClick:function(){n(r,!1)},className:"removeBtn",src:"img/btnRemove.svg",alt:"Remove"})]})},g=function(e){var t=e.imgUrl,c=e.title,a=e.description,s=e.wid,i=e.hgt,l=r.a.useContext(F).setCartState;return Object(f.jsxs)("div",{className:"cartEmpty d-flex align-center justify-center flex-column flex",children:[Object(f.jsx)("img",{width:s,heigth:i,src:t,className:"mb-20",alt:"img"}),Object(f.jsx)("h2",{className:"mb-10",children:c}),Object(f.jsx)("p",{className:"opacity-6",children:a}),Object(f.jsx)(n.b,{to:"/react-shoes/",children:Object(f.jsxs)("button",{onClick:function(){return l(!1)},className:"greenBtn mb-50",children:[Object(f.jsx)("img",{className:"arrow",src:"img/arrow2.svg",alt:"Arrow"}),"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430\u0437\u0430\u0434"]})})]})},v=function(e){return new Promise((function(t){return setTimeout(t,e)}))},N=function(e){var t=e.onRemove,c=e.removeCart,a=e.items,n=void 0===a?[]:a,s=e.sum,i=e.fee,l=e.opened,o=r.a.useContext(F),d=o.cartItems,m=o.setCartItems,x=r.a.useState(!1),O=Object(b.a)(x,2),N=O[0],k=O[1],w=r.a.useState(0),y=Object(b.a)(w,2),C=y[0],I=y[1],S=r.a.useState(!1),A=Object(b.a)(S,2),B=A[0],E=A[1],L=function(){var e=Object(u.a)(j.a.mark((function e(){var t,c,a,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,E(!0),e.next=4,h.a.post("https://611fac1b988f860017ac437f.mockapi.io/orders",{items:d});case 4:t=e.sent,c=t.data,I(c.id),k(!0),m([]),a=0;case 10:if(!(a<d.length)){e.next=19;break}return r=d[a],e.next=14,h.a.delete("https://611fac1b988f860017ac437f.mockapi.io/cart/".concat(r.id));case 14:return e.next=16,v(1e3);case 16:a++,e.next=10;break;case 19:e.next=23;break;case 21:e.prev=21,e.t0=e.catch(0);case 23:E(!1);case 24:case"end":return e.stop()}}),e,null,[[0,21]])})));return function(){return e.apply(this,arguments)}}();return Object(f.jsx)("div",{className:"overlay ".concat(l?"overlayVisible":"overlayHidden"),children:Object(f.jsxs)("div",{className:"drawer",children:[Object(f.jsxs)("h2",{className:"d-flex justify-between mb-40",children:["\u041a\u043e\u0440\u0437\u0438\u043d\u0430",Object(f.jsx)("img",{onClick:c,width:35,height:35,className:"removeButton cu-p",src:"img/searchDel.svg",alt:"Remove"})]}),n.length>0?Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("div",{className:"items",children:n.map((function(e){return Object(f.jsx)(p,{title:e.title,path:e.path,price:e.price,id:e.id,click:function(e){return t(e,!1)}},e.id)}))}),Object(f.jsxs)("div",{className:"cartTotalBlock",children:[Object(f.jsxs)("ul",{children:[Object(f.jsxs)("li",{className:"d-flex align-end mb-20",children:[Object(f.jsx)("span",{children:"\u0418\u0442\u043e\u0433\u043e:"}),Object(f.jsx)("div",{}),Object(f.jsx)("b",{children:"".concat(s," \u0440\u0443\u0431.")})]}),Object(f.jsxs)("li",{className:"d-flex align-end mb-20",children:[Object(f.jsx)("span",{children:"\u041d\u0430\u043b\u043e\u0433 5%"}),Object(f.jsx)("div",{}),Object(f.jsx)("b",{children:"".concat(i," \u0440\u0443\u0431.")})]})]}),Object(f.jsxs)("button",{disabled:B,onClick:L,className:"greenBtn",children:["\u041e\u0444\u043e\u0440\u043c\u0438\u0442\u044c \u0437\u0430\u043a\u0430\u0437 ",Object(f.jsx)("img",{src:"img/arrow.svg",alt:"Arrow"})]})]})]}):Object(f.jsx)(g,{title:N?"\u0417\u0430\u043a\u0430\u0437 \u043e\u0444\u043e\u0440\u043c\u043b\u0435\u043d":"\u041a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430\u044f",description:N?"\u0412\u0430\u0448 \u0437\u0430\u043a\u0430\u0437 #".concat(C," \u0441\u043a\u043e\u0440\u043e \u0431\u0443\u0434\u0435\u0442 \u043f\u0435\u0440\u0435\u0434\u0430\u043d \u043a\u0443\u0440\u044c\u0435\u0440\u0441\u043a\u043e\u0439 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0435"):"\u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u0445\u043e\u0442\u044f \u0431\u044b \u043e\u0434\u043d\u0443 \u043f\u0430\u0440\u0443 \u043a\u0440\u043e\u0441\u0441\u043e\u0432\u043e\u043a, \u0447\u0442\u043e\u0431\u044b \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0437\u0430\u043a\u0430\u0437.",imgUrl:N?"img/order.svg":"img/cartimg.svg",wid:"120px",hgh:"120px"})]})})},k=c(34),w=function(e){var t=e.path,c=e.title,a=e.price,n=e.onFavorite,s=e.onPlus,i=e.id,l=e.favorited,o=void 0!==l&&l,d=e.loading,j=void 0!==d&&d,u=r.a.useContext(F),b=u.isFavAdd,m=u.isItemAdd,h={title:c,price:a,path:t,id:i,parentId:i};return Object(f.jsx)("div",{className:"goods",children:j?Object(f.jsxs)(k.a,{speed:2,width:150,height:250,viewBox:"0 0 150 250",backgroundColor:"#f3f3f3",foregroundColor:"#ecebeb",children:[Object(f.jsx)("rect",{x:"0",y:"0",rx:"10",ry:"10",width:"150",height:"130"}),Object(f.jsx)("rect",{x:"0",y:"142",rx:"3",ry:"3",width:"150",height:"15"}),Object(f.jsx)("rect",{x:"0",y:"163",rx:"3",ry:"3",width:"93",height:"15"}),Object(f.jsx)("rect",{x:"0",y:"200",rx:"3",ry:"3",width:"80",height:"24"}),Object(f.jsx)("rect",{x:"118",y:"192",rx:"8",ry:"8",width:"32",height:"32"})]}):Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("div",{className:"unlikeDiv",children:o||n&&Object(f.jsx)("img",{className:"unliked",onClick:function(){n(h)},src:b(i)?"img/heartact.svg":"img/heart.png",alt:""})}),Object(f.jsx)("img",{className:"cardImg",width:"100%",heigth:135,src:t,alt:""}),Object(f.jsx)("p",{children:c}),Object(f.jsxs)("div",{className:"d-flex justify-between align-center pt-10",children:[Object(f.jsxs)("div",{className:"contbox d-flex flex-column",children:[Object(f.jsx)("span",{children:"\u0426\u0435\u043d\u0430:"}),Object(f.jsxs)("strong",{children:[a," \u0440\u0443\u0431."]})]}),s&&Object(f.jsx)("img",{className:"plusBtn",onClick:function(){s(h)},src:m(i)?"img/plusact.svg":"img/plusBtn1.svg",alt:""})]})]})})},y=function(e){var t=e.onAddFavorite,c=e.addToCart,n=e.isLoading,s=r.a.useContext(F).favItems;return Object(f.jsx)("div",{className:"p-40 d-flex flex-column justify-between mb-40",children:n?Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("h1",{children:"\u041c\u043e\u0438 \u0437\u0430\u043a\u043b\u0430\u0434\u043a\u0438"}),Object(f.jsx)("div",{className:"d-flex flex-wrap",children:Object(o.a)(Array(12)).map((function(e,t){return Object(a.createElement)(w,Object(l.a)(Object(l.a)({},e),{},{key:t,loading:n,favorited:!1}))}))})]}):s.length>0?Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("h1",{children:"\u041c\u043e\u0438 \u0437\u0430\u043a\u043b\u0430\u0434\u043a\u0438"}),Object(f.jsx)("div",{className:"d-flex flex-wrap",children:s.map((function(e,r){return Object(a.createElement)(w,Object(l.a)(Object(l.a)({},e),{},{key:r,onFavorite:function(e){return t(e)},onPlus:function(e){return c(e)},loading:n,favorited:!0}))}))})]}):Object(f.jsx)(g,{title:"\u0417\u0430\u043a\u043b\u0430\u0434\u043e\u043a \u043d\u0435\u0442 :(",imgUrl:"img/sad.svg",description:"\u0412\u044b \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u043b\u0438 \u0432 \u0437\u0430\u043a\u043b\u0430\u0434\u043a\u0438",wid:"60px",hgt:"60px"})})},C=function(){var e=r.a.useContext(F).setCartState;return Object(f.jsxs)("div",{children:[Object(f.jsx)("img",{className:"slider",src:"img/slider.png",alt:"slider"}),Object(f.jsx)("button",{onClick:function(){return e(!0)},className:"buy_btn",children:"\u041a\u0443\u043f\u0438\u0442\u044c"})]})},I=function(e){var t=e.items,c=e.searchState,a=e.onChangeSearchInput,r=e.setSearchState,n=e.onAddFavorite,s=e.addToCart,i=e.isLoading;return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(C,{}),Object(f.jsxs)("div",{className:"content p-40",children:[Object(f.jsxs)("div",{className:"d-flex justify-between align-center mb-40",children:[Object(f.jsx)("h1",{className:"genTitle",children:c?'\u041f\u043e\u0438\u0441\u043a \u043f\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0443: "'.concat(c,'"'):"\u0412\u0441\u0435 \u043a\u0440\u043e\u0441\u0441\u043e\u0432\u043a\u0438"}),Object(f.jsxs)("div",{className:"search-block d-flex",children:[Object(f.jsx)("img",{width:14,heigth:14,className:"mr-10 ml-10",src:"img/search.svg ",alt:"Search"}),Object(f.jsx)("input",{onChange:a,value:c,maxLength:30,placeholder:"\u041f\u043e\u0438\u0441\u043a..."}),c&&Object(f.jsx)("img",{onClick:function(){return r("")},className:"cu-p mr-10",width:30,heigth:30,src:"img/searchdel.svg",alt:"remove"})]})]}),Object(f.jsx)("div",{className:"d-flex flex-wrap",children:function(){var e=t.filter((function(e){return e.title.toLowerCase().includes(c.toLowerCase())}));return(i?Object(o.a)(Array(12)):e).map((function(e,t){return Object(f.jsx)(w,Object(l.a)(Object(l.a)({},e),{},{loading:i,onFavorite:function(e){return n(e)},onPlus:function(e){return s(e)}}),t)}))}()})]})]})},S=function(){var e=r.a.useState([]),t=Object(b.a)(e,2),c=t[0],n=t[1],s=r.a.useState(!0),i=Object(b.a)(s,2),d=i[0],m=i[1];return r.a.useEffect((function(){Object(u.a)(j.a.mark((function e(){var t,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.get("https://611fac1b988f860017ac437f.mockapi.io/orders");case 3:t=e.sent,c=t.data,n(c.map((function(e){return e.items})).flat()),m(!1),e.next=11;break;case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])})))()}),[]),Object(f.jsx)("div",{className:"p-40 d-flex flex-column justify-between mb-40",children:d?Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("h1",{children:"\u041c\u043e\u0438 \u0437\u0430\u043a\u0430\u0437\u044b"}),Object(f.jsx)("div",{className:"d-flex flex-wrap",children:Object(o.a)(Array(12)).map((function(e,t){return Object(a.createElement)(w,Object(l.a)(Object(l.a)({},e),{},{key:t,loading:d,favorited:!1}))}))})]}):c.length>0?Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("h1",{children:"\u041c\u043e\u0438 \u0437\u0430\u043a\u0430\u0437\u044b"}),Object(f.jsx)("div",{className:"d-flex flex-wrap",children:c.map((function(e,t){return Object(a.createElement)(w,Object(l.a)(Object(l.a)({},e),{},{key:t,loading:d,favorited:!1}))}))})]}):Object(f.jsx)(g,{title:"\u0423 \u0432\u0430\u0441 \u043d\u0435\u0442 \u0437\u0430\u043a\u0430\u0437\u043e\u0432",description:"\u0412\u044b \u043d\u0438\u0449\u0435\u0431\u0440\u043e\u0434? \u041e\u0444\u043e\u0440\u043c\u0438\u0442\u0435 \u0445\u043e\u0442\u044f \u0431\u044b \u043e\u0434\u0438\u043d \u0437\u0430\u043a\u0430\u0437.",imgUrl:"/img/sad2.svg",wid:"60px",hgt:"60px"})})},F=r.a.createContext({});var A=function(){var e=Object(a.useState)([]),t=Object(b.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)([]),i=Object(b.a)(s,2),d=i[0],m=i[1],p=Object(a.useState)([]),g=Object(b.a)(p,2),v=g[0],k=g[1],w=Object(a.useState)(!1),C=Object(b.a)(w,2),A=C[0],B=C[1],E=Object(a.useState)(""),L=Object(b.a)(E,2),T=L[0],P=L[1],R=Object(a.useState)(!0),U=Object(b.a)(R,2),D=U[0],J=U[1],M=d.reduce((function(e,t){return e+ +t.price}),0),H=Math.round(.05*M);r.a.useEffect((function(){function e(){return(e=Object(u.a)(j.a.mark((function e(){var t,c,a,r,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Promise.all([h.a.get("https://611fac1b988f860017ac437f.mockapi.io/cart"),h.a.get("https://611fac1b988f860017ac437f.mockapi.io/favorites"),h.a.get("https://611fac1b988f860017ac437f.mockapi.io/items")]);case 3:t=e.sent,c=Object(b.a)(t,3),a=c[0],r=c[1],s=c[2],J(!1),m(a.data),k(r.data),n(s.data),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),alert("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u0435");case 17:case"end":return e.stop()}}),e,null,[[0,14]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var V=function(){var e=Object(u.a)(j.a.mark((function e(t){var c,a,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!(c=d.find((function(e){return Number(e.parentId)===Number(t.id)})))){e.next=8;break}return m((function(e){return e.filter((function(e){return Number(e.parentId)!==Number(t.id)}))})),e.next=6,h.a.delete("https://611fac1b988f860017ac437f.mockapi.io/cart/".concat(c.id));case 6:e.next=14;break;case 8:return m((function(e){return[].concat(Object(o.a)(e),[t])})),e.next=11,h.a.post("https://611fac1b988f860017ac437f.mockapi.io/cart",t);case 11:a=e.sent,r=a.data,m((function(e){return e.map((function(e){return e.parentId===r.parentId?Object(l.a)(Object(l.a)({},e),{},{id:r.id}):e}))}));case 14:e.next=20;break;case 16:e.prev=16,e.t0=e.catch(0),alert("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443!"),console.log(e.t0);case 20:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(t){return e.apply(this,arguments)}}(),_=function(){var e=Object(u.a)(j.a.mark((function e(t){var c,a,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!(c=v.find((function(e){return Number(e.parentId)===Number(t.id)})))){e.next=8;break}return k((function(e){return e.filter((function(e){return Number(e.parentId)!==Number(t.id)}))})),e.next=6,h.a.delete("https://611fac1b988f860017ac437f.mockapi.io/favorites/".concat(c.id));case 6:e.next=14;break;case 8:return k((function(e){return[].concat(Object(o.a)(e),[t])})),e.next=11,h.a.post("https://611fac1b988f860017ac437f.mockapi.io/favorites",t);case 11:a=e.sent,r=a.data,k((function(e){return e.map((function(e){return e.parentId===r.parentId?Object(l.a)(Object(l.a)({},e),{},{id:r.id}):e}))}));case 14:e.next=20;break;case 16:e.prev=16,e.t0=e.catch(0),alert("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u0437\u0430\u043a\u043b\u0430\u0434\u043a\u0438!"),console.log(e.t0);case 20:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsx)(F.Provider,{value:{items:c,cartItems:d,favItems:v,isItemAdd:function(e){return d.some((function(t){return Number(t.parentId)===Number(e)}))},isFavAdd:function(e){return v.some((function(t){return Number(t.parentId)===Number(e)}))},setCartState:B,setCartItems:m},children:Object(f.jsxs)("div",{className:"wrapper clear",children:[Object(f.jsx)(N,{items:d,onRemove:function(e){try{h.a.delete("https://611fac1b988f860017ac437f.mockapi.io/cart/".concat(e)),m((function(t){return t.filter((function(t){return Number(t.id)!==Number(e)}))}))}catch(t){alert("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u0435\u043b\u0435\u043c\u0435\u043d\u0442!"),console.log(e)}},removeCart:function(){return B(!1)},sum:M,fee:H,opened:A}),Object(f.jsx)(O,{clickCart:function(){return B(!0)},sum:M}),Object(f.jsx)(x.a,{path:"",exact:!0,children:Object(f.jsx)(I,{items:c,searchState:T,isLoading:D,onChangeSearchInput:function(e){P(e.target.value)},setSearchState:P,addToCart:V,onAddFavorite:_})}),Object(f.jsx)(x.a,{path:"/react-shoes/favorites",children:Object(f.jsx)(y,{onAddFavorite:_,addToCart:V,isLoading:D})}),Object(f.jsx)(x.a,{path:"/react-shoes/orders",children:Object(f.jsx)(S,{onAddFavorite:_,addToCart:V})})]})})};c(67);i.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(n.a,{children:Object(f.jsx)(A,{})})}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.3d64c6d4.chunk.js.map