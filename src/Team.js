function TeamContent({ title, desc, image }) {
  return (
      <div className="member">
        <img src={image} alt="ceo" />
        <p className="ceoName">{title}</p>
        <p className="designation">{desc}</p>
      </div>
  );
}

function Team() {
  return (
    // <!-- the team member section -->
    <div className="teamMembers">
      <div className="upperTeam">
        <p className="smallSec">TEAM</p>
        <h1 className="headingSec">Team Members</h1>
        <p className="paraSec">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classNameical Latin literature from 45 BC,
          making it over 2000 years old
        </p>
      </div>

      <div className="lowerTeam">
        <TeamContent title="Marvin McKinney" desc="Marketing Coordinator" image="assets/ceo1.jpg" />
        <TeamContent title="Kathryn Murphy" desc="Ethical Hacker" image="assets/ceo2.jpg" />
        <TeamContent title="Darrell Steward" desc="Software Developer" image="assets/ceo3.jpg" />
      </div>
    </div>
  );
}

export default Team;
