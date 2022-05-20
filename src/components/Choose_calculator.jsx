import {Link} from 'react-router-dom'

import './Choose_calculator.css'

export default function Choose_calculator() {
  return (
    <div className="container choose_calculator">
        <div className="choose_calculator_title">
          Выберите калькулятор:
        </div>
        <ul className="choose_calculator_list">
            <li className="choose_calculator_item">
                <Link to='/simplex_method'>Симплекс метод</Link>
            </li>
        </ul>
    </div>
  )
}
