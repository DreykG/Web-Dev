def alarm_clock(day, vacation):
    weekend = day == 0 or day == 6
    if vacation:
        if weekend:
            return "off"
        return "10:00"
    else:
        if weekend:
            return "10:00"
        return "7:00"