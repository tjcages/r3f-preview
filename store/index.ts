import { proxy } from "valtio";
import { derive } from "valtio/utils";

interface State {
  loaded: boolean;
  view: "grid" | "linear";
  mobile: boolean;
  hover: "inquire" | "partners" | "contact" | "ethos" | null;
  hoverProject: string | null;
  position: {
    x: number;
    y: number;
  };

  // Items
  items: any[];
  size: { width: number; height: number };
  margin: number;
  gap: number;
  n: number;

  // Derived
  speed: number;
  selected: {
    id: string;
    src: string;
  } | null;
  currentIndex: number;
  scrollPercentage: number;

  pages: number;

  // user
  email: string;
}

const state = proxy({
  loaded: false,
  view: "linear",
  mobile: false,
  hover: null,
  hoverProject: null,
  position: {
    x: 0,
    y: 0,
  },

  items: [],
  mapItems: [],
  size: { width: 1.5, height: 1.5 },
  margin: 0.15,
  gap: 0.1,
  n: 3,

  speed: 0,
  selected: null,
  currentIndex: -1,
  scrollPercentage: 0,

  pages: 3,

  email: "",
} as State);

const derived = derive({
  hello: (get) => {
    return "world";
  },
});

export { state, derived };
export type { State };
