export const taskStatuses = {
  APPROVED: 'Approved',
  COMPLETED: 'Completed',
  BLOCKED: 'Blocked',
  CANCELLED: 'Cancelled',
}

export const projectsData = {
  GH: { 
    title: 'GitHub', 
    subTitle: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda !', 
    tasks: [{
      id: 10,
      title: 'Hello',
      status: taskStatuses.APPROVED
    }] 
  },
  CP: { 
    title: 'Cyber Punk', 
    subTitle: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda !', 
    tasks: [{
      id: 222,
      title: 'Hello Boy',
      status: taskStatuses.BLOCKED
    }] 
  },
  EA: { title: 'Electronic Arts', subTitle: '', tasks: [] },
  TA: { title: 'Telecom Arts', subTitle: '', tasks: [] },
  LP: { title: 'Lab Pet', subTitle: '', tasks: [] },
}
