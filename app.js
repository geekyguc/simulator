tippy("#helpFirstStaff",{content:"Manque d'anticipation des arriv\xE9es de nouveaux consultants. Cons\xE9quence : une latence sur le premier staffing des nouveaux embauch\xE9s."}),tippy("#helpNewStaffing",{content:"Manque d'anticipation des futures disponibilit\xE9s. Cons\xE9quence : un d\xE9lai d'inactivit\xE9 entre les missions."}),tippy("#helpLeanStart",{content:"Manque de fiabilit\xE9 sur les d\xE9marrages de missions. Cons\xE9quence : un d\xE9calage des plannings avec des retards non productifs."}),tippy("#helpLeanBack",{content:"Manque de visibilit\xE9 sur les fins et renouvellements de missions. Cons\xE9quence : un d\xE9lai de prise en compte de la disponibilit\xE9 des consultants."}),tippy("#helpLeanPT",{content:"Trop de mission en part time. Cons\xE9quence : difficile de compl\xE9ter les 50% de disponibilit\xE9 par un autre part time."}),tippy("#helpShadowStaffing",{content:"Manque de contr\xF4le de la fraude. Cons\xE9quence : une inactivit\xE9 cach\xE9e, r\xE9v\xE9l\xE9e a posteriori."}),tippy("#helpPlanDeCharge",{content:"Mat\xE9rialisation d\xE9taill\xE9e de l'occupation des consultants. Survolez les jours pour avoir leur explication."}),tippy("#heatmap",{content:"Votre simulation d\xE9passe 300 consultants, si vous voulez tout de m\xEAme visualiser ce d\xE9tail, cela peut durer un certain temps (d\xE9pendant de la puissance de votre ordinateur)."});const firebaseConfig={apiKey:"AIzaSyAdJZlbzyA6ssJu5YyvftEupGIKlAQSPAI",authDomain:"simulator-299fa.firebaseapp.com",databaseURL:"https://simulator-299fa.firebaseio.com",projectId:"simulator-299fa",storageBucket:"simulator-299fa.appspot.com",messagingSenderId:"966834241777",appId:"1:966834241777:web:082d59532e859be085e950",measurementId:"G-NJ3L8JQKES"};firebase.initializeApp(firebaseConfig);var name,email,photoUrl,uid,emailVerified,connected=!0,user=firebase.auth().currentUser,limitConsultantsToDraw=20,heatmapChart=new dc.HeatMap("#esnHeatmap");firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);var ui=new firebaseui.auth.AuthUI(firebase.auth()),actionCodeSettings={url:"https://simulator.whoz.io/"};function loggued(){document.getElementById("esn-main").style.display="block",hideDescription(),connected=!0,user=firebase.auth().currentUser,null!=user&&(name=user.displayName,email=user.email,photoUrl=user.photoURL,emailVerified=user.emailVerified,uid=user.uid),db.collection("whoz"+dev).doc(email).collection("login").add({email:email,loginId,loginDate}),db.collection("events"+dev).add({type:"login",email:email,loginId,loginDate}),saveSimulation1(!0)}var uiConfig={callbacks:{signInSuccessWithAuthResult:function(){return loggued(),!1},uiShown:function(){document.getElementById("loader-test").style.display="none"}},signInFlow:"popup",signInSuccessUrl:"",signInOptions:[{provider:firebase.auth.EmailAuthProvider.PROVIDER_ID,signInMethod:firebase.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD},firebase.auth.GoogleAuthProvider.PROVIDER_ID],tosUrl:"<your-tos-url>",privacyPolicyUrl:"<your-privacy-policy-url>"},dev="localhost"===window.location.hostname?"dev":"",variableTitleList=[{name:"nbDays",type:"number",initialValue:218,optim:!1},{name:"nbConsultant",type:"number",initialValue:75,optim:!1},{name:"TJM",type:"number",initialValue:550,optim:!1},{name:"CJM",type:"number",initialValue:350,optim:!1},{name:"ratioHires",type:"percent",initialValue:.15,optim:!1},{name:"ratioLeavers",type:"percent",initialValue:.1,optim:!1},{name:"avgTaskDays",type:"number",initialValue:100,optim:!1},{name:"ratioTaskRenewNum",type:"number",initialValue:2,optim:!1},{name:"ratioTaskRenewDenum",type:"number",initialValue:3,optim:!1},{name:"ratioTaskRenewDuration",type:"percent",initialValue:.5,optim:!1},{name:"ratioPTNum",type:"number",initialValue:1,optim:!1},{name:"ratioPTDenum",type:"number",initialValue:30,optim:!0,limit:1e4,limitType:"max"},{name:"avgDaysFirstStaffing",type:"number",initialValue:20,optim:!0,limit:5,limitType:"min"},{name:"taskDelay",type:"number",initialValue:30,optim:!0,limit:5,limitType:"min"},{name:"beginDelayed",type:"number",initialValue:7,optim:!0,limit:2,limitType:"min"},{name:"ratioBeginDelayed",type:"number",initialValue:9,optim:!0,limit:20,limitType:"max"},{name:"endBefore",type:"number",initialValue:10,optim:!0,limit:5,limitType:"min"},{name:"ratioEndBefore",type:"number",initialValue:19,optim:!0,limit:40,limitType:"max"},{name:"ratioShadowStaffing",type:"number",initialValue:30,optim:!0,limit:50,limitType:"max"},{name:"shadowStaffingDuration",type:"number",initialValue:20,optim:!0,limit:0,limitType:"min"}];const queryString=window.location.search,urlParams=new URLSearchParams(queryString);var eventId=urlParams.get("eventId");firebase.auth().onAuthStateChanged(a=>{a?(console.log("loggued"),document.getElementById("loader-test").style.display="none",loggued()):(console.log("not loggued"),ui.start("#firebaseui-auth-container",uiConfig))});var defaultDatabase=firebase.database(),db=firebase.firestore(),loginId=+new Date,loginDate=new Date;if(db.collection("view"+dev).add({loginId,loginDate}),eventId){var doc,docRef=db.collection("events"+dev).doc(eventId);docRef.get().then(function(a){a.exists?(a=a.data(),document.getElementById("defaultSimulationButton").style.display="none",document.getElementById("defaultResultButton").style.display="none",document.getElementById("defaultCompareButton").style.display="none",document.getElementById("simulationSentButton").style.display="block",document.getElementById("sharedKPIsTip").style.display="block",document.getElementById("sharedLeviersTip").style.display="block",init("",a.reference.variables),saveSimulation1WithLoader(!0)):console.log("No such document!")}).catch(function(a){console.log("Error getting document:",a)})}else document.getElementById("defaultKPIsTip").style.display="block",document.getElementById("defaultLeviersTip").style.display="block",init("");function init(a,b){for(const f in variableTitleList){var c=variableTitleList[f].name,d=variableTitleList[f].type,e=b?b[c]:variableTitleList[f].initialValue;document.getElementById(a+c).value="percent"===d?Math.round(100*(100*e))/100:e}}var nbDays,nbConsultant,TJM,CJM,ratioHires,ratioLeavers,avgDaysFirstStaffing,avgTaskDays,taskDelay,ratioTaskRenewNum,ratioTaskRenewDenum,ratioTaskRenewDuration,ratioBeginDelayed,beginDelayed,ratioEndBefore,endBefore,ratioPTNum,ratioPTDenum,ratioShadowStaffing,shadowStaffingDuration,nbUA,UAPrice,price;function getVariables(a){return nbConsultant=+document.getElementById(a+"nbConsultant").value,nbDays=+document.getElementById(a+"nbDays").value,TJM=+document.getElementById(a+"TJM").value,ratioHires=+document.getElementById(a+"ratioHires").value/100,ratioLeavers=+document.getElementById(a+"ratioLeavers").value/100,avgTaskDays=+document.getElementById(a+"avgTaskDays").value,avgDaysFirstStaffing=+document.getElementById(a+"avgDaysFirstStaffing").value,taskDelay=+document.getElementById(a+"taskDelay").value,CJM=+document.getElementById(a+"CJM").value,ratioTaskRenewNum=+document.getElementById(a+"ratioTaskRenewNum").value,ratioTaskRenewDenum=+document.getElementById(a+"ratioTaskRenewDenum").value,ratioPTNum=+document.getElementById(a+"ratioPTNum").value,ratioPTDenum=+document.getElementById(a+"ratioPTDenum").value,ratioTaskRenewDuration=+document.getElementById(a+"ratioTaskRenewDuration").value/100,ratioShadowStaffing=+document.getElementById(a+"ratioShadowStaffing").value,shadowStaffingDuration=+document.getElementById(a+"shadowStaffingDuration").value,beginDelayed=+document.getElementById(a+"beginDelayed").value,ratioBeginDelayed=+document.getElementById(a+"ratioBeginDelayed").value,endBefore=+document.getElementById(a+"endBefore").value,ratioEndBefore=+document.getElementById(a+"ratioEndBefore").value,nbUA=+nbConsultant/10,UAPrice=1440*(nbDays/218),price=nbUA*UAPrice,{nbConsultant,nbDays,TJM,ratioHires,ratioLeavers,avgTaskDays,avgDaysFirstStaffing,taskDelay,CJM,ratioTaskRenewNum,ratioTaskRenewDenum,ratioPTNum,ratioPTDenum,ratioTaskRenewDuration,beginDelayed,ratioBeginDelayed,endBefore,ratioEndBefore,ratioShadowStaffing,shadowStaffingDuration,nbUA,UAPrice,price}}function calculateTaskDays(a){var b;return b=1>=a%10&&4>=a%10?avgTaskDays:5==a%10||7==a%10?Math.floor(.8*avgTaskDays):6==a%10||8==a%10?Math.floor(1.2*avgTaskDays):9==a%10?Math.floor(1.5*avgTaskDays):Math.floor(.5*avgTaskDays),tempCurrentTaskDuration=a%ratioTaskRenewDenum>ratioTaskRenewNum-1?b:Math.floor((1+ratioTaskRenewDuration)*b),tempCurrentTaskDuration}function renderHeatmap(){showLoader(),document.getElementById("esnHeatmap").style.display="block",document.getElementById("heatmap").style.display="none",setTimeout(function(){heatmapChart.render(),hideLoader()},1)}function simulate(a){var b=getVariables(a||""),c=[],d=Math.floor(ratioHires*nbConsultant),e=Math.floor(ratioLeavers*nbConsultant),f=Math.floor(nbDays/d),g=Math.floor(nbDays/e),h=+nbConsultant+ +d,i=0,j=1,k=0,l=0,m=1,n=0,o=0;for(let b=0;b<h;b++){var p,q;d--;var r=0<=d?f*d:-1,s=nbDays+1;if(h-b<e){e--;var s=0<e?g*e:nbDays}i!==j&&(q=calculateTaskDays(j),i=j),l=b%q,n=l<=beginDelayed?l:beginDelayed;for(let a=1;a<=nbDays;a++){var t,u,q;i!==j&&(q=calculateTaskDays(j),i=j),a<r||a>s?(t=0,u="NOT WORKING"):0<=r&&a>=r&&a-r<avgDaysFirstStaffing?(t=1,u="ON BOARDING"):1<m&&k<taskDelay&&0==l?(k++,t=1,u="DELAY BETWEEN TASKS"):o<shadowStaffingDuration&&0==j%ratioShadowStaffing?(o++,t=1,u="SHADOW STAFFING"):n<beginDelayed&&0==j%ratioBeginDelayed?(n++,t=1,u="START DELAYED"):0==j%ratioEndBefore&&q-l<=endBefore?(t=1,u="END BEFORE",l++):(t=j%ratioPTDenum>ratioPTNum-1?1:.5,u="BILLABLE",l++),c.push({date:a,start:r,end:s,type:u,consultant:b,occupation:t,text:"Task count: "+j+"\nConsultant task count"+m+"\nTask workload: "+l}),l===q&&(j++,m++,k=0,n=0,o=0,l=0)}j++,k=0,n=0,o=0,l=0,m=1,p=b}var v=crossfilter(c),w=v.dimension(function(a){return[+a.date,a.consultant,a]}),x=w.group().reduceSum(function(a){return+a.occupation}),y=13*nbDays,z=13*h;heatmapChart.width(y).height(z).transitionDuration(0).dimension(w).group(x).xBorderRadius(0).yBorderRadius(0).keyAccessor(function(a){return+a.key[0]}).valueAccessor(function(a){return+a.key[1]}).rowsLabel(function(){return""}).colsLabel(function(a){return 1==a||a==nbDays||0==a%10?a:""}).title(function(a){return"Date:   "+a.key[0]+"\nConsultant:  "+a.key[1]+"\nType : "+a.key[2].type+"\noccupation: "+a.value+"\nTask : "+a.key[2].text}).colorAccessor(a=>"BILLABLE"===a.key[2].type&&1>a.value&&"PART TIME"||a.key[2].type).colors(d3.scaleOrdinal().domain(["NOT WORKING","ON BOARDING","DELAY BETWEEN TASKS","SHADOW STAFFING","START DELAYED","END BEFORE","PART TIME","BILLABLE"]).range(["#cfcfcf","#9c6102","#FFBE3E","#3c3c3c","#ff7600","#ee0700","#6285c9","#0048B5"])),heatmapChart.margins({top:20,right:0,bottom:20,left:0}),heatmapChart.on("renderlet",function(a){var b=a.selectAll("rect"),c=1e4,d=1e4;for(let e of b)e.y.baseVal.value<c&&(c=e.y.baseVal.value),e.x.baseVal.value<d&&(d=e.x.baseVal.value);a.selectAll("g.cols.axis > text").attr("y",c-14),a.select("g.heatmap").attr("transform","translate(0, 0)"),a.select("svg").attr("width",y+100).attr("height",z+100)}),300>=h?(heatmapChart.render(),document.getElementById("heatmap").style.display="none"):(document.getElementById("heatmap").style.display="initial",document.getElementById("esnHeatmap").style.display="none"),kpiDim=v.dimension(function(){return 1});var A=kpiDim.groupAll().reduce((a,b)=>(a.numTACE+="BILLABLE"===b.type&&b.occupation||0,a.denumTACE+="NOT WORKING"!==b.type&&1||0,a.interco+="BILLABLE"===b.type&&1===b.occupation?0:b.occupation,a.missionDelay+="DELAY BETWEEN TASKS"===b.type&&b.occupation||0,a.onBoarding+="ON BOARDING"===b.type&&b.occupation||0,a.shadowStaffing+="SHADOW STAFFING"===b.type&&b.occupation||0,a.leanStart+="START DELAYED"===b.type&&b.occupation||0,a.leanBack+="END BEFORE"===b.type&&b.occupation||0,a.leanPT+="BILLABLE"===b.type&&1-b.occupation||0,a.TACE=0<a.denumTACE?a.numTACE/a.denumTACE:0,a.CA=a.numTACE*TJM,a.intercoCA=a.interco*TJM,a.intercoCost=a.interco*CJM,a.missionDelayCA=a.missionDelay*TJM,a.missionDelayCost=a.missionDelay*CJM,a.onBoardingCA=a.onBoarding*TJM,a.onBoardingCost=a.onBoarding*CJM,a.shadowStaffingCA=a.shadowStaffing*TJM,a.shadowStaffingCost=a.shadowStaffing*CJM,a.leanStartCA=a.leanStart*TJM,a.leanStartCost=a.leanStart*CJM,a.leanBackCA=a.leanBack*TJM,a.leanBackCost=a.leanBack*CJM,a.leanPTCA=a.leanPT*TJM,a.leanPTCost=a.leanPT*CJM,a.totalCost=a.denumTACE*CJM,a.totalTaskCount=j,a.initialConsultant=nbConsultant,a.hires=Math.floor(ratioHires*nbConsultant),a.leavers=Math.floor(ratioLeavers*nbConsultant),a),(a,b)=>(a.numTACE-="BILLABLE"===b.type&&b.occupation||0,a.denumTACE-="NOT WORKING"!==b.type&&1||0,a.interco-="BILLABLE"===b.type&&1===b.occupation?0:b.occupation,a.missionDelay-="DELAY BETWEEN TASKS"===b.type&&b.occupation||0,a.onBoarding-="ON BOARDING"===b.type&&b.occupation||0,a.shadowStaffing-="SHADOW STAFFING"===b.type&&b.occupation||0,a.leanStart-="START DELAYED"===b.type&&b.occupation||0,a.leanBack-="END BEFORE"===b.type&&b.occupation||0,a.leanPT-="BILLABLE"===b.type&&1-b.occupation||0,a.TACE=0<a.denumTACE?a.numTACE/a.denumTACE:0,a.CA=a.numTACE*TJM,a.intercoCA=a.interco*TJM,a.intercoCost=a.interco*CJM,a.missionDelayCA=a.missionDelay*TJM,a.missionDelayCost=a.missionDelay*CJM,a.onBoardingCA=a.onBoarding*TJM,a.onBoardingCost=a.onBoarding*CJM,a.shadowStaffingCA=a.shadowStaffing*TJM,a.shadowStaffingCost=a.shadowStaffing*CJM,a.leanStartCA=a.leanStart*TJM,a.leanStartCost=a.leanStart*CJM,a.leanBackCA=a.leanBack*TJM,a.leanBackCost=a.leanBack*CJM,a.leanPTCA=a.leanPT*TJM,a.leanPTCost=a.leanPT*CJM,a.totalCost=a.denumTACE*CJM,a.totalTaskCount=j,a.initialConsultant=nbConsultant,a.hires=Math.floor(ratioHires*nbConsultant),a.leavers=Math.floor(ratioLeavers*nbConsultant),a),()=>({numTACE:0,denumTACE:0,TACE:0,interco:0,onBoarding:0,leanStart:0,leanBack:0,leanPT:0,CA:0,intercoCA:0,intercoCost:0,missionDelay:0,missionDelayCA:0,missionDelayCost:0,onBoardingCA:0,onBoardingCost:0,leanStartCA:0,leanStartCost:0,leanBackCA:0,leanBackCost:0,leanPTCA:0,leanPTCost:0,shadowStaffing:0,shadowStaffingCA:0,shadowStaffingCost:0,totalCost:0,totalTaskCount:0,initialConsultant:0,hires:0,leavers:0})),B=new dc.NumberDisplay("#esnNumberTACE").formatNumber(d3.format(".2%")).valueAccessor(a=>a.TACE).group(A).render(),C=new dc.NumberDisplay("#esnNumberBillable").formatNumber(d3.format(",.0f")).valueAccessor(a=>a.numTACE).group(A).render(),D=new dc.NumberDisplay("#esnCA").formatNumber(d3.format(".3s")).valueAccessor(a=>a.CA).group(A).render(),D=new dc.NumberDisplay("#esnCAbyConsultant").formatNumber(d3.format(".3s")).valueAccessor(a=>a.CA/(a.initialConsultant+a.hires)).group(A).render(),E=new dc.NumberDisplay("#esnInterco").formatNumber(d3.format(",.0f")).valueAccessor(a=>a.interco).group(A).render(),F=new dc.NumberDisplay("#esnIntercoCA").formatNumber(d3.format(".3s")).valueAccessor(a=>a.intercoCA).group(A).render(),G=new dc.NumberDisplay("#esnIntercoCost").formatNumber(d3.format(".3s")).valueAccessor(a=>a.intercoCost).group(A).render(),H=new dc.NumberDisplay("#esnMissionDelay").formatNumber(d3.format(",.0f")).valueAccessor(a=>a.missionDelay).group(A).render(),I=new dc.NumberDisplay("#esnMissionDelayCA").formatNumber(d3.format(".3s")).valueAccessor(a=>a.missionDelayCA).group(A).render(),J=new dc.NumberDisplay("#esnMissionDelayCost").formatNumber(d3.format(".3s")).valueAccessor(a=>a.missionDelayCost).group(A).render(),K=new dc.NumberDisplay("#esnOnBoarding").formatNumber(d3.format(",.0f")).valueAccessor(a=>a.onBoarding).group(A).render(),L=new dc.NumberDisplay("#esnOnBoardingCA").formatNumber(d3.format(".3s")).valueAccessor(a=>a.onBoardingCA).group(A).render(),M=new dc.NumberDisplay("#esnOnBoardingCost").formatNumber(d3.format(".3s")).valueAccessor(a=>a.onBoardingCost).group(A).render(),N=new dc.NumberDisplay("#esnShadowStaffing").formatNumber(d3.format(",.0f")).valueAccessor(a=>a.shadowStaffing).group(A).render(),O=new dc.NumberDisplay("#esnShadowStaffingCA").formatNumber(d3.format(".3s")).valueAccessor(a=>a.shadowStaffingCA).group(A).render(),P=new dc.NumberDisplay("#esnShadowStaffingCost").formatNumber(d3.format(".3s")).valueAccessor(a=>a.shadowStaffingCost).group(A).render(),Q=new dc.NumberDisplay("#esnLeanStart").formatNumber(d3.format(",.0f")).valueAccessor(a=>a.leanStart).group(A).render(),O=new dc.NumberDisplay("#esnLeanStartCA").formatNumber(d3.format(".3s")).valueAccessor(a=>a.leanStartCA).group(A).render(),P=new dc.NumberDisplay("#esnLeanStartCost").formatNumber(d3.format(".3s")).valueAccessor(a=>a.leanStartCost).group(A).render(),R=new dc.NumberDisplay("#esnLeanBack").formatNumber(d3.format(",.0f")).valueAccessor(a=>a.leanBack).group(A).render(),S=new dc.NumberDisplay("#esnLeanBackCA").formatNumber(d3.format(".3s")).valueAccessor(a=>a.leanBackCA).group(A).render(),T=new dc.NumberDisplay("#esnLeanBackCost").formatNumber(d3.format(".3s")).valueAccessor(a=>a.leanBackCost).group(A).render(),U=new dc.NumberDisplay("#esnLeanPT").formatNumber(d3.format(",.0f")).valueAccessor(a=>a.leanPT).group(A).render(),V=new dc.NumberDisplay("#esnLeanPTCA").formatNumber(d3.format(".3s")).valueAccessor(a=>a.leanPTCA).group(A).render(),W=new dc.NumberDisplay("#esnLeanPTCost").formatNumber(d3.format(".3s")).valueAccessor(a=>a.leanPTCost).group(A).render(),X=new dc.NumberDisplay("#esnWhozCost").formatNumber(d3.format(".3s")).valueAccessor(()=>price).group(A).render(),T=new dc.NumberDisplay("#esnTotalCost").formatNumber(d3.format(".3s")).valueAccessor(a=>a.totalCost).group(A).render(),Y=new dc.NumberDisplay("#esnGlobalMargin").formatNumber(d3.format(".2%")).valueAccessor(a=>(a.CA-a.totalCost)/a.CA).group(A).render(),Z=new dc.NumberDisplay("#esnConsultantCount").formatNumber(d3.format(".0f")).valueAccessor(a=>a.initialConsultant-a.leavers+a.hires).group(A).render(),$=new dc.NumberDisplay("#esnMissionCount").formatNumber(d3.format(".3s")).valueAccessor(a=>a.totalTaskCount).group(A).render();return{result:A.value(),variables:b}}var simulation1,simulation2;function showLoader(){document.getElementById("esn-loader").classList.add("is-active")}function hideLoader(){document.getElementById("esn-loader").classList.remove("is-active")}function saveSimulation1WithLoader(){showLoader(),setTimeout(function(){saveSimulation1(),hideLoader()},1)}function saveSimulation2WithLoader(a){showLoader(),setTimeout(function(){saveSimulation2(a),hideLoader()},1)}function saveSimulation1(a){a||(document.getElementById("defaultKPIsTip").style.display="none",document.getElementById("defaultLeviersTip").style.display="none"),connected&&(simulation1=simulate(),document.getElementById("simulationType").textContent="Les KPIs du sc\xE9nario de R\xE9f\xE9rence (R)",simulation1&&simulation2?compare("simulation1"):(db.collection("whoz"+dev).doc(user?.email||dev).collection("simulate").add({email:user?.email||dev,loginId,loginDate,createdAt:firebase.firestore.FieldValue.serverTimestamp(),reference:simulation1}),db.collection("events"+dev).add({type:"simulation1",email:user?.email||dev,loginId,loginDate,createdAt:firebase.firestore.FieldValue.serverTimestamp(),reference:simulation1}))),hideLoader()}function optim(a,b){for(const c in variableTitleList){var d=variableTitleList[c].optim,e=variableTitleList[c].name,f=variableTitleList[c].limitType,g=variableTitleList[c].limit,h=variableTitleList[c].type,i=simulation1.variables[e];if(!(!0===d))document.getElementById("c"+e).value="percent"===h?100*i:i;else if("min"===f){var j=Math.max(Math.min(i*(1-a),i),g);document.getElementById("c"+e).value=Math.round("percent"===h?100*j:j)}else{var j=Math.min(Math.max(i*(1+a),i),g);document.getElementById("c"+e).value=Math.round("percent"===h?100*j:j)}}saveSimulation2WithLoader(b)}function optimFast(){optim(.3,"fast")}function optimHard(){optim(.5,"strong")}function saveSimulation2(a){document.getElementById("sharedKPIsTip").style.display="none",document.getElementById("sharedLeviersTip").style.display="none","simulationSentButton"!=a&&(document.getElementById("defaultResultButton").style.display="block"),connected&&(simulation2=simulate("c"),document.getElementById("simulationType").textContent="Les KPIs du sc\xE9nario Cible (C)",simulation1&&simulation2&&compare(a||"compare"))}function compare(a){for(const e in console.log(simulation1,simulation2),variableTitleList){var b=variableTitleList[e].name,c=simulation1.variables[b],d=simulation2.variables[b];c==d?(document.getElementById(b+"Hint").textContent="",document.getElementById("c"+b+"Hint").textContent=""):(document.getElementById(b+"Hint").textContent=" C="+d,document.getElementById("c"+b+"Hint").textContent="R="+c)}const e=document.querySelector(".resultCompare");e.classList.replace("hideCompare","showCompare");var f=crossfilter({id:1}),g=f.dimension(function(a){return a.id}),h=g.groupAll().reduceCount(),i=new dc.NumberDisplay("#compareCA").formatNumber(d3.format("+.3s")).valueAccessor(()=>simulation2.result.CA-simulation1.result.CA).group(h).render(),j=new dc.NumberDisplay("#compareMission").formatNumber(d3.format("+.0f")).valueAccessor(()=>simulation2.result.totalTaskCount-simulation1.result.totalTaskCount).group(h).render(),k=new dc.NumberDisplay("#compareMargin").formatNumber(d3.format("+.2f")).valueAccessor(()=>100*((simulation2.result.CA-simulation2.result.totalCost)/simulation2.result.CA-(simulation1.result.CA-simulation1.result.totalCost)/simulation1.result.CA)).group(h).render(),l=new dc.NumberDisplay("#compareIntercoCost").formatNumber(d3.format("+.3s")).valueAccessor(()=>simulation2.result.intercoCost-simulation1.result.intercoCost).group(h).render(),m=new dc.NumberDisplay("#compareBillable").formatNumber(d3.format("+.3s")).valueAccessor(()=>simulation2.result.numTACE-simulation1.result.numTACE).group(h).render(),n=new dc.NumberDisplay("#compareCAByConsultant").formatNumber(d3.format("+.3s")).valueAccessor(()=>simulation2.result.CA/(simulation2.result.initialConsultant+simulation2.result.hires)-simulation1.result.CA/(simulation1.result.initialConsultant+simulation1.result.hires)).group(h).render(),k=new dc.NumberDisplay("#compareTACE").formatNumber(d3.format("+.2f")).valueAccessor(()=>100*(simulation2.result.numTACE/simulation2.result.denumTACE-simulation1.result.numTACE/simulation1.result.denumTACE)).group(h).render(),o=new dc.NumberDisplay("#esnWhozROI").formatNumber(d3.format("+.0s")).valueAccessor(()=>0<simulation2.result.CA-simulation1.result.CA?Math.ceil(simulation2.variables.price/((simulation2.result.CA-simulation1.result.CA)/simulation2.variables.nbDays)/18):0).group(h).render();db.collection("whoz"+dev).doc(user?.email||dev).collection("compare").add({email:user?.email||dev,loginId,loginDate,createdAt:firebase.firestore.FieldValue.serverTimestamp(),reference:simulation1,target:simulation2,fromAction:a}),db.collection("events"+dev).add({type:"compare",fromAction:a,email:user?.email||dev,loginId,loginDate,createdAt:firebase.firestore.FieldValue.serverTimestamp(),reference:simulation1,target:simulation2}).then(b=>{"simulationSentButton"!=a&&(eventId=b.id,url=window.location.href+"?eventId="+eventId,document.getElementById("share").style.display="flex",document.getElementById("urlToShare").innerHTML=window.location.href.split("?")[0]+"?eventId="+eventId)})}function launchCompareFrom(){docRef.get().then(function(a){a.exists&&(a=a.data(),document.getElementById("tab-2").click(),init("c",a.target.variables),document.getElementById("defaultSimulationButton").style.display="flex",document.getElementById("defaultCompareButton").style.display="flex",document.getElementById("simulationSentButton").style.display="none",saveSimulation2WithLoader("simulationSentButton"))})}function copyToClipboard(a){var b=document.createElement("input");b.setAttribute("value",document.getElementById(a).innerHTML),document.body.appendChild(b),b.select(),document.execCommand("copy"),document.body.removeChild(b)}function hideDescription(){document.getElementById("whozup-description").style.display="none",document.getElementById("showDescription").style.display="block",document.getElementById("hideDescription").style.display="none"}function showDescription(){document.getElementById("whozup-description").style.display="block",document.getElementById("showDescription").style.display="none",document.getElementById("hideDescription").style.display="block"}
