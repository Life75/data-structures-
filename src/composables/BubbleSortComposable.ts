import { ref, watch } from 'vue'
import IIterations from '../algorithims-ts/Interfaces/IIterations'
import ISort from '../algorithims-ts/Interfaces/ISort'

//make UI elements packaged into an object for the sortHeader
export function useSortAlgorithim(sortAlgo: ISort & IIterations, animationSpeed: number, amountOfValues: number) {
    var sortRef = ref(sortAlgo);
    var animating = ref(false);
    var frame = ref(0);
    var id = ref()
    var currentIteration = ref();
    var timer = ref();

    watch(
      () => amountOfValues,
      (amountOfValues, prevSelc) => {
        sortRef.value.initArray(amountOfValues);
        animating.value = false;
      }
    );

    watch(
      () => animationSpeed,
      (animationSpeed, prevSelc) => {
        console.log("speed: " + animationSpeed)
      }
    );

    watch(
      () => sortRef.value.getTimer(), (newTimer, oldTimer) => {
        timer.value = sortRef.value.getTimer();
      }
    )

    watch(sortRef.value.getCurrentValues(), (newValue) => {
      //calculations finished start animating
      animating.value = true;

    });

    function cancelAnimation() {
      clearInterval(id.value);
      frame.value = 0;
      animating.value = false;
    }

    function sortAnimation(speed: number): void {
      animating.value = true;
      var animationID = setInterval(() => {
        
        if(frame.value == sortRef.value.getIterations().length) {
          frame.value = 0;
          clearInterval(animationID);
          animating.value = false;
        } else {
          id.value = animationID
        }
        try {
          currentIteration.value = sortRef.value.getIterations()[frame.value].getIteration();
          frame.value++;
        }
        catch (e: unknown) {
          clearInterval(animationID);
        }
      }, speed)
    }
    
    return {sortRef, sortAnimation, cancelAnimation, animating, currentIteration, animationSpeed, timer}
}