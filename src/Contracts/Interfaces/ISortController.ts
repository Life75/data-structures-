import { Ref } from "vue";

export default interface ISortController {
    startSorting: () => void ,
    cancelAnimation: () => void, 
    isAnimating: Ref<boolean>, 
}