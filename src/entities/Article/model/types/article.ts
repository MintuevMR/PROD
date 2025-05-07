import { User } from 'entities/User/model/types/user';

export type ArticleType = 'IT' | 'ECONIMIC';

export enum ArtcileSortField {
    VIEWS = 'views',
    TITLE = 'title',
    CREATED = 'createdAt'
}
export interface ArticlBaseBlock {
    id: string;
    type: 'TEXT' | 'IMAGE' | 'CODE';
}

export interface ArticleTextBlock extends ArticlBaseBlock {
    type: 'TEXT';
    title?: string;
    paragraphs: string[];
}

export interface ArticleCodeBlock extends ArticlBaseBlock {
    type: 'CODE';
    code: string;
}

export interface ArticleImageBlock extends ArticlBaseBlock {
    type: 'IMAGE';
    src: string;
    title: string
}

export type ActicleBlock = ArticleTextBlock | ArticleCodeBlock | ArticleImageBlock;

export enum ArticleView {
    SMALL = 'SMALL',
    BIG = 'BIG',
}

export interface Article {
    id: string;
    title: string;
    user: User
    subtitle: string;
    img: string;
    views: number,
    createdAt: string;
    type: ArticleType[],
    blocks: ActicleBlock[]
}
