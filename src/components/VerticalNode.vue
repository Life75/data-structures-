<template>
  <Transition :name="setupFade()">
    <div v-if="!highlight" class="mx-1" :style="getNode()"></div>
  </Transition>
</template>

<script lang="ts">
import { TransitionPresets, useTransition } from "@vueuse/core";
import { defineComponent, PropType, ref } from "vue";
import { Direction } from "../Contracts/Classes/Direction";

export default defineComponent({
    name: "VerticalNode",
    props: { value: Number, highlight: { type: Boolean, default: false },   direction: {type: Number as PropType<Direction>}},
    setup() {

    },
    methods: {
        verticalNodeStyles(): string {
            if (this.highlight)
                return "w-8 bg-orange border-blue-500";
            return "w-8 border-green-500";
        },
        nodeHeight(): string {
            var height = 0;
            if (this.value)
                height = this.value;
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
                node += "background-color: #8df01d; ";
            }
            else {
                node += "background-color: #85ce61; ";
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
        //highlighting isnt working but animation is
        setupFade(): string {
          //gives the direction of the correct fade 

          if(this.direction == Direction.left)
            return "slide-left"
          else 
            return "slide-fade"
        }
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


.slide-fade-enter-active {
  transition: all 0.6s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(50px);
  opacity: 0;
}




.slide-right-enter-active {
  transition: all 0.3s ease-out;
}

.slide-right-leave-active {
  transition: all 0.5s cubic-bezier(0.1, 0.7, 1.0, 0.1);
}

.slide-right-enter-from,
.slide-right-leave-to {
  transform: translateX(100px);
  opacity: 0;
}


.slide-left-enter-active {
  transition: all 0.6s ease-out;
}

.slide-left-leave-active {
  transition: all 0.8s cubic-bezier(0.1, 0.7, 1.0, 0.1);
}

.slide-left-enter-from,
.slide-left-leave-to {
  transform: translateX(-50px);
  opacity: 0;
}
</style>
