// 1. Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  const icon = hamburger.querySelector('i');
  icon.classList.toggle('fa-bars');
  icon.classList.toggle('fa-xmark');
});

// Close menu when clicking link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    hamburger.querySelector('i').className = 'fas fa-bars';
  });
});

// 2. Dynamic Services Data
const services = [
  { icon: 'fa-code', title: 'ওয়েব ডেভেলপমেন্ট', desc: 'আধুনিক HTML, CSS, JS ও রিয়্যাক্ট দিয়ে ফাস্ট ও রেসপন্সিভ ওয়েবসাইট।' },
  { icon: 'fa-mobile-screen-button', title: 'অ্যাপ ডেভেলপমেন্ট', desc: 'অ্যান্ড্রয়েড এবং আইওএস প্ল্যাটফর্মের জন্য ক্রস-প্ল্যাটফর্ম অ্যাপ।' },
  { icon: 'fa-paint-brush', title: 'UI/UX ডিজাইন', desc: 'ইউজার-ফ্রেন্ডলি ও দৃষ্টিনন্দন আধুনিক ইন্টারফেস ড্যাশবোর্ড ডিজাইন।' },
  { icon: 'fa-chart-line', title: 'ডিজিটাল মার্কেটিং', desc: 'এসইও (SEO) এবং সোশাল মিডিয়া মার্কেটিংয়ের মাধ্যমে সেলস বৃদ্ধি।' }
];

const servicesGrid = document.getElementById('servicesGrid');
services.forEach(service => {
  servicesGrid.innerHTML += `
    <div class="service-card">
      <i class="fas ${service.icon}"></i>
      <h3>${service.title}</h3>
      <p>${service.desc}</p>
    </div>
  `;
});

// 3. Dynamic Portfolio with Filter
const projects = [
  { title: 'ই-কমার্স প্ল্যাটফর্ম', category: 'web', icon: 'fa-cart-shopping' },
  { title: 'ফাইন্যান্সিয়াল মোবাইল অ্যাপ', category: 'app', icon: 'fa-wallet' },
  { title: 'ড্যাশবোর্ড UI', category: 'ui', icon: 'fa-border-all' },
  { title: 'স্কুল ম্যানেজমেন্ট সিস্টেম', category: 'web', icon: 'fa-school' },
  { title: 'ফিটনেস ট্র্যাকার অ্যাপ', category: 'app', icon: 'fa-heart-pulse' },
  { title: 'রিয়েল এস্টেট পোর্টাল', category: 'web', icon: 'fa-building' }
];

const portfolioGrid = document.getElementById('portfolioGrid');
const filterBtns = document.querySelectorAll('.filter-btn');

function renderPortfolio(filter = 'all') {
  portfolioGrid.innerHTML = '';
  const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.category === filter);
  
  filteredProjects.forEach(item => {
    portfolioGrid.innerHTML += `
      <div class="portfolio-card">
        <div class="portfolio-img"><i class="fas ${item.icon}"></i></div>
        <div class="portfolio-info">
          <h4>${item.title}</h4>
          <p>ক্যাটাগরি: ${item.category.toUpperCase()}</p>
        </div>
      </div>
    `;
  });
}

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelector('.filter-btn.active').classList.remove('active');
    btn.classList.add('active');
    renderPortfolio(btn.dataset.filter);
  });
});

renderPortfolio(); // Initial Load

// 4. Testimonial Slider
const testimonials = [
  { text: '"IT.com আমাদের প্রজেক্টটি খুব দ্রুত এবং নিখুঁতভাবে ডেলিভারি দিয়েছে। তাদের কাজে আমরা অত্যন্ত সন্তুষ্ট!"', author: '- রাশেদুল ইসলাম, সিইও' },
  { text: '"তাদের ওয়েবসাইট ডিজাইন চমৎকার এবং রেসপন্সিভ। কাস্টমার সাপোর্ট এক কথায় অসাধারণ।"', author: '- তানজিলা আক্তার, উদ্যোক্তা' },
  { text: '"আমাদের অ্যাপের ইউজার ইন্টারফেস সুন্দর করার পেছনে IT.com এর ভূমিকা প্রশংসনীয়।"', author: '- শফিক আহমেদ, প্রোডাক্ট ম্যানেজার' }
];

let currentSlide = 0;
const testimonialCard = document.getElementById('testimonialCard');

function updateTestimonial() {
  const data = testimonials[currentSlide];
  testimonialCard.innerHTML = `
    <p>${data.text}</p>
    <h4>${data.author}</h4>
  `;
}

document.getElementById('nextBtn').addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % testimonials.length;
  updateTestimonial();
});

document.getElementById('prevBtn').addEventListener('click', () => {
  currentSlide = (currentSlide - 1 + testimonials.length) % testimonials.length;
  updateTestimonial();
});

updateTestimonial(); // Initial Load

// 5. Contact Form Handling
document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const status = document.getElementById('formStatus');
  status.style.color = 'green';
  status.textContent = 'ধন্যবাদ! আপনার বার্তাটি সফলভাবে পাঠানো হয়েছে।';
  e.target.reset();
  
  setTimeout(() => {
    status.textContent = '';
  }, 4000);
});
