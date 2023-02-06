import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home1 from "./pages/Main/Home1";
import Home2 from "./pages/Main/Home2";
import BlankScreen from "./pages/BlankScreen";
import GeneralScreen from "./pages/Forms/GeneralScreen";
import AdvancedScreen from "./pages/Forms/AdvancedScreen";
import LoginScreen from "./pages/LoginScreen";
import TableSimpleScreen from "./pages/Tables/TableSimpleScreen";
import ValidationScreen from "./pages/Forms/ValidationScreen";
import BiWarhousesScreen from "./pages/BI/BiWarhousesScreen";
import BiWarehouseAddForm from "./components/Forms/BI/BiWarehouseAddForm";
import BiWarehouseEditForm from "./components/Forms/BI/BiWarehouseEditForm";
import BiEquipmentScreen from "./pages/BI/BiEquipmentScreen";
import BiDepartmentsScreen from "./pages/BI/BiDepartmentsScreen";
import BiEmployeesScreen from "./pages/BI/BiEmployeesScreen";
import MuiTableScreen from "./pages/Tables/MuiTableScreen";

function App() {
  return (
    <div className="wrapper">
      <Router>
        <Routes>
          <Route path="/" element={<Home1 />} exact />
          <Route path="/dash2" element={<Home2 />} />
          <Route path="/bi/warehouses" element={<BiWarhousesScreen />} />
          <Route path="/bi/warehouses/add" element={<BiWarehouseAddForm />} />
          <Route
            path="/bi/warehouses/:id/edit"
            element={<BiWarehouseEditForm />}
          />
          <Route path="/bi/equipments" element={<BiEquipmentScreen />} />
          <Route path="/bi/departments" element={<BiDepartmentsScreen />} />
          <Route path="/bi/employees" element={<BiEmployeesScreen />} />
          <Route path="/forms/general" element={<GeneralScreen />} />
          <Route path="/forms/advanced" element={<AdvancedScreen />} />
          <Route path="/forms/validation" element={<ValidationScreen />} />
          <Route path="/tables/simple" element={<TableSimpleScreen />} />
          <Route path="/tables/mui" element={<MuiTableScreen />} />
          <Route path="/blank" element={<BlankScreen />} />
          <Route path="/login" element={<LoginScreen />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
