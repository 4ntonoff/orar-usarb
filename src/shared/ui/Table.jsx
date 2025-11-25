export default function Table({ children, className = '', ...props }) {
  return (
    <table className={`table ${className}`.trim()} {...props}>
      {children}
    </table>
  )
}

