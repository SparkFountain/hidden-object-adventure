import { IconDefinition, SizeProp } from '@fortawesome/angular-fontawesome';

export interface CollectableObject {
  name: string;
  icon: IconDefinition;
  size: SizeProp;
  style: {
    top: number;
    left: number;
    transform?: string;
    opacity?: number;
  };
  classes?: string[];
}
