import SelectGroup from "../shared/SelectGroup";

export default function VillageSelect({ village, options, onChange, disabled }) {
  return (
    <SelectGroup
      label="Village"
      name="village"
      value={village}
      options={options}
      onChange={onChange}
      disabled={disabled}
    />
  );
}
