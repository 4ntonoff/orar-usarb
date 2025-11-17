import { useState, useEffect } from 'react'
import logoUsarb from './assets/logo_usarb.png'
import backgroundImage from './assets/new_background_1.png'

const days = [
  { label: 'Luni', short: 'L' },
  { label: 'Marți', short: 'Ma' },
  { label: 'Miercuri', short: 'Mi' },
  { label: 'Joi', short: 'J' },
  { label: 'Vineri', short: 'V' },
  { label: 'Sîmbătă', short: 'S' },
  { label: 'Duminică', short: 'D' },
]

const weeks = [
  '1 (1.9.2025 - 7.9.2025)',
  '2 (8.9.2025 - 14.9.2025)',
  '3 (15.9.2025 - 21.9.2025)',
  '4 (22.9.2025 - 28.9.2025)',
  '5 (29.9.2025 - 5.10.2025)',
  '6 (6.10.2025 - 12.10.2025)',
  '7 (13.10.2025 - 19.10.2025)',
  '8 (20.10.2025 - 26.10.2025)',
  '9 (27.10.2025 - 2.11.2025)',
  '10 (3.11.2025 - 9.11.2025)',
  '11 (10.11.2025 - 16.11.2025)',
  '12 (17.11.2025 - 23.11.2025)',
  '13 (24.11.2025 - 30.11.2025)',
  '14 (1.12.2025 - 7.12.2025)',
  '15 (8.12.2025 - 14.12.2025)',
  '16 (15.12.2025 - 21.12.2025)',
  '17 (22.12.2025 - 28.12.2025)',
  '18 (29.12.2025 - 4.1.2026)',
  '19 (5.1.2026 - 11.1.2026)',
  '20 (12.1.2026 - 18.1.2026)',
  '21 (19.1.2026 - 25.1.2026)',
]

const legendItems = [
  { code: 'P', label: 'Prelegere' },
  { code: 'S', label: 'Seminar' },
  { code: 'L', label: 'Laborator' },
  { code: 'PC', label: 'Proiect de Curs' },
  { code: 'EP', label: 'Evaluare periodică' },
  { code: 'C', label: 'Consultație' },
  { code: 'E', label: 'Examinare' },
  { code: 'R', label: 'Reexaminare' },
  { code: 'SP', label: 'Seminar prealabil' },
  { code: 'ST', label: 'Seminar de totalizare' },
]

const groups = ['GR-101', 'GR-205', 'GR-307', 'GR-412', 'GR-518', 'GR-624', 'GR-731', 'GR-845']

const lessonSlots = [
  { start: '8:00', end: '9:30' },
  { start: '9:45', end: '11:15' },
  { start: '11:30', end: '13:00' },
  { start: '13:15', end: '14:45' },
  { start: '15:00', end: '16:30' },
  { start: '16:45', end: '18:15' },
  { start: '18:30', end: '20:00' },
]

function App() {
  const [groupSearch, setGroupSearch] = useState('')

  useEffect(() => {
    document.documentElement.style.backgroundImage = `url(${backgroundImage})`
    document.documentElement.style.backgroundRepeat = 'no-repeat'
    document.documentElement.style.backgroundSize = 'cover'
  }, [])

  return (
    <div className="container">
      <div className="margin-top" id="app">
        <section className="section-left">
          <div>
            <h4 className="text-white text-center">Orarul Cursurilor</h4>
          </div>
          <div className="flex flex-between flex-nowrap">
            <button className="button active myToggler" id="studentMode">Grupe</button>
            <button className="button changer2 myToggler" id="teacherMode">Profesori</button>
            <button className="button changer myToggler" id="officeMode">Aule</button>
          </div>
          <div className="flex margin-top overflow-auto">
            <p className="text-white margin-small-top">Regim pentru student</p>
            <label className="switch margin-left" id="isStudentMode">
              <input type="checkbox" id="isStudentModeValue" />
              <span className="slider" />
            </label>
          </div>
          <div className="flex flex-between flex-wrap">
            <div className="search search margin-top background-default" id="searchZone">
              <span />
              <input
                className="search-input width-full"
                type="search"
                id="searchInput"
                value={groupSearch}
                onChange={(e) => setGroupSearch(e.target.value)}
                autoComplete="off"
              />
              {groupSearch.length > 0 && (
                <a
                  className="form-icon form-icon-flip icon text-danger"
                  data-icon
                  href="#"
                  onClick={(e) => {
                    e.preventDefault()
                    setGroupSearch('')
                  }}
                />
              )}
            </div>
          </div>
          <div className="width-1-1 background-default margin-top overflow-auto" id="resultZone">
            <ul className="list list-divider">
              {groups.map((group, idx) => (
                <li
                  key={group}
                  className="padding-remove-vertical margin-remove-top padding-small groupName"
                  tabIndex={idx}
                >
                  {group}
                </li>
              ))}
            </ul>
          </div>
          <select className="select margin-top" id="daySelector" defaultValue="0">
            <option value="-1">Ziua</option>
            {days.map((day, index) => (
              <option key={day.label} value={index}>
                {day.label}
              </option>
            ))}
          </select>
          <select className="select margin-top" id="weekSelector" defaultValue="12">
            <option value="-1">Săptămîna</option>
            {weeks.map((week, index) => (
              <option key={week} value={index + 1} className="initial">
                {week}
              </option>
            ))}
          </select>
          <select className="select margin-top" id="weekSelector2" defaultValue="-1">
            <option value="-1">Săptămîna</option>
            {weeks.map((week, index) => (
              <option key={week} value={index + 1}>
                {week}
              </option>
            ))}
          </select>
          <table className="table" id="shorTable">
            <thead>
              <tr>
                <th className="background-green text-center shortDay padding-remove white-border" />
                {[1, 2, 3, 4, 5, 6, 7].map((slot) => (
                  <th
                    key={`slot-${slot}`}
                    className="background-green width-1-8 text-center padding-remove white-border"
                  >
                    {slot}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {days.map((day) => (
                <tr key={day.short}>
                  <td className="background-green text-center shortDay padding-remove" data-id="weekTrigger">
                    {day.short}
                  </td>
                  {[...Array(7)].map((_, idx) => (
                    <td key={`${day.short}-${idx}`} className="width-1-8 text-center background-white padding-remove">
                      {'\u00A0'}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex flex-center flex-wrap" id="tableLegend">
            {legendItems.map((item) => (
              <p key={item.code} className="text-white">
                {item.code} - {item.label}
              </p>
            ))}
          </div>
          <span className="label background-green">
            <a className="link-reset" href="download" data-icon id="download">
              Descarcă orar
            </a>
          </span>
          <span className="label background-red margin-small-left">
            <a className="link-reset" href="printExams" data-icon id="printExams">
              Examene
            </a>
          </span>
          <span className="label background-violet margin-small-left">
            <a className="link-reset" href="#" data-icon id="plans">
              Planificare
            </a>
          </span>
          <div className="alert-success">
            Serviciul este inactiv între ore 23:00 și 3:00
          </div>
        </section>
        <section className="section-right" id="section2">
          <img
            className="align-center margin-small-bottom"
            src={logoUsarb}
            alt="Logo universitatii"
            width="130"
            height="191"
            id="headerLogo"
          />
          <h4 className="text-center text-white margin-remove-top margin-remove-bottom" id="headerText">
            UNIVERSITATEA DE STAT „ALECU RUSSO” DIN BĂLȚI
          </h4>
          <table className="table margin-remove-top" id="tableForLesssons">
            <tbody>
              {lessonSlots.map((slot) => (
                <tr key={`${slot.start}-${slot.end}`}>
                  <td className="background-green width-1-5 col-space text-center">
                    <span className="display-block">{slot.start}</span>
                    <span className="display-block">{slot.end}</span>
                  </td>
                  <td className="lessonsHide background-white width-4-5 text-center padding-remove">
                    <div className="simple">
                      <strong>-</strong>
                      <p className="margin-remove">Tip</p>
                      <p className="margin-remove">Profesor</p>
                      <strong>Cabinet</strong>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="modal-container" id="plansModal">
            <div className="modal-dialog modal-body">
              <h3 className="modal-title">Orele planificate și realizate</h3>
              <div>
                <h4>
                  Profesor <span className="text-bold" id="prof" />
                </h4>
                <ul className="tab">
                  <li className="active">
                    <a href="#">Licenta</a>
                  </li>
                  <li>
                    <a href="#">Master</a>
                  </li>
                  <li>
                    <a href="#">Colegiu</a>
                  </li>
                  <li>
                    <a href="#">Plata cu ora</a>
                  </li>
                </ul>
                <ul className="switcher margin" id="plansContent">
                  <li>
                    <div className="container">
                      <div>
                        <p className="width-1-6">Grupa</p>
                        <div className="width-1-4">
                          <select className="select" aria-label="Select" id="plansLicentaGroup" defaultValue="-1">
                            <option value="-1">Selectați</option>
                          </select>
                        </div>
                        <p className="width-1-6">Disciplina</p>
                        <div className="width-1-3">
                          <select className="select" aria-label="Select" id="plansLicentaDiscipline" defaultValue="-1">
                            <option value="-1">Selectați</option>
                          </select>
                        </div>
                      </div>
                      <div className="flex plansLicentaInfo margin-top flex-around">
                        <div>Planificat</div>
                        <div>Publicat în orar</div>
                        <div>Realizat</div>
                      </div>
                      <div className="planTable">
                        <table className="table margin-top" id="planLicentaTable">
                          <thead>
                            <tr>
                              <th>Nr.</th>
                              <th>Săptămîna/Data</th>
                              <th>Tip</th>
                              <th>Ziua</th>
                              <th>Ora</th>
                              <th>Disciplina</th>
                            </tr>
                          </thead>
                          <tbody />
                        </table>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="container">
                      <div>
                        <p className="width-1-6">Grupa</p>
                        <div className="width-1-4">
                          <select className="select" aria-label="Select" id="plansMasterGroup" defaultValue="-1">
                            <option value="-1">Selectați</option>
                          </select>
                        </div>
                        <p className="width-1-6">Disciplina</p>
                        <div className="width-1-3">
                          <select className="select" aria-label="Select" id="plansMasterDiscipline" defaultValue="-1">
                            <option value="-1">Selectați</option>
                          </select>
                        </div>
                      </div>
                      <div className="flex plansMasterInfo margin-top flex-around">
                        <div>Planificat</div>
                        <div>Publicat în orar</div>
                        <div>Realizat</div>
                      </div>
                      <div className="planTable">
                        <table className="table margin-top" id="planMasterTable">
                          <thead>
                            <tr>
                              <th>Nr.</th>
                              <th>Săptămîna/Data</th>
                              <th>Tip</th>
                              <th>Ziua</th>
                              <th>Ora</th>
                              <th>Disciplina</th>
                            </tr>
                          </thead>
                          <tbody />
                        </table>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="container">
                      <div>
                        <p className="width-1-6">Grupa</p>
                        <div className="width-1-4">
                          <select className="select" aria-label="Select" id="plansCollegeGroup" defaultValue="-1">
                            <option value="-1">Selectați</option>
                          </select>
                        </div>
                        <p className="width-1-6">Disciplina</p>
                        <div className="width-1-3">
                          <select className="select" aria-label="Select" id="plansCollegeDiscipline" defaultValue="-1">
                            <option value="-1">Selectați</option>
                          </select>
                        </div>
                      </div>
                      <div className="flex plansCollegeInfo margin-top flex-around">
                        <div>Planificat</div>
                        <div>Publicat în orar</div>
                        <div>Realizat</div>
                      </div>
                      <div className="planTable">
                        <table className="table margin-top" id="planCollegeTable">
                          <thead>
                            <tr>
                              <th>Nr.</th>
                              <th>Săptămîna/Data</th>
                              <th>Tip</th>
                              <th>Ziua</th>
                              <th>Ora</th>
                              <th>Disciplina</th>
                            </tr>
                          </thead>
                          <tbody />
                        </table>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="container">
                      <div>
                        <p className="width-1-6">Ciclu</p>
                        <div className="width-1-4">
                          <select className="select" aria-label="Select" id="plataCuOraCiclu" defaultValue="1">
                            <option value="1">Licenta</option>
                            <option value="2">Master</option>
                          </select>
                        </div>
                        <p className="width-1-6">Grupa</p>
                        <div className="width-1-4">
                          <select className="select" aria-label="Select" id="plataCuOraGroup" defaultValue="-1">
                            <option value="-1">Selectați</option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <p className="width-1-6">Disciplina</p>
                        <div className="width-1-3">
                          <select className="select" aria-label="Select" id="plataCuOraDiscipline" defaultValue="-1">
                            <option value="-1">Selectați</option>
                          </select>
                        </div>
                        <div className="width-1-4 text-right">
                          <button className="button background-primary margin-left" type="button">
                            Adauga la plan
                          </button>
                        </div>
                      </div>
                      <div className="planTable">
                        <table className="table margin-top" id="plataCuOraTable">
                          <thead>
                            <tr>
                              <th>Nr.</th>
                              <th>Ciclu</th>
                              <th>Grupa</th>
                              <th>Disciplina</th>
                              <th>Actiuni</th>
                            </tr>
                          </thead>
                          <tbody />
                        </table>
                      </div>
                      <h2 className="text-center">Printează document</h2>
                      <div>
                        <p className="width-1-6">Luna</p>
                        <div className="width-1-3">
                          <select className="select" aria-label="Select" id="plataCuOraMonth" defaultValue="-1">
                            <option value="-1">Selectați</option>
                            <option value="9">Septembrie</option>
                            <option value="10">Octombrie</option>
                            <option value="11">Noiembrie</option>
                            <option value="12">Decembrie</option>
                            <option value="1">Ianuarie</option>
                            <option value="2">Februarie</option>
                            <option value="3">Martie</option>
                            <option value="4">Aprilie</option>
                            <option value="5">Mai</option>
                            <option value="6">Iunie</option>
                          </select>
                        </div>
                        <div className="width-1-4 text-right">
                          <button className="button background-secondary margin-left" type="button">
                            Printeaza
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <p className="text-right">
                <button className="button background-violet modal-close margin-left" type="button">
                  Închide
                </button>
              </p>
            </div>
          </div>
        </section>
      </div>
      <div className="modal-full" id="modal-full">
        <div className="modal-dialog">
          <button className="modal-close-full close-large" type="button" />
          <div className="grid-collapse child-width-1-2 flex-middle">
            <div className="background-cover" style={{ backgroundImage: "url('/img/universitet_1.jpeg')" }} />
            <div className="padding-large" id="tempAnimation">
              <h1>Stimați studenți și masteranzi USARB</h1>
              <p>
                Vă anunțăm că trebuie să vă prezentați în data de {' '}<strong>4 noiembrie 2025 în Nortek</strong>{' '}în scopul ridicării {' '}<strong>cardurilor bancare pentru bursă.</strong>{' '}Prezență obligatorie pentru toți cei care nu și-au primit cardurile.
              </p>
              <p>
                Începând cu {' '}<strong>ora 10.00</strong>{' '}reprezentanții Băncii Moldindconbank vor oferi cardurile.
              </p>
              <p>
                <strong>Vă rugăm să aveți cu Dvs.: buletinul de identitate.</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App





