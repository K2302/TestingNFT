import "./frame-component.css";
const arr = [
  { name: "Azuki", url: "/frame-17561.svg", val: "/nft-image@2x.png" },
  { name: "MAYC", url: "/frame-17561.svg", val: "/nft-image1@2x.png" },
  { name: "MoonBird", url: "/frame-17561.svg", val: "/nft-image2@2x.png" },
  { name: "Otherdeed", url: "/frame-17561.svg", val: "/nft-image3@2x.png" },
  { name: "CryptoZ", url: "/frame-17561.svg", val: "/nft-image4@2x.png" },
]
const FrameComponent = () => {
  return (

    < div className="nft-card-parent">
      {
        arr.map(
          (e, i) => {
            return (
              <div className="nft-card">
                <img className="nft-image-icon" alt="" src={e.val} />
                <div className="months-wrapper">
                  <div className="ens-linked">3 Months</div>
                </div>
                <div className="names-holder-wrapper">
                  <div className="names-holder10">
                    <div className="nft-name">{e.name} #9839</div>
                    <div className="names-holder">
                      <div className="ens-linked">Bought</div>
                      <div className="floor-holder">
                        <div className="ens-linked">02.82</div>
                        <img
                          className="floor-holder-child"
                          alt=""
                          src={e.url}
                        />
                      </div>
                    </div>
                    <div className="names-holder">
                      <div className="ens-linked">Floor</div>
                      <div className="floor-holder">
                        <div className="ens-linked">12.74</div>
                        <img
                          className="floor-holder-child"
                          alt=""
                          src={e.url}
                        />
                        <div className="amount12">+21.6%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            )
          }
        )
      }
    </div>
  );
};

export default FrameComponent;
