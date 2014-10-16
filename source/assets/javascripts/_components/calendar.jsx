/** @jsx React.DOM */
var Calendar = React.createClass({
  weeks: function () {
    var key = -1,
        today = this.props.today;
    return Lazy(this.props.calendar.weeks()).map(function (week) {
      key += 1;
      return (
        <CalendarWeek key={key} week={week} today={today} />
      );
    }).toArray();
  },
  render: function () {
    return (
      <div className="calendar">
        <table>
          <thead>
            <tr>
              <th>Sun</th>
              <th>Mon</th>
              <th>Tue</th>
              <th>Wed</th>
              <th>Thu</th>
              <th>Fri</th>
              <th>Sat</th>
            </tr>
          </thead>
          <tbody>
            {this.weeks()}
          </tbody>
        </table>
      </div>
    );
  }
});
