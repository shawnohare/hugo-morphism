# Morphism Hugo Theme

`hugo-morphism` is a aesthetically minimalist, content first blog theme for the
[static site generator Hugo](https://gohugo.io) that supports mathematical
typesetting. By utilizing partial templates and Go template blocks, the theme is
largely customizable while remaining relatively simple.

Except for what is required for mathematical typesetting, this theme utilizes
no external dependencies of Javascript. This is done partly to respect visitor
privacy.

# Use

Note that this is primarily a personal theme, so expect high volatility.

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

- `listPaginatorLimit` int: The maximum number of items to appear on each list
  page.

- `subtitle` string: This is displayed under the main title.

- `showFooter` boolean: if true, display footer content on each page.

- `showPoweredBy` boolean: if true, display a shoutout to Hugo and this theme.

- `[[menu.footer]]` Footer navigation menu.

- `[[menu.index]]` Menu displayed only on the index page.

- `[[menu.nav]]` Site navigation menu.



## Page Parameters

- `author` map:  This param should be structured identically to the site
   author map (see above).  If provided, the page will display the data in the
   `name` and `uri` keys.  Otherwise, the site author map is used.

- `math` boolean indicating if mathematics is present. If false, Mathjax
  Javascript will not be loaded.

- `ignoreMeta` boolean: if true, do not display page metadata such as
   author, date, categories provided these page parameters exist and are not
   overridden.

- `toc` boolean: if true, display a page's table of contents.
