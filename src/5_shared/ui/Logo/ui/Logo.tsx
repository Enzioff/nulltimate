import cls from "./Logo.module.scss"
import reactLogo from "../../../assets/images/react-logo.svg"

export const Logo = () => {
    return (
        <div className={cls.logo}>
            <img src={reactLogo} alt=""/>
        </div>
    )
}
