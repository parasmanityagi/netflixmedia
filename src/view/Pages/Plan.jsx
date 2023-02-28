import React from 'react'

const Plan = () => {
  const phoneIcon = <i className="bi bi-phone"></i>;
  const tabletIcon = <i className="bi bi-tablet"></i>;
  const laptopIcon = <i className="bi bi-laptop"></i>;
  const tvIcon = <i className="bi bi-tv"></i>;
  const cheakIcon =<i class="bi bi-check-lg"></i>;
  return (
    <>
      <div className="plan_one">
        <h1>Choose the plan that's right for you</h1>
        <h5>{cheakIcon}Watch all you want. Ad-free.</h5>
        <h5>{cheakIcon}Recommendations just for you.</h5>
        <h5>{cheakIcon}Change or cancel your plan anytime.</h5>
      </div>



      {/* plan table */}
      <table className='plan_table'>
        <tr className='table_header'>
          <th className='horizontal_header'></th>
          <th className='horizontal_header'><span className="plan_div mobile">mobile</span></th>
          <th className='horizontal_header'><span className="plan_div basic">basic</span></th>
          <th className='horizontal_header'><span className="plan_div premium">standard</span></th>
          <th className='horizontal_header'><span className="plan_div premium">premium</span></th>
        </tr>
        <tr>
          <th className='vertical_header'>Monthly price</th>
          <td>₹149</td>
          <td>₹199</td>
          <td>₹499</td>
          <td>₹649</td>
        </tr>
        <tr>
          <th className='vertical_header'>Video quality</th>
          <td>Good</td>
          <td>Good</td>
          <td>Better</td>
          <td>Best</td>
        </tr>
        <tr>
          <th className='vertical_header'>Resolution</th>
          <td>480p</td>
          <td>720p</td>
          <td>1080p</td>
          <td>4K+HDR</td>
        </tr>
        <tr>
          <th className='vertical_header'>Devices</th>
          <td>{phoneIcon}phone</td>
          <td>{phoneIcon}phone</td>
          <td>{phoneIcon}phone</td>
          <td>{phoneIcon}phone</td>
        </tr>
        <tr>
          <th className='vertical_header'></th>
          <td>{tabletIcon}tablet</td>
          <td>{tabletIcon}tablet</td>
          <td>{tabletIcon}tablet</td>
          <td>{tabletIcon}tablet</td>
        </tr>
        <tr>
          <th className='vertical_header'></th>
          <td></td>
          <td>{laptopIcon}laptop</td>
          <td>{laptopIcon}laptop</td>
          <td>{laptopIcon}laptop</td>
        </tr>
        <tr>
          <th className='vertical_header'></th>
          <td></td>
          <td>{tvIcon}tv</td>
          <td>{tvIcon}tv</td>
          <td>{tvIcon}tv</td>
        </tr>
      </table>


      {/* div two */}
      <div className="plan_two">
        <h6>HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability subject to your internet service and device capabilities. Not all content is available in all resolutions. See our Terms of Use for more details.</h6>
        <h6>Only people who live with you may use your account. Watch on 4 different devices at the same time with Premium, 2 with Standard, and 1 with Basic and Mobile.</h6>
      </div>
    </>
  )
}

export default Plan