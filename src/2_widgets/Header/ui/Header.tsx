import {Container, Logo, Title} from "/src/5_shared/ui";
import cls from "./Header.module.scss"

export const Header = () => {
    return (
        <header className={cls.header}>
            <Container>
                <div className={cls.headerWrapper}>
                    <Logo/>
                    <Title text={'Base template'}/>
                </div>
            </Container>
        </header>
    )
}
