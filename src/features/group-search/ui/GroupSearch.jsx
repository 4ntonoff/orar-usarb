import { useState } from 'react'

export default function GroupSearch({ groups, onSelect }) {
  const [groupSearch, setGroupSearch] = useState('')

  const filtered = groups.filter((group) => group.toLowerCase().includes(groupSearch.toLowerCase()))

  return (
    <div className="width-1-1" id="groupSearch">
      <div className="search margin-top background-default">
        <span aria-hidden="true" />
        <input
          className="search-input width-full"
          type="search"
          value={groupSearch}
          onChange={(e) => setGroupSearch(e.target.value)}
          placeholder="Căutare grupă"
          aria-label="Căutare grupă"
          autoComplete="off"
        />
        {groupSearch.length > 0 && (
          <button
            type="button"
            className="form-icon-flip icon text-danger"
            aria-label="Șterge textul"
            onClick={() => {
              setGroupSearch('')
            }}
          />
        )}
      </div>
      <div className="width-1-1 background-default margin-top overflow-auto" id="resultZone">
        <ul className="list list-divider">
          {filtered.map((group, idx) => (
            <li
              key={group}
              className="padding-remove-vertical margin-remove-top padding-small groupName"
              tabIndex={idx}
              onClick={() => onSelect(group)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') onSelect(group)
              }}
            >
              {group}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

