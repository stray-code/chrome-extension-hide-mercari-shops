import { getLocalStorage } from "../utils";

const init = async () => {
  const isHide = await getLocalStorage("isHide");

  if (isHide) {
    import("./style.css");
    return;
  }
};

init();
