import { ref, watch } from 'vue'
import IIterations from '../algorithims-ts/Interfaces/IIterations'
import ISort from '../algorithims-ts/Interfaces/ISort'

//make UI elements packaged into an object for the sortHeader
export function SortAlgorithimShell(sortAlgo: ISort & IIterations) {
    var sortAlgoRef = ref(sortAlgo);
    var animating = ref(false);
    var frame = ref(0);
    var id = ref(0);
    var currentIteration = ref();
    var timer = ref();


    watch(
      () => sortAlgoRef.value.getTimer(), (newTimer, oldTimer) => {
        timer.value = sortAlgoRef.value.getTimer();
      }
    )

    watch(sortAlgoRef.value.getCurrentValues(), (newValue) => {
      //calculations finished start animating
      animating.value = true;
    });

    function cancelAnimation(): void {
      clearInterval(id.value);
      frame.value = 0;
      animating.value = false;
    }

    //check if the values are already sorted, if so return the values to before being sorted 

    function sortAnimation(speed: number): void {
      animating.value = true;
      var animationID = setInterval(() => {
        if(frame.value == sortAlgoRef.value.getIterations().length) {
          cancelAnimation();
        } else {
          id.value = animationID
        }
        try {
          currentIteration.value = sortAlgoRef.value.getIterations()[frame.value].getIteration();
          frame.value++;
        }
        catch (e: unknown) {
          clearInterval(animationID);
        }
      }, speed)
    }
    
    return {sortAlgoRef, sortAnimation, cancelAnimation, animating, currentIteration, timer}
}