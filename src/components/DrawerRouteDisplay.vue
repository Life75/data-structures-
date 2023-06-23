<template>
  <ul v-for="route in router.routes" class="space-y-2 font-medium">
    <li>
      <el-divider></el-divider>

      <a
        href="#"
        class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
      >
        <span class="ml-3">{{ route.name }}</span>
      </a>
    </li>
  </ul>
  <el-tree :data="data" class="bg-black"/>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import router from "../router";
//add animation next like this https://tetsugakure.market/

interface Tree {
  label: string;
  children?: Tree[];
}

const data: Tree[] = [
  {
    label: 'Level one 1',
    children: [
      {
        label: 'Level two 1-1',
        children: [
          {
            label: 'Level three 1-1-1',
          },
        ],
      },
    ],
  },
  {
    label: 'Level one 2',
    children: [
      {
        label: 'Level two 2-1',
        children: [
          {
            label: 'Level three 2-1-1',
          },
        ],
      },
      {
        label: 'Level two 2-2',
        children: [
          {
            label: 'Level three 2-2-1',
          },
        ],
      },
    ],
  },
  {
    label: 'Level one 3',
    children: [
      {
        label: 'Level two 3-1',
        children: [
          {
            label: 'Level three 3-1-1',
          },
        ],
      },
      {
        label: 'Level two 3-2',
        children: [
          {
            label: 'Level three 3-2-1',
          },
        ],
      },
    ],
  },
]

function formatData(): Tree[] {
  var tree: Tree[] = [];

  router.routes.forEach((element) => {
    var children = undefined;

    const node: Tree = {
      label: element.name,
    };

    tree.push(node);
  });

  return tree;
}
onMounted(() => {
   recur(0, tree)
})

//TODO 
function recur(index: number, tree: Array<object>): void {
  //starts at 0
  
    if (tree[index]?.children) {
      recur(0, tree);
      recur(1, tree);
      console.log(tree[index]);
    }
    console.log(tree[index]);
  console.log(tree)
}

//recur(0, router.routes);
console.log('hello world')



console.log(router.routes);
</script>

<style></style>
