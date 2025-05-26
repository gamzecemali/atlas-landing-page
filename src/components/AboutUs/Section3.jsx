import React from 'react'
import './Section3.css'

// Import award logos
import auggieAward from '../../assets/images/auggie-logo.png'
import investmentAward from '../../assets/images/investment-logo.png'
import amaAward from '../../assets/images/ama-logo.png'
import scaleupAward from '../../assets/images/scaleup-logo.png'
import fastcompanyAward from '../../assets/images/fastcompany-logo.png'
import eraglobalAward from '../../assets/images/eraglobal-logo.png'
import d3Award from '../../assets/images/d3-logo.png'

const Section3 = () => {
  const awards = [
    {
      id: 1,
      logo: auggieAward,
      title: "2019 awe\nauggıe awards",
      type: 'logo-text'
    },
    {
      id: 2,
      logo: investmentAward,
      title: "",
      type: 'logo-only'
    },
    {
      id: 3,
      logo: amaAward,
      title: "2024 Top Digital-Twin Initiative award",
      type: 'logo-text'
    },
    {
      id: 4,
      logo: scaleupAward,
      title: "",
      type: 'logo-only'
    },
    {
      id: 5,
      logo: fastcompanyAward,
      title: "2023 startup\n100 lıst",
      type: 'logo-text'
    },
    {
      id: 6,
      logo: eraglobalAward,
      title: "",
      type: 'logo-only'
    },
    {
      id: 7,
      logo: amaAward,
      title: "2023 top xR\ncompany award",
      type: 'logo-text'
    },
    {
      id: 8,
      logo: d3Award,
      title: "",
      type: 'logo-only'
    }
  ];

  // Duplicate awards for seamless loop
  const duplicatedAwards = [...awards, ...awards];

  return (
    <div className="section3-container">
      <div className="ticker-wrapper">
        <div className="ticker-content">
          {duplicatedAwards.map((award, index) => (
            <div key={`${award.id}-${index}`} className={`award-item ${award.type}`}>
              {award.type === 'logo-text' ? (
                <div className="award-with-text">
                  <div className="award-logo-container">
                    <img src={award.logo} alt={`Award ${award.id}`} className="award-logo" />
                  </div>
                  <div className="award-title">
                    {award.title.split('\n').map((line, lineIndex) => (
                      <div key={lineIndex}>{line}</div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="award-logo-only">
                  <img src={award.logo} alt={`Award ${award.id}`} className="award-logo-large" />
                </div>
              )}
            </div>
          ))}
        </div>
        {/* Gradient overlays for fade effect */}
        <div className="gradient-left"></div>
        <div className="gradient-right"></div>
      </div>
    </div>
  )
}

export default Section3
