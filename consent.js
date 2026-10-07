(function(){
var K='lpo_cookie_consent',banner=null;
function get(){var m=document.cookie.match(/(?:^|; )lpo_cookie_consent=([^;]*)/);return m?m[1]:null}
function set(v){document.cookie=K+'='+v+'; max-age=15552000; path=/; SameSite=Lax'+(location.protocol==='https:'?'; Secure':'')}
function loadMaps(){document.querySelectorAll('[data-map]').forEach(function(w){var f=w.querySelector('iframe[data-src]');if(f&&f.getAttribute('src')!==f.dataset.src)f.src=f.dataset.src;w.classList.add('map-on')})}
function unloadMaps(){document.querySelectorAll('[data-map]').forEach(function(w){var f=w.querySelector('iframe[data-src]');if(f&&f.getAttribute('src'))f.removeAttribute('src');w.classList.remove('map-on')})}
function choose(v){set(v);if(v==='accepted')loadMaps();else unloadMaps();if(banner)banner.hidden=true}
function showBanner(){
if(!banner){banner=document.createElement('div');banner.className='cookie-banner';banner.setAttribute('role','dialog');banner.setAttribute('aria-label','Preferenze cookie');
banner.innerHTML='<button type="button" class="cb-x" aria-label="Chiudi e rifiuta">&times;</button><h2>Questo sito usa i cookie</h2><p>Usiamo solo cookie tecnici necessari al funzionamento del sito. Con il tuo consenso carichiamo anche la mappa di Google Maps, che può installare cookie di terze parti. Puoi cambiare idea in qualsiasi momento da "Preferenze cookie" in fondo alla pagina. Maggiori informazioni nella <a href="cookie.html">Cookie Policy</a>.</p><div class="cb-azioni"><button type="button" class="btn btn-contorno" data-cb="rejected">Rifiuta</button><button type="button" class="btn btn-oro" data-cb="accepted">Accetta</button></div>';
banner.addEventListener('click',function(e){var b=e.target.closest('[data-cb]');if(b)choose(b.dataset.cb);if(e.target.closest('.cb-x'))choose('rejected')});
document.body.appendChild(banner)}
banner.hidden=false}
document.addEventListener('click',function(e){
if(e.target.closest('[data-show-map]'))choose('accepted');
if(e.target.closest('[data-cookie-prefs]'))showBanner()});
var v=get();if(v==='accepted')loadMaps();else if(!v)showBanner();
})();
