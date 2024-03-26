---
title: 'One image from lib'
images:
    - name: property_name
      image: '$lib/images/desert.webp'
      height: 460
---
# { title }

<Example images={images} property={property_name}>

### Markdown:
```markdown
![Just One referenced from lib]({property_name.src})
```

![Just One referenced from lib]({property_name.src})

</Example>


Just a single declaration generating one image from a locally referenced source _desert.webp_.
The object can be accessed by it's name: __property_name__ . It's transformed image can thus be referenced by __property_name.src__ .





