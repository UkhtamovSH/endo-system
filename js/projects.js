// **************video play modal start**************
let modal = document.querySelector('.modal');
let trigger = document.querySelector('.trigger');
let closeButton = document.querySelector('.close-button');

function toggleModal() {
  modal.classList.toggle('show-modal');
}

function windowOnClick(event) {
  if (event.target === modal) {
    toggleModal();
  }
}

trigger.addEventListener('click', toggleModal);
closeButton.addEventListener('click', toggleModal);
window.addEventListener('click', windowOnClick);
// **************video play modal end**************

// **************page main functions start**************

let arr = [
  {
    id: 1,
    region: 'г. Ташкент',
    medicalCenter: [
      {
        id: 1,
        title: 'Yunusobod Medical Center',
        info: {
          title: 'Клиника "Dr Boboev Health Center"',
          text: 'Кашкадарьинская область',
        },
      },
      {
        id: 2,
        title: 'Sabo Darmon',
        info: {
          title: 'Клиника Sabo Darmon',
          text: 'Кашкадарьинская область',
        },
      },
      {
        id: 3,
        title: 'Saxovat BU',
        info: {
          title: 'Клиника Saxovat BU',
          text: 'Кашкадарьинская область',
        },
      },
    ],
  },
  {
    id: 2,
    region: 'Андижанская область',
    medicalCenter: [
      {
        id: 1,
        title: 'Safo Tibbiyot',
        info: {
          title: 'Клиника Safo Tibbiyot',
          text: 'Кашкадарьинская область',
        },
      },
      {
        id: 2,
        title: 'Salomat Hayot',
        info: {
          title: 'Клиника Salomat Hayot',
          text: 'Кашкадарьинская область',
        },
      },
    ],
  },
  {
    id: 3,
    region: 'Ферганская область',
    medicalCenter: [
      {
        id: 1,
        title: 'Safo Tibbiyot',
        info: {
          title: 'Клиника Safo Tibbiyot',
          text: 'Кашкадарьинская область',
        },
      },
    ],
  },
  {
    id: 4,
    region: 'Бухарская область',
    medicalCenter: [
      {
        id: 1,
        title: 'Safo Tibbiyot',
        info: {
          title: 'Клиника Safo Tibbiyot',
          text: 'Кашкадарьинская область',
        },
      },
    ],
  },
  {
    id: 5,
    region: 'Кашкадарьинская область',
    medicalCenter: [
      {
        id: 1,
        title: 'Safo Tibbiyot',
        info: {
          title: 'Клиника Safo Tibbiyot',
          text: 'Кашкадарьинская область',
        },
      },
    ],
  },
  {
    id: 6,
    region: 'Самаркандская область',
    medicalCenter: [
      {
        id: 1,
        title: 'Safo Tibbiyot',
        info: {
          title: 'Клиника Safo Tibbiyot',
          text: 'Кашкадарьинская область',
        },
      },
    ],
  },
  {
    id: 7,
    region: 'Хорезмская область',
    medicalCenter: [
      {
        id: 1,
        title: 'Safo Tibbiyot',
        info: {
          title: 'Клиника Safo Tibbiyot',
          text: 'Кашкадарьинская область',
        },
      },
    ],
  },
  {
    id: 8,
    region: 'Сурхандарьинская область',
    medicalCenter: [
      {
        id: 1,
        title: 'Safo Tibbiyot',
        info: {
          title: 'Клиника Safo Tibbiyot',
          text: 'Кашкадарьинская область',
        },
      },
    ],
  },
  {
    id: 9,
    region: 'Наманганская область',
    medicalCenter: [
      {
        id: 1,
        title: 'Safo Tibbiyot',
        info: {
          title: 'Клиника Safo Tibbiyot',
          text: 'Кашкадарьинская область',
        },
      },
    ],
  },
  {
    id: 10,
    region: 'Сырдарьинская область',
    medicalCenter: [
      {
        id: 1,
        title: 'Safo Tibbiyot',
        info: {
          title: 'Клиника Safo Tibbiyot',
          text: 'Кашкадарьинская область',
        },
      },
    ],
  },
  {
    id: 11,
    region: 'Джизакская область',
    medicalCenter: [
      {
        id: 1,
        title: 'Safo Tibbiyot',
        info: {
          title: 'Клиника Safo Tibbiyot',
          text: 'Кашкадарьинская область',
        },
      },
    ],
  },
  {
    id: 12,
    region: 'Республика Каракалпакстан',
    medicalCenter: [
      {
        id: 1,
        title: 'Safo Tibbiyot',
        info: {
          title: 'Клиника Safo Tibbiyot',
          text: 'Кашкадарьинская область',
        },
      },
    ],
  },
  {
    id: 13,
    region: 'Ташкентская область',
    medicalCenter: [
      {
        id: 1,
        title: 'Safo Tibbiyot',
        info: {
          title: 'Клиника Safo Tibbiyot',
          text: 'Кашкадарьинская область',
        },
      },
    ],
  },
  {
    id: 14,
    region: 'Навоийская область',
    medicalCenter: [
      {
        id: 1,
        title: 'Safo Tibbiyot',
        info: {
          title: 'Клиника Safo Tibbiyot',
          text: 'Кашкадарьинская область',
        },
      },
    ],
  },
];

let text = '<ul>';
for (let i = 0; i < arr.length; i++) {
  text +=
    `<li class='regElement' data-aos="flip-up"
data-aos-duration="3000"
data-aos-easing="ease-in-out" id="${arr[i].id}" onclick="func(${arr[i].id}); displayNoneElem()">` +
    `<span class="regElementSub">` +
    `<span class="left">` +
    arr[i].region +
    `</span>` +
    `<span class="right">` +
    arr[i].medicalCenter.length +
    `</span>` +
    `</span>`;
  ('</li>');
}
text += '</ul>';

document.getElementById('project_link').innerHTML = text;

function func(id) {
  let text2 = '<div>';
  let ids = {
    1: 'UZB4828',
    2: 'UZB363',
    3: 'UZB364',
    4: 'UZB354',
    5: 'UZB361',
    6: 'UZB358',
    7: 'UZB355',
    8: 'UZB362',
    9: 'UZB365',
    10: 'UZB371',
    11: 'UZB370',
    12: 'UZB356',
    13: 'UZB372',
    14: 'UZB357',
  };
  document.getElementById(ids[id]).style.fill = 'url(#gradient)';

  for (let i = 0; i < arr.length; i++) {
    let fromMap = ' ';
    arr[i].medicalCenter.map(function (item) {
      fromMap += `<p id="medicalCenter">` + item.title + `</p>`;
    });
    if (id === arr[i].id) {
      text2 +=
        `<div class="project_linkinfo">` +
        `<div class='back' onclick="removeElem(${arr[i].id})" style="cursor: pointer; display: inline-block;">` +
        `<img src="/img/svg/arrow_back.svg" style="margin-right: 6px;" alt=""> Назад` +
        `</div>` +
        `<p class="title">` +
        arr[i].region +
        `</p>` +
        `<div class='project_links'>` +
        fromMap +
        `</div>` +
        `</div>`;
    }
  }
  text2 += '</div>';

  document.getElementById('project_link2').innerHTML = text2;
}

function displayNoneElem() {
  $('.regElement').addClass('activeLi');
}
function removeElem(id) {
  document.getElementById('project_link2').innerHTML = '';
  $('.regElement').removeClass('activeLi');

  let ids = {
    1: 'UZB4828',
    2: 'UZB363',
    3: 'UZB364',
    4: 'UZB354',
    5: 'UZB361',
    6: 'UZB358',
    7: 'UZB355',
    8: 'UZB362',
    9: 'UZB365',
    10: 'UZB371',
    11: 'UZB370',
    12: 'UZB356',
    13: 'UZB372',
    14: 'UZB357',
  };
  document.getElementById(ids[id]).style.fill = '';
}

// **************page main functions end**************
