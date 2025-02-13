export interface CatalogPageProps {
    data?: CatalogDataTypes[]
}

export interface CatalogDataTypes {
    id: number,
    title: string,
    text: string,
    price: string,
    picture: string
}
