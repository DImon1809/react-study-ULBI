export default function MySelect({
  options,
  defaultValue,
  onChangeHandler,
  value,
}) {
  return (
    <select
      value={value}
      onChange={(event) => onChangeHandler(event.target.value)}
    >
      <option disabled value="">
        {defaultValue}
      </option>
      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
}
