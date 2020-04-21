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

  "Ethnic & Cultural",
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
  {
    "name": "Foothill College Student Veterans of America",
    "mission": "To establish and maintain a network of student veterans attending Foothill College"
  },

  "Fun, Sports, & Fitness",
  // "Sports and Fitness",
  {
    "name": "Fitness Club",
    "mission": "To promote healthy living in all aspects of life"
  },
  {
    "name": "Foothill Soccer Club",
    "mission": "To promote the sport of soccer"
  },

  // "Just for Fun!",
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


  "Underrepresented",
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
  // { name: "Just for Fun!", icon: "assets/clubs/filter_fun.svg" },
  { name: "Fun, Sports, & Fitness", icon: "assets/clubs/filter_fun.svg" },
  // { name: "Sports and Fitness", icon: "assets/clubs/filter_fitness.svg" },
  { name: "Social Impact", icon: "assets/clubs/filter_socialimpact.svg" },
  { name: "Leadership & Community", icon: "assets/clubs/filter_leadership.svg" },
  { name: "Network", icon: "assets/clubs/filter_network.svg" },
  { name: "Ethnic & Cultural", icon: "assets/clubs/filter_arts.svg" },
  { name: "Underrepresented", icon: "assets/clubs/filter_arts.svg" },
];

data.forEach((d) => {
  if (typeof d === 'string') {
    lastTag = d;
    lastTagI = tags.findIndex((t) => t.name === lastTag);
  } else {
    const tag = tags[lastTagI];
    tags[lastTagI] = { ...tag, clubs: [ ...(tag.clubs || []), d ] };
  }
});

const throttle = (func, limit) => {
  let inThrottle;
  return function () {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

// let grid = document.querySelector(".grid");
let rooms = document.querySelector(".rooms");
let you = document.querySelector(".you");
let topP = 0;
let leftP = 0;
let scale = 1;
let meet;
let resetYou = null;

function JitsiMeet(user, roomName, afterClose) {
  const domain = "meet.jit.si";
  const options = {
    roomName,
    width: "100%",
    height: "100%",
    parentNode: meetEl,
    configOverwrite: {
      enableClosePage: false,
      disableThirdPartyRequests: true,
      analytics: {
        disabled: true,
      },
      doNotStoreRoom: true,
      // TODO: add custom handling instead
      requireDisplayName: true,
      // TODO: prompt
      startWithVideoMuted: true,
      // Disable unneeded features
      liveStreamingEnabled: false,
      transcribingEnabled: false,
      autoCaptionOnRecord: false,
      remoteVideoMenu: {
        // TODO: only host should be able to do this
        disableKick: true,
      },
    },
    interfaceConfigOverwrite: {
      SHOW_JITSI_WATERMARK: false,
      SHOW_WATERMARK_FOR_GUESTS: false,
      SHOW_CHROME_EXTENSION_BANNER: false,

      CLOSE_PAGE_GUEST_HINT: false,
      SHOW_PROMOTIONAL_CLOSE_PAGE: false,

      DISABLE_VIDEO_BACKGROUND: true,
      DEFAULT_REMOTE_DISPLAY_NAME: 'Fellow Foothill Student',
      HIDE_KICK_BUTTON_FOR_GUESTS: true,

      TOOLBAR_BUTTONS: [
        // 'microphone', 'camera', 'closedcaptions', 'desktop', 'fullscreen',
        'microphone', 'camera', 'desktop', 'fullscreen',
        // 'fodeviceselection', 'hangup', 'profile', 'info', 'chat', 'recording',
        'fodeviceselection', 'hangup', 'profile', 'chat',
        // 'livestreaming', 'etherpad', 'sharedvideo', 'settings', 'raisehand',
        'settings', 'raisehand',
        // 'videoquality', 'filmstrip', 'invite', 'feedback', 'stats', 'shortcuts',
        'videoquality', 'filmstrip',
        // 'tileview', 'videobackgroundblur', 'download', 'help', 'mute-everyone',
        'tileview', 'help', 'mute-everyone',
        'e2ee'
      ],
      // SETTINGS_SECTIONS: [ 'devices', 'language', 'moderator', 'profile', 'calendar' ],
      // TODO: conditionally add 'moderator'
      SETTINGS_SECTIONS: [ 'devices', 'language', 'profile' ],
    },
    // userInfo: {
    //     displayName: user.name,
    // },
  };
  meet = new window.JitsiMeetExternalAPI(domain, options);
  meet.addListener("tileViewChanged", forceTileView);
  meet.addListener("videoConferenceJoined", () => {
    meet.executeCommands({
      // displayName: "test",
      // subject: [this.groupName]
    });
  });
  meet.addListener("readyToClose", () => {
    meet.dispose();
    meet = null;
    afterClose();
  });
}

function move(pixels) {
  leftP = pixels;
  // setTranform();
  // you.style.transform = `translateX(${pixels}px)`;
}

function moveTop(pixels) {
  // topP = pixels - window.outerHeight / 2;
  topP = pixels;
  // setTranform();
  // you.style.top = `${pixels}px`;
}

function setTranform(x = leftP, y = topP, sc = scale) {
  if (x != leftP || y != topP || sc != scale) {
    leftP = x;
    topP = y;
    scale = sc;
    you.style.transform = `translateY(${topP}px) translateX(${leftP}px) scale(${scale})`;
  }
}

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

window.jumpTo = function jumpTo(tagName) {
  const el = document.getElementById(tagName);
  const scrollParent = getScrollParent(el);
  const y = el.getBoundingClientRect().top + scrollParent.scrollTop;
  scrollParent.scrollTo({ top: y, behavior: 'smooth' });
}

function handleMoveTop(e) {
  const card = e.target.closest('.card');
  if (card) {
    const scrollTop = document.documentElement.scrollTop;
    const topStuffHeight = document.querySelector('section.first').clientHeight;
    const rect = card.getBoundingClientRect();
    let y = scrollTop
      // TODO: optimize
      - topStuffHeight
      + rect.top
      + rect.height / 2
      // TODO: don't hardcode
      // This is the height of the "You" circle
      - 32;
    // console.log(scrollTop, y);
    if ((scrollTop - topStuffHeight) > y) { y = scrollTop - topStuffHeight; }
    return y;
    // moveTop(y);
  }
  return null;
}

function attachListeners(section) {
  let left = section.querySelector(".left");
  let right = section.querySelector(".right");

  left.addEventListener(
    "mousemove",
    throttle((e) => {
      if (meet || e.target === left) return;
      if (resetYou) resetYou();
      scale = 1;
      setTranform(-42, handleMoveTop(e));
    }, 100),
  );

  right.addEventListener(
    "mousemove",
    throttle((e) => {
      if (meet || e.target === right) return;
      if (resetYou) resetYou();
      setTranform(42, handleMoveTop(e));
    }, 100),
  );
}

function forceTileView({ enabled }) {
  if (!enabled) {
    meet.executeCommand('toggleTileView');
  }
  meet.removeListener('tileViewChanged', forceTileView);
};

function createClub(name, description) {
  let div = document.createElement('div');
  // if (enableSwiper) {
  //   div.className = 'swiper-slide';
  // }
  div.innerHTML = `
    <div class="card">
      <div class="title">${name}</div>
      <div class="description">${description}</div>
      <div class="actions">
        <button onclick="talkNow(event, '${name}')">TALK NOW</button>
        <span class="avatar-container">
          ${Math.random() > 0.5 ? `<span class="min-avatar">DW</span>` : ``}
          <span class="min-avatar">MV</span>
          <span class="min-avatar">MV</span>
        </span>
      </div>
    </div>
  `;
  return div;
  // return enableSwiper ? div : div.children[0];
}

function createRoomBtn({ name, icon }) {
  let div = document.createElement('div');
  div.innerHTML = `
    <button onclick="jumpTo('${name}')">
      <img src="${icon}" alt="Icon for ${name}">
      <span>${name}</span>
    </button>
    <button>${name}</button>
  `;
  return div.children[0];
  // return div;
}

function createRoomSection({ name }) {
  let div = document.createElement('div');
  div.innerHTML = `
    <section id="${name}">
      <h2>${name}</h2>
      <div class="panel">
        <!-- <div class="grid"></div> -->
        <div class="left">
        </div>
        <div class="spacer"></div>
        <div class="right">
        </div>
      </div>
    </section>
  `;
  return div.children[0];
}

tags.forEach((t) => {
  const roomBtn = createRoomBtn(t);
  rooms.append(roomBtn);
  const section = createRoomSection(t);
  document.querySelector('main').appendChild(section);

  const mid = Math.ceil(t.clubs.length / 2);
  const leftClubs = t.clubs.slice(0, mid);
  const rightClubs = t.clubs.slice(mid, t.clubs.length);
  const leftEls = leftClubs.map((c) => createClub(c.name, c.mission));
  const rightEls = rightClubs.map((c) => createClub(c.name, c.mission));
  // left.append(...els);
  section.querySelector('.left').append(...leftEls);
  section.querySelector('.right').append(...rightEls);

  attachListeners(section);
});

let modal = document.querySelector(".modal");
let meetEl = document.querySelector("#jitsi");

window.talkNow = function talkNow(e, name) {
  // TODO: this may cause bugs
  if (meet) { return; }

  const card = e.target.closest('.card');
  const avatarCont = card.querySelector('.avatar-container');
  const miniYou = document.createElement('span');
  // miniYou.innerText = 'YOU';
  miniYou.className = 'min-avatar av-you';
  avatarCont.append(miniYou);

  JitsiMeet({}, `FHClubDay-${name.replace('&', '-')}`, () => {
    modal.classList.remove("visible");
    resetYou = () => {
      avatarCont.removeChild(miniYou);
      resetYou = null;
    };
  });

  const avRect = miniYou.getBoundingClientRect();
  const scrollTop = document.documentElement.scrollTop;
  // TODO: optimize
  const topStuffHeight = document.querySelector('section.first').clientHeight;

  let x = avRect.x - (window.innerWidth / 2);
  let y = scrollTop
    - topStuffHeight
    + avRect.y
    // TODO: don't hardcode
    // This is the height of the "You" circle
    - 14;
  // console.log(scrollTop, y);
  setTranform(x, y, 0.7);

  // TODO: check 800ms value
  setTimeout(() => {
    modal.classList.add("visible");
    scale = 1;
  }, 800);
}
