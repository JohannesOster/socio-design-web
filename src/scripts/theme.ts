const primitives = {
  ebonyClay: "#273541",
  ebonyClayLightest: "#A9AEB3",
  jaffa: "#F2784B",
  waikawaGray: "#5A7A96",
};

export const theme = {
  node: {
    default: {
      color: primitives.ebonyClay,
      backgroundColor: primitives.ebonyClay,
      overlayColor: primitives.ebonyClay,
      overlayShape: "ellipse",
    },
    active: { overlayOpacity: 0.25 },
    selected: { backgroundColor: primitives.jaffa, color: primitives.jaffa },
    highlighed: {
      backgroundColor: primitives.waikawaGray,
      color: primitives.waikawaGray,
    },
  },
  edge: {
    default: {
      strokeWidth: 2,
      strokeColor: primitives.ebonyClayLightest,
      curveStyle: "straight",
      arrowShape: "triangle",
      overlayColor: primitives.ebonyClayLightest,
    },
    active: { overlayOpacity: 0.25 },
    selected: { strokeColor: primitives.jaffa },
  },
};
