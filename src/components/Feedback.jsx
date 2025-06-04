import { FeedbackOption } from "./FeedbackOption"
import { Section } from "./Section"
import { Notification } from "./Notification"
import { Statistic } from "./Statistic"
import { BsFillEmojiSmileFill } from "react-icons/bs";
import { BsEmojiNeutralFill } from "react-icons/bs";
import { BsFillEmojiFrownFill } from "react-icons/bs";
import { useState , useEffect } from "react"
export const Feedback = () => {
    const [good, setGood] = useState(() =>
        Number(localStorage.getItem("good")) || 0)

    const [neutral, setNeutral] = useState(() =>
        Number(localStorage.getItem("neutral")) || 0)

    const [bad, setBad] = useState(() =>
        Number(localStorage.getItem("bad")) || 0)
    useEffect(() => {
        localStorage.setItem("good", good)
        localStorage.setItem("neutral", neutral)
        localStorage.setItem("bad", bad)
    }, [good, neutral, bad])
    const countTotalFeedback = () => {
        return good + neutral + bad;
    }
    const countPositiveFeedbackPercentage = () => {
        const total = countTotalFeedback()
        if (total === 0) {
            return 0;
        }
        return Math.round((good / total) * 100)
    }
    const handleFeedbackChange = (option) => {
        if(option === "good") {
            setGood(prev => prev + 1)
        } else if(option === "neutral"){
            setNeutral(prev => prev + 1)
        } else if(option === "bad"){
            setBad(prev => prev + 1)
        }
    }
    const totalFeedback = countTotalFeedback()
    return(
        <div >
            <Section title="Please leave feedback">
                <FeedbackOption options={["good", "neutral", "bad"]} onLeaveFeedback={handleFeedbackChange} className="btnContainer" emoji={{ good : <BsFillEmojiSmileFill />, neutral: <BsEmojiNeutralFill /> , bad:<BsFillEmojiFrownFill />}}/>
            </Section>
            {totalFeedback === 0 ? (
              <Notification message="There is no feedback"/>
            ): (
                <Section title="Statistic">
                <Statistic good={good} neutral={neutral} bad={bad} total={totalFeedback} countPositiveFeedbackPercentage={countPositiveFeedbackPercentage}/>
                </Section>
            )}
        </div>
    )
}