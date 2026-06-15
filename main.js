/* Legal Nurse Jeanie — shared scripts */

// Mobile nav toggle
(function(){
  var nav = document.querySelector('.nav');
  var btn = document.querySelector('.nav-toggle');
  if(btn && nav){
    btn.addEventListener('click', function(){
      nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', nav.classList.contains('open'));
    });
  }
})();

// Scroll reveal
(function(){
  var els = document.querySelectorAll('.reveal');
  if(!('IntersectionObserver' in window) || !els.length){
    els.forEach(function(e){ e.classList.add('in'); });
    return;
  }
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(en){
      if(en.isIntersecting){ en.target.classList.add('in'); io.unobserve(en.target); }
    });
  }, { threshold:0.12, rootMargin:'0px 0px -8% 0px' });
  els.forEach(function(e){ io.observe(e); });
  // Failsafe: if anything is still hidden after 2s, reveal it.
  setTimeout(function(){ els.forEach(function(e){ e.classList.add('in'); }); }, 2000);
})();

// Attorney inquiry form -> mailto
(function(){
  var form = document.getElementById('attorney-form');
  if(!form) return;
  form.addEventListener('submit', function(e){
    e.preventDefault();
    var v = function(id){ var el=document.getElementById(id); return el ? el.value.trim() : ''; };
    var first=v('a-first'), last=v('a-last'), email=v('a-email'),
        phone=v('a-phone'), firm=v('a-firm'), msg=v('a-msg');
    var name=(first+' '+last).trim();
    var sub = encodeURIComponent('Attorney inquiry — ' + name + (firm ? ' (' + firm + ')' : ''));
    var body = encodeURIComponent(
      'Name: ' + name +
      '\nEmail: ' + email +
      '\nPhone: ' + phone +
      '\nLaw firm: ' + firm +
      '\n\nHow can I help:\n' + (msg || 'Not provided')
    );
    window.location.href = 'mailto:contact@legalnursejeanie.com?subject=' + sub + '&body=' + body;
  });
})();

// Nurse application form -> mailto
(function(){
  var form = document.getElementById('nurse-form');
  if(!form) return;
  form.addEventListener('submit', function(e){
    e.preventDefault();
    var v = function(id){ var el=document.getElementById(id); return el ? el.value.trim() : ''; };
    var name=v('n-name'), cred=v('n-cred'), lic=v('n-lic'), phone=v('n-phone'),
        email=v('n-email'), spec=v('n-spec'), exp=v('n-exp');
    var sub = encodeURIComponent('Nurse Application — ' + name + (cred ? ', ' + cred : ''));
    var body = encodeURIComponent(
      'Name: ' + name +
      '\nCredentials: ' + cred +
      '\nLicense / state: ' + lic +
      '\nPhone: ' + phone +
      '\nEmail: ' + email +
      '\nSpecialty: ' + spec +
      '\n\nExperience & why interested:\n' + (exp || 'Not provided')
    );
    window.location.href = 'mailto:contact@legalnursejeanie.com?subject=' + sub + '&body=' + body;
  });
})();
