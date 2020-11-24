import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, css} from 'aphrodite';

const styles = StyleSheet.create({
    defaultPriority: {
        color: "#1d0563",
        '@media (max-width: 700px)': {
            margin: 0,
            padding: "10px 8px",
            width: "100%",
            height: "100%",
            borderBottom: "1px solid black",
            listStyle: "none",
            fontSize: 20,
        }
    },
    urgentPriority: {
        color: "#ff0200",
        '@media (max-width: 700px)': {
            margin: 0,
            padding: "10px 8px",
            width: "100%",
            height: "100%",
            borderBottom: "1px solid black",
            listStyle: "none",
            fontSize: 20,
        }
    }
});

class NotificationItem extends React.PureComponent {
    constructor(props) {
        super(props)
    }

    render() {
        let style = css(styles.defaultPriority);
        if (this.props.type === "urgent") {
            style = css(styles.urgentPriority);
        }
        if (this.props.html === undefined) {
            return (
                <li className={style} data-notification-type={this.props.type} onClick={this.props.markAsRead}>
                {this.props.value}
                </li>
            );
        }

        return (
            <li className={style} data-notification-type={this.props.type} onClick={this.props.markAsRead} dangerouslySetInnerHTML={this.props.html} />
        );
    }
}

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  markAsRead: PropTypes.func
};

NotificationItem.defaultProps = {
  type: 'default',
  markAsRead: () => undefined
};

export default NotificationItem;
