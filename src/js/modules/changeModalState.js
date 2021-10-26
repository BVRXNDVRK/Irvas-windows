import checkNumInputs from './checkNumInputs';

const changeModalState = (state) => {
  const windowForm = document.querySelectorAll('.balcon_icons_img'),
        windowWidth = document.querySelectorAll('#width'),
        windowHeight = document.querySelectorAll('#height'),
        windowType = document.querySelectorAll('#view_type'),
        windowProfile = document.querySelectorAll('.checkbox');

  checkNumInputs('#width');
  checkNumInputs('#height');

  function disableNextbutton(inputsSelector, buttonSelector) {
    const inputs = document.querySelectorAll(inputsSelector),
          button = document.querySelector(buttonSelector);
    const inputValues = [];

    inputs.forEach((input,i) => {
      inputValues[i] = input.value;
    });

    const someMethodResult = inputValues.some(value => value == '');

    if (someMethodResult) {
      button.setAttribute('disabled', 'true');
      button.style.opacity = 0.5;
    } else {
      button.removeAttribute('disabled');
      button.style.opacity = 1;

    }
  }

  function bindActionToElems(event, elem, prop) {
    elem.forEach((item, i) => {
      item.addEventListener(event, () => {
        switch(item.nodeName) {
          case 'SPAN':
            state[prop] = i;
            break;
          case 'INPUT':
            if (item.getAttribute('type') === 'checkbox') {
              i === 0 ? state[prop] = "Холодное" : state[prop] = "Тёплое";
              elem.forEach((box, j) => {
                box.checked = false;
                if (i == j) {
                  box.checked = true;
                }
                const profileButton = document.querySelector('.popup_calc_profile_button');
                profileButton.removeAttribute('disabled');
                profileButton.style.opacity = 1;
              });
            } else {
              state[prop] = item.value;
              disableNextbutton('.popup_calc_content input', '.popup_calc_button');
            }
            break;
          case 'SELECT':
            state[prop] = item.value;
            break;
        }

        console.log(state);
      });
    });
  }

  bindActionToElems('click', windowForm, 'form');
  bindActionToElems('input', windowHeight, 'height');
  bindActionToElems('input', windowWidth, 'width');
  bindActionToElems('change', windowType, 'type');
  bindActionToElems('change', windowProfile, 'profile');

  
};

export default changeModalState;