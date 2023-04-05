const CMSCollections = [
  // Content collections
  {
    name: 'post',
    label: 'Blog Posts',
    folder: 'src/content/post',
    create: true,
    delete: true,
    extension: 'md',
    format: 'frontmatter',
    fields: [
      { name: 'title', widget: 'string', label: 'Post Title' },
      { name: 'gallery', label: 'Photo Gallery', required: false, widget: 'list', default: [] },
      { name: 'body', widget: 'markdown', label: 'Post Body' },
      { name: 'publishDate', widget: 'datetime', label: 'Publish Date' },
      { name: 'excerpt', widget: 'string', label: 'post Description' },
      { name: 'image', widget: 'image', label: 'post Image' },
      { name: 'tags', widget: 'list', default: ['term_1', 'term_2'], label: 'Tags' },
    ],
  },
  {
    name: 'settings',
    label: 'Settings',
    files: [
      {
        file: 'src/content/_Hero.json',
        label: 'Hero config',
        name: 'hero',
        fields: [
          {
            label: 'title',
            name: 'title',
            widget: 'string',
          },
          {
            label: 'title color',
            name: 'titleColor',
            widget: 'color',
            required: false,
          },
          {
            label: 'subtitle',
            name: 'subTitle',
            widget: 'string',
            required: false,
          },
          {
            label: 'subtitleColor',
            name: 'subTitleColor',
            widget: 'color',
            required: false,
          },
          {
            label: 'content',
            name: 'content',
            widget: 'markdown',
            required: false,
          },
          {
            label: 'image',
            name: 'image',
            widget: 'image',
            required: false,
          },
        ],
      },
    ],
  },
];

export default CMSCollections;
