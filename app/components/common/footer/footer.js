import React from 'react';
require('./footer.css');
export default class Footer extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <div>
        <div className="bottomBox">
          <span>全国百家电视台支持，3亿观众互动参与</span>
        </div>
      </div>
    );
  }
}
