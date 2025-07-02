import {StructureBuilder} from 'sanity/structure'
import {studioConfig} from '../config'

const isPortuguese = studioConfig.language === 'pt-BR'

const labels = {
  content: 'Content',
  pages: 'Pages',
  pagesByLanguage: 'Pages by Language',
  portuguese: 'Português (Brasil)',
  english: 'English',
  blog: 'Blog',
  blogContent: 'Blog Content',
  posts: 'Posts',
  postsByLanguage: 'Posts by Language',
  authors: 'Authors',
  authorsByLanguage: 'Authors by Language',
  categories: 'Categories',
  categoriesByLanguage: 'Categories by Language',
  blogSettings: 'Blog Settings',
  blogSettingsByLanguage: 'Blog Settings by Language',
  siteConfiguration: 'Site Configuration',
  headers: 'Headers',
  headersByLanguage: 'Headers by Language',
  footers: 'Footers',
  footersByLanguage: 'Footers by Language',
  reusableContent: 'Reusable Content',
  compareFeatures: 'Compare Features',
}

export const structure = (S: StructureBuilder) =>
  S.list()
    .title(labels.content)
    .items([
      // Pages
      S.listItem()
        .title(labels.pages)
        .child(S.documentList().title(labels.pages).filter('_type == "page"')),
      S.divider(),
      // Blog
      S.listItem()
        .title(labels.blog)
        .child(
          S.list()
            .title(labels.blogContent)
            .items([
              S.listItem()
                .title(labels.posts)
                .child(S.documentList().title(labels.posts).filter('_type == "blogPost"')),
              S.listItem()
                .title(labels.authors)
                .child(S.documentList().title(labels.authors).filter('_type == "author"')),
              S.listItem()
                .title(labels.categories)
                .child(S.documentList().title(labels.categories).filter('_type == "category"')),
              S.listItem()
                .title(labels.blogSettings)
                .child(S.documentList().title(labels.blogSettings).filter('_type == "blogPage"')),
            ]),
        ),
      S.divider(),
      // Site Configuration
      S.listItem()
        .title(labels.siteConfiguration)
        .child(
          S.list()
            .title(labels.siteConfiguration)
            .items([
              S.listItem()
                .title(labels.headers)
                .child(S.documentList().title(labels.headers).filter('_type == "header"')),
              S.listItem()
                .title(labels.footers)
                .child(S.documentList().title(labels.footers).filter('_type == "footer"')),
            ]),
        ),
      S.divider(),
      // Reusable Content
      S.listItem()
        .title(labels.reusableContent)
        .child(S.documentTypeList('compareFeature').title(labels.compareFeatures)),
    ])
