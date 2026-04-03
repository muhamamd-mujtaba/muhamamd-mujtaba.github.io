# Muhammad Mujtaba Portfolio

This site now uses Jekyll so the main pages stay clean and future blog posts are easier to manage.

## Add a New Blog Post

1. Create one new markdown file inside `_posts`.
2. Use the filename format `YYYY-MM-DD-article-11-title.md`.
3. Add front matter like this:

```yaml
---
title: "New Article Title"
description: "Article 11 of Muhammad Mujtaba's journey in Computer Engineering."
summary: "A short summary for the blog card."
article_number: 11
permalink: /posts/article-11.html
points:
  - "First key point"
  - "Second key point"
  - "Third key point"
tags:
  - Growth
  - Academics
footer_text: "Article 11 from My Journey in Computer Engineering."
footer_link_label: "View All Posts"
footer_link_url: /blog.html
---
```

4. Write the article content under the front matter.
5. Commit and push.

The blog page and individual post page will be generated automatically.
