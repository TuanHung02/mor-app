import { useState } from "react";
import InputText from "../../../../../components/InputText/InputText";
import styles from "./CreateNewCriteria.module.scss";
import Select from "../../../../../components/Select/Select";
import IconCross from "../../../../../components/Icons/IconCross";
import IconDelete from "../../../../../components/Icons/IconDelete";
import Button from "../../../../../components/Button/Button";

const optionsSelectType = [
  {
    id: 1,
    label: "Employee Work Task",
  },
  {
    id: 2,
    label: "Managical Work Tasks",
  },
];
const optionsSelectPosition = [
  {
    id: 1,
    label: "Development",
  },
  {
    id: 2,
    label: "Leaders and Manager",
  },
];

const optionsScore = [
  {
    id: 1,
    label: 1,
  },
  {
    id: 2,
    label: 2,
  },
  {
    id: 3,
    label: 3,
  },
];

const defaultRow = {
  name: "",
  description: "",
  evaluationScale: [
    {
      score: "1",
      content: "",
    },
  ],
};

const defaultCriteria = {
  groupName: "",
  groupType: "Employee Work Task",
  groupPosition: "Development",
  groupDesription: "",
  groupRows: [
    {
      name: "",
      description: "",
      evaluationScale: [
        {
          score: "1",
          content: "",
        },
      ],
    },
  ],
};

function CreateNewCriteria() {
  const [selectType, setSelectType] = useState("");
  const [selectPosition, setSelectPosition] = useState("");
  // const [rows, setRows] = useState([defaultRow]);
  const [criteria, setCriteria] = useState(defaultCriteria);
  console.log('add some log')
 

  const handleInputChange = (e) => {
    const myName = e.target.name;
    const myValue = e.target.value; 

    setCriteria({
      ...criteria,
      [myName]: myValue,
      groupRows: [
        ...criteria.groupRows,
        {
          name: "",
          description: "",
          evaluationScale: [
            {
              score: "1",
              content: "",
            },
          ],
        },
      ],
    });
  };

  const handleSelectOptions = (callback, e) => {
    callback(e.target.textContent);
  };

  const handleChangeValue = (e, index, key) => {
    const newRows = structuredClone(criteria.groupRows);

    if (!newRows[index]) return;
    newRows[index][key] = e.target.value;

    setCriteria(newRows);
  };

  const handleDeleteCriteria = (index) => {
    const newRows = structuredClone(criteria.groupRows);

    if (index <= -1) return;
    newRows.splice(index, 1);

    setCriteria(newRows);
  };

  const handleDeleteRow = (index, indexChild) => {
    const newRows = structuredClone(criteria.groupRows);

    if (index <= -1) return;
    if (newRows[index]) {
      newRows[index].evaluationScale.splice(indexChild, 1);
    }

    setCriteria(newRows);
  };

  const handleChildrenChangeValue = (e, index, key, indexParent) => {
    const newRows = structuredClone(criteria.groupRows);

    if (!newRows[indexParent]) return;
    newRows[indexParent].evaluationScale[index][key] = e.target.value;

    setCriteria(newRows);
  };

  const handleSelectScore = () => {
    console.log("");
  };

  const handleCreateNewRow = (index) => {
    const newRows = structuredClone(criteria.groupRows);

    newRows[index] &&
      newRows[index].evaluationScale.push({
        score: "1",
        content: "",
      });

    setCriteria(newRows);
  };

  const clear = () => {};

  const handleCreateNewCriteria = () => {
    setCriteria((prev) => {
      return [...prev, defaultRow];
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(criteria);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className={styles.wrapper}>
          <InputText
            error={"Can not null"}
            name="groupName"
            value={criteria.groupName}
            onChange={(e) => handleInputChange(e)}
            text
            placeholder="Input Criteria Group..."
          >
            Description*
          </InputText>
          <div className={styles["criteria-select"]}>
            <Select
              square
              name="groupType"
              selectValue={selectType}
              placeholder="Select Position Applied....."
              options={optionsSelectType}
              onChange={(e) => handleSelectOptions(setSelectType, e)}
            ></Select>
            <Select
              square
              name=" groupPosition"
              selectValue={selectPosition}
              placeholder="Select Position Applied....."
              options={optionsSelectPosition}
              onChange={(e) => handleSelectOptions(setSelectPosition, e)}
            ></Select>
          </div>

          <InputText
            error={"Can not null"}
            value={criteria.groupDescription}
            name="groupDescription"
            onChange={(e) => handleInputChange(e)}
            textarea
            placeholder="Input Criteria Group Description...."
          >
            Criteria Group*
          </InputText>

          {criteria.groupRows.map((criteria, index) => {
            return (
              <div key={`criteria-${index}`} className={styles["create-new"]}>
                <span className={styles.title}>
                  Criteria#{index + 1}
                  <span>
                    <IconDelete onClick={() => handleDeleteCriteria(index)} />
                  </span>
                </span>
                <div className={styles.content}>
                  <InputText
                    error={"Can not null"}
                    value={criteria.name}
                    name={`row-name-${index}`}
                    onChange={(e) => {
                      handleChangeValue(e, index, "name");
                    }}
                    text
                    placeholder="Input name of Criteria (Ex: Quality of Work)...."
                  >
                    Criteria Name*
                  </InputText>
                  <InputText
                    error={"Can not null"}
                    value={criteria.description}
                    name={`row-description-${index}`}
                    onChange={(e) => {
                      handleChangeValue(e, index, "description");
                    }}
                    text
                    placeholder="Input Criteria Description...."
                  >
                    Description
                  </InputText>
                  <span className={styles.scale}>Evalueation Scale</span>

                  {criteria.evaluationScale.map((row, indexChild) => {
                    return (
                      <div
                        key={`row-${indexChild}`}
                        className={styles["create-content"]}
                      >
                        <Select
                          smallSquare
                          selectValue={row.score}
                          name={`row-score-${index}-${indexChild}`}
                          options={optionsScore}
                          onChange={handleSelectScore}
                        />
                        <InputText
                          error={"Can not null"}
                          value={row.content}
                          name={`row-content-${index}-${indexChild}`}
                          onChange={(e) => {
                            handleChildrenChangeValue(
                              e,
                              indexChild,
                              "content",
                              index
                            );
                          }}
                          text
                          placeholder="Input Criteria Content..."
                        >
                          Criteria Content
                        </InputText>
                        <div style={{ paddingLeft: 10 }}>
                          <IconCross
                            onClick={() => handleDeleteRow(index, indexChild)}
                          />
                        </div>
                      </div>
                    );
                  })}

                  <div className={styles.textBtn}>
                    <Button
                      large
                      lightgreen
                      textButton
                      onClick={() => handleCreateNewRow(index)}
                    >
                      + Add a new Row
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}

          <div>
            <Button
              onClick={() => {
                handleCreateNewCriteria();
                clear();
              }}
              large
              lightblue
              textButton
            >
              + Add a new Criteria
            </Button>
          </div>

          <div className={styles["handle-btn"]}>
            <Button medium white>
              Cancel
            </Button>
            <Button submit medium blue>
              Create
            </Button>
          </div>
        </div>
      </form>
    </>
  );
}

export default CreateNewCriteria;

// const optionsSelectType = [
//   {
//     id: 1,
//     label: "Employee Work Task",
//   },
//   {
//     id: 2,
//     label: "Managical Work Tasks",
//   },
// ];
// const optionsSelectPosition = [
//   {
//     id: 1,
//     label: "Development",
//   },
//   {
//     id: 2,
//     label: "Leaders and Manager",
//   },
// ];

// const optionsScore = [
//   {
//     id: 1,
//     label: 1,
//   },
//   {
//     id: 2,
//     label: 2,
//   },
//   {
//     id: 3,
//     label: 3,
//   },
// ];

// const defaultRow = {
//   name: "",
//   description: "",
//   evaluationScale: [
//     {
//       score: "1",
//       content: "",
//     },
//   ],
// };

// const defaultCriteria = {
//   groupName: "",
//   groupType: "Employee Work Task",
//   groupPosition: "Development",
//   groupDesription: "",
//   groupRows: defaultRow,
// };

// function CreateNewCriteria() {
//   const [selectType, setSelectType] = useState("");
//   const [selectPosition, setSelectPosition] = useState("");
//   const [rows, setRows] = useState([defaultRow]);
//   const [criteria, setCriteria] = useState(defaultCriteria);

//   const handleInputChange = (e) => {
//     const myName = e.target.name;
//     const myValue = e.target.value;

//     setCriteria({ ...criteria, [myName]: myValue, groupRows: rows });
//   };

//   const handleSelectOptions = (callback, e) => {
//     callback(e.target.textContent);
//   };

//   const handleChangeValue = (e, index, key) => {
//     const newRows = structuredClone(rows);

//     if (!newRows[index]) return;
//     newRows[index][key] = e.target.value;

//     setRows(newRows);
//   };

//   const handleDeleteCriteria = (index) => {
//     const newRows = structuredClone(rows);

//     if (index <= -1) return;
//     newRows.splice(index, 1);

//     setRows(newRows);
//   };

//   const handleDeleteRow = (index, indexChild) => {
//     const newRows = structuredClone(rows);

//     if (index <= -1) return;
//     if (newRows[index]) {
//       newRows[index].evaluationScale.splice(indexChild, 1);
//     }

//     setRows(newRows);
//   };

//   const handleChildrenChangeValue = (e, index, key, indexParent) => {
//     const newRows = structuredClone(rows);

//     if (!newRows[indexParent]) return;
//     newRows[indexParent].evaluationScale[index][key] = e.target.value;

//     setRows(newRows);
//   };

//   const handleSelectScore = () => {
//     console.log("");
//   };

//   const handleCreateNewRow = (index) => {
//     const newRows = [...rows];

//     newRows[index] &&
//       newRows[index].evaluationScale.push({
//         score: "1",
//         content: "",
//       });

//     setRows(newRows);
//   };

//   const clear = () => {};

//   const handleCreateNewCriteria = () => {
//     setRows((prev) => {
//       return [...prev, defaultRow];
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(criteria);
//     console.log(rows);
//   };

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <div className={styles.wrapper}>
//           <InputText
//             error={"Can not null"}
//             name="groupName"
//             value={criteria.groupName}
//             onChange={(e) => handleInputChange(e)}
//             text
//             placeholder="Input Criteria Group..."
//           >
//             Description*
//           </InputText>
//           <div className={styles["criteria-select"]}>
//             <Select
//               square
//               name="groupType"
//               selectValue={selectType}
//               placeholder="Select Position Applied....."
//               options={optionsSelectType}
//               onChange={(e) => handleSelectOptions(setSelectType, e)}
//             ></Select>
//             <Select
//               square
//               name=" groupPosition"
//               selectValue={selectPosition}
//               placeholder="Select Position Applied....."
//               options={optionsSelectPosition}
//               onChange={(e) => handleSelectOptions(setSelectPosition, e)}
//             ></Select>
//           </div>

//           <InputText
//             error={"Can not null"}
//             value={criteria.groupDescription}
//             name="groupDescription"
//             onChange={(e) => handleInputChange(e)}
//             textarea
//             placeholder="Input Criteria Group Description...."
//           >
//             Criteria Group*
//           </InputText>

//           {rows.map((criteria, index) => {
//             return (
//               <div key={`criteria-${index}`} className={styles["create-new"]}>
//                 <span className={styles.title}>
//                   Criteria#{index + 1}
//                   <span>
//                     <IconDelete onClick={() => handleDeleteCriteria(index)} />
//                   </span>
//                 </span>
//                 <div className={styles.content}>
//                   <InputText
//                     error={"Can not null"}
//                     value={criteria.name}
//                     name={`row-name-${index}`}
//                     onChange={(e) => {
//                       handleChangeValue(e, index, "name");
//                     }}
//                     text
//                     placeholder="Input name of Criteria (Ex: Quality of Work)...."
//                   >
//                     Criteria Name*
//                   </InputText>
//                   <InputText
//                     error={"Can not null"}
//                     value={criteria.description}
//                     name={`row-description-${index}`}
//                     onChange={(e) => {
//                       handleChangeValue(e, index, "description");
//                     }}
//                     text
//                     placeholder="Input Criteria Description...."
//                   >
//                     Description
//                   </InputText>
//                   <span className={styles.scale}>Evalueation Scale</span>

//                   {criteria.evaluationScale.map((row, indexChild) => {
//                     return (
//                       <div
//                         key={`row-${indexChild}`}
//                         className={styles["create-content"]}
//                       >
//                         <Select
//                           smallSquare
//                           selectValue={row.score}
//                           name={`row-score-${index}-${indexChild}`}
//                           options={optionsScore}
//                           onChange={handleSelectScore}
//                         />
//                         <InputText
//                           error={"Can not null"}
//                           value={row.content}
//                           name={`row-content-${index}-${indexChild}`}
//                           onChange={(e) => {
//                             handleChildrenChangeValue(
//                               e,
//                               indexChild,
//                               "content",
//                               index
//                             );
//                           }}
//                           text
//                           placeholder="Input Criteria Content..."
//                         >
//                           Criteria Content
//                         </InputText>
//                         <div style={{ paddingLeft: 10 }}>
//                           <IconCross
//                             onClick={() => handleDeleteRow(index, indexChild)}
//                           />
//                         </div>
//                       </div>
//                     );
//                   })}

//                   <div className={styles.textBtn}>
//                     <Button
//                       large
//                       lightgreen
//                       textButton
//                       onClick={() => handleCreateNewRow(index)}
//                     >
//                       + Add a new Row
//                     </Button>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}

//           <div>
//             <Button
//               onClick={() => {
//                 handleCreateNewCriteria();
//                 clear();
//               }}
//               large
//               lightblue
//               textButton
//             >
//               + Add a new Criteria
//             </Button>
//           </div>

//           <div className={styles["handle-btn"]}>
//             <Button medium white>
//               Cancel
//             </Button>
//             <Button submit medium blue>
//               Create
//             </Button>
//           </div>
//         </div>
//       </form>
//     </>
//   );
// }

// export default CreateNewCriteria;
