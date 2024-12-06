export class ModeSwitcherView {
  _modeSwitcher = document.querySelector(".header__mode-switcher");
  _switcherText = document.querySelector(".header__mode-switcher__text-box");
  _modeSwitcherIcon = document.querySelector(".header__mode-switcher__icon");
  _data;

  render(data) {
    this._data = data;
    this._renderModeSwitcher();
  }

  getCountyQuery(currentMode) {
    if (!currentMode) {
      return this._switcherText.textContent;
    } else {
      if (currentMode == "Dark Mode") {
        this._data = "Light Mode";
      } else if (currentMode == "Light Mode") {
        this._data = "Dark Mode";
      }
      return this._data;
    }
  }

  addHandlerLoad(render) {
    window.addEventListener("load", render);
  }

  addHandlerClick(render) {
    this._modeSwitcher.addEventListener("click", render);
  }

  _renderModeSwitcher() {
    let root = document.querySelector(":root");
    if (this._data == "Dark Mode") {
      root.style.setProperty(
        "--color-Very-Light-Gray-Light-Mode-Background",
        "hsl(207, 26%, 17%)"
      );
      root.style.setProperty(
        "--color-White-Dark-Mode-Text-and-Light-Mode-Elements",
        "hsl(209, 23%, 22%)"
      );
      root.style.setProperty(
        "--color-Very-Dark-Blue-Light-Mode-Text",
        "hsl(0, 0%, 100%)"
      );
      root.style.setProperty(
        "--color-Dark-Gray-Light-Mode-Input",
        "hsl(0, 0%, 100%)"
      );
      this._modeSwitcherIcon.src =
        "https://shivanarrthine.com/public/images/icons/sun.svg";
    } else {
      root.style.setProperty(
        "--color-Very-Light-Gray-Light-Mode-Background",
        "hsl(0, 0%, 98%)"
      );
      root.style.setProperty(
        "--color-White-Dark-Mode-Text-and-Light-Mode-Elements",
        "hsl(0, 0%, 100%)"
      );
      root.style.setProperty(
        "--color-Very-Dark-Blue-Light-Mode-Text",
        "hsl(200, 15%, 8%)"
      );
      root.style.setProperty(
        "--color-Dark-Gray-Light-Mode-Input",
        "hsl(0, 0%, 52%)"
      );
      this._modeSwitcherIcon.src =
        "https://shivanarrthine.com/public/images/icons/moon.svg";
    }
    this._switcherText.textContent =
      this._data === "Light Mode" ? "Dark Mode" : "Light Mode";
  }
}

export default new ModeSwitcherView();
