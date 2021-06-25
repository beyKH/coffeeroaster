elNavTogglerButton = document.querySelector(".sitenav-toggler");
elNavMobileSection = document.querySelector(".mb-nav");
elNavMobileCloseSection = document.querySelector('.mb-nav__cancel-btn');

elNavTogglerButton.addEventListener('click', function () {
  elNavMobileSection.classList.add('mb-nav--active');
});

elNavMobileCloseSection.addEventListener('click', function () {
  elNavMobileSection.classList.remove("mb-nav--active");
})

