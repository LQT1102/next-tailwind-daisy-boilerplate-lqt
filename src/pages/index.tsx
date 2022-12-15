import { changeCurrentTheme, getCurrentTheme } from "@/src/utils/theme";
import dynamic from "next/dynamic";
import useTranslations from "../utils/translation";

export interface ISwapPageProps {}

const Index = (props: any) => {
    const t = useTranslations();

    return (
        <div>
            {t("hello", { name: "world" })} <DynamicThemeSetting />
        </div>
    );
};

export default Index;

const DynamicThemeSetting = dynamic(
    () => import("../components/base/ThemeSetting"),
    {
        ssr: false,
    }
);
