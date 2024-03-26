---
title: 'Multiple images for different viewports'
images:
    - name: property_name
      image: '$lib/images/fjord.webp'
      width: 800
      height: [200, 400]
---
# {title}

<Example images={images} property={property_name}>

### Markdown:
```markdown
![First object]({property_name.at(0).src})
![Second object]({property_name.at(1).src})
```

![First object]({property_name.at(0).src})
![Second object]({property_name.at(1).src})

</Example>

Here we're generating multiple images which happens whenever you use square brackets for either _width_ or _height_.
The images in the returned array come out in this order:

* width[0] - height[0]
* width[1] - height[0]
* width[0] - height[1]
* width[1] - height[1]
* ...

The order of the sizes will be sorted by the plugin so the first width is always the smallest (same goes for the heights).

__NOTE:__ In the case of _mdsvex_ you need to reference an item using the _at_ function. For instance: _property_name.at(1).src_ .
(see [#551](https://github.com/pngwn/MDsveX/issues/551)).
