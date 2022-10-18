import { id } from 'element-plus/es/locale'
import { ref, onMounted, onUnmounted, watch } from 'vue'
import IIterations from '../algorithims-ts/Interfaces/IIterations'
import ISort from '../algorithims-ts/Interfaces/ISort'

// by convention, composable function names start with "use"
export function useMouse() {
  // state encapsulated and managed by the composable
  const x = ref(0)
  const y = ref(0)

  // a composable can update its managed state over time.
  function update(event) {
    x.value = event.pageX
    y.value = event.pageY
  }

  // a composable can also hook into its owner component's
  // lifecycle to setup and teardown side effects.
  onMounted(() => window.addEventListener('mousemove', update))
  onUnmounted(() => window.removeEventListener('mousemove', update))

  // expose managed state as return value
  return { x, y }
}

//make UI elements packaged into an object for the sortHeader
export function useSortAlgorithim(sortAlgo: ISort & IIterations, animationSpeed: number, amountOfValues: number) {
    var sortRef = ref(sortAlgo);
    var animating = ref(false);
    var frame = ref(0);
    var id = ref()
    var currentIteration = ref();
  console.log(amountOfValues)

    watch(
      () => amountOfValues,
      (amountOfValues, prevSelc) => {
        sortRef.value.initArray(amountOfValues);
        animating.value = false;
        console.log(amountOfValues)
      }
    );

    watch(sortRef.value.getCurrentValues(), (newValue) => {
      //calculations finished start animating
      animating.value = true;
    });

    function cancelAnimation2() {
      console.log("canceling");
      clearInterval(id.value);
      frame.value = 0;
      currentIteration.value = sortRef.value.getIterations()[0].getIteration();
      animating.value = false;
    }

    function sortAnimation2(): void {
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
      }, animationSpeed)
    }
    
    return {sortRef, sortAnimation2, cancelAnimation2, animating}
}