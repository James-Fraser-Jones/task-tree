<script lang="ts">
    import { type NodeData } from "./types";
    let {data = $bindable()}: {data: NodeData} = $props();
    let childLabel = $state("");
</script>

<div class="{data.expanded ? 'outline' : ''} outline-2 p-4 rounded-md flex flex-col gap-5 items-start">
    <button class="{data.expanded ? 'font-bold' : ''}" onclick={() => data.expanded = !data.expanded}>{data.label}</button>
    {#if data.expanded}
        {#each data.children as child, i}
            <Node bind:data={data.children[i]}/>
        {/each}
        <div class="flex gap-5">
            <input class="outline outline-2 p-4 rounded-md" bind:value={childLabel} placeholder="enter your name" />
            <button class="text-xl font-bold outline outline-2 p-4 rounded-md" onclick={() => {data.children.push({label: childLabel, children: [], expanded: false}); childLabel=""}}>+</button>
        </div>
    {/if}
</div>
