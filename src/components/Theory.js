import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Theory.css';

function Theory() {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState('peaks');
  const [expandedCards, setExpandedCards] = useState([]);

  const toggleCard = (cardId) => {
    setExpandedCards(prev => 
      prev.includes(cardId) 
        ? prev.filter(id => id !== cardId)
        : [...prev, cardId]
    );
  };

  // Animation for skill bars
  useEffect(() => {
    const skillBars = document.querySelectorAll('.skill-bar[data-progress]');
    skillBars.forEach(bar => {
      const progress = bar.getAttribute('data-progress');
      const progressBar = bar.querySelector('.skill-progress');
      progressBar.style.width = progress;
    });
  }, [activeSection]);

  const sections = [
    { id: 'peaks', name: 'Peeks', icon: 'visibility' },
    { id: 'movement', name: 'Movement', icon: 'directions_run' },
    { id: 'sounds', name: 'Sounds', icon: 'volume_up' },
    { id: 'utility', name: 'Utility', icon: 'grid_view' },
    { id: 'positions', name: 'Positions', icon: 'place' },
    { id: 'economy', name: 'Economy', icon: 'payments' }
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'peaks':
        return (
          <div className="theory-content">
            <h2>Peeking in CS2</h2>
            <div className="theory-section">
              <h3>Peeking Fundamentals</h3>
              <p>Mastering different peeking techniques is crucial for gaining advantages in gunfights.</p>

              <div className="info-box">
                <strong>Key Principle:</strong> Always peek with purpose and be ready to shoot.
              </div>

              <h4>Basic Peeking Techniques</h4>
              <div className="technique-cards">
                <div className={`technique-card ${expandedCards.includes('card-1') ? 'expanded' : ''}`} 
                     onClick={() => toggleCard('card-1')}>
                  <h5>Wide Peek</h5>
                  <p>Swinging wide around a corner to clear multiple angles quickly.</p>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: '70%' }}></div>
                  </div>
                  <span>Risk Level: High</span>
                  <ul>
                    <li>Best for: Multiple enemies</li>
                    <li>When: Team support available</li>
                    <li>Avoid: ECO rounds</li>
                  </ul>
                  <div className="expandable-content">
                    <h6>Key Elements:</h6>
                    <ul>
                      <li>Perfect pre-aim at head level</li>
                      <li>Aggressive wide peek</li>
                      <li>Pre-fire common angles</li>
                      <li>Maximum acceleration peeking</li>
                    </ul>
                  </div>
                </div>

                <div className={`technique-card ${expandedCards.includes('card-2') ? 'expanded' : ''}`} 
                     onClick={() => toggleCard('card-2')}>
                  <h5>Shoulder Peek</h5>
                  <p>Quick peek to bait out shots and gather information.</p>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: '90%' }}></div>
                  </div>
                  <span>Risk Level: Low</span>
                  <ul>
                    <li>Best for: Info gathering</li>
                    <li>When: Unsure of enemy position</li>
                    <li>Combine with: Counter-strafing</li>
                  </ul>
                  <div className="expandable-content">
                    <h6>Key Elements:</h6>
                    <ul>
                      <li>Perfect counter-strafe</li>
                      <li>Head-level crosshair</li>
                      <li>Minimal exposure</li>
                      <li>Single-bullet accuracy</li>
                    </ul>
                  </div>
                </div>

                <div className={`technique-card ${expandedCards.includes('card-3') ? 'expanded' : ''}`} 
                     onClick={() => toggleCard('card-3')}>
                  <h5>Jiggle Peek</h5>
                  <p>Rapid back and forth movement to spot enemies.</p>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: '85%' }}></div>
                  </div>
                  <span>Risk Level: Medium</span>
                  <ul>
                    <li>Best for: AWP baiting</li>
                    <li>When: Checking common angles</li>
                    <li>Key: Rhythm timing</li>
                  </ul>
                  <div className="expandable-content">
                    <h6>Key Elements:</h6>
                    <ul>
                      <li>Perfect pre-aim at head level</li>
                      <li>Aggressive wide peek</li>
                      <li>Pre-fire common angles</li>
                      <li>Maximum acceleration peeking</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h4>Advanced Peeking Concepts</h4>
              <table className="theory-table">
                <thead>
                  <tr>
                    <th>Technique</th>
                    <th>Description</th>
                    <th>Best Used For</th>
                    <th>Counter Play</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Pre-aim Peek</td>
                    <td>Peeking with crosshair already placed at head level</td>
                    <td>Known positions</td>
                    <td>Off-angle holding</td>
                  </tr>
                  <tr>
                    <td>Flash Peek</td>
                    <td>Peeking immediately after flashbang</td>
                    <td>Site entry</td>
                    <td>Look away/retreat</td>
                  </tr>
                  <tr>
                    <td>Crouch Peek</td>
                    <td>Peeking while crouched</td>
                    <td>Surprising enemies</td>
                    <td>Pre-aim low</td>
                  </tr>
                  <tr>
                    <td>Double Peek</td>
                    <td>Two players peeking same angle with slight delay</td>
                    <td>Trading kills</td>
                    <td>Quick repositioning</td>
                  </tr>
                  <tr>
                    <td>Strafe Peek</td>
                    <td>Peeking while strafing for momentum</td>
                    <td>Dynamic entry</td>
                    <td>Spray control</td>
                  </tr>
                </tbody>
              </table>

              <h4>Peeking Timings</h4>
              <div className="flow-diagram">
                <div className="flow-step">
                  <h5>Pre-Peek Phase</h5>
                  <p>1. Check radar for team positions</p>
                  <p>2. Communicate intention</p>
                  <p>3. Prepare utility if needed</p>
                </div>
                <div className="flow-step">
                  <h5>Execution Phase</h5>
                  <p>1. Counter-strafe at corner</p>
                  <p>2. Clear angles one by one</p>
                  <p>3. Ready to shoot or fall back</p>
                </div>
                <div className="flow-step">
                  <h5>Post-Peek Phase</h5>
                  <p>1. Call out information</p>
                  <p>2. Support teammates</p>
                  <p>3. Prepare for counter-peek</p>
                </div>
              </div>



              <h4>Pro Player Signature Peeks</h4>
              <div className="technique-cards">
                <div className={`technique-card ${expandedCards.includes('card-4') ? 'expanded' : ''}`} 
                     onClick={() => toggleCard('card-4')}>
                  <h5>XANTARES Peek</h5>
                  <div className="player-info">
                    <span>İsmailcan Dörtkardeş</span>
                    <span>Known for: Aggressive pre-firing</span>
                  </div>
                  <p>An extremely aggressive peek style with perfect pre-aim and pre-fire timing.</p>
                  <div className="expandable-content">
                    <h6>Key Elements:</h6>
                    <ul>
                      <li>Perfect pre-aim at head level</li>
                      <li>Aggressive wide peek</li>
                      <li>Pre-fire common angles</li>
                      <li>Maximum acceleration peeking</li>
                    </ul>
                  </div>
                </div>

                <div className={`technique-card ${expandedCards.includes('card-5') ? 'expanded' : ''}`} 
                     onClick={() => toggleCard('card-5')}>
                  <h5>Ferrari Peek</h5>
                  <div className="player-info">
                    <span>Named after fast cars</span>
                    <span>Type: Speed peek technique</span>
                  </div>
                  <p>Ultra-fast wide swing with maximum acceleration, often used with SMGs or rifles.</p>
                  <div className="expandable-content">
                    <h6>Key Elements:</h6>
                    <ul>
                      <li>Maximum speed peek</li>
                      <li>Wide swing angle</li>
                      <li>Surprise factor</li>
                      <li>Good for multi-kills</li>
                    </ul>
                  </div>
                </div>

                <div className={`technique-card ${expandedCards.includes('card-6') ? 'expanded' : ''}`} 
                     onClick={() => toggleCard('card-6')}>
                  <h5>ScreaM Peek</h5>
                  <div className="player-info">
                    <span>Adil Benrlitom</span>
                    <span>Known for: One-taps</span>
                  </div>
                  <p>Perfect counter-strafe peek with precise head-level one-tap accuracy.</p>
                  <div className="expandable-content">
                    <h6>Key Elements:</h6>
                    <ul>
                      <li>Perfect counter-strafe</li>
                      <li>Head-level crosshair</li>
                      <li>Minimal exposure</li>
                      <li>Single-bullet accuracy</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h4>Common Mistakes</h4>
              <div className="technique-cards">
                <div className={`technique-card ${expandedCards.includes('card-7') ? 'expanded' : ''}`} 
                     onClick={() => toggleCard('card-7')}>
                  <h5>Over-peeking</h5>
                  <p>Exposing yourself to too many angles at once.</p>
                  <ul>
                    <li>Clear one angle at a time</li>
                    <li>Use minimal exposure</li>
                    <li>Have escape route ready</li>
                  </ul>
                </div>
                <div className={`technique-card ${expandedCards.includes('card-8') ? 'expanded' : ''}`} 
                     onClick={() => toggleCard('card-8')}>
                  <h5>Static Peeking</h5>
                  <p>Peeking without proper movement technique.</p>
                  <ul>
                    <li>Always use counter-strafing</li>
                    <li>Stay mobile between peeks</li>
                    <li>Vary peek timing</li>
                  </ul>
                </div>
                <div className={`technique-card ${expandedCards.includes('card-9') ? 'expanded' : ''}`} 
                     onClick={() => toggleCard('card-9')}>
                  <h5>Predictable Patterns</h5>
                  <p>Using the same peeking pattern repeatedly.</p>
                  <ul>
                    <li>Mix up techniques</li>
                    <li>Change timing</li>
                    <li>Use utility to disrupt</li>
                  </ul>
                </div>
              </div>
              <div className="warning-box">
                <strong>Remember:</strong> Never peek the same angle twice in the same way against good players!
                <ul>
                  <li>Keep crosshair at head level</li>
                  <li>Pre-aim common angles</li>
                  <li>Always have a purpose when peeking</li>
                  <li>Communicate with your team</li>
                </ul>
              </div>
            </div>
          </div>
        );

      case 'movement':
        return (
          <div className="theory-content">
            <h2>Movement in CS2</h2>
            <div className="theory-section">
              <h3>Movement Mechanics</h3>
              <p>Mastering movement in CS2 is crucial for survival and effective combat.</p>

              <div className="info-box">
                <strong>Key Principle:</strong> Good movement makes you harder to hit while maintaining accuracy.
              </div>

              <h4>Basic Movement Techniques</h4>
              <table className="theory-table">
                <thead>
                  <tr>
                    <th>Technique</th>
                    <th>Description</th>
                    <th>Key Binds</th>
                    <th>Difficulty</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Counter-strafing</td>
                    <td>Stopping instantly by pressing opposite movement key</td>
                    <td>A/D or W/S</td>
                    <td>Medium</td>
                  </tr>
                  <tr>
                    <td>Bunny hop</td>
                    <td>Maintaining momentum through consecutive jumps</td>
                    <td>Space + Strafe</td>
                    <td>High</td>
                  </tr>
                  <tr>
                    <td>Air-strafing</td>
                    <td>Controlling movement in air</td>
                    <td>Mouse + A/D</td>
                    <td>High</td>
                  </tr>
                  <tr>
                    <td>Crouch-jump</td>
                    <td>Jumping while crouched for extra height</td>
                    <td>Space + Ctrl</td>
                    <td>Low</td>
                  </tr>
                  <tr>
                    <td>Silent-walk</td>
                    <td>Walking without making sound</td>
                    <td>Shift</td>
                    <td>Low</td>
                  </tr>
                </tbody>
              </table>

              <div className="warning-box">
                <strong>Remember:</strong> Moving while shooting drastically reduces accuracy. Always counter-strafe before shooting!
              </div>

              <h4>Advanced Movement Concepts</h4>
              <div className="technique-cards">
                <div className={`technique-card ${expandedCards.includes('card-10') ? 'expanded' : ''}`} 
                     onClick={() => toggleCard('card-10')}>
                  <h4>Silent Landing</h4>
                  <p>Landing without making sound by using crouch.</p>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: '75%' }}></div>
                  </div>
                  <span>Mastery Level: Advanced</span>
                  <ul>
                    <li>Hold crouch before landing</li>
                    <li>Works up to medium heights</li>
                    <li>Perfect for sneaking</li>
                  </ul>
                </div>

                <div className={`technique-card ${expandedCards.includes('card-11') ? 'expanded' : ''}`} 
                     onClick={() => toggleCard('card-11')}>
                  <h4>Run Boosting</h4>
                  <p>Boosting teammate by running into them while they jump.</p>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: '60%' }}></div>
                  </div>
                  <span>Mastery Level: Expert</span>
                  <ul>
                    <li>Requires coordination</li>
                    <li>Both players must move</li>
                    <li>Timing is crucial</li>
                  </ul>
                </div>

                <div className={`technique-card ${expandedCards.includes('card-12') ? 'expanded' : ''}`} 
                     onClick={() => toggleCard('card-12')}>
                  <h4>Surf Movement</h4>
                  <p>Using angled surfaces to maintain speed.</p>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: '85%' }}></div>
                  </div>
                  <span>Mastery Level: Expert</span>
                  <ul>
                    <li>Hold strafe key</li>
                    <li>Move mouse smoothly</li>
                    <li>Practice on surf maps</li>
                  </ul>
                </div>
              </div>

              <h4>Movement Speed Comparison</h4>
              <table className="theory-table">
                <thead>
                  <tr>
                    <th>State</th>
                    <th>Speed (units/s)</th>
                    <th>Sound Level</th>
                    <th>Usage</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Running</td>
                    <td>250</td>
                    <td>Loud</td>
                    <td>Fast rotations, rushing</td>
                  </tr>
                  <tr>
                    <td>Crouching</td>
                    <td>85</td>
                    <td>Silent</td>
                    <td>Sneaking, accuracy</td>
                  </tr>
                  <tr>
                    <td>Walking (Shift)</td>
                    <td>100</td>
                    <td>Silent</td>
                    <td>Stealth movement</td>
                  </tr>
                  <tr>
                    <td>Scoped AWP</td>
                    <td>100</td>
                    <td>Normal</td>
                    <td>Holding angles</td>
                  </tr>
                </tbody>
              </table>

              <h4>Movement Training</h4>
              <div className="flow-diagram">
                <div className="flow-step">
                  <h5>Basic Training</h5>
                  <p>1. Master counter-strafing</p>
                  <p>2. Practice smooth transitions</p>
                  <p>3. Learn basic jumps</p>
                </div>
                <div className="flow-step">
                  <h5>Intermediate Skills</h5>
                  <p>1. Bunny hop consistency</p>
                  <p>2. Air strafing control</p>
                  <p>3. Silent movement</p>
                </div>
                <div className="flow-step">
                  <h5>Advanced Techniques</h5>
                  <p>1. Run boosts</p>
                  <p>2. Surf control</p>
                  <p>3. Jump throws</p>
                </div>
              </div>

              <h4>Common Movement Mistakes</h4>
              <div className="technique-cards">
                <div className={`technique-card ${expandedCards.includes('card-13') ? 'expanded' : ''}`} 
                     onClick={() => toggleCard('card-13')}>
                  <h5>Poor Counter-strafing</h5>
                  <p>Not stopping completely before shooting.</p>
                  <ul>
                    <li>Practice timing</li>
                    <li>Use dynamic crosshair</li>
                    <li>Start slow, build speed</li>
                  </ul>
                </div>
                <div className={`technique-card ${expandedCards.includes('card-14') ? 'expanded' : ''}`} 
                     onClick={() => toggleCard('card-14')}>
                  <h5>Predictable Movement</h5>
                  <p>Moving in straight lines or patterns.</p>
                  <ul>
                    <li>Mix up direction</li>
                    <li>Use irregular timing</li>
                    <li>Combine techniques</li>
                  </ul>
                </div>
                <div className={`technique-card ${expandedCards.includes('card-15') ? 'expanded' : ''}`} 
                     onClick={() => toggleCard('card-15')}>
                  <h5>Noisy Movement</h5>
                  <p>Making unnecessary sound.</p>
                  <ul>
                    <li>Use walk key</li>
                    <li>Time your steps</li>
                    <li>Know sound ranges</li>
                  </ul>
                </div>
              </div>

              <div className="warning-box">
                <strong>Remember:</strong> Good movement is the foundation of survival and accuracy!
                <ul>
                  <li>Master counter-strafing first</li>
                  <li>Practice movement daily</li>
                  <li>Stay unpredictable</li>
                  <li>Know when to walk</li>
                </ul>
              </div>
            </div>
          </div>
        );

      case 'sounds':
        return (
          <div className="theory-content">
            <h2>Sound System in CS2</h2>
            <div className="theory-section">
              <h3>Understanding Sound Mechanics</h3>
              <p>Sound is a crucial information source in CS2, often determining the outcome of rounds.</p>

              <div className="info-box">
                <strong>Key Principle:</strong> Every action creates a unique sound that can be used to gain information.
              </div>

              <h4>Sound Categories</h4>
              <div className="technique-cards">
                <div className={`technique-card ${expandedCards.includes('card-16') ? 'expanded' : ''}`} 
                     onClick={() => toggleCard('card-16')}>
                  <h5>Movement Sounds</h5>
                  <div className="skill-bar" data-progress="90%">
                    <div className="skill-progress" style={{ width: '90%' }}></div>
                  </div>
                  <span>Critical Importance</span>
                  <ul>
                    <li>Running: Loudest, heard from far</li>
                    <li>Walking: Medium range</li>
                    <li>Shift-walking: Silent</li>
                    <li>Crouch-walking: Silent</li>
                    <li>Landing sounds: Based on fall height</li>
                    <li>Ladder movement: Distinct sound</li>
                    <li>Surface-specific sounds</li>
                  </ul>
                </div>

                <div className={`technique-card ${expandedCards.includes('card-17') ? 'expanded' : ''}`} 
                     onClick={() => toggleCard('card-17')}>
                  <h5>Weapon Sounds</h5>
                  <div className="skill-bar" data-progress="85%">
                    <div className="skill-progress" style={{ width: '85%' }}></div>
                  </div>
                  <span>High Importance</span>
                  <ul>
                    <li>Shooting: Unique per weapon</li>
                    <li>Reloading: Multiple phases</li>
                    <li>Scope: AWP/Scout specific</li>
                    <li>Weapon switch: Tactical info</li>
                    <li>Weapon drops: Location info</li>
                    <li>Knife sounds: Close combat</li>
                  </ul>
                </div>

                <div className={`technique-card ${expandedCards.includes('card-18') ? 'expanded' : ''}`} 
                     onClick={() => toggleCard('card-18')}>
                  <h5>Utility Sounds</h5>
                  <div className="skill-bar" data-progress="80%">
                    <div className="skill-progress" style={{ width: '80%' }}></div>
                  </div>
                  <span>Tactical Information</span>
                  <ul>
                    <li>Grenade pins: Early warning</li>
                    <li>Bounces: Location info</li>
                    <li>Explosions: Area denial</li>
                    <li>Molotov: Area control</li>
                    <li>Smoke deploy: Setup timing</li>
                    <li>Flash pop: Entry timing</li>
                  </ul>
                </div>
              </div>

              <h4>Sound Ranges</h4>
              <table className="theory-table">
                <thead>
                  <tr>
                    <th>Action</th>
                    <th>Range (units)</th>
                    <th>Through Walls</th>
                    <th>Strategic Use</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Running</td>
                    <td>800</td>
                    <td>Reduced 50%</td>
                    <td>Rotation timing</td>
                  </tr>
                  <tr>
                    <td>Walking</td>
                    <td>400</td>
                    <td>Reduced 70%</td>
                    <td>Close quarters</td>
                  </tr>
                  <tr>
                    <td>Landing (High)</td>
                    <td>1000</td>
                    <td>Reduced 40%</td>
                    <td>Position reveal</td>
                  </tr>
                  <tr>
                    <td>Gunfire</td>
                    <td>2000+</td>
                    <td>Reduced 30%</td>
                    <td>Location info</td>
                  </tr>
                </tbody>
              </table>

              <h4>Sound Masking Techniques</h4>
              <div className="flow-diagram">
                <div className="flow-step">
                  <h5>Basic Sound Masking</h5>
                  <ul>
                    <li>Use utility explosions</li>
                    <li>Time steps with gunfire</li>
                    <li>Coordinate with team</li>
                    <li>Fake steps timing</li>
                  </ul>
                </div>
                <div className="flow-step">
                  <h5>Advanced Techniques</h5>
                  <ul>
                    <li>Fake utility sounds</li>
                    <li>Multi-level sound play</li>
                    <li>Sound baiting</li>
                    <li>Step synchronization</li>
                  </ul>
                </div>
                <div className="flow-step">
                  <h5>Team Coordination</h5>
                  <ul>
                    <li>Synchronized pushes</li>
                    <li>Split sound distractions</li>
                    <li>Rotational fakes</li>
                    <li>Sound-based executes</li>
                  </ul>
                </div>
              </div>

              <h4>Sound-Based Decision Making</h4>
              <div className="technique-cards">
                <div className={`technique-card ${expandedCards.includes('sound-card-1') ? 'expanded' : ''}`} 
                     onClick={() => toggleCard('sound-card-1')}>
                  <h5>Information Gathering</h5>
                  <p>Using sound cues to gather intel about enemy positions and intentions.</p>
                  <ul>
                    <li>Count utility usage</li>
                    <li>Track rotations</li>
                    <li>Identify weapons</li>
                    <li>Predict setups</li>
                  </ul>
                </div>

                <div className={`technique-card ${expandedCards.includes('sound-card-2') ? 'expanded' : ''}`} 
                     onClick={() => toggleCard('sound-card-2')}>
                  <h5>Tactical Responses</h5>
                  <p>How to react to different sound information.</p>
                  <ul>
                    <li>Counter-rotate</li>
                    <li>Stack sites</li>
                    <li>Timing pushes</li>
                    <li>Save utility</li>
                  </ul>
                </div>

                <div className={`technique-card ${expandedCards.includes('sound-card-3') ? 'expanded' : ''}`} 
                     onClick={() => toggleCard('sound-card-3')}>
                  <h5>Common Mistakes</h5>
                  <p>Sound-related errors to avoid.</p>
                  <ul>
                    <li>Unnecessary noise</li>
                    <li>Predictable timing</li>
                    <li>Poor coordination</li>
                    <li>Missing key sounds</li>
                  </ul>
                </div>
              </div>

              <div className="warning-box">
                <strong>Pro Tip:</strong> Always use a good headset and optimize your audio settings for better sound recognition.
                <ul>
                  <li>Use stereo audio settings</li>
                  <li>Disable music during gameplay</li>
                  <li>Adjust HRTF settings</li>
                  <li>Keep volume at a comfortable level</li>
                </ul>
              </div>
            </div>
          </div>
        );

      case 'utility':
        return (
          <div className="theory-content">
            <h2>Advanced Utility Usage</h2>
            <div className="theory-section">
              <h3>Utility Fundamentals</h3>
              <p>Mastering utility usage is crucial for both attack and defense.</p>

              <div className="info-box">
                <strong>Key Principle:</strong> Every piece of utility should have a specific purpose and timing.
              </div>

              <h4>Utility Types</h4>
              <div className="technique-cards">
                <div className={`technique-card ${expandedCards.includes('card-19') ? 'expanded' : ''}`} 
                     onClick={() => toggleCard('card-19')}>
                  <h5>Smoke Grenades</h5>
                  <div className="skill-bar" data-progress="95%">
                    <div className="skill-progress" style={{ width: '95%' }}></div>
                  </div>
                  <span>Essential Utility</span>
                  <ul>
                    <li>Site executes</li>
                    <li>One-way setups</li>
                    <li>Retake support</li>
                    <li>Map control</li>
                    <li>Fake executes</li>
                    <li>Cross coverage</li>
                    <li>Rotation masking</li>
                  </ul>
                </div>

                <div className={`technique-card ${expandedCards.includes('card-20') ? 'expanded' : ''}`} 
                     onClick={() => toggleCard('card-20')}>
                  <h5>Flashbangs</h5>
                  <div className="skill-bar" data-progress="90%">
                    <div className="skill-progress" style={{ width: '90%' }}></div>
                  </div>
                  <span>Entry Utility</span>
                  <ul>
                    <li>Pop flashes</li>
                    <li>Support flashes</li>
                    <li>Retake flashes</li>
                    <li>Counter flashes</li>
                    <li>Deep flashes</li>
                    <li>Team flashes</li>
                    <li>Flash timing</li>
                  </ul>
                </div>

                <div className={`technique-card ${expandedCards.includes('card-21') ? 'expanded' : ''}`} 
                     onClick={() => toggleCard('card-21')}>
                  <h5>Molotovs/Incendiaries</h5>
                  <div className="skill-bar" data-progress="85%">
                    <div className="skill-progress" style={{ width: '85%' }}></div>
                  </div>
                  <span>Area Denial</span>
                  <ul>
                    <li>Clear corners</li>
                    <li>Post-plant denial</li>
                    <li>Rush stopping</li>
                    <li>Force movement</li>
                    <li>Site splits</li>
                    <li>Retake delay</li>
                    <li>Plant denial</li>
                  </ul>
                </div>
              </div>

              <h4>Advanced Utility Mechanics</h4>
              <table className="theory-table">
                <thead>
                  <tr>
                    <th>Technique</th>
                    <th>Execution</th>
                    <th>Purpose</th>
                    <th>Difficulty</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Jump Throw</td>
                    <td>Jump + Release</td>
                    <td>Long distances</td>
                    <td>Medium</td>
                  </tr>
                  <tr>
                    <td>Run Throw</td>
                    <td>Run + Release</td>
                    <td>Dynamic throws</td>
                    <td>Hard</td>
                  </tr>
                  <tr>
                    <td>Pop Flash</td>
                    <td>Quick release</td>
                    <td>Instant blind</td>
                    <td>Medium</td>
                  </tr>
                  <tr>
                    <td>One-way</td>
                    <td>Precise lineup</td>
                    <td>Advantage peek</td>
                    <td>Hard</td>
                  </tr>
                </tbody>
              </table>

              <h4>Site Execute Combinations</h4>
              <div className="flow-diagram">
                <div className="flow-step">
                  <h5>Entry Setup</h5>
                  <ul>
                    <li>Flash for info</li>
                    <li>Clear close angles</li>
                    <li>Establish control</li>
                    <li>Check corners</li>
                  </ul>
                </div>
                <div className="flow-step">
                  <h5>Site Take</h5>
                  <ul>
                    <li>Smoke key angles</li>
                    <li>Molotov common spots</li>
                    <li>Flash through smokes</li>
                    <li>Trade positions</li>
                  </ul>
                </div>
                <div className="flow-step">
                  <h5>Post-Plant</h5>
                  <ul>
                    <li>Save utility</li>
                    <li>Delay defuse</li>
                    <li>Cover exits</li>
                    <li>Molly plant</li>
                  </ul>
                </div>
              </div>

              <h4>Utility Combinations</h4>
              <div className="technique-cards">
                <div className={`technique-card ${expandedCards.includes('util-card-1') ? 'expanded' : ''}`} 
                     onClick={() => toggleCard('util-card-1')}>
                  <h5>Double Smoke Setup</h5>
                  <p>Using two smokes to create a safe path or split site.</p>
                  <ul>
                    <li>Cross smoke</li>
                    <li>Deep smoke</li>
                    <li>Gap control</li>
                    <li>Timing sync</li>
                  </ul>
                </div>

                <div className={`technique-card ${expandedCards.includes('util-card-2') ? 'expanded' : ''}`} 
                     onClick={() => toggleCard('util-card-2')}>
                  <h5>Flash + Molotov</h5>
                  <p>Combining flash and molotov for maximum effect.</p>
                  <ul>
                    <li>Force movement</li>
                    <li>Clear angles</li>
                    <li>Trade setup</li>
                    <li>Area control</li>
                  </ul>
                </div>

                <div className={`technique-card ${expandedCards.includes('util-card-3') ? 'expanded' : ''}`} 
                     onClick={() => toggleCard('util-card-3')}>
                  <h5>Triple Utility</h5>
                  <p>Complex executes using multiple utility types.</p>
                  <ul>
                    <li>Site split</li>
                    <li>Retake setup</li>
                    <li>Full clear</li>
                    <li>Map control</li>
                  </ul>
                </div>
              </div>

              <div className="warning-box">
                <strong>Important:</strong> Practice utility lineups in offline mode first!
                <ul>
                  <li>Learn basic lineups</li>
                  <li>Master jump throws</li>
                  <li>Practice timing</li>
                  <li>Know alternatives</li>
                </ul>
              </div>
            </div>
          </div>
        );

      case 'positions':
        return (
          <div className="theory-content">
            <h2>Advanced Positioning</h2>
            <div className="theory-section">
              <h3>Position Fundamentals</h3>
              <p>Proper positioning is key to winning rounds and staying alive.</p>

              <div className="info-box">
                <strong>Key Principle:</strong> Always position yourself with a purpose and an escape plan.
              </div>

              <h4>Position Types</h4>
              <div className="technique-cards">
                <div className={`technique-card ${expandedCards.includes('card-22') ? 'expanded' : ''}`} 
                     onClick={() => toggleCard('card-22')}>
                  <h5>Anchor Positions</h5>
                  <div className="skill-bar" data-progress="90%">
                    <div className="skill-progress" style={{ width: '90%' }}></div>
                  </div>
                  <span>Site Hold</span>
                  <ul>
                    <li>Safe angles</li>
                    <li>Multiple fall back spots</li>
                    <li>Utility usage positions</li>
                    <li>Crossfire setups</li>
                    <li>Information spots</li>
                    <li>Rotation paths</li>
                    <li>Support positions</li>
                  </ul>
                </div>

                <div className={`technique-card ${expandedCards.includes('card-23') ? 'expanded' : ''}`} 
                     onClick={() => toggleCard('card-23')}>
                  <h5>Aggressive Positions</h5>
                  <div className="skill-bar" data-progress="85%">
                    <div className="skill-progress" style={{ width: '85%' }}></div>
                  </div>
                  <span>Map Control</span>
                  <ul>
                    <li>Early info gathering</li>
                    <li>Pick potential</li>
                    <li>Fall back routes</li>
                    <li>Support positions</li>
                    <li>Timing abuse</li>
                    <li>Utility denial</li>
                    <li>Rotation control</li>
                  </ul>
                </div>

                <div className={`technique-card ${expandedCards.includes('card-24') ? 'expanded' : ''}`} 
                     onClick={() => toggleCard('card-24')}>
                  <h5>Retake Positions</h5>
                  <div className="skill-bar" data-progress="80%">
                    <div className="skill-progress" style={{ width: '80%' }}></div>
                  </div>
                  <span>Site Retake</span>
                  <ul>
                    <li>Utility lineups</li>
                    <li>Crossfire angles</li>
                    <li>Safe plant spots</li>
                    <li>Trade positions</li>
                    <li>Timing positions</li>
                    <li>Post-plant spots</li>
                    <li>Exit control</li>
                  </ul>
                </div>
              </div>

              <h4>Advanced Position Concepts</h4>
              <table className="theory-table">
                <thead>
                  <tr>
                    <th>Concept</th>
                    <th>Description</th>
                    <th>Usage</th>
                    <th>Risk Level</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Off-Angles</td>
                    <td>Unexpected positions</td>
                    <td>Surprise factor</td>
                    <td>High</td>
                  </tr>
                  <tr>
                    <td>Crossfire</td>
                    <td>Multiple angle coverage</td>
                    <td>Site defense</td>
                    <td>Medium</td>
                  </tr>
                  <tr>
                    <td>Bait Setup</td>
                    <td>Trade position</td>
                    <td>Team play</td>
                    <td>Medium</td>
                  </tr>
                  <tr>
                    <td>One-Way</td>
                    <td>Advantageous angle</td>
                    <td>Map control</td>
                    <td>High</td>
                  </tr>
                </tbody>
              </table>

              <h4>Map Control Phases</h4>
              <div className="flow-diagram">
                <div className="flow-step">
                  <h5>Early Round</h5>
                  <ul>
                    <li>Default positions</li>
                    <li>Info gathering</li>
                    <li>Utility setup</li>
                    <li>Map control</li>
                  </ul>
                </div>
                <div className="flow-step">
                  <h5>Mid Round</h5>
                  <ul>
                    <li>Rotation positions</li>
                    <li>Map control</li>
                    <li>Trade setups</li>
                    <li>Execute positions</li>
                  </ul>
                </div>
                <div className="flow-step">
                  <h5>Late Round</h5>
                  <ul>
                    <li>Plant positions</li>
                    <li>After plant spots</li>
                    <li>Retake angles</li>
                    <li>Exit control</li>
                  </ul>
                </div>
              </div>

              <h4>Position Adaptation</h4>
              <div className="technique-cards">
                <div className={`technique-card ${expandedCards.includes('pos-card-1') ? 'expanded' : ''}`} 
                     onClick={() => toggleCard('pos-card-1')}>
                  <h5>Reading Enemy Patterns</h5>
                  <p>Adapting positions based on enemy tendencies.</p>
                  <ul>
                    <li>Track aggression</li>
                    <li>Note utility usage</li>
                    <li>Identify defaults</li>
                    <li>Counter positions</li>
                  </ul>
                </div>

                <div className={`technique-card ${expandedCards.includes('pos-card-2') ? 'expanded' : ''}`} 
                     onClick={() => toggleCard('pos-card-2')}>
                  <h5>Economy Based</h5>
                  <p>Adjusting positions based on equipment.</p>
                  <ul>
                    <li>Anti-eco spots</li>
                    <li>Force buy positions</li>
                    <li>AWP angles</li>
                    <li>Utility heavy spots</li>
                  </ul>
                </div>

                <div className={`technique-card ${expandedCards.includes('pos-card-3') ? 'expanded' : ''}`} 
                     onClick={() => toggleCard('pos-card-3')}>
                  <h5>Team Composition</h5>
                  <p>Positions based on team setup.</p>
                  <ul>
                    <li>Support player</li>
                    <li>Entry positions</li>
                    <li>AWPer spots</li>
                    <li>Lurk positions</li>
                  </ul>
                </div>
              </div>

              <div className="warning-box">
                <strong>Remember:</strong> Position is nothing without proper crosshair placement and awareness!
                <ul>
                  <li>Keep crosshair at head level</li>
                  <li>Pre-aim common spots</li>
                  <li>Check angles systematically</li>
                  <li>Listen for information</li>
                </ul>
              </div>
            </div>
          </div>
        );

      case 'economy':
        return (
          <div className="theory-content">
            <h2>Economy Management</h2>
            <div className="theory-section">
              <h3>Economy Fundamentals</h3>
              <p>Understanding and managing team economy is crucial for maintaining momentum.</p>

              <div className="info-box">
                <strong>Key Principle:</strong> Always make buy decisions as a team and consider future rounds.
              </div>

              <h4>Round Income</h4>
              <table className="theory-table">
                <thead>
                  <tr>
                    <th>Action</th>
                    <th>Reward</th>
                    <th>Notes</th>
                    <th>Strategy</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Round Win (T)</td>
                    <td>$3500</td>
                    <td>Base reward</td>
                    <td>Build bank</td>
                  </tr>
                  <tr>
                    <td>Round Win (CT)</td>
                    <td>$3250</td>
                    <td>Base reward</td>
                    <td>Utility focus</td>
                  </tr>
                  <tr>
                    <td>Kill Reward</td>
                    <td>$300-3000</td>
                    <td>Weapon dependent</td>
                    <td>SMG bonus</td>
                  </tr>
                  <tr>
                    <td>Bomb Plant</td>
                    <td>$300</td>
                    <td>Per player</td>
                    <td>Economy boost</td>
                  </tr>
                  <tr>
                    <td>Defuse</td>
                    <td>$300</td>
                    <td>Individual</td>
                    <td>Kit priority</td>
                  </tr>
                  <tr>
                    <td>Loss Bonus</td>
                    <td>$1400-3400</td>
                    <td>Consecutive losses</td>
                    <td>Force potential</td>
                  </tr>
                </tbody>
              </table>

              <h4>Buy Strategies</h4>
              <div className="technique-cards">
                <div className={`technique-card ${expandedCards.includes('card-25') ? 'expanded' : ''}`} 
                     onClick={() => toggleCard('card-25')}>
                  <h5>Full Buy</h5>
                  <div className="skill-bar" data-progress="100%">
                    <div className="skill-progress" style={{ width: '100%' }}></div>
                  </div>
                  <span>$5000+ Investment</span>
                  <ul>
                    <li>Primary weapon</li>
                    <li>Full armor</li>
                    <li>Full utility</li>
                    <li>Kit (CT)</li>
                    <li>Drop weapons</li>
                    <li>Save extra</li>
                    <li>AWP potential</li>
                  </ul>
                </div>

                <div className={`technique-card ${expandedCards.includes('card-26') ? 'expanded' : ''}`} 
                     onClick={() => toggleCard('card-26')}>
                  <h5>Force Buy</h5>
                  <div className="skill-bar" data-progress="60%">
                    <div className="skill-progress" style={{ width: '60%' }}></div>
                  </div>
                  <span>$2500-3500 Investment</span>
                  <ul>
                    <li>SMG/cheap rifle</li>
                    <li>Light/no armor</li>
                    <li>Basic utility</li>
                    <li>High risk/reward</li>
                    <li>Team coordination</li>
                    <li>Map dependent</li>
                    <li>Timing based</li>
                  </ul>
                </div>

                <div className={`technique-card ${expandedCards.includes('card-27') ? 'expanded' : ''}`} 
                     onClick={() => toggleCard('card-27')}>
                  <h5>Eco Round</h5>
                  <div className="skill-bar" data-progress="30%">
                    <div className="skill-progress" style={{ width: '30%' }}></div>
                  </div>
                  <span>$0-1500 Investment</span>
                  <ul>
                    <li>Pistols only</li>
                    <li>Minimal utility</li>
                    <li>Save money</li>
                    <li>Info gathering</li>
                    <li>Stack potential</li>
                    <li>Rush tactics</li>
                    <li>Surprise factor</li>
                  </ul>
                </div>
              </div>

              <h4>Advanced Economy Concepts</h4>
              <table className="theory-table">
                <thead>
                  <tr>
                    <th>Concept</th>
                    <th>Description</th>
                    <th>When to Use</th>
                    <th>Risk Level</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Double Save</td>
                    <td>Save two rounds</td>
                    <td>After pistol loss</td>
                    <td>Low</td>
                  </tr>
                  <tr>
                    <td>Glass Cannon</td>
                    <td>AWP no armor</td>
                    <td>Force rounds</td>
                    <td>High</td>
                  </tr>
                  <tr>
                    <td>Half Buy</td>
                    <td>Mixed equipment</td>
                    <td>Uncertain economy</td>
                    <td>Medium</td>
                  </tr>
                  <tr>
                    <td>Hero AK/M4</td>
                    <td>One rifle rest eco</td>
                    <td>Limited funds</td>
                    <td>High</td>
                  </tr>
                </tbody>
              </table>

              <h4>Loss Bonus System</h4>
              <div className="flow-diagram">
                <div className="flow-step">
                  <h5>Initial Loss</h5>
                  <p>$1400</p>
                  <ul>
                    <li>Basic pistol buy</li>
                    <li>Save for next</li>
                    <li>Stack sites</li>
                    <li>Rush potential</li>
                  </ul>
                </div>
                <div className="flow-step">
                  <h5>2-3 Losses</h5>
                  <p>$1900-2400</p>
                  <ul>
                    <li>Force buy potential</li>
                    <li>Light utility</li>
                    <li>Team buy</li>
                    <li>Map control</li>
                  </ul>
                </div>
                <div className="flow-step">
                  <h5>4+ Losses</h5>
                  <p>$2900-3400</p>
                  <ul>
                    <li>Full buy possible</li>
                    <li>Reset risk</li>
                    <li>Utility focus</li>
                    <li>Strategic play</li>
                  </ul>
                </div>
              </div>

              <h4>Economy Management Tips</h4>
              <div className="technique-cards">
                <div className={`technique-card ${expandedCards.includes('eco-card-1') ? 'expanded' : ''}`} 
                     onClick={() => toggleCard('eco-card-1')}>
                  <h5>Team Coordination</h5>
                  <p>Working together for optimal economy.</p>
                  <ul>
                    <li>Drop weapons</li>
                    <li>Share utility</li>
                    <li>Save together</li>
                    <li>Coordinate buys</li>
                  </ul>
                </div>

                <div className={`technique-card ${expandedCards.includes('eco-card-2') ? 'expanded' : ''}`} 
                     onClick={() => toggleCard('eco-card-2')}>
                  <h5>Map Economics</h5>
                  <p>Adapting economy to map control.</p>
                  <ul>
                    <li>Control bonuses</li>
                    <li>Save positions</li>
                    <li>Exit frags</li>
                    <li>Weapon recovery</li>
                  </ul>
                </div>

                <div className={`technique-card ${expandedCards.includes('eco-card-3') ? 'expanded' : ''}`} 
                     onClick={() => toggleCard('eco-card-3')}>
                  <h5>Round Planning</h5>
                  <p>Future round considerations.</p>
                  <ul>
                    <li>Buy forecasting</li>
                    <li>Save rounds</li>
                    <li>Force timing</li>
                    <li>Reset prevention</li>
                  </ul>
                </div>
              </div>

              <div className="warning-box">
                <strong>Important:</strong> Always communicate your economic situation with your team!
                <ul>
                  <li>Share money status</li>
                  <li>Plan future rounds</li>
                  <li>Coordinate drops</li>
                  <li>Track enemy economy</li>
                </ul>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="theory-page">
      <div className="theory-navigation">
        {sections.map(section => (
          <button
            key={section.id}
            className={`theory-nav-button ${activeSection === section.id ? 'active' : ''}`}
            onClick={() => setActiveSection(section.id)}
          >
            <span className="nav-icon material-icons">{section.icon}</span>
            {section.name}
          </button>
        ))}
      </div>
      {renderContent()}
    </div>
  );
}

export default Theory;