<script lang="ts">

    import Yaml from '$lib/components/Yaml.svelte';
    import Json from '$lib/components/Json.svelte';

    export let images;
    export let property;

</script>

<div>
    <div>
        <slot />
    </div>
    <div>
        <Yaml obj={images} />
        <Json obj={property} />
    </div>
</div>

<style lang="css">

    div {

        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-areas: 'left right';
        column-gap: 4rem;
        margin-bottom: 1rem;

    }

    div > div {
        display: flex;
        flex-direction: column;
    }

    div > div:first-of-type {
        grid-area: left;
    }

    div > div:last-of-type {
        grid-area: right;
    }

</style>
