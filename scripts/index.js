const e=document.querySelector(".container"),t=document.querySelector("button"),l=document.querySelector(".winner");function r(){e.innerHTML="",l.classList.add("hidden");const{Engine:t,Render:r,Runner:n,World:a,Bodies:i,Body:o,Events:c}=Matter,d=window.innerWidth,s=window.innerHeight,y=d/36,f=d/24,h=t.create();h.world.gravity.y=0;const{world:u}=h,g=r.create({element:e,engine:h,options:{wireframes:!1,width:d,height:s}});r.run(g),n.run(n.create(),h);const S=[i.rectangle(d/2,0,d,2,{isStatic:!0}),i.rectangle(d/2,s,d,2,{isStatic:!0}),i.rectangle(0,s/2,2,s,{isStatic:!0}),i.rectangle(d,s/2,2,s,{isStatic:!0})];a.add(u,S);const m=Array(24).fill(null).map(()=>Array(36).fill(!1)),w=Array(24).fill(null).map(()=>Array(35).fill(!1)),b=Array(23).fill(null).map(()=>Array(36).fill(!1)),E=Math.floor(24*Math.random()),M=Math.floor(36*Math.random()),p=(e,t)=>{if(m[e][t])return;m[e][t]=!0;const l=(e=>{let t=e.length;for(;t>0;){const l=Math.floor(Math.random()*t);t--;const r=e[t];e[t]=e[l],e[l]=r}return e})([[e-1,t,"up"],[e,t+1,"right"],[e+1,t,"down"],[e,t-1,"left"]]);for(let r of l){const[l,n,a]=r;l<0||l>=24||n<0||n>=36||(m[l][n]||("up"===a?b[e-1][t]=!0:"down"===a?b[e][t]=!0:"left"===a?w[e][t-1]=!0:"right"===a&&(w[e][t]=!0),p(l,n)))}};p(E,M),b.forEach((e,t)=>{e.forEach((e,l)=>{if(e)return;const r=i.rectangle(l*y+y/2,t*f+f,y,3,{label:"wall",isStatic:!0,render:{fillStyle:"red"}});a.add(u,r)})}),w.forEach((e,t)=>{e.forEach((e,l)=>{if(e)return;const r=i.rectangle(l*y+y,t*f+f/2,3,f,{label:"wall",isStatic:!0,render:{fillStyle:"red"}});a.add(u,r)})});const v=.7*Math.min(y,f),A=i.rectangle(d-y/2,s-f/2,v,v,{isStatic:!0,label:"goal",render:{fillStyle:"green"}});a.add(u,A);const x=Math.min(y,f)/4,L=i.circle(y/2,f/2,x,{label:"ball",render:{fillStyle:"blue"}});a.add(u,L),document.addEventListener("keydown",({keyCode:e})=>{const{x:t,y:l}=L.velocity;87===e&&o.setVelocity(L,{x:t,y:l-5}),68===e&&o.setVelocity(L,{x:t+5,y:l}),83===e&&o.setVelocity(L,{x:t,y:l+5}),65===e&&o.setVelocity(L,{x:t-5,y:l})}),c.on(h,"collisionStart",e=>{e.pairs.forEach(e=>{const t=["ball","goal"];t.includes(e.bodyA.label)&&t.includes(e.bodyB.label)&&(l.classList.remove("hidden"),u.gravity.y=1,u.bodies.forEach(e=>{"wall"===e.label&&o.setStatic(e,!1)}))})})}t.addEventListener("click",r),r();