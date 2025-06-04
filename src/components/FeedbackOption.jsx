
export const FeedbackOption = ({ options, onLeaveFeedback , emoji }) => {
return(
    <div >
        {options.map((option) => (
        <button type="button" key={option} className="btnOption"onClick={ () => onLeaveFeedback(option)}>
            <p>{option}</p>
            {emoji[option]}
            </button>
        ))}
    </div>
)
}