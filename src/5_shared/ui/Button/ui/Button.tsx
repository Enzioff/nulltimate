import {ReactNode} from "react";
import classNames from "classnames";
import cls from "./Button.module.scss"

interface ButtonProps {
    className?: string;
    children?: ReactNode;
    onClickEvent?: () => void;
}

export const Button = (props: ButtonProps) => {
    const {
        className,
        children,
        onClickEvent
    } = props;
    
    return (
        <button onClick={onClickEvent} className={classNames(cls.button, className)}>{children}</button>
    )
}
