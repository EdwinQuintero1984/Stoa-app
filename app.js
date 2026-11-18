/**
 * 1. CATÁLOGO DE LOS 10 NIVELES E INSIGNIAS SVG
 */
const NIVELES_ESTOICOS = [
    { nivel: 1, titulo: "Ciudadano de Atenas", requisito: "Inicio del camino filosófico.", svg: `<svg viewBox="0 0 64 64" fill="none" stroke="var(--gold-primary)" stroke-width="2"><circle cx="32" cy="32" r="28" stroke-dasharray="4 2"/><path d="M18 46h28M22 46V26M32 46V26M42 46V26M16 26l16-10 16 10H16z"/></svg>` },
    { nivel: 2, titulo: "Oyente del Pórtico", requisito: "Nivel 2 en los pilares.", svg: `<svg viewBox="0 0 64 64" fill="none" stroke="var(--gold-primary)" stroke-width="2"><circle cx="32" cy="32" r="28"/><path d="M20 18h20a4 4 0 0 1 4 4v20a4 4 0 0 1-4 4H20a4 4 0 0 1-4-4V22a4 4 0 0 1 4-4z"/><path d="M24 26h16M24 32h16M24 38h10"/></svg>` },
    { nivel: 3, titulo: "Discípulo de Zenón", requisito: "Nivel 3 en los pilares.", svg: `<svg viewBox="0 0 64 64" fill="none" stroke="var(--gold-primary)" stroke-width="2"><circle cx="32" cy="32" r="28"/><path d="M32 14v36M22 22c0-4 20-4 20 0s-20 8-20 12 20 4 20 0"/><circle cx="32" cy="14" r="3" fill="var(--gold-light)"/></svg>` },
    { nivel: 4, titulo: "Guardián de la Razón", requisito: "Nivel 4 en los pilares.", svg: `<svg viewBox="0 0 64 64" fill="none" stroke="var(--gold-primary)" stroke-width="2"><circle cx="32" cy="32" r="28"/><path d="M32 12l16 8v14c0 11-16 18-16 18S16 45 16 34V20l16-8z"/><circle cx="32" cy="30" r="5"/></svg>` },
    { nivel: 5, titulo: "Practicante de Epicteto", requisito: "Nivel 5 en los pilares.", svg: `<svg viewBox="0 0 64 64" fill="none" stroke="var(--gold-primary)" stroke-width="2"><circle cx="32" cy="32" r="28"/><path d="M22 32a6 6 0 0 1 6-6h8a6 6 0 0 1 0 12h-8a6 6 0 0 1-6-6z"/><path d="M14 32h8M42 32h8" stroke-width="2.5"/><path d="M29 22l6 20" stroke="var(--gold-light)"/></svg>` },
    { nivel: 6, titulo: "Centinela de la Virtud", requisito: "Nivel 6 en los pilares.", svg: `<svg viewBox="0 0 64 64" fill="none" stroke="var(--gold-primary)" stroke-width="2"><circle cx="32" cy="32" r="28"/><path d="M32 14v36M24 20h16M28 50h8"/><path d="M22 32l10-12 10 12-10 12-10-12z"/></svg>` },
    { nivel: 7, titulo: "Consejero de Séneca", requisito: "Nivel 7 en los pilares.", svg: `<svg viewBox="0 0 64 64" fill="none" stroke="var(--gold-primary)" stroke-width="2"><circle cx="32" cy="32" r="28"/><path d="M22 16h20l-6 16 6 16H22l6-16-6-16z"/><path d="M26 44h12" stroke="var(--gold-light)"/></svg>` },
    { nivel: 8, titulo: "Ciudadela Interior", requisito: "Nivel 8 en los pilares.", svg: `<svg viewBox="0 0 64 64" fill="none" stroke="var(--gold-primary)" stroke-width="2"><circle cx="32" cy="32" r="28"/><path d="M18 46V24h6v4h4v-4h8v4h4v-4h6v22H18z"/><path d="M28 46v-10a4 4 0 0 1 8 0v10"/></svg>` },
    { nivel: 9, titulo: "Filósofo Emperador", requisito: "Nivel 9 en los pilares.", svg: `<svg viewBox="0 0 64 64" fill="none" stroke="var(--gold-primary)" stroke-width="2"><circle cx="32" cy="32" r="28"/><path d="M22 46c-6-6-8-16-4-24M42 46c6-6 8-16 4-24"/><polygon points="32,16 35,24 43,24 37,29 39,37 32,32 25,37 27,29 21,24 29,24" fill="var(--gold-light)"/></svg>` },
    { nivel: 10, titulo: "Maestro del Logos", requisito: "Nivel 10 en todos los pilares.", svg: `<svg viewBox="0 0 64 64" fill="none" stroke="var(--gold-light)" stroke-width="2"><circle cx="32" cy="32" r="29" stroke="var(--gold-primary)" stroke-width="2.5"/><circle cx="32" cy="32" r="14"/><circle cx="32" cy="32" r="5" fill="var(--gold-primary)"/><path d="M32 6v10M32 48v10M6 32h10M48 32h10"/></svg>` }
];

/**
 * 2. BANCO DE TAREAS Y DILEMAS
 */
const BANCO_CONTENIDO = {
    sabiduria: { nombre: "Sabiduría", niveles: generarNivelesGenericos("Sabiduría", "cuestionar impresiones y aplicar el juicio racional") },
    coraje: { nombre: "Coraje", niveles: generarNivelesGenericos("Coraje", "afrontar el miedo y actuar con firmeza moral") },
    justicia: { nombre: "Justicia", niveles: generarNivelesGenericos("Justicia", "actuar con equidad, honestidad y deber comunitario") },
    templanza: { nombre: "Templanza", niveles: generarNivelesGenericos("Templanza", "ejercer moderación y dominio de los apetitos") }
};

function generarNivelesGenericos(nombrePilar, tema) {
    const obj = {};
    for (let i = 1; i <= 10; i++) {
        obj[i] = {
            tareas: [
                { id: 1, texto: `Practicar ${tema} en un reto cotidiano (Nivel ${i})`, completada: false },
                { id: 2, texto: `Superar resistencia interna vinculada a ${nombrePilar.toLowerCase()}`, completada: false },
                { id: 3, texto: `Consolidar el hábito virtuoso en tu rutina diaria`, completada: false }
            ],
            dilema: {
                pregunta: `Situación crítica de Nivel ${i} en ${nombrePilar}. ¿Cómo procedes?`,
                opciones: [
                    { texto: "Actuar impulsivamente o ceder a la comodidad pasajera.", correcto: false, feedback: "Error. Esto quebranta la virtud." },
                    { texto: `Afrontar el dilema con firmeza y razón guiada por la ${nombrePilar}.`, correcto: true, feedback: `¡Excelente! Demuestras maestría en ${nombrePilar}.` },
                    { texto: "Eludir la responsabilidad para evitar complicaciones.", correcto: false, feedback: "Error. La evitación debilita el carácter." }
                ]
            }
        };
    }
    return obj;
}

/**
 * 3. ESTADO GLOBAL
 */
let usuarioActual = localStorage.getItem('stoa_active_user') || "Filósofo";

const state = {
    vistaActual: 'pilares',
    pilarEvaluando: null,
    avatarEquipado: 1,
    pilares: {
        sabiduria: { nombre: "Sabiduría", nivel: 1, progreso: 0, tareasCompletadas: [false, false, false] },
        coraje: { nombre: "Coraje", nivel: 1, progreso: 0, tareasCompletadas: [false, false, false] },
        justicia: { nombre: "Justicia", nivel: 1, progreso: 0, tareasCompletadas: [false, false, false] },
        templanza: { nombre: "Templanza", nivel: 1, progreso: 0, tareasCompletadas: [false, false, false] }
    },
    estadisticas: { rachaActual: 0, mejorRacha: 0, ultimaFechaPractica: null, tareasTotalesCompletadas: 0, pruebasSuperadas: 0 },
    diario: []
};

/**
 * 4. GENERADOR DEL AVATAR CABEZÓN (CHIBI ESTOICO) GARANTIZADO
 */
function obtenerAvatarCabezonSVG(nivel) {
    // Corona de laurel dorada visible desde el nivel 3 y completa en nivel 7+
    const laurel = nivel >= 3 
        ? `<path d="M18 22 C16 14, 24 8, 32 8 C40 8, 48 14, 46 22" stroke="#f3e5ab" stroke-width="2.5" stroke-dasharray="3 2" fill="none"/>` 
        : '';

    return `
    <svg viewBox="0 0 64 64" width="64" height="64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <!-- Cuerpo pequeño con Toga Clásica -->
        <path d="M21 58 C21 47, 25 43, 32 43 C39 43, 43 47, 43 58 Z" fill="#1e2430" stroke="#d4af37" stroke-width="2"/>
        <!-- Pliegue diagonal de la toga romana/griega -->
        <path d="M24 45 L40 57 M27 43 L36 58" stroke="#d4af37" stroke-width="1.5"/>
        
        <!-- Cabello rizado clásico (parte trasera/lateral) -->
        <circle cx="20" cy="24" r="5" fill="#161a22" stroke="#d4af37" stroke-width="1.8"/>
        <circle cx="44" cy="24" r="5" fill="#161a22" stroke="#d4af37" stroke-width="1.8"/>
        <circle cx="23" cy="16" r="5" fill="#161a22" stroke="#d4af37" stroke-width="1.8"/>
        <circle cx="41" cy="16" r="5" fill="#161a22" stroke="#d4af37" stroke-width="1.8"/>
        <circle cx="32" cy="13" r="6" fill="#161a22" stroke="#d4af37" stroke-width="1.8"/>

        <!-- Cabeza grande estilo cabezón (Chibi) -->
        <circle cx="32" cy="26" r="13" fill="#161a22" stroke="#d4af37" stroke-width="2"/>
        
        <!-- Cejas filosóficas -->
        <path d="M24 22 Q27 20 30 22" stroke="#f3e5ab" stroke-width="1.5" stroke-linecap="round"/>
        <path d="M34 22 Q37 20 40 22" stroke="#f3e5ab" stroke-width="1.5" stroke-linecap="round"/>

        <!-- Ojos expresivos -->
        <circle cx="27" cy="25" r="1.8" fill="#f3e5ab"/>
        <circle cx="37" cy="25" r="1.8" fill="#f3e5ab"/>

        <!-- Barba frondosa de filósofo antiguo -->
        <path d="M21 28 C21 39, 43 39, 43 28 C40 31, 36 31, 32 31 C28 31, 24 31, 21 28 Z" fill="#d4af37"/>
        
        <!-- Bigote y boca serena -->
        <path d="M28 31 Q32 29 36 31" stroke="#161a22" stroke-width="1.5" fill="none"/>

        <!-- Corona de Laurel -->
        ${laurel}
    </svg>`;
}

/**
 * 5. CONTROL DE FECHAS Y RACHAS
 */
function obtenerFechaHoyISO() {
    const hoy = new Date();
    return `${hoy.getFullYear()}-${String(hoy.getMonth() + 1).padStart(2, '0')}-${String(hoy.getDate()).padStart(2, '0')}`;
}

function obtenerFechaAyerISO() {
    const ayer = new Date();
    ayer.setDate(ayer.getDate() - 1);
    return `${ayer.getFullYear()}-${String(ayer.getMonth() + 1).padStart(2, '0')}-${String(ayer.getDate()).padStart(2, '0')}`;
}

function verificarEstadoRacha() {
    const hoy = obtenerFechaHoyISO();
    const ayer = obtenerFechaAyerISO();
    const ultima = state.estadisticas.ultimaFechaPractica;
    if (ultima && ultima !== hoy && ultima !== ayer) {
        state.estadisticas.rachaActual = 0;
        guardarProgresoLocal();
    }
}

function registrarActividadDiaria() {
    const hoy = obtenerFechaHoyISO();
    const ayer = obtenerFechaAyerISO();
    const ultima = state.estadisticas.ultimaFechaPractica;
    if (ultima !== hoy) {
        if (ultima === ayer) {
            state.estadisticas.rachaActual += 1;
        } else {
            state.estadisticas.rachaActual = 1;
        }
        state.estadisticas.ultimaFechaPractica = hoy;
        if (state.estadisticas.rachaActual > state.estadisticas.mejorRacha) {
            state.estadisticas.mejorRacha = state.estadisticas.rachaActual;
        }
    }
}

function obtenerPilarMasFuerte() {
    let mejorPilar = "Equilibrado";
    let maxPuntos = -1;
    const valores = Object.values(state.pilares).map(p => (p.nivel * 100) + p.progreso);
    if (valores.every(v => v === valores[0])) return "Equilibrado";
    for (const pilar of Object.values(state.pilares)) {
        const puntuacion = (pilar.nivel * 100) + pilar.progreso;
        if (puntuacion > maxPuntos) { maxPuntos = puntuacion; mejorPilar = pilar.nombre; }
    }
    return mejorPilar;
}

function calcularNivelGlobal() {
    const niveles = Object.values(state.pilares).map(p => p.nivel);
    const suma = niveles.reduce((a, b) => a + b, 0);
    if (suma === 40) return 10;
    return Math.min(9, Math.floor(suma / 4));
}

function actualizarCabeceraPerfil() {
    const nivelActual = calcularNivelGlobal();
    if (state.avatarEquipado > nivelActual) state.avatarEquipado = nivelActual;
    const insigniaEquipada = NIVELES_ESTOICOS.find(n => n.nivel === state.avatarEquipado) || NIVELES_ESTOICOS[0];
    
    document.getElementById('display-user').innerText = usuarioActual;
    document.getElementById('display-rank').innerText = `Nivel ${nivelActual}: ${insigniaEquipada.titulo}`;
    document.getElementById('equipped-avatar-box').innerHTML = insigniaEquipada.svg;
}

function equiparAvatar(nivel) {
    state.avatarEquipado = nivel;
    guardarProgresoLocal();
    actualizarCabeceraPerfil();
    renderizarApp();
}

function cargarProgresoLocal() {
    const guardado = localStorage.getItem(`stoa_state_${usuarioActual}`);
    if (guardado) {
        try {
            const data = JSON.parse(guardado);
            if (data.pilares) Object.assign(state.pilares, data.pilares);
            if (data.diario) state.diario = data.diario;
            if (data.avatarEquipado) state.avatarEquipado = data.avatarEquipado;
            if (data.estadisticas) Object.assign(state.estadisticas, data.estadisticas);
        } catch (e) { console.error(e); }
    } else {
        state.pilares = {
            sabiduria: { nombre: "Sabiduría", nivel: 1, progreso: 0, tareasCompletadas: [false, false, false] },
            coraje: { nombre: "Coraje", nivel: 1, progreso: 0, tareasCompletadas: [false, false, false] },
            justicia: { nombre: "Justicia", nivel: 1, progreso: 0, tareasCompletadas: [false, false, false] },
            templanza: { nombre: "Templanza", nivel: 1, progreso: 0, tareasCompletadas: [false, false, false] }
        };
        state.estadisticas = { rachaActual: 0, mejorRacha: 0, ultimaFechaPractica: null, tareasTotalesCompletadas: 0, pruebasSuperadas: 0 };
        state.diario = [];
    }
    verificarEstadoRacha();
    actualizarCabeceraPerfil();
}

function guardarProgresoLocal() {
    localStorage.setItem(`stoa_state_${usuarioActual}`, JSON.stringify({
        pilares: state.pilares,
        diario: state.diario,
        avatarEquipado: state.avatarEquipado,
        estadisticas: state.estadisticas
    }));
    localStorage.setItem('stoa_active_user', usuarioActual);
}

function cambiarUsuario() {
    const nuevo = prompt("Introduce tu nombre de filósofo:", usuarioActual);
    if (nuevo && nuevo.trim() !== "") {
        usuarioActual = nuevo.trim();
        state.avatarEquipado = 1;
        cargarProgresoLocal();
        renderizarApp();
    }
}

/**
 * 6. RESPALDO (EXPORTAR E IMPORTAR)
 */
function exportarProgreso() {
    const datos = localStorage.getItem(`stoa_state_${usuarioActual}`);
    if (!datos) return alert("No hay datos para exportar.");
    const blob = new Blob([datos], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `stoa_respaldo_${usuarioActual.toLowerCase().replace(/\s+/g, '_')}.json`;
    a.click();
    URL.revokeObjectURL(url);
}

function importarProgreso(event) {
    const archivo = event.target.files[0];
    if (!archivo) return;
    const lector = new FileReader();
    lector.onload = function(e) {
        try {
            const contenido = e.target.result;
            JSON.parse(contenido);
            localStorage.setItem(`stoa_state_${usuarioActual}`, contenido);
            cargarProgresoLocal();
            renderizarApp();
            alert("¡Progreso importado con éxito!");
        } catch (err) { alert("Archivo de respaldo no válido."); }
    };
    lector.readAsText(archivo);
}

/**
 * 7. PARTÍCULAS DORADAS
 */
function lanzarParticulasDoradas(mensajeTexto, callback) {
    const overlay = document.createElement('div');
    overlay.className = 'particula-overlay';
    const core = document.createElement('div');
    core.className = 'particula-core';
    const mensaje = document.createElement('div');
    mensaje.className = 'particula-mensaje';
    mensaje.innerHTML = `✦ ASCENSO ESTOICO ✦<br><span style="font-size:1.4rem; color:var(--text-main);">${mensajeTexto}</span>`;
    overlay.appendChild(core);
    overlay.appendChild(mensaje);
    document.body.appendChild(overlay);
    setTimeout(() => { overlay.remove(); if (callback) callback(); }, 1800);
}

/**
 * 8. NAVEGACIÓN Y RENDERIZADO
 */
function cambiarVista(vista) {
    state.vistaActual = vista;
    state.pilarEvaluando = null;
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
    if (vista === 'pilares') document.getElementById('nav-pilares').classList.add('active');
    if (vista === 'diario') document.getElementById('nav-diario').classList.add('active');
    if (vista === 'insignias') document.getElementById('nav-insignias').classList.add('active');
    renderizarApp();
}

function renderizarBarraEstadisticas() {
    const est = state.estadisticas;
    const pilarDominante = obtenerPilarMasFuerte();
    const hoyPracticado = est.ultimaFechaPractica === obtenerFechaHoyISO();
    const nivelGlobal = calcularNivelGlobal();

    return `
        <div class="philosopher-avatar-container">
            <div class="chibi-svg-box" style="display: flex; align-items: center; justify-content: center; width: 60px; height: 60px; border-radius: 50%; background: #0d0f12; border: 2px solid var(--gold-primary);">
                <svg width="40" height="40" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <!-- Túnica -->
                    <path d="M18 54 C18 44, 24 40, 32 40 C40 40, 46 44, 46 54 Z" fill="#262c38" stroke="#d4af37" stroke-width="2.5"/>
                    <!-- Cabeza grande -->
                    <circle cx="32" cy="26" r="14" fill="#161a22" stroke="#d4af37" stroke-width="2.5"/>
                    <!-- Ojos -->
                    <circle cx="27" cy="25" r="2" fill="#f3e5ab"/>
                    <circle cx="37" cy="25" r="2" fill="#f3e5ab"/>
                    <!-- Barba -->
                    <path d="M25 31 C25 38, 39 38, 39 31 C39 35, 25 35, 25 31 Z" fill="#d4af37"/>
                    <!-- Boca seria -->
                    <line x1="29" y1="33" x2="35" y2="33" stroke="#161a22" stroke-width="2" stroke-linecap="round"/>
                </svg>
            </div>
            <div class="philosopher-info">
                <h3 class="gold-gradient-text">Tutor Estoico (Nivel ${nivelGlobal})</h3>
                <p>"La disciplina diaria moldea el alma como el fuego moldea el acero."</p>
            </div>
        </div>

        <div class="stats-ribbon">
            <div class="stat-box">
                <div class="stat-value">
                    <span class="streak-flame">${est.rachaActual > 0 ? '🔥' : '🕯️'}</span>
                    <span>${est.rachaActual} ${est.rachaActual === 1 ? 'Día' : 'Días'}</span>
                </div>
                <span class="stat-label">Racha (Récord: ${est.mejorRacha})</span>
                <small style="color:${hoyPracticado ? 'var(--gold-primary)' : 'var(--text-muted)'}; font-size:0.75rem; margin-top:2px;">
                    ${hoyPracticado ? '✓ Práctica cumplida hoy' : 'Practica hoy para mantener tu racha'}
                </small>
            </div>
            <div class="stat-box">
                <div class="stat-value">${est.tareasTotalesCompletadas}</div>
                <span class="stat-label">Ejercicios Ejecutados</span>
            </div>
            <div class="stat-box">
                <div class="stat-value">${est.pruebasSuperadas}</div>
                <span class="stat-label">Pruebas del Pórtico</span>
            </div>
            <div class="stat-box">
                <div class="stat-value" style="font-size:1.15rem;">${pilarDominante}</div>
                <span class="stat-label">Virtud Predominante</span>
            </div>
        </div>
    `;
}

function renderizarApp() {
    const contenedor = document.getElementById('app-content');
    contenedor.innerHTML = "";
    actualizarCabeceraPerfil();

    if (state.pilarEvaluando) {
        renderizarPruebaPortico(state.pilarEvaluando, contenedor);
        return;
    }

    if (state.vistaActual === 'pilares') {
        let html = renderizarBarraEstadisticas();
        html += `<div class="pillar-grid">`;
        for (const [key, pilar] of Object.entries(state.pilares)) {
            let botonAccion = pilar.progreso === 100 && pilar.nivel < 10
                ? `<button class="btn-small" onclick="iniciarPruebaPortico('${key}')" style="border-color:var(--gold-primary); color:var(--gold-light);">Prueba del Pórtico</button>`
                : `<button class="btn-small" onclick="verDetallePilar('${key}')">Practicar</button>`;

            html += `
                <div class="pillar-card">
                    <h3 class="gold-gradient-text">${pilar.nombre}</h3>
                    <p>Nivel: ${pilar.nivel} / 10</p>
                    <p>Progreso: ${pilar.progreso}%</p>
                    <div style="background:#262c38; height:6px; margin:10px 0; border-radius:3px; overflow:hidden;">
                        <div style="background:var(--gold-primary); width:${pilar.progreso}%; height:100%;"></div>
                    </div>
                    ${botonAccion}
                </div>
            `;
        }
        html += `</div>`;

        html += `
            <div class="backup-bar">
                <button class="btn-small" onclick="exportarProgreso()">Exportar Respaldo (.json)</button>
                <button class="btn-small" onclick="document.getElementById('input-importar').click()">Importar Respaldo</button>
                <input type="file" id="input-importar" style="display:none" accept=".json" onchange="importarProgreso(event)">
            </div>
        `;
        contenedor.innerHTML = html;

    } else if (state.vistaActual === 'diario') {
        let entradasHTML = state.diario.map(e => `
            <div style="background:var(--panel-bg); border:1px solid var(--panel-border); padding:15px; margin-bottom:10px;">
                <small style="color:var(--gold-primary);">${e.fecha}</small>
                <p style="margin:5px 0 0 0;">${e.texto}</p>
            </div>
        `).join('') || '<p style="color:var(--text-muted);">Aún no hay reflexiones registradas en tu bitácora.</p>';

        contenedor.innerHTML = `
            <h2 class="gold-gradient-text" style="text-align:center;">Bitácora de Séneca (${state.diario.length} registros)</h2>
            <p style="text-align:center; color:var(--text-muted); margin-bottom:20px;">Examen nocturno: ¿Qué error corregiste hoy?</p>
            <div style="max-width:600px; margin:0 auto 30px auto;">
                <textarea id="texto-diario" rows="4" placeholder="Escribe tu reflexión..." style="width:100%; background:var(--panel-bg); color:var(--text-main); border:1px solid var(--panel-border); padding:10px; font-family:'Cormorant Garamond',serif; font-size:1.1rem;"></textarea>
                <button class="btn-small" onclick="guardarEntradaDiario()" style="margin-top:10px; width:100%;">Registrar en la Bitácora</button>
            </div>
            <div style="max-width:600px; margin:0 auto;">${entradasHTML}</div>
        `;

    } else if (state.vistaActual === 'insignias') {
        const nivelDesbloqueado = calcularNivelGlobal();
        const porcentajeTotal = Math.round((Object.values(state.pilares).reduce((acc, p) => acc + p.nivel, 0) / 40) * 100);

        let insigniasHTML = `
            <div class="pantheon-header-stats" style="background:var(--panel-bg); border:1px solid var(--gold-dark); padding:15px; text-align:center; margin-bottom:25px;">
                <h3 class="gold-gradient-text" style="margin:0 0 8px 0;">Maestría Total de la Stoa: ${porcentajeTotal}%</h3>
                <p style="margin:0; color:var(--text-muted);">Has desbloqueado <strong>${nivelDesbloqueado} de 10</strong> avatares imperiales.</p>
            </div>
            <div class="badge-grid-10">
        `;

        NIVELES_ESTOICOS.forEach(item => {
            const desbloqueado = item.nivel <= nivelDesbloqueado;
            const equipado = state.avatarEquipado === item.nivel;
            const claseEstado = equipado ? 'unlocked equipped' : (desbloqueado ? 'unlocked' : 'locked');

            let accionHTML = "";
            if (equipado) {
                accionHTML = `<span style="color:var(--gold-light); font-size:0.8rem; font-family:'Cinzel',serif;">★ Activo</span>`;
            } else if (desbloqueado) {
                accionHTML = `<button class="btn-small" style="margin:0;" onclick="equiparAvatar(${item.nivel})">Equipar</button>`;
            } else {
                accionHTML = `<span style="color:var(--text-muted); font-size:0.8rem;">Bloqueado</span>`;
            }

            insigniasHTML += `
                <div class="badge-card ${claseEstado}">
                    <div class="badge-svg-wrapper">${item.svg}</div>
                    <small style="color:var(--gold-primary); font-family:'Cinzel',serif;">GRADO ${item.nivel}</small>
                    <h4 style="margin:5px 0; color:var(--text-main); font-family:'Cinzel',serif;">${item.titulo}</h4>
                    <p style="font-size:0.85rem; color:var(--text-muted); min-height:38px;">${item.requisito}</p>
                    <div style="margin-top:10px;">${accionHTML}</div>
                </div>
            `;
        });
        insigniasHTML += `</div>`;
        contenedor.innerHTML = `<h2 class="gold-gradient-text" style="text-align:center;">Panteón de Insignias</h2>` + insigniasHTML;
    }
}

/**
 * 9. TAREAS Y EVALUACIÓN
 */
function verDetallePilar(key) {
    const pilarState = state.pilares[key];
    const datosNivel = BANCO_CONTENIDO[key].niveles[pilarState.nivel];
    const contenedor = document.getElementById('app-content');
    
    if (!pilarState.tareasCompletadas || pilarState.tareasCompletadas.length !== datosNivel.tareas.length) {
        pilarState.tareasCompletadas = new Array(datosNivel.tareas.length).fill(false);
    }

    let tareasHTML = `
        <button class="btn-small" onclick="cambiarVista('pilares')" style="margin-bottom:20px;">&larr; Volver a Pilares</button>
        <h2 class="gold-gradient-text">${BANCO_CONTENIDO[key].nombre} (Nivel ${pilarState.nivel} / 10)</h2>
        <p style="color:var(--text-muted);">Ejecuta estas prácticas diarias:</p>
        <div style="max-width:700px;">
    `;

    datosNivel.tareas.forEach((t, index) => {
        const completada = pilarState.tareasCompletadas[index];
        tareasHTML += `
            <div class="task-item">
                <span style="${completada ? 'text-decoration:line-through; color:var(--text-muted);' : ''}">${t.texto}</span>
                <button class="btn-small" onclick="completarTarea('${key}', ${index})">${completada ? 'Completada' : 'Ejecutar'}</button>
            </div>
        `;
    });
    tareasHTML += `</div>`;
    contenedor.innerHTML = tareasHTML;
}

function completarTarea(key, index) {
    const pilarState = state.pilares[key];
    const estabaCompletada = pilarState.tareasCompletadas[index];
    pilarState.tareasCompletadas[index] = !estabaCompletada;
    
    if (!estabaCompletada) {
        state.estadisticas.tareasTotalesCompletadas += 1;
        registrarActividadDiaria();
    } else if (state.estadisticas.tareasTotalesCompletadas > 0) {
        state.estadisticas.tareasTotalesCompletadas -= 1;
    }

    const total = pilarState.tareasCompletadas.length;
    const completadas = pilarState.tareasCompletadas.filter(Boolean).length;
    pilarState.progreso = Math.round((completadas / total) * 100);

    guardarProgresoLocal();
    verDetallePilar(key);
}

function iniciarPruebaPortico(key) {
    state.pilarEvaluando = key;
    renderizarApp();
}

function renderizarPruebaPortico(key, contenedor) {
    const pilarState = state.pilares[key];
    const datosNivel = BANCO_CONTENIDO[key].niveles[pilarState.nivel];
    let opcionesHTML = "";
    datosNivel.dilema.opciones.forEach((op, idx) => {
        opcionesHTML += `<button class="dilema-option" onclick="evaluarDilema('${key}', ${idx})">${op.texto}</button>`;
    });

    contenedor.innerHTML = `
        <div class="portico-card">
            <button class="btn-small" onclick="cambiarVista('pilares')" style="margin-bottom:15px;">&larr; Volver</button>
            <h2 class="gold-gradient-text">Prueba del Pórtico: ${BANCO_CONTENIDO[key].nombre} (Nivel ${pilarState.nivel})</h2>
            <p style="font-size:1.2rem; font-style:italic; margin-bottom:20px;">"${datosNivel.dilema.pregunta}"</p>
            <div>${opcionesHTML}</div>
        </div>
    `;
}

function evaluarDilema(key, opcionIdx) {
    const pilarState = state.pilares[key];
    const datosNivel = BANCO_CONTENIDO[key].niveles[pilarState.nivel];
    const opcion = datosNivel.dilema.opciones[opcionIdx];

    if (opcion.correcto) {
        const nivelPrevio = calcularNivelGlobal();
        pilarState.nivel++;
        pilarState.progreso = 0;
        pilarState.tareasCompletadas = [false, false, false];
        state.estadisticas.pruebasSuperadas += 1;
        registrarActividadDiaria();
        const nivelNuevo = calcularNivelGlobal();

        let mensajeExito = `¡Nivel ${pilarState.nivel} alcanzado en ${BANCO_CONTENIDO[key].nombre}!`;
        if (nivelNuevo > nivelPrevio) {
            const nuevaInsignia = NIVELES_ESTOICOS.find(n => n.nivel === nivelNuevo);
            mensajeExito += `<br>¡Nuevo Avatar: ${nuevaInsignia.titulo}!`;
        }

        state.pilarEvaluando = null;
        guardarProgresoLocal();
        lanzarParticulasDoradas(mensajeExito, () => renderizarApp());
    } else {
        alert(`Juicio Erróneo: ${opcion.feedback}`);
        state.pilarEvaluando = null;
        renderizarApp();
    }
}

function guardarEntradaDiario() {
    const texto = document.getElementById('texto-diario').value;
    if (texto.trim() !== "") {
        const fecha = new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' });
        state.diario.unshift({ fecha, texto });
        registrarActividadDiaria();
        guardarProgresoLocal();
        renderizarApp();
    }
}

window.onload = function() {
    cargarProgresoLocal();
    renderizarApp();
};