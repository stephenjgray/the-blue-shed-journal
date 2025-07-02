import { studioConfig } from '../config'

const isPortuguese = studioConfig.language === 'pt-BR'

export const sanityOptions = {
  // Social media platforms
  socialPlatforms: [
    { 
      title: 'Twitter', 
      value: 'twitter' 
    },
    { 
      title: 'LinkedIn', 
      value: 'linkedin' 
    },
    { 
      title: 'GitHub', 
      value: 'github' 
    },
    { 
      title: 'Instagram', 
      value: 'instagram' 
    },
    { 
      title: 'Personal Website', 
      value: 'website' 
    },
    { 
      title: 'YouTube', 
      value: 'youtube' 
    },
  ],
  // BlogPage layout options
  blogLayouts: [
    { 
      title: 'Default Grid', 
      value: 'grid' 
    },
    { 
      title: 'Featured Posts', 
      value: 'featured' 
    },
    { 
      title: 'Compact List', 
      value: 'compact' 
    },
  ],
  // Yes/No options
  yesNo: [
    { 
      title: 'Yes', 
      value: 'true' 
    },
    { 
      title: 'No', 
      value: 'false' 
    },
  ],
  // BlogSection variant options
  blogSectionVariants: [
    { 
      title: 'Default with Featured Post', 
      value: 'default' 
    },
    { 
      title: 'Grid Layout (4 columns)', 
      value: 'grid' 
    },
  ],
  // CasesSection variant options
  casesSectionVariants: [
    { 
      title: 'Logo Carousel', 
      value: 'logoCarousel' 
    },
    { 
      title: 'Compact Slider', 
      value: 'compactSlider' 
    },
  ],
  // CompareFeaturesSection options
  featureValueOptions: [
    { 
      title: '✓ Included', 
      value: 'true' 
    },
    { 
      title: '✗ Not included', 
      value: 'false' 
    },
    { 
      title: 'Custom Text', 
      value: 'custom' 
    },
  ],
  buttonIconOptions: [
    { 
      title: 'Arrow Right', 
      value: 'arrowRight' 
    },
    { 
      title: 'Phone', 
      value: 'phone' 
    },
    { 
      title: 'Plus', 
      value: 'plus' 
    },
  ],
  buttonVariantOptions: [
    { 
      title: 'Default', 
      value: 'default' 
    },
    { 
      title: 'Secondary', 
      value: 'secondary' 
    },
    { 
      title: 'Outline', 
      value: 'outline' 
    },
    { 
      title: 'Ghost', 
      value: 'ghost' 
    },
    { 
      title: 'Link', 
      value: 'link' 
    },
  ],
  // ContactSection options
  contactButtonIconOptions: [
    { 
      title: 'Arrow Right', 
      value: 'arrowRight' 
    },
    { 
      title: 'Phone', 
      value: 'phone' 
    },
    { 
      title: 'None', 
      value: 'none' 
    },
  ],
  // CtaSection options
  ctaSectionVariants: [
    { 
      title: 'Default', 
      value: 'default' 
    },
    { 
      title: 'Highlight', 
      value: 'highlight' 
    },
    { 
      title: 'Minimal', 
      value: 'minimal' 
    },
    { 
      title: 'Full', 
      value: 'full' 
    },
  ],
  ctaButtonIconOptions: [
    { 
      title: 'None', 
      value: 'none' 
    },
    { 
      title: 'Arrow Right', 
      value: 'arrowRight' 
    },
    { 
      title: 'Phone', 
      value: 'phone' 
    },
    { 
      title: 'Plus', 
      value: 'plus' 
    },
  ],
  // FaqSection options
  faqLayoutVariants: [
    { 
      title: 'Side by Side', 
      value: 'sideBySide' 
    },
    { 
      title: 'Centered', 
      value: 'centered' 
    },
  ],
  faqButtonIconOptions: [
    { 
      title: 'None', 
      value: 'none' 
    },
    { 
      title: 'Phone', 
      value: 'phone' 
    },
    { 
      title: 'Arrow Right', 
      value: 'arrowRight' 
    },
    { 
      title: 'Plus', 
      value: 'plus' 
    },
    { 
      title: 'Check', 
      value: 'check' 
    },
  ],
  // FeatureSection options
  featureLayoutVariants: [
    { 
      title: 'Default', 
      value: 'default' 
    },
    { 
      title: 'With Image', 
      value: 'withImage' 
    },
    { 
      title: 'Left Image', 
      value: 'leftImage' 
    },
    { 
      title: 'Right Image', 
      value: 'rightImage' 
    },
    { 
      title: 'Image Cards', 
      value: 'imageCards' 
    },
    { 
      title: 'Masonry Grid', 
      value: 'masonryGrid' 
    },
    { 
      title: 'Big Masonry Grid', 
      value: 'bigMasonryGrid' 
    },
    { 
      title: 'Carousel Feature', 
      value: 'carouselFeature' 
    },
    { 
      title: 'Sliding Comparison', 
      value: 'slidingComparison' 
    },
  ],
  featureIconOptions: [
    { 
      title: 'User', 
      value: 'user' 
    },
    { 
      title: 'Settings', 
      value: 'settings' 
    },
    { 
      title: 'Lock', 
      value: 'lock' 
    },
    { 
      title: 'Star', 
      value: 'star' 
    },
    { 
      title: 'Heart', 
      value: 'heart' 
    },
    { 
      title: 'Bar Chart', 
      value: 'barChart' 
    },
    { 
      title: 'Dollar', 
      value: 'dollar' 
    },
    { 
      title: 'Calendar', 
      value: 'calendar' 
    },
    { 
      title: 'Clock', 
      value: 'clock' 
    },
    { 
      title: 'Mail', 
      value: 'mail' 
    },
  ],
  // HeroSection options
  heroVariants: [
    { 
      title: 'Button Banner', 
      value: 'buttonBanner' 
    },
    { 
      title: 'Badge Banner', 
      value: 'badgeBanner' 
    },
    { 
      title: 'Grid Gallery', 
      value: 'gridGallery' 
    },
  ],
  heroButtonIconOptions: [
    { 
      title: 'Phone', 
      value: 'phone' 
    },
    { 
      title: 'Arrow Right', 
      value: 'arrowRight' 
    },
    { 
      title: 'Plus', 
      value: 'plus' 
    },
    { 
      title: 'Check', 
      value: 'check' 
    },
    { 
      title: 'Heart', 
      value: 'heart' 
    },
    { 
      title: 'Star', 
      value: 'star' 
    },
    { 
      title: 'Search', 
      value: 'search' 
    },
    { 
      title: 'Settings', 
      value: 'settings' 
    },
    { 
      title: 'Mail', 
      value: 'mail' 
    },
    { 
      title: 'Calendar', 
      value: 'calendar' 
    },
  ],
  heroMediaTypes: [
    { 
      title: 'Image', 
      value: 'image' 
    },
    { 
      title: 'Video', 
      value: 'video' 
    },
    { 
      title: 'Placeholder', 
      value: 'placeholder' 
    },
  ],
  // NewsletterSection options
  newsletterVariants: [
    { 
      title: 'Default', 
      value: 'default' 
    },
    { 
      title: 'Highlight', 
      value: 'highlight' 
    },
    { 
      title: 'Minimal', 
      value: 'minimal' 
    },
    { 
      title: 'Full', 
      value: 'full' 
    },
  ],
  newsletterButtonIconOptions: [
    { 
      title: 'None', 
      value: 'none' 
    },
    { 
      title: 'Arrow Right', 
      value: 'arrowRight' 
    },
    { 
      title: 'Plus', 
      value: 'plus' 
    },
    { 
      title: 'Mail', 
      value: 'mail' 
    },
  ],
  // PricingSection options
  pricingButtonIconOptions: [
    { 
      title: 'Arrow Right', 
      value: 'arrowRight' 
    },
    { 
      title: 'Phone', 
      value: 'phone' 
    },
    { 
      title: 'Plus', 
      value: 'plus' 
    },
  ],
  pricingButtonVariantOptions: [
    { 
      title: 'Default', 
      value: 'default' 
    },
    { 
      title: 'Outline', 
      value: 'outline' 
    },
    { 
      title: 'Secondary', 
      value: 'secondary' 
    },
  ],
  // StatsSection options
  statsVariants: [
    { 
      title: 'Statistics Grid', 
      value: 'grid' 
    },
    { 
      title: 'Statistics with Content', 
      value: 'withContent' 
    },
  ],
  trendDirections: [
    { 
      title: 'Up', 
      value: 'up' 
    },
    { 
      title: 'Down', 
      value: 'down' 
    },
    { 
      title: 'None', 
      value: 'none' 
    },
  ],
  iconColors: [
    { 
      title: 'Primary', 
      value: 'primary' 
    },
    { 
      title: 'Success', 
      value: 'success' 
    },
    { 
      title: 'Warning', 
      value: 'warning' 
    },
    { 
      title: 'Destructive', 
      value: 'destructive' 
    },
    { 
      title: 'Muted', 
      value: 'muted' 
    },
  ],
  // TestimonialsSection options
  testimonialsVariants: [
    { 
      title: 'Carousel', 
      value: 'carousel' 
    },
    { 
      title: 'Grid', 
      value: 'grid' 
    },
    { 
      title: 'Masonry Grid', 
      value: 'masonry-grid' 
    },
  ],
  // CodeBlock options
  codeLanguages: [
    { title: 'TypeScript', value: 'typescript' },
    { title: 'JavaScript', value: 'javascript' },
    { title: 'HTML', value: 'html' },
    { title: 'CSS', value: 'css' },
    { title: 'SCSS', value: 'scss' },
    { title: 'JSX', value: 'jsx' },
    { title: 'TSX', value: 'tsx' },
    { title: 'Shell', value: 'shell' },
    { title: 'Markdown', value: 'markdown' },
    { title: 'JSON', value: 'json' },
    { title: 'Python', value: 'python' },
    { title: 'Ruby', value: 'ruby' },
    { title: 'PHP', value: 'php' },
    { title: 'Go', value: 'go' },
    { title: 'Java', value: 'java' },
    { title: 'C', value: 'c' },
    { title: 'C++', value: 'cpp' },
    { title: 'C#', value: 'csharp' },
    { 
      title: 'Plain Text', 
      value: 'text' 
    },
  ],
  // PortableText options
  blockStyles: [
    { title: 'Normal', value: 'normal' },
    { title: 'Heading 1', value: 'h1' },
    { title: 'Heading 2', value: 'h2' },
    { title: 'Heading 3', value: 'h3' },
    { title: 'Heading 4', value: 'h4' },
    { title: 'Quote', value: 'blockquote' },
  ],
  listStyles: [
    { title: 'Bullet', value: 'bullet' },
    { title: 'Numbered', value: 'number' },
  ],
  textDecorators: [
    { title: 'Strong', value: 'strong' },
    { title: 'Emphasis', value: 'em' },
    { title: 'Code', value: 'code' },
    { title: 'Underline', value: 'underline' },
    { title: 'Strike-through', value: 'strike-through' },
  ],
  // Header options
  headerVariants: [
    { title: 'Default', value: 'default' },
    { title: 'Centered', value: 'centered' },
    { title: 'Minimal', value: 'minimal' },
    { title: 'Transparent', value: 'transparent' },
  ],
  headerButtonVariants: [
    { title: 'Default', value: 'default' },
    { title: 'Outline', value: 'outline' },
    { title: 'Secondary', value: 'secondary' },
    { title: 'Ghost', value: 'ghost' },
    { title: 'Link', value: 'link' },
  ],
  // Footer options
  footerVariants: [
    { title: 'Simple', value: 'simple' },
    { title: 'Minimal', value: 'minimal' },
    { title: 'Tiny', value: 'tiny' },
  ],
}