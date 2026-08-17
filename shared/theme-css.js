export const SKIN_CSS = String.raw`
body[data-dsh-rei-interface] {
  color: #132432;
  background-color: #eaf4f7;
  background-image:
    linear-gradient(rgba(246, 252, 253, 0.82), rgba(221, 237, 242, 0.92)),
    repeating-linear-gradient(90deg, rgba(28, 91, 113, 0.055) 0 1px, transparent 1px 72px),
    repeating-linear-gradient(0deg, rgba(28, 91, 113, 0.045) 0 1px, transparent 1px 72px),
    radial-gradient(circle at 80% 42%, rgba(103, 206, 235, 0.28), transparent 36%);
  background-attachment: fixed;
  --rei-ice: #79cee9;
  --rei-ice-bright: #b9effb;
  --rei-eye: #c93455;
  --rei-eye-dark: #7e2036;
  --rei-navy: #071521;
  --rei-steel: #294353;
  --rei-milk: #f4fbfd;
  --rei-panel: rgba(244, 251, 253, 0.82);
  --rei-line: rgba(40, 119, 145, 0.26);
  --rei-sidebar-width: 280px;
  --rei-titlebar-height: 0px;
  --rei-shadow: 0 22px 60px rgba(25, 74, 91, 0.15), 0 3px 10px rgba(21, 49, 61, 0.1);

  --dsw-alias-bg-base: transparent;
  --dsw-alias-bg-layer-1: rgba(248, 253, 254, 0.91);
  --dsw-alias-bg-layer-2: rgba(232, 244, 247, 0.94);
  --dsw-alias-bg-layer-3: rgba(215, 233, 238, 0.96);
  --dsw-alias-bg-overlay: rgba(248, 253, 254, 0.98);
  --dsw-alias-border-l1: rgba(38, 102, 125, 0.14);
  --dsw-alias-border-l2-darkmode-thin: rgba(38, 102, 125, 0.22);
  --dsw-alias-border-l2: rgba(38, 102, 125, 0.27);
  --dsw-alias-border-l3: rgba(55, 166, 199, 0.6);
  --dsw-alias-brand-primary: #3da8cb;
  --dsw-alias-brand-text: #176680;
  --dsw-alias-button-elevated-fill: rgba(249, 254, 255, 0.94);
  --dsw-alias-button-floating-fill: rgba(250, 254, 255, 0.97);
  --dsw-alias-button-floating-hover: #dbf3f8;
  --dsw-alias-button-info-fill: #2e98ba;
  --dsw-alias-button-info-hover: #257d9b;
  --dsw-alias-interactive-bg-active: rgba(72, 183, 216, 0.18);
  --dsw-alias-interactive-bg-hover: rgba(72, 183, 216, 0.09);
  --dsw-alias-interactive-bg-hover-solid: #ddf2f6;
  --dsw-alias-label-primary: #132432;
  --dsw-alias-label-primary-bluish: #173a4a;
  --dsw-alias-label-secondary: #4f6876;
  --dsw-alias-label-tertiary: #738995;
  --dsw-alias-label-caption: #93a6ae;
  --dsw-alias-state-business-primary: #319fbe;
  --dsw-alias-state-business-tertiary: #d7f1f7;
  --dsw-shadow-lv2: var(--rei-shadow);
  --dsw-specific-input-major: rgba(248, 253, 254, 0.9);
  --dsw-specific-selector: rgba(225, 240, 244, 0.95);
  --dsw-specific-sidebar-fill: rgba(234, 245, 248, 0.98);
}

body[data-dsh-rei-interface][data-ds-dark-theme] {
  color: #eaf7fb;
  background-color: #06111a;
  background-image:
    linear-gradient(rgba(4, 13, 21, 0.82), rgba(7, 21, 32, 0.95)),
    repeating-linear-gradient(90deg, rgba(139, 216, 239, 0.07) 0 1px, transparent 1px 72px),
    repeating-linear-gradient(0deg, rgba(139, 216, 239, 0.052) 0 1px, transparent 1px 72px),
    radial-gradient(circle at 79% 42%, rgba(51, 155, 187, 0.25), transparent 38%);
  --rei-panel: rgba(10, 29, 43, 0.82);
  --rei-line: rgba(125, 207, 232, 0.29);
  --rei-shadow: 0 24px 68px rgba(0, 0, 0, 0.46), 0 3px 12px rgba(0, 0, 0, 0.32);
  --dsw-alias-bg-base: transparent;
  --dsw-alias-bg-layer-1: rgba(9, 27, 40, 0.93);
  --dsw-alias-bg-layer-2: rgba(14, 39, 55, 0.95);
  --dsw-alias-bg-layer-3: rgba(24, 54, 71, 0.96);
  --dsw-alias-bg-overlay: rgba(7, 20, 30, 0.98);
  --dsw-alias-border-l1: rgba(148, 218, 239, 0.15);
  --dsw-alias-border-l2-darkmode-thin: rgba(148, 218, 239, 0.24);
  --dsw-alias-border-l2: rgba(148, 218, 239, 0.31);
  --dsw-alias-border-l3: rgba(121, 206, 233, 0.66);
  --dsw-alias-brand-primary: #86d8ee;
  --dsw-alias-brand-text: #c7f2fb;
  --dsw-alias-button-elevated-fill: rgba(18, 45, 61, 0.96);
  --dsw-alias-button-floating-fill: rgba(21, 52, 70, 0.98);
  --dsw-alias-button-floating-hover: #1c4d66;
  --dsw-alias-button-info-fill: #3aa8c8;
  --dsw-alias-button-info-hover: #55c4df;
  --dsw-alias-interactive-bg-active: rgba(105, 204, 232, 0.23);
  --dsw-alias-interactive-bg-hover: rgba(105, 204, 232, 0.12);
  --dsw-alias-interactive-bg-hover-solid: #163d51;
  --dsw-alias-label-primary: #effbfe;
  --dsw-alias-label-primary-bluish: #d8f3fa;
  --dsw-alias-label-secondary: #b4d0d9;
  --dsw-alias-label-tertiary: #87a9b4;
  --dsw-alias-label-caption: #658b98;
  --dsw-alias-state-business-primary: #79cee9;
  --dsw-alias-state-business-tertiary: #153f52;
  --dsw-specific-input-major: rgba(8, 27, 40, 0.94);
  --dsw-specific-selector: rgba(20, 51, 68, 0.96);
  --dsw-specific-sidebar-fill: rgba(3, 13, 21, 0.99);
}

body[data-dsh-rei-interface] [id='root'] {
  position: relative;
  z-index: 2;
  background: transparent;
}

body[data-dsh-rei-interface] [data-skin-chrome='rei-artwork-stage'] {
  position: fixed;
  inset: 0;
  z-index: 1;
  overflow: hidden;
  contain: strict;
  pointer-events: none;
}

body[data-dsh-rei-interface] [data-skin-artwork] {
  position: absolute;
  right: clamp(18px, 2vw, 36px);
  bottom: clamp(12px, 1.6vh, 20px);
  width: auto;
  height: min(88vh, 920px);
  max-width: calc(100vw - var(--rei-sidebar-width) - 24px);
  object-fit: contain;
  opacity: 0.93;
  filter: drop-shadow(-18px 22px 32px rgba(6, 26, 39, 0.3));
  transform-origin: right bottom;
  transition: opacity 420ms ease, transform 560ms cubic-bezier(0.22, 0.75, 0.2, 1), filter 420ms ease;
}

body[data-dsh-rei-interface][data-ds-dark-theme] [data-skin-artwork] {
  filter: drop-shadow(-22px 24px 38px rgba(0, 0, 0, 0.46)) saturate(0.94);
}

body[data-dsh-rei-interface] [data-skin-orbit] {
  position: absolute;
  top: 43%;
  right: clamp(60px, 11vw, 220px);
  width: min(49vw, 710px);
  aspect-ratio: 1;
  border: 1px solid rgba(81, 178, 207, 0.34);
  border-radius: 50%;
  opacity: 0.72;
  background:
    conic-gradient(from 3deg, transparent 0 9deg, rgba(121, 206, 233, 0.78) 9deg 10deg, transparent 10deg 29deg, rgba(201, 52, 85, 0.74) 29deg 30deg, transparent 30deg 62deg),
    radial-gradient(circle, transparent 0 45%, rgba(121, 206, 233, 0.16) 45.2% 45.6%, transparent 46% 57%, rgba(121, 206, 233, 0.11) 57.2% 57.7%, transparent 58%);
  transform: translate(50%, -50%) rotate(-9deg);
  animation: rei-orbit 38s linear infinite;
}

body[data-dsh-rei-interface] [data-rei-capsule] {
  position: absolute;
  right: clamp(-60px, 2vw, 34px);
  bottom: -7vh;
  width: min(31vw, 460px);
  height: 101vh;
  border: 1px solid rgba(139, 216, 239, 0.2);
  border-radius: 48% 48% 15% 15% / 12% 12% 8% 8%;
  opacity: 0.64;
  background:
    linear-gradient(90deg, transparent 0 7%, rgba(185, 239, 251, 0.08) 7% 8%, transparent 8% 92%, rgba(185, 239, 251, 0.1) 92% 93%, transparent 93%),
    linear-gradient(115deg, rgba(255, 255, 255, 0.12), transparent 28%);
  box-shadow: inset 0 0 50px rgba(105, 204, 232, 0.08), 0 0 42px rgba(77, 172, 200, 0.07);
}

body[data-dsh-rei-interface]:has(:is([data-phase='active'][data-chat-flow], [data-phase='active'] [data-chat-flow])) [data-skin-artwork] {
  opacity: 0.15;
  filter: saturate(0.58) drop-shadow(-10px 12px 22px rgba(7, 25, 37, 0.22));
  transform: translateX(19%) scale(0.93);
}

body[data-dsh-rei-interface]:has(:is([data-phase='active'][data-chat-flow], [data-phase='active'] [data-chat-flow])) :is([data-skin-orbit], [data-rei-capsule]) {
  opacity: 0.14;
}

body[data-dsh-rei-interface] [data-skin-chrome='rei-accent-rail'] {
  position: fixed;
  top: var(--rei-titlebar-height, 0px);
  right: 0;
  left: var(--rei-sidebar-width, 280px);
  z-index: 4;
  height: 4px;
  pointer-events: none;
  background: linear-gradient(90deg, var(--rei-eye) 0 38px, var(--rei-ice) 38px 38%, rgba(121, 206, 233, 0.08) 72%, transparent);
  box-shadow: 0 2px 14px rgba(55, 166, 199, 0.24);
  transition: left 180ms ease;
}

body[data-dsh-rei-interface] [data-skin-chrome='rei-titlebar-brand'] {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  height: 100%;
  padding-inline: 10px;
  color: #eaf9fd;
  font: 750 9px/1 ui-monospace, SFMono-Regular, Menlo, monospace;
  letter-spacing: 0.12em;
  pointer-events: none;
}

body[data-dsh-rei-interface] [data-skin-chrome='rei-titlebar-brand']::before {
  content: '00';
  display: grid;
  place-items: center;
  width: 26px;
  height: 18px;
  border: 1px solid #8bd8ef;
  color: #071521;
  background: #9fe3f3;
  font-weight: 900;
}

body[data-dsh-rei-interface] :is([data-pane='sidebar'], [class*='sidebarCol']) {
  --dsw-alias-label-primary: #132432;
  --dsw-alias-label-secondary: #4f6876;
  --dsw-alias-label-tertiary: #738995;
  --dsw-alias-label-caption: #93a6ae;
  --dsw-alias-border-l1: rgba(23, 102, 128, 0.14);
  --dsw-alias-border-l2: rgba(23, 102, 128, 0.24);
  --dsw-alias-interactive-bg-hover: rgba(72, 183, 216, 0.09);
  --dsw-alias-interactive-bg-active: rgba(72, 183, 216, 0.18);
  position: relative;
  z-index: 6;
  color: #132432;
  border-right: 1px solid rgba(23, 102, 128, 0.25);
  background: #eaf5f8;
  box-shadow: 12px 0 38px rgba(25, 74, 91, 0.1), inset -2px 0 rgba(121, 206, 233, 0.1);
}

body[data-dsh-rei-interface][data-ds-dark-theme] :is([data-pane='sidebar'], [class*='sidebarCol']) {
  --dsw-alias-label-primary: #effbfe;
  --dsw-alias-label-secondary: #b6d0d9;
  --dsw-alias-label-tertiary: #83a4b0;
  --dsw-alias-label-caption: #638794;
  --dsw-alias-border-l1: rgba(139, 216, 239, 0.13);
  --dsw-alias-border-l2: rgba(139, 216, 239, 0.24);
  --dsw-alias-interactive-bg-hover: rgba(121, 206, 233, 0.1);
  --dsw-alias-interactive-bg-active: rgba(121, 206, 233, 0.2);
  color: #effbfe;
  border-right-color: rgba(121, 206, 233, 0.42);
  background: #06141f;
  box-shadow: 12px 0 38px rgba(2, 12, 19, 0.25), inset -2px 0 rgba(121, 206, 233, 0.13);
}

body[data-dsh-rei-interface] :is([data-pane='sidebar'], [class*='sidebarCol']) > div {
  position: relative;
  overflow: hidden;
  background:
    linear-gradient(105deg, transparent 0 86%, rgba(23, 102, 128, 0.05) 86% 87%, transparent 87%),
    radial-gradient(circle at 50% 11%, rgba(121, 206, 233, 0.13), transparent 32%),
    repeating-linear-gradient(0deg, rgba(23, 102, 128, 0.015) 0 1px, transparent 1px 5px),
    linear-gradient(180deg, #f4fbfd, #dcecf1 72%);
}

body[data-dsh-rei-interface][data-ds-dark-theme] :is([data-pane='sidebar'], [class*='sidebarCol']) > div {
  background:
    linear-gradient(105deg, transparent 0 86%, rgba(121, 206, 233, 0.05) 86% 87%, transparent 87%),
    radial-gradient(circle at 50% 11%, rgba(67, 159, 188, 0.16), transparent 32%),
    repeating-linear-gradient(0deg, rgba(255, 255, 255, 0.015) 0 1px, transparent 1px 5px),
    linear-gradient(180deg, #0a2232, #05131e 72%);
}

body[data-dsh-rei-interface] :is([data-pane='sidebar'], [class*='sidebarCol']) > div::before {
  content: '00';
  position: absolute;
  right: -12px;
  bottom: 86px;
  color: rgba(23, 102, 128, 0.07);
  font: 900 128px/1 Arial, sans-serif;
  letter-spacing: -0.09em;
  pointer-events: none;
}

body[data-dsh-rei-interface][data-ds-dark-theme] :is([data-pane='sidebar'], [class*='sidebarCol']) > div::before {
  color: rgba(139, 216, 239, 0.055);
}

body[data-dsh-rei-interface] :is([data-pane='sidebar'], [class*='sidebarCol']) > div > * {
  position: relative;
  z-index: 1;
}

body[data-dsh-rei-interface] button[class*='brand'] > svg {
  color: #176680;
  filter: drop-shadow(0 0 8px rgba(23, 102, 128, 0.15));
}

body[data-dsh-rei-interface][data-ds-dark-theme] button[class*='brand'] > svg {
  color: #d9f5fb;
  filter: drop-shadow(0 0 8px rgba(121, 206, 233, 0.22));
}

body[data-dsh-rei-interface] button[class*='newSession'] {
  min-height: 40px;
  border: 1px solid rgba(154, 229, 245, 0.64);
  border-radius: 5px 14px 5px 14px;
  color: #06141f;
  background: linear-gradient(180deg, #aeeaf6, #69bfd9);
  box-shadow: 0 8px 20px rgba(34, 132, 161, 0.23), inset 0 1px rgba(255, 255, 255, 0.68);
  font-weight: 760;
}

body[data-dsh-rei-interface] button[class*='newSession']:hover {
  background: linear-gradient(180deg, #c8f4fb, #7fd1e7);
  box-shadow: 0 0 0 2px rgba(121, 206, 233, 0.14), 0 8px 24px rgba(34, 132, 161, 0.3);
}

body[data-dsh-rei-interface] [role='treeitem'][aria-selected='true'] {
  border-left: 2px solid var(--rei-ice);
  background: linear-gradient(90deg, rgba(121, 206, 233, 0.2), rgba(121, 206, 233, 0.025));
  box-shadow: inset 10px 0 20px rgba(121, 206, 233, 0.055);
}

body[data-dsh-rei-interface] [role='treeitem'][aria-selected='true']::after {
  content: '';
  position: absolute;
  right: 8px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--rei-eye);
  box-shadow: 0 0 9px rgba(201, 52, 85, 0.7);
}

body[data-dsh-rei-interface] :is([data-pane='conversation'], [class*='centerCol']) {
  position: relative;
  z-index: 3;
  background: transparent;
}

body[data-dsh-rei-interface] :is([data-pane='conversation'], [class*='centerCol']) header[class*='header'] {
  color: #eaf9fd;
  border-bottom: 1px solid rgba(121, 206, 233, 0.27);
  background: linear-gradient(90deg, rgba(5, 20, 31, 0.94), rgba(13, 45, 61, 0.84) 62%, rgba(5, 20, 31, 0.8));
  box-shadow: 0 8px 26px rgba(3, 17, 26, 0.14);
  backdrop-filter: blur(16px) saturate(1.04);
}

body[data-dsh-rei-interface] :is([data-pane='conversation'], [class*='centerCol']) header[class*='header'] :is(nav, span, button, a, div) {
  color: inherit;
}

body[data-dsh-rei-interface] button[class*='tabActive'] {
  color: #effbfe;
  border-bottom-color: var(--rei-ice);
  text-shadow: 0 0 14px rgba(121, 206, 233, 0.34);
}

body[data-dsh-rei-interface] [data-phase='hero'] {
  --dsh-chat-content-width: clamp(550px, 43vw, 735px);
  --dsh-composer-card-max-width: calc(var(--dsh-chat-content-width) + 32px);
}

body[data-dsh-rei-interface] [data-phase='hero'] [class*='headline'] {
  position: relative;
  color: #173a4a;
  font-family: ui-sans-serif, system-ui, -apple-system, sans-serif;
  font-weight: 760;
  letter-spacing: -0.045em;
  text-shadow: 0 1px rgba(255, 255, 255, 0.7), 0 10px 30px rgba(42, 110, 133, 0.12);
}

body[data-dsh-rei-interface][data-ds-dark-theme] [data-phase='hero'] [class*='headline'] {
  color: #eaf9fd;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.72), 0 0 24px rgba(121, 206, 233, 0.16);
}

body[data-dsh-rei-interface] [data-composer-card] {
  isolation: isolate;
  overflow: visible;
  border: 1px solid rgba(79, 173, 202, 0.54);
  border-radius: 7px 24px 7px 24px;
  background:
    linear-gradient(118deg, rgba(255, 255, 255, 0.42), transparent 30%),
    var(--dsw-specific-input-major);
  box-shadow: var(--rei-shadow), inset 0 1px rgba(255, 255, 255, 0.46);
  backdrop-filter: blur(19px) saturate(1.03);
}

body[data-dsh-rei-interface] [data-composer-card]::before {
  content: '00 / INPUT';
  position: absolute;
  top: -8px;
  left: 20px;
  padding: 4px 10px;
  border: 1px solid #8bd8ef;
  color: #071521;
  background: #9fe3f3;
  font: 900 9px/1 ui-monospace, SFMono-Regular, Menlo, monospace;
  letter-spacing: 0.11em;
  box-shadow: 0 4px 12px rgba(37, 116, 140, 0.18);
}

body[data-dsh-rei-interface] [data-composer-card]::after {
  content: '';
  position: absolute;
  inset: -1px;
  z-index: -1;
  border-radius: inherit;
  pointer-events: none;
  background:
    linear-gradient(90deg, var(--rei-eye) 0 30px, transparent 30px calc(100% - 48px), var(--rei-ice) calc(100% - 48px)) top / 100% 2px no-repeat,
    linear-gradient(90deg, var(--rei-ice) 0 48px, transparent 48px calc(100% - 30px), var(--rei-eye) calc(100% - 30px)) bottom / 100% 2px no-repeat;
}

body[data-dsh-rei-interface] [data-phase='hero'] [data-composer-card] {
  min-height: 144px;
  background: linear-gradient(118deg, rgba(255, 255, 255, 0.56), transparent 34%), rgba(244, 251, 253, 0.75);
}

body[data-dsh-rei-interface][data-ds-dark-theme] [data-phase='hero'] [data-composer-card] {
  background: linear-gradient(118deg, rgba(121, 206, 233, 0.07), transparent 34%), rgba(6, 24, 36, 0.79);
}

body[data-dsh-rei-interface] [data-input-mirror] {
  min-height: 0;
  transition: min-height 460ms cubic-bezier(0.22, 0.78, 0.2, 1);
}

body[data-dsh-rei-interface] [data-phase='hero'] [data-input-mirror] {
  min-height: 72px;
}

body[data-dsh-rei-interface] [data-composer-card] button[class*='primary'] {
  color: #071521;
  background: linear-gradient(180deg, #a9e8f5, #58b7d3);
  box-shadow: 0 5px 15px rgba(38, 138, 168, 0.26), inset 0 1px rgba(255, 255, 255, 0.5);
}

body[data-dsh-rei-interface] [data-composer-card] button:hover:not(:disabled) {
  border-color: rgba(121, 206, 233, 0.7);
  color: #18708b;
}

body[data-dsh-rei-interface] [data-composer-card] button[class*='primary']:hover:not(:disabled) {
  color: #04131d;
  background: linear-gradient(180deg, #c1f0f9, #6cc9e0);
}

body[data-dsh-rei-interface] :is(button, [role='button']):disabled {
  opacity: 0.45;
  filter: saturate(0.45);
  box-shadow: none;
}

body[data-dsh-rei-interface] :is([class*='ConversationRoot'], [data-conversation-scroll]) {
  background: transparent;
}

body[data-dsh-rei-interface] [class*='userRow'] [class*='bubble'] {
  border: 1px solid rgba(66, 158, 187, 0.34);
  border-radius: 14px 14px 3px 14px;
  background: rgba(225, 243, 247, 0.93);
  box-shadow: 0 8px 24px rgba(32, 91, 110, 0.09);
}

body[data-dsh-rei-interface][data-ds-dark-theme] [class*='userRow'] [class*='bubble'] {
  color: #eaf9fd;
  background: rgba(16, 55, 72, 0.9);
}

body[data-dsh-rei-interface] :is([class*='assistantRow'], [class*='messageRow']) [class*='content'] {
  text-shadow: 0 1px rgba(255, 255, 255, 0.32);
}

body[data-dsh-rei-interface][data-ds-dark-theme] :is([class*='assistantRow'], [class*='messageRow']) [class*='content'] {
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.52);
}

body[data-dsh-rei-interface] :is([class*='thinking'], [class*='reasoning']) {
  border-left-color: var(--rei-eye);
}

body[data-dsh-rei-interface] [data-terminal] {
  --dsw-alias-markdown-code-block: rgba(3, 14, 22, 0.98);
  --dsw-alias-label-primary: #eaf9fd;
  --dsw-alias-label-secondary: #b4d0d9;
  --dsw-alias-label-tertiary: #83a4b0;
  color: #eaf9fd;
  border: 1px solid rgba(121, 206, 233, 0.28);
  background: #04131d;
  box-shadow: inset 3px 0 var(--rei-eye);
}

body[data-dsh-rei-interface] :is([role='dialog'], [role='menu'], [role='listbox']) {
  border-color: rgba(79, 173, 202, 0.36);
  box-shadow: var(--rei-shadow);
  backdrop-filter: blur(16px) saturate(0.95);
}

body[data-dsh-rei-interface] :is([role='menuitem'], [role='option']):is(:hover, [aria-selected='true']) {
  background: rgba(89, 190, 220, 0.13);
}

body[data-dsh-rei-interface]
  [data-slot='sidebar.settings']
  [role='presentation']
  > [role='dialog'][aria-modal='true'] {
  --dsw-alias-bg-base: #eaf4f7;
  --dsw-alias-bg-layer-1: rgba(248, 253, 254, 0.99);
  --dsw-alias-bg-layer-2: rgba(232, 244, 247, 0.98);
  --dsw-alias-bg-layer-3: rgba(215, 233, 238, 0.98);
  --dsw-alias-bg-overlay: rgba(248, 253, 254, 0.99);
  --dsw-alias-label-primary: #132432;
  --dsw-alias-label-primary-bluish: #173a4a;
  --dsw-alias-label-secondary: #4f6876;
  --dsw-alias-label-tertiary: #738995;
  --dsw-alias-label-caption: #93a6ae;
  --dsw-alias-brand-text: #176680;
  --dsw-alias-button-elevated-fill: #f8fdfe;
  --dsw-alias-button-floating-fill: #fbfeff;
  --dsw-alias-interactive-bg-active: rgba(72, 183, 216, 0.16);
  --dsw-alias-interactive-bg-hover: rgba(72, 183, 216, 0.08);
  --dsw-specific-selector: rgba(225, 240, 244, 0.98);
  color: var(--dsw-alias-label-primary);
  background: rgba(237, 247, 249, 0.97);
}

body[data-dsh-rei-interface][data-ds-dark-theme]
  [data-slot='sidebar.settings']
  [role='presentation']
  > [role='dialog'][aria-modal='true'] {
  --dsw-alias-bg-base: #071521;
  --dsw-alias-bg-layer-1: rgba(9, 27, 40, 0.99);
  --dsw-alias-bg-layer-2: rgba(14, 39, 55, 0.99);
  --dsw-alias-bg-layer-3: rgba(24, 54, 71, 0.99);
  --dsw-alias-bg-overlay: rgba(7, 20, 30, 0.99);
  --dsw-alias-label-primary: #effbfe;
  --dsw-alias-label-primary-bluish: #d8f3fa;
  --dsw-alias-label-secondary: #b4d0d9;
  --dsw-alias-label-tertiary: #87a9b4;
  --dsw-alias-label-caption: #658b98;
  --dsw-alias-brand-text: #c7f2fb;
  --dsw-alias-button-elevated-fill: rgba(18, 45, 61, 0.97);
  --dsw-alias-button-floating-fill: rgba(21, 52, 70, 0.98);
  --dsw-specific-selector: rgba(20, 51, 68, 0.98);
  color: var(--dsw-alias-label-primary);
  background: rgba(6, 20, 31, 0.97);
}

body[data-dsh-rei-interface] :is(button, [role='button'], [role='tab'], [role='treeitem'], input, textarea, select):focus-visible {
  outline: 2px solid var(--rei-eye);
  outline-offset: 2px;
}

body[data-dsh-rei-interface] ::selection {
  color: #06141f;
  background: rgba(139, 216, 239, 0.88);
}

body[data-dsh-rei-interface] ::-webkit-scrollbar-thumb {
  border: 3px solid transparent;
  border-radius: 8px;
  background: linear-gradient(#318ba7, #318ba7) padding-box;
}

@keyframes rei-orbit {
  to { transform: translate(50%, -50%) rotate(351deg); }
}

@media (max-width: 1180px) {
  body[data-dsh-rei-interface] [data-skin-artwork] {
    right: clamp(12px, 2vw, 24px);
    bottom: 12px;
    height: 82vh;
    opacity: 0.56;
  }

  body[data-dsh-rei-interface] [data-skin-orbit] {
    right: 38px;
    width: 570px;
  }

  body[data-dsh-rei-interface] [data-rei-capsule] {
    right: -110px;
    width: 430px;
  }

  body[data-dsh-rei-interface]:has(:is([data-phase='active'][data-chat-flow], [data-phase='active'] [data-chat-flow])) [data-skin-artwork] {
    opacity: 0.1;
  }
}

@media (max-width: 880px) {
  body[data-dsh-rei-interface] [data-skin-artwork] {
    opacity: 0.09;
    transform: translateX(24%);
  }

  body[data-dsh-rei-interface] :is([data-skin-orbit], [data-rei-capsule]) {
    opacity: 0.1;
  }

  body[data-dsh-rei-interface] [data-phase='hero'] {
    --dsh-chat-content-width: min(90vw, 680px);
  }

  body[data-dsh-rei-interface]:has(:is([data-phase='active'][data-chat-flow], [data-phase='active'] [data-chat-flow])) [data-skin-artwork] {
    opacity: 0.08;
  }
}

@media (max-width: 620px) {
  body[data-dsh-rei-interface] [data-skin-artwork] {
    right: 8px;
    height: 68vh;
    opacity: 0.055;
  }

  body[data-dsh-rei-interface] [data-skin-chrome='rei-accent-rail'] {
    left: 0;
  }

  body[data-dsh-rei-interface] [data-composer-card] {
    border-radius: 7px 18px 7px 18px;
  }

  body[data-dsh-rei-interface] [data-composer-card]::before {
    left: 13px;
  }

  body[data-dsh-rei-interface]:has(:is([data-phase='active'][data-chat-flow], [data-phase='active'] [data-chat-flow])) [data-skin-artwork] {
    opacity: 0.05;
  }
}

@media (prefers-reduced-motion: reduce) {
  body[data-dsh-rei-interface] [data-skin-artwork],
  body[data-dsh-rei-interface] [data-skin-orbit],
  body[data-dsh-rei-interface] [data-skin-chrome='rei-accent-rail'],
  body[data-dsh-rei-interface] [data-input-mirror] {
    transition: none;
    animation: none;
  }
}
`
