// shell.js — injects nav, drawer and settings modal into every page
(function(){
  const NAV_HTML = `
<nav class="nav">
  <div class="nav-brand">Vault<span>LM</span></div>
  <div class="nav-links">
    <a href="index.html" data-page="index.html">Home</a>
    <a href="media.html" data-page="media.html">Media</a>
    <a href="documents.html" data-page="documents.html">Documents</a>
    <a href="practice.html" data-page="practice.html">Practice</a>
    <a href="visuals.html" data-page="visuals.html">Visuals</a>
    <a href="subjects.html" data-page="subjects.html">Subjects</a>
    <a href="community.html" data-page="community.html">Community</a>
  </div>
  <div class="nav-actions">
    <button class="btn-icon" id="settings-btn" title="Settings">⚙</button>
    <div class="hamburger" id="hamburger"><span></span><span></span><span></span></div>
  </div>
</nav>
<div class="drawer-overlay" id="drawer-overlay"></div>
<div class="drawer" id="drawer">
  <div class="drawer-head">Vault<span>LM</span></div>
  <nav class="drawer-nav">
    <div class="drawer-section">Main</div>
    <a href="index.html" data-page="index.html"><span class="nav-icon">🏠</span>Home</a>
    <div class="drawer-section">Prompts</div>
    <a href="media.html" data-page="media.html"><span class="nav-icon">🎙</span>Media</a>
    <a href="documents.html" data-page="documents.html"><span class="nav-icon">📄</span>Documents</a>
    <a href="practice.html" data-page="practice.html"><span class="nav-icon">🃏</span>Practice</a>
    <a href="visuals.html" data-page="visuals.html"><span class="nav-icon">📊</span>Visuals</a>
    <div class="drawer-section">Resources</div>
    <a href="subjects.html" data-page="subjects.html"><span class="nav-icon">📚</span>Subjects</a>
    <a href="community.html" data-page="community.html"><span class="nav-icon">🌐</span>Community</a>
  </nav>
</div>
<div class="modal-overlay" id="settings-overlay">
  <div class="modal">
    <div class="modal-head">
      <div class="modal-title">⚙ Settings</div>
      <button class="btn-icon" id="settings-close">✕</button>
    </div>
    <div class="modal-body">
      <div class="field"><label>Theme</label>
        <div class="theme-grid">
          <button class="theme-btn" data-theme="glass">◈ Glass</button>
          <button class="theme-btn" data-theme="editorial">◻ Editorial</button>
          <button class="theme-btn" data-theme="terminal">▸ Terminal</button>
          <button class="theme-btn" data-theme="blocks">◼ Blocks</button>
        </div>
      </div>
      <div class="field"><label>AI Provider</label>
        <div class="provider-tabs">
          <button class="p-tab active" data-provider="groq">Groq (Recommended)</button>
          <button class="p-tab" data-provider="gemini">Gemini</button>
        </div>
        <div id="panel-groq" class="provider-panel">
          <p style="font-size:.8rem;color:var(--text2);margin-bottom:.5rem">Free at <strong>console.groq.com</strong> — no credit card.</p>
          <input id="groq-key" class="ctx-input" type="password" placeholder="gsk_…" style="width:100%;margin-bottom:.5rem">
          <button class="btn btn-primary" id="save-groq">Save Groq Key</button>
        </div>
        <div id="panel-gemini" class="provider-panel" style="display:none">
          <p style="font-size:.8rem;color:var(--text2);margin-bottom:.5rem">Free at <strong>aistudio.google.com/apikey</strong>.</p>
          <input id="gemini-key" class="ctx-input" type="password" placeholder="AIza…" style="width:100%;margin-bottom:.5rem">
          <button class="btn btn-primary" id="save-gemini">Save Gemini Key</button>
        </div>
      </div>
      <div class="field"><label>About</label>
        <p style="font-size:.82rem;color:var(--text2);line-height:1.6">
          Built by <strong>Yashwanth</strong> · B.Tech AI & DS, Sem 4 · PIET Parul University<br>
          Keys stored locally only — never sent anywhere except your chosen AI provider.<br>
          <a href="https://github.com/Yash-1505" target="_blank" style="color:var(--accent)">github.com/Yash-1505</a>
        </p>
      </div>
    </div>
  </div>
</div>`;

  const CTX_HTML = `
<div class="ctx-bar">
  <div class="ctx-bar-head">
    <span class="ctx-label">📍 Context — fills all prompts</span>
    <button class="btn btn-primary" id="ctx-apply">Apply</button>
  </div>
  <div class="ctx-inputs">
    <input class="ctx-input" data-ctx="subject" placeholder="Subject">
    <input class="ctx-input" data-ctx="unit" placeholder="Unit">
    <input class="ctx-input" data-ctx="topic" placeholder="Topic">
  </div>
  <div class="ctx-ai-row">
    <input class="ctx-ai-input" id="ctx-ai-input" placeholder="Paste text — AI extracts context (optional)">
    <button class="btn btn-primary" id="ctx-ai">✦ AI</button>
  </div>
</div>`;

  document.addEventListener('DOMContentLoaded', function(){
    // Insert shell before body content if body has data-shell attribute
    if(document.body.dataset.shell){
      document.body.insertAdjacentHTML('afterbegin', NAV_HTML);
    }
    // Insert ctx bar
    const ctxTarget = document.getElementById('ctx-target');
    if(ctxTarget){ ctxTarget.outerHTML = CTX_HTML; }
  });

  window.NAV_HTML = NAV_HTML;
  window.CTX_HTML = CTX_HTML;
})();
