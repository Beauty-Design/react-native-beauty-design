import React from 'react';
import { StyleSheet, View } from 'react-native';
import {
  Input,
  Title,
  Form,
  Button,
  InputScrollView,
  DatePicker,
  Select,
  Radio,
  Checkbox,
  Switch,
} from 'react-native-beauty-design';

const { TextArea } = Input;
const { useForm } = Form;

const FormScreen = () => {
  const [form, submit1] = useForm();
  const [form2, submit2] = useForm();

  const onSubmit = () => {
    form.submit();
  };

  const onSubmit2 = () => {
    form2.submit();
  };

  const onFinish = (values: any) => {
    console.log('Finish:', values);
  };

  return (
    <InputScrollView>
      <View style={styles.container}>
        {/*Basic form*/}
        <Title level={3}>Basic Form</Title>
        <Form form={form} onFinish={onFinish}>
          <Form.Item
            required
            name="email"
            label="Email"
            rules={[{ required: true, type: 'email' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            required
            name="password"
            label="Password"
            rules={[{ required: true }]}
          >
            <Input type="password" />
          </Form.Item>
          <Button onPress={submit1}>Login</Button>
        </Form>
      </View>

      {/*Form instance*/}
      <View style={styles.container}>
        <Title level={3}>Fields Form</Title>
        <Form form={form2} onFinish={onFinish}>
          <Form.Item
            required
            name="first_name"
            label="Name"
            rules={[{ required: true, message: 'Required field' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            required
            name="last_name"
            label="Last Name"
            rules={[{ required: true, message: 'Required field' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            required
            name="payment_date"
            label="Payment date"
            rules={[{ required: true, message: 'Required field' }]}
          >
            <DatePicker />
          </Form.Item>
          <Form.Item
            required
            name="gender"
            label="Gender"
            rules={[{ required: true, message: 'Required field' }]}
          >
            <Select
              items={[
                { label: 'Male', value: 'male' },
                { label: 'Female', value: 'female' },
                {
                  label: 'Other',
                  value: 'other',
                },
              ]}
            />
          </Form.Item>

          <Form.Item
            required
            name="mayor_of_age"
            label="You are over 18 years old"
            rules={[{ required: true, message: 'Required field' }]}
          >
            <Radio.Group align="vertical">
              <Radio value="si" label="Si" />
              <Radio value="no" label="No" />
            </Radio.Group>
          </Form.Item>

          <Form.Item name="description" label="Descripcion">
            <TextArea />
          </Form.Item>

          <Form.Item
            name="switch"
            rules={[
              { required: true, message: 'Required field' },
              {
                validator: (_: any, value: boolean) =>
                  value
                    ? Promise.resolve()
                    : Promise.reject(new Error('Should select switch')),
              },
            ]}
          >
            <Switch />
          </Form.Item>

          <Form.Item
            name="agree"
            rules={[
              { required: true, message: 'Required field' },
              {
                validator: (_: any, value: boolean) =>
                  value
                    ? Promise.resolve()
                    : Promise.reject(new Error('Should accept agreement')),
              },
            ]}
          >
            <Checkbox
              required
              type="square"
              size="small"
              label="I accept the terms and conditions"
            />
          </Form.Item>

          <Button onPress={submit2}>Send</Button>
        </Form>
      </View>
      <View style={{ height: 75 }} />
    </InputScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    height: '100%',
  },
  headTitle: {
    paddingLeft: 20,
    paddingRight: 20,
    borderWidth: 1,
    borderColor: 'transparent',
    borderBottomColor: 'rgba(100, 100, 100, .3)',
  },
  space: {
    marginTop: 50,
  },
});

export default FormScreen;
