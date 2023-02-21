<script lang="ts">
    export let data;
    $: ({comments, recommended, fail} = data)
</script>

<main>
    <h1>Blog post</h1>
    {data.blog}
    <hr />
    <h2>Comments</h2>


    {#await comments}
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

    {#await recommended}
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

    {#await fail}
    Loading that will fail...
    {:then fail}
        It did not fail?
    {:catch error}
        {error.message}
    {/await}


</main>

<style>
main{
    max-width: 80%;
    margin: auto;
    padding: 1rem;
}
</style>
