const menuButton = document.querySelector('.menu-button');
const navigation = document.querySelector('#navigation');
function closeMenu() { navigation.classList.remove('open'); menuButton.setAttribute('aria-expanded', 'false'); }
menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  navigation.classList.toggle('open', !isOpen);
});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if(event.key === 'Escape' && navigation.classList.contains('open')) { closeMenu(); menuButton.focus(); } });
document.querySelectorAll('.filter').forEach(button => button.addEventListener('click', () => {
  const category = button.dataset.filter;
  document.querySelectorAll('.filter').forEach(item => {
    const active = item === button;
    item.classList.toggle('active', active);
    item.setAttribute('aria-pressed', String(active));
  });
  let count = 0;
  document.querySelectorAll('.publication').forEach(paper => {
    const visible = category === 'all' || paper.dataset.topic.split(' ').includes(category);
    paper.hidden = !visible;
    if(visible) count++;
  });
  document.querySelector('.pub-count').textContent = `${count} publication${count === 1 ? '' : 's'}`;
}));


// Preserve links from the earlier single-file edition.
if (location.pathname.endsWith('/') || location.pathname.endsWith('/index.html')) {
  const legacy = {'#publications':'publications.html','#people':'pi.html','#contact':'contact.html','#people-preview':'people.html','#lab-members':'people.html#lab-members'};
  if (legacy[location.hash]) location.replace(legacy[location.hash]);
}
