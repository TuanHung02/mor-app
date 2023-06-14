import Customer from "./modules/Customer/Customer";
import DashBoard from "./modules/DashBoard/DashBoard";
import EvaluateProcess from "./modules/EvaluateProcess/EvaluateProcess";
import Project from "./modules/Project/Project";
import IconDashBoard from "./components/Icons/IconDashBoard";
import IconCustomer from "./components/Icons/IconCustomer";
import IconProject from "./components/Icons/IconProject";
import IconEvaluateProcess from "./components/Icons/IconEvaluateProcess";
import SkillManagement from "./modules/EvaluateProcess/pages/SkillManagement";
import CycleManagement from "./modules/EvaluateProcess/pages/CycleManagement/CycleManagement";
import CriteriaManagement from "./modules/EvaluateProcess/pages/CriteriaManagement/CriteriaManagement";
import GoalManagement from "./modules/EvaluateProcess/pages/GoalManagement";
import DashBoardItem from "./modules/EvaluateProcess/pages/DashBoardItem";
import CreateNewCriteria from "./modules/EvaluateProcess/pages/CriteriaManagement/CreateCriteria/CreateNewCriteria";

const publicRoutes = [
  {
    Icon: IconDashBoard,
    path: "/dashboard",
    Component: DashBoard,
    name: "Dashboard",
    class: 1,
  },
  {
    Icon: IconCustomer,
    path: "/customer",
    Component: Customer,
    name: "Customer",
    class: 1,
  },
  {
    Icon: IconProject,
    path: "/project",
    Component: Project,
    name: "Project",
    class: 1,
  },
  {
    Icon: IconEvaluateProcess,
    path: "/evaluate-process",
    Component: EvaluateProcess,
    name: "Evaluate Process",
    class: 1,
    routeChild: [
      {
        path: "/dashboard",
        Component: DashBoardItem,
        name: "Dashboard",
        class: 2,
      },
      {
        path: "/cycle-management",
        Component: CycleManagement,
        name: "Cycle Management",
        class: 2,
      },
      {
        path: "/criteria-management",
        Component: CriteriaManagement,
        name: "Criteria Management",
        class: 2,
        // routeChild: [
        //   {
        //     path: "/create-new-criteria",
        //     Component: CreateNewCriteria,
        //     name: "Create New Criteria",
        //     class: 3,
        //   },
        // ],
      },
      {
        path: "/create-new-criteria",
        Component: CreateNewCriteria,
        name: "Create New Criteria",
        class: 2,
      },
      {
        path: "/goal-management",
        Component: GoalManagement,
        name: "Goal Management",
        class: 2,
      },
      {
        path: "/skill-management",
        Component: SkillManagement,
        name: "Skill Management",
        class: 2,
      },
    ],
  },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
