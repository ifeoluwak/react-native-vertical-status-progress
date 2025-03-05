import type { TextStyle, ViewStyle } from 'react-native';

export type StatusColors = {
  prevTitleColor: string;
  prevSubtitleColor: string;
  prevBallColor: string;
  prevStickColor: string;
  currentTitleColor: string;
  currentSubtitleColor: string;
  currentBallColor: string;
  currentStickColor: string;
  futureTitleColor: string;
  futureSubtitleColor: string;
  futureBallColor: string;
  futureStickColor: string;
};

export type Statuses = {
  title: string;
  subtitle: string;
  status: string;
  renderContent?: React.ReactNode;
};

export type StatusProgressProps = {
  statuses: Statuses[];
  currentStatus: string;
  showLastStick?: boolean;
  statusColors?: StatusColors;
  showOrder: boolean;
  accordion: boolean;
  openAccordionStatus?: boolean;
  containerStyle?: ViewStyle;
  contentWrapperStyle?: ViewStyle;
  contentHeaderStyle?: ViewStyle;
  titleStyle?: TextStyle;
  subTitleStyle?: TextStyle;
  accordionTitleViewStyle?: ViewStyle;
  accordionChevronViewStyle?: ViewStyle;
  renderBall?: (label: Statuses, idx: number) => React.ReactNode;
  renderStick?: (label: Statuses, idx: number) => React.ReactNode;
  renderChevron?: (open: boolean, index: number) => React.ReactNode;
};

export type StatusItemProps = Omit<
  StatusProgressProps,
  'statuses' | 'currentStatus' | 'openAccordionStatus'
> & {
  status: Statuses;
  idx: number;
  isLastStick: boolean;
  isSelected: boolean;
  isPrev: boolean;
  isFuture: boolean;
  showOrder: boolean;
  getSubTitleColor: (label: Statuses, idx: number) => string | undefined;
  getTitleColor: (label: Statuses, idx: number) => string | undefined;
  getBallColor: (label: Statuses, idx: number) => string;
  getStickColor: (label: Statuses, idx: number) => string;
  setIdxOpen: (idx: string | null) => void;
};
