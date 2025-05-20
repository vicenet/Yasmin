# Yasmin Emergency Dispatch System

Yasmin is a modern, modular emergency dispatch platform built with React. It provides an intuitive interface for public safety agencies and responders to manage emergency communication, partner coordination, resource tracking, and public queries.

---

## 🎨 Color System

The project uses a rich and thoughtful custom palette defined in CSS variables (`:root`). These are organized into thematic clusters for clarity and scalability:

### Primary Colors
- `--royal-blue`: `#0A2463` – Commanding and trustworthy, used for headers, buttons, and accent emphasis.
- `--sapphire`: `#1E3888` – Supports interactive elements like links and buttons.
- `--cobalt`: `#144385` – Provides hover and focus states to indicate interactivity.

### Cool Support Shades
- `--azure`: `#247BA0`
- `--steel-blue`: `#4C86A8`
- `--powder-blue`: `#D6E8F2` – Used for subtle backgrounds and visual calmness.

### Metallic Accents
- `--gold`: `#D0A85C` – Highlights and dividers for elegance.
- `--silver`: `#C8D1DC` – Subtle shadows and soft detail elements.

### Neutrals
- From `--white` to `--black`, including `--off-white`, `--light-gray`, `--dark-gray` – Used for backgrounds, text, and layout balance.

### Semantic Colors
- `--success`: `#0D8969`
- `--warning`: `#F0B429`
- `--error`: `#E12D39`
- `--info`: `#2C7EA1`

All colors were selected for readability, professionalism, and consistency with emergency-related UI norms.

---

## 📱 Breakpoint Logic

The layout is fully responsive, following a mobile-first strategy with adaptive behaviors:

| Breakpoint     | Max Width     | Behavior                                                  |
|----------------|---------------|-----------------------------------------------------------|
| `LG` (Desktop) | > 1024px      | Full layout, visible navigation, image art displayed     |
| `MD` (Tablet)  | ≤ 1024px      | Collapses nav into hamburger, hides hero art, flex grid  |
| `SM` (Mobile)  | ≤ 768px       | Stacked sections, scaled-down typography/buttons         |
| `XS` (Small Mobile) | ≤ 480px  | Minimalist card layouts, tighter spacing                 |

Key responsive behaviors:
- **Hero Section**: Hides side art, shrinks headings, and scales buttons.
- **Nav**: Switches to a mobile hamburger layout below 992px.
- **About/Service Cards**: Collapse from rows to single-column stacks.
- **Carousel/Testimonial**: Shrinks or scrolls horizontally.

---

## ✨ Creative Divergences from Mockup

While the initial mockup guided the foundation, several creative liberties were introduced:

- **3D & Hover Effects**: Smooth transform/scale hover states on cards to improve engagement.
- **Subtle Background Layers**: Decorative gradients and abstract shapes added for visual depth.
- **Microinteractions**: Button ripple effects, transitions, and animated scroll effects enhance UX.
- **Typography Shift**: Fonts chosen (`Montserrat` primary, `Lato` secondary) were curated for clarity and elegance, balancing modernity and accessibility.
- **Layout Reordering**: Some sections, like partners and resources, have reordered components to enhance mobile usability.

---

## 🛠 Technologies

- ✅ React + Vite
- ✅ Custom CSS (with CSS variables)
- ✅ Responsive Design (Media Queries)
- ✅ Semantic HTML5
- ✅ Deployed on Vercel

---

## 📦 Getting Started

```bash
git clone https://github.com/vicenet/Yasmin.git
cd Yasmin
npm install
npm run dev

```
### Rationale

- The blue primary color establishes a sense of trust and professionalism.
- Red is strategically used to denote urgency and important alerts.
- Amber accentuates interactive components, enhancing user engagement.
- Neutral grays maintain visual harmony and focus attention on primary content.

All colors have been selected to meet WCAG AA accessibility standards for readability and contrast.

---

- Navigation collapses into a hamburger menu on screens..
- Content sections reorganize fluidly to preserve readability and user engagement.
- Grid systems and spacing dynamically adapt using Flexbox and media queries.

---

## 🎨 Creative Divergences from the Mockup

While the project closely follows the initial mockup, several creative and functional enhancements have been made:

- **Interactive Feedback**: Hover, active, and focus states added to buttons and links.
- **Typography Enhancements**: Combination of `Roboto` and `Open Sans` to improve legibility and modernity.
- **Smooth Transitions**: Animations on scroll and hover for better user experience.
- **Content Restructuring**: Logical reordering of sections for better content flow.
- **Accessibility Improvements**: Better color contrast and semantic HTML used for screen readers.

These choices were made to elevate the original design while preserving its core intent.

---

## 🚀 Features

- ⚡ Real-time dispatch coordination interface
- 📱 Mobile-first responsive design
- 🧩 Modular React component structure
- 🤝 Integration with local emergency partners
- ❓ Expandable FAQ section
- 🧭 Accessible navigation across all sections
- ⚛️ Built using React, Vite, and modern JavaScript

---

## 🗂️ Project Structure



```
yasmin/
├── public/
│   └── index.html
├── src/
│   ├── sections/
│   │   ├── AboutSection.jsx
│   │   ├── ContactSection.jsx
│   │   ├── FAQSection.jsx
│   │   ├── FooterSection.jsx
│   │   ├── HeaderSection.jsx
│   │   ├── HeroSection.jsx
│   │   ├── CommunitySection.jsx
│   │   ├── PartnerSection.jsx
│   │   ├── ResourcesSection.jsx
│   │   ├── ServiceSection.jsx
│   │   └── TestimonialsSection.jsx
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
└── package.json
```

## 🛠️ Installation

```bash
# Clone the repository
git clone https://github.com/vicenet/yasmin.git
cd yasmin

# Install dependencies
npm install

# Start development server
npm run dev
```

## 🔧 Built With

- [React](https://reactjs.org/)
- [React Router DOM](https://reactrouter.com/)
- [Vite](https://vitejs.dev/) — for blazing fast dev experience

## 🧑‍💻 Developer Notes

- Customize partner data in `PartnerSection.jsx`
- Update FAQ items in `FAQSection.jsx`
- Styling is handled via `App.css` and scoped component classes



## 📄 License

This project is licensed under the MIT License.

---

## 🚀 Live Preview

👉 [View Live Demo](https://yasmin-iota.vercel.app/)

---

> Made with Brian Gitau for emergency response modernization.
