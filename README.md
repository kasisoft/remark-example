[![StandWithUkraine][ukraine-svg]][ukraine-readme]

# Readme

This is a simple show case for the use of [remark-imagetools], [remark-svelte-auto-import] and [remark-autolinker]

# Demo

[![Netlify Status](https://api.netlify.com/api/v1/badges/9e5eb5c3-3cf5-4e23-bdc3-3f20b7602b63/deploy-status)](https://app.netlify.com/sites/remark-example/deploys)

Example deployment: **[Demo](https://remark-example.netlify.app/)**


# Usage

In order to run this example, use the following commands:

```bash
pnpm install
pnpm dev
```

You can see the examples in your browser:

* http://localhost:5173

__NOTE:__ The port number might differ if it's already occupied.


# Configuration

## vite.config.ts

Add the plugin _imagetools_ to this configuration as it provides the image processing functionality itself:

```javascript
export default defineConfig({
    plugins: [
        imagetools(),
        sveltekit()
    ]
});
```

## svelte.config.js

Add support for [mdsvex] to [svelte]:

```javascript
import mdsvexConfig from './mdsvex.config.js'

const config = {

    ...

    // Consult https://kit.svelte.dev/docs/integrations#preprocessors
    // for more information about preprocessors
    preprocess: [
        mdsvex(mdsvexConfig),
        vitePreprocess(),
    ],

    ...

};

```

## mdsvex.config.js

Configure the [remark] plugins:

```javascript
const config = defineConfig({

    ...

    remarkPlugins: [
        ...
        [
            remarkImagetools,
            {
                debug: Debug.None,
                presets: [
                    {
                        name: "mobile",
                        width: 300
                    }
                ]
            }
        ],
        [
            remarkSvelteAutoImport,
            {
                debug: ['ScriptBefore', 'ScriptAfter'],
                scriptTS: true,
                directories: [
                    'src/lib/components/'
                ],
                localComponents: {
                    'src/lib/': '$lib'
                },
                patterns: [
                    '**/*.svelte',
                    '**/*.svx'
                ]
            }
        ],
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
        ...
    ],

});
```



[mdsvex]: https://mdsvex.com
[remark]: https://github.com/remarkjs
[remark-autolinker]: https://github.com/kasisoft/remark-autolinker
[remark-imagetools]: https://github.com/kasisoft/remark-imagetools
[remark-svelte-auto-import]: https://github.com/kasisoft/remark-svelte-auto-import
[svelte]: https://svelte.dev/

[ukraine-readme]: https://github.com/vshymanskyy/StandWithUkraine/blob/main/docs/README.md
[ukraine-svg]: https://raw.githubusercontent.com/vshymanskyy/StandWithUkraine/main/badges/StandWithUkraine.svg
