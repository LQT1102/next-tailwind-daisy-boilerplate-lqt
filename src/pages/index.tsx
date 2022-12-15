import ThemeSettingWithNoSSR from "@/src/components/base/ThemeSetting/ThemeSettingWithNoSSR";
import useTranslations from "../utils/translation";

export interface ISwapPageProps {}

const Index = (props: any) => {
    const t = useTranslations();

    return (
        <div>
            {t("hello", { name: "world" })} <ThemeSettingWithNoSSR />
        </div>
    );
};

export default Index;
