export interface VdtConfig {
  mode?: ModeType;
  brandUrl: string;
}

export type ModeType = 'development' | 'production';
