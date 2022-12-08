// css
import "../css/timeline.css";

export default function Timeline() {
  return (
    <div className="timeline-container">
      <section className="section">
        <div className="viewers-panel-title timeline-title">
          TV Watching Guide
        </div>

        <div className="timeline-div">
          <div className="timeframe">8:30AM</div>
          <div className="actions">
            <ul>
              <li>
                Science of Stupid{" "}
                <span className="channel-metadata">(Nat Geo)</span>
              </li>
              <li>
                Godhuli Aalaap{" "}
                <span className="channel-metadata">(Star Jalsha)</span>
              </li>
              <li>
                Man vs Wild{" "}
                <span className="channel-metadata">(Discovery)</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="timeline-div">
          <div className="timeframe">12:30PM</div>
          <div className="actions">
            <ul>
              <li>
                S.O.S cars <span className="channel-metadata">(Nat Geo)</span>
              </li>
              <li>
                Dhulokona{" "}
                <span className="channel-metadata">(Star Jalsha)</span>
              </li>
              <li>
                India vs Newzealand{" "}
                <span className="channel-metadata">(Star Sports)</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="timeline-div">
          <div className="timeframe">4:30PM</div>
          <div className="actions">
            <ul>
              <li>
                Man vs Wild{" "}
                <span className="channel-metadata">(Discovery)</span>
              </li>
              <li>
                Wicked Tuna <span className="channel-metadata">(Nat Geo)</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="timeline-div">
          <div className="timeframe">8:30PM</div>
          <div className="actions">
            <ul>
              <li>
                To Catch a Smuggler{" "}
                <span className="channel-metadata">(Nat Geo)</span>
              </li>
              <li>
                Gaatchora <span className="channel-metadata">(Star Plus)</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="timeline-div">
          <div className="timeframe">12:30AM</div>
          <div className="actions">
            <ul>
              <li>
                Science of Stupid{" "}
                <span className="channel-metadata">(Nat Geo)</span>
              </li>
              <li>
                Air Crash Investigation{" "}
                <span className="channel-metadata">(Discovery)</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
