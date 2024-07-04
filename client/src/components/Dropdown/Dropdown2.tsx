import { ChangeEvent, useRef, useState } from "react";
import useOutsideClick from "../../hooks/useOutsideClick";
import { useFilter } from "../../hooks/useFilter2";
import ChevronUpIcon from "../Icons/ChevronUpIcon/ChevronUpIcon";
import ChevronDownIcon from "../Icons/ChevronDownIcon/ChevronDownIcon";
import { OptionType } from "../../models/option";
import style from "./Dropdown.module.scss";

type DropdownProps = {
  label: string;
  name: string;
  value: string;
  options: OptionType[];
};

const formatLabel = (value: string) =>
  value.replace(/-/g, " ").charAt(0).toUpperCase() +
  value.replace(/-/g, " ").slice(1);

const Dropdown: React.FC<DropdownProps> = ({ label, name, value, options }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { handleFilter } = useFilter();

  const dropdownRef = useRef<HTMLDivElement>(null);

  useOutsideClick(dropdownRef, () => {
    if (isOpen) setIsOpen(false);
  });

  const handleSelect = (val: string) => {
    handleFilter({ target: { name, value: val } } as ChangeEvent<
      HTMLInputElement | HTMLSelectElement
    >);
    setIsOpen(false);
  };

  return (
    <div className={style["dropdown"]} ref={dropdownRef}>
      <div
        className={style["dropdown__header"]}
        onClick={() => setIsOpen(!isOpen)}
      >
        {formatLabel(value) || label}{" "}
        {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
      </div>
      {isOpen && (
        <div className={style["dropdown__list"]}>
          <div
            className={style["dropdown__option"]}
            onClick={() => handleSelect("")}
          >
            {label}
          </div>
          {options.map((option) => (
            <div
              className={style["dropdown__option"]}
              key={option.value}
              onClick={() => handleSelect(option.value)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
