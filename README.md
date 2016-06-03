# Morphism Hugo Theme

Morphism is a aesthetically minimal blog theme for the 
[static site generator Hugo](https://gohugo.io) that supports mathematical
typesetting. By utilizing copious partial templates the theme is 
largely customizable.

## Math

MathJax powers mathematical typesetting.  The TeX delimeters `$`
and `$$` can be used for inline / display math, respectively, or the escaped
LaTeX symbols `\\( ... \\)` and `\\[ ... \\]`.

## Color themes

Morphism provides a few built-in color themes, while also allowing for
user defined themes.  To use a color theme, set the site parameter
`morphismColorTheme` to the base color theme name.  
The list of built-in themes is: `midnight-blue`, `dark-midnight-blue`,
`default`, `black`, `orange`. 
For example, to use  the built-in `midnight-blue` color theme, 
your `config.toml` should include the snippet:

```toml
[params]
  colortheme = "midnight-blue"
```

This will tell Morphism to load the `css/morphism/colorthemes/midnight-blue.css`
file. Since Hugo gives preference to assets defined by the main site first,
and the theme second, Morphism's `midnight-blue` color theme can be 
overridden by simply copying the file into your site's 
`css/morphism/colorthemes/` directory and
manipulating the various color values to your tastes.

### User defined color themes

Similarly, you can set the value of `morphismColorTheme` 
to whatever you choose and create the corresponding css color theme file.  
For example
```toml
[params]
  colortheme = "mytheme"
```
will load `css/morphism/colorthemes/mytheme.css`


## Site Variables

This theme recognizes and attempts to use several Site variables, as follows:

- `author` map:  The theme uses the `name` and `uri` keys of the site author
   map for pages that do not explicitly set author data.  The `name`
   value is wrapped in the uri, if the later is set.  See the example site
   config to see how this is set.

- `copyright` html string:  If the Site variable Copyright is set, the notice
  will be displayed in the footer.


## Site Parameters

The site wide user defined parameters that this theme recognizes are:

- `displayArchiveDates` bool: If true, post titles in the archive 
  (post list pages) will display a date.

- `displayDefaultAuthor` bool: If true and the `author` site variable is set,
  posts will display the site author.  The `author` page parameter will
  override this setting.  

- `indexPostLimit` integer (defaults to 50): Limits the number of posts
   that will be displayed (and paginated) on the index page.

- `indexPaginatorPageSize` integer (defaults to 10): The number of posts each
   paginated page of the index contains.  Set equal to `indexPostLimit`
   to force no pagination.

- `listPaginatorPageSize` integer (defaults to a very large value): Set the number of pages
   to include in each page of content rendered with the `list` template, such
   as the post archive.  For example, if the entire blog has 100 posts and
   the value of `listPaginatorPageSize` is set to 50, then there will be 2 pages
   in the post archive.
- `subtitle` string: This is displayed under the main title. 

- `showPoweredBy` boolean: if true, display a shoutout to Hugo and this theme.

- `showPostTimes` bool: Set display dates and times in a post's header.

## Page Parameters

- `author` map:  This param should be structured identically to the site
   author map (see above).  If provided, the page will display the data in the
   `name` and `uri` keys.  Otherwise, the site author map is used.  

   
- `hideDate` boolean: if true, do not display a page date.  When `meta` is set to
  true, `hideDate` takes greater precedence.

- `hideReadTime` boolean: if true, do not display the page's reading time
  estimate.  When `meta` is set to true, `hideReadTime` takes greater precedence.

- `nomath` boolean: if true, Math will not be rendered for the page.  This can
   speed up some page loads.  As the theme assumes a math-centric blog, math
   is rendered by default.

- `nometa` boolean: if true, do not display page metadata such as 
   author, date, categories provided
   these page parameters exist and are not overridden.

- `notoc` boolean: if true, do not display a page's table of contents.


