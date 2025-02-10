export interface catalogState {
    catalog: Catalog[]
}

interface Catalog {
    id: number
    title: string
    text: string
    price?: string
    picture?: string
}
