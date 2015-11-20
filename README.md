# Morphism Hugo Theme
**This theme is currently a work in progress and we do not recommend its use.**

Morphism is a minimalist blog theme for the 
[static site generator Hugo](https://gohugo.io).
It supports mathematical typesetting and embeddable Gists.  By
utilizing copious partial templates the theme is largely customizable.

## Tools

Pure.css powers the layout, MathJax the mathematical typesetting, and 
GitHub Gists for optional code syntax highlighting.

## Background 

Morphism began as an attempt to heavily customize the excellent 
[Redlounge theme](https://github.com/tmaiaroto/hugo-redlounge).

## Gists

Gists can be embedded using 
[Hugo shortcodes](https://gohugo.io/extras/shortcodes/).  In particular,
just include `{{< gist gist_sha1_hash >}}` in your Markdown to embed
a Gist.

## Page parameters

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


