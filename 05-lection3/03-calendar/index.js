function initCalendar() {
  const firstDay = new Date('April 1, 2023 0:0:1');
  const lastDay = new Date(firstDay.getFullYear(), firstDay.getMonth() + 1, 0);
  const body = document.querySelector('.calendar__body');
  Array(firstDay.getDay() - 1).fill(1).forEach(_ => {
    const item = document.createElement('span');
    item.textContent = "";
    body.appendChild(item)
  })
  Array(lastDay.getDate()).fill(1).forEach((_, index) => {
    const item = document.createElement('span');
    item.classList.add('calendar__item');
    item.textContent = index + 1;
    body.appendChild(item)
  })
  const list = document.querySelectorAll('.calendar__item');
  list[23].classList.add(...['calendar__item--selected', 'calendar__item--active']);
  list[24].classList.add(['calendar__item--selected']);
  list[25].classList.add(['calendar__item--selected']);
  list[26].classList.add(['calendar__item--selected']);
  list[27].classList.add(...['calendar__item--selected', 'calendar__item--active']);
}
