---
title: 'Basic example'
---
# { title }

Spring Boot is an awesome framework based on Spring and everything can be done in Java.


### Markdown:
```markdown
Spring Boot is an awesome framework based on Spring and everything can be done in Java.
```

As you can see there's no markup for the links in here. It's being injected through the configuration in _mdsvex.config.js_:

```javascript
[
    remarkAutolinker,
    {
        debug: 'Default',
        all: true,
        caseInsensitive: true,
        links: [
            { key: 'Java', link: 'https://www.java.com/de/' },
            { key: 'Spring', link: 'https://spring.io/' },
            { key: 'Spring boot', link: 'https://spring.io/projects/spring-boot' }
        ]
    }
]
```
