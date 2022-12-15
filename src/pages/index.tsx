import { changeCurrentTheme, getCurrentTheme } from "@/src/utils/theme";
import useTranslations from "../utils/translation";

export interface ISwapPageProps {}

const Index = (props: any) => {
  const t = useTranslations();
  const theme = getCurrentTheme() || "";
  console.log(theme);
  return (
    <div>
      <select
        className="gradientselect"
        data-choose-theme
        defaultValue={theme}
        onChange={(e) => {
          changeCurrentTheme(e.target.value);
        }}
      >
        <option disabled value="-">
          Pick a theme
        </option>
        <option value="mytheme">Default</option>
        <option value="light">Light</option>
        <option value="retro">Retro</option>
        <option value="dracula">Dracula</option>
        <option value="cyberpunk">Cyberpunk</option>
      </select>{" "}
      {t("hello", { name: "world" })}{" "}
      <button className="btn mx-4 text-custom-color" onClick={() => getCurrentTheme()}>
        Get current
      </button>
      <button className="btn mx-4" onClick={() => changeCurrentTheme("light")}>
        Change current theme to light
      </button>
    </div>
  );
};

export default Index;
