---
title: "{{ replace .TranslationBaseName "-" " " | title }}"
date: {{ .Date }}
description: sample desc
draft: true
math: true
toc:  false 
categories: []
groups: []
tags: []
series: []
markup: mmark
slug: {{ lower (getenv "SLUG") }}

---
