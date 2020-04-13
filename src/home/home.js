import { Swiper } from 'swiper/js/swiper.esm';

const supportsTouch = 'ontouchstart' in window || navigator.msMaxTouchPoints;
const enableSwiper = supportsTouch;

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    });
  });
});

window.toggleHours = function toggleHours(elId) {
  const el = document.getElementById(elId);
  if (el) {
    el.classList.toggle('hours-visible');
  }
};

function createCard({ name = '', description = '', zoomLink, hoursHtml, img, placeholder = false }) {
  const el = document.createElement('div');
  if (!placeholder) {
    el.id = name;
    el.className = 'card';
    el.innerHTML = `
      ${img ? `<div class="avatar"><img src=${img}></div>` : ''}
      <div class="title">${name}</div>
      <div class='room-info'>
        <strong>Room: </strong>
        <a target='_blank' href='${zoomLink}'>
          <button class='primary-action'>Join Zoom</button>
        </a>
        <button onclick="toggleHours('${name.replace('\'', '\\')}')">Hours</button>
      </div>
      <div class="description">${description}</div>
      <div class='hours-info'>
        ${hoursHtml}
      </div>
    `;
  }
  if (enableSwiper) {
    if (placeholder) {
      return null;
    }
    const slide = document.createElement('div');
    slide.className = 'swiper-slide';
    slide.appendChild(el);
    return slide;
  } else {
    return el;
  }
}

function generateHours(data) {
  const row = (a = '', b = '', c = '') => `<span>${a}</span> <span>${b}</span> <span>${c}</span>`;

  return `
    <div class='hours'>
      <div class='hours-title'>Hours:</div><span>From</span><span>To</span>
      ${data.map((d) => (
        row(...d)
      )).join('\n')}
    </div>
  `;
}

const data = {
  tutoring: [
    {
      name: 'STEM Center',
      description: 'Get help with Accounting, Biology, Chemistry, Computer Science, Economics, Math, Networking, Physics, The Garden, The Village, and more!',
      img: 'assets/home/stemcenter.jpg',
      zoomLink: 'https://cccconfer.zoom.us/j/378611456',
      hours: {
        timings: {
          1: {
            from: [9, 0],
            to: [21, 0],
          },
          2: {
            from: [21, 0],
            to: [23, 59],
            details: 'CS Only',
          },
          3: {
            from: [9, 0],
            to: [15, 0],
          },
          4: {
            from: [11, 0],
            to: [17, 0],
          },
          5: {
            from: [12, 0],
            to: [23, 59],
            details: 'CS Only',
          },
        },
        days: {
          mon: [1, 2],
          tue: [1, 2],
          wed: [1, 2],
          thu: [1, 2],
          fri: 3,
          sat: 4,
          sun: 5,
        },
      },
      hoursHtml: generateHours([
        ['Mon – Thu:', '9 am', '9 pm'],
        ['', '9 pm', '12 midnight<br>(CS Only)'],
        ['Fri:', '9 am', '3 pm'],
        ['Sat:', '11 am', '5 pm'],
        ['Sun:', '12 noon', '12 midnight<br>(CS Only)'],
      ]),
    },
    {
      name: 'Teaching & Learning Center',
      description: 'Get support for reading and writing in all subjects.',
      img: 'assets/home/tlc.jpg',
      zoomLink: 'https://cccconfer.zoom.us/j/378611456',
      hours: {},
      hoursHtml: generateHours([
        ['Mon, Wed, Fri:', 'Noon', '6 pm'],
        ['Tue, Thu:', '9 am', 'Noon'],
        ['', '3 pm', '9 pm'],
      ]),
      // hoursHtml: `
      //   <div class='hours'>
      //     <div class='hours-title'>Hours:</div><span>From</span><span>To</span>
      //     <span>Mon, Wed, Fri:</span> <span>Noon</span> <span>6 pm</span>
      //     <span>Tue, Thu:</span> <span>9 am</span> <span>Noon</span>
      //     <span></span> <span>3 pm</span> <span>9 pm</span>
      //   </div>
      // `,
    },
    {
      name: 'Pass the Torch',
      description: 'Peer-to-peer tutoring for core courses in English, ESL, and Math.',
      img: 'assets/home/passtorch.jpg',
      zoomLink: 'https://cccconfer.zoom.us/j/378611456',
      hours: {},
      hoursHtml: `
        <div class='hours'>
          <div class='hours-title'>Hours:</div><span>From</span><span>To</span>
          <span>Mon – Thu:</span> <span>8:30 am</span> <span>5 pm</span>
          <span>Fri:</span> <span>8 am</span> <span>Noon</span>
        </div>
      `,
    },
  ],
  techHelp: [
    {
      name: 'Virtual Student Technology Hub',
      description: 'Learn to use Zoom and Canvas, request help  for needed resources, such as laptops and wifi, and get tips to successfully move online!',
      img: 'assets/home/techhub.jpg',
      zoomLink: 'https://cccconfer.zoom.us/j/950296669',
      hours: {},
      hoursHtml: `
        <div class='hours'>
          <div class='hours-title'>Hours:</div><span>From</span><span>To</span>
          <span>Mon – Thu:</span> <span>8 am</span> <span>11 am</span>
          <span></span> <span>2 pm</span> <span>5 pm </span>
          <span>Fri:</span> <span>9 am</span> <span>Noon</span>
        </div>
      `,
    },
    {
      placeholder: true,
    },
    {
      placeholder: true,
    },
  ],
  stayConnected: [
    {
      name: 'Tea with President Thuy',
      description: 'Meet with Foothill President Thuy Nguyen! Get your questions answered and hear updates on the virtual campus and other news.',
      img: 'assets/home/teawithpresident.jpg',
      zoomLink: 'https://cccconfer.zoom.us/j/431174212',
      hours: {},
      hoursHtml: `
        <div class=''>
          <div class='hours-title'>Hours:</div>
          <b>Wednedays & Thursdays @ Noon</b>
        </div>
      `,
    },
    {
      name: 'Chancellor\'s Open Office Hour with Judy Miner',
      description: 'Join a weekly Zoom meeting for students, faculty and staff to share thoughts and questions with our district chancellor.',
      img: 'assets/home/openoffice.jpg',
      zoomLink: 'https://cccconfer.zoom.us/j/908990346',
      hours: {},
      hoursHtml: `
        <div class=''>
          <div class='hours-title'>Hours:</div>
          <b>Wednesdays, March 25 – April 22 @ 11 AM</b>
        </div>
      `,
    },
    {
      placeholder: true,
    },
  ],
};

function createSwiper(query, d) {
  if (enableSwiper) {
    const container = document.querySelector(`${query} .row`);
    container.className = 'swiper-container'; // intentionally replace .row

    const wrapper = document.createElement('wrapper');
    wrapper.className = 'swiper-wrapper';
    container.appendChild(wrapper);

    wrapper.append(...d.map((c) => createCard(c)).filter((c) => c));
    new Swiper(container, {
      slidesPerView: 'auto',
    });
  } else {
    document
      .querySelector(`${query} .row`)
      .append(...d.map((c) => createCard(c)));
  }
}

let initStarted = false;

document.addEventListener('DOMContentLoaded', () => {
  if (initStarted) { return; }
  initStarted = true;

  createSwiper('#tutoring', data.tutoring);
  createSwiper('#tech-help', data.techHelp);
  createSwiper('#stay-connected', data.stayConnected);
});
