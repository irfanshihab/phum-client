import { Form, Input } from "antd";
import { Controller, useFormContext } from "react-hook-form";

type TInpurProps = {
  type: string;
  name: string;
  label?: string;
};
const PHInput = ({ type, name, label }: TInpurProps) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      {/* {label ? label : null} */}
      <Controller
        name={name}
        render={({ field }) => (
          <Form.Item label={label}>
            <Input {...field} type={type} id={name} size="large" />
          </Form.Item>
        )}
      />
    </div>
  );
};

export default PHInput;
