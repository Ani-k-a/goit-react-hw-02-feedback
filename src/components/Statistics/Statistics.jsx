import PropTypes from 'prop-types';
import s from '../Statistics/Statistics.module.css';

const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
    return (
        <ul className={s.list}>
                     <li className={s.item}>
                         <p className={s.description}>Good:</p>
                         <p className={s.value}>{good}</p>
                     </li>
                     <li className={s.item}>
                         <p className={s.description}>Neutral:</p>
                         <p className={s.value}>{neutral}</p>
                     </li>
                     <li className={s.item}>
                         <p className={s.description}>Bad:</p>
                         <p className={s.value}>{bad}</p>  
                     </li>
                     <li className={s.item}>
                         <p className={s.description}>Total:</p>
                         <p className={s.value}>{total}</p>
                     </li>
                     <li className={s.item}>
                         <p className={s.description}>Positive feedback:</p>
                         <p className={s.value}>{positivePercentage + '%'}</p> 
                     </li>
                 </ul>
    )
}

export default Statistics;

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
}