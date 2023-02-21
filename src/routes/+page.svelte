<script lang="ts">
    export let data;
</script>

<h1>Blog post</h1>
{data.blog}
<hr />
<h2>Comments</h2>

{#await data.defer.comments}
Loading comments...
{:then comments}
    <ul>
    {#each comments as comment}
        <li>{comment}</li>
    {/each}
    </ul>
{/await}