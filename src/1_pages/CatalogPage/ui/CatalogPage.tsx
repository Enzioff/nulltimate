import {Container, PositionType, TagName, Title} from "/src/5_shared/ui";
import {Catalog} from "/src/2_widgets";
import {useGetCatalogPageDataQuery} from "/src/1_pages/CatalogPage";
import {initCatalog} from "/src/2_widgets/Catalog";
import {useAppDispatch} from "/src/0_app/hooks/hooks.ts";
import {useEffect} from "react";

export const CatalogPage = () => {
    const {data} = useGetCatalogPageDataQuery(null, {
        // pollingInterval: 3000,
        skipPollingIfUnfocused: true,
    })
    
    const dispatch = useAppDispatch()
    
    useEffect(() => {
        if (data !== undefined && data.length > 0) {
            dispatch(initCatalog(data))
        }
    }, [data]);
    
    return (
        <div className={'catalog'}>
            <Container>
                <Title text={'Catalog Page'} position={PositionType.CENTER} tagName={TagName.H1}/>
                <Catalog />
            </Container>
        </div>
    )
}
