import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { activities, activityResources, moduleResources, modules, files, mySubsAppUrl } from './data.js';
import { boardCards } from './boardData.js';
import './style.css';

const entries = Object.entries(modules);
const normalize = text => text.normalize('NFD').replace(/\p{Diacritic}/gu, '').toLowerCase();
const paths = {
  pizarra:'M3 4h7v7H3zM14 4h7v7h-7zM3 15h7v5H3zM14 15h7v5h-7z',
  documentos:'M3 7h7l2 2h9v11H3zM3 7V4h7l2 2h7v3',
  emprendimiento:'M4 19V5m0 14h16M8 14l4-5 3 3 5-6',
  tributos:'M6 3h12v18l-3-2-3 2-3-2-3 2zM9 8h6m-6 4h6',
  nomina:'M3 6h18v12H3zM3 10h18m-14 4h4',
  liquidacion:'M6 3h8l4 4v14H6zM14 3v5h4m-9 6 2 2 4-4',
  search:'M15 15l5 5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0z',
  next:'M9 5l7 7-7 7',
  close:'m6 6 12 12M18 6 6 18',
  info:'M12 10v6m0-9h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z'
};
function Icon({ name }) {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d={paths[name]} /></svg>;
}

function DocumentViewer({ selection, close }) {
  const dialog = useRef(null);
  useEffect(() => {
    const element = dialog.current;
    if (selection && !element.open) element.showModal();
    if (!selection && element.open) element.close();
  }, [selection]);
  const path = selection && (selection.summary
    ? `docs/resumen-${files[selection.id].file}`
    : `docs/${files[selection.origin].file}`);
  const preview = path && path + (selection.page ? '#page=' + selection.page : '');
  return <dialog ref={dialog} aria-labelledby="document-title" onClose={close}>
    {selection && <>
      <div className="viewer-header">
        <div><p className="eyebrow">{modules[selection.id].name}</p><h2 id="document-title">{selection.title}</h2>
        {selection.page && <span>Página {selection.page} del PDF original</span>}</div>
        <button className="icon-button" aria-label="Cerrar visor" onClick={close} autoFocus><Icon name="close" /></button>
      </div>
      <iframe title={selection.title} src={preview} />
      <div className="viewer-actions"><a className="button" href={path} download>Descargar PDF</a><a className="button primary" href={preview} target="_blank" rel="noopener noreferrer">Abrir en otra pestaña</a></div>
    </>}
  </dialog>;
}

function SummaryButton({ id, open }) {
  return <button className="button primary" onClick={() => open({
    id,
    summary: true,
    title: `Resumen de ${modules[id].name.toLowerCase()}`
  })}>Ver resumen PDF</button>;
}

function EvidenceList({ docs, id, open }) {
  return docs.map(([title, page, origin]) => <button key={title} className="evidence" onClick={() => open({ id, title, page, origin: origin || id })}>
    <Icon name="documentos" /><span>{title}<small>PDF · Página {page}</small></span><Icon name="next" />
  </button>);
}

function ResourceLinks({ links }) {
  if (!links?.length) return null;
  return <ul className="resource-links">
    {links.map(([label, url]) => <li key={url}>
      <a className="button" href={url} target="_blank" rel="noopener noreferrer">{label} <span aria-hidden="true">↗</span></a>
    </li>)}
  </ul>;
}

function ActivityList({ items, id, open }) {
  return <section className="semester-activities" aria-label="Actividades del semestre">
    <div className="activities-heading"><h3>Actividades del semestre</h3><span>{items.length} {items.length === 1 ? 'actividad' : 'actividades'}</span></div>
    <ol className="activity-list">
      {items.map(({ title, body, page, origin = id, evidenceLabel = 'Ver evidencia', extra, resources }) => <li key={title}>
        <h4>{title}</h4>
        <p>{body}</p>
        {page && <div className="activity-sources">
          <button className="button" onClick={() => open({ id, origin, page, title })}>{evidenceLabel} <span>PDF p. {page}</span></button>
          {extra && <button className="button" onClick={() => open({ id, origin, page: extra[1], title: extra[0] })}>{extra[0]} <span>PDF p. {extra[1]}</span></button>}
        </div>}
        <ResourceLinks links={resources} />
      </li>)}
    </ol>
  </section>;
}

function ModuleCard({ id, module, focused, focus, open, term }) {
  const matches = (...parts) => normalize([module.name, files[id].title, files[id].detail, ...parts].join(' ')).includes(term);
  const docs = module.docs.filter(([title, page, origin]) => matches(title, page, files[origin || id].detail));
  const topics = module.topics.filter(topic => matches(...topic));
  const metrics = (module.metrics || []).filter(metric => matches(...metric, module.source));
  const tasks = activities[id].flatMap((task, index) => {
    const resources = activityResources[id]?.[index];
    return matches(task.title, task.body, resources?.map(([label]) => label).join(' '))
      ? [{ ...task, resources }] : [];
  });
  const pending = module.pending && matches(module.pending) ? module.pending : null;
  const summary = matches(module.intro, module.description);
  if (!summary && !topics.length && !docs.length && !metrics.length && !tasks.length && !pending) return null;
  return <article className={`module ${id} ${focused ? 'focused' : ''}`}>
    <header className="module-head"><div className="symbol"><Icon name={id} /></div><div><h2>{module.name}</h2><p>{focused ? module.intro : module.description}</p></div></header>
    {metrics.length > 0 && <div className="metrics">{(focused || term ? metrics : [id === 'emprendimiento' ? metrics[2] : metrics[0]]).map(([value,label]) => <div key={label}><strong>{value}</strong><small>{label}</small></div>)}</div>}
    {metrics.length > 0 && focused && <p>{module.source}</p>}
    {(focused || term) && topics.length > 0 && <div className="topics">{topics.map(([title, body]) => <section key={title}><h3>{title}</h3><p>{body}</p></section>)}</div>}
    <div className="document-actions"><SummaryButton id={id} open={open} /></div>
    {(focused || term) && tasks.length > 0 && <ActivityList items={tasks} id={id} open={open} />}
    {docs.length > 0 && <section className="evidences"><h3>Evidencias del semestre</h3><EvidenceList docs={focused || term ? docs : docs.slice(0,1)} id={id} open={open} /></section>}
    {pending && (focused || term ? <div className="pending"><Icon name="info" /><div><h3>Por adjuntar</h3><p>{pending.replace('Por adjuntar: ', '')}</p></div></div> : <div className="pending"><Icon name="info" /><span>Hay evidencias por adjuntar</span></div>)}
    {!focused && <button className="module-link" onClick={focus}>Explorar módulo <Icon name="next" /></button>}
  </article>;
}

function BoardCard({ card, id, open, enabled }) {
  const { label, title, reference, text, tiles, columns, rows, bars, note, action, page, origin = id } = card;
  const [flipped, setFlipped] = useState(false);
  const back = enabled && flipped;
  const showEvidence = () => open({ id, origin, page, title });
  const resetTilt = event => {
    event.currentTarget.style.removeProperty('--tilt-x');
    event.currentTarget.style.removeProperty('--tilt-y');
  };
  const tilt = event => {
    if (!enabled || back || event.pointerType !== 'mouse') return;
    const { left, top, width, height } = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty('--tilt-x', `${(0.5 - (event.clientY - top) / height) * 12}deg`);
    event.currentTarget.style.setProperty('--tilt-y', `${((event.clientX - left) / width - 0.5) * 14}deg`);
  };
  return <div className="board-card-perspective" data-flipped={back} onPointerMove={tilt} onPointerLeave={resetTilt}>
    {enabled && <button className="board-flip" aria-label={`${back ? 'Volver al frente de' : 'Voltear'} ${title}`} aria-pressed={back} onClick={() => setFlipped(value => !value)}>
      {back ? 'Ver frente' : 'Voltear 3D'}
    </button>}
    <div className="board-card-surface">
    <section className="board-card" inert={back}>
    <div className="board-card-meta"><span>{label}</span>{reference && <small>{reference}</small>}</div>
    <h3>{title}</h3>
    {text && <p>{text}</p>}
    {tiles && <dl className="board-card-tiles">{tiles.map(([key, value]) =>
      <div key={key}><dt>{key}</dt><dd>{value}</dd></div>
    )}</dl>}
    {rows && <table className="board-card-table" aria-label={title}>
      {columns && <thead><tr>{columns.map(column => <th key={column} scope="col">{column}</th>)}</tr></thead>}
      <tbody>{rows.map(([key, ...values]) => <tr key={key}><th scope="row">{key}</th>{values.map(value => <td key={value}>{value}</td>)}</tr>)}</tbody>
    </table>}
    {bars && <div className="board-bars">{bars.map(([key, value]) => <div key={key}>
      <div><span>{key}</span><strong>{value.toLocaleString('es-EC')} %</strong></div>
      <meter min={0} max={100} value={value} aria-label={key} />
    </div>)}</div>}
    <footer className="board-card-footer">
      {note && <span>{note}</span>}
      {page
        ? <button onClick={showEvidence}>{action} <Icon name="next" /></button>
        : <a href={`#${id}`}>{action} <Icon name="next" /></a>}
    </footer>
    </section>
    {enabled && <section className="board-card board-card-back" inert={!back}>
      <div className="board-card-meta"><span>{page ? 'Evidencia del semestre' : 'Actividad del semestre'}</span></div>
      <h3>{title}</h3>
      <p>{note || text || modules[id].name}</p>
      <footer className="board-card-footer">
        {page ? <button onClick={showEvidence}>{action} · PDF p. {page} <Icon name="next" /></button>
          : <a href={`#${id}`}>{action} <Icon name="next" /></a>}
      </footer>
    </section>}
    </div>
  </div>;
}

function SemesterMap({ open }) {
  const [manualZoom, setManualZoom] = useState(null);
  const [effectsEnabled, setEffectsEnabled] = useState(true);
  const [fitMode, setFitMode] = useState('width');
  const [fitZoom, setFitZoom] = useState({ width: 100, map: 100 });
  const viewport = useRef(null);
  const layout = useRef(null);
  const zoom = manualZoom ?? fitZoom[fitMode];

  useEffect(() => {
    const scrollArea = viewport.current;
    const board = layout.current;
    const desktop = window.matchMedia('(min-width: 851px)');
    const fit = () => {
      const widthRatio = desktop.matches ? scrollArea.clientWidth / board.offsetWidth : 1;
      const heightRatio = desktop.matches ? scrollArea.clientHeight / board.offsetHeight : 1;
      const width = Math.max(1, Math.min(150, Math.floor(widthRatio * 100)));
      const map = desktop.matches ? Math.max(1, Math.min(width, Math.floor(heightRatio * 95))) : 100;
      setFitZoom(previous => previous.width === width && previous.map === map ? previous : { width, map });
    };
    const observer = new ResizeObserver(fit);
    observer.observe(scrollArea);
    observer.observe(board);
    desktop.addEventListener('change', fit);
    fit();
    return () => {
      observer.disconnect();
      desktop.removeEventListener('change', fit);
    };
  }, []);
  const selectFit = mode => {
    setFitMode(mode);
    setManualZoom(null);
    viewport.current.scrollTo(0, 0);
  };

  return <section className="spatial-board" data-effects={effectsEnabled} aria-label="Mapa del semestre">
    <div className="board-scroll" ref={viewport}>
      <div className="board-layout" ref={layout} style={{ zoom: zoom / 100 }}>
        <div className="board-hub">
          <p className="eyebrow">Proyecto integrador</p>
          <h1>MySubs Smart <span>y gestión empresarial</span></h1>
          <p>Del plan de negocio a la formalización, la contratación y el cierre laboral.</p>
          <dl className="board-card-tiles"><div><dt>Inversión inicial</dt><dd>USD 1.900</dd></div><div><dt>CIIU principal</dt><dd>J62010101</dd></div><div><dt>Contratación</dt><dd>7 casos</dd></div></dl>
          <a href="#emprendimiento">Ver proyecto</a><a href="#documentos">Repositorio <Icon name="next" /></a>
        </div>
        {entries.map(([id, module]) => <article className={`board-node ${id}`} key={id}>
          <header className="module-head">
            <div className="symbol"><Icon name={id} /></div>
            <div><h2><a href={`#${id}`}>{module.name}</a></h2><p>{module.description}</p></div>
          </header>
          <div className="board-topics">{boardCards[id].map(card => <BoardCard key={card.title} {...{card, id, open}} enabled={effectsEnabled} />)}</div>
          <footer className="board-node-actions">
            <SummaryButton id={id} open={open} />
            <a className="button" href={`#${id}`}>Explorar <Icon name="next" /></a>
          </footer>
        </article>)}
      </div>
    </div>
    <div className="board-tools" aria-label="Controles del mapa">
      <button aria-pressed={effectsEnabled} onClick={() => setEffectsEnabled(value => !value)}>3D</button>
      <button disabled={zoom <= 25} onClick={() => setManualZoom(Math.max(25, zoom - 10))} aria-label="Alejar">−</button>
      <output aria-live="polite">{zoom}%</output>
      <button disabled={zoom >= 150} onClick={() => setManualZoom(Math.min(150, zoom + 10))} aria-label="Acercar">+</button>
      <button aria-pressed={manualZoom === null && fitMode === 'width'} onClick={() => selectFit('width')}>Ancho</button>
      <button aria-pressed={manualZoom === null && fitMode === 'map'} onClick={() => selectFit('map')}>Ajustar vista</button>
    </div>
  </section>;
}

const dashboardContent = {
  emprendimiento: {
    caption: 'Plan de negocio · APE 01',
    subtitle: 'MySubs Smart',
    steps: ['Oportunidad', 'Canvas', 'Perfil estratégico', 'Mercado y operación', 'Viabilidad'],
  },
  tributos: {
    caption: 'Formalización e IVA · PEA 02',
    steps: ['RUC', 'Factura', 'IVA y comprobantes', 'Declaración', 'Marca', 'Importación', 'Contratación'],
    metrics: [['5', 'Empresas comparadas'], ['USD 2.300', 'Total de la factura simulada'], ['USD 0,00', 'Impuesto a pagar · casilla 699'], ['USD 832,50', 'Crédito para el próximo mes']],
  },
  nomina: {
    caption: 'Contratación, derechos y nómina · Práctica 03',
    steps: ['Modos de producción', 'Pitch laboral', 'Contratación y derechos'],
    metrics: [['7', 'Casos de contratación comparados'], ['3', 'Contratos revisados en el taller'], ['USD 943', 'Aumento en el caso de reclasificación'], ['USD 700', 'Nómina mensual proyectada de MySubs']],
  },
  liquidacion: {
    caption: 'Terminación de la relación laboral · Guía práctica',
    steps: ['Rubros de liquidación', 'Matriz de casos', 'Laboral Hack', 'Cálculo de liquidaciones'],
    metrics: [['4', 'Actividades del módulo'], ['2', 'Formas de terminación estudiadas en la guía'], ['3', 'Grupos de rubros revisados']],
  },
};

function ModuleDashboard({ id, next, open }) {
  const module = modules[id];
  const { caption, subtitle, steps, metrics = module.metrics } = dashboardContent[id];
  const [step, setStep] = useState(0);
  const task = activities[id][step];
  const taskDocs = task.page ? [[task.evidenceLabel || 'Ver evidencia', task.page, task.origin]] : [];
  if (task.extra) taskDocs.push([...task.extra, task.origin]);
  const showSurvey = id === 'emprendimiento' && step === 3;

  return <section className="workspace module-dashboard" aria-labelledby="dashboard-title">
    <header className="dashboard-header">
      <div><p className="eyebrow">{caption}</p><h1 id="dashboard-title">{module.name}{subtitle && <> <span>{subtitle}</span></>}</h1></div>
      <div className="document-actions">
        {id === 'nomina' && <a className="button" href={mySubsAppUrl} target="_blank" rel="noopener noreferrer">Abrir MySubs Smart</a>}
        <SummaryButton id={id} open={open} />
      </div>
    </header>
    <div className="dashboard-layout">
      <div className="dashboard-main">
        <dl className="dashboard-metrics" aria-label="Indicadores del módulo">
          {metrics.map(([value, label]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}
        </dl>
        <section className="dashboard-tasks" aria-label={`Tareas de ${module.name}`}>
          <nav className="dashboard-steps" aria-label="Actividades del módulo">
            {steps.map((label, index) => <button type="button" key={label}
              aria-current={index === step ? 'step' : undefined} onClick={() => setStep(index)}>
              <span>{String(index + 1).padStart(2, '0')}</span>{label}
            </button>)}
          </nav>
          <div className="dashboard-task" aria-live="polite">
            <h2>{task.title}</h2>
            <div className={showSurvey ? 'dashboard-task-body with-results' : 'dashboard-task-body'}>
              <p>{task.body}</p>
              {showSurvey && <div className="board-bars dashboard-results" aria-label="Resultados del sondeo">
                {boardCards[id][2].bars.map(([label, value]) => <div key={label}>
                  <div><span>{label}</span><strong>{value.toLocaleString('es-EC')} %</strong></div>
                  <meter min={0} max={100} value={value} aria-label={label} />
                </div>)}
              </div>}
            </div>
            {taskDocs.length > 0 && <div className="dashboard-evidence"><EvidenceList docs={taskDocs} id={id} open={open} /></div>}
            <ResourceLinks links={activityResources[id]?.[step]} />
          </div>
        </section>
      </div>
      <aside className="dashboard-aside" aria-label="Puntos clave y documentos">
        {module.topics.map(([title, body], index) => <section key={title} className="dashboard-note">
          <h2><span><Icon name={['emprendimiento', 'documentos', 'search'][index]} /></span>{title}</h2>
          <p>{body}</p>
        </section>)}
        {module.pending && <section className="dashboard-note dashboard-pending">
          <h2><span><Icon name="info" /></span>Por adjuntar</h2>
          <p>{module.pending.replace('Por adjuntar: ', '')}</p>
        </section>}
        <section className="dashboard-note">
          <h2><span><Icon name="documentos" /></span>Evidencias del módulo</h2>
          <EvidenceList docs={module.docs} id={id} open={open} />
        </section>
        {moduleResources[id] && <section className="dashboard-note">
          <h2><span><Icon name="documentos" /></span>Bibliografía de la guía</h2>
          <ResourceLinks links={moduleResources[id]} />
        </section>}
      </aside>
    </div>
    <div className="crumbs"><a href="#pizarra">Volver a la pizarra</a><a href={`#${next}`}>Siguiente módulo <Icon name="next" /></a></div>
  </section>;
}

function routeFromHash() {
  const value = location.hash.slice(1);
  return value === 'documentos' || Object.hasOwn(modules, value) ? value : 'pizarra';
}

function App() {
  const [route, setRoute] = useState(routeFromHash);
  const [search, setSearch] = useState('');
  const [selection, setSelection] = useState(null);
  const [defense, setDefense] = useState(false);
  useEffect(() => {
    const update = () => { setRoute(routeFromHash()); setSearch(''); window.scrollTo(0, 0); };
    window.addEventListener('hashchange', update);
    return () => window.removeEventListener('hashchange', update);
  }, []);
  const navigate = id => { location.hash = id; };
  const term = normalize(search.trim());
  const focused = Object.hasOwn(modules, route);
  const library = route === 'documentos';
  const visible = focused ? [[route, modules[route]]] : entries;
  const matching = visible.filter(([id,m]) => normalize([m.name,m.description,m.intro,m.source,m.pending,files[id].title,files[id].detail,...m.topics.flat(),...activities[id].flatMap(({ title, body }, index) => [title, body, ...(activityResources[id]?.[index] || []).map(([label]) => label)]),...m.docs.flat(),...(m.metrics || []).flat()].join(' ')).includes(term));

  const stages = ['pizarra', ...entries.map(([id]) => id), 'documentos'];
  const stage = stages.indexOf(route);
  const showMap = route === 'pizarra' && !term;
  const showDashboard = focused && !term;
  const nextModule = focused ? entries[(stage % entries.length)][0] : null;
  return <div className="shell spatial-shell">
    <a href="#contenido" className="skip" onClick={event => { event.preventDefault(); document.querySelector('main').focus(); }}>Saltar al contenido</a>
    <aside className="sidebar">
      <a className="brand" href="#pizarra"><div className="brand-icon"><Icon name="pizarra" /></div><span>Aula Integrada<small>UTA · FISEI</small></span></a>
      <nav aria-label="Navegación principal">
        <a href="#pizarra" aria-current={route === 'pizarra' ? 'page' : undefined}><Icon name="pizarra" /> Mapa completo</a>
        <a href="#documentos" aria-current={library ? 'page' : undefined}><Icon name="documentos" /> Documentos</a>
        <p>Módulos de la asignatura</p>
        {entries.map(([id,m]) => <a href={`#${id}`} key={id} aria-current={route === id ? 'page' : undefined}><Icon name={id} /> {m.name}</a>)}
      </nav>
      <div className="semester">Software · Octavo A<small>Julio – diciembre 2026</small></div>
    </aside>
    <main id="contenido" tabIndex={-1}>
      <div className="toolbar"><span>Emprendimiento y Legislación Laboral</span><label className="search"><Icon name="search" /><input type="search" aria-label="Buscar por tema" placeholder="Buscar un tema o documento" value={search} onChange={event => setSearch(event.target.value)} /></label><button className="button defense-toggle" onClick={() => { setDefense(!defense); if (!defense) navigate('pizarra'); }} aria-pressed={defense}>{defense ? 'Salir de defensa' : 'Modo defensa'}</button></div>
      {showMap && <SemesterMap open={setSelection} />}
      {showDashboard && <ModuleDashboard key={route} id={route} next={nextModule} open={setSelection} />}
      {!showMap && !showDashboard && <div className="workspace">
        <header className={`hero ${focused ? route : library ? '' : 'overview'}`}>
          <div className="hero-copy">
            <p className="eyebrow">Portafolio del semestre</p>
            <h1>{focused ? modules[route].name : library ? 'Documentos del semestre' : 'Del plan de negocio a la práctica laboral'}</h1>
            <p>{focused ? modules[route].description : library ? 'Repasa lo visto y lo trabajado en cada resumen de una página. Consulta el informe original para ver las evidencias completas.' : 'Sigue el recorrido de MySubs, desde la idea de negocio hasta los ejercicios de tributación, contratación y liquidación laboral.'}</p>
            {!focused && !library && <div className="hero-actions">
              <a className="button primary" href="#emprendimiento">Iniciar recorrido <Icon name="next" /></a>
              <a className="button" href="#documentos"><Icon name="documentos" /> Ver documentos</a>
            </div>}
          </div>
        </header>
        {focused && <div className="crumbs"><a href="#pizarra">Volver a la pizarra</a><a href={`#${entries[(entries.findIndex(([id]) => id === route)+1)%entries.length][0]}`}>Siguiente módulo <Icon name="next" /></a></div>}
        <div className="section-head"><h2>{focused ? 'Resultados y evidencias' : library ? 'Resúmenes y evidencias' : 'Recorrido del semestre'}</h2><span aria-live="polite">{matching.length} {library ? (matching.length === 1 ? 'archivo' : 'archivos') : (matching.length === 1 ? 'módulo' : 'módulos')}</span></div>
        {matching.length === 0 ? <div className="empty"><Icon name="search" /><h3>Sin coincidencias</h3><p>Prueba con otro término, como IVA, MySubs o salarios.</p><button className="button" onClick={() => setSearch('')}>Limpiar búsqueda</button></div>
        : <div className={focused ? 'detail' : library || term ? 'grid' : 'grid overview-grid'}>{matching.map(([id,module]) => library
          ? <article className={`module file ${id}`} key={id}><div className="symbol"><Icon name="documentos" /></div><div><h3>{files[id].title}</h3><p>{files[id].detail}</p></div><div className="document-actions"><SummaryButton id={id} open={setSelection} /><button className="button" onClick={() => setSelection({id,origin:id,title:files[id].title})}>Ver original</button></div></article>
          : <ModuleCard key={id} {...{id,module,focused,term}} focus={() => navigate(id)} open={setSelection} />)}</div>}
      </div>}
    </main>
    {defense && <nav className="defense-controls" aria-label="Recorrido de defensa">
      <button className="button" disabled={stage === 0} onClick={() => navigate(stages[stage - 1])}>Anterior</button>
      <div aria-live="polite"><span>Paso {stage + 1} de {stages.length}</span><strong>{focused ? modules[route].name : library ? 'Evidencias del semestre' : 'Panorama general'}</strong></div>
      <button className="button primary" disabled={stage === stages.length - 1} onClick={() => navigate(stages[stage + 1])}>Siguiente</button>
    </nav>}
    <DocumentViewer selection={selection} close={() => setSelection(null)} />
  </div>;
}

createRoot(document.querySelector('#root')).render(<App />);
