// ═══════════════════════════════════════════════════════════
//  NATEMBEA EXPEDITIONS — MAIN APP
//  Renders all sections from DATA (data.js)
//  No framework needed. Pure vanilla JS.
// ═══════════════════════════════════════════════════════════

'use strict';

const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

function stars(n) {
  return Array.from({ length: 5 }, (_, i) =>
    `<svg width="14" height="14" viewBox="0 0 24 24" fill="${i < n ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>`
  ).join('');
}

function checkIcon() {
  return `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>`;
}

const waIcon = `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.137.565 4.147 1.547 5.887L0 24l6.282-1.519A11.938 11.938 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.811 9.811 0 01-5.004-1.369l-.36-.213-3.729.902.938-3.628-.234-.374A9.817 9.817 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/></svg>`;

// ── NAV ─────────────────────────────────────────────────────
function renderNav() {
  const b = DATA.brand;
  $('#navbar').innerHTML = `
    <a class="nav-logo" href="#hero" aria-label="Natembea Expeditions home">
      <span class="nav-logo-text">Natembea<span>.</span></span>
    </a>
    <ul class="nav-links" id="navLinks">
      ${DATA.nav.map(n => `<li><a href="${n.href}">${n.label}</a></li>`).join('')}
      <li><a href="#contact" class="nav-cta">Book Now</a></li>
    </ul>
    <button class="nav-hamburger" id="hamburger" aria-label="Open menu">
      <span></span><span></span><span></span>
    </button>
  `;

  const mobileMenu = document.createElement('div');
  mobileMenu.className = 'nav-mobile';
  mobileMenu.id = 'mobileMenu';
  mobileMenu.innerHTML = `
    <button class="nav-mobile-close" id="mobileClose" aria-label="Close menu">✕</button>
    ${DATA.nav.map(n => `<a href="${n.href}">${n.label}</a>`).join('')}
    <a href="#contact" style="color:var(--gold)">Book an Expedition</a>
  `;
  document.body.appendChild(mobileMenu);

  $('#hamburger').addEventListener('click', () => mobileMenu.classList.add('open'));
  $('#mobileClose').addEventListener('click', () => mobileMenu.classList.remove('open'));
  mobileMenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => mobileMenu.classList.remove('open'));
  });

  window.addEventListener('scroll', () => {
    $('#navbar').classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });
}

// ── HERO ─────────────────────────────────────────────────────
function renderHero() {
  const b = DATA.brand;
  $('#hero').innerHTML = `
    <div class="hero-bg" id="heroBg"></div>
    <div class="hero-overlay"></div>
    <div class="hero-accent-bar"></div>
    <div class="hero-content">
      <p class="hero-eyebrow">Kenya's Premier Expedition Company</p>
      <h1 class="hero-title">${b.tagline.replace('\n', '\n')}</h1>
      <p class="hero-sub">Our passion is crafting seamless and inspiring travel experiences that connect you with the breathtaking beauty and rich cultures our planet has to offer.</p>
      <div class="hero-actions">
        <a href="#destinations" class="btn btn-gold">Explore Destinations →</a>
        <a href="https://wa.me/${b.whatsapp}?text=Hi%20Natembea!%20I%27d%20love%20to%20plan%20an%20expedition."
           target="_blank" rel="noopener" class="btn btn-outline-white">
          ${waIcon} WhatsApp Us
        </a>
      </div>
      <div class="hero-stats">
        ${DATA.heroStats.map(s => `
          <div class="hero-stat">
            <div class="hero-stat-num">${s.num}</div>
            <div class="hero-stat-label">${s.label}</div>
          </div>
        `).join('')}
      </div>
    </div>
    <div class="hero-scroll">
      <div class="hero-scroll-line"></div>
      <span>Scroll</span>
    </div>
  `;
  setTimeout(() => { const bg = $('#heroBg'); if (bg) bg.classList.add('loaded'); }, 100);
}

// ── TRUST BAR ────────────────────────────────────────────────
function renderTrustBar() {
  const items = [
    { icon: checkIcon(), text: 'Curated Safari & Beach Packages' },
    { icon: checkIcon(), text: 'Expert Local Guides' },
    { icon: checkIcon(), text: '100% Locally Operated' },
    { icon: checkIcon(), text: 'Free Itinerary Planning' },
    { icon: checkIcon(), text: '24/7 On-Trip Support' },
  ];
  $('#trust-bar').innerHTML = `
    <div class="trust-inner">
      ${items.map(i => `<div class="trust-item">${i.icon}<span>${i.text}</span></div>`).join('')}
    </div>
  `;
}

// ── HOME INTRO ───────────────────────────────────────────────
function renderHomeIntro() {
  $('#home-intro').innerHTML = `
    <div class="container">
      <div class="home-intro-grid">
        <div class="fade-in">
          <p class="t-eyebrow">About Our Expeditions</p>
          <h2 class="t-section-title">Explore. Discover. Experience.</h2>
          <div class="divider"></div>
          <p class="t-lead" style="margin-bottom:20px">Whether you dream of soaring through vibrant cityscapes, embarking on thrilling safaris, or relaxing on pristine beaches, we are your trusted guide to making those dreams a reality.</p>
          <p style="font-size:.9rem;line-height:1.78;color:var(--text-mid);margin-bottom:32px">Ready to explore? Dive into our curated expeditions and let Natembea guide you to your next extraordinary adventure.</p>
          <a href="#destinations" class="btn btn-navy">View All Destinations →</a>
        </div>
        <div class="home-intro-cards fade-in fade-in-delay-1">
          <div class="intro-card">
            <div class="intro-card-icon">🦁</div>
            <div class="intro-card-title">Safari Adventures</div>
            <div class="intro-card-text">Track the Big Five across Kenya's iconic reserves and national parks.</div>
          </div>
          <div class="intro-card">
            <div class="intro-card-icon">🏖️</div>
            <div class="intro-card-title">Beach Escapes</div>
            <div class="intro-card-text">Unwind on Kenya's pristine Indian Ocean coastline from Diani to Lamu.</div>
          </div>
          <div class="intro-card">
            <div class="intro-card-icon">✈️</div>
            <div class="intro-card-title">Flight & Tours</div>
            <div class="intro-card-text">Seamless travel packages combining flights, lodges, and expert guides.</div>
          </div>
          <div class="intro-card">
            <div class="intro-card-icon">🎯</div>
            <div class="intro-card-title">Custom Itineraries</div>
            <div class="intro-card-text">Bespoke journeys tailored exactly to your desires, pace, and budget.</div>
          </div>
        </div>
      </div>
    </div>
  `;
}

// ── TOURS ─────────────────────────────────────────────────────
function renderTours() {
  $('#tours').innerHTML = `
    <div class="container">
      <div class="section-header fade-in">
        <p class="t-eyebrow">Signature Journeys</p>
        <h2 class="t-section-title">Choose Your Adventure</h2>
        <div class="divider"></div>
        <p class="t-lead">Every expedition is crafted by people who have made this journey themselves — not pieced together from a catalogue.</p>
      </div>
      <div class="tours-grid">
        ${DATA.tours.map((t, i) => `
          <div class="tour-card fade-in fade-in-delay-${(i % 3) + 1}">
            <div class="tour-img-wrap">
              <img src="${t.image}" alt="${t.name}" loading="lazy" />
              <span class="tour-badge">${t.badge}</span>
            </div>
            <div class="tour-body">
              <p class="tour-tagline">${t.tagline}</p>
              <h3 class="tour-name">${t.name}</h3>
              <p class="tour-desc">${t.desc}</p>
              <ul class="tour-highlights">
                ${t.highlights.map(h => `<li>${h}</li>`).join('')}
              </ul>
              <div class="tour-footer">
                <span class="tour-price">${t.price}</span>
                <span class="tour-duration">⏱ ${t.duration}</span>
              </div>
              <a href="#contact" class="tour-cta" data-tour="${t.name}">Enquire About This Tour</a>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  $$('.tour-cta').forEach(btn => {
    btn.addEventListener('click', () => {
      const tourName = btn.dataset.tour;
      const select = $('#tourSelect');
      if (select) {
        const option = Array.from(select.options).find(o => o.text === tourName);
        if (option) { select.value = option.value; }
      }
    });
  });
}

// ── DESTINATIONS ─────────────────────────────────────────────
function renderDestinations() {
  const tabSafari = DATA.safariDests;
  const tabBeach  = DATA.beachDests;

  function destCards(dests) {
    return dests.map((d, i) => `
      <div class="dest-card fade-in fade-in-delay-${(i % 4) + 1}">
        <img src="${d.image}" alt="${d.name}" loading="lazy" />
        <div class="dest-overlay">
          <div class="dest-name">${d.name}</div>
          <div class="dest-tag">${d.tag}</div>
        </div>
      </div>
    `).join('');
  }

  $('#destinations').innerHTML = `
    <div class="container">
      <div class="section-header fade-in">
        <p class="t-eyebrow">Where We Go</p>
        <h2 class="t-section-title">Kenya's Finest Places</h2>
        <div class="divider"></div>
        <p class="t-lead">From the savannah to the coast — every corner of Kenya holds something unforgettable.</p>
      </div>

      <div class="dest-tabs fade-in">
        <button class="dest-tab active" data-tab="safari">🦁 Safari Destinations</button>
        <button class="dest-tab" data-tab="beach">🏖️ Beach Destinations</button>
      </div>

      <div class="dest-grid" id="dest-safari">${destCards(tabSafari)}</div>
      <div class="dest-grid dest-hidden" id="dest-beach">${destCards(tabBeach)}</div>
    </div>
  `;

  $$('.dest-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      $$('.dest-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const which = tab.dataset.tab;
      $('#dest-safari').classList.toggle('dest-hidden', which !== 'safari');
      $('#dest-beach').classList.toggle('dest-hidden', which !== 'beach');
    });
  });
}

// ── ANIMAL STRIP ─────────────────────────────────────────────
function renderAnimalStrip() {
  const animals = [
    { name: "African Lion",     region: "Maasai Mara", image: "https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?w=500&q=80" },
    { name: "African Elephant", region: "Amboseli",    image: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=500&q=80" },
    { name: "Black Rhino",      region: "Ol Pejeta",   image: "https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?w=500&q=80" },
    { name: "Leopard",          region: "Samburu",     image: "https://images.unsplash.com/photo-1456926631375-92c8ce872def?w=500&q=80" },
    { name: "Cheetah",          region: "Maasai Mara", image: "https://images.unsplash.com/photo-1504173010664-32509107de97?w=500&q=80" },
  ];
  $('#animals').innerHTML = `
    <div class="animals-inner">
      <div class="animals-header fade-in">
        <p class="t-eyebrow" style="color:var(--gold);text-align:center">Kenya's Big Five & Beyond</p>
        <h2 class="t-section-title" style="color:#fff;text-align:center">Wildlife You'll Encounter</h2>
        <div class="divider" style="margin:14px auto 0;background:var(--gold)"></div>
      </div>
      <div class="animals-strip">
        ${animals.map((a, i) => `
          <div class="animal-tile fade-in fade-in-delay-${i + 1}">
            <img src="${a.image}" alt="${a.name}" loading="lazy" />
            <div class="animal-tile-overlay">
              <div class="animal-tile-name">${a.name}</div>
              <div class="animal-tile-region">${a.region}</div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// ── SPECIAL OFFERS ────────────────────────────────────────────
function renderOffers() {
  $('#offers').innerHTML = `
    <div class="container">
      <div class="section-header fade-in">
        <p class="t-eyebrow">Exclusive Deals</p>
        <h2 class="t-section-title">Special Offers & Packages</h2>
        <div class="divider"></div>
        <p class="t-lead">Seasonal promotions, honeymoon escapes, family adventures, and group deals — curated for every traveller.</p>
      </div>
      <div class="offers-grid">
        ${DATA.offers.map((o, i) => `
          <div class="offer-card fade-in fade-in-delay-${(i % 3) + 1}">
            <div class="offer-img-wrap">
              <img src="${o.image}" alt="${o.title}" loading="lazy" />
              <span class="offer-badge ${o.badgeClass}">${o.badge}</span>
              ${o.saving ? `<span class="offer-saving">${o.saving}</span>` : ''}
            </div>
            <div class="offer-body">
              <h3 class="offer-title">${o.title}</h3>
              <p class="offer-desc">${o.desc}</p>
              <div class="offer-tags">
                ${o.tags.map(t => `<span class="offer-tag">${t}</span>`).join('')}
              </div>
              <div class="offer-footer">
                <div class="offer-pricing">
                  ${o.original ? `<span class="offer-original">${o.original}</span>` : ''}
                  <span class="offer-price">${o.price}</span>
                  <span class="offer-duration">⏱ ${o.duration}</span>
                </div>
              </div>
              <div class="offer-expires">${o.expires}</div>
              <a href="#contact" class="tour-cta" data-offer="${o.title}" style="margin-top:16px">Claim This Offer</a>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  $$('[data-offer]').forEach(btn => {
    btn.addEventListener('click', () => {
      const offerName = btn.dataset.offer;
      const msgField = $('#message');
      if (msgField) { msgField.value = `I'm interested in the "${offerName}" offer. Please send me more details.`; }
    });
  });
}

// ── BLOG ─────────────────────────────────────────────────────
function renderBlog() {
  const [featured, ...rest] = DATA.blog;
  $('#blog').innerHTML = `
    <div class="container">
      <div class="section-header fade-in">
        <p class="t-eyebrow">Travel Journal</p>
        <h2 class="t-section-title">From the Natembea Blog</h2>
        <div class="divider"></div>
        <p class="t-lead">Travel tips, destination guides, customer stories, tourism news, and inspiration for your next adventure.</p>
      </div>

      <div class="blog-featured fade-in">
        <div class="blog-featured-img">
          <img src="${featured.image}" alt="${featured.title}" loading="lazy" />
          <span class="blog-category">${featured.category}</span>
        </div>
        <div class="blog-featured-body">
          <p class="blog-meta">${featured.date} · ${featured.readTime}</p>
          <h3 class="blog-featured-title">${featured.title}</h3>
          <p class="blog-featured-excerpt">${featured.excerpt}</p>
          <a href="#contact" class="btn btn-navy" style="margin-top:24px">Read More →</a>
        </div>
      </div>

      <div class="blog-grid">
        ${rest.map((p, i) => `
          <div class="blog-card fade-in fade-in-delay-${(i % 3) + 1}">
            <div class="blog-card-img">
              <img src="${p.image}" alt="${p.title}" loading="lazy" />
              <span class="blog-category">${p.category}</span>
            </div>
            <div class="blog-card-body">
              <p class="blog-meta">${p.date} · ${p.readTime}</p>
              <h3 class="blog-card-title">${p.title}</h3>
              <p class="blog-card-excerpt">${p.excerpt}</p>
              <a href="#contact" class="blog-read-more">Read Article →</a>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// ── ABOUT ─────────────────────────────────────────────────────
function renderAbout() {
  const a = DATA.about;
  $('#about').innerHTML = `
    <div class="container">
      <div class="about-grid">
        <div class="about-img-wrap fade-in">
          <img src="${a.image}" alt="Natembea Expeditions safari landscape" loading="lazy" />
          <div class="about-img-caption">Our guides have spent decades learning every track, watering hole, and destination across Kenya and beyond.</div>
        </div>
        <div class="fade-in fade-in-delay-1">
          <div class="section-header" style="margin-bottom:32px">
            <p class="t-eyebrow">Our Story</p>
            <h2 class="t-section-title" style="color:#fff">Born to Wander,<br>Built to Guide</h2>
            <div class="divider"></div>
          </div>
          <p class="t-lead" style="margin-bottom:16px">${a.story}</p>
          <p style="font-size:.9rem;line-height:1.78;color:rgba(255,255,255,0.65);margin-bottom:16px">${a.detail}</p>
          <p style="font-size:.9rem;line-height:1.78;color:rgba(255,255,255,0.55);margin-bottom:32px;font-style:italic">${a.mission}</p>

          <div class="about-stats">
            ${a.stats.map(s => `
              <div class="stat-box">
                <div class="stat-num">${s.num}</div>
                <div class="stat-label">${s.label}</div>
              </div>
            `).join('')}
          </div>

          <div class="about-values" style="margin-top:36px">
            ${a.values.map(v => `
              <div class="value-item">
                <div class="value-icon">${v.icon}</div>
                <div>
                  <div class="value-title">${v.title}</div>
                  <div class="value-text">${v.text}</div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </div>
  `;
}

// ── GALLERY ───────────────────────────────────────────────────
function renderGallery() {
  $('#gallery').innerHTML = `
    <div class="container">
      <div class="section-header fade-in">
        <p class="t-eyebrow">Through the Lens</p>
        <h2 class="t-section-title" style="color:#fff">Moments From the Field</h2>
        <div class="divider"></div>
      </div>
      <div class="gallery-grid">
        ${DATA.gallery.map((g, i) => `
          <div class="gallery-item ${g.large ? 'large' : ''} fade-in fade-in-delay-${i % 4 + 1}"
               data-img="${g.image}" data-caption="${g.caption}" role="button" tabindex="0"
               aria-label="View: ${g.caption}">
            <img src="${g.image}" alt="${g.caption}" loading="lazy" />
            <div class="gallery-item-caption">${g.caption}</div>
          </div>
        `).join('')}
      </div>
    </div>
    <div class="lightbox-overlay" id="lightbox" role="dialog" aria-modal="true" aria-label="Image viewer">
      <button class="lightbox-close" id="lightboxClose" aria-label="Close">✕</button>
      <img class="lightbox-img" id="lightboxImg" src="" alt="" />
    </div>
  `;

  const lightbox = $('#lightbox');
  const lightboxImg = $('#lightboxImg');

  $$('.gallery-item').forEach(item => {
    const open = () => {
      lightboxImg.src = item.dataset.img;
      lightboxImg.alt = item.dataset.caption;
      lightbox.classList.add('open');
      document.body.style.overflow = 'hidden';
    };
    item.addEventListener('click', open);
    item.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') open(); });
  });

  $('#lightboxClose').addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });

  function closeLightbox() {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
  }
}

// ── TESTIMONIALS ─────────────────────────────────────────────
function renderTestimonials() {
  $('#testimonials').innerHTML = `
    <div class="container">
      <div class="section-header fade-in" style="text-align:center;max-width:600px;margin-left:auto;margin-right:auto">
        <p class="t-eyebrow">Traveller Stories</p>
        <h2 class="t-section-title">What Our Adventurers Say</h2>
        <div class="divider" style="margin-left:auto;margin-right:auto"></div>
      </div>
      <div class="testimonials-grid">
        ${DATA.testimonials.map((t, i) => `
          <div class="testi-card fade-in fade-in-delay-${(i % 3) + 1}">
            <div class="testi-stars">${stars(t.stars)}</div>
            <p class="testi-quote">${t.quote}</p>
            <div class="testi-author">
              <div class="testi-avatar">${t.initials}</div>
              <div>
                <div class="testi-name">${t.name}</div>
                <div class="testi-role">${t.role}</div>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// ── CONTACT ───────────────────────────────────────────────────
function renderContact() {
  const c = DATA.contact;
  const b = DATA.brand;

  $('#contact').innerHTML = `
    <div class="container">
      <div class="contact-grid">
        <div class="fade-in">
          <div class="section-header">
            <p class="t-eyebrow">Get In Touch</p>
            <h2 class="t-section-title">Plan Your Journey</h2>
            <div class="divider"></div>
            <p class="t-lead" style="margin-bottom:36px">Tell us your dream and we'll build the expedition. Every enquiry receives a personal response within 24 hours.</p>
          </div>

          <div class="contact-details">
            ${c.details.map(d => `
              <div class="contact-item">
                <div class="contact-icon">${d.icon}</div>
                <div>
                  <div class="contact-item-title">${d.title}</div>
                  <div class="contact-item-val">${d.val.replace('\n', '<br>')}</div>
                </div>
              </div>
            `).join('')}
          </div>

          <div class="contact-social-row">
            <p class="contact-social-label">Follow Us</p>
            <div class="contact-socials">
              <a href="${b.social.tiktok}" target="_blank" rel="noopener" class="social-pill">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.27 8.27 0 004.83 1.56V6.79a4.85 4.85 0 01-1.06-.1z"/></svg>
                TikTok
              </a>
              <a href="${b.social.twitter}" target="_blank" rel="noopener" class="social-pill">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                X (Twitter)
              </a>
              <a href="${b.social.instagram}" target="_blank" rel="noopener" class="social-pill">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
                Instagram
              </a>
            </div>
          </div>

          <a href="https://wa.me/${b.whatsapp}?text=Hi%20Natembea!%20I%27d%20like%20to%20plan%20an%20expedition."
             target="_blank" rel="noopener" class="btn btn-whatsapp" style="margin-top:24px">
            ${waIcon} Chat on WhatsApp
          </a>
        </div>

        <div class="contact-form fade-in fade-in-delay-1">
          <div class="form-title">Request Your Expedition</div>
          <div class="form-sub">Fill in your details and one of our travel planners will be in touch within 24 hours.</div>

          <div id="formFields">
            <div class="form-row">
              <div class="form-group">
                <label for="firstName">First Name</label>
                <input type="text" id="firstName" placeholder="Jane" autocomplete="given-name" />
              </div>
              <div class="form-group">
                <label for="lastName">Last Name</label>
                <input type="text" id="lastName" placeholder="Mwangi" autocomplete="family-name" />
              </div>
            </div>
            <div class="form-group">
              <label for="email">Email Address</label>
              <input type="email" id="email" placeholder="you@example.com" autocomplete="email" />
            </div>
            <div class="form-group">
              <label for="phone">Phone / WhatsApp</label>
              <input type="tel" id="phone" placeholder="+254 ..." autocomplete="tel" />
            </div>
            <div class="form-group">
              <label for="tourSelect">Tour of Interest</label>
              <select id="tourSelect">
                <option value="">Select a tour or offer...</option>
                ${c.tourOptions.map(o => `<option value="${o}">${o}</option>`).join('')}
              </select>
            </div>
            <div class="form-row">
              <div class="form-group">
                <label for="travelDate">Travel Dates</label>
                <input type="text" id="travelDate" placeholder="e.g. August 2026" />
              </div>
              <div class="form-group">
                <label for="groupSize">Group Size</label>
                <input type="number" id="groupSize" min="1" max="50" placeholder="e.g. 2" />
              </div>
            </div>
            <div class="form-group">
              <label for="message">Tell Us More</label>
              <textarea id="message" placeholder="Special interests, dietary needs, budget range, honeymoon trip..."></textarea>
            </div>
            <button class="form-submit" id="formSubmit" onclick="handleFormSubmit()">
              Send My Enquiry →
            </button>
          </div>

          <div class="form-success" id="formSuccess">
            <div class="form-success-icon">✈️</div>
            <div class="form-success-title">Expedition Request Received!</div>
            <div class="form-success-msg">
              Thank you for reaching out. One of our travel planners will contact you within 24 hours to start building your perfect journey.
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

// ── FOOTER ────────────────────────────────────────────────────
function renderFooter() {
  const b = DATA.brand;
  $('#footer').innerHTML = `
    <div class="footer-inner">
      <div class="footer-top">
        <div>
          <div class="footer-brand-name">Natembea<span>.</span></div>
          <div class="footer-brand-sub">Expeditions</div>
          <p class="footer-brand-text">
            Crafting seamless and inspiring travel experiences that connect you with the breathtaking beauty and rich cultures our planet has to offer.
          </p>
          <div class="footer-social">
            <a href="${b.social.instagram}" target="_blank" rel="noopener" aria-label="Instagram">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
            </a>
            <a href="${b.social.tiktok}" target="_blank" rel="noopener" aria-label="TikTok">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.27 8.27 0 004.83 1.56V6.79a4.85 4.85 0 01-1.06-.1z"/></svg>
            </a>
            <a href="${b.social.twitter}" target="_blank" rel="noopener" aria-label="X Twitter">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="https://wa.me/${b.whatsapp}" target="_blank" rel="noopener" aria-label="WhatsApp">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.137.565 4.147 1.547 5.887L0 24l6.282-1.519A11.938 11.938 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.811 9.811 0 01-5.004-1.369l-.36-.213-3.729.902.938-3.628-.234-.374A9.817 9.817 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/></svg>
            </a>
          </div>
        </div>

        <div>
          <div class="footer-col-title">Quick Links</div>
          <ul class="footer-links">
            ${DATA.nav.map(n => `<li><a href="${n.href}">${n.label}</a></li>`).join('')}
          </ul>
        </div>

        <div>
          <div class="footer-col-title">Popular Tours</div>
          <ul class="footer-links">
            ${DATA.tours.slice(0, 5).map(t => `<li><a href="#tours">${t.name}</a></li>`).join('')}
          </ul>
        </div>

        <div>
          <div class="footer-col-title">Contact</div>
          <ul class="footer-links">
            <li><a href="mailto:${b.email}">${b.email}</a></li>
            <li><a href="tel:${b.phone}">${b.phone}</a></li>
            <li><a href="tel:${b.phone2}">${b.phone2}</a></li>
            <li><span style="color:rgba(255,255,255,0.55)">${b.location}</span></li>
            <li><span style="color:rgba(255,255,255,0.55)">Mon – Sat · 8am – 6pm EAT</span></li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <p class="footer-copy">© ${new Date().getFullYear()} Natembea Expeditions. All rights reserved. Nairobi, Kenya.</p>
        <p class="footer-copy">Your World Awaits. 🌍</p>
      </div>
    </div>
  `;
}

// ── WHATSAPP FLOAT ────────────────────────────────────────────
function renderWhatsapp() {
  const w = document.createElement('a');
  w.id = 'whatsapp-float';
  w.href = `https://wa.me/${DATA.brand.whatsapp}?text=Hi%20Natembea!%20I%27d%20love%20to%20plan%20an%20expedition.`;
  w.target = '_blank';
  w.rel = 'noopener';
  w.setAttribute('aria-label', 'Chat on WhatsApp');
  w.innerHTML = `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.137.565 4.147 1.547 5.887L0 24l6.282-1.519A11.938 11.938 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.811 9.811 0 01-5.004-1.369l-.36-.213-3.729.902.938-3.628-.234-.374A9.817 9.817 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/></svg>`;
  document.body.appendChild(w);
}

// ── FORM HANDLER ─────────────────────────────────────────────
window.handleFormSubmit = function () {
  const firstName = $('#firstName')?.value.trim();
  const email = $('#email')?.value.trim();

  if (!firstName || !email) {
    alert('Please fill in at least your name and email address.');
    return;
  }

  const btn = $('#formSubmit');
  btn.textContent = 'Sending...';
  btn.disabled = true;

  setTimeout(() => {
    $('#formFields').style.display = 'none';
    $('#formSuccess').classList.add('show');
  }, 1200);
};

// ── SCROLL ANIMATIONS ────────────────────────────────────────
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  $$('.fade-in').forEach(el => observer.observe(el));
}

// ── BOOT ─────────────────────────────────────────────────────
function init() {
  renderNav();
  renderHero();
  renderTrustBar();
  renderHomeIntro();
  renderTours();
  renderAnimalStrip();
  renderDestinations();
  renderOffers();
  renderBlog();
  renderAbout();
  renderGallery();
  renderTestimonials();
  renderContact();
  renderFooter();
  renderWhatsapp();

  requestAnimationFrame(() => {
    requestAnimationFrame(initScrollAnimations);
  });
}

document.addEventListener('DOMContentLoaded', init);
