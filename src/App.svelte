<script lang="ts">
  import Node from "./lib/Node.svelte";
  import tree from './assets/tree.svg';
  import { type NodeData } from "./lib/types";
  let root: NodeData = $state({label: 'root', children: [], expanded: false});
</script>

<div class="flex flex-col w-full h-screen p-5 gap-10">
  <div class="w-full flex justify-center gap-5 items-center">
    <h1 class="text-4xl">TaskTree</h1>
    <img src={tree} alt="Tree" class="w-20" />
  </div>
  <div class="grow">
    <Node bind:data={root}/>
  </div>
</div>