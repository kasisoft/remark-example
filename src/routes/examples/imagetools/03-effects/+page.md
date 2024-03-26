---
title: 'Apply effects to the images'
images:
    - name: property_name
      image: '$lib/images/planet.webp'
      width: 800
      options:
          - flip=true
          - grayscale
---
# { title }

<Example images={images} property={property_name}>

### Markdown:
```markdown
![Postprocessed image]({property_name.src})
```

![Postprocessed image]({property_name.src})

</Example>

In case you need some postprocessing you can provide various effects using _options_.
See also: https://github.com/JonasKruckenberg/imagetools/blob/main/docs/directives.md#directives
