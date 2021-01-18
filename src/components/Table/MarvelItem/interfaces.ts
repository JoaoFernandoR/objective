export interface Props {
  name: string;
  thumbnail: Thumbnail;
  series: Series;
  events: Series;
  id: number;
  valor: number;
}
export interface Thumbnail {
  path: string;
  extension: string;
}
export interface Series {
  items: SerieItem[];
}
export interface SerieItem {
  name: string;
}
