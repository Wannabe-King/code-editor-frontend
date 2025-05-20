export type DropDownItem = {
  value: string;
  label: string;
};

interface DropdownProp {
  value?: DropDownItem;
  options: DropDownItem[];
  onChange: (value: DropDownItem) => void;
}

export function Dropdown({ options, onChange, value }: DropdownProp) {
  return (
    <select className="text-black"
      onChange={(e) => {
        const selected = options.find((opt) => opt.value === e.target.value);
        if (selected) onChange(selected);
      }}
      value={value?.value}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
