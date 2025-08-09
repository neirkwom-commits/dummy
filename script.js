// Navigasi halaman dashboard
const navLinks = document.querySelectorAll('.sidebar nav a[data-page]');
const pages = document.querySelectorAll('.page');
const pageTitle = document.getElementById('page-title');

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    // Hapus active class semua link dan page
    navLinks.forEach(l => l.classList.remove('active'));
    pages.forEach(p => p.classList.remove('active'));

    // Tambah active class pada klik link & tampilkan halaman
    link.classList.add('active');
    const pageId = link.getAttribute('data-page');
    const page = document.getElementById(pageId);
    if (page) {
      page.classList.add('active');
      pageTitle.textContent = link.textContent;
    }
  });
});

function showAlert() {
  alert('Fitur ini akan aktif setelah backend siap!');
}
