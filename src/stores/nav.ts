import { defineStore } from "pinia";

interface State {
  nav: String;
  sections: [];
}

// interface Section {
//   name: String;
//   top: number;
//   bottom: number;
// }

export const useNavStore = defineStore("nav", {
  state: (): State => ({
    nav: "Home",
    sections: [],
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
        (section) => section.name === newNav.toLowerCase()
      );
      if (scrollToIndex >= 0) {
        const scrollToTop = this.sections[scrollToIndex].top;
        console.log(scrollToTop)
        window.scrollTo({
          top: scrollToTop,
          behavior: "smooth",
        });
      }
    },
    setSections(sections: []) {
      this.sections = sections;
    },
  },
});
