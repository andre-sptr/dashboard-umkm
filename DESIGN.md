# Design System Inspired by LiteLLM

## 1. Visual Theme & Atmosphere

LiteLLM's design embodies a sophisticated, tech-forward aesthetic rooted in deep indigo darkness with ethereal purple accents. The system evokes a sense of cutting-edge AI infrastructure—clean, modern, and intellectually compelling—with soft glows and gradient overlays that suggest connectivity and intelligence. The atmosphere is premium yet approachable, balancing technical sophistication with developer-friendly accessibility. Neon-like accent colors pop against the dark canvas, creating visual hierarchy through contrast rather than saturation, while generous whitespace and deliberate pacing convey clarity and confidence in a complex domain.

**Key Characteristics**
- Deep indigo/navy background with purple accent layers
- Luminous purple and blue accent colors for emphasis and interactivity
- High contrast between dark surfaces and bright text for legibility
- Soft, glowing accent treatments on cards and components
- Minimalist, spacious layout with intentional rhythm
- Tech-forward, sophisticated visual language suitable for developer tools
- Smooth transitions and refined typography hierarchy

## 2. Color Palette & Roles

### Primary
- **Primary Accent** (`#C5B8FF`): Primary interactive elements, highlights, and emphasis states; widely used for visual impact across the interface
- **Electric Blue** (`#0000EE`): Core brand color; primary call-to-action buttons, links, and branded moments
- **Sky Blue** (`#0099FF`): Secondary interactive state; alternative accent for depth and secondary actions

### Accent Colors
- **Lavender Light** (`#DEDDFF`): Subtle background tints, secondary accents, and gentle highlights
- **Purple Muted** (`#9B9BBD`): Tertiary accent; used for disabled states, secondary UI elements, and low-emphasis text

### Interactive
- **Deep Indigo** (`#040128`): Dark interactive backgrounds; deepest layer for contrast and depth
- **Navy Deep** (`#191938`): Primary background layer; used for main content surfaces and section backgrounds

### Neutral Scale
- **Pure Black** (`#000000`): Primary text, borders, and maximum contrast elements
- **Pure White** (`#FFFFFF`): Text on dark backgrounds, inverse text, light foreground elements
- **Charcoal** (`#737373`): Secondary text, muted labels, disabled text states
- **Dark Gray** (`#222222`): Subtle border and divider lines
- **Almost Black** (`#0D0D0D`): Deep background layers for stacked depth
- **Medium Gray** (`#666666`): Tertiary text, reduced emphasis content

### Surface & Borders
- **Purple Glow** (`#6E6896`): Border strokes on cards; subtle frame definition with luminous quality
- **Lavender Light** (`#DEDDFF`): Surface fills for badge and tag backgrounds; soft, non-intrusive
- **Navy Deep** (`#191938`): Primary surface background; primary layer for cards and containers

## 3. Typography Rules

### Font Family
**Primary Display:** Plus Jakarta Sans, system-ui, -apple-system, sans-serif  
**Secondary Headings:** Switzer, system-ui, -apple-system, sans-serif  
**Body & UI:** Satoshi, system-ui, -apple-system, sans-serif  
**Fallback:** sans-serif

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display (H1) | Plus Jakarta Sans | 72px | 600 | 86.4px | 0px | Hero headlines, page titles |
| Large Heading (H2) | Plus Jakarta Sans | 52px | 500 | 62.4px | 0px | Section headers, major content divisions |
| Heading (H3) | Plus Jakarta Sans | 40px | 500 | 60px | 0px | Subsection titles, feature headers |
| Subheading (H4) | Switzer | 26px | 600 | 33.8px | 0px | Card titles, key feature labels |
| Body Text | Satoshi | 14px | 500 | 16.8px | 0px | Primary content, descriptions, paragraphs |
| Button Label | sans-serif | 12px | 400 | 1.0 | 0px | Interactive button text, badges, tags |
| Caption | Satoshi | 12px | 400 | 14.4px | 0px | Metadata, labels, helper text |
| Code | Monospace | 12px | 400 | 16.8px | 0px | Inline and block code elements |

### Principles
- **Progressive Disclosure:** Largest display sizes (72px–52px) command attention for hero content; hierarchy narrows for supporting details
- **Weight Contrast:** Heavier weights (600) at display scales reduce weight at body scales (400–500) for readability
- **Line Height Breathing:** Line heights increase proportionally with size to maintain visual comfort and density control
- **Font Pairing:** Display and heading font (Plus Jakarta Sans) conveys modernity; Satoshi body text provides warm, approachable contrast
- **Tech-Forward Feel:** Switzer subheadings add geometric precision for technical credibility

## 4. Component Stylings

### Buttons

#### Primary Button
- **Background:** `#0000EE`
- **Text Color:** `#FFFFFF`
- **Padding:** `12px 24px`
- **Border Radius:** `40px`
- **Border:** None
- **Font Size:** `12px`
- **Font Weight:** `400`
- **Font Family:** `sans-serif`
- **Height:** `40px`
- **Hover State:** Background `#0099FF`, text `#FFFFFF`
- **Active State:** Background `#040128`, text `#C5B8FF`
- **Disabled State:** Background `#9B9BBD`, text `#FFFFFF`, opacity `0.6`

#### Secondary Button
- **Background:** `rgba(0, 0, 0, 0.2)`
- **Text Color:** `#000000`
- **Padding:** `12px 24px`
- **Border Radius:** `40px`
- **Border:** `1px solid #9B9BBD`
- **Font Size:** `12px`
- **Font Weight:** `400`
- **Font Family:** `sans-serif`
- **Height:** `40px`
- **Hover State:** Background `rgba(197, 184, 255, 0.15)`, text `#000000`
- **Active State:** Background `#C5B8FF`, text `#040128`

#### Ghost Button
- **Background:** `rgba(0, 0, 0, 0)`
- **Text Color:** `#0000EE`
- **Padding:** `12px 24px`
- **Border Radius:** `8px`
- **Border:** `1px solid #0000EE`
- **Font Size:** `12px`
- **Font Weight:** `400`
- **Font Family:** `sans-serif`
- **Height:** `40px`
- **Hover State:** Background `rgba(0, 0, 238, 0.1)`, text `#0000EE`
- **Active State:** Background `#0000EE`, text `#FFFFFF`

### Cards & Containers

#### Feature Card
- **Background:** `#191938`
- **Border:** `1px solid #6E6896`
- **Border Radius:** `16px`
- **Padding:** `24px`
- **Box Shadow:** `0px 0.602187px 1.80656px -1.25px rgba(0, 0, 0, 0.07), 0px 2.28853px 6.8656px -2.5px rgba(0, 0, 0, 0.063), 0px 10px 30px -3.75px rgba(0, 0, 0, 0.024)`
- **Text Color:** `#FFFFFF`
- **Hover State:** Border `#C5B8FF`, box-shadow increased opacity

#### Nested Container (API Feature Grid)
- **Background:** `rgba(0, 0, 0, 0.3)`
- **Border Radius:** `12px`
- **Padding:** `16px`
- **Grid Gap:** `12px`
- **Text Color:** `#FFFFFF`
- **Font Size:** `12px`
- **Font Weight:** `400`

### Inputs & Forms

#### Text Input
- **Background:** `#040128`
- **Border:** `1px solid #6E6896`
- **Border Radius:** `8px`
- **Padding:** `12px 16px`
- **Text Color:** `#FFFFFF`
- **Placeholder Color:** `#9B9BBD`
- **Font Size:** `14px`
- **Font Weight:** `400`
- **Font Family:** `Satoshi`
- **Height:** `44px`
- **Focus State:** Border `#C5B8FF`, box-shadow `0 0 0 3px rgba(197, 184, 255, 0.1)`

#### Textarea
- **Background:** `#040128`
- **Border:** `1px solid #6E6896`
- **Border Radius:** `8px`
- **Padding:** `12px 16px`
- **Text Color:** `#FFFFFF`
- **Placeholder Color:** `#9B9BBD`
- **Font Size:** `14px`
- **Font Family:** `Satoshi`
- **Min Height:** `120px`
- **Line Height:** `16.8px`

### Navigation

#### Header Navigation
- **Background:** `rgba(0, 0, 0, 0)` (transparent)
- **Height:** `78px`
- **Padding:** `0px 40px`
- **Display:** Flex
- **Align Items:** Center
- **Border Bottom:** `1px solid rgba(197, 184, 255, 0.1)`

#### Navigation Link (Active)
- **Color:** `#C5B8FF`
- **Font Size:** `14px`
- **Font Weight:** `500`
- **Font Family:** `Satoshi`
- **Text Decoration:** None
- **Padding:** `8px 0px`
- **Border Bottom:** `2px solid #C5B8FF`

#### Navigation Link (Inactive)
- **Color:** `#9B9BBD`
- **Font Size:** `14px`
- **Font Weight:** `500`
- **Font Family:** `Satoshi`
- **Hover State:** Color `#C5B8FF`

### Badges & Tags

#### Status Badge (Hiring)
- **Background:** `#DBFCE5`
- **Text Color:** `#0000EE`
- **Padding:** `5px 10px`
- **Border Radius:** `17px`
- **Font Size:** `12px`
- **Font Weight:** `400`
- **Font Family:** `sans-serif`
- **Box Shadow:** `0px 0.602187px 1.80656px -1.25px rgba(0, 0, 0, 0.07)`

#### Sponsor/Trust Badge
- **Background:** `rgba(255, 255, 255, 0.1)`
- **Text Color:** `#737373`
- **Padding:** `6px 16px`
- **Border Radius:** `8px`
- **Font Size:** `12px`
- **Font Weight:** `400`
- **Font Family:** `sans-serif`
- **Border:** `1px solid rgba(255, 255, 255, 0.15)`

## 5. Layout Principles

### Spacing System
**Base Unit:** `8px`

**Scale:**
- `8px`: Tight spacing (internal component gaps)
- `12px`: Component internal padding, small gaps
- `16px`: Standard component padding, small section gaps
- `20px`: Medium spacing between elements
- `24px`: Card and container padding
- `32px`: Vertical rhythm between content blocks
- `36px`: Section spacing (moderate)
- `40px`: Header padding, horizontal margins
- `56px`: Large section separation
- `76px`: Extra-large spacing for major sections
- `80px`: Section separation for visual breathing room
- `120px`: Hero and viewport-scale spacing

**Context:**
- Horizontal padding: `40px` for main container
- Vertical gap between sections: `80px–120px`
- Internal card padding: `24px`
- Button group gaps: `12px`

### Grid & Container
- **Max Width:** `1440px` (full viewport)
- **Column Strategy:** 12-column flexible grid; responsive collapse at breakpoints
- **Container Margins:** `40px` left and right on desktop
- **Content Width:** Typically `1200px–1280px` for centered layouts
- **Section Patterns:** Full-width colored sections with internal containers; alternating light/dark backgrounds for visual separation

### Whitespace Philosophy
Whitespace is treated as a first-class design element. Generous vertical spacing (80px–120px) between major sections creates rhythm and prevents cognitive overload. Horizontal margins maintain breathing room around edges. Internal component spacing uses consistent increments to build visual harmony. Empty space around hero content emphasizes importance; denser clustering for feature grids creates visual grouping.

### Border Radius Scale
- `0px`: Navbars, full-width elements, and sharp architectural edges
- `8px`: Input fields, ghost buttons, and moderate containers
- `12px`: Nested UI containers and secondary cards
- `16px`: Primary cards and feature containers
- `17px`: Badge and pill-shaped elements
- `40px`: Fully rounded buttons and pill buttons

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow, solid background `#191938` | Text, icons, inline content |
| Raised (Level 1) | `0px 0.602187px 1.80656px -1.25px rgba(0, 0, 0, 0.07)` | Subtle lift; badge and small component emphasis |
| Lifted (Level 2) | `0px 0.602187px 1.80656px -1.25px rgba(0, 0, 0, 0.07), 0px 2.28853px 6.8656px -2.5px rgba(0, 0, 0, 0.063)` | Cards, feature containers, moderate depth |
| Floating (Level 3) | `0px 0.602187px 1.80656px -1.25px rgba(0, 0, 0, 0.07), 0px 2.28853px 6.8656px -2.5px rgba(0, 0, 0, 0.063), 0px 10px 30px -3.75px rgba(0, 0, 0, 0.024)` | Modal overlays, hero cards, maximum depth emphasis |

**Shadow Philosophy:** Shadows are deliberately soft and diffused, using multiple layers to create depth without harsh contrast. The system employs a three-tier shadow model reflecting ambient, key, and rim light. Shadows reinforce hierarchy by adding subtle depth to interactive and elevated components while maintaining the refined, tech-forward aesthetic. Dark backgrounds require careful shadow tuning; shadows are darkened slightly or shifted toward purple tones to remain visible without breaking the color harmony.

## 7. Do's and Don'ts

### Do
- **Do use `#C5B8FF` (Lavender) for interactive emphasis** and hover states on dark backgrounds; it provides high contrast and visual pop without overwhelming
- **Do maintain consistent `24px` padding inside cards and containers** to create unified visual breathing room
- **Do pair Plus Jakarta Sans display type with Satoshi body text** for modern, warm contrast; avoid font mixing outside these combinations
- **Do apply `40px` border-radius exclusively to pill buttons** and toggle elements for instant recognition of clickability
- **Do respect the `80px–120px` vertical spacing between major sections** to prevent visual cramping and aid content scanning
- **Do layer shadows using the three-tier model** (ambient, key, rim) for professional depth without harshness
- **Do use `#0000EE` (Electric Blue) as the primary call-to-action color** across all primary buttons and branded moments
- **Do apply full-width section backgrounds with contained internal content** to maximize visual hierarchy and section delineation
- **Do group related controls in `12px` gap clusters** to signal logical connection
- **Do prioritize **Plus Jakarta Sans** at 72px weight 600 for hero headlines** to establish immediate presence and authority

### Don't
- **Don't mix font families beyond the three-tier system** (Plus Jakarta Sans, Switzer, Satoshi); random font choices damage cohesion
- **Don't apply button padding smaller than `12px 24px`** or set button height below `40px`; touch targets require minimum sizes
- **Don't use shadows on text or small icons;** reserve shadows for containers and cards only
- **Don't exceed `3` levels of nested containers** without introducing visual separators (dividers, spacing increases)
- **Don't apply `#0099FF` (Sky Blue) to body text;** reserve it for secondary interactive states and accent moments
- **Don't set container padding below `16px`** or above `40px` without design justification
- **Don't apply opaque backgrounds to navigation or header elements;** maintain subtle transparency (`rgba(0, 0, 0, 0)` or near-transparent overlays)
- **Don't reduce line height below `1.0` on any text element;** reading comfort requires adequate vertical rhythm
- **Don't underestimate whitespace; empty regions between sections are design, not waste.** Insufficient spacing creates claustrophobic, hard-to-parse layouts
- **Don't mix metric border-radius values;** stick to the defined scale (`0px, 8px, 12px, 16px, 17px, 40px`)

## 8. Responsive Behavior

### Breakpoints

| Breakpoint | Width | Key Changes |
|------------|-------|-------------|
| Mobile | 320px–479px | Single-column layout; `20px` container padding; H1 reduced to `48px`; section gaps reduced to `40px–56px` |
| Tablet | 480px–1023px | Two-column layouts possible; `32px` container padding; H1 reduced to `56px`; H2 reduced to `40px`; section gaps `56px–80px` |
| Desktop | 1024px–1439px | Full layout; `40px` container padding; typography at specification; section gaps `80px–120px`; max-width `1200px` |
| Large Desktop | 1440px+ | Max-width `1440px`; additional horizontal padding; full-featured layouts |

### Touch Targets
- **Minimum Height:** `44px` for buttons and interactive elements
- **Minimum Width:** `44px` for icon buttons
- **Minimum Padding:** `12px` around touch targets to prevent accidental activation
- **Spacing Between Targets:** `16px` minimum to avoid unintended taps
- **Mobile Buttons:** Increase to `48px` height on mobile to accommodate thumb interaction

### Collapsing Strategy
- **Navigation:** Horizontal nav collapses to hamburger menu at `768px` breakpoint; drawer slides from left at full viewport height
- **Feature Grid:** Switches from 4-column to 2-column at `1023px`; single column below `480px`
- **Hero Section:** Text alignment remains center; H1 scales down proportionally; margin/padding adjusts via spacing scale
- **Cards:** Maintain `16px` border-radius and `24px` padding on all breakpoints; adjust internal grid gaps from `12px` desktop to `8px` mobile
- **Spacing Reduction:** Vertical gaps reduce by ~30% at tablet; by ~50% at mobile (e.g., `120px` → `80px` → `40px`)
- **Typography Scaling:** No aggressive shrinking; maintain hierarchy legibility; reduce by 1–2 font sizes on mobile only for display type

## 9. Agent Prompt Guide

### Quick Color Reference
- **Primary CTA:** Electric Blue (`#0000EE`)
- **Primary Accent / Hover:** Lavender (`#C5B8FF`)
- **Background (Dark):** Navy Deep (`#191938`)
- **Text (Light):** Pure White (`#FFFFFF`)
- **Text (Primary):** Pure Black (`#000000`)
- **Text (Secondary):** Charcoal (`#737373`)
- **Borders / Frames:** Purple Muted (`#6E6896`)
- **Secondary Accent:** Sky Blue (`#0099FF`)
- **Badge Background:** Lavender Light (`#DEDDFF`)
- **Disabled State:** Purple Muted (`#9B9BBD`)
- **Deep Layer:** Deep Indigo (`#040128`)

### Iteration Guide

1. **Start with section backgrounds:** Alternate between `#191938` (primary) and transparent overlays; use full-width for visual dominance; inner content respects `40px` horizontal padding on desktop.

2. **Apply typography in hierarchy order:** H1 = `72px Plus Jakarta Sans weight 600`, H2 = `52px Plus Jakarta Sans weight 500`, H3 = `40px Plus Jakarta Sans weight 500`, body = `14px Satoshi weight 500`; maintain exact line heights (`86.4px, 62.4px, 60px, 16.8px` respectively).

3. **Button defaults:** All interactive buttons minimum `40px` height, `12px–24px` padding, `40px` border-radius; primary = `#0000EE` background, white text; secondary = semi-transparent dark with border; ghost = transparent with electric blue border.

4. **Card structure:** `16px` or `24px` padding depending on density; `#191938` background; `1px solid #6E6896` border; `16px` border-radius; apply Level 2–3 shadow from elevation table.

5. **Spacing rhythm:** Use base `8px` increments; section gaps start at `80px` desktop, scale down to `56px` tablet and `40px` mobile; internal component gaps `12px–24px` depending on density.

6. **Interactive states:** Hover = lighten accent or add `rgba(197, 184, 255, 0.15)` overlay; active = shift to darker layer (`#040128`) with accent text; disabled = `#9B9BBD` with `0.6` opacity.

7. **Navigation:** Full-width transparent background (`rgba(0, 0, 0, 0)`); `78px` height; links `14px Satoshi`; active link = `#C5B8FF` with bottom border; inactive = `#9B9BBD` with hover lift to `#C5B8FF`.

8. **Input fields:** `#040128` background; `1px solid #6E6896` border; `8px` border-radius; `12px 16px` padding; `#FFFFFF` text; `#9B9BBD` placeholder; focus state = `#C5B8FF` border with `0 0 0 3px rgba(197, 184, 255, 0.1)` glow.

9. **Badges & labels:** `#DBFCE5` background for status badges (e.g., "Hiring"); `#0000EE` text; `5px 10px` padding; `17px` border-radius; apply Level 1 shadow for subtle lift.

10. **Final pass:** Verify all hex colors use UPPERCASE (#0000EE not #0000ee); ensure shadows use the three-layer model from section 6; validate spacing increments against the scale; check responsive breakpoints at 1440px, 1024px, 768px, 480px, and 320px; confirm typography line heights match specification exactly.