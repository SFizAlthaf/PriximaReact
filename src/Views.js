function ViewContent({viewHead, viewDesc}) {
  return (
    <div className="sectors">
      <p className="numbers">{viewHead}</p>
      <p className="data">{viewDesc}</p>
    </div>
  );
}

function View() {
  return (
    <div>
      <div className="plainSection">
        <div className="sectioning">
            <ViewContent viewHead="90k+" viewDesc="Happy Clients" />
            <ViewContent viewHead="45M+" viewDesc="Lines of Code" />
            <ViewContent viewHead="190+" viewDesc="Total Downloads" />
            <ViewContent viewHead="380K+" viewDesc="YouTube Subscribers" />
        </div>
      </div>
    </div>
  );
}

export default View;
