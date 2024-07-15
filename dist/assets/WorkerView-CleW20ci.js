import{d as y,I as b,a as W,b as A,c as V,e as N,f as z,g as $,h as P,i as q,j as T,k as O,l as R,m as U,n as j,_ as G,r as a,o as l,p as H,w as e,q as t,s as r,t as d,u as p,v as o,F as L,x as M,y as g,z as x,A as J}from"./index-ZBg8beDz.js";const K=y({components:{IonButtons:b,IonSelect:W,IonSelectOption:A,IonContent:V,IonHeader:N,IonMenuButton:z,IonPage:$,IonTitle:P,IonToolbar:q,IonItem:T,IonCol:O,IonButton:R,IonRow:U,IonGrid:j},data(){return{stage:"workspaceSelection",workplaceIdInput:-1,currentVisitor:-1}},mounted(){localStorage.getItem("workspaceSetting_WorkerID")&&Number(localStorage.getItem("workspaceSetting_WorkerID"))>-1&&(this.stage="workspaceDesk",this.workspaceSetting_WorkerID=Number(localStorage.getItem("workspaceSetting_WorkerID")))},methods:{selectWorkplace(){if(Number(this.workplaceIdInput)>-1){var u=Number(this.workplaceIdInput);this.workspaceSetting_WorkerID=u,this.stage="workspaceDesk",localStorage.setItem("workspaceSetting_WorkerID",u+"")}else console.log("Please, select correct value for the workplace's ID.",Number(this.workplaceIdInput))},resetWorkspace(){localStorage.removeItem("workspaceSetting_WorkerID"),this.stage="workspaceSelection"},workplaceSelectorNewValue(u){this.workspaceSetting_WorkerID=Number(u.detail.value)},catchNewRequest(){this.$axios.get(localStorage.getItem("APIServer_InstanceAddress")+"/queue/catch",{params:{id:this.workspaceSetting_WorkerID,workerId:this.workspaceSetting_WorkerID}}).then(u=>{if(u.data.status=="AddedToFreeWorkers"){this.stage="workspaceIsFreeOfWork";const s=setInterval(()=>{this.$axios.get(localStorage.getItem("APIServer_InstanceAddress")+"/queue/catch",{params:{id:this.workspaceSetting_WorkerID,workerId:this.workspaceSetting_WorkerID}}).then(_=>{_.data.status=="Assigned"&&(clearInterval(s),this.currentVisitor=_.data.key,this.stage="awaitingForVisitor")}).catch(_=>{console.error(_)})},4e3)}else u.data.status=="Assigned"&&(this.currentVisitor=u.data.key,this.stage="awaitingForVisitor")}).catch(u=>{console.error(u)})},acceptArbitrary(){this.$axios.get(localStorage.getItem("APIServer_InstanceAddress")+"/queue/acceptArbitrary",{params:{id:this.workspaceSetting_WorkerID}}).then(u=>{u.data.status=="InProgress"&&(this.currentVisitor=u.data.visitorId,this.stage="InProgress")}).catch(u=>{console.error(u)})},updateStatus(u){this.$axios.get(localStorage.getItem("APIServer_InstanceAddress")+"/queue/updateStatus",{params:{id:this.currentVisitor,newStatus:u}}).then(s=>{s.data.status=="Updated"&&(this.stage="InProgress",u=="Finished"&&(this.stage="workspaceDesk"),u=="CanceledByWorker"&&(this.stage="workspaceDesk"))}).catch(s=>{console.error(s)})}}}),n=u=>(x("data-v-660e0809"),u=u(),J(),u),Q={key:0,class:"container"},X={style:{width:"50%","max-width":"90vw",margin:"auto"}},Y=n(()=>o("strong",{class:"capitalize"},"Выбор оператора",-1)),Z=n(()=>o("p",null,"Выберите оператора, за которого вы работаете",-1)),u4={key:1,style:{"margin-left":"5vw"}},e4={style:{background:"#00000010","border-radius":"20px",height:"auto",padding:"10px",width:"180px","margin-left":"5px","margin-bottom":"10vh"}},t4={class:"capitalize",style:{"padding-bottom":"15px"}},o4=n(()=>o("strong",{class:"capitalize"},"Следующий посетитель",-1)),s4=n(()=>o("p",null,"Уже готовы к следующему посетителю?",-1)),a4=n(()=>o("strong",{class:"capitalize"},"Принять вне очереди",-1)),n4=n(()=>o("p",null,"Принимаете посетителя вне очереди?",-1)),r4={key:2,class:"container"},i4=n(()=>o("strong",{class:"capitalize"},"Ждем!",-1)),l4=n(()=>o("p",null,"Сейчас нет посетителей, которых можно бы было взять",-1)),c4=n(()=>o("p",null,"Когда появятся посетители - они будут распределены вам.",-1)),d4=[i4,l4,c4],p4={key:3,class:"container"},_4={class:"capitalize"},g4=n(()=>o("p",null,"Посетитель вызван к вам",-1)),k4={key:4,class:"container"},h4={class:"capitalize"},I4=n(()=>o("p",null,"Вы работаете с этим посетителем сейчас",-1));function m4(u,s,_,f4,w4,E4){const E=a("ion-menu-button"),C=a("ion-buttons"),h=a("ion-title"),I=a("ion-toolbar"),m=a("ion-header"),F=a("ion-select-option"),S=a("ion-select"),B=a("ion-item"),c=a("ion-button"),k=a("ion-col"),f=a("ion-row"),w=a("ion-grid"),v=a("ion-content"),D=a("ion-page");return l(),H(D,null,{default:e(()=>[t(m,{translucent:!0},{default:e(()=>[t(I,null,{default:e(()=>[t(C,{slot:"start"},{default:e(()=>[t(E,{color:"primary"})]),_:1}),t(h,null,{default:e(()=>[r(d(u.$route.params.id),1)]),_:1})]),_:1})]),_:1}),t(v,{fullscreen:!0},{default:e(()=>[t(m,{collapse:"condense"},{default:e(()=>[t(I,null,{default:e(()=>[t(h,{size:"large"},{default:e(()=>[r(d(u.$route.params.id),1)]),_:1})]),_:1})]),_:1}),u.stage=="workspaceSelection"?(l(),p("div",Q,[o("div",X,[Y,Z,t(B,{style:{"margin-top":"5vh"}},{default:e(()=>[t(S,{label:"Оператор",placeholder:"Выберите",modelValue:u.workplaceIdInput,"onUpdate:modelValue":s[0]||(s[0]=i=>u.workplaceIdInput=i),onIonChange:u.workplaceSelectorNewValue},{default:e(()=>[(l(),p(L,null,M(100,i=>t(F,{key:i,value:i},{default:e(()=>[r(d(i),1)]),_:2},1032,["value"])),64))]),_:1},8,["modelValue","onIonChange"])]),_:1}),t(c,{style:{"margin-top":"5vh"},onClick:u.selectWorkplace},{default:e(()=>[r("Продолжить")]),_:1},8,["onClick"])])])):g("",!0),u.stage=="workspaceDesk"?(l(),p("div",u4,[o("div",e4,[o("strong",t4,"Рабочее место "+d(u.workspaceSetting_WorkerID),1)]),t(w,null,{default:e(()=>[t(f,null,{default:e(()=>[t(k,{size:"6"},{default:e(()=>[o4,s4,t(c,{onClick:u.catchNewRequest,style:{"margin-top":"2vh","margin-left":"-4px"}},{default:e(()=>[r("Позвать следующего посетителя")]),_:1},8,["onClick"])]),_:1}),t(k,{size:"6"},{default:e(()=>[a4,n4,t(c,{onClick:u.acceptArbitrary,style:{"margin-top":"2vh","margin-left":"-4px"}},{default:e(()=>[r("Принять вне очереди")]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1})])):g("",!0),u.stage=="workspaceIsFreeOfWork"?(l(),p("div",r4,d4)):g("",!0),u.stage=="awaitingForVisitor"?(l(),p("div",p4,[o("strong",_4,"В пути посетитель №"+d(u.currentVisitor),1),g4,t(w,{style:{"margin-top":"5vh",width:"65vw"}},{default:e(()=>[t(f,null,{default:e(()=>[t(k,{size:"6"},{default:e(()=>[t(c,{onClick:s[1]||(s[1]=i=>u.updateStatus("CanceledByWorker")),style:{"margin-left":"-4px",opacity:"0.8"},color:"danger"},{default:e(()=>[r("Не пришел, отменить")]),_:1})]),_:1}),t(k,{size:"6"},{default:e(()=>[t(c,{onClick:s[2]||(s[2]=i=>u.updateStatus("InProgress")),style:{"margin-left":"-4px"}},{default:e(()=>[r("Пришел, начать работу")]),_:1})]),_:1})]),_:1})]),_:1})])):g("",!0),u.stage=="InProgress"?(l(),p("div",k4,[o("strong",h4,"Ваш посетитель №"+d(u.currentVisitor),1),I4,t(c,{onClick:s[3]||(s[3]=i=>u.updateStatus("Finished")),style:{"margin-top":"5vh","margin-left":"-4px"}},{default:e(()=>[r("Мы закончили, завершить")]),_:1})])):g("",!0)]),_:1})]),_:1})}const F4=G(K,[["render",m4],["__scopeId","data-v-660e0809"]]);export{F4 as default};
