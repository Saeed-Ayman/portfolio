import { defineStore } from "pinia";
import { Ref, computed, ref, watch } from "vue";

export const useFocusBackgroundStore = defineStore("focus-background", () => {
  const _visibleInBigScreens: boolean[] = [];

  let _key = ref(-1);
  const _keys = ref(new Array<Ref<boolean>>());

  const show = computed(() => {
    if (_key.value != -1) return _keys.value[_key.value];
  });
  const visibleInBigScreens = computed(() => {
    if (_key.value != -1) return _visibleInBigScreens[_key.value];
  });

  watch(
    _keys,
    () => {
      _key.value = -1;
      const keys = _keys.value;

      for (let i = 0; i < keys.length; i++) {
        if (keys[i].value) {
          _key.value = i;
          if (_visibleInBigScreens[i]) break;
        }
      }

      // if (_key.value !== -1) {
      //   document.body.classList.add("overflow-hidden");

      //   if (!_visibleInBigScreens[_key.value]) {
      //     document.body.classList.add("md:overflow-auto");
      //   }
      // } else {
      //   document.body.classList.remove("overflow-hidden", "md:overflow-auto");
      // }
    },
    { deep: true }
  );

  function registerRef(
    reference: Ref<boolean>,
    visibleInBigScreens: boolean = true
  ) {
    _keys.value.push(reference);
    _visibleInBigScreens.push(visibleInBigScreens);
  }

  function expireShow() {
    if (_key.value != -1) _keys.value[_key.value].value = false;
  }

  return { show, visibleInBigScreens, expireShow, registerRef };
});
