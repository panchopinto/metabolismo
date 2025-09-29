import { scenes } from './data.js';
import { el, iconImg } from '../components/ui.js';

const $grid = document.querySelector('.grid');
const $kpis = document.querySelector('.kpis');
const $switch = document.querySelector('.switch');
const $ctxLabel = document.querySelector('#ctx');

let plantMode = false; // false=animal, true=vegetal

function renderKPIs(){
  $kpis.innerHTML = '';
  const items = [
    {label:'Escenas', value: scenes.length},
    {label:'Contexto', value: plantMode ? 'Vegetal' : 'Animal'},
    {label:'Rutas clave', value: 'Glycolysis, TCA, ETC, ATP, Fotosíntesis'},
  ];
  for(const it of items){
    $kpis.append(el('div', {class:'kpi'}, el('strong', {}, it.label), el('span', {}, it.value)));
  }
}

function renderGrid(){
  $grid.innerHTML='';
  for(const s of scenes){
    const card = el('div', {class:'card tooltip', 'data-tip': s.tip},
      el('div', {class:'badge'}, plantMode ? 'Vegetal' : 'Animal'),
      el('div', {class:'thumb'},
        el('div', {class:'ico '+s.color, role:'img', 'aria-label': s.name, title: s.name},
          el('div', {class:'btn-ico'}, iconImg(s.icon))
        )
      ),
      el('div', {class:'body'},
        el('h3', {}, s.name),
        el('p', {}, s.desc),
        el('div', {class:'actions'},
          el('a', {class:'btn', href:s.href}, el('span', {class:'btn-ico'}, iconImg('assets/icons/info.svg')), 'Abrir'),
          el('a', {class:'btn', href:s.href+'?noar=1'}, el('span', {class:'btn-ico'}, iconImg('assets/icons/info.svg')), '3D')
        )
      )
    );
    $grid.append(card);
  }
}

$switch.addEventListener('click', ()=>{
  plantMode = !plantMode;
  $switch.dataset.on = plantMode ? "true" : "false";
  $ctxLabel.textContent = plantMode ? 'Vegetal' : 'Animal';
  renderKPIs(); renderGrid();
});

renderKPIs(); renderGrid();
