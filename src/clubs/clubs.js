const scrollHideNavbar = false;
// TODO: watch the following value
let navHeight = document.querySelector('.navbar').getBoundingClientRect().height;

if (scrollHideNavbar) {
  function debounce(func, wait) {
    let timeout
    return function(...args) {
      const context = this
      clearTimeout(timeout)
      timeout = setTimeout(() => func.apply(context, args), wait)
    }
  }

  const scrollUp = "scroll-up";
  const scrollDown = "scroll-down";
  let lastScroll = 0;

  // const main = document;
  const body = document.body;
  const main = document.getElementsByTagName('main')[0];
  let topHeight = document.querySelector('.header').getBoundingClientRect().height - navHeight;

  document.addEventListener("scroll", debounce((el) => {
    if (el.target != main) {
      return;
    }
    const currentScroll = el.target.scrollTop;
    if (currentScroll == 0) {
      body.classList.remove(scrollUp);
      return;
    }

    console.log(currentScroll, topHeight);

    if (currentScroll >= topHeight) {
      body.classList.add('club-in-view')
    } else {
      body.classList.remove('club-in-view');
    }

    if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
      // down
      body.classList.remove(scrollUp);
      body.classList.add(scrollDown);
    } else if (currentScroll < lastScroll && body.classList.contains(scrollDown)) {
      // up
      body.classList.remove(scrollDown);
      body.classList.add(scrollUp);
    }
    lastScroll = currentScroll;
  }, 10), true);
}

const data = [
  "CS & Engineering",
  {
    "name": "Cognitive Science and AI Club",
    "mission": "To create a platform for students who have interests in AI to share their ideas and help each other"
  },
  {
    "name": "Computer Science Club",
    "mission": "To encourage fraternity between computer science students and others, and increase knowledge through group based activities"
  },
  {
    "name": "Engineering Club",
    "mission": "Explore engineering and applied physics outside the classroom"
  },
  {
    "name": "Machine Learning and Data Science Club",
    "mission": "To provide students from all backgrounds with different majors an opportunity to create their own intelligent systems"
  },
  {
    "name": "RC Planes Club",
    "mission": "Empowering club members by teaching them how to build helicopters"
  },
  {
    "name": "Gran Turismo (GT) Club",
    "mission": "To promote a community with a passion in cars and motorsports"
  },


  "Math & Science",
  {
    "name": "Anthropology Club",
    "mission": "To help inform students about anthropology"
  },
  {
    "name": "Foothill American Chemical Society",
    "mission": "To promote chemistry"
  },
  {
    "name": "Math club",
    "mission": "To create a platform for students who have interests in math to share their ideas and help each other"
  },
  {
    "name": "Neuroscience Club",
    "mission": "To explore the exciting world of neuroscience with the Foothill community"
  },
  {
    "name": "Psychology Club",
    "mission": "The purpose of this club shall be to enhance students’ body of knowledge of psychology in an engaging and educational way"
  },
  {
    "name": "Women In Stem",
    "mission": "To encourage the creative and innovative minds"
  },

  "Health",
  {
    "name": "Dental Hygiene Club",
    "mission": "To cultivate, promote, and sustain the art and science of dental hygiene"
  },
  {
    "name": "Respiratory Therapy Club",
    "mission": "To further promote the field and profession of respiratory therapy"
  },
  {
    "name": "Student Chapter of Northern American Veterinary Technitcians Association (SCNAVTA)",
    "mission": "To promote the professional and educational advancement of veterinary technicians"
  },

  "Sports and Fitness",
  {
    "name": "Fitness Club",
    "mission": "To promote healthy living in all aspects of life"
  },
  {
    "name": "Foothill Soccer Club",
    "mission": "To promote the sport of soccer"
  },


  "Arts & Theater",
  {
    "name": "Art Cafe",
    "mission": "A community of artists and art- lovers that reflects, discusses, reviews, and promotes art"
  },
  {
    "name": "Creative Writing Club",
    "mission": "To create a stress free environment that promotes creativity in any form & provide a healthy outlet for people to express themselves"
  },
  {
    "name": "Dance Club",
    "mission": "Provide a space for studets who love dancing."
  },
  {
    "name": "Foothill Beats",
    "mission": "Community focused on generating joy, camaraderie, and appreciation of other cultures and the universal language of rhythm"
  },
  {
    "name": "Foothill Theatre Club",
    "mission": "To foster a greater sense of community for Foothill’s theatre- minded students academically, recreationally, and socially"
  },

  "Cultural",
  {
    "name": "Black Student Union",
    "mission": "To support the betterment of students in their quest for empowerment, equality, politicial, social, and cultural means"
  },
  {
    "name": "Chinese Campus Fellowship",
    "mission": "Provide Chinese students a platform to connect with each other and give them a sense of belonging"
  },
  {
    "name": "Foothill Indonesian Club",
    "mission": "A platform for Indonesian students studying at Foothill College to connect, form lifetime friendships, connect members with available resources and opportunities at the campus"
  },
  {
    "name": "Taiwanese Student Association",
    "mission": "To promote Taiwanese culture"
  },
  {
    "name": "PUENTE",
    "mission": "A union that welcomes and brings students of all backgrounds together and open up conversations upon the impacts of the Latino community"
  },
  {
    "name": "InterVarsity Christian Fellowship",
    "mission": "For all students at Foothill, regardless of background, to have a opportunity to experience Jesus through Bible study and making new friends"
  },
  {
    "name": "Japanese Culture Club",
    "mission": "To promote the understanding of Japanese language and culture"
  },

  "Network",
  {
    "name": "Alumni Connection Club",
    "mission": "To provide & support alumni services and programs, and facilitate alumni communication"
  },
  {
    "name": "Honors Connection Club",
    "mission": "To provide members with opportunities to engage in academic and social activities with FH’s Honors Program"
  },


  "Just for Fun!",
  {
    "name": "Anime Club",
    "mission": "Unite students through Anime"
  },
  {
    "name": "Game Club",
    "mission": "A community for board, mobile, pc, and eSport lovers at Foothill"
  },


  "Business & Economics",
  {
    "name": "Business Entrepreneurship Club",
    "mission": "To gain useful everyday skills that will allow students to engage with the business world. We connect them with their surroundings and provide knowledgeable experience"
  },
  {
    "name": "Economics Club",
    "mission": "To provide opportunities for students with interest in economics to participate in discussions of economic topics"
  },
  {
    "name": "ENACTUS",
    "mission": "To provide members the best opportunity to make a difference and develop leadership, teamwork and communication skills"
  },


  "Minorities",
  {
    "name": "Define American Club",
    "mission": "To create an enriching and safe environment where undocumented students and allies can come together and share a common identity, stories and experiences"
  },
  {
    "name": "Gender & Sexuality Club",
    "mission": "To house a safe space for the campus’s LGBTQ+ population, and to foster mutual understanding, respect, and communication among all genders and sexual orientations."
  },
  {
    "name": "We For She",
    "mission": "To advocate, educate, and discuss gender equality for women, the LGBTQ+ community, and men"
  },
  {
    "name": "Foothill College Student Veterans of America",
    "mission": "To establish and maintain a network of student veterans attending Foothill College"
  },


  "Leadership & Community",
  {
    "name": "Campus Ideas Club",
    "mission": "To provide a free chance for everyone to share and realize their ideas to benefit campus"
  },
  {
    "name": "Circle K",
    "mission": "To promote service, leadership, and fellowship"
  },
  {
    "name": "Dead Air Club",
    "mission": "To connect students to the radio station and to help club communications"
  },
  {
    "name": "Just Do It Volunteer Club",
    "mission": "To provide the information of volunteering activities available and allows students to experience their campus life to the fullest"
  },
  {
    "name": "Project Hope",
    "mission": "Ending mental health stigma & advocating campus services"
  },
  {
    "name": "Wisdom Club",
    "mission": "We aim to bring a more mindful and happy community on campus"
  },
  {
    "name": "Philosophy Club",
    "mission": "Provide a forum for disscussion on and exchang of ideas between students."
  },


  "Social Impact",
  {
    "name": "Foothill Activism and Political Awareness Committee (FAPAC)",
    "mission": "To bring civil discourse and multiple points of view to our political culture and to find comprehensive solutions to today’ s political, social, and cultural challenges"
  },
  {
    "name": "Fund the Future",
    "mission": "To raising awareness of global poverty, climate change and funding micro-loans and education of students in less developed countries."
  },
  {
    "name": "Social Justice Project",
    "mission": "Providing awareness and activism on social issues"
  },
  {
    "name": "Surf Club / Beach Cleanups",
    "mission": "To teach students how to surf and increase awareness about trash in our oceans"
  },
  {
    "name": "We Care Club",
    "mission": "To participate in community service communities around to help the less fortunate"
  }
];

const tags = [
  { name: "Arts & Theater", icon: "assets/clubs/filter_arts.svg" },
  { name: "Math & Science", icon: "assets/clubs/filter_mathsci.svg" },
  {
    name: "CS & Engineering",
    icon: "assets/clubs/filter_engineering.svg",
  },
  { name: "Health", icon: "assets/clubs/filter_mathsci.svg" },
  { name: "Business & Economics", icon: "assets/clubs/filter_business.svg" },
  // { name: "Philosophy", icon: "assets/filter_philosophy.svg" },
  { name: "Network", icon: "assets/clubs/filter_network.svg" },
  { name: "Leadership & Community", icon: "assets/clubs/filter_leadership.svg" },
  { name: "Social Impact", icon: "assets/clubs/filter_socialimpact.svg" },
  { name: "Just for Fun!", icon: "assets/clubs/filter_fun.svg" },
  { name: "Sports and Fitness", icon: "assets/clubs/filter_fitness.svg" },
  { name: "Cultural", icon: "assets/clubs/filter_arts.svg" },
  { name: "Minorities", icon: "assets/clubs/filter_arts.svg" },
];

const mql = window.matchMedia('(max-width: 768px)');
let mobile = mql.matches;
mql.addListener((evt) => {
  mobile = evt.matches;
});

function getScrollParent(element, includeHidden) {
  var style = getComputedStyle(element);
  var excludeStaticParent = style.position === "absolute";
  var overflowRegex = includeHidden ? /(auto|scroll|hidden)/ : /(auto|scroll)/;

  if (style.position === "fixed") return document.body;
  for (var parent = element; (parent = parent.parentElement);) {
      style = getComputedStyle(parent);
      if (excludeStaticParent && style.position === "static") {
          continue;
      }
      if (overflowRegex.test(style.overflow + style.overflowY + style.overflowX)) return parent;
  }

  return document.body;
}

window.openFilter = function openFilter() {
  if (mobile) {
    document.querySelector('aside').className = 'visible';
  } else {
    document.getElementById('club-container').scrollIntoView({ behavior: 'smooth' });
  }
}

window.closeFilter = function closeFilter() {
  if (mobile) {
    document.querySelector('aside').className = '';
  }
}

window.jumpTo = function jumpTo(tagName) {
  closeFilter();
  setTimeout(() => {
    const el = document.getElementById(tagName);
    const scrollParent = getScrollParent(el);
    const y = el.getBoundingClientRect().top + scrollParent.scrollTop - navHeight;
    scrollParent.scrollTo({ top: y, behavior: 'smooth' });
    // el && el.scrollIntoView({ behavior: 'smooth' });
  }, mobile ? 200 : 0);
}

let lastTag = '';
let lastTagI = 0;
const taggedData = {};

data.forEach((d) => {
  if (typeof d === 'string') {
    lastTag = d;
    lastTagI = tags.findIndex((t) => t.name === lastTag);
  } else {
    const tag = tags[lastTagI];
    tags[lastTagI] = { ...tag, clubs: [ ...(tag.clubs || []), d ] };
  }
});

// const tags = data.filter((c) => typeof c === 'string');
const clubs = data.filter((d) => typeof d === 'object');

function createTag({ name, icon }) {
  let div = document.createElement('span');
  div.innerHTML = `
    <button onclick="jumpTo('${name}')">
      <img src="${icon}" alt="Icon for ${name}">
      <span>${name}</span>
    </button>
  `;
  return div.children[0];
}

function createClub(name, description) {
  let div = document.createElement('div');
  div.innerHTML = `
    <div class="card">
      <div class="title">${name}</div>
      <div class="description">${description}</div>
    </div>
`;
  return div.children[0];
}

let initStarted = false;

document.addEventListener('DOMContentLoaded', () => {
  if (initStarted) { return; }
  initStarted = true;

  const tagEls = tags.map((t) => createTag(t));
  document.getElementsByClassName('filters')[0].append(...tagEls);

  if (false) {
    const mainEls = tags.map((t) => {
      const container = document.createElement('div');
      const el = document.createElement('div');
      el.className = 'content';
      container.id = t.name;
      container.className = 'container';

      const els = t.clubs.map((c) => createClub(c.name, c.mission));
      container.innerHTML = `
        <div class='title'>${t.name}</div>
      `;
      el.append(...els);
      container.append(el);

      return container;
    });
    document.getElementById('clubs').append(...mainEls);
  } else {
    const mainEls = [];
    tags.forEach((t) => {
      const title = document.createElement('div');
      const el = document.createElement('div');
      el.className = 'content';
      title.id = t.name;
      title.textContent = t.name;
      title.className = 'section-title';

      const els = t.clubs.map((c) => createClub(c.name, c.mission));
      el.append(...els);
      mainEls.push(title, ...els);
    });

    document.getElementById('club-container').append(...mainEls);
  }
});

