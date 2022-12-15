import { changeCurrentTheme, getCurrentTheme } from "@/src/utils/theme";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";

export interface IThemeSettingProps {}

export default function ThemeSetting() {
    const [currentTheme, setCurrentTheme] = useState("");

    useEffect(() => {
        const theme = getCurrentTheme() || "";
        console.log(theme);
        setCurrentTheme(theme);
    }, []);

    return (
        <>
            <select
                className="gradientselect"
                data-choose-theme
                value={currentTheme}
                onChange={(e) => {
                    changeCurrentTheme(e.target.value);
                    setCurrentTheme(e.target.value);
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
            <button
                className="btn mx-4 text-custom-color"
                onClick={() => getCurrentTheme()}
            >
                Get current
            </button>
            <button
                className="btn mx-4"
                onClick={() => changeCurrentTheme("light")}
            >
                Change current theme to light
            </button>
        </>
    );
}