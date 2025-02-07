import classNames from "classnames";
import cls from "./Title.module.scss"
import {TitleProps, TagName} from "/src/5_shared/ui";

export const Title = (props: TitleProps) => {
    const {
        className, text, tagName, position
    } = props;
    
    if (tagName === TagName.H1) {
        return <h1 className={classNames(cls.title, cls[`title--main`], {[cls[`title--${position}`]]: position}, className)}>{text}</h1>
    } else if (tagName === TagName.H2) {
        return <h2 className={classNames(cls.title, {[cls[`title--${position}`]]: position}, className)}>{text}</h2>
    } else if (tagName === TagName.H3) {
        return <h3 className={classNames(cls.title, {[cls[`title--${position}`]]: position}, className)}>{text}</h3>
    } else if (tagName === TagName.H4) {
        return <h4 className={classNames(cls.title, {[cls[`title--${position}`]]: position}, className)}>{text}</h4>
    } else if (tagName === TagName.H5) {
        return <h5 className={classNames(cls.title, {[cls[`title--${position}`]]: position}, className)}>{text}</h5>
    } else if (tagName === TagName.H6) {
        return <h6 className={classNames(cls.title, {[cls[`title--${position}`]]: position}, className)}>{text}</h6>
    } else {
        return <p className={classNames(cls.title, {[cls[`title--${position}`]]: position}, className)}>{text}</p>
    }
}
