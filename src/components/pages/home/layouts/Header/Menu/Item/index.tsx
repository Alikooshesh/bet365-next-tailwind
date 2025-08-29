import { cn } from "@/lib/cn"

interface ItemProps{
    title : string,
    url : string,
    is_active ? :boolean
}

const Item = ({title,url,is_active}:ItemProps)=>{

    const buttonClassess = cn(
        "relative font-md text-16 text-white hover:text-primary",{
            "!text-primary" : is_active
        }
    )

    return(
        <button className={buttonClassess}>
            {title}
            {is_active &&
                <span className="inline-block w-full h-2 bg-primary absolute left-0 -bottom-16 lg:-bottom-[26px]"/>
            }
        </button>
    )
}

export default Item