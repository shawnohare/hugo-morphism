# Morphism Hugo Theme

Morphism is a minimalist, clean blog theme for the 
[static site generator Hugo](https://gohugo.io) that supports mathematical
typesetting. By utilizing copious partial templates the theme is 
largely customizable.

## Math

MathJax powers mathematical typesetting.  The TeX delimeters `$`
and `$$` can be used for inline / display math, respectively, or the escaped
LaTeX symbols `\\( ... \\)` and `\\[ ... \\]`.

## Site Parameters

The site specific parameters that this theme recognizes are:

- `subtitle` string: This is displayed under the main title. 
- `showPoweredBy` boolean: if true, display a shoutout to Hugo and this theme.
- `copyrightHolder` string: Inserts the value in the default copyright notice.
- `copyright` string: Custom copyright notice.

## Page Parameters

- `listPaginatorLimit` integer (defaults to 10,000): Set the number of pages
   to include in each page of content rendered with the `list` template, such
   as the post archive.  For example, if the entire blog has 100 posts and
   the value of `listPaginatorLimit` is set to 50, then there will be 2 pages
   in the post archive.
- `hideDate` boolean: if true, do not display a page date.  When `meta` is set to
  true, `hideDate` takes greater precedence.
- `hideReadTime` boolean: if true, do not display the page's reading time
  estimate.  When `meta` is set to true, `hideReadTime` takes greater precedence.
- `math` boolean: if true, try to render the page's LaTeX code using MatheJax. The
  theme follows the conventions in [Hugo's MathJax tutorial].
- `meta` boolean: if true, display page meta-data author, date, categories provided
  these page parameters exist and are not overridden.  Content in the `/post` directory,
  (i.e., pages of type "post") ignore this parameter.
- `toc` boolean: if true, display the table of contents for the page.


