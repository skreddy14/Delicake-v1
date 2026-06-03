document.addEventListener('DOMContentLoaded', function() {
  try {
    var logo = document.querySelector('.logo');
    if (logo && !logo.querySelector('img')) {
      var img = document.createElement('img');
      img.className = 'site-logo';
      img.src = '/images/Delicakious-logo-main.png';
      img.alt = 'Delicakious logo';
      logo.innerHTML = '';
      logo.appendChild(img);
    }
  } catch (e) { console.error(e); }
});
