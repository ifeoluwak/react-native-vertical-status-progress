/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  useAnimatedValue,
  Animated,
} from 'react-native';
import { useEffect } from 'react';
import { colors } from './color';
import AccordionContent from './AccordionContent';
import type { StatusItemProps } from './types';

const ChevronOpen = () => (
  <Image
    source={require('./assets/chevron-up.png')}
    style={{ width: 14, height: 10 }}
  />
);

const ChevronClose = () => (
  <Image
    source={require('./assets/chevron-down.png')}
    style={{ width: 14, height: 10 }}
  />
);

const StatusItemProgress = ({
  idx,
  status,
  isLastStick,
  showOrder,
  accordion,
  showLastStick,
  isSelected,
  isPrev,
  setIdxOpen,
  contentWrapperStyle,
  contentHeaderStyle,
  accordionTitleViewStyle,
  accordionChevronViewStyle,
  titleStyle,
  subTitleStyle,
  getTitleColor,
  getSubTitleColor,
  getBallColor,
  getStickColor,
  renderStick,
  renderBall,
  renderChevron,
}: StatusItemProps) => {
  const fadeAnim = useAnimatedValue(0);

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
      delay: 500 + idx * 100,
    }).start();
  }, [fadeAnim, idx]);

  return (
    <Animated.View
      key={status.title}
      style={{
        flexDirection: 'row',
        opacity: fadeAnim,
      }}
    >
      <View style={{ alignItems: 'center', width: '7%', paddingTop: 3 }}>
        {renderBall ? (
          renderBall(status, idx)
        ) : (
          <View
            style={[
              pageStyles.ball,
              {
                backgroundColor: getBallColor(status, idx),
              },
            ]}
          >
            {isPrev && (
              <Text style={{ fontSize: 10, color: colors.PRIMARY_WHITE }}>
                ✓
              </Text>
            )}
            {showOrder && !isPrev && (
              <Text style={{ fontSize: 10, color: colors.PRIMARY_WHITE }}>
                {idx + 1}
              </Text>
            )}
          </View>
        )}
        {showLastStick || !isLastStick ? (
          renderStick ? (
            renderStick(status, idx)
          ) : (
            <View
              style={[
                pageStyles.stick,
                {
                  backgroundColor: getStickColor(status, idx),
                  flex: 1,
                },
              ]}
            />
          )
        ) : (
          <View />
        )}
      </View>
      <View
        style={[
          { width: '95%', paddingBottom: 15, rowGap: 7 },
          contentWrapperStyle,
        ]}
      >
        <TouchableOpacity
          disabled={!accordion}
          onPress={() => setIdxOpen(isSelected ? null : status.status)}
          style={[
            {
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
            },
            contentHeaderStyle,
          ]}
        >
          <View style={[{ width: '90%' }, accordionTitleViewStyle]}>
            <Text
              style={[
                pageStyles.title,
                titleStyle,
                {
                  color: getTitleColor(status, idx),
                },
              ]}
            >
              {status.title}
            </Text>
            {status.subtitle ? (
              <Text
                style={[
                  pageStyles.subtitle,
                  subTitleStyle,
                  {
                    color: getSubTitleColor(status, idx),
                  },
                ]}
              >
                {status.subtitle}
              </Text>
            ) : null}
          </View>
          {accordion ? (
            <View style={[accordionChevronViewStyle, { width: '10%' }]}>
              {accordion && isSelected
                ? renderChevron?.(true, idx) || <ChevronOpen />
                : renderChevron?.(false, idx) || <ChevronClose />}
            </View>
          ) : (
            <View style={[accordionChevronViewStyle, { width: '10%' }]} />
          )}
        </TouchableOpacity>
        <AccordionContent
          accordion={accordion}
          isSelected={isSelected}
          renderContent={status.renderContent}
        />
      </View>
    </Animated.View>
  );
};

export default StatusItemProgress;

const pageStyles = StyleSheet.create({
  ball: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: colors.BRIGHT_TEAL,
    alignItems: 'center',
    justifyContent: 'center',
  },
  stick: {
    backgroundColor: colors.BRIGHT_TEAL,
    width: 2,
    borderRadius: 5,
    marginVertical: 4,
  },
  title: {
    fontWeight: '800',
    fontSize: 14,
    color: colors.DARK_BLUE,
  },
  subtitle: {
    fontSize: 12,
    color: colors.DARK_BLUE,
  },
});
