function showPage(pageId) {
  document.querySelectorAll('.page').forEach(page => {
    page.classList.remove('show-page');
  });
  const page = document.getElementById(pageId + 'Page');
  page.classList.add('show-page');
}
function backToMenu() {
  document.querySelectorAll('.page').forEach(page => {
    page.classList.remove('show-page');
  });
}
