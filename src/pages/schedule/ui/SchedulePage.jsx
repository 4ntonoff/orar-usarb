import { useEffect } from 'react'
import { logoUsarb, backgroundImage } from '../../../shared/assets'
import { days, weeks, legendItems, groups, lessonSlots } from '../../../entities/schedule/model/constants'
import GroupSearch from '../../../features/group-search/ui/GroupSearch.jsx'
import ModeToggle from '../../../features/mode-toggle/ui/ModeToggle.jsx'
import Button from '../../../shared/ui/Button.jsx'
import Select from '../../../shared/ui/Select.jsx'
import Table from '../../../shared/ui/Table.jsx'
import LabelLink from '../../../shared/ui/LabelLink.jsx'

export default function SchedulePage() {
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
            <Button className="active myToggler" id="studentMode">
              Grupe
            </Button>
            <Button className="changer2 myToggler" id="teacherMode">
              Profesori
            </Button>
            <Button className="changer myToggler" id="officeMode">
              Aule
            </Button>
          </div>
          <ModeToggle />
          <GroupSearch groups={groups} onSelect={() => {}} />
          <Select
            className="select margin-top"
            id="daySelector"
            defaultValue="0"
            options={days.map((day, index) => ({ value: index, label: day.label }))}
            placeholder="Ziua"
          />
          <Select
            className="select margin-top"
            id="weekSelector"
            defaultValue="12"
            options={weeks.map((week, index) => ({ value: index + 1, label: week }))}
            placeholder="Săptămîna"
          />
          <Select
            className="select margin-top"
            id="weekSelector2"
            defaultValue="-1"
            options={weeks.map((week, index) => ({ value: index + 1, label: week }))}
            placeholder="Săptămîna"
          />
          <Table id="shorTable">
            <thead>
              <tr>
                <th className="background-green text-center shortDay padding-remove white-border" />
                {[1, 2, 3, 4, 5, 6, 7].map((slot) => (
                  <th key={`slot-${slot}`} className="background-green width-1-8 text-center padding-remove white-border">
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
          </Table>
          <div className="flex flex-center flex-wrap" id="tableLegend">
            {legendItems.map((item) => (
              <p key={item.code} className="text-white">
                {item.code} - {item.label}
              </p>
            ))}
          </div>
          <LabelLink className="background-green" href="download" data-icon id="download">
            Descarcă orar
          </LabelLink>
          <LabelLink className="background-red margin-small-left" href="printExams" data-icon id="printExams">
            Examene
          </LabelLink>
          <LabelLink className="background-violet margin-small-left" href="#" data-icon id="plans">
            Planificare
          </LabelLink>
          <div className="alert-success">Serviciul este inactiv între ore 23:00 și 3:00</div>
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
          <Table className="table margin-remove-top" id="tableForLesssons">
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
          </Table>
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
                </ul>
              </div>
              <button className="modal-close align-center margin-top" type="button">Închide</button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}


