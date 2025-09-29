export function el(tag, attrs={}, ...children){
  const n = document.createElement(tag);
  for(const [k,v] of Object.entries(attrs||{})){
    if(k.startsWith("on") && typeof v === "function"){ n.addEventListener(k.substring(2), v); }
    else if(k==="html"){ n.innerHTML = v; }
    else n.setAttribute(k, v);
  }
  for(const c of children) n.append(c);
  return n;
}

export function iconImg(src){ const img = new Image(); img.src=src; img.alt=""; return img; }
