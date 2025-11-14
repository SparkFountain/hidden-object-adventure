import { IconDefinition, SizeProp } from '@fortawesome/fontawesome-svg-core';

export interface Decoration {
  icon: IconDefinition;
  size: SizeProp;
  style: DecoStyle;
  classes?: string[];
}

export interface DecoStyle {
  top: string | number;
  left: string | number;
  transform?: string;
  opacity?: number;
}
