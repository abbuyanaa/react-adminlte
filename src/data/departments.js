const departments = [
  {
    id: 1,
    departmentName: "대표이사",
    isActive: 1,
    parentName: "",
    createdDate: new Date().toUTCString(),
  },
  {
    id: 2,
    departmentName: "부사장",
    isActive: 0,
    parentName: "대표이사",
    createdDate: new Date().toUTCString(),
  },
  {
    id: 3,
    departmentName: "전무이사",
    isActive: 1,
    parentName: "대표이사",
    createdDate: new Date().toUTCString(),
  },
  {
    id: 4,
    departmentName: "상무이사",
    isActive: 1,
    parentName: "대표이사",
    createdDate: new Date().toUTCString(),
  },
  {
    id: 5,
    departmentName: "담당이사",
    isActive: 0,
    parentName: "대표이사",
    createdDate: new Date().toUTCString(),
  },
];

export default departments;
