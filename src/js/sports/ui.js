import { SPORT_SERIES, searchSports, searchEvents, getSeriesById, onCatalogChange, SPORT_META } from './catalog.js';
import {
  annotateSession,
  eventHeadlineTime,
  sortEventsByNext,
  primarySession,
  upcomingAcrossSeries,
  formatCountdown,
  isWindowSession,
  windowEndInstant,
} from './schedule.js';
import { buildIcs } from './ics.js';
import { getLocalTimeZone } from '../timeMath.js';

/**
 * Wire sports panel + Up Next rail.
 * ctx: { hour12, getGlobe, setBridge, registerGlobeHandlers,
 *        getFollowed, toggleFollowed, addReminder }
 */
export function createSportsUI(ctx) {
  const localTz = getLocalTimeZone();
  let activeSeriesId = null;
  let activeEventId = null;
  let upNextRows = [];
  let upNextKey = '';
  let upNextRefreshedAt = 0;

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
    exportIcs: document.getElementById('btnSportsIcs'),
    upNext: document.getElementById('upNextRail'),
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

  function followedIds() {
    return ctx.getFollowed?.() || [];
  }

  function followedSeries() {
    const ids = followedIds();
    return ids.length ? SPORT_SERIES.filter((s) => ids.includes(s.id)) : SPORT_SERIES;
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
    const followed = new Set(followedIds());

    // Direct event hits for a query ("silverstone", "ufc 330", "teahupoo")
    const eventHits = query.trim() ? searchEvents(query, 5) : [];
    const hitsHtml = eventHits.length
      ? `<div class="event-hits">
          ${eventHits
            .map(
              (h) => `
            <button type="button" class="event-hit" data-series="${h.series.id}" data-event="${h.event.id}">
              <span class="eh-name">${escapeHtml(h.event.name)}</span>
              <span class="eh-meta">${escapeHtml(h.series.name)} · ${escapeHtml(h.event.city)}</span>
            </button>`
            )
            .join('')}
         </div>`
      : '';

    els.seriesList.innerHTML =
      hitsHtml +
      list
        .map(
          (s) => `
      <button type="button" class="sports-series-card ${activeSeriesId === s.id ? 'active' : ''}" data-id="${s.id}">
        <span class="ss-cat">${escapeHtml(s.category)} · ${escapeHtml(s.season)}</span>
        <span class="ss-name">${escapeHtml(s.name)}</span>
        <span class="ss-meta">${s.events.length} events on the globe</span>
        <span class="ss-star ${followed.has(s.id) ? 'on' : ''}" data-star="${s.id}" title="${followed.has(s.id) ? 'Unfollow' : 'Follow — adds to Up Next and tray'}">${followed.has(s.id) ? '★' : '☆'}</span>
      </button>`
        )
        .join('');

    els.seriesList.querySelectorAll('.sports-series-card').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const star = e.target.closest('.ss-star');
        if (star) {
          e.stopPropagation();
          ctx.toggleFollowed?.(star.dataset.star);
          renderSeriesList(els.search?.value || '', category);
          refreshUpNext(true);
          return;
        }
        selectSeries(btn.dataset.id);
      });
    });
    els.seriesList.querySelectorAll('.event-hit').forEach((btn) => {
      btn.addEventListener('click', () => {
        selectSeries(btn.dataset.series);
        selectEvent(btn.dataset.event);
      });
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
              <span>Your time: <strong>${escapeHtml(head?.localTime || '—')}</strong></span>
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
        sport: series.sport,
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
        sport: series.sport,
        highlight: e.id === eventId,
      }))
    );
    globe?.flyTo(ev.lat, ev.lng, 1.0);
    renderEventDetail(ev);
  }

  function sessionReminderPayload(ev, session) {
    if (isWindowSession(session)) {
      return {
        title: `${ev.name} — ${session.name}`,
        dateStr: session.startDate,
        timeStr: session.firstCallTime || '08:00',
        tz: ev.tz,
      };
    }
    return { title: `${ev.name} — ${session.name}`, dateStr: session.date, timeStr: session.time, tz: ev.tz };
  }

  function renderEventDetail(ev) {
    if (els.eventPanel) els.eventPanel.hidden = false;
    if (els.eventTitle) els.eventTitle.textContent = ev.name;
    const now = new Date();
    const head = eventHeadlineTime(ev, localTz, ctx.hour12?.(), now);
    if (els.countdown) {
      els.countdown.innerHTML = head
        ? `<span class="cd-big">${escapeHtml(head.countdown)}</span>
           <span class="cd-sub">${escapeHtml(head.name)} · ${head.status === 'finished' ? 'completed' : head.status === 'live-or-recent' ? 'in progress' : 'to start'}</span>`
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
      const rows = (ev.sessions || []).map((s) => annotateSession(s, ev.tz, localTz, ctx.hour12?.(), now));
      els.schedule.innerHTML = `
        <div class="sched-head">Full schedule</div>
        <table class="sched-table">
          <thead><tr><th>Session</th><th>Venue</th><th>Your time</th><th></th><th></th></tr></thead>
          <tbody>
            ${rows
              .map(
                (r) => `<tr class="${r.status}" data-session="${r.id}">
                  <td>${escapeHtml(r.name)}</td>
                  <td>${escapeHtml(r.venueTime)}<div class="muted">${escapeHtml(r.venueDay || '')}</div></td>
                  <td class="mint">${escapeHtml(r.localTime)}<div class="muted">${escapeHtml(r.localDay || '')}</div></td>
                  <td class="cd-cell" data-cd="${r.id}">${escapeHtml(r.countdown || '')}</td>
                  <td>${r.status === 'upcoming' ? `<button type="button" class="bell-btn" data-remind="${r.id}" title="Remind me before this session">🔔</button>` : ''}</td>
                </tr>`
              )
              .join('')}
          </tbody>
        </table>`;
      els.schedule.querySelectorAll('[data-remind]').forEach((btn) => {
        btn.addEventListener('click', () => {
          const session = (ev.sessions || []).find((s) => s.id === btn.dataset.remind);
          if (!session) return;
          ctx.addReminder?.(sessionReminderPayload(ev, session));
          btn.textContent = '✓';
          btn.disabled = true;
        });
      });
    }
  }

  function downloadIcs() {
    const series = getSeriesById(activeSeriesId);
    if (!series) return;
    const ev = activeEventId ? series.events.find((e) => e.id === activeEventId) : null;
    const ics = buildIcs(series.name, ev || series.events);
    const blob = new Blob([ics], { type: 'text/calendar' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `${(ev ? ev.name : series.name).replace(/[^\w-]+/g, '-').toLowerCase()}.ics`;
    a.click();
    URL.revokeObjectURL(a.href);
  }

  // ——— Up Next rail ———
  function refreshUpNext(force = false) {
    if (!els.upNext) return;
    const now = Date.now();
    if (!force && now - upNextRefreshedAt < 30000) return;
    upNextRefreshedAt = now;
    upNextRows = upcomingAcrossSeries(followedSeries(), localTz, ctx.hour12?.(), new Date(), 5);
    const key = upNextRows.map((r) => `${r.event.id}:${r.session.id}`).join('|');
    if (key === upNextKey && !force) {
      updateUpNextCountdowns();
      return;
    }
    upNextKey = key;
    els.upNext.innerHTML = upNextRows.length
      ? `<span class="un-label">Up next</span>` +
        upNextRows
          .map(
            (r, i) => `
        <button type="button" class="un-chip ${r.session.status === 'live-or-recent' ? 'live' : ''}" data-idx="${i}" title="${escapeHtml(r.series.name)} — ${escapeHtml(r.event.city)}">
          <span class="un-sport">${escapeHtml(SPORT_META[r.series.sport]?.label || r.series.category)}</span>
          <span class="un-name">${escapeHtml(r.event.name)}</span>
          <span class="un-cd" data-uncd="${i}">${escapeHtml(r.session.countdown || '')}</span>
          <span class="un-time">${escapeHtml(r.session.localTime || '')}</span>
        </button>`
          )
          .join('')
      : '';
    els.upNext.querySelectorAll('.un-chip').forEach((btn) => {
      btn.addEventListener('click', () => {
        const row = upNextRows[Number(btn.dataset.idx)];
        if (!row) return;
        switchTab('sports');
        selectSeries(row.series.id);
        selectEvent(row.event.id);
      });
    });
  }

  function updateUpNextCountdowns() {
    if (!els.upNext) return;
    const now = Date.now();
    els.upNext.querySelectorAll('[data-uncd]').forEach((el) => {
      const row = upNextRows[Number(el.dataset.uncd)];
      if (!row?.session?.instant) return;
      const ms = row.session.instant.getTime() - now;
      if (row.session.isWindow && ms < 0) {
        const end = row.session.windowEnd;
        el.textContent = end && now > end.getTime() ? 'done' : 'window open';
      } else {
        el.textContent = formatCountdown(ms);
      }
    });
  }

  /** Next upcoming session across followed series (for the tray). */
  function nextFollowed() {
    return upNextRows[0] || null;
  }

  // Per-second refresh: countdown text only; structural refresh every 30 s.
  function tickLight() {
    refreshUpNext(false);
    updateUpNextCountdowns();
    if (!activeEventId || !activeSeriesId) return;
    const series = getSeriesById(activeSeriesId);
    const ev = series?.events.find((e) => e.id === activeEventId);
    if (!ev || !els.schedule) return;
    const now = new Date();
    for (const raw of ev.sessions || []) {
      const cell = els.schedule.querySelector(`[data-cd="${raw.id}"]`);
      if (!cell) continue;
      const a = annotateSession(raw, ev.tz, localTz, ctx.hour12?.(), now);
      cell.textContent = a.countdown || '';
    }
    if (els.countdown) {
      const head = eventHeadlineTime(ev, localTz, ctx.hour12?.(), now);
      const big = els.countdown.querySelector('.cd-big');
      if (big && head) big.textContent = head.countdown;
    }
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
    if (isWindowSession(primary)) {
      ctx.setBridge?.({ dateStr: primary.startDate, timeStr: primary.firstCallTime || '08:00', fromTz: ev.tz });
    } else {
      ctx.setBridge?.({ dateStr: primary.date, timeStr: primary.time, fromTz: ev.tz });
    }
    switchTab('clocks');
  });

  els.exportIcs?.addEventListener('click', downloadIcs);

  // Globe callbacks
  ctx.registerGlobeHandlers?.({
    onEventClick: (ev) => {
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

  // Re-render when a fresher catalog arrives over the air
  onCatalogChange(() => {
    renderChips();
    const cat = els.chips?.querySelector('.chip-btn.active')?.dataset.cat || '';
    renderSeriesList(els.search?.value || '', cat);
    refreshUpNext(true);
    if (activeSeriesId && getSeriesById(activeSeriesId)) {
      selectSeries(activeSeriesId);
      const ev = getSeriesById(activeSeriesId)?.events.find((e) => e.id === activeEventId);
      if (ev) renderEventDetail(ev);
      else {
        activeEventId = null;
        if (els.eventPanel) els.eventPanel.hidden = true;
      }
    } else {
      activeSeriesId = null;
      activeEventId = null;
      if (els.detail) els.detail.hidden = true;
      if (els.eventPanel) els.eventPanel.hidden = true;
    }
  });

  renderChips();
  renderSeriesList();
  refreshUpNext(true);

  return {
    tick: tickLight,
    switchTab,
    selectSeries,
    nextFollowed,
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
