/* eslint-disable react-native/no-inline-styles */
import { Animated, useAnimatedValue } from 'react-native';
import React, { useEffect } from 'react';

export default function AccordionContent({
  accordion,
  isSelected,
  renderContent,
}: {
  accordion: boolean;
  isSelected: boolean;
  renderContent: React.ReactNode;
}) {
  const fadeAnim = useAnimatedValue(0);

  useEffect(() => {
    if (accordion && isSelected) {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start();
    } else {
      fadeAnim.setValue(1);
    }
    return () => {
      if (accordion) fadeAnim.setValue(0);
    };
  }, [fadeAnim, accordion, isSelected]);

  return (
    <Animated.View
      style={{ opacity: fadeAnim, paddingRight: 20 }}
      accessibilityLabel="accordion content item"
    >
      {accordion && isSelected && renderContent ? renderContent : null}
      {!accordion && renderContent}
    </Animated.View>
  );
}
