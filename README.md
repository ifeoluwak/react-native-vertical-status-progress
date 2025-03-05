# react-native-vertical-status-progress

A component to show the progress of a process with different statuses. Works with Expo and React Native.

The `react-native-vertical-status-progress` component is designed to visually represent the progress of a multi-step process. Each step is represented by a status indicator that can be customized to show whether the step is completed or pending. This component is ideal for workflows, onboarding processes, or any scenario where you need to display progress through a series of steps.
It is compatible with both Expo and React Native projects, making it versatile and easy to integrate into your existing applications.

## Preview

![Vertical Status Progress](./imgs/vertical-status-progress.png)

## Features

- **Accordion Support**: Each status can be expanded or collapsed to show more details. This is useful for providing additional information or actions related to each step.
- **Customizable Content**: You can render any component within the accordion, including call-to-action (CTA) buttons, forms, or any other React Native components.

## Installation

```sh
npm install react-native-vertical-status-progress
```

## Usage

```jsx
import VerticalStatusProgress from 'react-native-vertical-status-progress';

const statuses = [
  {
    title: 'Sign Up Complete',
    subtitle: 'You have successfully signed up.',
    status: 'open',
  },
  {
    title: 'Set up your account',
    subtitle: 'Add your account details to get started.',
    renderContent: (
      <TouchableOpacity>
        <Text>vbireuvgbireubgireuf</Text>
      </TouchableOpacity>
    ),
    status: 'cancellation_previous',
  },
  {
    title: 'Account Verification',
    subtitle: 'We are verifying your account.',
    renderContent: (
      <View>
        <Text>
          We will contact you shortly if we need any additional information.
          Please contact us if you have any questions.
          Check your email for updates.
        </Text>
       <TouchableOpacity style={{ backgroundColor: '#adcaee', padding: 10, borderRadius: 5, width: 150, alignItems: 'center', marginTop: 10 }}>
        <Text style={{ color: '#fff' }}>Resend Email</Text>
       </TouchableOpacity>
      </View>
    ),
    status: 'delivery_net',
  },
  {
    title: 'Account Verified',
    subtitle: 'Your account has been verified.',
    status: 'waiting',
  },
  {
    title: 'All Set!',
    subtitle:
      "You're all set up and ready to go. Start using your account now.",
    status: 'incoming',
    renderContent: (
      <View>
        <Text>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. A ullam
          assumenda obcaecati? Minima libero vitae ducimus, omnis, excepturi
          saepe, doloribus corrupti hic deleniti id iure? Qui consequuntur at
          magnam consequatur!
        </Text>
      </View>
    ),
  },
];

const App = () => {
    return (
        <VerticalStatusProgress statuses={statuses} />
    );
};

export default App;
```

## Props

| Prop       | Description                                      | Default   |
|------------|--------------------------------------------------|-----------|
| `statuses` | An array of status objects with `label` and `completed` properties | `[]`      |
| `style`    | Custom style for the component                   | `null`    |
| `lineColor`| Color of the connecting line between statuses    | `#000`    |
| `completedColor` | Color of the completed status indicator    | `#0f0`    |
| `statuses`        | An array of status objects with `label` and `completed` properties | `[]`      |


## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
