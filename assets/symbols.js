
(function(){
  var KEY='syg-sym-recent';
  function rec(){try{return JSON.parse(localStorage.getItem(KEY)||'[]')}catch(e){return[]}}
  function push(c,n){var l=[[c,n]].concat(rec().filter(function(x){return x[0]!==c})).slice(0,24);try{localStorage.setItem(KEY,JSON.stringify(l))}catch(e){}}
  function cp(c){return c.codePointAt(0)}
  function show(c,n,e,u){var i=document.getElementById('info');if(!i)return;i.hidden=false;var h=cp(c).toString(16).toUpperCase();while(h.length<4)h='0'+h;
    i.querySelector('.g').textContent=c;i.querySelector('.t b').textContent=n;i.querySelector('.t span').textContent='U+'+h+'  ·  HTML '+(e?'&'+e+';  or  ':'')+'&#'+cp(c)+';';
    var a=i.querySelector('a');if(u){a.hidden=false;a.href=u}else a.hidden=true}
  function btn(c,n){var b=document.createElement('button');b.type='button';b.textContent=c;b.setAttribute('data-n',n);b.setAttribute('aria-label','Copy '+n);b.title=n;return b}
  document.addEventListener('click',function(e){var b=e.target.closest('.sy button');if(!b)return;var c=b.textContent,n=b.getAttribute('data-n');
    SYG.copy(c,'Copied '+c);push(c,n);show(c,n,b.getAttribute('data-e'),b.getAttribute('data-u'));
    document.querySelectorAll('.sy button.on').forEach(function(x){x.classList.remove('on')});b.classList.add('on')});
  var r=document.getElementById('recent');
  if(r){var l=rec();if(l.length){r.hidden=false;var ul=r.querySelector('ul');l.forEach(function(x){var li=document.createElement('li');li.appendChild(btn(x[0],x[1]));ul.appendChild(li)})}}
  var q=document.getElementById('sq'),out=document.getElementById('sres'),D=null;
  if(q){var run=function(){var v=q.value.trim().toLowerCase();if(!v){out.hidden=true;return}
      var hit=D.filter(function(x){return x[0]===q.value.trim()||x[1].indexOf(v)>-1||(x[2]&&x[2].indexOf(v)>-1)}).slice(0,120);out.hidden=false;var ul=out.querySelector('ul');ul.innerHTML='';
      out.querySelector('p').textContent=hit.length?hit.length+(hit.length===120?'+':'')+' symbols. Tap one to copy it.':'No symbol with that name here. Try a simpler word, such as "arrow", "star" or "heart".';
      hit.forEach(function(x){var li=document.createElement('li');li.appendChild(btn(x[0],x[1]));ul.appendChild(li)})};
    q.addEventListener('input',function(){if(D)run();else if(!q.dataset.l){q.dataset.l=1;SYG.json('/data/s.json').then(function(d){D=d;run()})}})}
})();
