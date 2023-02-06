const menus = [
  {
    id: 1,
    name: "Dashboard",
    url: "",
    items: [
      {
        id: 11,
        name: "Dashboard v1",
        subId: 1,
        url: "/",
      },
      {
        id: 12,
        name: "Dashboard v2",
        subId: 1,
        url: "/dash2",
      },
      {
        id: 13,
        name: "빈칸화면",
        subId: 1,
        url: "/blank",
      },
    ],
  },
  {
    id: 2,
    name: "기준정보관리",
    url: "/bi",
    items: [
      {
        id: 21,
        name: "공통코드관리",
        subId: 2,
        url: "/commoncodes",
      },
      {
        id: 12,
        name: "품목관리",
        subId: 2,
        url: "/products",
      },
      {
        id: 13,
        name: "BOM관리",
        subId: 2,
        url: "/commoncodes",
      },
      {
        id: 14,
        name: "거래처관리",
        subId: 2,
        url: "/customers",
      },
      {
        id: 15,
        name: "창고관리",
        subId: 2,
        url: "/warehouses",
      },
      {
        id: 16,
        name: "설비관리",
        subId: 2,
        url: "/equipments",
      },
      {
        id: 17,
        name: "부서관리",
        subId: 2,
        url: "/departments",
      },
      {
        id: 18,
        name: "사원관리",
        subId: 2,
        url: "/employees",
      },
    ],
  },
  {
    id: 3,
    name: "시스템관리",
    url: "sy",
  },
];

export default menus;
