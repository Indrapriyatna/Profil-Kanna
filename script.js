// Data profil Kanna Prastiwi
const navItems = [
    { id: 1, text: "Beranda", href: "#home", color: "#5362c5", icon: "fas fa-home" },
    { id: 2, text: "Tentang", href: "#about", color: "#12806a", icon: "fas fa-user" },
    { id: 3, text: "Keahlian", href: "#skills", color: "#a66b16", icon: "fas fa-star" },
    { id: 4, text: "Fokus Profesional", href: "#projects", color: "#7852a6", icon: "fas fa-briefcase" },
    { id: 5, text: "Kontak", href: "#contact", color: "#bd4a5c", icon: "fas fa-envelope" }
];
const heroButtons = [
    { id: 1, text: "Lihat Profil", icon: "fas fa-eye", variant: "primary", target: "#about" }
];
const quickFacts = [
    { id: 1, icon: "fas fa-user", label: "Nama Lengkap", value: "Kanna Prastiwi" },
    { id: 2, icon: "fas fa-envelope", label: "Email", value: "kannaprastiwii28@gmail.com", href: "mailto:kannaprastiwii28@gmail.com" },
    { id: 3, icon: "fas fa-phone", label: "Telepon", value: "+62 81400639268", href: "tel:+6281400639268" },
    { id: 4, icon: "fas fa-map-marker-alt", label: "Alamat", value: "Jl. Asmin, Susukan, Ciracas, Jakarta Timur, DKI Jakarta 13750" },
    { id: 5, icon: "fas fa-language", label: "Bahasa", value: "Indonesia" }
];
const skills = [
    { id: 1, name: "Microsoft Office", icon: "fas fa-file-alt", description: "Kemampuan menggunakan aplikasi Microsoft Office." },
    { id: 2, name: "Menawarkan Produk", icon: "fas fa-bullhorn", description: "Kemampuan menawarkan produk dan layanan kepada pelanggan." },
    { id: 3, name: "Bekerja secara Individu maupun Tim", icon: "fas fa-users", description: "Menyelesaikan pekerjaan secara mandiri maupun berkolaborasi dengan tim." },
    { id: 4, name: "Bertanggung Jawab", icon: "fas fa-check-circle", description: "Menjalankan tugas dengan disiplin dan tanggung jawab." }
];
const focusAreas = [
    { id: 1, icon: "fas fa-folder-open", category: "ADMINISTRASI", title: "Administrasi dan Dokumen", description: "Mendukung pengelolaan dokumen dan tugas administrasi secara rapi, teliti, dan bertanggung jawab." },
    { id: 2, icon: "fas fa-table", category: "PENGOLAHAN DATA", title: "Data yang Akurat", description: "Membantu input, pengolahan, dan pengecekan data dengan cermat dan terstruktur." },
    { id: 3, icon: "fas fa-users", category: "KOMUNIKASI DAN TIM", title: "Layanan dan Kolaborasi", description: "Berkomunikasi dengan baik, bekerja mandiri maupun bersama tim, dan mendukung pelayanan yang positif." }
];
const contactButtons = [
    { id: 1, text: "Hubungi Saya", icon: "fas fa-phone", href: "tel:+6281400639268" },
    { id: 2, text: "Kirim Email", icon: "fas fa-envelope", href: "mailto:kannaprastiwii28@gmail.com" }
];
const socialLinks = [
    { id: 1, icon: "fab fa-instagram", href: "https://www.instagram.com/kannaprstw_/", label: "Instagram" },
    { id: 2, icon: "fab fa-facebook-f", href: "", label: "Facebook" },
    { id: 3, icon: "fab fa-whatsapp", href: "https://wa.me/6281400639268", label: "WhatsApp" },
    { id: 4, icon: "fab fa-linkedin-in", href: "", label: "LinkedIn" },
    { id: 5, icon: "fab fa-github", href: "", label: "GitHub" }
];
function renderNav(items) { return items.map(item => `<li><a href="${item.href}" style="color:${item.color}" class="inline-flex items-center gap-2 font-medium transition-opacity hover:opacity-70" aria-label="${item.text}"><i class="${item.icon}" aria-hidden="true"></i><span>${item.text}</span></a></li>`).join("") }
function renderHeroButtons(items) { return items.map(item => { const style = item.variant === "primary" ? "bg-indigo-600 hover:bg-indigo-700 text-white" : "bg-white hover:bg-gray-100 text-indigo-600 border border-indigo-600"; return '<a href="' + item.target + '" class="' + style + ' px-6 py-3 rounded-full font-semibold flex items-center gap-2 transition-all shadow-md hover:shadow-lg"><i class="' + item.icon + '" aria-hidden="true"></i><span>' + item.text + '</span></a>' }).join("") }
function renderQuickFacts(items) { return items.map(item => '<li class="flex items-start gap-3"><i class="' + item.icon + ' text-indigo-600 mt-1" aria-hidden="true"></i><span><strong class="block text-gray-800">' + item.label + '</strong>' + (item.href ? '<a class="text-gray-600 hover:text-indigo-700 break-words" href="' + item.href + '">' + item.value + '</a>' : '<span class="text-gray-600">' + item.value + '</span>') + '</span></li>').join("") }
function renderSkills(items) { return items.map(item => `<article class="bg-white rounded-2xl p-6 card-hover"><div class="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 mb-4" aria-hidden="true"><i class="${item.icon} text-xl"></i></div><h3 class="font-semibold text-lg">${item.name}</h3><p class="text-gray-600 mt-2 leading-relaxed">${item.description}</p></article>`).join("") }
function renderFocusAreas(items) { return items.map(item => `<article class="bg-white rounded-3xl p-8 shadow-lg card-hover"><div class="w-14 h-14 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600 mb-6" aria-hidden="true"><i class="${item.icon} text-xl"></i></div><span class="text-sm font-medium text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">${item.category}</span><h3 class="text-xl font-bold mt-5 mb-3">${item.title}</h3><p class="text-gray-600 leading-relaxed">${item.description}</p><div class="mt-6"><a href="#contact" class="text-indigo-600 font-medium hover:text-indigo-800">Mari berdiskusi <span aria-hidden="true">→</span></a></div></article>`).join("") }
function renderContactButtons(items) { return items.map(item => `<a href="${item.href}" class="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold text-lg flex items-center justify-center gap-3 transition-all shadow-lg hover:shadow-xl"><i class="${item.icon}" aria-hidden="true"></i><span>${item.text}</span></a>`).join("") }
function renderSocialLinks(items) {
    const icons = {
        Instagram: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle class="social-icon-fill" cx="18" cy="6" r="1"/></svg>',
        Facebook: '<svg viewBox="0 0 24 24" aria-hidden="true"><path class="social-icon-fill" d="M13.5 21v-8h2.7l.4-3.1h-3.1v-2c0-.9.3-1.5 1.6-1.5h1.7V3.6c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.1H7.3V13h2.8v8z"/></svg>',
        WhatsApp: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 11.7a8.5 8.5 0 0 1-12.6 7.5L3 20.5l1.3-4.7a8.5 8.5 0 1 1 16.2-4.1Z"/><path d="M8.4 7.8c.2-.5.5-.5.8-.5h.5c.2 0 .4 0 .5.4l.8 1.8c.1.3.1.5-.1.7l-.6.7c-.2.2-.2.4 0 .6.4.7 1.1 1.4 1.8 1.8.3.2.5.2.7 0l.8-.9c.2-.2.4-.2.7-.1l1.7.8c.3.1.4.3.4.5 0 .3-.2 1.1-.7 1.5-.5.5-1.1.7-1.8.6-1-.1-2.3-.7-3.6-1.8-1.6-1.4-2.6-3.1-2.9-4.1-.3-1 .1-1.7.5-2Z"/></svg>',
        LinkedIn: '<svg viewBox="0 0 24 24" aria-hidden="true"><path class="social-icon-fill" d="M5.2 8.7a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6ZM3.7 10h3v10h-3zM9 10h2.9v1.4h.1c.4-.8 1.4-1.7 2.9-1.7 3.1 0 3.7 2 3.7 4.6V20h-3v-5.1c0-1.2 0-2.7-1.7-2.7s-2 1.3-2 2.6V20H9z"/></svg>',
        GitHub: '<svg viewBox="0 0 24 24" aria-hidden="true"><path class="social-icon-fill" d="M12 2.5a9.7 9.7 0 0 0-3.1 18.9c.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.2-3.4-1.2-.5-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.6.4-1.1.6-1.3-2.2-.3-4.5-1.1-4.5-4.8 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.8 1a9.4 9.4 0 0 1 5.1 0c2-1.3 2.8-1 2.8-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.7-2.3 4.5-4.5 4.8.4.3.7.9.7 1.8v2.7c0 .3.2.6.7.5A9.7 9.7 0 0 0 12 2.5Z"/></svg>'
    };
    return items.map(item => {
        const icon = icons[item.label] || '';
        if (!item.href) return '<span class="footer-social-link" aria-label="' + item.label + ' (URL belum diatur)" aria-disabled="true" title="Isi URL ' + item.label + ' pada socialLinks di script.js">' + icon + '</span>';
        return '<a class="footer-social-link" href="' + item.href + '" aria-label="' + item.label + '" target="_blank" rel="noopener noreferrer">' + icon + '</a>';
    }).join("");
}
const navToggle = document.getElementById("nav-toggle"); const navList = document.getElementById("nav-list"); const navToggleIcon = document.getElementById("nav-toggle-icon");
function setNavOpen(open) { navList.classList.toggle("is-open", open); navToggle.setAttribute("aria-expanded", String(open)); navToggle.setAttribute("aria-label", open ? "Tutup menu" : "Buka menu"); navToggleIcon.classList.toggle("fa-bars", !open); navToggleIcon.classList.toggle("fa-times", open) }
navToggle.addEventListener("click", () => setNavOpen(navToggle.getAttribute("aria-expanded") !== "true")); navList.addEventListener("click", event => { if (event.target.closest("a")) setNavOpen(false) }); window.addEventListener("resize", () => { if (window.innerWidth > 700) setNavOpen(false) });
document.getElementById("nav-list").innerHTML = renderNav(navItems); document.getElementById("hero-buttons").innerHTML = renderHeroButtons(heroButtons); document.getElementById("quick-facts").innerHTML = renderQuickFacts(quickFacts); document.getElementById("skills-grid").innerHTML = renderSkills(skills); document.getElementById("projects-grid").innerHTML = renderFocusAreas(focusAreas); document.getElementById("contact-buttons").innerHTML = renderContactButtons(contactButtons); document.getElementById("current-year").textContent = new Date().getFullYear();
document.addEventListener("click", event => { const anchor = event.target.closest('a[href^="#"]'); if (anchor && anchor.getAttribute("href") !== "#") { const target = document.querySelector(anchor.getAttribute("href")); if (target) { event.preventDefault(); target.scrollIntoView({ behavior: "smooth", block: "start" }) } } const button = event.target.closest("button[data-target]"); if (button) { const target = document.querySelector(button.dataset.target); if (target) target.scrollIntoView({ behavior: "smooth", block: "start" }) } });
/* Formulir mengirim pesan ke email Kanna melalui endpoint Web3Forms. */
const contactForm = document.getElementById("contact-form");
const contactStatus = document.getElementById("contact-form-status");
const formSuccessScreen = document.getElementById("form-success-screen");
const formSuccessBack = document.getElementById("form-success-back");
function showContactStatus(message, state = "pending") {
    contactStatus.textContent = message;
    contactStatus.dataset.state = state;
    contactStatus.hidden = !message;
}
const contactFields = {
    name: document.getElementById("contact-name"),
    email: document.getElementById("contact-email"),
    subject: document.getElementById("contact-subject"),
    message: document.getElementById("contact-message")
};
contactForm.addEventListener("invalid", () => {
    showContactStatus("Mohon periksa kembali nama, email, subjek, dan pesan sebelum mengirim.", "error");
}, true);
Object.values(contactFields).forEach((field) => {
    field.addEventListener("input", () => {
        field.setCustomValidity("");
        if (contactForm.checkValidity()) showContactStatus("");
    });
});
contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const formData = new FormData(contactForm);
    const payload = {
        access_key: String(formData.get("access_key") || "").trim(),
        name: String(formData.get("name")).trim(),
        email: String(formData.get("email")).trim(),
        subject: String(formData.get("subject")).trim(),
        message: String(formData.get("message")).trim(),
        from_name: "Website Profil Kanna"
    };

    const trimmedChecks = [
        [contactFields.name, payload.name.length >= 2, "Nama minimal 2 karakter."],
        [contactFields.email, /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(payload.email), "Masukkan alamat email yang valid."],
        [contactFields.subject, payload.subject.length >= 3, "Subjek minimal 3 karakter."],
        [contactFields.message, payload.message.length >= 1, "Pesan tidak boleh kosong."]
    ];
    trimmedChecks.forEach(([field, isValid, message]) => field.setCustomValidity(isValid ? "" : message));
    const invalidField = contactForm.querySelector(":invalid");
    if (invalidField) {
        showContactStatus(invalidField.validationMessage, "error");
        invalidField.reportValidity();
        return;
    }
    if (!payload.access_key || payload.access_key === "YOUR_WEB3FORMS_ACCESS_KEY") {
        showContactStatus("Formulir belum aktif. Access Key Web3Forms perlu dipasang terlebih dahulu.", "error");
        return;
    }

    submitButton.disabled = true;
    showContactStatus("Mengirim pesan...", "pending");
    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: { "Content-Type": "application/json", "Accept": "application/json" },
            body: JSON.stringify(payload)
        });
        const result = await response.json();
        if (!response.ok || result.success !== true) {
            throw new Error(result.message || result.body?.message || "Pesan belum berhasil dikirim.");
        }
        contactForm.reset();
        document.body.classList.add("form-success-active");
        formSuccessScreen.hidden = false;
        document.getElementById("form-success-title").focus();
    } catch (error) {
        showContactStatus(error.message || "Pesan belum terkirim. Periksa koneksi internet lalu coba lagi.", "error");
    } finally {
        submitButton.disabled = false;
    }
});
formSuccessBack.addEventListener("click", () => {
    formSuccessScreen.hidden = true;
    document.body.classList.remove("form-success-active");
    document.getElementById("contact").scrollIntoView({ behavior: "smooth", block: "start" });
});
// URL akun media sosial: isi URL akun Anda pada bagian yang masih kosong.
const profileSocialUrls = {
    instagram: "https://www.instagram.com/kannaprstw_/",
    facebook: "",
    tiktok: "https://www.tiktok.com/@kannaprastiwi",
    linkedin: "https://www.linkedin.com/in/kanna-prastiwi/",
    github: "",
    whatsapp: "https://wa.me/6281400639268"
};
const profileSocialPlatforms = [
    { key: "instagram", icon: "fab fa-instagram", label: "Instagram", fallback: "IG" },
    { key: "facebook", icon: "fab fa-facebook-f", label: "Facebook", fallback: "f" },
    { key: "tiktok", icon: "fab fa-tiktok", label: "TikTok", fallback: "♪" },
    { key: "linkedin", icon: "fab fa-linkedin-in", label: "LinkedIn", fallback: "in" },
    { key: "github", icon: "fab fa-github", label: "GitHub", fallback: "GH" },
    { key: "whatsapp", icon: "fab fa-whatsapp", label: "WhatsApp", fallback: "WA" }
];
function renderProfileSocialLinks(items) {
    return items.map((item) => {
        const url = profileSocialUrls[item.key].trim();
        const icon = '<i class="' + item.icon + ' profile-social-icon" data-fallback="' + item.fallback + '" aria-hidden="true"></i>';
        if (!url) {
            return '<span class="profile-social-link" aria-label="' + item.label + ' (URL belum diatur)" aria-disabled="true" title="Isi URL ' + item.label + ' di profileSocialUrls pada script.js">' + icon + '</span>';
        }
        return '<a class="profile-social-link" href="' + url + '" aria-label="' + item.label + '" target="_blank" rel="noopener noreferrer">' + icon + '</a>';
    }).join("");
}
// Delegasi klik membuat elemen data-social-key tetap dapat membuka URL di tab baru,
// termasuk elemen yang ditambahkan ke halaman setelah skrip selesai dimuat.
document.querySelectorAll("[data-social-key]").forEach((item) => {
    const key = item.dataset.socialKey;
    if (!Object.prototype.hasOwnProperty.call(profileSocialUrls, key) || !profileSocialUrls[key]) return;
    item.setAttribute("role", "link");
    item.setAttribute("tabindex", "0");
    item.setAttribute("aria-label", item.getAttribute("aria-label") || key);
});

document.addEventListener("click", (event) => {
    const item = event.target.closest("[data-social-key]");
    if (!item) return;
    const key = item.dataset.socialKey;
    const url = Object.prototype.hasOwnProperty.call(profileSocialUrls, key)
        ? profileSocialUrls[key]
        : "";
    if (!url) return;
    event.preventDefault();
    window.open(url, "_blank", "noopener,noreferrer");
});

document.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    const item = event.target.closest("[data-social-key][role='link']");
    if (!item) return;
    event.preventDefault();
    item.click();
});
// Fallback jika font ikon Font Awesome tidak berhasil dimuat.
window.setTimeout(() => {
    document.querySelectorAll(".profile-social-icon").forEach((icon) => {
        const glyph = window.getComputedStyle(icon, "::before").content;
        if (!glyph || glyph === "none" || glyph === "normal" || glyph === '""') {
            icon.className = "profile-social-fallback";
            icon.textContent = icon.dataset.fallback;
        }
    });
}, 800);



