import { ref, watch } from "vue";
import Snapshots from "./Snapshots";
import Timer from "./Timer";

export function AnimateEngine<T>(entity: Snapshots<T> & Timer) {
    var entityRef = ref(entity)
    var timer = ref()
    var animating = ref(false)
    var frame = ref(0)
    var id = ref()
    var currentIteration = ref()

    watch(
        () => entityRef.value.getTime(), (newTimer, oldTimer) => {
            timer.value = entityRef.value.getTime()
        }
    )

    function cancelAnimation(): void {
        clearInterval(id.value)
        frame.value = 0;
        animating.value = false 
    } 

    //Should make this function slot like to be able to put in we can do this later
    function animate(speed: number): void {
        animating.value = true
        
        if(speed == 0) {
            speed = 200
        }

        var animationID = setInterval(() => {
            if(frame.value == entityRef.value.getSnapshots().length) {
                cancelAnimation()
            } else {
                id.value = animationID
            }
            try {
                currentIteration.value = entityRef.value.getSnapshots()[frame.value]
                frame.value++
            } catch (e: unknown) {
                clearInterval(animationID)
            }
        }, speed) 
    }
    return {animate, cancelAnimation, animating, timer, }
}