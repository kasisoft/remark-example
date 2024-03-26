<script lang="ts">
    export let data: any;
</script>

<svelte:head>
    <title>Remark Imagetools Example</title>
</svelte:head>

<div>
    <h1>remark-imagetools</h1>
    <div>
        <h2>Examples</h2>
        <ul>
            {#each data.records.imagetools as {link, title} (link)}
                <li><a href={link}>{title}</a></li>
            {/each}
        </ul>
    </div>
    <div>
        <h2>Resources</h2>
        <ul>
            <li><a href="https://github.com/kasisoft/remark-imagetools" target="_blank">Remark Imagetools</a></li>
            <li><a href="https://github.com/JonasKruckenberg/imagetools" target="_blank">Imagetools</a></li>
            <li><a href="https://github.com/kasisoft/remark-svelte-auto-import" target="_blank">Remark Svelte Auto Import</a></li>
        </ul>
    </div>
</div>

<hr/>

<div>
    <h1>remark-autolinker</h1>
    <div>
        <h2>Examples</h2>
        <ul>
            {#each data.records.autolinker as {link, title} (link)}
                <li><a href={link}>{title}</a></li>
            {/each}
        </ul>
    </div>
    <div>
        <h2>Resources</h2>
        <ul>
            <li><a href="https://github.com/kasisoft/remark-autolinker" target="_blank">Remark Autolinker</a></li>
            <li><a href="https://mdsvex.pngwn.io/" target="_blank">MDSVex</a></li>
            <li><a href="https://svelte.dev/" target="_blank">Svelte</a></li>
        </ul>
    </div>
</div>

<hr/>

<div>
    <h1>Common Resources</h1>
    <div>
        <ul>
            <li><a href="https://mdsvex.pngwn.io/" target="_blank">MDSVex</a></li>
            <li><a href="https://svelte.dev/" target="_blank">Svelte</a></li>
        </ul>
    </div>
</div>


<style lang="postcss">
    div {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
    h1 {
        grid-column: span 2;
    }
    h2 {
        font-size: 1.5rem;
        font-weight: 500;
    }
    div > div {
        display: flex;
        flex-direction: column;
    }
</style>
