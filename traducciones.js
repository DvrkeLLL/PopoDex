/* ============================================================
   PopoDex — traducciones.js
   ------------------------------------------------------------
   Los nombres de movimientos, habilidades, grupos huevo, tipos
   y juegos se piden traducidos directamente a PokeAPI (español,
   language_id 7). Este archivo cubre lo que PokeAPI NO traduce:
   las localizaciones.

   Fuente de los nombres: WikiDex (columna "Español (España)"),
   que usa la nomenclatura oficial de los juegos localizados.
   Cobertura verificada: Kanto, Archi7, Johto y Hoenn.
   Lo que no esté acá cae al español de la API y, si tampoco
   existe, se muestra el nombre en inglés sin inventar nada.
   ============================================================ */

const LUGARES_ES = {

  /* ---------- KANTO ---------- */
  'pallet-town':'Pueblo Paleta',
  'viridian-city':'Ciudad Verde',
  'pewter-city':'Ciudad Plateada',
  'cerulean-city':'Ciudad Celeste',
  'vermilion-city':'Ciudad Carmín',
  'lavender-town':'Pueblo Lavanda',
  'celadon-city':'Ciudad Azulona',
  'fuchsia-city':'Ciudad Fucsia',
  'saffron-city':'Ciudad Azafrán',
  'cinnabar-island':'Isla Canela',
  'indigo-plateau':'Meseta Añil',
  'kanto-victory-road-1':'Calle Victoria',
  'kanto-victory-road-2':'Calle Victoria',
  'victory-road':'Calle Victoria',
  'viridian-forest':'Bosque Verde',
  'mt-moon':'Monte Moon',
  'diglett-cave':'Cueva Diglett',
  'digletts-cave':'Cueva Diglett',
  'rock-tunnel':'Túnel Roca',
  'cerulean-cave':'Cueva Celeste',
  'seafoam-islands':'Islas Espuma',
  'power-plant':'Central de Energía',
  'pokemon-tower':'Torre Pokémon',
  'pokemon-mansion':'Mansión Pokémon',
  'safari-zone':'Zona Safari',
  'kanto-safari-zone':'Zona Safari',
  'silph-co':'Silph S. A.',
  'fighting-dojo':'Dojo Karate',
  'rocket-game-corner':'Sala de Juegos Rocket',
  'celadon-game-corner':'Sala de Juegos Rocket',
  'rocket-hideout':'Guarida Rocket',
  'team-rocket-hideout':'Guarida Rocket',
  'underground-path':'Vía Subterránea',
  'kanto-underground-path':'Vía Subterránea',
  'ss-anne':'S. S. Anne',
  's-s-anne':'S. S. Anne',
  'tohjo-falls':'Cataratas Tohjo',
  'pokemon-league':'Liga Pokémon',
  'kanto-pokemon-league':'Liga Pokémon',
  'pokemon-day-care':'Guardería Pokémon',
  'day-care':'Guardería Pokémon',
  'pewter-museum-of-science':'Museo de la Ciencia',
  'celadon-department-store':'Centro Comercial Azulona',
  'celadon-condominiums':'Edificio Azulona',
  'pal-park':'Parque Compi',
  'trainer-house':'Casa del entrenador',
  'lavender-radio-tower':'Torre Radio',
  'house-of-memories':'Cementerio de Pueblo Lavanda',
  'seagallop-ferry':'Surcamar Veloce',
  'sea-cottage':'Casa del Mar',
  'bill-house':'Casa de Bill',
  'route-4-pokemon-center':'Centro Pokémon (Ruta 4)',
  'cinnabar-lab':'Laboratorio de Isla Canela',
  'pokemon-research-lab':'Laboratorio Pokémon',
  'oak-lab':'Laboratorio del profesor Oak',
  'pokemon-fan-club':'Club de Fans de Pokémon',
  'cycling-road':'Camino de bicis',

  /* ---------- ARCHI7 (Islas Sete) ---------- */
  'one-island':'Isla Prima',
  'two-island':'Isla Secunda',
  'three-island':'Isla Tera',
  'four-island':'Isla Quarta',
  'five-island':'Isla Inta',
  'six-island':'Isla Exta',
  'seven-island':'Isla Sétima',
  'navel-rock':'Roca Ombligo',
  'birth-island':'Isla Origen',
  'treasure-beach':'Playa Tesoro',
  'kindle-road':'Camino Candente',
  'cape-brink':'Cabo Extremo',
  'bond-bridge':'Puente Unión',
  'five-isle-meadow':'Prado Isla Inta',
  'memorial-pillar':'Pilar Recuerdo',
  'water-labyrinth':'Aquarinto',
  'resort-gorgeous':'Lugar de Recreo',
  'water-path':'Vía Acuática',
  'ruin-valley':'Valle Ruinas',
  'green-path':'Vía Verde',
  'outcast-island':'Isla Aislada',
  'canyon-entrance':'Entrada al Cañón',
  'sevault-canyon':'Cañón Sétano',
  'tanoby-ruins':'Ruinas Sete',
  'tanoby-key':'Llave Sete',
  'tanoby-chamber':'Cámaras Sete',
  'three-isle-path':'Vía Isla Tera',
  'three-isle-port':'Puerto Isla Tera',
  'icefall-cave':'Cueva Glaciada',
  'lost-cave':'Cueva Perdida',
  'dotted-hole':'Cueva Punteada',
  'altering-cave':'Cueva Cambiante',
  'berry-forest':'Bosque Baya',
  'pattern-bush':'Bosquejo',
  'ember-spa':'Balneario Ascuas',
  'mt-ember':'Monte Ascuas',
  'rocket-warehouse':'Almacén Rocket',
  'trainer-tower':'Torre Desafío',

  /* ---------- JOHTO ---------- */
  'new-bark-town':'Pueblo Primavera',
  'cherrygrove-city':'Ciudad Cerezo',
  'violet-city':'Ciudad Malva',
  'azalea-town':'Pueblo Azalea',
  'goldenrod-city':'Ciudad Trigal',
  'ecruteak-city':'Ciudad Iris',
  'olivine-city':'Ciudad Olivo',
  'cianwood-city':'Ciudad Orquídea',
  'mahogany-town':'Pueblo Caoba',
  'blackthorn-city':'Ciudad Endrino',
  'dark-cave':'Cueva Oscura',
  'union-cave':'Cueva Unión',
  'slowpoke-well':'Pozo Slowpoke',
  'mt-mortar':'Monte Mortero',
  'ice-path':'Ruta Helada',
  'dragons-den':'Guarida Dragón',
  'dragon-den':'Guarida Dragón',
  'cliff-edge-gate':'Paso Acantilado',
  'cliff-cave':'Cueva Acantilado',
  'mt-silver':'Monte Plateado',
  'mt-silver-cave':'Cueva Monte Plateado',
  'ilex-forest':'Encinar',
  'whirl-islands':'Islas Remolino',
  'sprout-tower':'Torre Bellsprout',
  'burned-tower':'Torre Quemada',
  'bell-tower':'Torre Campana',
  'tin-tower':'Torre Campana',
  'embedded-tower':'Torre Oculta',
  'ruins-of-alph':'Ruinas Alfa',
  'goldenrod-tunnel':'Túnel Trigal',
  'goldenrod-underground':'Túnel Trigal',
  'national-park':'Parque Nacional',
  'moomoo-farm':'Granja Mu-mu',
  'lake-of-rage':'Lago de la Furia',
  'radio-tower':'Torre de Radio',
  'goldenrod-radio-tower':'Torre de Radio',
  'olivine-lighthouse':'Faro de Olivo',
  'lighthouse':'Faro de Olivo',
  'battle-tower':'Torre Batalla',
  'bellchime-trail':'Senda Dindón',
  'johto-safari-zone':'Zona Safari',
  'safari-zone-gate':'Puerta Zona Safari',
  'magnet-train':'Magnetotrén',
  'ss-aqua':'S.S. Aqua',
  's-s-aqua':'S.S. Aqua',
  'elm-lab':'Laboratorio del profesor Elm',
  'burned-tower-b1f':'Torre Quemada',
  'mt-silver-outside':'Monte Plateado',
  'johto-victory-road':'Calle Victoria',
  'sinjoh-ruins':'Ruinas de Sinjoh',
  'pokeathlon-dome':'Carpa Pokéathlon',
  'global-terminal':'Terminal Global',
  'goldenrod-game-corner':'Casino de Ciudad Trigal',

  /* ---------- HOENN ---------- */
  'littleroot-town':'Villa Raíz',
  'oldale-town':'Pueblo Escaso',
  'petalburg-city':'Ciudad Petalia',
  'rustboro-city':'Ciudad Férrica',
  'dewford-town':'Pueblo Azuliza',
  'slateport-city':'Ciudad Portual',
  'mauville-city':'Ciudad Malvalona',
  'verdanturf-town':'Pueblo Verdegal',
  'fallarbor-town':'Pueblo Pardal',
  'lavaridge-town':'Pueblo Lavacalda',
  'fortree-city':'Ciudad Arborada',
  'lilycove-city':'Ciudad Calagua',
  'mossdeep-city':'Ciudad Algaria',
  'sootopolis-city':'Arrecípolis',
  'pacifidlog-town':'Pueblo Oromar',
  'ever-grande-city':'Ciudad Colosalia',
  'rusturf-tunnel':'Túnel Fervergal',
  'island-cave':'Cueva Insular',
  'granite-cave':'Cueva Granito',
  'fiery-path':'Senda Ígnea',
  'jagged-pass':'Desfiladero',
  'ancient-tomb':'Tumba Antigua',
  'desert-ruins':'Ruinas del Desierto',
  'mt-chimney':'Monte Cenizo',
  'desert-underpass':'Gruta Desértica',
  'meteor-falls':'Cascada Meteoro',
  'mt-pyre':'Monte Pírico',
  'hoenn-victory-road':'Calle Victoria',
  'hoenn-safari-zone':'Zona Safari',
  'petalburg-woods':'Bosque Petalia',
  'cave-of-origin':'Cueva Ancestral',
  'seafloor-cavern':'Cueva Abisal',
  'shoal-cave':'Cueva Bajera',
  'sky-pillar':'Pilar Celeste',
  'new-mauville':'Nueva Malvalona',
  'abandoned-ship':'Barco Abandonado',
  'scorched-slab':'Losa Chamuscada',
  'magma-hideout':'Guarida Magma',
  'aqua-hideout':'Guarida Aqua',
  'southern-island':'Isla Sureña',
  'mirage-tower':'Torre Espejismo',
  'marine-cave':'Cueva Marina',
  'terra-cave':'Cueva Terrestre',
  'artisan-cave':'Cueva Artesa',
  'battle-frontier':'Frente Batalla',
  'trick-house':'Casa de Trucos',
  'mirage-island':'Isla Espejismo',
  'sealed-chamber':'Cámara Sellada',
  'sky-pillar-outside':'Pilar Celeste',
  'weather-institute':'Instituto Meteorológico',
  'oceanic-museum':'Museo Oceánico',
  'seaside-cycling-road':'Camino de bicis',
  'devon-corporation':'Devon S. A.',
  'safari-zone-hoenn':'Zona Safari'
};

/* Sufijos de área: pisos, entradas, zonas internas */
const SUFIJOS_ES = {
  'area':'', 'entrance':'entrada', 'exterior':'exterior', 'outside':'exterior',
  'inside':'interior', 'interior':'interior', 'gate':'puerta',
  'north':'norte', 'south':'sur', 'east':'este', 'west':'oeste',
  'northern':'norte', 'southern':'sur', 'eastern':'este', 'western':'oeste',
  'basement':'sótano', 'roof':'azotea', 'tower':'torre', 'cave':'cueva',
  'lobby':'vestíbulo', 'hideout':'guarida', 'port':'puerto',
  'sea':'mar', 'sea-route':'ruta marina', 'underwater':'bajo el agua',
  'grass':'hierba', 'water':'agua', 'surf':'surf', 'dock':'muelle',
  'main':'principal', 'back':'fondo', 'front':'frente',
  'chamber':'cámara', 'room':'sala', 'floor':'planta', 'summit':'cima',
  'peak':'cima', 'top':'cima', 'bottom':'base', 'center':'centro',
  'clearing':'claro', 'garden':'jardín', 'yard':'patio', 'house':'casa',
  'low':'marea baja', 'high':'marea alta', 'tide':'', 'ice':'hielo',
  'upper':'superior', 'lower':'inferior', 'inner':'interior', 'outer':'exterior',
  'left':'izquierda', 'right':'derecha', 'middle':'centro', 'end':'final',
  'b1f':'Sótano 1', 'b2f':'Sótano 2'
};

/* Palabras genéricas para armar nombres no catalogados */
const PALABRAS_ES = {
  'route':'Ruta', 'city':'Ciudad', 'town':'Pueblo', 'village':'Aldea',
  'cave':'Cueva', 'forest':'Bosque', 'woods':'Bosque', 'tower':'Torre',
  'mt':'Monte', 'mount':'Monte', 'mountain':'Monte', 'lake':'Lago',
  'river':'Río', 'sea':'Mar', 'island':'Isla', 'islands':'Islas',
  'road':'Camino', 'path':'Senda', 'trail':'Sendero', 'bridge':'Puente',
  'tunnel':'Túnel', 'ruins':'Ruinas', 'temple':'Templo', 'shrine':'Santuario',
  'park':'Parque', 'garden':'Jardín', 'valley':'Valle', 'canyon':'Cañón',
  'desert':'Desierto', 'beach':'Playa', 'cape':'Cabo', 'bay':'Bahía',
  'falls':'Cataratas', 'waterfall':'Catarata', 'well':'Pozo', 'mine':'Mina',
  'mansion':'Mansión', 'castle':'Castillo', 'tomb':'Tumba', 'lab':'Laboratorio',
  'plateau':'Meseta', 'plains':'Llanura', 'meadow':'Prado', 'marsh':'Pantano',
  'swamp':'Ciénaga', 'volcano':'Volcán', 'crater':'Cráter', 'ranch':'Rancho',
  'farm':'Granja', 'port':'Puerto', 'harbor':'Puerto', 'pier':'Muelle',
  'gym':'Gimnasio', 'league':'Liga', 'zone':'Zona', 'chamber':'Cámara',
  'hideout':'Guarida', 'lighthouse':'Faro', 'museum':'Museo', 'stadium':'Estadio'
};

/* Métodos de encuentro (PokeAPI sí los traduce, esto es respaldo) */
const METODOS_ES = {
  'walk':'Hierba alta o cueva',
  'old-rod':'Caña vieja',
  'good-rod':'Caña buena',
  'super-rod':'Supercaña',
  'surf':'Surf',
  'rock-smash':'Golpe Roca',
  'headbutt':'Golpe Cabeza',
  'gift':'Regalo',
  'gift-egg':'Huevo de regalo',
  'only-one':'Encuentro único',
  'seaweed':'Algas'
};

/* ============================================================
   Funciones
   ============================================================ */

/* Rutas: kanto-route-2, johto-route-29, hoenn-route-101 */
function _ruta(slug){
  const m = slug.match(/^(?:([a-z]+)-)?route-(\d+)(.*)$/);
  if(!m) return null;
  const region = m[1] ? m[1].charAt(0).toUpperCase()+m[1].slice(1) : null;
  let nombre = 'Ruta ' + m[2];
  if(region && !['kanto','johto','hoenn','sinnoh','unova','kalos','alola','galar','paldea'].includes(m[1]))
    return null;
  return {base:nombre, resto:m[3]||''};
}

/* Pisos: 1f, 2f, b1f, b2f, 3f... */
function _piso(txt){
  const m = txt.match(/^b?(\d+)f$/);
  if(!m) return null;
  return txt.startsWith('b') ? 'Sótano '+m[1] : 'Planta '+m[1];
}

/* Palabras que en español van delante del nombre propio:
   'monean-chamber' → 'Cámara Monean' (no 'Monean Cámara') */
const NUCLEO_ES = {
  'chamber':'Cámara', 'room':'Sala', 'gate':'Puerta', 'entrance':'Entrada',
  'dock':'Muelle', 'port':'Puerto', 'hall':'Sala', 'deck':'Cubierta',
  'kitchen':'Cocina', 'cabin':'Camarote', 'corridor':'Pasillo',
  'bridge':'Puente', 'tower':'Torre', 'cave':'Cueva', 'house':'Casa'
};

/* Traduce un fragmento suelto usando las tablas genéricas */
function _fragmento(txt){
  if(!txt) return '';
  let t = txt.replace(/^-/,'');

  /* '...-towards-viridian-city' → '... hacia Ciudad Verde' */
  const iTw = t.indexOf('towards-');
  if(iTw !== -1){
    const antes = t.slice(0, iTw).replace(/-$/,'');
    const destinoSlug = t.slice(iTw + 8);
    const destino = LUGARES_ES[destinoSlug] || _fragmento(destinoSlug);
    const pre = antes ? _fragmento(antes)+' ' : '';
    return pre + 'hacia ' + destino;
  }

  /* 'monean-chamber' → 'Cámara Monean' */
  const partesRaw = t.split('-').filter(Boolean);
  const ultima = partesRaw[partesRaw.length-1];
  if(partesRaw.length>1 && NUCLEO_ES[ultima]){
    const resto = partesRaw.slice(0,-1).map(p=>{
      const piso=_piso(p);
      if(piso) return piso;
      if(SUFIJOS_ES[p]!==undefined) return SUFIJOS_ES[p];
      if(PALABRAS_ES[p]) return PALABRAS_ES[p];
      return p.charAt(0).toUpperCase()+p.slice(1);
    }).filter(Boolean).join(' ');
    return resto ? NUCLEO_ES[ultima]+' '+resto : NUCLEO_ES[ultima];
  }

  const out = partesRaw.map(p=>{
    const piso = _piso(p);
    if(piso) return piso;
    if(NUCLEO_ES[p]) return NUCLEO_ES[p];
    if(SUFIJOS_ES[p] !== undefined) return SUFIJOS_ES[p];
    if(PALABRAS_ES[p]) return PALABRAS_ES[p];
    if(/^\d+$/.test(p)) return p;
    return p.charAt(0).toUpperCase()+p.slice(1);
  }).filter(Boolean);
  return out.join(' ');
}

/**
 * Traduce el nombre de un área de PokeAPI.
 * @param {string} slugArea  ej. 'mt-moon-1f', 'kanto-route-2-south-towards-viridian-city'
 * @param {string} [esApi]   nombre en español que devolvió la API, si existe
 * @param {string} [enApi]   nombre en inglés que devolvió la API, si existe
 */
function traducirLugar(slugArea, esApi, enApi){
  if(!slugArea) return esApi || enApi || '';
  let s = slugArea.toLowerCase();

  /* Quitamos el sufijo -area, que no aporta nada */
  s = s.replace(/-area$/,'');

  /* 1. Coincidencia exacta en el diccionario */
  if(LUGARES_ES[s]) return LUGARES_ES[s];

  /* 2. Rutas */
  const r = _ruta(s);
  if(r){
    const extra = r.resto ? ' · '+_fragmento(r.resto) : '';
    return r.base + extra;
  }

  /* 3. Prefijo más largo que esté en el diccionario + sufijo traducido */
  const partes = s.split('-');
  for(let i=partes.length-1; i>0; i--){
    const base = partes.slice(0,i).join('-');
    if(LUGARES_ES[base]){
      const resto = _fragmento(partes.slice(i).join('-'));
      return resto ? LUGARES_ES[base]+' · '+resto : LUGARES_ES[base];
    }
  }

  /* 4. Español de la API, si lo hay */
  if(esApi && esApi.trim()) return esApi;

  /* 5. Último recurso: armado genérico a partir del slug */
  const armado = _fragmento(s);
  return armado || enApi || slugArea.replace(/-/g,' ');
}

function traducirMetodo(slug, esApi){
  if(esApi && esApi.trim()) return esApi;
  return METODOS_ES[slug] || slug.replace(/-/g,' ');
}

/* Expuesto globalmente para PopoDex.html */
window.PopoTrad = {
  LUGARES_ES, SUFIJOS_ES, PALABRAS_ES, NUCLEO_ES, METODOS_ES,
  traducirLugar, traducirMetodo
};
