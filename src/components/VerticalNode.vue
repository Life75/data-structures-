<template>
  <span class="">
    <div class="mx-1" :style="getNode()"></div>
  </span>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "VerticalNode",
  props: { value: Number, highlight: { type: Boolean, default: false } }, //Make this an object
  methods: {
    verticalNodeStyles(): string {
      if (this.highlight) return "w-8 bg-orange border-blue-500";

      return "w-8 border-green-500";
    },
    nodeHeight(): string {
      var height = 0;
      if (this.value) height = this.value;
      return height.toString();
    },

    getNode(): string {
      var node: string;
      node = "width: 25px;";

      node = this.highlightStyling(node);
      node = this.nodeHeightStyling(node);

      return node;
    },

    highlightStyling(node: string): string {
      if (this.highlight) {
        node += "background-color: #8E05C2; border-color: #8E05C2;";
      } else {
        node += "background-color: #3E065F; border: 0;";
      }

      return node;
    },

    nodeHeightStyling(node: string): string {
      var height = 0;
      if (this.value) {
        node += "height: " + this.value + "px;";
      }

      return node;
    },
  },
});
</script>

<style>
.square {
  height: 100px;
  width: 50px;
  background-color: #ffffff;
  border-color: #8e05c2;
}
</style>
