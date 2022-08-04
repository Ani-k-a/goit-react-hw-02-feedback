import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css'

const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return (
        <ul className={s.list}>
            {options.map(nameEl => {
                return (
                    <li className={s.item} key={nameEl}>
                        <button type="button" name={nameEl} className={s.btn} onClick={onLeaveFeedback}>{nameEl}</button>
                    </li>
                )
            })} 
        </ul>
    )
}

export default FeedbackOptions;

FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}