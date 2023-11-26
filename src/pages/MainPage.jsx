import { useTranslation } from "react-i18next";

export function MainPage() {
    const { t } = useTranslation("ns1");
    return (
        <h1>{t("hello")}</h1>
    );
}