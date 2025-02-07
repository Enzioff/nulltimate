import {Header} from "/src/2_widgets/Header";
import {Button, Container, TagName, Title} from "/src/5_shared/ui";
import {PositionType} from "/src/5_shared/ui/Title/types/TitleTypes.ts";
import {useState} from "react";

export const IndexPage = () => {
    const [count, setCount] = useState(0)
    
    const increment = () => {
        setCount(count + 1)
    }
    
    return (
        <>
            <Header/>
            <Container>
                <Title text={'Hello World'} position={PositionType.CENTER} tagName={TagName.H1}/>
                <Button onClickEvent={increment}>
                    {
                        count < 1
                            ? 'Клик'
                            : `Кликнуто ${count} раз`
                    }
                </Button>
            </Container>
        </>
    )
}
