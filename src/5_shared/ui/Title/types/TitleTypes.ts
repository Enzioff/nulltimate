export interface TitleProps {
    className?: string;
    text: string;
    position?: PositionType;
    tagName?: TagName;
}

export enum TagName {
    H1 = 'h1',
    H2 = 'h2',
    H3 = 'h3',
    H4 = 'h4',
    H5 = 'h5',
    H6 = 'h6',
    P = 'hp',
}

export enum PositionType {
    LEFT = 'left',
    CENTER = 'center',
    RIGHT = 'right',
}
