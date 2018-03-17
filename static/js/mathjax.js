// Mathjax configuration.
window.MathJax = {
  tex2jax: {
    inlineMath: [['$','$'], ['\\(','\\)']],
    displayMath: [['$$','$$'], ['\\[','\\]']],
    processEscapes: true,
    processEnvironments: true,
    processRefs: true,
    menuSettings: { zoom: "Double-Click" },
    processClass: "math",
    skipTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code'],
  },
  TeX: {
    equationNumbers: { autoNumber: "AMS" },
    extensions: ["AMSmath.js", "AMSsymbols.js"],
  },
};
