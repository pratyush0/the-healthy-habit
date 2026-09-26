const WA='918598824098';
document.getElementById('year').textContent=new Date().getFullYear();
const modal=document.getElementById('orderModal'), title=document.getElementById('modalTitle'), sub=document.getElementById('modalSub'), qty=document.getElementById('qty');let selected='';
function openOrder(item,price){selected=item;title.textContent=item;sub.textContent=`${price} · Choose your quantity and continue on WhatsApp.`;modal.classList.add('open');qty.focus()}
document.querySelectorAll('[data-product]').forEach(b=>b.addEventListener('click',()=>openOrder(b.dataset.product,b.dataset.price)));
document.querySelectorAll('[data-plan]').forEach(b=>b.addEventListener('click',()=>openOrder('Subscription',b.dataset.plan)));
document.getElementById('sendOrder').addEventListener('click',()=>{const message=selected==='Subscription'?`Hi The Healthy Habit! I want to enquire about the ${document.getElementById('modalTitle').textContent} — ${document.getElementById('modalSub').textContent}. Quantity: ${qty.value}. Please share the next steps.`:`Hi The Healthy Habit! I want to order ${selected}. Quantity: ${qty.value}. Please confirm availability and delivery.`;window.open(`https://wa.me/${WA}?text=${encodeURIComponent(message)}`,'_blank');modal.classList.remove('open')});
document.querySelector('.close').addEventListener('click',()=>modal.classList.remove('open'));modal.addEventListener('click',e=>{if(e.target===modal)modal.classList.remove('open')});document.addEventListener('keydown',e=>{if(e.key==='Escape')modal.classList.remove('open')});
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
