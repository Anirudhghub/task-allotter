const start_State = [
  {
    Task: 'Bulk Emailing',
    date: '2019-02-03',
    Allotedto: 'Sankesh',
    id: 1,
    display:false,
    flag: false
  },
  {
    Task: 'UI Design Submission',
    date: '2019-13-03',
    Allotedto: 'Rajesh',
    id: 2,
    display:false,
    flag: false
  }, {
    Task: 'Sales',
    date: '2019-01-01',
    Allotedto: 'Alex',
    id: 3,
    display:false,
    flag: false
  },
  {
    Task: 'Code Verification',
    date: '2019-12-10',
    Allotedto: 'Dev',
    id: 4,
    display:false,
    flag: false
  }, {
    Task: 'Client Meeting',
    date: '2019-03-05',
    Allotedto: 'Rudraksh',
    id: 5,
    display:false,
    flag: false
  }, {
    Task: 'Friday Activities',
    date: '2019-04-06',
    Allotedto: 'HR',
    id: 6,
    display:false,
    flag: false
  }
];

export default function red(state = start_State, action) {
  switch (action.type) {
    case 'selectedbook':
      let rawdata = [...state];
      rawdata.map((element, index) => {

        if (element.id === action.id) {
          console.log(element.flag);
          element.display = true;
          console.log(element.flag);
        }
      })
      return rawdata;

    case 'addbook':
      console.log(action);
      return [...state, {
        Task: action.Task,
        Allotedto: action.Allotedto,
        date: action.date,
        id: parseInt(Math.random() * 100),
        display:false,
        flag: false
      }]

    case 'deletebook':
      let filtered = [...state];
      filtered = filtered.filter(function(value) {
        return value.id !== action.id;
      });
      return filtered;

    case 'removebook':
      let rawdata1 = [...state];
      rawdata1.map((element, index) => {

        if (element.id === action.id) {
          console.log(element.display);
          element.display = false;
          console.log(element.display);
        }
      })
      return rawdata1;

      case 'taskcomplete':
      let rawdata2 = [...state];
      rawdata2.map((element, index) => {

        if (element.id === action.id) {
          console.log(element.flag);
          element.flag = true;
          console.log(element.flag);
        }
      })
      return rawdata2;
    default:
      return state;
  }


}
