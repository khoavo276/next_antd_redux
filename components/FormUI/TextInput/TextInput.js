import { Form, Input } from 'antd';

import styles from './styles.module.scss';

const TextInput = ({
  required = false,
  inputProps: inputProperties = {},
  placeholder = '',
  ...rest
}) => {
  return (
    <Form.Item required={required} className={styles.TextInput} {...rest}>
      <Input placeholder={placeholder} {...inputProperties} />
    </Form.Item>
  );
};

export default TextInput;
