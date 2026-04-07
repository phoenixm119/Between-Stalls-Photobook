const tapeColors = ['#4a7a5a','#9a9a9a','#8b2020','#6b5b8a','#1a5a7a','#8a6a2a','#3a3a5a'];

const bioPhotos = [
  { num:'01', label:'Quiet Exchange — I',    desc:'Welcome signboard',   src:'images/bio-01.jpg' },
  { num:'02', label:'Quiet Exchange — II',   desc:'Morning transaction, Green Market',           src:'images/bio-02.jpg' },
  { num:'03', label:'Quiet Exchange — III',  desc:'Currency in motion, Bio Market',              src:'images/bio-03.jpg' },
  { num:'04', label:'Quiet Exchange — IV',   desc:'Two hands, one exchange',             src:'images/bio-04.jpg' },
  { num:'05', label:'Quiet Exchange — V',    desc:'Handshake of commerce, Bio Market',           src:'images/bio-05.jpg' },
  { num:'06', label:'Quiet Exchange — VI',   desc:'Paper bag passing, Green Market',                     src:'images/bio-06.jpg' },
  { num:'07', label:'Quiet Exchange — VII',  desc:'The weight of a purchase',                    src:'images/bio-07.jpg' },
  { num:'08', label:'Quiet Exchange — VIII', desc:'Leafy greens and gold bangles',               src:'images/bio-08.jpg' },
  { num:'09', label:'Quiet Exchange — IX',   desc:'A great exchange',             src:'images/bio-09.jpg' },
  { num:'10', label:'Quiet Exchange — X',    desc:'Styrofoam box and Namibian notes',            src:'images/bio-10.jpg' },
  { num:'11', label:'Quiet Exchange — XI',   desc:'Bread and rings',                             src:'images/bio-11.jpg' },
  { num:'12', label:'Quiet Exchange — XI',   desc:'Dropper bottles and a handshake',                             src:'images/bio-12.jpg' },
  { num:'13', label:'Quiet Exchange — XI',   desc:'Cravings and exchange',                             src:'images/bio-13.jpg' },
  { num:'14', label:'Quiet Exchange — XI',   desc:'Bread and rings',                             src:'images/bio-14.jpg' },
];

const villagePhotos = [
  { num:'01', label:'Where Connection Links — I',    desc:'Guitar player, Village Market',    src:'images/village-01.jpg' },
  { num:'02', label:'Where Connection Links — II',   desc:'Conversation at the denim stall',  src:'images/village-02.jpg' },
  { num:'03', label:'Where Connection Links — III',  desc:'Team Virtu vendor in discussion',  src:'images/village-03.jpg' },
  { num:'04', label:'Where Connection Links — IV',   desc:'Two women reviewing notes',        src:'images/village-04.jpg' },
  { num:'05', label:'Where Connection Links — V',    desc:'Keyboard player in sunglasses',    src:'images/village-05.jpg' },
  { num:'06', label:'Where Connection Links — VI',   desc:'Two women reviewing notes',     src:'images/village-06.jpg' },
  { num:'07', label:'Where Connection Links — VII',  desc:'Tambourine exchange, laughter',    src:'images/village-07.jpg' },
  { num:'08', label:'Where Connection Links — VIII', desc:'Electric guitarist, white cap',    src:'images/village-08.jpg' },
  { num:'09', label:'Where Connection Links — VIII', desc:'Electric guitarist, white cap',    src:'images/village-09.jpg' },
  { num:'10', label:'Where Connection Links — VIII', desc:'Electric guitarist, white cap',    src:'images/village-10.jpg' },
  { num:'11', label:'Where Connection Links — VIII', desc:'Electric guitarist, white cap',    src:'images/village-11.jpg' },
  { num:'12', label:'Where Connection Links — VIII', desc:'Electric guitarist, white cap',    src:'images/village-12.jpg' },
  { num:'12', label:'Where Connection Links — VIII', desc:'Electric guitarist, white cap',    src:'images/village-13.jpg' },
];

const oshetuPhotos = [
  { num:'01', label:'Movement to Profit — I',    desc:'Founding plaque, June 2005',    src:'images/oshetu-01.jpg' },
  { num:'02', label:'Movement to Profit — II',   desc:'Frying on the flat top',        src:'images/oshetu-02.jpg' },
  { num:'03', label:'Movement to Profit — III',  desc:'Eating with hands, Oshetu',     src:'images/oshetu-03.jpg' },
  { num:'04', label:'Movement to Profit — IV',   desc:'Knife on offal, cutting board', src:'images/oshetu-04.jpg' },
  { num:'05', label:'Movement to Profit — V',    desc:'Butcher at work, raw meat',     src:'images/oshetu-05.jpg' },
  { num:'06', label:'Movement to Profit — VI',   desc:'Biltong being pulled, DRY box', src:'images/oshetu-06.jpg' },
  { num:'07', label:'Movement to Profit — VII',  desc:'Bowl of stewed meat',           src:'images/oshetu-07.jpg' },
  { num:'08', label:'Movement to Profit — VIII', desc:'Container of food, held up',    src:'images/oshetu-08.jpg' },
  { num:'09', label:'Movement to Profit — IX',   desc:'Tomato and onion prep',         src:'images/oshetu-09.jpg' },
  { num:'10', label:'Movement to Profit — X',    desc:'Plastic bag carry-out',         src:'images/oshetu-10.jpg' },
  { num:'11', label:'Movement to Profit — X',    desc:'Plastic bag carry-out',         src:'images/oshetu-11.jpg' },
  { num:'12', label:'Movement to Profit — X',    desc:'Plastic bag carry-out',         src:'images/oshetu-12.jpg' },
  { num:'13', label:'Movement to Profit — X',    desc:'Plastic bag carry-out',         src:'images/oshetu-13.jpg' },
  { num:'14', label:'Movement to Profit — X',    desc:'Plastic bag carry-out',         src:'images/oshetu-14.jpg' },
];

let allPhotos = [];
let currentLbIdx = 0;

function buildGrid(containerId, photos, market, tapeSeed) {
  const container = document.getElementById(containerId);
  photos.forEach((p, i) => {
    const tape = tapeColors[(tapeSeed + i) % tapeColors.length];
    const globalIdx = allPhotos.length;
    allPhotos.push({ ...p, market, tape });

    const card = document.createElement('div');
    card.className = 'photo-card';
    card.innerHTML = `
      <div class="polaroid-wrap">
        <div class="polaroid-tape" style="background:${tape}"></div>
        <img
          class="polaroid-img"
          src="${p.src}"
          alt="${p.label}"
          loading="lazy"
        >
        <div class="polaroid-caption">
          <span class="polaroid-num">${market} · ${p.num}</span>
          <button class="buy-btn">Buy Print</button>
        </div>
      </div>`;

    card.querySelector('.polaroid-img').addEventListener('click', () => openLightbox(globalIdx));
    card.querySelector('.buy-btn').addEventListener('click', e => { e.stopPropagation(); openPurchase(globalIdx); });
    container.appendChild(card);
  });
}

buildGrid('bioGrid',     bioPhotos,    'Bio Market',     0);
buildGrid('villageGrid', villagePhotos,'Village Market', 3);
buildGrid('oshetuGrid',  oshetuPhotos, 'Oshetu Market',  1);
document.getElementById('photoCount').textContent = allPhotos.length;

// scroll reveal
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.08 });
document.querySelectorAll('.photo-card').forEach(c => observer.observe(c));

// lightbox
function openLightbox(idx) {
  currentLbIdx = idx;
  const p = allPhotos[idx];
  document.getElementById('lightboxImg').src = p.src;
  document.getElementById('lightboxImg').alt = p.label;
  document.getElementById('lightboxLabel').textContent = `${p.market} · ${p.num} — ${p.label}`;
  document.getElementById('lightboxTape').style.background = p.tape;
  document.getElementById('lightbox').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
}
document.getElementById('lightboxClose').addEventListener('click', closeLightbox);
document.getElementById('lightbox').addEventListener('click', e => { if (e.target.id === 'lightbox') closeLightbox(); });
document.getElementById('lbPrev').addEventListener('click', () => { currentLbIdx = (currentLbIdx - 1 + allPhotos.length) % allPhotos.length; openLightbox(currentLbIdx); });
document.getElementById('lbNext').addEventListener('click', () => { currentLbIdx = (currentLbIdx + 1) % allPhotos.length; openLightbox(currentLbIdx); });
document.getElementById('lightboxBuy').addEventListener('click', () => { closeLightbox(); openPurchase(currentLbIdx); });
document.addEventListener('keydown', e => {
  if (!document.getElementById('lightbox').classList.contains('open')) return;
  if (e.key === 'Escape')     closeLightbox();
  if (e.key === 'ArrowLeft')  document.getElementById('lbPrev').click();
  if (e.key === 'ArrowRight') document.getElementById('lbNext').click();
});

// purchase modal
function openPurchase(idx) {
  document.getElementById('modalSub').textContent = `"${allPhotos[idx].label}"`;
  document.getElementById('purchaseModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}
document.getElementById('modalClose').addEventListener('click', () => { document.getElementById('purchaseModal').classList.remove('open'); document.body.style.overflow = ''; });
document.getElementById('purchaseModal').addEventListener('click', e => { if (e.target.id === 'purchaseModal') { document.getElementById('purchaseModal').classList.remove('open'); document.body.style.overflow = ''; } });
document.querySelectorAll('.price-option').forEach(opt => {
  opt.addEventListener('click', () => { document.querySelectorAll('.price-option').forEach(o => o.classList.remove('selected')); opt.classList.add('selected'); });
});
document.getElementById('modalCTA').addEventListener('click', () => { document.getElementById('purchaseModal').classList.remove('open'); document.body.style.overflow = ''; showToast('Added to cart ✓'); });

function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3000);
}

// parallax hero
window.addEventListener('scroll', () => {
  const bg = document.querySelector('.hero-bg-text');
  if (bg) bg.style.transform = `translateY(calc(-50% + ${window.scrollY * 0.9}px))`;
});