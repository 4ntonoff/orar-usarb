import { useState } from 'react'
import Toggle from '../../../shared/ui/Toggle.jsx'

export default function ModeToggle() {
  const [isStudentMode, setIsStudentMode] = useState(true)

  return (
    <div className="flex margin-top overflow-auto">
      <p className="text-white margin-small-top">Regim pentru student</p>
      <div className="margin-left">
        <Toggle
          id="isStudentMode"
          checked={isStudentMode}
          onChange={(event) => setIsStudentMode(event.target.checked)}
        />
      </div>
    </div>
  )
}

