import {useAppDispatch, useAppSelector} from "/src/0_app/hooks/hooks.ts";
import {increment, resetIndex} from "/src/1_pages/Index";
import {Button, Container, PositionType, TagName, Title} from "/src/5_shared/ui";
import cls from "./Index.module.scss";

export const IndexPage = () => {
    const count = useAppSelector(state => state.index.count);
    const dispatch = useAppDispatch();
    
    const handleClick = () => {
        count >= 20 ? dispatch(resetIndex()) : dispatch(increment())
    }
    
    return (
        <main className={cls.index}>
            <Container>
                <Title text={'Hello World'} position={PositionType.CENTER} tagName={TagName.H1}/>
                <Button onClickEvent={handleClick}>
                    {count < 1 ? 'Клик' : `Кликнуто ${count} раз`}
                </Button>
            </Container>
        </main>
    )
}
