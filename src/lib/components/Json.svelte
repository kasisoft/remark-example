<script lang="ts">
    export let obj: unknown;
    const formatted = JSON.stringify(obj ?? {}, null, 4);
</script>

<div class="json">
<h3>JSON of the property:</h3>
<pre class="language-json">
    <code class="language-json">
{formatted}
    </code>
</pre>
</div>


<style lang="css">
    pre {
        margin-left: 2rem;
    }
</style>
