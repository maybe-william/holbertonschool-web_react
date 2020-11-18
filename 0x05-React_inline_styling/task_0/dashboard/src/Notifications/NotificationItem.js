import React from 'react';
import './Notifications.css';
import PropTypes from 'prop-types';

class NotificationItem extends React.PureComponent {
    constructor(props) {
        super(props)
    }

    render() {
        if (this.props.html === undefined) {
            return (
                <li data-notification-type={this.props.type} onClick={this.props.markAsRead}>
                {this.props.value}
                </li>
            );
        }

        return (
            <li data-notification-type={this.props.type} onClick={this.props.markAsRead} dangerouslySetInnerHTML={this.props.html} />
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
