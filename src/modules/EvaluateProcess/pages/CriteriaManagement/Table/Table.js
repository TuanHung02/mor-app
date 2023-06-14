import { useEffect, useState } from "react";
import IconDelete from "../../../../../components/Icons/IconDelete";
import IconPen from "../../../../../components/Icons/IconPen";
import styles from "./Table.module.scss";
function Table({ datas, currentPage, pageSize }) {
  const [dataCriteria, setDataCriteria] = useState([]);
  useEffect(() => {
    setDataCriteria([...datas]);
  }, [datas]);

  const handleDelete = (id) => {
    setDataCriteria((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <table className={styles.wrapper}>
      <thead>
        <tr>
          <th style={{ width: 68 }}>STT</th>
          <th>Criteria Group</th>
          <th>Criteria Type</th>
          <th>Position Applied</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {dataCriteria
          .slice(
            (currentPage - 1) * pageSize,
            (currentPage - 1) * pageSize + pageSize
          )
          .map((data, index) => {
            return (
              <tr key={index}>
                <td style={{ width: 68, textAlign: "center" }}>{index + 1}</td>
                <td className={styles.content}>{data.group}</td>
                <td className={styles.content}>{data.type}</td>
                <td className={styles.content}>{data.position}</td>
                <td className={styles.action}>
                  <div className={styles.pen}>
                    <IconPen />
                  </div>
                  <div className={styles.bin}>
                    <IconDelete onClick={() => handleDelete(data.id)} />
                  </div>
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
}

export default Table;
