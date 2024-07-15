import{d as w,c as b,g as v,n as A,m as h,k as y,j as F,C as V,D as k,l as $,f as S,h as x,i as z,_ as N,r as e,o as T,p as j,w as n,q as u,s as i,t as q,v as l,z as J,A as O}from"./index-ZBg8beDz.js";const P=w({components:{IonContent:b,IonPage:v,IonGrid:A,IonRow:h,IonCol:y,IonItem:F,IonLabel:V,IonInput:k,IonButton:$,IonMenuButton:S,IonTitle:x,IonToolbar:z},setup(){},data(){return{passwordInput:"",newIndexInput:""}},methods:{adminAction(o){this.passwordInput==""?alert(this.passwordInput):this.$axios.get(localStorage.getItem("APIServer_InstanceAddress")+"/queue/admin",{params:{action:o,password:this.passwordInput,newIndexInput:this.newIndexInput}}).then(t=>{console.log(t.data),alert(JSON.stringify(t.data))}).catch(t=>{console.error(t),alert(JSON.stringify(t))})}}}),s=o=>(J("data-v-3c648b42"),o=o(),O(),o),U={style:{display:"flex","justify-content":"center","align-items":"center",height:"100%"}},G=s(()=>l("p",null,"Для представленных ниже действий требуется мастер пароль.",-1)),L=s(()=>l("strong",null,"Сброс индекса",-1)),M=s(()=>l("p",null,"Это действие обнулит индекс последнего номерка (используйте, чтобы начать отсчет с определенного номера)",-1)),Q=s(()=>l("strong",null,"Отклонение всех номеров",-1)),R=s(()=>l("p",null,"Уже существующие номера в очереди будут помечены как отклоненные",-1)),H=s(()=>l("strong",null,"Сброс элементов очереди",-1)),K=s(()=>l("p",null,"Полное удаление номеров из очереди (это будет значит, что в очереди никого не будет) ",-1));function W(o,t,X,Y,Z,u4){const E=e("ion-menu-button"),m=e("ion-buttons"),I=e("ion-title"),D=e("ion-toolbar"),f=e("ion-label"),p=e("ion-input"),_=e("ion-item"),d=e("ion-col"),r=e("ion-row"),c=e("ion-button"),B=e("ion-grid"),C=e("ion-content"),g=e("ion-page");return T(),j(g,null,{default:n(()=>[u(D,null,{default:n(()=>[u(m,{slot:"start"},{default:n(()=>[u(E,{color:"primary"})]),_:1}),u(I,null,{default:n(()=>[i(q(o.$route.params.id),1)]),_:1})]),_:1}),u(C,{fullscreen:!0,class:"ion-padding"},{default:n(()=>[l("div",U,[u(B,null,{default:n(()=>[u(r,null,{default:n(()=>[u(d,{size:"12"},{default:n(()=>[G,u(_,null,{default:n(()=>[u(f,{position:"floating"},{default:n(()=>[i("Пароль")]),_:1}),u(p,{modelValue:o.passwordInput,"onUpdate:modelValue":t[0]||(t[0]=a=>o.passwordInput=a),value:o.passwordInput,type:"password"},null,8,["modelValue","value"])]),_:1})]),_:1})]),_:1}),u(r,{style:{"margin-top":"5vh"}},{default:n(()=>[u(d,{size:"6"},{default:n(()=>[l("div",null,[L,M,u(_,null,{default:n(()=>[u(p,{modelValue:o.newIndexInput,"onUpdate:modelValue":t[1]||(t[1]=a=>o.newIndexInput=a),value:o.newIndexInput,type:"number",placeholder:"Новое целое значение"},null,8,["modelValue","value"])]),_:1}),u(c,{onClick:t[2]||(t[2]=a=>{o.adminAction("updateIndex")}),expand:"block"},{default:n(()=>[i("Обновить")]),_:1})])]),_:1}),u(d,{size:"6"},{default:n(()=>[l("div",null,[Q,R,u(_,null,{default:n(()=>[u(p,{type:"number",placeholder:"Новое целое значение"})]),_:1}),u(c,{onClick:t[3]||(t[3]=a=>{o.adminAction("cancelAll")}),expand:"block"},{default:n(()=>[i("Отклонить все")]),_:1})])]),_:1})]),_:1}),u(r,{style:{"margin-top":"5vh"}},{default:n(()=>[u(d,{size:"6"},{default:n(()=>[l("div",null,[H,K,u(c,{onClick:t[4]||(t[4]=a=>{o.adminAction("resetQueueElements")}),expand:"block"},{default:n(()=>[i("Сбросить")]),_:1})])]),_:1})]),_:1})]),_:1})])]),_:1})]),_:1})}const o4=N(P,[["render",W],["__scopeId","data-v-3c648b42"]]);export{o4 as default};
