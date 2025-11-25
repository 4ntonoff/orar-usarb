export default function Select({ options, placeholder, ...props }) {
  return (
    <select className="select" {...props}>
      {placeholder && (
        <option value="-1" disabled={props.defaultValue !== '-1'}>
          {placeholder}
        </option>
      )}
      {options.map(({ value, label }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  )
}

