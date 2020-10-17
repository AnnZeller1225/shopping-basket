let input_user_name = document.querySelector('#user_name');
let input_user_surname = document.querySelector('#user_surname');
input_user_name.addEventListener('keyup', checkName);
input_user_surname.addEventListener('keyup', checkName);
let inp = document.querySelector('#tel'); // маска для номера


function checkName(e) {
  let target = e.target;
  if (/^[а-яА-ЯЁё-]+$/.test(target.value)) {
    target.style.border = "1px solid green";
  } else {
    target.style.border = "1px solid red";
  }
}

// Проверяем фокус
inp.addEventListener('focus', _ => {
  if (!/^\+\d*$/.test(inp.value))
    inp.value = '+7';
});

inp.addEventListener('keypress', e => {
  // Отменяем ввод не цифр
  if (!/\d/.test(e.key))
    e.preventDefault();
});

// считаем общую стоимость заказа:
let checkbox_circles = document.querySelectorAll('.checkbox-circle');
let list_item_price = document.querySelector('.list-item__price');


checkbox_circles.forEach(element => {
  element.addEventListener('click', getCheck);
});

function getCheck(e) {
  let target = e.target;
  checkbox_circles.forEach(element => {
    if (element.classList.contains('checked')) {
      element.classList.remove('checked');
    };
    target.classList.add('checked');
  })
  checkBasket();

}


function checkBasket() {
  let delivery_method = document.querySelector('.delivery_method');

  let checkingEl = document.querySelector('.checked');
  let check = 18344;
  let final_check = document.querySelector('.final_check');
  let menu_basket = document.querySelector('.menu-basket');


  if (checkingEl.classList.contains('transport-company')) {
    delivery_method.innerHTML = "Доставка транспортной компанией";
    let price_in_basket = document.querySelector('.price_in_basket');
    price_in_basket.innerHTML = "210руб";
   final_check.innerHTML = `${ check + 210} руб`;

  } else if (checkingEl.classList.contains('curier')) {
    delivery_method.innerHTML = "Доставка курьером ";
    let price_in_basket = document.querySelector('.price_in_basket');
    price_in_basket.innerHTML = "710руб";
       final_check.innerHTML = `${ check + 710} руб`;

  } else {
    delivery_method.innerHTML = "Самовывоз";
    let price_in_basket = document.querySelector('.price_in_basket');
    price_in_basket.innerHTML = "180руб";
       final_check.innerHTML = `${ check + 180} руб`;
  }

  menu_basket.innerHTML = final_check.innerHTML;




}