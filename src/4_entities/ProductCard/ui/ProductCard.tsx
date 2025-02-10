import cls from "./ProductCard.module.scss"

interface ProductCardProps {
    title: string,
    text: string,
    price?: string,
    picture?: string,
}

export const ProductCard = (props: ProductCardProps) => {
    const {
        title,
        text,
        price,
        picture,
    } = props;
    
    return (
        <div className={cls.productCard}>
            <picture className={cls.picture}>
                <img src={picture ? picture : ''} alt=""/>
            </picture>
            <div className={cls.info}>
                <h3 className={cls.title}>{title}</h3>
                <p className={cls.text}>{text}</p>
                {price && <p className={cls.price}>{price}</p>}
            </div>
        </div>
    )
}
