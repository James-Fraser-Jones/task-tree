<script lang="ts">
    interface NodeData {
        label: string,
        children: Array<NodeData>,
        expanded: boolean,
    }
    let input: NodeData = $state({label: "Hello", children: [], expanded: false});
    let childLabel = $state("");
</script>

<div class="{input.expanded ? 'outline' : ''} outline-2 p-4 rounded-md flex flex-col gap-5 items-start">
    <button class="{input.expanded ? 'font-bold' : ''}" onclick={() => input.expanded = !input.expanded}>{input.label}</button>
    {#if input.expanded}
        <!-- {#each input.children as child, i}
            <Node/>
        {/each} -->
        <div class="flex gap-5">
            <input class="outline outline-2 p-4 rounded-md" bind:value={childLabel} placeholder="enter your name" />
            <button class="text-xl font-bold outline outline-2 p-4 rounded-md" onclick={() => {input.children.push({label: childLabel, children: [], expanded: false}); childLabel=""}}>+</button>
        </div>
    {/if}
</div>
