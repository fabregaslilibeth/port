import { defineStore } from "pinia";
interface State {
  nav: String;
  sections: [Section];
}

interface Section {
  name: String;
  top: number;
  bottom: number;
}

export const useNavStore = defineStore("nav", {
  state: (): State => ({
    nav: "Home",
    sections: [
      {
        name: "Home",
        top: 0,
        bottom: 0,
      },
    ],
  }),

  getters: {
    getActiveNav(state) {
      return state.nav;
    },
  },
  actions: {
    setNav(newNav: String) {
      this.nav = newNav;
    },
    slideToSection(newNav: String) {
      const scrollToIndex = this.sections.findIndex(
        (section: Section) => section?.name === newNav.toLowerCase()
      );
      if (scrollToIndex >= 0) {
        const scrollToTop = this.sections[scrollToIndex].top;
        window.scrollTo({
          top: scrollToTop,
          behavior: "smooth",
        });
      }
    },
    setSections(sections: [Section]) {
      this.sections = sections;
    },
  },
});
