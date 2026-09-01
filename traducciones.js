/* ============================================================
   PopoDex — traducciones.js
   ------------------------------------------------------------
   Movimientos, habilidades, grupos huevo, tipos y juegos se
   piden ya traducidos a PokeAPI. Este archivo cubre lo único
   que PokeAPI no traduce al español: las localizaciones.

   Método:
   1. Si la API trae nombre en español, se usa ese.
   2. Si no, se busca el nombre EN INGLÉS en el diccionario.
      Indexar por el nombre real (y no por el identificador
      interno) evita tener que adivinar cómo se escribe cada
      ruta o cueva en la base de datos.
   3. El sufijo (planta, sótano, entrada, dirección) se obtiene
      restando el identificador del lugar al del área, así que
      es exacto y no depende de suposiciones.
   4. Si nada coincide, se devuelve el nombre en inglés tal
      cual. Nunca se inventa una traducción.

   Nombres oficiales tomados de WikiDex (español de España).
   Cobertura verificada: Kanto, Archi7, Johto y Hoenn.
   ============================================================ */

/* Normaliza para comparar: minúsculas, sin tildes ni puntuación */
function _clave(txt){
  return (txt||'')
    .toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g,'')
    .replace(/[.'\u2019\u00b7]/g,'')
    .replace(/[^a-z0-9]+/g,' ')
    .trim();
}

/* Diccionario indexado por nombre en inglés */
const LUGARES_EN = {
  /* ---------- KANTO ---------- */
  'pallet town':'Pueblo Paleta',
  'viridian city':'Ciudad Verde',
  'pewter city':'Ciudad Plateada',
  'cerulean city':'Ciudad Celeste',
  'vermilion city':'Ciudad Carmín',
  'lavender town':'Pueblo Lavanda',
  'celadon city':'Ciudad Azulona',
  'fuchsia city':'Ciudad Fucsia',
  'saffron city':'Ciudad Azafrán',
  'cinnabar island':'Isla Canela',
  'indigo plateau':'Meseta Añil',
  'viridian forest':'Bosque Verde',
  'mt moon':'Monte Moon',
  'mount moon':'Monte Moon',
  'diglett s cave':'Cueva Diglett',
  'digletts cave':'Cueva Diglett',
  'rock tunnel':'Túnel Roca',
  'cerulean cave':'Cueva Celeste',
  'seafoam islands':'Islas Espuma',
  'power plant':'Central de Energía',
  'pokemon tower':'Torre Pokémon',
  'pokemon mansion':'Mansión Pokémon',
  'safari zone':'Zona Safari',
  'kanto safari zone':'Zona Safari',
  'silph co':'Silph S.A.',
  'fighting dojo':'Dojo Karate',
  'rocket game corner':'Sala de Juegos Rocket',
  'celadon game corner':'Sala de Juegos Rocket',
  'game corner':'Sala de Juegos',
  'rocket hideout':'Guarida Rocket',
  'team rocket hideout':'Guarida Rocket',
  'underground path':'Vía Subterránea',
  'ss anne':'S.S. Anne',
  's s anne':'S.S. Anne',
  'tohjo falls':'Cataratas Tohjo',
  'pokemon league':'Liga Pokémon',
  'victory road':'Calle Victoria',
  'pokemon day care':'Guardería Pokémon',
  'day care':'Guardería Pokémon',
  'day care center':'Guardería Pokémon',
  'pewter museum of science':'Museo de la Ciencia',
  'celadon department store':'Centro Comercial Azulona',
  'celadon condominiums':'Edificio Azulona',
  'pal park':'Parque Compi',
  'cycling road':'Camino de bicis',
  'sea cottage':'Casa del Mar',
  'bill s house':'Casa de Bill',
  'oak s lab':'Laboratorio del profesor Oak',
  'pokemon research lab':'Laboratorio Pokémon',
  'cinnabar lab':'Laboratorio de Isla Canela',
  'pokemon fan club':'Club de Fans de Pokémon',
  'trainer house':'Casa del Entrenador',
  'copycat s house':'Casa de la Imitadora',

  /* ---------- ARCHI7 (Islas Sete) ---------- */
  'one island':'Isla Prima',
  'two island':'Isla Secunda',
  'three island':'Isla Tera',
  'four island':'Isla Quarta',
  'five island':'Isla Inta',
  'six island':'Isla Exta',
  'seven island':'Isla Sétima',
  'navel rock':'Roca Ombligo',
  'birth island':'Isla Origen',
  'treasure beach':'Playa Tesoro',
  'kindle road':'Camino Candente',
  'cape brink':'Cabo Extremo',
  'bond bridge':'Puente Unión',
  'five isle meadow':'Prado Isla Inta',
  'memorial pillar':'Pilar Recuerdo',
  'water labyrinth':'Aquarinto',
  'resort gorgeous':'Lugar de Recreo',
  'water path':'Vía Acuática',
  'ruin valley':'Valle Ruinas',
  'green path':'Vía Verde',
  'outcast island':'Isla Aislada',
  'canyon entrance':'Entrada al Cañón',
  'sevault canyon':'Cañón Sétano',
  'tanoby ruins':'Ruinas Sete',
  'tanoby key':'Llave Sete',
  'tanoby chamber':'Cámaras Sete',
  'three isle path':'Vía Isla Tera',
  'three isle port':'Puerto Isla Tera',
  'icefall cave':'Cueva Glaciada',
  'lost cave':'Cueva Perdida',
  'dotted hole':'Cueva Punteada',
  'altering cave':'Cueva Cambiante',
  'berry forest':'Bosque Baya',
  'pattern bush':'Bosquejo',
  'ember spa':'Balneario Ascuas',
  'mt ember':'Monte Ascuas',
  'rocket warehouse':'Almacén Rocket',
  'trainer tower':'Torre Desafío',
  'monean chamber':'Cámara Monean',
  'liptoo chamber':'Cámara Liptoo',
  'weepth chamber':'Cámara Weepth',
  'dilford chamber':'Cámara Dilford',
  'scufib chamber':'Cámara Scufib',
  'rixy chamber':'Cámara Rixy',
  'viapois chamber':'Cámara Viapois',

  /* ---------- JOHTO ---------- */
  'new bark town':'Pueblo Primavera',
  'cherrygrove city':'Ciudad Cerezo',
  'violet city':'Ciudad Malva',
  'azalea town':'Pueblo Azalea',
  'goldenrod city':'Ciudad Trigal',
  'ecruteak city':'Ciudad Iris',
  'olivine city':'Ciudad Olivo',
  'cianwood city':'Ciudad Orquídea',
  'mahogany town':'Pueblo Caoba',
  'blackthorn city':'Ciudad Endrino',
  'dark cave':'Cueva Oscura',
  'union cave':'Cueva Unión',
  'slowpoke well':'Pozo Slowpoke',
  'mt mortar':'Monte Mortero',
  'ice path':'Ruta Helada',
  'dragon s den':'Guarida Dragón',
  'dragons den':'Guarida Dragón',
  'cliff edge gate':'Paso Acantilado',
  'cliff cave':'Cueva Acantilado',
  'mt silver':'Monte Plateado',
  'mt silver cave':'Cueva Monte Plateado',
  'ilex forest':'Encinar',
  'whirl islands':'Islas Remolino',
  'sprout tower':'Torre Bellsprout',
  'burned tower':'Torre Quemada',
  'bell tower':'Torre Campana',
  'tin tower':'Torre Campana',
  'embedded tower':'Torre Oculta',
  'ruins of alph':'Ruinas Alfa',
  'goldenrod tunnel':'Túnel Trigal',
  'goldenrod underground':'Túnel Trigal',
  'national park':'Parque Nacional',
  'moomoo farm':'Granja Mu-mu',
  'lake of rage':'Lago de la Furia',
  'radio tower':'Torre de Radio',
  'goldenrod radio tower':'Torre de Radio',
  'olivine lighthouse':'Faro de Olivo',
  'lighthouse':'Faro',
  'battle tower':'Torre Batalla',
  'bellchime trail':'Senda Dindón',
  'johto safari zone':'Zona Safari',
  'safari zone gate':'Puerta Zona Safari',
  'magnet train':'Magnetotrén',
  'ss aqua':'S.S. Aqua',
  's s aqua':'S.S. Aqua',
  'elm s lab':'Laboratorio del profesor Elm',
  'sinjoh ruins':'Ruinas de Sinjoh',
  'pokeathlon dome':'Carpa Pokéathlon',
  'global terminal':'Terminal Global',
  'frontier access':'Acceso al Frente Batalla',

  /* ---------- HOENN ---------- */
  'littleroot town':'Villa Raíz',
  'oldale town':'Pueblo Escaso',
  'petalburg city':'Ciudad Petalia',
  'rustboro city':'Ciudad Férrica',
  'dewford town':'Pueblo Azuliza',
  'slateport city':'Ciudad Portual',
  'mauville city':'Ciudad Malvalona',
  'verdanturf town':'Pueblo Verdegal',
  'fallarbor town':'Pueblo Pardal',
  'lavaridge town':'Pueblo Lavacalda',
  'fortree city':'Ciudad Arborada',
  'lilycove city':'Ciudad Calagua',
  'mossdeep city':'Ciudad Algaria',
  'sootopolis city':'Arrecípolis',
  'pacifidlog town':'Pueblo Oromar',
  'ever grande city':'Ciudad Colosalia',
  'rusturf tunnel':'Túnel Fervergal',
  'island cave':'Cueva Insular',
  'granite cave':'Cueva Granito',
  'fiery path':'Senda Ígnea',
  'jagged pass':'Desfiladero',
  'ancient tomb':'Tumba Antigua',
  'desert ruins':'Ruinas del Desierto',
  'mt chimney':'Monte Cenizo',
  'desert underpass':'Gruta Desértica',
  'meteor falls':'Cascada Meteoro',
  'mt pyre':'Monte Pírico',
  'hoenn safari zone':'Zona Safari',
  'petalburg woods':'Bosque Petalia',
  'cave of origin':'Cueva Ancestral',
  'seafloor cavern':'Cueva Abisal',
  'shoal cave':'Cueva Bajera',
  'sky pillar':'Pilar Celeste',
  'new mauville':'Nueva Malvalona',
  'abandoned ship':'Barco Abandonado',
  'scorched slab':'Losa Chamuscada',
  'magma hideout':'Guarida Magma',
  'aqua hideout':'Guarida Aqua',
  'southern island':'Isla Sureña',
  'mirage tower':'Torre Espejismo',
  'marine cave':'Cueva Marina',
  'terra cave':'Cueva Terrestre',
  'artisan cave':'Cueva Artesa',
  'battle frontier':'Frente Batalla',
  'trick house':'Casa de Trucos',
  'mirage island':'Isla Espejismo',
  'sealed chamber':'Cámara Sellada',
  'weather institute':'Instituto Meteorológico',
  'oceanic museum':'Museo Oceánico',
  'seaside cycling road':'Camino de bicis',
  'devon corporation':'Devon S.A.',
  'battle tent':'Carpa Batalla',
  'contest hall':'Sala de Concursos'
};

/* Regiones, para las rutas */
const REGIONES = {
  kanto:'Kanto', johto:'Johto', hoenn:'Hoenn', sinnoh:'Sinnoh',
  unova:'Teselia', kalos:'Kalos', alola:'Alola', galar:'Galar',
  hisui:'Hisui', paldea:'Paldea'
};

/* Sufijos de área: se traducen palabra por palabra */
const SUFIJOS = {
  area:'', entrance:'entrada', exit:'salida', outside:'exterior',
  inside:'interior', interior:'interior', exterior:'exterior',
  gate:'puerta', north:'norte', south:'sur', east:'este', west:'oeste',
  northern:'norte', southern:'sur', eastern:'este', western:'oeste',
  northeast:'noreste', northwest:'noroeste', southeast:'sureste', southwest:'suroeste',
  main:'principal', back:'fondo', front:'frente', center:'centro', middle:'centro',
  upper:'superior', lower:'inferior', inner:'interior', outer:'exterior',
  left:'izquierda', right:'derecha', end:'final', top:'cima', bottom:'base',
  summit:'cima', peak:'cima', base:'base', roof:'azotea', basement:'sótano',
  floor:'planta', room:'sala', hall:'sala', chamber:'cámara', corridor:'pasillo',
  kitchen:'cocina', cabin:'camarote', deck:'cubierta', dock:'muelle', port:'puerto',
  yard:'patio', garden:'jardín', clearing:'claro',
  grass:'hierba', water:'agua', surf:'surf', underwater:'bajo el agua',
  sea:'mar', pond:'estanque', river:'río', lake:'lago',
  cave:'cueva', tower:'torre', house:'casa', shop:'tienda',
  low:'marea baja', high:'marea alta', tide:'', ice:'hielo',
  first:'primera', second:'segunda', third:'tercera'
};

/* Palabras genéricas, por si hay que armar un nombre desde cero */
const GENERICAS = {
  route:'Ruta', city:'Ciudad', town:'Pueblo', village:'Aldea',
  forest:'Bosque', woods:'Bosque', mt:'Monte', mount:'Monte',
  island:'Isla', islands:'Islas', road:'Camino', path:'Senda',
  bridge:'Puente', tunnel:'Túnel', ruins:'Ruinas', park:'Parque',
  valley:'Valle', canyon:'Cañón', desert:'Desierto', beach:'Playa',
  cape:'Cabo', bay:'Bahía', falls:'Cataratas', well:'Pozo',
  mine:'Mina', mansion:'Mansión', castle:'Castillo', tomb:'Tumba',
  lab:'Laboratorio', plateau:'Meseta', meadow:'Prado', marsh:'Pantano',
  swamp:'Ciénaga', volcano:'Volcán', crater:'Cráter', farm:'Granja',
  gym:'Gimnasio', league:'Liga', zone:'Zona', hideout:'Guarida',
  lighthouse:'Faro', museum:'Museo', stadium:'Estadio', plant:'Central'
};

/* Pisos: 1f, b2f, 3f... */
function _piso(t){
  const m = t.match(/^(b?)(\d+)f$/);
  if(!m) return null;
  return m[1] ? 'Sótano '+m[2] : 'Planta '+m[2];
}

function _capitalizar(t){
  return t.split(' ').filter(Boolean)
    .map(p=>p.charAt(0).toUpperCase()+p.slice(1)).join(' ');
}

function _palabra(p){
  const piso = _piso(p);
  if(piso) return piso;
  if(SUFIJOS[p] !== undefined) return SUFIJOS[p];
  if(GENERICAS[p]) return GENERICAS[p];
  if(/^\d+$/.test(p)) return p;
  return p.charAt(0).toUpperCase()+p.slice(1);
}

/* Traduce el trozo que sobra tras quitar el nombre del lugar */
function _sufijo(resto){
  if(!resto) return '';
  const partes = resto.split('-').filter(Boolean);
  if(!partes.length) return '';

  /* "towards-<lugar>" se traduce como "hacia <lugar>" */
  const i = partes.indexOf('towards');
  if(i !== -1){
    const antes = _sufijo(partes.slice(0,i).join('-'));
    const destinoEn = partes.slice(i+1).join(' ');
    const destino = buscarLugarEn(destinoEn) || _capitalizar(destinoEn);
    return (antes ? antes+' ' : '') + 'hacia ' + destino;
  }

  /* "<nombre>-chamber" → "Cámara <nombre>" */
  const ultima = partes[partes.length-1];
  const nucleos = {chamber:'Cámara', room:'Sala', gate:'Puerta', entrance:'Entrada',
                   hall:'Sala', house:'Casa', cave:'Cueva', tower:'Torre'};
  if(partes.length>1 && nucleos[ultima]){
    const resto2 = partes.slice(0,-1).map(_palabra).filter(Boolean).join(' ');
    return resto2 ? nucleos[ultima]+' '+resto2 : nucleos[ultima];
  }

  return partes.map(_palabra).filter(Boolean).join(' ');
}

/* Patrones para lugares que no están en el diccionario.
   "Eterna Forest" → "Bosque Eterna": el nombre propio se conserva
   y el sustantivo pasa al español, así nunca queda medio traducido. */
const PATRON_FINAL = {
  forest:'Bosque', woods:'Bosque', cave:'Cueva', cavern:'Caverna',
  city:'Ciudad', town:'Pueblo', village:'Aldea', island:'Isla',
  islands:'Islas', lake:'Lago', river:'Río', sea:'Mar', bay:'Bahía',
  beach:'Playa', cape:'Cabo', tower:'Torre', bridge:'Puente',
  tunnel:'Túnel', road:'Camino', path:'Senda', trail:'Sendero',
  ruins:'Ruinas', temple:'Templo', shrine:'Santuario', park:'Parque',
  garden:'Jardín', gardens:'Jardines', valley:'Valle', canyon:'Cañón',
  desert:'Desierto', falls:'Cataratas', waterfall:'Catarata',
  well:'Pozo', mine:'Mina', mines:'Minas', mansion:'Mansión',
  castle:'Castillo', tomb:'Tumba', lab:'Laboratorio', plateau:'Meseta',
  plains:'Llanura', meadow:'Prado', marsh:'Pantano', swamp:'Ciénaga',
  volcano:'Volcán', crater:'Cráter', ranch:'Rancho', farm:'Granja',
  port:'Puerto', harbor:'Puerto', pier:'Muelle', gym:'Gimnasio',
  league:'Liga', zone:'Zona', chamber:'Cámara', hideout:'Guarida',
  lighthouse:'Faro', museum:'Museo', stadium:'Estadio', mountain:'Montaña',
  hill:'Colina', hills:'Colinas', pass:'Paso', gate:'Puerta',
  bunker:'Búnker', tunnels:'Túneles', springs:'Manantiales',
  chateau:'Mansión', center:'Centro', square:'Plaza', street:'Calle',
  building:'Edificio', station:'Estación', factory:'Fábrica',
  laboratory:'Laboratorio', graveyard:'Cementerio', den:'Guarida',
  grove:'Arboleda', jungle:'Selva', canal:'Canal', reservoir:'Embalse',
  quarry:'Cantera', tundra:'Tundra', glacier:'Glaciar', dome:'Cúpula',
  colosseum:'Coliseo', arena:'Arena', altar:'Altar', shore:'Orilla',
  cliff:'Acantilado', cliffs:'Acantilados', bog:'Ciénaga', dunes:'Dunas',
  province:'Provincia', area:'Zona', district:'Distrito', sector:'Sector',
  isle:'Isla', islet:'Islote', peak:'Pico', ridge:'Cresta', basin:'Cuenca',
  wilds:'Paraje', fields:'Campos', field:'Campo', flats:'Llanos',
  hollow:'Hondonada', outskirts:'Afueras', trench:'Fosa', reef:'Arrecife',
  depths:'Profundidades', ravine:'Barranco', terrace:'Terraza',
  courtyard:'Patio', chapel:'Capilla', tomb2:'Tumba', spire:'Aguja'
};
/* Palabras iniciales: "Mt. Coronet" → "Monte Coronet" */
const PATRON_INICIO = {
  mt:'Monte', mount:'Monte', lake:'Lago', route:'Ruta', cape:'Cabo',
  fort:'Fuerte', old:'Viejo', new:'Nuevo', great:'Gran'
};

function _porPatron(k){
  const partes = k.split(' ').filter(Boolean);
  if(partes.length < 2) return null;

  const primera = partes[0], ultima = partes[partes.length-1];
  if(PATRON_INICIO[primera]){
    const propio = _capitalizar(partes.slice(1).join(' '));
    return PATRON_INICIO[primera]+' '+propio;
  }
  if(PATRON_FINAL[ultima]){
    const propio = _capitalizar(partes.slice(0,-1).join(' '));
    return PATRON_FINAL[ultima]+' '+propio;
  }
  return null;
}

/* Busca un nombre en inglés en el diccionario */
function buscarLugarEn(nombreEn){
  const k = _clave(nombreEn);
  if(!k) return null;
  if(LUGARES_EN[k]) return LUGARES_EN[k];

  /* Rutas: "Kanto Route 2", "Route 104" */
  const r = k.match(/^(?:([a-z]+) )?(?:sea )?route (\d+)$/);
  if(r){
    const reg = r[1] && REGIONES[r[1]] ? ' ('+REGIONES[r[1]]+')' : '';
    return 'Ruta '+r[2]+reg;
  }
  const r2 = k.match(/^(?:([a-z]+) )?route (\d+) (.+)$/);
  if(r2){
    const reg = r2[1] && REGIONES[r2[1]] ? ' ('+REGIONES[r2[1]]+')' : '';
    return 'Ruta '+r2[2]+reg+' '+_capitalizar(r2[3]);
  }

  return _porPatron(k);
}

/**
 * Traduce el nombre de un área.
 * @param {string} slugArea    identificador del área (ej. 'mt-moon-1f')
 * @param {string} [esApi]     nombre en español que devolvió la API
 * @param {string} [enApi]     nombre EN INGLÉS del lugar padre
 * @param {string} [slugLugar] identificador del lugar padre (ej. 'mt-moon')
 */
function traducirLugar(slugArea, esApi, enApi, slugLugar){
  if(!slugArea && !enApi) return '';
  const area = (slugArea||'').toLowerCase();
  const lugar = (slugLugar||'').toLowerCase();

  /* 1. El sufijo sale de restar el lugar al área: exacto, sin adivinar */
  let resto = '';
  if(lugar && area.startsWith(lugar)){
    resto = area.slice(lugar.length).replace(/^-/,'');
  }
  if(resto === 'area') resto = '';

  /* 2. Nombre base */
  let base = (esApi && esApi.trim()) ? esApi.trim() : null;
  if(!base && enApi) base = buscarLugarEn(enApi);
  if(!base && enApi && enApi.trim()) base = _capitalizar(_clave(enApi));

  /* 3. Sin nombre del lugar: se arma desde el identificador */
  if(!base){
    const sinResto = resto && area.endsWith(resto)
      ? area.slice(0, area.length-resto.length).replace(/-$/,'')
      : area.replace(/-area$/,'');
    base = buscarLugarEn(sinResto.replace(/-/g,' ')) || _sufijo(sinResto);
  }

  const suf = _sufijo(resto);
  return suf ? base+' · '+suf : base;
}

function traducirMetodo(slug, esApi){
  if(esApi && esApi.trim()) return esApi;
  const M = {
    walk:'Hierba alta o cueva', 'old-rod':'Caña vieja', 'good-rod':'Caña buena',
    'super-rod':'Supercaña', surf:'Surf', 'rock-smash':'Golpe Roca',
    headbutt:'Golpe Cabeza', gift:'Regalo', 'gift-egg':'Huevo de regalo',
    'only-one':'Encuentro único', seaweed:'Algas'
  };
  return M[slug] || slug.replace(/-/g,' ');
}

window.PopoTrad = {
  LUGARES_EN, SUFIJOS, GENERICAS, REGIONES,
  traducirLugar, traducirMetodo, buscarLugarEn
};
