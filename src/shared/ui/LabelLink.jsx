export default function LabelLink({ href, className = '', children, ...props }) {
  return (
    <span className={`label ${className}`.trim()}>
      <a className="link-reset" href={href} {...props}>
        {children}
      </a>
    </span>
  )
}

