// @see https://mdsvex.com/docs#options
import { defineMDSveXConfig as defineConfig } from 'mdsvex';
import { remarkImagetools } from '@kasisoft/remark-imagetools';
import { remarkSvelteAutoImport } from '@kasisoft/remark-svelte-auto-import';

const config = defineConfig({

    extensions: ['.svelte.md', '.md', '.svx'],

    remarkPlugins: [
        [
            remarkImagetools,
            {
                debug: ['ScriptBefore', 'ScriptAfter'],
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
    ],

});

export default config;
