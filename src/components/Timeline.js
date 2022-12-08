// css
import "../css/timeline.css";

export default function Timeline() {
  const timelineActions = [
    {
      timeframe: "8:30AM",
      programList: [
        { programName: "Science of Stupid", channelName: "Nat Geo" },
        { programName: "Godhuli Aalaap", channelName: "Star Jalsha" },
        { programName: "Man vs Wild", channelName: "Discovery" },
      ],
    },
    {
      timeframe: "12:30PM",
      programList: [
        { programName: "S.O.S Cars", channelName: "Nat Geo" },
        { programName: "Dhulokona", channelName: "Star Jalsha" },
        { programName: "India vs Newzealand", channelName: "Star Sports" },
      ],
    },
    {
      timeframe: "4:30PM",
      programList: [
        { programName: "Man vs Wild", channelName: "Discovery" },
        { programName: "Wicked Tuna", channelName: "Nat Geo" },
      ],
    },
    {
      timeframe: "8:30PM",
      programList: [
        { programName: "To Catch a Smuggler", channelName: "Nat Geo" },
        { programName: "Gaatchora", channelName: "Star Jalsha" },
      ],
    },
  ];
  return (
    <div className="timeline-container">
      <section className="section">
        <div className="viewers-panel-title timeline-title">
          TV Watching Guide
        </div>
        {timelineActions.map((timeline) => {
          return (
            <div className="timeline-div">
              <div className="timeframe">{timeline.timeframe}</div>
              <div className="actions">
                <ul>
                  {timeline.programList.map((program) => {
                    return (
                      <li>
                        {program.programName}
                        <span className="channel-metadata">
                          ({program.channelName})
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}
