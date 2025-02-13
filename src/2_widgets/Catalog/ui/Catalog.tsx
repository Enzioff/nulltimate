import {useAppSelector} from "/src/0_app/hooks/hooks.ts";
import cls from "./Catalog.module.scss"
import {ProductCard} from "/src/4_entities";

export const Catalog = () => {
    const catalog = useAppSelector(state => state.catalog.catalog)
    
    return (
        <div className={cls.catalog}>
            {
                catalog && catalog.length > 0 && catalog.map(el => {
                    return (
                        <ProductCard
                            picture={el.picture}
                            title={el.title}
                            text={el.text}
                            price={el.price}
                            key={el.id}
                        />
                    )
                })
            }
        </div>
    )
}
