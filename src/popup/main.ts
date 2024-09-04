import van from "vanjs-core";
import { getLocalStorage, setLocalStorage } from "../utils";

const App = () => {
  const { div, input, label } = van.tags;

  const form = {
    isHide: van.state(true),
  };

  van.derive(async () => {
    const isHide = await getLocalStorage("isHide");

    if (isHide !== undefined) {
      form.isHide.val = isHide;
    }
  });

  return div(
    {
      style: "width: 200px",
    },
    div(
      {
        style: "display: flex; align-items: center;",
      },
      input({
        id: "isHide",
        type: "checkbox",
        checked: form.isHide,
        onclick: async (e) => {
          await setLocalStorage("isHide", e.currentTarget.checked);

          const [tab] = await chrome.tabs.query({
            active: true,
            currentWindow: true,
          });

          if (!tab.id) {
            return;
          }

          await chrome.tabs.reload(tab.id);
        },
      }),
      label(
        {
          for: "isHide",
        },
        "メルカリShopsの商品を非表示にする",
      ),
    ),
  );
};

van.add(document.getElementById("app")!, App());
