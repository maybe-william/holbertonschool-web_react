import $ from "jquery";
import _ from "lodash";
import css from "../css/main.css";

$('body').append("<p>Holberton Dashboard</p>");
$('body').append("<p>Dashboard data for the studnts</p>");
$('body').append("<button>Click here to get started</button>");
$('body').append("<p id='count'></p>");
$('body').append("<p>Copyright - Holberton School</p>");

let count = 0;

function updateCounter() {
  count = count + 1;
  $('#count').text(`${count.toString()} clicks on the button`);
}

$('button').click(_.debounce(updateCounter));
