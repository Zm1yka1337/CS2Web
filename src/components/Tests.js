import React, { useState, useEffect } from 'react';
import { getAuth } from 'firebase/auth';
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore';
import '../styles/Tests.css';

function Tests() {
  const [currentTest, setCurrentTest] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [testHistory, setTestHistory] = useState({});

  const auth = getAuth();
  const db = getFirestore();

  useEffect(() => {
    if (auth.currentUser) {
      loadTestHistory();
    }
  }, [auth.currentUser]);

  const loadTestHistory = async () => {
    if (!auth.currentUser) return;

    const historyDoc = await getDoc(doc(db, 'testResults', auth.currentUser.uid));
    if (historyDoc.exists()) {
      setTestHistory(historyDoc.data());
    }
  };

  const saveTestResult = async (testId, score) => {
    if (!auth.currentUser) return;

    const newHistory = {
      ...testHistory,
      [testId]: {
        lastScore: score,
        bestScore: testHistory[testId] ? 
          Math.max(testHistory[testId].bestScore, score) : 
          score,
        attempts: (testHistory[testId]?.attempts || 0) + 1,
        lastAttempt: new Date().toISOString()
      }
    };

    await setDoc(doc(db, 'testResults', auth.currentUser.uid), newHistory);
    setTestHistory(newHistory);
  };

  const tests = [
    {
      id: 'peaks',
      name: 'Peeks & Angles',
      questions: [
        {
          question: 'What is the key principle of peeking in CS2?',
          options: [
            'Always rush the angle',
            'Peek with purpose and be ready to shoot',
            'Never peek alone',
            'Only peek with utility'
          ],
          correct: 1
        },
        {
          question: 'What is the main advantage of wide peeking?',
          options: [
            'It is completely safe',
            'It allows clearing multiple angles quickly',
            'It is silent',
            'It prevents flash effects'
          ],
          correct: 1
        },
        {
          question: 'During the pre-peek phase, what should you do first?',
          options: [
            'Start shooting',
            'Check radar for team positions',
            'Use all utility',
            'Run forward'
          ],
          correct: 1
        },
        {
          question: 'What is the most important element of the execution phase?',
          options: [
            'Counter-strafe at corner',
            'Jump peek',
            'Rush through',
            'Throw all grenades'
          ],
          correct: 0
        },
        {
          question: 'What is the main purpose of jiggle peeking?',
          options: [
            'To get kills',
            'To gather information safely',
            'To throw grenades',
            'To make noise'
          ],
          correct: 1
        },
        {
          question: 'What is the biggest mistake in peeking?',
          options: [
            'Using utility',
            'Over-peeking multiple angles',
            'Moving slowly',
            'Communicating with team'
          ],
          correct: 1
        },
        {
          question: 'What should you do in the post-peek phase?',
          options: [
            'Immediately repeek',
            'Call out information to team',
            'Use all utility',
            'Disconnect from server'
          ],
          correct: 1
        },
        {
          question: 'How can you avoid being predictable when peeking?',
          options: [
            'Always peek the same way',
            'Never peek at all',
            'Mix up techniques and timing',
            'Only wide peek'
          ],
          correct: 2
        },
        {
          question: 'What is static peeking and why is it bad?',
          options: [
            'Peeking without proper movement technique',
            'Peeking very quickly',
            'Peeking with a teammate',
            'Peeking with utility'
          ],
          correct: 0
        },
        {
          question: 'What is the most important thing to maintain while peeking?',
          options: [
            'High speed',
            'Crosshair at head level',
            'Constant jumping',
            'Continuous firing'
          ],
          correct: 1
        }
      ]
    },
    {
      id: 'movement',
      name: 'Movement',
      questions: [
        {
          question: 'What is the key principle of movement in CS2?',
          options: [
            'Always run fast',
            'Stay still',
            'Good movement makes you harder to hit while maintaining accuracy',
            'Jump constantly'
          ],
          correct: 2
        },
        {
          question: 'What is the correct sequence for counter-strafing?',
          options: [
            'Just stop moving',
            'Press opposite movement key to stop instantly',
            'Jump and stop',
            'Crouch and move'
          ],
          correct: 1
        },
        {
          question: 'What is the purpose of silent landing?',
          options: [
            'To move faster',
            'To land without making sound using crouch',
            'To take no damage',
            'To shoot better'
          ],
          correct: 1
        },
        {
          question: 'What is required for successful run boosting?',
          options: [
            'Solo play',
            'Team coordination and timing',
            'No movement',
            'Special binds'
          ],
          correct: 1
        },
        {
          question: 'What affects movement accuracy the most?',
          options: [
            'Weapon choice',
            'Team position',
            'All movement reduces accuracy',
            'Only jumping'
          ],
          correct: 2
        },
        {
          question: 'What is the correct way to maintain momentum in air?',
          options: [
            'Press W',
            'Hold strafe key and move mouse smoothly',
            'Just jump',
            'Crouch only'
          ],
          correct: 1
        },
        {
          question: 'What is the most important aspect of movement training?',
          options: [
            'Master counter-strafing first',
            'Learn all jumps',
            'Practice only running',
            'Focus on crouching'
          ],
          correct: 0
        },
        {
          question: 'What makes movement predictable?',
          options: [
            'Using different paths',
            'Moving in straight lines and patterns',
            'Walking slowly',
            'Using utility'
          ],
          correct: 1
        },
        {
          question: 'When is crouch-jumping most useful?',
          options: [
            'During firefights',
            'For extra height in jumps',
            'When running',
            'While shooting'
          ],
          correct: 1
        },
        {
          question: 'What is the best way to practice movement?',
          options: [
            'Only in competitive matches',
            'Start slow and build speed with proper technique',
            'Learn advanced moves first',
            'Skip basic training'
          ],
          correct: 1
        }
      ]
    },
    {
      id: 'sounds',
      name: 'Sound System',
      questions: [
        {
          question: 'What is the key principle of sound in CS2?',
          options: [
            'Sounds are random',
            'Every action creates a unique sound for information',
            'Sounds are optional',
            'Only footsteps matter'
          ],
          correct: 1
        },
        {
          question: 'What category of sounds has Critical Importance in game?',
          options: [
            'Music',
            'Movement Sounds',
            'Radio commands',
            'Menu sounds'
          ],
          correct: 1
        },
        {
          question: 'How can you effectively mask sounds?',
          options: [
            'It is impossible',
            'Use utility explosions and coordinate with team',
            'Just run',
            'Turn off sound'
          ],
          correct: 1
        },
        {
          question: 'What is the best way to gather sound information?',
          options: [
            'Play without sound',
            'Use stereo audio and optimize settings',
            'Max volume only',
            'Use mono audio'
          ],
          correct: 1
        },
        {
          question: 'What is sound baiting?',
          options: [
            'Playing without sound',
            'Using sounds to trick enemies',
            'Random noise',
            'Team chat'
          ],
          correct: 1
        },
        {
          question: 'How do weapon sounds provide tactical information?',
          options: [
            'They do not matter',
            'Each weapon has unique sound for identification',
            'Only footsteps matter',
            'Sounds are random'
          ],
          correct: 1
        },
        {
          question: 'What is step synchronization?',
          options: [
            'Running randomly',
            'Coordinating steps with team or events',
            'Walking only',
            'No movement'
          ],
          correct: 1
        },
        {
          question: 'How should you optimize your audio settings?',
          options: [
            'Max volume everything',
            'Disable music, use stereo, adjust HRTF',
            'Use mono audio',
            'Mute everything'
          ],
          correct: 1
        },
        {
          question: 'What information can utility sounds provide?',
          options: [
            'Nothing important',
            'Early warning and location info',
            'Only damage',
            'Random data'
          ],
          correct: 1
        },
        {
          question: 'How can you use sound for team coordination?',
          options: [
            'Ignore sounds',
            'Coordinate pushes and utility timing with sound cues',
            'Play music',
            'Mute game'
          ],
          correct: 1
        }
      ]
    },
    {
      id: 'utility',
      name: 'Utility Usage',
      questions: [
        {
          question: 'What is the key principle of utility usage?',
          options: [
            'Use all at once',
            'Every piece should have specific purpose and timing',
            'Save everything',
            'Random usage'
          ],
          correct: 1
        },
        {
          question: 'What makes smoke grenades essential utility?',
          options: [
            'They do damage',
            'Site executes and map control',
            'They are cheap',
            'Easy to throw'
          ],
          correct: 1
        },
        {
          question: 'What are the key elements of pop flashes?',
          options: [
            'Throw far away',
            'Quick detonation with minimal warning',
            'Use many flashes',
            'Always bounce them'
          ],
          correct: 1
        },
        {
          question: 'What is the most important aspect of utility training?',
          options: [
            'Skip practice',
            'Practice lineups in offline mode first',
            'Use in competitive only',
            'Learn by watching'
          ],
          correct: 1
        },
        {
          question: 'What makes a one-way smoke effective?',
          options: [
            'Random throw',
            'Precise lineup for advantage peek',
            'Using multiple smokes',
            'Throwing far'
          ],
          correct: 1
        },
        {
          question: 'How should utility be used in site executes?',
          options: [
            'Use randomly',
            'Coordinate timing and combine different utility',
            'Save all utility',
            'Solo execute'
          ],
          correct: 1
        },
        {
          question: 'What is the purpose of deep flashes?',
          options: [
            'Self flash',
            'Flash far areas and delay enemy response',
            'Quick pop',
            'Team flash'
          ],
          correct: 1
        },
        {
          question: 'What makes utility timing important?',
          options: [
            'It does not matter',
            'Coordination with team movement and strategy',
            'Random timing is better',
            'Solo timing only'
          ],
          correct: 1
        },
        {
          question: 'What is the difference between jump throw and run throw?',
          options: [
            'No difference',
            'Jump throw for distance, run throw for dynamic plays',
            'Random choice',
            'Never use either'
          ],
          correct: 1
        },
        {
          question: 'How should you practice utility lineups?',
          options: [
            'Never practice',
            'Learn basic lineups and master alternatives',
            'Only in competitive',
            'Watch others'
          ],
          correct: 1
        }
      ]
    }
  ];

  const handleAnswer = (questionIndex, answerIndex) => {
    setUserAnswers({
      ...userAnswers,
      [`${currentTest}_${questionIndex}`]: answerIndex
    });
  };

  const calculateScore = () => {
    let correct = 0;
    let total = tests[currentTest].questions.length;
    
    tests[currentTest].questions.forEach((q, i) => {
      if (userAnswers[`${currentTest}_${i}`] === q.correct) {
        correct++;
      }
    });

    return { correct, total };
  };

  const handleSubmit = async () => {
    const { correct, total } = calculateScore();
    const score = Math.round((correct / total) * 100);
    
    if (auth.currentUser) {
      await saveTestResult(tests[currentTest].id, score);
    }
    
    setShowResults(true);
  };

  return (
    <div className="tests-page">
      <h1>CS2 Knowledge Tests</h1>
      
      <div className="test-navigation">
        {tests.map((test, index) => (
          <button
            key={test.id}
            className={currentTest === index ? 'active' : ''}
            onClick={() => {
              setCurrentTest(index);
              setShowResults(false);
              setUserAnswers({});
            }}
          >
            {test.name}
            {testHistory[test.id] && (
              <span className="best-score">
                Best: {testHistory[test.id].bestScore}%
              </span>
            )}
          </button>
        ))}
      </div>

      <div className="test-content">
        <h2>{tests[currentTest].name} Test</h2>
        
        {!showResults ? (
          <>
            {tests[currentTest].questions.map((q, questionIndex) => (
              <div key={questionIndex} className="question-card">
                <h3>Question {questionIndex + 1}</h3>
                <p>{q.question}</p>
                <div className="options">
                  {q.options.map((option, optionIndex) => (
                    <button
                      key={optionIndex}
                      className={
                        userAnswers[`${currentTest}_${questionIndex}`] === optionIndex
                          ? 'selected'
                          : ''
                      }
                      onClick={() => handleAnswer(questionIndex, optionIndex)}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            ))}
            
            <button 
              className="submit-button"
              onClick={handleSubmit}
            >
              Submit Test
            </button>
          </>
        ) : (
          <div className="results-card">
            <h3>Test Results</h3>
            {(() => {
              const { correct, total } = calculateScore();
              const score = Math.round((correct / total) * 100);
              return (
                <>
                  <p>Your Score: {score}%</p>
                  <p>You got {correct} out of {total} questions correct!</p>
                  {testHistory[tests[currentTest].id] && (
                    <p>Your Best Score: {testHistory[tests[currentTest].id].bestScore}%</p>
                  )}
                  <button
                    className="retry-button"
                    onClick={() => {
                      setShowResults(false);
                      setUserAnswers({});
                    }}
                  >
                    Try Again
                  </button>
                </>
              );
            })()}
          </div>
        )}
      </div>
    </div>
  );
}

export default Tests; 