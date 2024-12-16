function WorkContent({ workHead, workDesc, imageClass }) {
  return (
    <div className={"project " + imageClass}>
      <p className="topic">{workHead}</p>
      <p className="subTopic">{workDesc}</p>
    </div>
  );
}

function Work() {
  return (
    // <!-- the successful project section -->
    <div className="successfulProject">
      {/* <!-- the upper project section --> */}
      <div className="upperProject">
        <p className="smallSec">WORK</p>
        <h1 className="headingSec">Successful Projects</h1>
        <p className="paraSec">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classNameical Latin literature from 45 BC,
          making it over 2000 years old
        </p>
      </div>

      {/* <!-- the lower project section --> */}
      <div className="lowerProject">
        <WorkContent
          workHead="Consulting Marketing"
          workDesc="Website Design"
          imageClass="firstImage"
        />
        <WorkContent
          workHead="Consulting Marketing"
          workDesc="Website Design"
          imageClass="secondImage"
        />
        <WorkContent
          workHead="Consulting Marketing"
          workDesc="Website Design"
          imageClass="thirdImage"
        />
      </div>
    </div>
  );
}

export default Work;
