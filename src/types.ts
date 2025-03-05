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

export type Status = {
  title: string;
  subtitle: string;
  status: string;
  renderContent?: React.ReactNode;
  testID?: string;
};

export type StatusProgressProps = {
  statuses: Status[];
  currentStatus: string;
  showLastStick?: boolean;
  statusColors?: StatusColors;
  showOrder: boolean;
  accordion?: boolean;
  openAccordionStatus?: boolean;
  containerStyle?: ViewStyle;
  contentWrapperStyle?: ViewStyle;
  contentHeaderStyle?: ViewStyle;
  titleStyle?: TextStyle;
  subTitleStyle?: TextStyle;
  accordionTitleViewStyle?: ViewStyle;
  accordionChevronViewStyle?: ViewStyle;
  renderBall?: (
    label: Status,
    idx: number,
    isPrev: boolean,
    isFuture: boolean
  ) => React.ReactNode;
  renderStick?: (
    label: Status,
    idx: number,
    isPrev: boolean,
    isFuture: boolean
  ) => React.ReactNode;
  renderChevron?: (open: boolean, index: number) => React.ReactNode;
};

export type StatusItemProps = Omit<
  StatusProgressProps,
  'statuses' | 'currentStatus' | 'openAccordionStatus'
> & {
  status: Status;
  idx: number;
  isLastStick: boolean;
  isSelected: boolean;
  isPrev: boolean;
  isFuture: boolean;
  showOrder: boolean;
  getSubTitleColor: (label: Status, idx: number) => string | undefined;
  getTitleColor: (label: Status, idx: number) => string | undefined;
  getBallColor: (label: Status, idx: number) => string;
  getStickColor: (label: Status, idx: number) => string;
  setIdxOpen: (idx: string | null) => void;
};
