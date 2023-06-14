import { useMemo, useState } from "react";

import Button from "../../../../components/Button/Button";
import IconPlus from "../../../../components/Icons/IconPlus";
import Search from "../../../../components/Search/Search";
import Select from "../../../../components/Select/Select";
import styles from "./CriteriaManagement.module.scss";
import Table from "./Table/Table";
import Pagination from "./Pagination/Pagination";
import { datas } from "../../../../FakeData/datas";

const optionsType = [
  {
    id: 1,
    label: "All",
  },
  {
    id: 2,
    label: "Employee Work Task",
  },
  {
    id: 3,
    label: "Managical Work Tasks",
  },
];
const optionsPosition = [
  {
    id: 1,
    label: "All",
  },
  {
    id: 2,
    label: "Development",
  },
  {
    id: 3,
    label: "Leaders and Manager",
  },
];

const pageSize = 5;
const totalPage = Math.ceil(datas.length / pageSize);
const siblingCount = 1;

function CriteriaManagement() {
  const [inputValue, setInputValue] = useState("");
  const [selectType, setSelectType] = useState("");
  const [selectPosition, setSelectPosition] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const handleSearch = (e) => {
    setInputValue(e.target.value);
  };
  const handleType = (e) => {
    setSelectType(e.target.textContent);
  };
  const handlePosition = (e) => {
    setSelectPosition(e.target.textContent);
  };
  const handleBackPaginate = () => {
    setCurrentPage((prevRs) => prevRs - 1);
  };
  const hanldeNextPaginate = () => {
    setCurrentPage((prevRs) => prevRs + 1);
  };
  const handlePageNumber = (e) => {
    setCurrentPage(+e.target.textContent);
  };

  const criteriaData = useMemo(
    () =>
      datas.filter(
        (data) =>
          data.group.includes(inputValue) &&
          data.position.includes(selectPosition) &&
          data.type.includes(selectType)
      ),
    [inputValue, selectPosition, selectType]
  );

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.toolbar}>
          <Search searchValue={inputValue} onChange={handleSearch} />
          <Select
            oval
            selectValue={selectType}
            placeholder="Criteria Type"
            options={optionsType}
            onChange={handleType}
          ></Select>
          <Select
            oval
            selectValue={selectPosition}
            placeholder="Position"
            options={optionsPosition}
            onChange={handlePosition}
          ></Select>
        </div>

        <Button large blue to="/evaluate-process/create-new-criteria">
          <span style={{ paddingRight: 12 }}>
            <IconPlus />
          </span>
          Create New Criteria
        </Button>

        {/* {publicRoutes.forEach((item) => {
          !!item.routeChild &&
            item.routeChild.forEach((item2) => {
              !!item2.routeChild &&
                item2.routeChild.map((item3) => (
                  <Button style={{ width: 100, height: 100 }}>
                    <span style={{ paddingRight: 12 }}>
                      <IconPlus />
                    </span>
                    <Link to={item.path + item2.path + item3.path}>
                      {item3.name}
                    </Link>
                  </Button>
                ));
            });
        })} */}
      </div>

      <Table
        datas={criteriaData}
        pageSize={pageSize}
        currentPage={currentPage}
      />
      <div className={styles.pagination}>
        <Pagination
          siblingCount={siblingCount}
          pageSize={pageSize}
          totalPage={totalPage}
          currentPage={currentPage}
          onPrev={handleBackPaginate}
          onNext={hanldeNextPaginate}
          onPage={handlePageNumber}
        />
      </div>
    </div>
  );
}

export default CriteriaManagement;
