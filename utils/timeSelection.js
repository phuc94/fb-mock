export function timeSelection(){
    let dateSelectionObj = {};
    let currentYear = new Date().getFullYear();
    dateSelectionObj.yearRange = {
      max: currentYear,
      min: 1900,
    };
    dateSelectionObj.dayRange = {
      max: 31,
      min: 1,
    };
    dateSelectionObj.hourRange = {
      max: 23,
      min: 0,
    }
    dateSelectionObj.minuteArr = ["00","15","30","45"];
    let mA = dateSelectionObj.minuteArr;
    dateSelectionObj.monthArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    dateSelectionObj.yearArr = [];
    dateSelectionObj.dayArr = [];
    dateSelectionObj.hourArr = []
    dateSelectionObj.hourMinuteArr = [];
    let yr = dateSelectionObj.yearRange;
    let dr = dateSelectionObj.dayRange;
    let hr = dateSelectionObj.hourRange;
    for (let i = yr.min; i <= yr.max; i++) {
      dateSelectionObj.yearArr.unshift(i);
    }
    for (let i = dr.min; i <= dr.max; i++) {
      dateSelectionObj.dayArr.push(i);
    };
    for (let i = hr.min; i <= hr.max; i++) {
      if(i<10){i = "0" + i.toString()}
      let newHour = [i + ":" + mA[0],i + ":" + mA[1],i + ":" + mA[2],i + ":" + mA[3],]
      dateSelectionObj.hourMinuteArr.push(...newHour);
    }

    
    return dateSelectionObj
};