const images = () => {
  const imgPopup = document.createElement('div'),
        workSection = document.querySelector('.works'),
        bigImageWrapper = document.createElement('div'),
        bigImage = document.createElement('img');

  bigImage.style.cssText = `
    width: 100%;
    height: 100%;
  `;     

  bigImageWrapper.style.cssText = `
    height: ${window.innerHeight * 0.8}px;
    max-width: ${window.innerWidth * 0.8}px;
    overflow: hidden;
  `;
  bigImageWrapper.appendChild(bigImage);

  imgPopup.style.justifyContent = 'center';
  imgPopup.style.alignItems = 'center';
  imgPopup.style.display = 'none';
  imgPopup.appendChild(bigImageWrapper);

  imgPopup.classList.add('popup');

  workSection.appendChild(imgPopup);
  workSection.addEventListener('click', (e) => {
    e.preventDefault();

    let target = e.target;

    if (target && target.classList.contains('preview')) {
      imgPopup.style.display = 'flex';
      const path = target.parentNode.getAttribute('href');
      bigImage.setAttribute('src', path);
      document.querySelector('body').style.overflow = 'hidden';
    }

    if (target && target.matches('div.popup')) {
      imgPopup.style.display = 'none';
      document.querySelector('body').style.overflow = '';
    }
  });
};

export default images;