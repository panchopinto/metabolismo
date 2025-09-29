
export const glycolysisSteps = [
  { title: "Paso 1 — Hexoquinasa", text: "Glucosa → Glucosa-6-fosfato (consume 1 ATP).", highlight: "-1 0 0" },
  { title: "Paso 2 — Fosfoglucosa isomerasa", text: "G6P → Fructosa-6-fosfato.", highlight: "-0.2 0 0" },
  { title: "Paso 3 — PFK-1", text: "F6P → F1,6BP (consume 1 ATP). Paso regulatorio clave.", highlight: "-0.2 0 0" },
  { title: "Paso 4 — Aldolasa", text: "F1,6BP → DHAP + G3P.", highlight: "0.6 0 0" },
  { title: "Paso 5 — Triosa fosfato isomerasa", text: "DHAP ↔ G3P (dos G3P al final).", highlight: "0.6 0 0" },
  { title: "Paso 6 — G3P deshidrogenasa", text: "G3P → 1,3-BPG + NADH (2 NADH por glucosa).", highlight: "0.6 0 0" },
  { title: "Paso 7 — Fosfoglicerato quinasa", text: "1,3-BPG → 3-PG (genera 2 ATP, balance neto comienza).", highlight: "0.6 0 0" },
  { title: "Paso 8 — Fosfoglicerato mutasa", text: "3-PG → 2-PG.", highlight: "0.6 0 0" },
  { title: "Paso 9 — Enolasa", text: "2-PG → PEP + H₂O.", highlight: "0.6 0 0" },
  { title: "Paso 10 — Piruvato quinasa", text: "PEP → Piruvato (genera 2 ATP). Neto: +2 ATP, +2 NADH.", highlight: "1.4 0 0" }
];

export function buildStepOverlay(containerId, steps){
  const box = document.createElement('div');
  box.className = 'hud hud-steps';
  box.innerHTML = `
    <div class="row">
      <strong id="st-title"></strong>
    </div>
    <div class="row" style="margin-top:6px">
      <span id="st-text"></span>
    </div>
    <div class="row" style="margin-top:10px;display:flex;gap:6px">
      <button id="st-prev">◀</button>
      <span id="st-idx"></span>
      <button id="st-next">▶</button>
    </div>`;
  document.body.appendChild(box);
  const t = document.getElementById('st-title');
  const x = document.getElementById('st-text');
  const i = document.getElementById('st-idx');
  const prev = document.getElementById('st-prev');
  const next = document.getElementById('st-next');
  let idx = 0;

  function render(){
    const s = steps[idx];
    t.textContent = s.title;
    x.textContent = s.text;
    i.textContent = (idx+1) + ' / ' + steps.length;
    const target = document.getElementById(containerId);
    if(target){
      target.setAttribute('position', s.highlight || '0 0 0');
      target.setAttribute('animation__pulse', 'property: scale; to: 1.15 1.15 1.15; dur: 500; dir: alternate; loop: 4');
    }
  }

  prev.addEventListener('click', ()=>{ idx = (idx-1+steps.length)%steps.length; render(); });
  next.addEventListener('click', ()=>{ idx = (idx+1)%steps.length; render(); });
  render();
}


export const tcaSteps = [
  { title: "Entrada", text: "Acetil-CoA + Oxalacetato → Citrato.", highlight: "0 0 0" },
  { title: "Isomerización", text: "Citrato → Isocitrato.", highlight: "0 0 0" },
  { title: "Descarboxilación 1", text: "Isocitrato → α-cetoglutarato + CO₂ + NADH.", highlight: "0 0 0" },
  { title: "Descarboxilación 2", text: "α-cetoglutarato → Succinil-CoA + CO₂ + NADH.", highlight: "0 0 0" },
  { title: "Sustrato a nivel de sustrato", text: "Succinil-CoA → Succinato + GTP(ATP).", highlight: "0 0 0" },
  { title: "Oxidación", text: "Succinato → Fumarato + FADH₂.", highlight: "0 0 0" },
  { title: "Hidratación", text: "Fumarato → Malato.", highlight: "0 0 0" },
  { title: "Oxidación final", text: "Malato → Oxalacetato + NADH (cierra el ciclo).", highlight: "0 0 0" }
];

export const etcSteps = [
  { title: "Complejo I", text: "NADH dona e⁻ → bombeo de H⁺ (matriz→espacio intermembrana).", highlight: "-1 0 0" },
  { title: "Complejo II", text: "FADH₂ dona e⁻; no bombea H⁺.", highlight: "-0.4 0 0" },
  { title: "Ubiquinona", text: "CoQ transfiere e⁻ a CIII.", highlight: "-0.1 0 0" },
  { title: "Complejo III", text: "Bombeo de H⁺; e⁻ hacia citocromo c.", highlight: "0.2 0 0" },
  { title: "Citocromo c", text: "Transporta e⁻ a CIV.", highlight: "0.5 0 0" },
  { title: "Complejo IV", text: "Reduce O₂ → H₂O; bombeo de H⁺.", highlight: "0.8 0 0" },
  { title: "Gradiente", text: "H⁺ acumulados generan Δp (fuerza protón-motriz).", highlight: "1.2 0 0" },
  { title: "ATP sintasa", text: "Flujo de H⁺ → rotación → síntesis de ATP.", highlight: "1.6 0 0" }
];
