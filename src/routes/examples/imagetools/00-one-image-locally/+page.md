---
title: 'One image locally'
images:
    - name: property_name
      image: './desert.webp'
      width: 800
---
# { title }

<Example images={images} property={property_name}>

### Markdown:
```markdown
![Just One Locally]({property_name.src})
```

![Just One Locally]({property_name.src})

</Example>

Just a single declaration generating one image from a locally referenced source _desert.webp_.
The object can be accessed by it's name: __property_name__ . It's transformed image can thus be referenced by __property_name.src__ .
Here is the full content of the object:
