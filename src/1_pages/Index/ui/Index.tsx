import {Header} from "/src/2_widgets/Header";
import {Button, Container, TagName, Title} from "/src/5_shared/ui";
import {PositionType} from "/src/5_shared/ui/Title/types/TitleTypes.ts";
import {init} from "@telegram-apps/sdk";
import {increment} from "/src/1_pages/Index";
import {useAppDispatch, useAppSelector} from "/src/0_app/hooks/hooks.ts";

init()

export const IndexPage = () => {
    const count = useAppSelector(state => state.index.count);
    const dispatch = useAppDispatch();
    
    const handleClick = () => {
        dispatch(increment())
    }
    
    return (
        <>
            <Header/>
            <Container>
                <Title text={'Hello World'} position={PositionType.CENTER} tagName={TagName.H1}/>
                <Button onClickEvent={handleClick}>
                    {count < 1 ? 'Клик' : `Кликнуто ${count} раз`}
                </Button>
            </Container>
        </>
    )
}
