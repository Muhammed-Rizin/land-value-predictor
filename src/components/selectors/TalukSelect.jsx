import SelectGroup  from "../shared/SelectGroup";

export default function TalukSelect({ taluk, talukOptions, onChange }) {
  return (
    <SelectGroup
      label="Taluk"
      name="taluk"
      value={taluk}
      options={talukOptions}
      onChange={onChange}
    />
  );
}
