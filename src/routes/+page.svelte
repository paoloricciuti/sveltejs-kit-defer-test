<script lang="ts">
    export let data;
</script>

{#key data}
<main>
    <h1>Blog post</h1>
    {data.blog}
    <hr />
    <h2>Comments</h2>

    {#await data.comments.lazy}
    Loading comments...
    {:then comments}
        <ul>
        {#each comments as comment}
            <li>{comment}</li>
        {/each}
        </ul>
    {/await}
    <hr />
    <h2>Recommended posts</h2>

    {#await data.recommended.lazy}
    Loading recommended...
    {:then recommended}
        <ul>
        {#each recommended as reccomended}
            <li>{reccomended}</li>
        {/each}
        </ul>
    {/await}
    <hr />
    <h2>A failing promise</h2>

    {#await data.fail.lazy}
    Loading that will fail...
    {:then fail}
        It did not fail?
    {:catch error}
        {error.message}
    {/await}

</main>
{/key}
<style>
main{
    max-width: 80%;
    margin: auto;
    padding: 1rem;
}
</style>