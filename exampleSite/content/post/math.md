+++
author = "Hiro Protagonist"
date = "2015-12-09T17:23:10-07:00"
title = "Post with Mathematics"
math = true
toc = true
categories = ["mathjax", "latex"]
tags = ["debug", "sample"]

+++

This post contains some sample mathemematics rendered with MathJax.
We quite enjoy $\LaTeX$, and this allows us to a continue to write
mathematical blog posts with this familiar markup language.  As
example of inline math, we record two of the more beautiful expressions:
$e^{i \pi} + 1 = 0$ and $\frac{d}{dx}(e^x) = e^x$.

The tensor product construction for bisets induces a bilinear map 
$$
  -- \cdot_H -- \colon B(G,H) \times B(H, K) \to B(G, K), \quad ([X], [Y]) \mapsto [X \times_H Y].
$$

<!--more-->

To render the blog above we used:
```
$$
  -- \cdot_H -- \colon B(G,H) \times B(H, K) \to B(G, K), \quad ([X], [Y]) \mapsto [X \times_H Y].
$$
```

# Environments 

To use environments, such as the `equation` environment, we must escape the
initial slash.  So, for instance:
\\begin{equation}\label{eq:example}
  x^2 + 1 = 0 \iff x = \pm i
\\end{equation}
is typeset via
```
\\begin{equation}\label{eq:example}
  x^2 + 1 = 0 \iff x = \pm i
\\end{equation}
```

Suppose we wish to use an `align` environment.  The Hugo markdown processor
will convert the newline Latex `\\` to `\`.  One work around is to escape
both slashes.  Hence:
\\begin{align}
  x^2 &= 1 \\\\
  x^2 -1 &= 0 \\\\
  (x-1)(x+1) &= 0
\\end{align}
is typeset via
```
\\begin{align}
  x^2 &= 1 \\\\
  x^2 -1 &= 0 \\\\
  (x-1)(x+1) &= 0
\\end{align}
```

# Labels

We can reference  equation \\ref{eq:example}.

# Lists

Below is an example of a list with long items.

- This is item one.  It is not so long.
- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut vulputate magna. Curabitur maximus leo sit amet arcu congue, et aliquet felis dictum. Donec a ullamcorper neque. Nulla suscipit sollicitudin rutrum.
- Another shorter item.

# Header 1
## Header 2
### Header 3
#### Header 4
##### Header 5
