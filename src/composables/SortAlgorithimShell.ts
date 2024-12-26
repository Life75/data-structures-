import { Ref, ref, watch } from 'vue'
import IIterations from '../Contracts/Interfaces/IIterations'
import ISort from '../Contracts/Interfaces/ISort'
import Iteration from '../Contracts/Classes/Iteration';
import Sort from '../algorithims-ts/Sort';

//make UI elements packaged into an object for the sortHeader
export function SortAlgorithimShell(sortAlgo: Sort & ISort & IIterations) {
    var sortAlgoRef = ref(sortAlgo);
    var animating = ref(false);
    var frame = ref(0);
    var id = ref();
    var currentIteration: Ref<Iteration | undefined> = ref();
    var timer = ref();

    watch(
      () => sortAlgoRef.value.getTimer(), (newTimer, oldTimer) => {
        timer.value = sortAlgoRef.value.getTimer();
      }
    )

    watch(sortAlgoRef.value.getCurrentValues(), (newValue) => {
      animating.value = true;
    });

    function cancelAnimation(callback?: () => void): void {
      
      callback ? callback() : undefined

      clearInterval(id.value);
      frame.value = 0;
      animating.value = false;
    }

    function clearIterations(): void {
      sortAlgoRef.value.clearIterations();
    }

    //check if the values are already sorted, if so return the values to before being sorted 
    function sortAnimation(speed: number, callback?: () => void): void {
      //clear iterations 
      if(callback) {
        callback()
      }
      animating.value = true;
      if(speed == 0) {
        speed = 200
      }
      

      var animationID = setInterval(() => {
        if(frame.value == sortAlgoRef.value.getIterations().length) {
          sortAlgoRef.value.clearIterations()
          cancelAnimation();
        } else {
          id.value = animationID
        }
        try {
          // getting the currentIteration value within the animation frame 
          currentIteration.value = sortAlgoRef.value.getIterations()[frame.value]
          frame.value++;
    
        }
        catch (e: unknown) {
          clearInterval(animationID);
        }
      }, speed)
    }
    
    return {sortAlgoRef, sortAnimation, cancelAnimation, animating, currentIteration, timer, clearIterations}
}