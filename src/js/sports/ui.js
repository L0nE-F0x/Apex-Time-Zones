import { SPORT_SERIES, searchSports, getSeriesById } from './catalog.js';
import {
  annotateSession,
  eventHeadlineTime,
  nextSession,
  sortEventsByNext,
  primarySession,
} from './schedule.js';
import { getLocalTimeZone } from '../timeMath.js';

/**
 * Wire sports panel. ctx: { hour12, getGlobe, onFly, setBridge }
 */
export function createSportsUI(ctx) {
  const localTz = getLocalTimeZone();
  let activeSeriesId = null;
  let activeEventId = null;

  const els = {
    search: document.getElementById('sportsSearch'),
    chips: document.getElementById('sportsChips'),
    seriesList: document.getElementById('sportsSeriesList'),
    detail: document.getElementById('sportsDetail'),
    detailTitle: document.getElementById('sportsDetailTitle'),
    detailDesc: document.getElementById('sportsDetailDesc'),
    eventsList: document.getElementById('sportsEventsList'),
    eventPanel: document.getElementById('sportsEventPanel'),
    eventTitle: document.getElementById('sportsEventTitle'),
    countdown: document.getElementById('sportsCountdown'),
    tuneIn: document.getElementById('sportsTuneIn'),
    schedule: document.getElementById('sportsSchedule'),
    clear: document.getElementById('btnClearSports'),
    toBridge: document.getElementById('btnSportsToBridge'),
    tabClocks: document.getElementById('tabClocks'),
    tabSports: document.getElementById('tabSports'),
    panelClocks: document.getElementById('panelClocks'),
    panelSports: document.getElementById('panelSports'),
  };

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function switchTab(tab) {
    const sports = tab === 'sports';
    els.tabClocks?.classList.toggle('active', !sports);
    els.tabSports?.classList.toggle('active', sports);
    if (els.panelClocks) els.panelClocks.hidden = sports;
    if (els.panelSports) els.panelSports.hidden = !sports;
  }

  els.tabClocks?.addEventListener('click', () => switchTab('clocks'));
  els.tabSports?.addEventListener('click', () => switchTab('sports'));

  function renderChips() {
    if (!els.chips) return;
    const cats = [...new Set(SPORT_SERIES.map((s) => s.category))];
    els.chips.innerHTML =
      `<button type="button" class="chip-btn active" data-cat="">All</button>` +
      cats
        .map((c) => `<button type="button" class="chip-btn" data-cat="${escapeHtml(c)}">${escapeHtml(c)}</button>`)
        .join('');
    els.chips.querySelectorAll('.chip-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        els.chips.querySelectorAll('.chip-btn').forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        renderSeriesList(els.search?.value || '', btn.dataset.cat || '');
      });
    });
  }

  function renderSeriesList(query = '', category = '') {
    if (!els.seriesList) return;
    let list = query.trim() ? searchSports(query) : SPORT_SERIES.slice();
    if (category) list = list.filter((s) => s.category === category);
    els.seriesList.innerHTML = list
      .map(
        (s) => `
      <button type="button" class="sports-series-card ${activeSeriesId === s.id ? 'active' : ''}" data-id="${s.id}">
        <span class="ss-cat">${escapeHtml(s.category)} · ${escapeHtml(s.season)}</span>
        <span class="ss-name">${escapeHtml(s.name)}</span>
        <span class="ss-meta">${s.events.length} events on the globe</span>
      </button>`
      )
      .join('');
    els.seriesList.querySelectorAll('.sports-series-card').forEach((btn) => {
      btn.addEventListener('click', () => selectSeries(btn.dataset.id));
    });
  }

  function selectSeries(id) {
    activeSeriesId = id;
    activeEventId = null;
    const series = getSeriesById(id);
    if (!series) return;
    renderSeriesList(els.search?.value || '', els.chips?.querySelector('.chip-btn.active')?.dataset.cat || '');
    if (els.detail) els.detail.hidden = false;
    if (els.eventPanel) els.eventPanel.hidden = true;
    if (els.detailTitle) els.detailTitle.textContent = series.name;
    if (els.detailDesc) els.detailDesc.textContent = series.description;

    const sorted = sortEventsByNext(series.events);
    if (els.eventsList) {
      els.eventsList.innerHTML = sorted
        .map((ev) => {
          const head = eventHeadlineTime(ev, localTz, ctx.hour12?.(), new Date());
          const cd = head?.countdown || '—';
          const status = head?.status || '';
          return `
          <button type="button" class="sports-event-card" data-id="${ev.id}">
            <div class="se-top">
              <span class="se-round">${ev.round != null ? 'R' + ev.round : escapeHtml(ev.country)}</span>
              <span class="se-cd ${status}">${escapeHtml(cd)}</span>
            </div>
            <div class="se-name">${escapeHtml(ev.name)}</div>
            <div class="se-venue">${escapeHtml(ev.city)} · ${escapeHtml(ev.tz.split('/').pop().replace(/_/g, ' '))}</div>
            <div class="se-times">
              <span>Local tune-in: <strong>${escapeHtml(head?.localTime || '—')}</strong></span>
              <span>Venue: <strong>${escapeHtml(head?.venueTime || '—')}</strong></span>
            </div>
          </button>`;
        })
        .join('');
      els.eventsList.querySelectorAll('.sports-event-card').forEach((btn) => {
        btn.addEventListener('click', () => selectEvent(btn.dataset.id));
      });
    }

    const globe = ctx.getGlobe?.();
    globe?.setEventMarkers(
      series.events.map((ev) => ({
        id: ev.id,
        lat: ev.lat,
        lng: ev.lng,
        name: ev.name,
        highlight: false,
      }))
    );
  }

  function selectEvent(eventId) {
    const series = getSeriesById(activeSeriesId);
    const ev = series?.events.find((e) => e.id === eventId);
    if (!ev) return;
    activeEventId = eventId;
    const globe = ctx.getGlobe?.();
    globe?.setEventMarkers(
      series.events.map((e) => ({
        id: e.id,
        lat: e.lat,
        lng: e.lng,
        name: e.name,
        highlight: e.id === eventId,
      }))
    );
    globe?.flyTo(ev.lat, ev.lng, 1.0);
    renderEventDetail(ev);
  }

  function renderEventDetail(ev) {
    if (els.eventPanel) els.eventPanel.hidden = false;
    if (els.eventTitle) els.eventTitle.textContent = ev.name;
    const now = new Date();
    const head = eventHeadlineTime(ev, localTz, ctx.hour12?.(), now);
    if (els.countdown) {
      els.countdown.innerHTML = head
        ? `<span class="cd-big">${escapeHtml(head.countdown)}</span>
           <span class="cd-sub">${escapeHtml(head.name)} · ${head.status === 'finished' ? 'completed' : 'to start'}</span>`
        : '—';
    }
    if (els.tuneIn) {
      els.tuneIn.innerHTML = head
        ? `
        <div class="tune-grid">
          <div><span class="muted">At the venue (${escapeHtml(ev.city)})</span><strong>${escapeHtml(head.venueTime)}</strong><span class="muted">${escapeHtml(head.venueDay || '')}</span></div>
          <div><span class="muted">Tune in where you are</span><strong class="mint">${escapeHtml(head.localTime)}</strong><span class="muted">${escapeHtml(head.localDay || '')} · ${escapeHtml(head.deltaLabel || '')}</span></div>
        </div>`
        : '';
    }
    if (els.schedule) {
      const rows = (ev.sessions || []).map((s) =>
        annotateSession(s, ev.tz, localTz, ctx.hour12?.(), now)
      );
      els.schedule.innerHTML = `
        <div class="sched-head">Full weekend / event schedule</div>
        <table class="sched-table">
          <thead><tr><th>Session</th><th>Venue</th><th>Your time</th><th></th></tr></thead>
          <tbody>
            ${rows
              .map(
                (r) => `<tr class="${r.status}">
                  <td>${escapeHtml(r.name)}</td>
                  <td>${escapeHtml(r.venueTime)}<div class="muted">${escapeHtml(r.venueDay || '')}</div></td>
                  <td class="mint">${escapeHtml(r.localTime)}<div class="muted">${escapeHtml(r.localDay || '')}</div></td>
                  <td class="cd-cell">${escapeHtml(r.countdown || '')}</td>
                </tr>`
              )
              .join('')}
          </tbody>
        </table>`;
    }
  }

  function tick() {
    if (!activeSeriesId) return;
    const series = getSeriesById(activeSeriesId);
    if (!series) return;
    if (activeEventId) {
      const ev = series.events.find((e) => e.id === activeEventId);
      if (ev) renderEventDetail(ev);
    }
    // light refresh of event list countdowns
    if (els.eventsList && !els.detail?.hidden) {
      selectSeries(activeSeriesId);
      if (activeEventId) {
        // re-highlight selection without clearing event panel
        const ev = series.events.find((e) => e.id === activeEventId);
        if (ev) {
          activeEventId = ev.id;
          renderEventDetail(ev);
        }
      }
    }
  }

  // Avoid full re-render loop every second on list - only countdown panel
  function tickLight() {
    if (!activeEventId || !activeSeriesId) return;
    const series = getSeriesById(activeSeriesId);
    const ev = series?.events.find((e) => e.id === activeEventId);
    if (ev) renderEventDetail(ev);
  }

  els.search?.addEventListener('input', () => {
    const cat = els.chips?.querySelector('.chip-btn.active')?.dataset.cat || '';
    renderSeriesList(els.search.value, cat);
  });

  els.clear?.addEventListener('click', () => {
    activeSeriesId = null;
    activeEventId = null;
    if (els.detail) els.detail.hidden = true;
    if (els.eventPanel) els.eventPanel.hidden = true;
    ctx.getGlobe?.()?.clearEventMarkers?.();
    renderSeriesList(els.search?.value || '');
  });

  els.toBridge?.addEventListener('click', () => {
    if (!activeEventId || !activeSeriesId) return;
    const series = getSeriesById(activeSeriesId);
    const ev = series?.events.find((e) => e.id === activeEventId);
    const primary = primarySession(ev);
    if (!ev || !primary) return;
    ctx.setBridge?.({
      dateStr: primary.date,
      timeStr: primary.time,
      fromTz: ev.tz,
    });
    switchTab('clocks');
  });

  // Globe callbacks
  ctx.registerGlobeHandlers?.({
    onEventClick: (ev) => {
      // find series containing event
      for (const s of SPORT_SERIES) {
        if (s.events.some((e) => e.id === ev.id)) {
          switchTab('sports');
          selectSeries(s.id);
          selectEvent(ev.id);
          break;
        }
      }
    },
  });

  renderChips();
  renderSeriesList();

  return {
    tick: tickLight,
    switchTab,
    selectSeries,
    openSportsSearch(q) {
      switchTab('sports');
      if (els.search) {
        els.search.value = q;
        renderSeriesList(q);
      }
      const hits = searchSports(q);
      if (hits[0]) selectSeries(hits[0].id);
    },
  };
}
