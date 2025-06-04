export const Statistic = ({good,neutral,bad,countPositiveFeedbackPercentage , total}) => (
       <div className="containerStatistic">
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad : {bad}</p>
        <p>Total : {total}</p>
        <p>Positive feedback : {countPositiveFeedbackPercentage()} %</p>
</div>
)