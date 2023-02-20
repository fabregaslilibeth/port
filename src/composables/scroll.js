import { ref, onMounted } from "vue";
import { useNavStore } from "@/stores/nav";

export function useScroll() {
  const y = ref(0);
  const sections = ref([]);
  const activeSection = ref("Home");

  onMounted(() => {
    const aa = ["home", "about", "projects", "contact"];
    sections.value = aa.map((section) => {
      const s = document.getElementById(section) 
      return {
        name: section,
        top: s.getBoundingClientRect().top,
        bottom: s.getBoundingClientRect().bottom,
      };
    });

    //commit sections to store
    const navStore = useNavStore();
    navStore.setSections(sections.value);
    window.addEventListener("scroll", handleScroll);
  });

  const handleScroll = () => {
    y.value = window.scrollY + 20;
    const activeSectionIndex = sections.value.findIndex(
      (section) => y.value >= section.top && y.value <= section.bottom
    );
    if (activeSectionIndex >= 0) {
      activeSection.value = sections.value[activeSectionIndex].name;
    }
  };
  return { y, activeSection };
}
