(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__1B1_q",summary:"CartItem_summary__3FMDj",price:"CartItem_price__2Nl0j",amount:"CartItem_amount__jUKEC",actions:"CartItem_actions__UwVPJ"}},function(e,t,n){e.exports={"cart-items":"Cart_cart-items__2pjQw",total:"Cart_total__3pLin",actions:"Cart_actions__1GOmr","button--alt":"Cart_button--alt__1Z2QQ",button:"Cart_button__fw1-t"}},,,function(e,t,n){e.exports={button:"HeaderCartButton_button__3CMOT",icon:"HeaderCartButton_icon__9KWtg",badge:"HeaderCartButton_badge__1Z3gL",bump:"HeaderCartButton_bump__3atD4"}},,function(e,t,n){e.exports={backdrop:"Modal_backdrop__3iXHD",modal:"Modal_modal__30MRu","slide-down":"Modal_slide-down__294fH"}},function(e,t,n){e.exports={meal:"MealItem_meal__2uJ70",description:"MealItem_description__2YINS",price:"MealItem_price__3sNYl"}},,function(e,t,n){e.exports={header:"Header_header__zSTUo","main-image":"Header_main-image__2Q3So"}},,function(e,t,n){e.exports={card:"Card_card__1te4P"}},function(e,t,n){e.exports={input:"Input_input__HkNJD"}},function(e,t,n){e.exports={form:"MealItemForm_form__32qVd"}},function(e,t,n){e.exports={meals:"MealsAvailable_meals__YSDpC","meals-appear":"MealsAvailable_meals-appear__3O3N_"}},function(e,t,n){e.exports={summary:"MealsSummary_summary__22zUX"}},,,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(6),c=n.n(a),i=n(1),r=n.n(i),o=n(2),s=n(3),u=n(14),l=n(0),m=Object(i.createContext)({items:[],totalAmount:0,addItem:function(){},removeItem:function(){},cartIsShown:!1,onShowCart:function(){},onHideCart:function(){}}),d={items:[],totalAmount:0},j=function(e,t){switch(t.type){case"ADD_ITEM":var n,a=e.totalAmount+t.item.price*t.item.amount,c=e.items.findIndex((function(e){return e.id===t.item.id})),i=e.items[c];if(i){var r=Object(o.a)(Object(o.a)({},i),{},{amount:i.amount+t.item.amount});(n=Object(u.a)(e.items))[c]=r}else n=e.items.concat(t.item);return{items:n,totalAmount:a};case"REMOVE_ITEM":var s,l,m=e.items.findIndex((function(e){return e.id===t.id})),d=e.items[m];return 1===d.amount?(s=e.items.filter((function(e){return e.id!==t.id})),l=e.totalAmount-d.price):d.amount>1&&(--(s=Object(u.a)(e.items))[m].amount,l=e.totalAmount-d.price),{items:s,totalAmount:l};default:return e}},b=function(e){var t=Object(i.useState)(!1),n=Object(s.a)(t,2),a=n[0],c=n[1],r=Object(i.useReducer)(j,d),o=Object(s.a)(r,2),u=o[0],b=o[1],p={items:u.items,totalAmount:u.totalAmount,addItem:function(e){b({type:"ADD_ITEM",item:e})},removeItem:function(e){b({type:"REMOVE_ITEM",id:e})},cartIsShown:a,onShowCart:function(){c(!0)},onHideCart:function(){c(!1)}};return Object(l.jsx)(m.Provider,{value:p,children:e.children})},p=m,O=n(10),x=n.n(O),_=function(e){var t=Object(i.useContext)(p);return Object(l.jsx)("div",{className:x.a.backdrop,onClick:t.onHideCart})},h=function(e){return Object(l.jsx)("div",{className:x.a.modal,children:Object(l.jsx)("div",{className:x.a.content,children:e.children})})},f=document.getElementById("overlays"),v=function(e){return Object(l.jsxs)(i.Fragment,{children:[c.a.createPortal(Object(l.jsx)(_,{}),f),c.a.createPortal(Object(l.jsx)(h,{children:e.children}),f)]})},C=n(4),g=n.n(C),N=function(e){var t="$".concat(e.price.toFixed(2));return Object(l.jsxs)("li",{className:g.a["cart-item"],children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{children:e.name}),Object(l.jsxs)("div",{className:g.a.summary,children:[Object(l.jsx)("span",{className:g.a.price,children:t}),Object(l.jsxs)("span",{className:g.a.amount,children:["x ",e.amount]})]})]}),Object(l.jsxs)("div",{className:g.a.actions,children:[Object(l.jsx)("button",{onClick:e.onRemove,children:"\u2212"}),Object(l.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})},I=n(5),A=n.n(I),M=function(){var e=Object(i.useContext)(p),t="$".concat(e.totalAmount.toFixed(2)),n=e.items.length>0,a=function(t){e.removeItem(t)},c=function(t){e.addItem(Object(o.a)(Object(o.a)({},t),{},{amount:1}))},r=Object(l.jsx)("ul",{className:A.a["cart-items"],children:e.items.map((function(e){return Object(l.jsx)(N,{name:e.name,price:e.price,amount:e.amount,onRemove:a.bind(null,e.id),onAdd:c.bind(null,e)},e.id)}))});return Object(l.jsxs)(v,{children:[r,Object(l.jsxs)("div",{className:A.a.total,children:[Object(l.jsx)("span",{children:"Total amount"}),Object(l.jsx)("span",{children:t})]}),Object(l.jsxs)("div",{className:A.a.actions,children:[Object(l.jsx)("button",{className:A.a["button--alt"],onClick:e.onHideCart,children:"Close"}),n&&Object(l.jsx)("button",{className:A.a.button,children:"Order"})]})]})},w=function(){return Object(l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(l.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},y=n(8),H=n.n(y),S=function(){var e=Object(i.useState)(!1),t=Object(s.a)(e,2),n=t[0],a=t[1],c=Object(i.useContext)(p);Object(i.useEffect)((function(){if(0!==c.items.length){a(!0);var e=setTimeout((function(){a(!1)}),300);return function(){clearTimeout(e)}}}),[c.items]);var r=c.items.reduce((function(e,t){return e+t.amount}),0),o="".concat(H.a.button," ").concat(n?H.a.bump:"");return Object(l.jsxs)("button",{className:o,onClick:c.onShowCart,children:[Object(l.jsx)("span",{className:H.a.icon,children:Object(l.jsx)(w,{})}),Object(l.jsx)("span",{children:"Your cart"}),Object(l.jsx)("span",{className:H.a.badge,children:r})]})},D=n(13),E=n.n(D),T=n.p+"static/media/meals.2971f633.jpg",k=function(){return Object(l.jsxs)(r.a.Fragment,{children:[Object(l.jsxs)("header",{className:E.a.header,children:[Object(l.jsx)("h1",{children:"ReactMeals"}),Object(l.jsx)(S,{})]}),Object(l.jsx)("div",{className:E.a["main-image"],children:Object(l.jsx)("img",{src:T,alt:"Table full of delicious food"})})]})},B=n(15),F=n.n(B),R=function(e){return Object(l.jsx)("div",{className:F.a.card,children:e.children})},q=n(16),z=n.n(q),P=r.a.forwardRef((function(e,t){return Object(l.jsxs)("div",{className:z.a.input,children:[Object(l.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(l.jsx)("input",Object(o.a)({ref:t},e.input))]})})),J=n(17),V=n.n(J),L=function(e){var t=Object(i.useState)(!0),n=Object(s.a)(t,2),a=n[0],c=n[1],r=Object(i.useRef)();return Object(l.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n=r.current.value,a=+n;0===n.trim().length||a<1||a>5?c(!1):e.onAddToCart(a)},className:V.a.form,children:[Object(l.jsx)(P,{ref:r,label:"Amount",input:{id:"amount",type:"number",min:"1",max:"5",step:"1",defaultValue:"1"}}),Object(l.jsx)("button",{type:"submit",children:"+ Add"}),!a&&Object(l.jsx)("p",{children:"Please enter a valid amount (1-5)."})]})},Q=n(11),U=n.n(Q),Y=function(e){var t=Object(i.useContext)(p),n="$".concat(e.price.toFixed(2));return Object(l.jsxs)("li",{className:U.a.meal,children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("h3",{children:e.name}),Object(l.jsx)("div",{className:U.a.description,children:e.description}),Object(l.jsx)("div",{className:U.a.price,children:n})]}),Object(l.jsx)("div",{children:Object(l.jsx)(L,{onAddToCart:function(n){t.addItem({id:e.id,name:e.name,price:e.price,amount:n})}})})]})},$=n(18),G=n.n($),K=[{id:"m1",name:"Sushi",description:"Finest fish and veggies",price:22.99},{id:"m2",name:"Schnitzel",description:"A german specialty!",price:16.5},{id:"m3",name:"Barbecue Burger",description:"American, raw, meaty",price:12.99},{id:"m4",name:"Green Bowl",description:"Healthy...and green...",price:18.99}],X=function(){var e=K.map((function(e){return Object(l.jsx)(Y,Object(o.a)({},e),e.id)}));return Object(l.jsx)("section",{className:G.a.meals,children:Object(l.jsx)(R,{children:Object(l.jsx)("ul",{children:e})})})},Z=n(19),W=n.n(Z),ee=function(){return Object(l.jsxs)("section",{className:W.a.summary,children:[Object(l.jsx)("h2",{children:"Delicious food delivered to you"}),Object(l.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore culpa id distinctio officiis odio ad quaerat placeat, labore consequuntur porro rem cum. Dolorum iure asperiores earum beatae odio reiciendis fugit."}),Object(l.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore culpa id distinctio officiis odio ad quaerat placeat, labore consequuntur porro rem cum. Dolorum iure asperiores earum beatae odio reiciendis fugit."})]})},te=function(){return Object(l.jsxs)(i.Fragment,{children:[Object(l.jsx)(ee,{}),Object(l.jsx)(X,{})]})};var ne=function(){var e=Object(i.useContext)(p);return Object(l.jsxs)(i.Fragment,{children:[e.cartIsShown&&Object(l.jsx)(M,{}),Object(l.jsx)(k,{}),Object(l.jsx)("main",{children:Object(l.jsx)(te,{})})]})};n(25);c.a.render(Object(l.jsx)(b,{children:Object(l.jsx)(ne,{})}),document.getElementById("root"))}],[[26,1,2]]]);
//# sourceMappingURL=main.8f1be19b.chunk.js.map