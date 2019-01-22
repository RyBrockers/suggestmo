import React from 'react';
import '../Styles/homepage.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo } from '@fortawesome/free-solid-svg-icons/faVideo';


import Top10List from './Top10List';

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div className="Homepage">
        <h1 className="title">{'SuggestMo '}
          <FontAwesomeIcon icon={faVideo} className="fa-1x" />
        </h1>
        <h2>
            Type a name of a film to find a similar title.
        </h2>
        <input type="text" className="textInput" />

        <div className="checkBoxes">
          <label>
            <input type="checkbox" />
          Movies
          </label>

          <label>
            <input type="checkbox" />
          Tv Shows
          </label>
        </div>
        <Top10List />
      </div>
    );
  }
}

export default HomePage;
