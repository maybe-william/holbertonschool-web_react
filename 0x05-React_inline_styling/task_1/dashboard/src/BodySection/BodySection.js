import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, css} from 'aphrodite';

const styles = StyleSheet.create({
    bs: {
        width: "100%"
    }
});

class BodySection extends React.Component {
    constructor (props) {
        super(props);
    }

    render() {
        return (
            <div className={css(styles.bs)}>
            <h2>{this.props.title}</h2>
            {this.props.children}
            </div>
        );
    }
}

BodySection.propTypes = {
  title: PropTypes.string,
  children: PropTypes.object
};

BodySection.defaultProps = {
  title: '',
  children: []
};

export default BodySection;
