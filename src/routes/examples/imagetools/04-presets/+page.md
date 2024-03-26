---
title: 'Using a configuration from a preset'
images:
    - name: property_name
      image: '$lib/images/planet.webp'
      preset: mobile
---
# { title }


<Example images={images} property={property_name}>

### Preset from mdsvex.config.js (originally in json)
```ỳaml
presets:
    - name: mobile
      width: 300
```

### Markdown:
```markdown
![Using preset mobile]({property_name.src})
```

![Using preset mobile]({property_name.src})

</Example>


This example works like all others with the difference that we're using a preconfigured image definition defined in _mdsvex.config.js_ providing the settings for the _remarkImagetools_ plugin.
All properties of these presets can be overridden within the frontmatter which always takes precedence.
