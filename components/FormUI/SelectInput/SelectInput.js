import { Form, Select } from 'antd';

import styles from './styles.module.scss';

const SelectInput = ({
  label = '推薦する人との関係',
  placeholder = '選択してください',
  loading = false,
  name = 'select',
  required,
  data,
  disabled = false,
  onChange,
  ...rest
}) => {
  return (
    <Form.Item
      name={name}
      label={label}
      rules={[{ required }]}
      className={styles.SelectInput}
      {...rest}
    >
      <Select
        loading={loading}
        options={data}
        placeholder={placeholder}
        notFoundContent={null}
        disabled={disabled}
        onChange={onChange}
      />
    </Form.Item>
  );
};

export default SelectInput;
