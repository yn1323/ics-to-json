import icsToJson from "./icsToJson";

const icsData = `BEGIN:VCALENDAR
VERSION:2.0
CALSCALE:GREGORIAN
BEGIN:VEVENT
RRULE:FREQ=WEEKLY;UNTIL=20130906T103400Z;INTERVAL=1;BYDAY=MO;WKST=SU
SUMMARY:Access-A-Ride Pickup
DTSTART;TZID=America/New_York:20130802T103400
DTEND;TZID=America/New_York:20130802T110400
LOCATION:1000 Broadway Ave.\, Brooklyn
DESCRIPTION: Access-A-Ride to 900 Jay St.\, Brooklyn
STATUS:CONFIRMED
SEQUENCE:3
BEGIN:VALARM
TRIGGER:-PT10M
DESCRIPTION:Pickup Reminder
ACTION:DISPLAY
END:VALARM
END:VEVENT
BEGIN:VEVENT
SUMMARY:Access-A-Ride Pickup
DTSTART;TZID=America/New_York:20130802T200000
DTEND;TZID=America/New_York:20130802T203000
LOCATION:900 Jay St.\, Brooklyn
DESCRIPTION: Access-A-Ride to 1000 Broadway Ave.\, Brooklyn
STATUS:CONFIRMED
SEQUENCE:3
BEGIN:VALARM
TRIGGER:-PT10M
DESCRIPTION:Pickup Reminder
ACTION:DISPLAY
END:VALARM
END:VEVENT
END:VCALENDAR`;

const sampleResult = [
  {
    startDate: "2013-08-02T10:34:00",
    endDate: "2013-08-02T11:04:00",
    description: "Access-A-Ride to 900 Jay St., Brooklyn",
    location: "1000 Broadway Ave., Brooklyn",
    summary: "Access-A-Ride Pickup",
  },
  {
    startDate: "2013-08-09T10:34:00",
    endDate: "2013-08-09T11:04:00",
    description: "Access-A-Ride to 900 Jay St., Brooklyn",
    location: "1000 Broadway Ave., Brooklyn",
    summary: "Access-A-Ride Pickup",
  },
  {
    startDate: "2013-08-16T10:34:00",
    endDate: "2013-08-16T11:04:00",
    description: "Access-A-Ride to 900 Jay St., Brooklyn",
    location: "1000 Broadway Ave., Brooklyn",
    summary: "Access-A-Ride Pickup",
  },
  {
    startDate: "2013-08-23T10:34:00",
    endDate: "2013-08-23T11:04:00",
    description: "Access-A-Ride to 900 Jay St., Brooklyn",
    location: "1000 Broadway Ave., Brooklyn",
    summary: "Access-A-Ride Pickup",
  },
  {
    startDate: "2013-08-30T10:34:00",
    endDate: "2013-08-30T11:04:00",
    description: "Access-A-Ride to 900 Jay St., Brooklyn",
    location: "1000 Broadway Ave., Brooklyn",
    summary: "Access-A-Ride Pickup",
  },
  {
    startDate: "2013-09-06T10:34:00",
    endDate: "2013-09-06T11:04:00",
    description: "Access-A-Ride to 900 Jay St., Brooklyn",
    location: "1000 Broadway Ave., Brooklyn",
    summary: "Access-A-Ride Pickup",
  },
  {
    startDate: "2013-08-02T20:00:00",
    endDate: "2013-08-02T20:30:00",
    description: "Access-A-Ride to 1000 Broadway Ave., Brooklyn",
    location: "900 Jay St., Brooklyn",
    summary: "Access-A-Ride Pickup",
  },
];

test("sample file produces expected output", () => {
  let jsonData = icsToJson(icsData);
  expect(jsonData).toEqual(sampleResult);
});
