import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ''
    };
  }

  handleInputChange(e) {
    this.setState({
      term: e.target.value
    });

    this.props.onSearchTermChange(e.target.value);
  }

   render() {
     const {term} = this.state;
     const {onSearchTermChange} = this.props;

      return (
        <div className='search-bar-wrapper'>
            <input
              onChange={this.handleInputChange.bind(this)}
              value={this.state.term}
              placeholder='Thor Ragnarok'
            />
        </div>
      );
   }
}

SearchBar.propTypes = {
  // proptypes go here
};

export default SearchBar
