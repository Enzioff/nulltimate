import {Container, PositionType, TagName, Title} from "/src/5_shared/ui";
import {Catalog} from "/src/2_widgets";
import {useGetCatalogPageDataQuery} from "/src/1_pages/CatalogPage";

export const CatalogPage = () => {
    const {data} = useGetCatalogPageDataQuery(null)
    
    if (data) {
        console.log(data)
    }
    
    return (
        <div className={'catalog'}>
            <Container>
                <Title text={'Catalog Page'} position={PositionType.CENTER} tagName={TagName.H1}/>
                <Catalog/>
            </Container>
        </div>
    )
}
