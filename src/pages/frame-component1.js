import "./frame-component1.css";
const arr = [
  {
    name: "ENS Linked", secname: "dingaling.eth", no: 1.82, tag: "ENS Linked", src: "/ellipse-217.svg", link: "/rectangle-1604@2x.png", time: "2 months ago",col:"one",
  },
  { name: "Best Flip", secname: "CryptoPunk #2131", no: 98.5, tag: "Sold", src: "/ellipse-2171.svg", link: "/rectangle-16041@2x.png", time: "10 days ago",col:"two" },
  { name: "Should Have", secname: "Rare Apepe #6974", no: 98.5, tag: "Mint", src: "/ellipse-2172.svg", link: "/rectangle-16042@2x.png", time: "10 days ago" ,col:"three"},
  { name: "First NFT bought", secname: "BAYC", no: 98.5, tag: "Bought", src: "/ellipse-217.svg", link: "/rectangle-16043@2x.png", time: "10 days ago" ,col:"four"},
  { name: "Paper Handed", secname: "Moonbird", no: 98.5, tag: "Sold", src: "/ellipse-2172.svg", link: "/rectangle-16044@2x.png", time: "10 days ago",col:"five"},
]
const project = (e) => {
  switch(e.col) {

    case "one":   return <div className="dingalingts1">{e.tag}</div> ;
    case "two":   return <div className="dingalingts2">{e.tag}</div> ;
    case "three":  return <div className="dingalingts3">{e.tag}</div> ;
    case "four":   return <div className="dingalingts4">{e.tag}</div> ;

    default:      return <div className="dingalingts">{e.tag}</div> ;
  }
}
const FrameComponent1 = () => {
  return (
    <div className="container_left">
      <div className="ens-linked">Highlights</div>
      <div className="lmao">
        {
          arr.map(
            (e, i) => {
              return (
                <div className="lol1">
                  {/* <div className="parent_comp1"> */}
                  <div className="ellipse-parent {">
                    <img className="ellipse-icon" alt="" src={e.src} />
                    <div className="rectangle-container">
                      <img
                        className="frame-child6"
                        alt=""
                        src={e.link}
                      />
                      <div className="ens-linked-parent">
                        <div className="ens-linked">{e.name}</div>
                        <div className="ens-linked-wrapper">
                         { project(e)}
                        </div>
                      </div>
                    </div>
                    <div className="names-holder-parent">
                      <div className="names-holder">
                        <div className="dingalingeth2">{e.secname}</div>
                        <div className="floor-holder">
                          <div className="ens-linked">{e.no}</div>
                          <img
                            className="floor-holder-child"
                            alt=""
                            src="/frame-1756.svg"
                          />
                        </div>
                      </div>
                      <div className="names-holder">
                        <div className="ens-linked">{e.time}</div>
                        <div className="floor-holder1">
                          <div className="ens-linked">+200XP</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* </div> */}
                </div>
              )
            }
          )
        }
      </div>
    </div>
  );
};

export default FrameComponent1;
