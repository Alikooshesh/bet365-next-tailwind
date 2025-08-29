import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";
import Menu from "./Menu";
import Button from "@/components/general/Button";

const Header = async ()=>{
    const t = await getTranslations("Home.header");
    
    return(
        <div className="w-full bg-primary-dark">
            <div className="w-full max-w-[1200px] mx-auto p-16 grid grid-cols-3 grid-row-2 items-center justify-between font-xl">
                <Button variant="outline" className="w-48 lg:hidden">
                        {t("button.extra")}
                </Button>
                <Link href='/' className="flex justify-center lg:justify-start">
                    <span className="text-xl md:text-3xl text-white font-bold">{t('title.bet')}</span>
                    <span className="text-xl md:text-3xl text-secondary font-bold">{t('title.365')}</span>
                </Link>

                <div className="w-full order-1 col-span-3 lg:col-span-1 lg:order-[0] mt-16 lg:mt-0">
                    <Menu/>
                </div>

                <div className="flex items-center justify-end gap-16">
                    <Button variant="outline">
                        {t("button.join")}
                    </Button>
                    <Button variant="outline">
                        {t("button.login")}
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Header