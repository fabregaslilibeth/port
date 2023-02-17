import { ref, onMounted } from "vue";
// import { useNav } from "./nav.js";
// const { navStore } = useNav();

export function useScroll(sectionId: string) {
  const y = ref(0);
  const sectionHeight = ref(0);
  const sectionDistanceToTop = ref(0);
  const section = ref("");
  const shouldShow = ref(false);

  onMounted(() => {
    section.value = document.getElementById(sectionId);
    sectionHeight.value = section.value.offsetHeight;
    sectionDistanceToTop.value = section.value.getBoundingClientRect().top;
    window.addEventListener("scroll", handleScroll);
  });

  const handleScroll = () => {
    y.value = window.scrollY;
    const buffer = sectionDistanceToTop.value / 2;
    const show =
      y.value > sectionDistanceToTop.value - buffer &&
      y.value < sectionDistanceToTop.value + sectionHeight.value / 4;

    if (show) {
      shouldShow.value = true
      // commit to store for nav
      // navStore.setNav("About");
    }
    // console.log(shouldShow.value)
  };
  // expose managed state as return value
  return { y, shouldShow };
}
