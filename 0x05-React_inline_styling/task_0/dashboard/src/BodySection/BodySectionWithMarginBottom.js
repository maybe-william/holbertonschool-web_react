import React from 'react';
import './BodySection.css';
import PropTypes from 'prop-types';
import BodySection from './BodySection';

class BodySectionWithMarginBottom extends React.Component {
    constructor (props) {
        super(props);
    }

    render() {
        return (
            <div className="bodySectionWithMargin">
                <BodySection {...this.props} />
            </div>
        );
    }
}

BodySectionWithMarginBottom.propTypes = {
  title: PropTypes.string,
  children: PropTypes.object
};

BodySectionWithMarginBottom.defaultProps = {
  title: '',
  children: []
};

export default BodySectionWithMarginBottom;
