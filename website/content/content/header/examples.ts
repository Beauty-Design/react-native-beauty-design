import generateCode from '@/content/utils/generateCode';
import { PACKAGE_NAME } from '@/config';

export const defaultCode =
  generateCode(`import { Header, Title } from "${PACKAGE_NAME}";

export default function App() {
  return (
    <View>
      <Header
        title="Hello Header!"
        heightDynamic={25}
      />
      <ScrollView
        scrollEventThrottle={16}
        contentContainerStyle={styleContent.wrapperScroll}
      >
        <View style={styleContent.container}>
          <Title level={2}>Default Header</Title>
        </View>

        <View style={{ height: 1500 }} />
      </ScrollView>
    </View>
  );
}

const styleContent = StyleSheet.create({
   wrapperScroll: {
    paddingHorizontal: 10,
  },
  container: {
    paddingTop: 70,
    paddingBottom: 10,
  },
})

`, ['ScrollView']);

export const onScroll =
  generateCode(`import { Header, Title, ThemeProvider, useTheme } from "${PACKAGE_NAME}";

function RenderApp() {
  const { onScroll } = useTheme();

  return (
    <View>
      <Header
        heightDynamic={25}
        title="Header"
        titleOnScroll="Beauty Design"
      />
      <ScrollView
        onScroll={onScroll}
        scrollEventThrottle={16}
        contentContainerStyle={styleContent.wrapperScroll}
      >
        <View style={styleContent.container}>
          <Title level={2}>Default Header</Title>
        </View>

        <View style={{ height: 1500 }} />
      </ScrollView>
    </View>
  );
}

export default function App() {
  return (
    <ThemeProvider
      theme={{
        theme: 'dark'
      }}
    >
      <RenderApp />
    </ThemeProvider>
  );
}

const styleContent = StyleSheet.create({
   wrapperScroll: {
    paddingHorizontal: 10,
  },
  container: {
    paddingTop: 70,
    paddingBottom: 10,
  },
})
`, ['ScrollView']);


export const usingContext =
  generateCode(`import {
  Header,
  Title,
  Icon,
  Button,
  ThemeProvider,
  useTheme,
  useNavigation,
} from "${PACKAGE_NAME}";
import React from 'react';

const heightDynamic = Platform.select({
  ios: 50,
  android: 50,
});

function RenderApp() {
  const { onScroll, colors } = useTheme();
  const { header, setValues } = useNavigation();

  const onDefaultValues = React.useCallback(() => {
    setValues({
      header: {
        heightDynamic,
        title: "Header",
        titleOnScroll: "Beauty Design",
        titlePosition: "left",
      },
    });
  }, []);

  const onWithRightIcon = () => {
    setValues({
      header: {
        heightDynamic,
        title: "Right header",
        titleOnScroll: "Left scroll",
        titlePosition: "right",
        titleOnScrollPosition: "left",
        rightIcon: (
          <Icon
            type="antdesign"
            name="appstore-o"
            color={colors.text}
          />
        ),
      },
    });
  };

  const onWithCustomBackground = () => {
    setValues({
      header: {
        title: "Custom",
        heightDynamic,
        titleOnScroll: "Header custom",
        titlePosition: "center",
        backgroundSticky: colors.yellow500,
        background: colors.primary,
        leftIcon: (
          <Icon
            type="antdesign"
            name="appstore-o"
            color={colors.text}
          />
        ),
      },
    });
  };

  React.useEffect(() => {
    onDefaultValues();
  }, [onDefaultValues])

  return (
    <View>
      <Header
        background={header?.background}
        backgroundSticky={
          header?.backgroundSticky ||
            colors.card
        }
        heightDynamic={header?.heightDynamic}
        leftIcon={header?.leftIcon}
        rightIcon={header?.rightIcon}
        title={header?.title}
        titleOnScroll={header?.titleOnScroll}
        titleOnScrollPosition={header?.titleOnScrollPosition}
        titlePosition={header?.titlePosition}
      />
      <ScrollView
        onScroll={onScroll}
        scrollEventThrottle={16}
        contentContainerStyle={styles.wrapperScroll}
      >
        <View style={styleScreen.container}>
          <Title level={2}>Header</Title>
        </View>

        <View
          style={[
            styleScreen.headContent,
            styleScreen.marginTop,
            { backgroundColor: colors.card },
          ]}
        >
          <Title level={4}>Default Header</Title>
          <Button onPress={onDefaultValues}>Restore</Button>
        </View>

        <View
          style={[
            styleScreen.headContent,
            styleScreen.marginTop,
            { backgroundColor: colors.card },
          ]}
        >
          <Title level={4}>With Right Icon</Title>
          <Button onPress={onWithRightIcon}>Try</Button>
        </View>

        <View
          style={[
            styleScreen.headContent,
            styleScreen.marginTop,
            { backgroundColor: colors.card },
          ]}
        >
          <Title level={4}>Header with custom backgrounds</Title>
          <Button onPress={onWithCustomBackground}>Try</Button>
        </View>

        <View style={{ height: 1500 }} />
      </ScrollView>
    </View>
  );
}

export default function App() {
  return (
    <ThemeProvider
      theme={{
        theme: 'dark'
      }}
      navigationSettings={{
        title: "Header",
      }}
    >
      <RenderApp />
    </ThemeProvider>
  );
}

const styleScreen = StyleSheet.create({
  container: {
    paddingTop: 70,
    paddingBottom: 10,
  },
  wrapperScroll: {
    paddingHorizontal: 10,
  },
  marginTop: {
    marginTop: 0,
  },
  headContent: {
    position: "relative",
    paddingHorizontal: 10,
    paddingVertical: 20,
    marginBottom: 20,
    borderRadius: 20,
    backgroundColor: "rgba(100, 100, 100, .8)",
  },
});

`, ['ScrollView', 'Platform']);
