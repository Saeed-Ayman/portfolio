import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useScrollStore = defineStore("scroll", () => {
  const sections = ref(
    new Array<{
      name: string;
      elementRef: HTMLElement | null;
    }>()
  );

  const active = ref<{
    name: string;
    elementRef: HTMLElement | null;
  }>();

  const links = computed(() => sections.value.map((s) => s.name));

  const activeSection = computed(() => {
    if (active.value) return active.value.name;
  });

  addEventListener("scroll", onScrollHandler);

  function registerRef(name: string, elementRef: HTMLElement | null) {
    sections.value.push({ name, elementRef });
    onScrollHandler;
  }

  function onScrollHandler() {
    const c =
      document.documentElement.scrollTop +
      document.documentElement.clientHeight / 2 -
      50;

    let index = 0;

    for (let i = 1; i < sections.value.length; i++) {
      const dist = sections.value[i].elementRef!.offsetTop;

      if (c < dist) break;

      index = i;
    }

    active.value = sections.value[index];
  }

  function scrollToSection(name: string, behavior: ScrollBehavior = "smooth") {
    const section = sections.value.find((s) => s.name === name);
    if (section) {
      scrollTo({
        behavior,
        top:
          section.elementRef!.offsetTop -
          document.documentElement.clientHeight / 4,
      });
    }
  }

  const isActiveSection = (name: string) => {
    return !active.value
      ? name == sections.value[0]?.name
      : active.value?.name === name;
  };

  return {
    registerRef: registerRef,
    scrollToSection,
    isActiveSection,
    activeSection,
    links,
  };
});
