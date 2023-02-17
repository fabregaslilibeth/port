// import { storeToRefs } from "pinia";
import { useNavStore } from "@/stores/nav";

export function useNav() {
  const navStore = useNavStore();

  // expose managed state as return value
  return { navStore };
}
