fetch('templates.json').then(r=>r.json()).then(data=>{
const box=document.getElementById('templates');
if(box){
box.innerHTML=data.map(t=>`<div class='card'><img src='${t.image}'><h3>${t.title}</h3><a href='${t.link}' target='_blank'>Use Template</a></div>`).join('');
}
});