import cls from "./BottomMenu.module.scss"
import {Link} from "react-router";

export const BottomMenu = () => {
    return (
        <div className={cls.bottomMenu}>
            <Link className={cls.link} to={'/'}>Главная</Link>
            <Link className={cls.link} to={'/catalog'}>Каталог</Link>
        </div>
    )
}
