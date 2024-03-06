<script lang="ts">
    export let data: any;
</script>

<svelte:head>
    <title>Remark Imagetools Example</title>
</svelte:head>

<div>
    <div>
        <h1>Examples</h1>
        <ul>
            {#each data.records as {link, title} (link)}
                <li><a href={link}>{title}</a></li>
            {/each}
        </ul>
    </div>
    <div>
        <h1>Resources</h1>
        <ul>
            <li><a href="https://github.com/kasisoft/remark-imagetools" target="_blank">Remark Imagetools</a></li>
            <li><a href="https://github.com/JonasKruckenberg/imagetools" target="_blank">Imagetools</a></li>
            <li><a href="https://github.com/kasisoft/remark-svelte-auto-import" target="_blank">Remark Svelte Auto Import</a></li>
            <li><a href="https://mdsvex.pngwn.io/" target="_blank">MDSVex</a></li>
            <li><a href="https://svelte.dev/" target="_blank">Svelte</a></li>
        </ul>
    </div>
</div>
