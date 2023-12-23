import React, { useEffect, useState, useRef } from "react";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export interface Option {
  label: string;
  value: string | number;
}

export interface SearchSelectProps {
  options: Option[];
  label: string;
  onSelect: (selectedOption: Option | null) => void;
  onSearchChange?: (value: string) => void;
  selected: Option | null;
  debounceDelay?: number; 
}

export const SearchSelect: React.FC<SearchSelectProps> = ({
  options,
  label,
  onSelect,
  onSearchChange,
  selected,
  debounceDelay = 300 
}) => {
  const [selectedOption, setSelectedOption] = useState<Option | null>(selected);
  const debounceTimer = useRef<number | null>(null);

  useEffect(() => {
    setSelectedOption(selected);
  }, [selected]);

  const handleSelect = (
    event: React.ChangeEvent<{}>,
    newValue: Option | null
  ) => {
    setSelectedOption(newValue);
    onSelect(newValue);
  };

  const handleInputChange = (
    event: React.ChangeEvent<{}>,
    newInputValue: string
  ) => {
    if (debounceTimer.current) {
      clearTimeout(debounceTimer.current);
    }

    debounceTimer.current = window.setTimeout(() => {
      if (onSearchChange) {
        onSearchChange(newInputValue);
      }
    }, debounceDelay);
  };

  return (
    <FormControl fullWidth margin="normal">
      <Autocomplete
        fullWidth
        value={selectedOption}
        onChange={handleSelect}
        onInputChange={handleInputChange}
        id="searchable-select"
        options={options}
        getOptionLabel={(option) => option.label}
        renderInput={(params) => (
          <TextField {...params} label={label} variant="outlined" />
        )}
      />
    </FormControl>
  );
};
