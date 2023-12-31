import { computed, onMounted, onUnmounted } from "vue";
import { useGameStore } from "../../store/game";
import { usePlayerStore } from "../../store/player";

export function useMove() {
  const {
    movePlayerToDown,
    movePlayerToLeft,
    movePlayerToRight,
    movePlayerToTop,
  } = usePlayerStore();

  function handleKeyup(e: KeyboardEvent) {
    const { detectionGameCompletd } = useGameStore();
    switch (e.code) {
      case "ArrowLeft":
        movePlayerToLeft();
        break;
      case "ArrowRight":
        movePlayerToRight();
        break;
      case "ArrowUp":
        movePlayerToTop();
        break;
      case "ArrowDown":
        movePlayerToDown();
        break;
      default:
        break;
    }

    detectionGameCompletd();
  }

  onMounted(() => {
    window.addEventListener("keyup", handleKeyup);
  });

  onUnmounted(() => {
    window.removeEventListener("keyup", handleKeyup);
  });
}

export function usePosition() {
  const { player } = usePlayerStore();

  const STEP = 32;
  const position = computed(() => {
    return {
      top: player.y * STEP + "px",
      left: player.x * STEP + "px",
    };
  });
  return { position };
}
