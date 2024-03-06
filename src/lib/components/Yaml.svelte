<script lang="ts">
    import yaml from 'js-yaml';
    export let obj: unknown;
    const yamlObj = {
        "images": obj ?? {}
    };
    const formatted = yaml.dump(yamlObj);
</script>

<div class="yaml">
<h3>YAML definition:</h3>
<pre class="language-yaml">
    <code class="language-yaml">
{formatted}
    </code>
</pre>
</div>

<style lang="css">
    pre {
        margin-left: 2rem;
    }
</style>
