import React from 'react';
import PropTypes from 'prop-types';
import BodySection from './BodySection';
import {StyleSheet, css} from 'aphrodite';

const styles = StyleSheet.create({
    bsWithMargin: {
        width: "100%",
        marginBottom: 40
    }
});

class BodySectionWithMarginBottom extends React.Component {
    constructor (props) {
        super(props);
    }

    render() {
        return (
            <div className={css(styles.bsWithMargin)}>
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
