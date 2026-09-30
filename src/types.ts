export type SectorId =
  | 'lectura'
  | 'arte'
  | 'ciencias'
  | 'matematica'
  | 'construccion'
  | 'tecnologia'
  | 'personal_social'
  | 'biblioteca'
  | 'docente';

export interface SectorItem {
  id: SectorId;
  name: string;
  shortDesc: string;
  pedagogicalObjective: string;
  competencies: string[];
  materials: string[];
  ergonomics: string;
  noiseLevel: 'silencioso' | 'moderado' | 'dinamico';
  color: {
    bg: string;
    border: string;
    text: string;
    badgeBg: string;
    iconColor: string;
    gradient: string;
  };
  iconName: string;
  image: string;
  planCoordinates: {
    x: number; // percentage in 6m
    y: number; // percentage in 4m
    width: number;
    height: number;
  };
}

export interface SlideInfo {
  id: string;
  title: string;
  subtitle: string;
  category: string;
}
