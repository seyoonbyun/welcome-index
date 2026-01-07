# BNI Korea Member Onboarding Page - Design Guidelines

## Design Approach
**System Selected:** Material Design with professional adaptations
**Rationale:** Utility-focused resource hub requiring clear organization, scannable hierarchy, and efficient access to multiple links. This is an internal member tool, not a marketing page - clarity and usability are paramount.

## Layout Architecture

**Single-Page Resource Hub:**
- Maximum width: `max-w-5xl` centered
- Desktop padding: `px-8 py-16`
- Mobile padding: `px-4 py-8`
- Vertical rhythm: `space-y-12` between major sections

**Content Structure:**
1. Welcome header with brief orientation
2. Categorized resource cards (group the 13 links logically)
3. Quick reference footer

## Typography System

**Hierarchy:**
- Page Title: `text-4xl md:text-5xl font-bold` - "BNI Korea 멤버 온보딩"
- Category Headers: `text-2xl font-semibold`
- Link Titles: `text-lg font-medium`
- Descriptions: `text-base`
- Supporting Text: `text-sm`

**Font Stack:** System fonts for optimal Korean/English rendering
- Primary: `-apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans KR", sans-serif`

## Spacing Primitives
**Consistent units:** 4, 6, 8, 12, 16
- Card padding: `p-6`
- Section gaps: `gap-8`
- Internal spacing: `space-y-4`

## Component Library

**Resource Card Pattern:**
- Grid layout: `grid-cols-1 md:grid-cols-2 gap-6`
- Card structure: Elevated surface with `rounded-lg shadow-md` 
- Hover state: `hover:shadow-lg transition-shadow`
- Each card contains:
  - Icon or emoji indicator (use emoji for quick implementation: 💳 💼 📊 🏆 📚 🔗 💬 📺 🎙️ 📸 👥 🌐)
  - Bold link title
  - Brief description (1 sentence)
  - External link indicator

**Categorization (Group links into 3-4 categories):**
1. **필수 시스템** (Essential Systems): Membership payment, BNI Connect
2. **비즈니스 도구** (Business Tools): PowerTeam Toolkit, RPI Viewer, Training
3. **커뮤니티 & 챌린지** (Community): Guardian Challenge, Support channel
4. **공식 채널** (Official Channels): YouTube, Podcast, Social media, Websites

**Header Component:**
- Compact introduction: 2-3 sentences welcoming new members
- No hero image needed - this is a functional resource page
- CTA: "모든 리소스가 한 곳에" (All resources in one place)

**Link Treatment:**
- Each link opens in new tab (`target="_blank"`)
- Clear visual indicator for external links
- Accessible with keyboard navigation
- Icon + Text + Arrow pattern for clarity

**Footer:**
- Minimal: Support contact reference
- Copyright BNI Korea
- Quick links to most accessed resources (top 3)

## Accessibility Requirements
- All links have descriptive text, no "click here"
- Sufficient contrast for text on backgrounds
- Focus states clearly visible
- Logical tab order through resources
- Screen reader friendly structure with semantic HTML

## Images
**No hero image required** - this is a utility page focused on organized link presentation. Icons/emojis provide sufficient visual orientation.

## Mobile Optimization
- Stack cards single-column on mobile
- Larger touch targets (minimum 44px height)
- Readable text without zooming
- Sticky category navigation option for long lists

## Special Considerations
- Korean/English bilingual support in typography
- Professional, trustworthy appearance suitable for business networking context
- Fast loading - minimal assets
- Print-friendly layout for offline reference