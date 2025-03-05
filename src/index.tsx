import { View } from 'react-native';
import { useCallback, useEffect, useState } from 'react';
import StatusItemProgress from './StatusItem';
import type { Status, StatusProgressProps } from './types';
import { colors } from './color';

export function VerticalStatusProgress({
  statuses = [],
  currentStatus,
  showLastStick,
  showOrder,
  statusColors,
  accordion = false,
  openAccordionStatus,
  containerStyle,
  contentWrapperStyle,
  contentHeaderStyle,
  titleStyle,
  subTitleStyle,
  accordionTitleViewStyle,
  accordionChevronViewStyle,
  renderBall,
  renderStick,
  renderChevron,
}: StatusProgressProps) {
  const [currentStatusIndex, setCurrentStatusIndex] = useState<string>('');

  /** Open accordion */
  const [idxOpen, setIdxOpen] = useState<null | string>(null);

  useEffect(() => {
    setCurrentStatusIndex(currentStatus);
  }, [currentStatus]);

  useEffect(() => {
    if (openAccordionStatus) {
      setIdxOpen(currentStatus);
    }
  }, [currentStatus, openAccordionStatus]);

  const getIsPrevious = useCallback(
    (idx: number) => {
      return idx < statuses.findIndex((l) => l.status === currentStatusIndex);
    },
    [currentStatusIndex, statuses]
  );

  const getIsFuture = useCallback(
    (idx: number) => {
      return idx > statuses.findIndex((l) => l.status === currentStatusIndex);
    },
    [currentStatusIndex, statuses]
  );

  const getBallColor = (label: Status, idx: number) => {
    if (label.status === currentStatusIndex) {
      return statusColors?.currentBallColor || colors.BRIGHT_TEAL;
    }

    return getIsPrevious(idx)
      ? statusColors?.prevBallColor || colors.BRIGHT_TEAL
      : statusColors?.futureBallColor || colors.DISABLED;
  };

  const getStickColor = (label: Status, idx: number) => {
    if (label.status === currentStatusIndex) {
      return statusColors?.currentStickColor || colors.BRIGHT_TEAL;
    }

    return getIsPrevious(idx)
      ? statusColors?.prevStickColor || colors.BRIGHT_TEAL
      : statusColors?.futureStickColor || colors.DISABLED;
  };

  const getTitleColor = (label: Status, idx: number) => {
    if (label.status === currentStatusIndex) {
      return statusColors?.currentTitleColor;
    }
    return getIsPrevious(idx)
      ? statusColors?.prevTitleColor || colors.DARK_BLUE
      : statusColors?.futureTitleColor || colors.GREY_LIGHT;
  };

  const getSubTitleColor = (label: Status, idx: number) => {
    if (label.status === currentStatusIndex) {
      return statusColors?.currentSubtitleColor;
    }
    return getIsPrevious(idx)
      ? statusColors?.prevSubtitleColor || colors.DARK_BLUE
      : statusColors?.futureSubtitleColor || colors.GREY_LIGHT;
  };

  return (
    <View style={containerStyle}>
      {statuses.map((label, idx) => {
        const isSelected = idxOpen === label.status;
        return (
          <StatusItemProgress
            key={label.title}
            idx={idx}
            status={label}
            accordion={accordion && !!label.renderContent}
            showLastStick={showLastStick}
            showOrder={showOrder}
            isSelected={isSelected}
            contentWrapperStyle={contentWrapperStyle}
            contentHeaderStyle={contentHeaderStyle}
            accordionTitleViewStyle={accordionTitleViewStyle}
            accordionChevronViewStyle={accordionChevronViewStyle}
            titleStyle={titleStyle}
            subTitleStyle={subTitleStyle}
            setIdxOpen={setIdxOpen}
            renderStick={renderStick}
            renderBall={renderBall}
            renderChevron={renderChevron}
            getBallColor={getBallColor}
            getStickColor={getStickColor}
            getTitleColor={getTitleColor}
            getSubTitleColor={getSubTitleColor}
            isLastStick={idx === statuses.length - 1}
            isPrev={getIsPrevious(idx)}
            isFuture={getIsFuture(idx)}
          />
        );
      })}
    </View>
  );
}
