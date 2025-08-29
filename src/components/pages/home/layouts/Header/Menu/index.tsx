import { getTranslations } from "next-intl/server";
import { MENU_ITEMS } from "./constants";
import Item from "./Item";

const Menu = async ()=>{

    const t = await getTranslations("Home.header.menu");

    const active = MENU_ITEMS[0].id

    return(
        <nav className="w-full lg:w-auto flex items-center justify-between lg:gap-64">
            {MENU_ITEMS.map((item) => <Item key={item.id} title={t(item.id)} url={item.url} is_active={item.id === active}/>)}
        </nav>
    )
}

export default Menu