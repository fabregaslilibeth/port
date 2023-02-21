import { ref, onMounted } from "vue";
import { useNavStore } from "@/stores/nav";

type Section = {
  name: String;
  top: number;
  bottom: number;
};

export function useScroll() {
  const y = ref(0);
  const sections = Array<Section>;
  const activeSection = ref("Home");

  onMounted(() => {
    const aa = ["home", "about", "projects", "contact"];
    // @ts-ignore
    sections.value = aa.map((section) => {
      const s = document.getElementById(section);
      return {
        name: section,
        // @ts-ignore
        top: s.getBoundingClientRect().top,
        // @ts-ignore
        bottom: s.getBoundingClientRect().bottom,
      };
    });

    const navStore = useNavStore();
    // @ts-ignore)
    navStore.setSections(sections.value);
    window.addEventListener("scroll", handleScroll);
  });

  const handleScroll = () => {
    y.value = window.scrollY + 20;
    // @ts-ignore
    const activeSectionIndex = sections.value.findIndex(
      // @ts-ignore
      (section) => y.value >= section.top && y.value <= section.bottom
    );
    if (activeSectionIndex >= 0) {
      // @ts-ignore
      activeSection.value = sections.value[activeSectionIndex].name;
    }
  };
  return { y, activeSection };
}
