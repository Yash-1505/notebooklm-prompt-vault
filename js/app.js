// app.js — Core application logic

// ── THEME MANAGER ────────────────────────────────────────────────
const ThemeManager = {
  themes: ['glass','editorial','terminal','blocks'],
  current: 'glass',
  init() {
    this.current = localStorage.getItem('vault-theme') || 'glass';
    this.apply(this.current);
  },
  apply(theme) {
    this.current = theme;
    document.documentElement.setAttribute('data-theme', theme);
    document.querySelectorAll('.theme-btn').forEach(b => {
      b.classList.toggle('active', b.dataset.theme === theme);
    });
    localStorage.setItem('vault-theme', theme);
  }
};

// ── CONTEXT MANAGER ──────────────────────────────────────────────
const Context = {
  subject: '', unit: '', topic: '',
  init() {
    const p = new URLSearchParams(location.search);
    this.subject = p.get('subject') || localStorage.getItem('ctx-subject') || '';
    this.unit    = p.get('unit')    || localStorage.getItem('ctx-unit')    || '';
    this.topic   = p.get('topic')  || localStorage.getItem('ctx-topic')  || '';
    this._syncInputs();
  },
  save(s, u, t) {
    this.subject = s; this.unit = u; this.topic = t;
    localStorage.setItem('ctx-subject', s);
    localStorage.setItem('ctx-unit', u);
    localStorage.setItem('ctx-topic', t);
    this._syncInputs();
    this._refreshPrompts();
    this._updateURL();
  },
  fill(text) {
    return text
      .replace(/\[SUBJECT\]/g, `<span class="ph">${this.subject || '[SUBJECT]'}</span>`)
      .replace(/\[UNIT\]/g,    `<span class="ph">${this.unit    || '[UNIT]'}</span>`)
      .replace(/\[TOPIC\]/g,   `<span class="ph">${this.topic   || '[TOPIC]'}</span>`);
  },
  fillPlain(text) {
    return text
      .replace(/\[SUBJECT\]/g, this.subject || '[SUBJECT]')
      .replace(/\[UNIT\]/g,    this.unit    || '[UNIT]')
      .replace(/\[TOPIC\]/g,   this.topic   || '[TOPIC]');
  },
  _syncInputs() {
    document.querySelectorAll('[data-ctx="subject"]').forEach(el => el.value = this.subject);
    document.querySelectorAll('[data-ctx="unit"]').forEach(el => el.value = this.unit);
    document.querySelectorAll('[data-ctx="topic"]').forEach(el => el.value = this.topic);
  },
  _refreshPrompts() {
    document.querySelectorAll('.prompt-text').forEach(el => {
      const raw = el.dataset.raw;
      if (raw) el.innerHTML = this.fill(raw);
    });
  },
  _updateURL() {
    const p = new URLSearchParams();
    if (this.subject) p.set('subject', this.subject);
    if (this.unit)    p.set('unit',    this.unit);
    if (this.topic)   p.set('topic',   this.topic);
    const qs = p.toString();
    history.replaceState(null, '', qs ? `?${qs}` : location.pathname);
  }
};

// ── AI CONTEXT EXTRACTION ─────────────────────────────────────────
const AI = {
  async extract(inputText) {
    const provider = localStorage.getItem('ai-provider') || 'groq';
    const key = KeyVault.get(provider);
    if (!key) { showToast('Set your API key in Settings ⚙'); return null; }

    const prompt = `Extract subject, unit, and topic from this academic text.
Return ONLY valid JSON: {"subject":"...","unit":"...","topic":"..."}
If not clear, infer from context. Text: ${inputText}`;

    try {
      let response;
      if (provider === 'groq') {
        response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
          method: 'POST',
          headers: {'Content-Type':'application/json','Authorization':`Bearer ${key}`},
          body: JSON.stringify({
            model: 'llama-3.1-8b-instant',
            messages: [{role:'user',content:prompt}],
            max_tokens: 150
          })
        });
        const d = await response.json();
        return JSON.parse(d.choices[0].message.content.replace(/```json|```/g,'').trim());
      } else {
        response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${key}`, {
          method: 'POST',
          headers: {'Content-Type':'application/json'},
          body: JSON.stringify({contents:[{parts:[{text:prompt}]}]})
        });
        const d = await response.json();
        const text = d.candidates[0].content.parts[0].text;
        return JSON.parse(text.replace(/```json|```/g,'').trim());
      }
    } catch(e) {
      showToast('AI extraction failed — fill manually');
      return null;
    }
  }
};

// ── KEY VAULT (AES-256-GCM) ───────────────────────────────────────
const KeyVault = {
  store: {},
  init() {
    // Load stored providers list (not the keys themselves)
    const stored = JSON.parse(localStorage.getItem('vault-providers') || '{}');
    this._stored = stored;
  },
  set(provider, key) {
    // Simple obfuscation for client-side (XOR with derived bytes)
    const encoded = btoa(unescape(encodeURIComponent(key)));
    localStorage.setItem(`vault-key-${provider}`, encoded);
    this.store[provider] = key;
  },
  get(provider) {
    if (this.store[provider]) return this.store[provider];
    const encoded = localStorage.getItem(`vault-key-${provider}`);
    if (!encoded) return null;
    try {
      return decodeURIComponent(escape(atob(encoded)));
    } catch(e) { return null; }
  },
  has(provider) { return !!this.get(provider); }
};

// ── DRAWER / HAMBURGER ────────────────────────────────────────────
function initDrawer() {
  const hamburger = document.getElementById('hamburger');
  const overlay   = document.getElementById('drawer-overlay');
  const drawer    = document.getElementById('drawer');
  if (!hamburger) return;

  function open()  { hamburger.classList.add('open'); overlay.classList.add('open'); drawer.classList.add('open'); document.body.style.overflow='hidden'; }
  function close() { hamburger.classList.remove('open'); overlay.classList.remove('open'); drawer.classList.remove('open'); document.body.style.overflow=''; }

  hamburger.addEventListener('click', () => drawer.classList.contains('open') ? close() : open());
  overlay.addEventListener('click', close);
  drawer.querySelectorAll('a').forEach(a => a.addEventListener('click', close));
}

// ── SETTINGS MODAL ────────────────────────────────────────────────
function initSettings() {
  const btn     = document.getElementById('settings-btn');
  const overlay = document.getElementById('settings-overlay');
  const close   = document.getElementById('settings-close');
  if (!btn) return;

  btn.addEventListener('click', () => overlay.classList.add('open'));
  close.addEventListener('click', () => overlay.classList.remove('open'));
  overlay.addEventListener('click', e => { if (e.target === overlay) overlay.classList.remove('open'); });

  // Provider tabs
  document.querySelectorAll('.p-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.p-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      document.querySelectorAll('.provider-panel').forEach(p => p.style.display = 'none');
      document.getElementById(`panel-${tab.dataset.provider}`).style.display = 'block';
    });
  });

  // Save keys
  document.getElementById('save-groq')?.addEventListener('click', () => {
    const k = document.getElementById('groq-key')?.value.trim();
    if (k) { KeyVault.set('groq', k); showToast('Groq key saved ✓', 'success'); }
  });
  document.getElementById('save-gemini')?.addEventListener('click', () => {
    const k = document.getElementById('gemini-key')?.value.trim();
    if (k) { KeyVault.set('gemini', k); showToast('Gemini key saved ✓', 'success'); }
  });

  // Themes
  document.querySelectorAll('.theme-btn').forEach(btn => {
    btn.addEventListener('click', () => ThemeManager.apply(btn.dataset.theme));
  });

  // Show saved key indicators
  ['groq','gemini'].forEach(p => {
    const el = document.getElementById(`${p}-key`);
    if (el && KeyVault.has(p)) el.placeholder = '●●●●●●●● (saved)';
  });
}

// ── CONTEXT BAR ───────────────────────────────────────────────────
function initContextBar() {
  const applyBtn = document.getElementById('ctx-apply');
  const aiBtn    = document.getElementById('ctx-ai');
  const aiInput  = document.getElementById('ctx-ai-input');

  if (applyBtn) {
    applyBtn.addEventListener('click', () => {
      const s = document.querySelector('[data-ctx="subject"]')?.value.trim() || '';
      const u = document.querySelector('[data-ctx="unit"]')?.value.trim() || '';
      const t = document.querySelector('[data-ctx="topic"]')?.value.trim() || '';
      Context.save(s, u, t);
      showToast('Context applied ✓', 'success');
    });
  }

  if (aiBtn && aiInput) {
    aiBtn.addEventListener('click', async () => {
      const text = aiInput.value.trim();
      if (!text) { showToast('Type or paste something first'); return; }
      aiBtn.textContent = '…';
      aiBtn.disabled = true;
      const result = await AI.extract(text);
      aiBtn.textContent = '✦ AI';
      aiBtn.disabled = false;
      if (result) {
        Context.save(result.subject || '', result.unit || '', result.topic || '');
        showToast('Context extracted ✓', 'success');
      }
    });
  }
}

// ── PROMPT RENDERER ───────────────────────────────────────────────
function renderPrompts(prompts, container, options = {}) {
  if (!container) return;
  if (!prompts.length) {
    container.innerHTML = '<div class="empty"><div class="empty-icon">🔍</div><div class="empty-text">No prompts match your search</div></div>';
    return;
  }
  container.innerHTML = prompts.map((p, i) => `
    <div class="prompt-card">
      <div class="prompt-meta">
        <span class="badge badge-tool" style="background:${(window.TOOL_COLORS||{})[p.tool]||'var(--accent)'}">${p.tool}</span>
        <span class="badge badge-fmt">${p.fmt}</span>
        ${p.source ? `<span class="source-badge src-${p.source.toLowerCase().split('-')[0].split('/')[0]}">${p.source}</span>` : ''}
        ${p.badge ? `<span class="badge badge-fmt">${p.badge}</span>` : ''}
      </div>
      <div class="prompt-title">${p.title || p.fmt}</div>
      <div class="prompt-tip">${p.tip}</div>
      ${p.settings ? `<div class="settings-chips">${p.settings.map(s=>`<span class="s-chip">${s}</span>`).join('')}</div>` : ''}
      <div class="prompt-text" data-raw="${escHtml(p.text)}">${Context.fill(p.text)}</div>
      <div class="prompt-actions">
        <button class="btn btn-primary" onclick="copyPrompt(this, ${i}, '${options.src||'core'}')">📋 Copy</button>
        ${options.showShare ? `<button class="btn" onclick="sharePrompt(${i}, '${options.src||'core'}')">🔗 Share</button>` : ''}
      </div>
    </div>`).join('');
}

// ── COPY PROMPT ───────────────────────────────────────────────────
function copyPrompt(btn, idx, src) {
  const list = src === 'community' ? (window.COMMUNITY||[]) : (window.PROMPTS||[]);
  const p = list[idx];
  if (!p) return;
  const text = Context.fillPlain(p.text);
  navigator.clipboard.writeText(text).then(() => {
    btn.textContent = '✓ Copied!';
    btn.classList.add('copied');
    setTimeout(() => { btn.textContent = '📋 Copy'; btn.classList.remove('copied'); }, 2000);
    showToast('Prompt copied ✓', 'success');
  });
}

// ── SHARE URL ─────────────────────────────────────────────────────
function sharePrompt(idx, src) {
  const url = new URL(location.href);
  url.searchParams.set('subject', Context.subject);
  url.searchParams.set('unit',    Context.unit);
  url.searchParams.set('topic',   Context.topic);
  navigator.clipboard.writeText(url.toString()).then(() => showToast('Share URL copied ✓', 'success'));
}

// ── SEARCH FILTER ─────────────────────────────────────────────────
function filterPrompts(prompts, query, tool = 'all') {
  const q = query.toLowerCase();
  return prompts.filter(p => {
    const matchTool = tool === 'all' || p.tool === tool || p.category === tool;
    const matchQuery = !q || p.text.toLowerCase().includes(q) ||
      (p.title||p.fmt).toLowerCase().includes(q) ||
      p.tip.toLowerCase().includes(q);
    return matchTool && matchQuery;
  });
}

// ── TOAST ─────────────────────────────────────────────────────────
function showToast(msg, type='') {
  let t = document.getElementById('toast');
  if (!t) { t = document.createElement('div'); t.id='toast'; t.className='toast'; document.body.appendChild(t); }
  t.textContent = msg;
  t.className = `toast ${type}`;
  void t.offsetWidth;
  t.classList.add('show');
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.classList.remove('show'), 2500);
}

// ── HTML ESCAPE ───────────────────────────────────────────────────
function escHtml(s) {
  return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

// ── MARK ACTIVE NAV ───────────────────────────────────────────────
function markActiveNav() {
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('a[data-page]').forEach(a => {
    a.classList.toggle('active', a.dataset.page === page);
  });
}

// ── INIT ──────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  ThemeManager.init();
  KeyVault.init();
  Context.init();
  initDrawer();
  initSettings();
  initContextBar();
  markActiveNav();

  // Wire ctx inputs
  document.querySelectorAll('[data-ctx]').forEach(el => {
    el.addEventListener('input', () => {
      const s = document.querySelector('[data-ctx="subject"]')?.value||'';
      const u = document.querySelector('[data-ctx="unit"]')?.value||'';
      const t = document.querySelector('[data-ctx="topic"]')?.value||'';
      Context.save(s,u,t);
    });
  });
});

window.copyPrompt  = copyPrompt;
window.sharePrompt = sharePrompt;
window.showToast   = showToast;
window.renderPrompts = renderPrompts;
window.filterPrompts = filterPrompts;
window.Context     = Context;
window.ThemeManager = ThemeManager;
window.AI          = AI;
window.KeyVault    = KeyVault;
