export const useTheme = `import { useTheme } from 'react-native-beauty-design';

const MyApp = () => {
  const {
    theme,
    setTheme,
    colors,
    paddings,
    margins,
    borderRadius
  } useTheme();

  return null;
}

const App = () => {
  return (
    <ThemeProvider>
      <MyApp />
    </ThemeProvider>
)};`;

export const useModal = `import { View } from 'react-native';
import { useModal, Modal, Title, Button } from 'react-native-beauty-design';

const MyApp = () => {
  const [visible, toggleVisible, { onVisible, onHidden }] useModal();

  return (
    <View>
      <Button onPress={toggleVisible}>Open modal</Button>

      <Modal visible={visible} onClose={toggleVisible}>
        <Title>Welcome</Title>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Dolorum fugiat itaque repellat similique voluptate. Amet animi assumenda
          aut corporis, dolorum natus provident rerum sed vitae voluptatem? Dolor
          dolore iste optio!
        </Text>
      </Modal>
    </View>
  );
}

const App = () => {
  return (
    <ThemeProvider>
      <MyApp />
    </ThemeProvider>
)};`;
