export default function Toggle({ checked, onChange, id }) {
  return (
    <label className="switch" htmlFor={id}>
      <input type="checkbox" id={id} checked={checked} onChange={onChange} />
      <span className="slider" />
    </label>
  )
}

