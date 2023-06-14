import {  useMemo, useState } from "react";
import clsx from "clsx";
import IconNext from "../../../../../components/Icons/IconNext";
import IconPrev from "../../../../../components/Icons/IconPrev";
import styles from "./Pagination.module.scss";

const page = [];

function Pagination({
  siblingCount,
  pageSize,
  totalPage,
  currentPage,
  onPrev,
  onNext,
  onPage,
}) {
  const [perPageView] = useState(3);
  const [perPageStart] = useState(0);

  const [perPageView2] = useState(0);
  const [perPageStart2] = useState(0); //2

  const [perPageView3] = useState(1);
  const [perPageStart3] = useState(totalPage - perPageView3);


  const addPages = (totalPages) => {
    for (let i = 1; i <= totalPages; i++) {
      page.push(i);
    }
    return page;
  };

  const checkCurrentPageActive = (curPage, nowPage) => curPage === nowPage;

  const checkThreeDotActive = (curPage) => {
    if (curPage > 3 && curPage < 12) {
      return true;
    } else {
      return false;
    }
  };

  
  const pages = useMemo(() => addPages(totalPage), [totalPage]);

  return (
    <div className={styles.wrapper}>
      <div
        className={`${styles["click-page"]} ${
          currentPage === 1 ? styles["unactive-btn"] : ""
        }`}
      >
        <IconPrev onClick={onPrev} />
      </div>
      <div className={styles["page-number"]}>
        {pages
          .slice(perPageStart, perPageView + perPageStart)
          .map((page, index) => {
            return (
              <div
                onClick={onPage}
                className={clsx(styles["current-page"], {
                  [styles["active-page"]]: checkCurrentPageActive(
                    currentPage,
                    page
                  ),
                })}
                key={index}
              >
                {page}
              </div>
            );
          })}
      </div>
      <div
        className={clsx(styles.dot, {
          [styles["active-dot"]]: true,
        })}
      >
        ...
      </div>
      <div className={styles["page-number"]}>
        {perPageStart < 3 &&
          pages
            .slice(perPageStart2, perPageView2 + perPageStart2)
            .map((page, index) => {
              return (
                <div
                  onClick={onPage}
                  className={clsx(styles["current-page"], {
                    [styles["active-page"]]: checkCurrentPageActive(
                      currentPage,
                      page
                    ),
                  })}
                  key={index}
                >
                  {page}
                </div>
              );
            })}
      </div>

      <div
        className={clsx(styles.dot, {
          [styles["active-dot"]]: checkThreeDotActive(currentPage),
        })}
      >
        ...
      </div>

      <div className={styles["page-number"]}>
        {pages
          .slice(perPageStart3, perPageView3 + perPageStart3)
          .map((page, index) => {
            return (
              <div
                onClick={onPage}
                className={clsx(styles["current-page"], {
                  [styles["active-page"]]: checkCurrentPageActive(
                    currentPage,
                    page
                  ),
                })}
                key={index}
              >
                {page}
              </div>
            );
          })}
      </div>

      <div
        className={`${styles["click-page"]} ${
          currentPage === totalPage ? styles["unactive-btn"] : ""
        }`}
      >
        <IconNext onClick={onNext} />
      </div>
    </div>
  );
}

export default Pagination;
