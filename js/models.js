
export async function loadModelOrProxy(scene, hostSelector, manifestId){
  try{
    const res = await fetch('../assets/models/models_manifest.json');
    const man = await res.json();
    const item = man.models.find(m=>m.id===manifestId);
    if(!item) throw new Error('Manifest item not found '+manifestId);
    const path = '../' + item.expected;
    // Try to fetch the GLB (HEAD)
    const ok = await fetch(path, {method:'HEAD'}).then(r=>r.ok).catch(()=>false);
    const host = document.querySelector(hostSelector);
    if(!host) return console.warn('Host not found', hostSelector);

    if(ok){
      const assets = document.querySelector('a-assets') || (()=>{
        const a = document.createElement('a-assets'); scene.appendChild(a); return a;
      })();
      const id = 'mdl-'+manifestId;
      const it = document.createElement('a-asset-item');
      it.setAttribute('id', id);
      it.setAttribute('src', path);
      assets.appendChild(it);

      const ent = document.createElement('a-entity');
      ent.setAttribute('gltf-model', '#'+id);
      ent.setAttribute('position', '0 0 0');
      ent.setAttribute('scale', '0.8 0.8 0.8');
      host.appendChild(ent);
      return true;
    } else {
      // Proxy primitive + HUD links
      const box = document.createElement('a-box');
      box.setAttribute('color', '#64748b');
      box.setAttribute('depth', '0.2');
      box.setAttribute('height', '0.6');
      box.setAttribute('width', '0.9');
      host.appendChild(box);

      const hud = document.createElement('div');
      hud.className = 'hud';
      hud.style.bottom = '10px';
      hud.style.top = 'auto';
      hud.innerHTML = `<strong>Falta modelo: ${manifestId}</strong><br/>` +
        item.sources.map(s=>`<a href="${s.url}" target="_blank" rel="noopener">Descargar: ${s.title}</a>`).join('<br/>');
      document.body.appendChild(hud);
      return false;
    }
  }catch(e){
    console.error(e);
  }
}
