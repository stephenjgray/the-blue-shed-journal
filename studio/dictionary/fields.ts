import { studioConfig } from '../config'

const isPortuguese = studioConfig.language === 'pt-BR'

export const fields = {
  // Author fields
  name: 'Name',
  slug: 'Slug',
  avatar: 'Avatar',
  role: 'Role',
  bio: 'Bio',
  fullBio: 'Full Biography',
  featuredImage: 'Featured Image',
  socialLinks: 'Social Links',
  email: 'Email',
  platform: 'Platform',
  url: 'URL',
  username: 'Username',
  alt: 'Alt Text',
  // Category fields
  title: 'Title',
  description: 'Description',
  // Page fields
  metaDescription: 'Meta Description',
  ogImage: 'Social Media Image',
  pageBuilder: 'Page Builder',
  // BlogPage fields
  pageTitle: 'Page Title',
  pageDescription: 'Page Description',
  layout: 'Layout',
  postsPerPage: 'Posts per Page',
  featuredPostsCount: 'Featured Posts Count',
  showOnlyFeaturedPosts: 'Show Only Featured Posts',
  seo: 'SEO Settings',
  metaTitle: 'Meta Title',
  // BlogPost fields
  publishedAt: 'Published at',
  excerpt: 'Excerpt',
  authors: 'Authors',
  mainImage: 'Main Image',
  categories: 'Categories',
  body: 'Content',
  featured: 'Featured Post',
  caption: 'Caption',
  // BlogSection fields
  heading: 'Heading',
  subheading: 'Subheading',
  variant: 'Layout Variant',
  postsToShow: 'Number of Posts to Show',
  showFeaturedPostLarge: 'Show Featured Post Large',
  featuredPostsOnly: 'Show Only Featured Posts',
  viewAllButton: isPortuguese ? 'Exibir Botão \'Ver Todos\'' : 'Show View All Button',
  viewAllUrl: isPortuguese ? 'URL para \'Ver Todos\'' : 'View All URL',
  viewAllButtonText: isPortuguese ? 'Texto do Botão \'Ver Todos\'' : 'View All Button Text',
  // CasesSection fields
  cases: 'Case Studies/Logos',
  websiteUrl: 'Website URL',
  // CompareFeature fields
  featureTitle: 'Feature Title',
  // CompareFeaturesSection fields
  badgeText: 'Badge Text',
  features: 'Features to Compare',
  plans: 'Plans to Compare',
  planTitle: 'Plan Title',
  planDescription: 'Plan Description',
  price: 'Price',
  billingPeriod: 'Billing Period',
  highlighted: 'Highlight This Plan',
  featureValues: 'Feature Values',
  feature: 'Feature',
  valueStatus: 'Status / Value',
  customText: 'Custom Text',
  buttonText: 'Button Text',
  buttonUrl: 'Button URL',
  buttonIcon: 'Button Icon',
  buttonVariant: 'Button Variant',
  footnote: 'Footnote',
  // ContactSection fields
  formTitle: 'Form Title',
  formFields: 'Form Fields',
  showDate: 'Show Date Picker',
  showFirstName: 'Show First Name Field',
  showLastName: 'Show Last Name Field',
  showFileUpload: 'Show File Upload Field',
  fileUploadLabel: 'File Upload Label',
  // CtaSection fields
  buttons: 'Buttons',
  label: 'Label',
  icon: 'Icon',
  // FaqSection fields
  faqItems: 'FAQ Items',
  question: 'Question',
  answer: 'Answer',
  // FeatureSection fields
  image: 'Image',
  comparisonImage: 'Comparison Image',
  featureDescription: 'Feature Description',
  highlightedFeature: 'Highlighted (Wide Card)',
  featureImage: 'Feature Image',
  // HeroSection fields
  bannerButton: 'Banner Button',
  media: 'Media',
  mediaType: 'Type',
  video: 'Video',
  videoUrl: 'Video URL',
  autoplay: 'Autoplay',
  loop: 'Loop',
  muted: 'Muted',
  additionalImages: 'Additional Images',
  // NewsletterSection fields
  inputPlaceholder: 'Input Placeholder',
  successMessage: 'Success Message',
  privacyText: 'Privacy Text',
  // PricingSection fields
  pricingPlans: 'Pricing Plans',
  pricingFeatures: 'Features',
  // StatsSection fields
  contentHeading: 'Content Heading',
  contentText: 'Content Text',
  stats: 'Statistics',
  value: 'Value',
  trendDirection: 'Trend Direction',
  trendValue: 'Trend Value',
  color: 'Icon Color',
  // TestimonialsSection fields
  testimonials: 'Testimonials',
  content: 'Content',
  author: 'Author Name',
  authorRole: 'Author Role/Company',
  authorAvatar: 'Author Avatar',
  // CodeBlock fields
  code: 'Code',
  highlightLines: 'Highlight Lines',
  showLineNumbers: 'Show Line Numbers',
  // PortableText fields
  href: 'URL',
  blank: 'Open in new tab',
  // Header fields
  siteName: 'Site Name',
  logo: 'Logo',
  navigationItems: 'Navigation Items',
  ctaButtons: 'CTA Buttons',
  dropdownCTALabel: 'Dropdown CTA Label',
  dropdownCTAUrl: 'Dropdown CTA URL',
  items: 'Dropdown Items',
  // Footer fields
  footerDescription: 'Footer Description',
  address: 'Address Lines',
  legalLinks: 'Legal Links',
  subItems: 'Sub Links',
} as const

export const groups = {
  identity: 'Identity',
  biography: 'Biography',
  contact: 'Contact & Social Media',
  basic: 'Basic Information',
  seo: 'SEO & Sharing',
  content: 'Page Content',
  display: 'Display Options',
  seoSettings: 'SEO Settings',
  metadata: 'Metadata',
  media: 'Media',
  appearance: 'Appearance',
  options: 'Options',
  cases: 'Cases',
  features: 'Features',
  form: 'Form Settings',
  actions: 'Call to Action',
  questions: 'FAQ Items',
} as const

export const sections = {
} as const

export const documents = {
  author: 'Author',
  category: 'Category',
  page: 'Page',
  blogPage: 'Blog Page',
  blogPost: 'Blog Post',
  blogSection: 'Blog Section',
  casesSection: 'Cases Section',
  compareFeature: 'Compare Feature',
  compareFeaturesSection: 'Compare Features Section',
  contactSection: 'Contact Section',
  ctaSection: 'CTA Section',
  faqSection: 'FAQ Section',
  featureSection: 'Feature Section',
  heroSection: 'Hero Section',
  newsletterSection: 'Newsletter Section',
  pricingSection: 'Pricing Section',
  statsSection: 'Statistics Section',
  testimonialsSection: 'Testimonials Section',
  codeBlock: 'Code Block',
  portableText: 'Content',
  header: 'Header',
  footer: 'Footer',
} as const
