import { ref } from "vue";

export function useCardComposable() {
  const mClientX = ref(Infinity);
  const mClientY = ref(Infinity);
  const is_dragging = ref(false);
  const is_default = ref(true);

  const draggable = ref<HTMLElement>();
  const dragover = ref<HTMLElement>();
  const dragging = ref<HTMLElement>();

  function reset() {
    resetMousePointer();

    dragging.value?.style.removeProperty("left");
    dragging.value?.style.removeProperty("top");

    is_default.value = true;
  }

  function removeCoastImage(e: DragEvent) {
    var img = new Image();
    img.src =
      "data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=";
    e.dataTransfer?.setDragImage(img, 0, 0);
  }

  function updateMousePointer(e: DragEvent) {
    mClientX.value = e.offsetX;
    mClientY.value = e.offsetY;
  }

  function resetMousePointer() {
    mClientX.value = Infinity;
    mClientY.value = Infinity;
  }

  function startDraggingHandler(e: DragEvent) {
    is_dragging.value = true;

    updateMousePointer(e);
    removeCoastImage(e);
  }

  function endDraggingHandler() {
    is_dragging.value = false;
    resetMousePointer();
  }

  function draggingOverHandler(e: DragEvent) {
    console.log("we are in");
    is_default.value = false;

    if (
      !dragging.value ||
      !dragover.value ||
      mClientX.value == Infinity ||
      mClientY.value == Infinity
    )
      return;

    const {
      width: w1,
      height: h1,
      left,
      top,
    } = dragover.value?.getBoundingClientRect();
    const { width: w2, height: h2 } = dragging.value?.getBoundingClientRect();

    const minOffsetX = -w2 / 2;
    const minOffsetY = -h2 / 2;

    const maxOffsetX = w1 - w2 / 2;
    const maxOffsetY = h1 - h2 / 2;

    const offsetX = e.clientX - left - mClientX.value;
    const offsetY = e.clientY - top - mClientY.value;

    const v = (min: number, max: number, value: number) => {
      const max_value = Math.max(value, min);
      return Math.min(max_value, max);
    };

    dragging.value.style.left = `${v(minOffsetX, maxOffsetX, offsetX)}px`;
    dragging.value.style.top = `${v(minOffsetY, maxOffsetY, offsetY)}px`;
  }

  function init(
    _draggable: HTMLElement | undefined,
    _dragover: HTMLElement | undefined,
    _dragging: HTMLElement | undefined | null = _draggable?.parentElement
  ) {
    draggable.value = _draggable;
    dragover.value = _dragover;
    dragging.value = _dragging || undefined;

    window.addEventListener("resize", reset);
    draggable.value?.addEventListener("dragstart", startDraggingHandler, false);
    draggable.value?.addEventListener("dragend", endDraggingHandler, false);
    dragover.value?.addEventListener("dragover", draggingOverHandler);
  }

  return { is_dragging, is_default, reset, init };
}
