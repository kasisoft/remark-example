---
title: Using an alternative format

images:
    - name: property_name
      image: '$lib/images/planet.webp'
      width: 800
      format: png
---
#  {title}

<Example images={images} property={property_name}>

### Markdown:
```markdown
![A different format]({property_name.src})
```

![A different format]({property_name.src})

</Example>

If you need a different format for whatever reason you can use the _format_ option.
The following formats are allowed:

* heic
* heif
* avif
* jpeg
* jpg
* png
* tiff
* webp
* gif

See also: https://github.com/JonasKruckenberg/imagetools/blob/main/docs/directives.md#format





