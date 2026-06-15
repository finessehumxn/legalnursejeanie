/* Legal Nurse Jeanie — shared scripts */

/* =====================================================================
   FORM DELIVERY — set this so submissions email Jeanie automatically.
   1. Create a free form at https://formspree.io (use contact@legalnursejeanie.com)
   2. Copy your form ID and replace YOUR_FORM_ID below.
   Until then, the form falls back to opening the visitor's email app.
   ===================================================================== */
var FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

/* mobile nav */
(function(){
  var nav=document.querySelector('.nav'), btn=document.querySelector('.nav-toggle');
  if(btn&&nav){btn.addEventListener('click',function(){nav.classList.toggle('open');btn.setAttribute('aria-expanded',nav.classList.contains('open'));});}
})();

/* scroll reveal */
(function(){
  var els=document.querySelectorAll('.reveal');
  if(!('IntersectionObserver' in window)||!els.length){els.forEach(function(e){e.classList.add('in');});return;}
  var io=new IntersectionObserver(function(en){en.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target);}});},{threshold:0.12,rootMargin:'0px 0px -8% 0px'});
  els.forEach(function(e){io.observe(e);});
  setTimeout(function(){els.forEach(function(e){e.classList.add('in');});},2000);
})();

function v(id){var el=document.getElementById(id);return el?el.value.trim():'';}

function submitForm(formId, getPayload){
  var form=document.getElementById(formId); if(!form) return;
  var status=document.getElementById(formId+'-status');
  function setStatus(cls,html){ if(status){status.className='form-status '+cls; status.innerHTML=html;} }
  function emailFallback(p){
    var href='mailto:contact@legalnursejeanie.com?subject='+encodeURIComponent(p.subject)+'&body='+encodeURIComponent(p.body);
    setStatus('warn','Opening your email app as a backup — if nothing happens, email <a href="'+href+'">contact@legalnursejeanie.com</a>.');
    window.location.href=href;
  }
  form.addEventListener('submit',function(e){
    e.preventDefault();
    var p=getPayload();
    if(FORMSPREE_ENDPOINT.indexOf('YOUR_FORM_ID')!==-1){ emailFallback(p); return; }
    setStatus('sending','Sending…');
    var fd=new FormData();
    Object.keys(p.fields).forEach(function(k){fd.append(k,p.fields[k]);});
    fd.append('_subject',p.subject);
    fetch(FORMSPREE_ENDPOINT,{method:'POST',body:fd,headers:{'Accept':'application/json'}})
      .then(function(r){
        if(r.ok){ setStatus('ok','Thank you — your message has been sent. I\u2019ll be in touch shortly.'); form.reset(); }
        else { emailFallback(p); }
      })
      .catch(function(){ emailFallback(p); });
  });
}

submitForm('attorney-form',function(){
  var first=v('a-first'),last=v('a-last'),email=v('a-email'),phone=v('a-phone'),firm=v('a-firm'),msg=v('a-msg');
  var name=(first+' '+last).trim();
  return {
    fields:{Name:name,email:email,Phone:phone,'Law firm':firm,Message:(msg||'Not provided')},
    subject:'Attorney inquiry — '+name+(firm?' ('+firm+')':''),
    body:'Name: '+name+'\nEmail: '+email+'\nPhone: '+phone+'\nLaw firm: '+firm+'\n\nHow can I help:\n'+(msg||'Not provided')
  };
});

submitForm('nurse-form',function(){
  var name=v('n-name'),cred=v('n-cred'),lic=v('n-lic'),spec=v('n-spec'),phone=v('n-phone'),email=v('n-email'),exp=v('n-exp');
  return {
    fields:{Application:'Nurse',Name:name,Credentials:cred,'License/state':lic,Specialty:spec,Phone:phone,email:email,Experience:(exp||'Not provided')},
    subject:'Nurse application — '+name+(cred?', '+cred:''),
    body:'Name: '+name+'\nCredentials: '+cred+'\nLicense/state: '+lic+'\nSpecialty: '+spec+'\nPhone: '+phone+'\nEmail: '+email+'\n\nExperience:\n'+(exp||'Not provided')
  };
});

/* =====================================================================
   SCHEDULING (optional): paste a Calendly (or similar) link to turn on
   "Schedule a call" buttons. Leave empty to hide them.
   ===================================================================== */
var CALENDLY_URL = "https://calendly.com/nursejeanielegal/15min";
(function(){
  if(!CALENDLY_URL) return;
  document.querySelectorAll('.calendly-link').forEach(function(a){ a.href=CALENDLY_URL; a.style.display=''; });
})();
