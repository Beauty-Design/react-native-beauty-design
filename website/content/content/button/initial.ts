import generateCode from '@/content/utils/generateCode';

export default generateCode(`import { Button, Space } from 'react-native-beauty-design';

export default function App() {
  return (
    <View style={styles.center}>
      <Space>
        <Button>Hi!</Button>
        <Button color="red500">Hello Word!</Button>
        <Button
          fullWidth
          color="secondary"
        >
          This is a Button!
        </Button>
      </Space>
    </View>
  );
}`);
