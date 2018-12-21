---
title: "{{ replace .TranslationBaseName "-" " " | title }}"
date: {{ .Date }}
description: sample desc
draft: true
math: true
toc:  false 
categories: []
tags: []
markup: mmark
slug: {{ lower (getenv "SLUG") }}

---
