# Morphism Hugo Theme

`hugo-morphism` is a aesthetically minimalist, content first blog theme for the
[static site generator Hugo](https://gohugo.io) that supports mathematical
typesetting. By utilizing partial templates and Go template blocks, the theme is
largely customizable while remaining relatively simple.

Hugo supports several features that this theme eschews by default such as
Disqus comments and Google analytics.  This is done in an effort to limit
dependencies and respect visitor privacy. However, these features can
be easily activated by overriding partial templates such as
`partials/content/comments.html`.

## Math

MathJax powers mathematical typesetting.  The TeX delimeters `$`
and `$$` can be used for inline / display math, respectively, or the escaped
LaTeX symbols `\\( ... \\)` and `\\[ ... \\]`.

## Site Variables

This theme recognizes and attempts to use several Site variables that
Hugo provides, as follows:

- `author` map:  The theme uses the `name` and `uri` keys of the site author
   map for pages that do not explicitly set author data.  The `name`
   value is wrapped in the uri, if the later is set. For example,
   to set this in your `config.toml`:
   ```toml
   [author]
       name="Shawn O'Hare"
       uri="https://www.shawnohare.com"
    ```

- `copyright` html string:  If the Site variable Copyright is set, the notice
  will be displayed in the footer.


## Site Parameters

The site wide user defined parameters that this theme recognizes are:

- `brandLogo` (TODO)

- `datetimeLayout` string:
   A [datetime layout](https://golang.org/pkg/time/#Time.Format)
   Defaults to "January 2, 2006 15:04".  Note that the time part is optional.
   If no time is referenced in the layout, times will be omitted.

- `displayArchiveDates` bool: If true, post titles in the archive
  (post list pages) will display a date.

- `indexItemLimit` integer (defaults to 15): Limits the number of page items
   that will display on the homepage as recent activity.

- `subtitle` string: This is displayed under the main title.

- `showPoweredBy` boolean: if true, display a shoutout to Hugo and this theme.


## Page Parameters

- `author` map:  This param should be structured identically to the site
   author map (see above).  If provided, the page will display the data in the
   `name` and `uri` keys.  Otherwise, the site author map is used.

- `hideDate` boolean: if true, do not display a page date.  When `meta` is set to
  true, `hideDate` takes greater precedence.

- `nomath` boolean: if true, Math will not be rendered for the page.  This can
   speed up some page loads.  As the theme assumes a math-centric blog, math
   is rendered by default.

- `nometa` boolean: if true, do not display page metadata such as
   author, date, categories provided
   these page parameters exist and are not overridden.

- `notoc` boolean: if true, do not display a page's table of contents.


