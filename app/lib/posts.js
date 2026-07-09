// Blog content source. Each post is statically rendered at build time and
// gets its own SEO metadata, canonical URL and Article JSON-LD.

export const POSTS = [
  {
    slug: "what-students-learn-building-robots",
    title: "What students actually learn when they build a robot",
    excerpt:
      "It's not just wires and motors — here's the real thinking, problem-solving and confidence students build every time they make a robot work.",
    tag: "Robotics",
    image:
      "https://images.unsplash.com/photo-1561144257-e32e8efc6c4f?w=1200&q=80",
    date: "2026-01-14",
    updated: "2026-01-14",
    author: "Esdar Team",
    readMins: 5,
    keywords: [
      "robotics education",
      "what students learn robotics",
      "STEM skills",
      "hands-on learning",
    ],
    body: `
<p>Ask a parent what a child gains from a robotics class and you'll often hear "coding" or "engineering." Both are true — but they undersell what's really happening. When a student builds a robot, the hardware is just the surface. Underneath, they are practising a way of thinking that transfers to every subject and, later, to work.</p>

<h2>Problem-solving that has real stakes</h2>
<p>A robot either moves or it doesn't. That immediate, honest feedback is rare in school. When a line-follower drifts off course, there's no partial credit — the student has to observe, form a hypothesis, change one thing, and test again. This is the scientific method in its most motivating form, and children internalise it without being lectured.</p>

<h2>Computational thinking, not just code</h2>
<p>Breaking a big goal ("make the robot park itself") into small, ordered steps is computational thinking. Students learn to decompose problems, spot patterns, and design a sequence of instructions. These habits show up later in mathematics, essay planning and science experiments — long before they ever write professional software.</p>

<h2>Resilience through iteration</h2>
<ul>
  <li><strong>Failure becomes data.</strong> A build that doesn't work isn't a dead end; it's the next clue.</li>
  <li><strong>Progress is visible.</strong> Each version is a little better, which keeps motivation high.</li>
  <li><strong>Ownership grows.</strong> Because they built it, students care whether it works.</li>
</ul>

<h2>Collaboration and communication</h2>
<p>Most Esdar builds happen in pairs or small teams. Students negotiate roles, explain their reasoning, and demo their work to the class. Being able to say <em>why</em> a design choice was made is a skill many adults are still working on.</p>

<h2>The takeaway for schools</h2>
<p>A robotics programme isn't an add-on to STEM — it's a delivery mechanism for the exact durable skills the curriculum keeps asking for: reasoning, resilience, teamwork and communication. The robot is simply the most engaging way we've found to teach them.</p>
`,
  },
  {
    slug: "ai-for-schools-explained",
    title: "AI for schools, explained for non-technical staff",
    excerpt:
      "A plain-language guide to what students really do in an AI class — no jargon, no maths degree required — so any teacher or leader can follow along.",
    tag: "AI",
    image:
      "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=1200&q=80",
    date: "2026-02-03",
    updated: "2026-02-03",
    author: "Esdar Team",
    readMins: 6,
    keywords: [
      "AI for schools",
      "AI education explained",
      "teaching AI to students",
      "AI curriculum",
    ],
    body: `
<p>"Artificial intelligence" sounds like something that needs a research lab and a maths PhD. In a school setting it's far more approachable. Here's what an age-appropriate AI class actually looks like, in language any staff member can follow.</p>

<h2>AI is pattern-recognition, taught through examples</h2>
<p>At its core, the AI students meet is about spotting patterns in data. Instead of writing a rule for every case, students <em>show</em> the computer many examples and let it learn the pattern. A classic first project: teach a webcam to tell a "thumbs up" from a "thumbs down" by giving it lots of pictures of each.</p>

<h2>What students actually do</h2>
<ul>
  <li><strong>Collect data.</strong> They gather images, sounds or text — and quickly discover that messy data gives messy results.</li>
  <li><strong>Train a model.</strong> Using friendly, visual tools, they teach the computer to recognise categories.</li>
  <li><strong>Test and improve.</strong> They probe where it gets things wrong and add better examples.</li>
  <li><strong>Discuss fairness.</strong> Why did the model fail for some faces or accents? This opens honest conversations about bias.</li>
</ul>

<h2>No advanced maths needed to start</h2>
<p>Modern block-based and visual AI tools let students build working models before they ever touch an equation. The mathematics comes later, and by then they're motivated to learn it because they've seen what it powers.</p>

<h2>The skills that matter most</h2>
<p>Beyond the tech, an AI class builds <strong>data literacy</strong> and <strong>critical thinking about technology</strong> — the ability to ask "how does this system decide, and could it be wrong?" In a world full of algorithmic recommendations and generated content, that may be the most important literacy of all.</p>

<h2>For school leaders</h2>
<p>You don't need computer-science specialists on staff to offer this. Esdar provides the curriculum, tools and trained instructors, and can upskill your teachers so the programme is sustainable. The goal isn't to turn every child into an AI engineer — it's to make sure none of them are mystified by the technology shaping their lives.</p>
`,
  },
  {
    slug: "school-robotics-lab-guide",
    title: "What a great school robotics lab looks like",
    excerpt:
      "The space, the kit, the curriculum and the outcomes that separate a lab that gets used every week from an expensive room full of dusty boxes.",
    tag: "For Schools",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=80",
    date: "2026-02-20",
    updated: "2026-02-20",
    author: "Esdar Team",
    readMins: 7,
    keywords: [
      "school robotics lab",
      "robotics lab setup",
      "STEM lab for schools",
      "robotics lab design",
    ],
    body: `
<p>Plenty of schools invest in a robotics lab and then watch it go quiet after the launch photos. The difference between a lab that's booked every period and one that gathers dust is rarely the budget — it's the design. Here's what a great one has in common.</p>

<h2>1. A layout built for collaboration</h2>
<p>Rows of desks facing a board is the wrong shape for building. The best labs use movable tables clustered for teams of two to four, wide surfaces for parts and prototypes, and clear power access. Students should be able to stand, move and see each other's work.</p>

<h2>2. The right kit for your grades — not the most expensive</h2>
<p>A lab that tries to cover Grade 3 and Grade 12 with the same hardware serves neither well. A strong setup layers age-appropriate kit:</p>
<ul>
  <li><strong>Primary:</strong> simple, robust kits and block coding.</li>
  <li><strong>Middle:</strong> Micro:bit, sensors and beginner electronics.</li>
  <li><strong>Senior:</strong> Arduino, drones and real automation projects.</li>
</ul>
<p>Kit should be modular and repairable, so a single broken part never sidelines a whole batch.</p>

<h2>3. A curriculum, not a cupboard</h2>
<p>Hardware without a structured, grade-wise curriculum is the number-one reason labs stall. Teachers need a clear scope-and-sequence: what's taught in each session, how it builds on the last, and what the student produces. Outcomes should be visible — a project, a demo, a portfolio entry.</p>

<h2>4. Trained people running it</h2>
<p>The best equipment can't teach itself. A great lab has a confident instructor and a plan to keep staff skilled, so the programme survives a single teacher leaving. This is where an external partner earns its place.</p>

<h2>5. Outcomes you can point to</h2>
<p>Ask any thriving lab what it produces and you'll get specifics: students who can explain their build, a wall of completed projects, teams entering competitions, certificates earned. If a lab can't name its outcomes, it doesn't really have a programme — it has a room.</p>

<h2>How Esdar approaches it</h2>
<p>We design the space, supply grade-matched kits and curriculum, install everything, train your team and stay involved with ongoing support. The measure of success isn't the opening ceremony — it's whether the lab is still busy a year later.</p>
`,
  },
  {
    slug: "inside-7-day-robotics-camp",
    title: "Inside a 7-day Esdar robotics camp",
    excerpt:
      "A day-by-day look at how a week-long robotics camp takes students from their first circuit to a working, demo-ready build they're proud of.",
    tag: "Camps",
    image:
      "https://images.unsplash.com/photo-1567168544813-cc03465b4fa8?w=1200&q=80",
    date: "2026-03-11",
    updated: "2026-03-11",
    author: "Esdar Team",
    readMins: 5,
    keywords: [
      "robotics camp",
      "7 day robotics camp",
      "school robotics camp",
      "STEM camp",
    ],
    body: `
<p>A week is enough time to take a student who's never held a jumper wire to a confident builder demoing their own robot. Here's how a 7-day Esdar camp is paced so that every day ends with a win.</p>

<h2>Day 1 — Curiosity and first circuits</h2>
<p>We start with play, not theory. Students light an LED, make a buzzer sound, and learn that electronics respond to <em>them</em>. The goal of day one is simple: everyone leaves having made something work.</p>

<h2>Days 2–3 — Sensors and logic</h2>
<p>Now the robot starts to "sense." Students wire up buttons, light and distance sensors, and write the first simple logic: <em>if this, then that</em>. This is where computational thinking clicks into place.</p>

<h2>Days 4–5 — Motion and building</h2>
<p>Motors and chassis arrive. Teams assemble a moving robot, then teach it to follow a line or avoid obstacles. There's plenty of productive failure here — and plenty of cheering when a build finally behaves.</p>

<h2>Day 6 — The project</h2>
<p>Teams pick a challenge and make their robot solve it. Because they choose the goal, ownership is total. Instructors coach rather than direct, so students do the real thinking.</p>

<h2>Day 7 — Demo day</h2>
<p>Every team presents: what they built, how it works, what went wrong and how they fixed it. Parents and teachers are invited. Certificates are earned, not handed out. Students leave with a finished project and, more importantly, the belief that they can build.</p>

<h2>Why the format works</h2>
<p>Short, intensive and project-based, a camp creates momentum a weekly class can't. It's also a low-risk way for a school to try a robotics programme before committing to a full lab — many of our lab partnerships started with a single camp.</p>
`,
  },
  {
    slug: "student-project-progression",
    title: "From flashing hearts to AI sorting arms",
    excerpt:
      "How student projects progress from Primary to Senior — a clear map of what learners build at each stage and the skills each project unlocks.",
    tag: "Projects",
    image:
      "https://images.unsplash.com/photo-1559223607-a43c990c692c?w=1200&q=80",
    date: "2026-03-28",
    updated: "2026-03-28",
    author: "Esdar Team",
    readMins: 6,
    keywords: [
      "student robotics projects",
      "robotics project progression",
      "STEM projects by grade",
      "AI projects for students",
    ],
    body: `
<p>Good robotics education isn't a single difficulty level repeated for years — it's a staircase. Each project should be just hard enough to stretch a student and build on the last. Here's how that progression looks from Primary to Senior.</p>

<h2>Primary — make something respond</h2>
<p>Early projects are about cause and effect and the joy of making something happen. A Micro:bit that shows a flashing heart when shaken, a buzzer that plays a tune, a light that reacts to darkness. Skills unlocked: sequencing, basic block coding, and the confidence that "I can make the computer do things."</p>

<h2>Middle — sense and decide</h2>
<p>Now projects react to the world. Students build a distance-sensing robot, a temperature alarm, or a light-following buggy. They meet variables, loops and conditional logic. Skills unlocked: computational thinking, debugging, and connecting sensors to actions.</p>

<h2>Senior — automate and apply</h2>
<p>Projects start to resemble real engineering. A line-following delivery robot, a home-automation model, or an AI sorting arm that separates objects by colour using a trained model. Students integrate hardware, code and sometimes machine learning. Skills unlocked: systems thinking, project management and applied AI.</p>

<h2>Why progression matters</h2>
<ul>
  <li><strong>Motivation stays high.</strong> Work that's too easy bores; too hard defeats. The staircase keeps students in the sweet spot.</li>
  <li><strong>Portfolios build up.</strong> By Senior, students have years of tangible projects to show.</li>
  <li><strong>Skills compound.</strong> Each stage assumes and reinforces the last, so nothing is wasted.</li>
</ul>

<h2>Designing the staircase</h2>
<p>Esdar's grade-wise curriculum maps this progression for you, so a Grade 4 student and a Grade 11 student are each doing work that fits them. The result is a programme where every year feels like a genuine step up — not more of the same.</p>
`,
  },
  {
    slug: "robotics-kits-hardware-guide",
    title: "The hardware that powers hands-on learning",
    excerpt:
      "A look at the Arduino, Micro:bit and drone kits behind a great robotics programme — what each one is for, and why the mix matters more than any single board.",
    tag: "Kits",
    image:
      "https://images.unsplash.com/photo-1608564697071-ddf911d81370?w=1200&q=80",
    date: "2026-04-15",
    updated: "2026-04-15",
    author: "Esdar Team",
    readMins: 6,
    keywords: [
      "robotics kits",
      "Arduino for schools",
      "Micro:bit",
      "drone kits for schools",
    ],
    body: `
<p>Walk into a well-equipped robotics lab and you won't find one magic gadget — you'll find a thoughtful mix of hardware, each chosen for a stage of learning. Here's what the core kit does and why the combination matters.</p>

<h2>Micro:bit — the friendly first board</h2>
<p>The BBC Micro:bit is ideal for younger students. It has built-in LEDs, buttons and sensors, so learners can make something work in minutes with block coding — no wiring required to start. It's the gentlest on-ramp to physical computing.</p>

<h2>Arduino — the workhorse for real builds</h2>
<p>When students are ready to wire their own circuits and control motors, Arduino takes over. It's open, affordable and endlessly expandable, which makes it the backbone of Senior projects — from line-followers to home-automation models. Working with Arduino teaches genuine electronics and text-based coding.</p>

<h2>Drones — engagement with altitude</h2>
<p>Programmable drones bring flight, sensors and real-time control into the room. Beyond the obvious excitement, they teach students about stability, coordinates and autonomous behaviour, and they're a powerful hook for reluctant learners.</p>

<h2>Why the mix beats any single kit</h2>
<ul>
  <li><strong>Progression.</strong> Micro:bit to Arduino mirrors the journey from block coding to real electronics.</li>
  <li><strong>Range.</strong> Different projects need different tools; one board can't do it all well.</li>
  <li><strong>Repairability.</strong> Modular, standard parts mean a broken component is a quick swap, not a lost lesson.</li>
</ul>

<h2>How schools get it right</h2>
<p>The trap is buying hardware first and figuring out lessons later. Esdar supplies kits matched to a grade-wise curriculum, so every board that arrives already has a place in the learning journey — and the projects to put it to use from day one.</p>
`,
  },
];

export function getAllPosts() {
  return [...POSTS].sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPost(slug) {
  return POSTS.find((p) => p.slug === slug);
}
