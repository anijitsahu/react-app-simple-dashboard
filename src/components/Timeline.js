// css
import "../css/timeline.css";

export default function Timeline() {
  return (
    <div className="timeline-container">
      <section className="section">
        <div className="timeline-title">Time has helped me to learn so far</div>

        <div className="timeline-div">
          <div className="timeframe">2019</div>
          <div className="actions">
            <ul>
              <li>Want to work with React JS</li>
              <li>Continue to work in Node JS</li>
              <li>Want to be a FullStack Developer</li>
            </ul>
          </div>
        </div>

        <div className="timeline-div">
          <div className="timeframe">2018</div>
          <div className="actions">
            <ul>
              <li>Learnt cooking</li>
              <li>Learned debugging of JavaScript code</li>
              <li>Get new concepts of Modularity</li>
            </ul>
          </div>
        </div>

        <div className="timeline-div">
          <div className="timeframe">2017</div>
          <div className="actions">
            <ul>
              <li>Learned Angular JS 1.5</li>
              <li>Learned basics of NPM</li>
            </ul>
          </div>
        </div>

        <div className="timeline-div">
          <div className="timeframe">2016</div>
          <div className="actions">
            <ul>
              <li>Started career with AriveGuru Technologies</li>
            </ul>
          </div>
        </div>

        <div className="timeline-div">
          <div className="timeframe">2013</div>
          <div className="actions">
            <ul>
              <li>Prepared to be a Software Developer</li>
              <li>Completed M.Tech</li>
            </ul>
          </div>
        </div>

        <div className="timeline-div">
          <div className="timeframe">2010</div>
          <div className="actions">
            <ul>
              <li>Passed B.Tech</li>
              <li>Participated in a Debate competition</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
