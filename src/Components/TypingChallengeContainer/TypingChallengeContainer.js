import React from 'react'
import './../TypingChallengeContainer/TypingChallengeContainer.css';
import ChallengeDetailsCard from '../ChallengeDetailsCard/ChallengeDetailsCard'
import TypingChallenge from '../TypingChallenge/TypingChallenge'

function TypingChallengeContainer({
    selectedParagraph,
    words,
    characters,
    wpm,
    timeRemaining,
    timerStarted,
    testInfo,
    onInputChange
}) {
    return (

        <div className="typing-challenge-container">
            <div className="details-container">
                <ChallengeDetailsCard cardName={"Words"} cardValue={words} />
                <ChallengeDetailsCard cardName={"Characters"} cardValue={characters} />
                <ChallengeDetailsCard cardName={"Speed"} cardValue={wpm} />
            </div>
            <div className="typewriter-container">
                <TypingChallenge
                    timerStarted={timerStarted}
                    timeRemaining={timeRemaining}
                    selectedParagraph={selectedParagraph}
                    testInfo={testInfo}
                    onInputChange={onInputChange}
                />
            </div>
        </div>

    )
}

export default TypingChallengeContainer
