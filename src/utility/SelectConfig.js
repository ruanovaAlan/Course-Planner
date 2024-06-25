export const weekDays = [
  { value: '1', label: 'Lunes' },
  { value: '2', label: 'Martes' },
  { value: '3', label: 'Miércoles' },
  { value: '4', label: 'Jueves' },
  { value: '5', label: 'Viernes' },
  { value: '6', label: 'Sábado' },
  { value: '0', label: 'Domingo' },
]

export const select_styles = () => ({
  control: (base, { isFocused }) => ({
    ...base,
    backgroundColor: 'rgba(15, 32, 42, 0.5)',
    borderRadius: '8px',
    borderColor: isFocused ? 'white' : 'transparent',

  }),
  menu: (base) => ({
    ...base,
    backgroundColor: '#262626',
  }),
  option: (base, { isFocused }) => ({
    ...base,
    backgroundColor: isFocused ? '#0F172A' : 'transparent',
    color: 'white',
    borderRadius: '8px'
  }),
  dropdownIndicator: (base) => ({
    ...base,
    color: 'white',
  }),
  clearIndicator: (base) => ({
    ...base,
    color: 'white',
  }),
  multiValue: (base) => ({
    ...base,
    backgroundColor: 'white',
  }),
  multiValueRemove: (base) => ({
    ...base,
    backgroundColor: 'rgba(0,0,0,0.1)',
    color: 'black',
  }),
  placeholder: (base) => ({
    ...base,
    color: 'rgba(255,255,255,0.5)',
  }),
})