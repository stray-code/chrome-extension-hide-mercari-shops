import { getLocalStorage } from "../utils";

import classes from "./style.module.css";

const init = async () => {
  const isHide = await getLocalStorage("isHide");

  if (isHide || isHide === undefined) {
    // dynamic importでCSSを反映したいが、buildエラーになるため、CSSモジュールを使用
    const body = document.querySelector("body");

    body?.classList.add(classes.item);

    return;
  }
};

init();
