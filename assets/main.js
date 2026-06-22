document.addEventListener('DOMContentLoaded',function(){
  var ham=document.querySelector('.nav-hamburger');
  var links=document.querySelector('.nav-links');
  if(ham&&links){
    ham.addEventListener('click',function(){
      var open=links.classList.toggle('nav-open');
      Object.assign(links.style,open?{display:'flex',flexDirection:'column',position:'absolute',top:'64px',left:'0',right:'0',background:'#fff',padding:'1rem 5%',gap:'1rem',zIndex:'199',borderBottom:'1px solid #E7E7E0',boxShadow:'0 8px 24px rgba(30,41,59,0.1)'}:{display:'none'});
    });
  }
  var path=window.location.pathname;
  document.querySelectorAll('.nav-links a').forEach(function(a){
    var href=a.getAttribute('href')||'';
    if(href!=='/'&&path.startsWith(href.replace(/\/index\.html$/,''))){a.classList.add('active');}
  });
});
function toggleFaq(btn){
  var item=btn.closest('.faq-item');
  var isOpen=item.classList.contains('open');
  document.querySelectorAll('.faq-item.open').forEach(function(i){i.classList.remove('open');});
  if(!isOpen)item.classList.add('open');
}
function submitLead(e,formId,successId){
  e.preventDefault();
  var f=document.getElementById(formId);
  var s=document.getElementById(successId);
  if(f)f.style.display='none';
  if(s)s.style.display='block';
}
