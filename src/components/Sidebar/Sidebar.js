import { publicRoutes } from "../../routes";
import { Link, useLocation } from "react-router-dom";
import styles from "./Sidebar.module.scss";
import { logo } from "../../assets/imgs";
import clsx from "clsx";
import IconTree from "../Icons/IconTree";

function Sidebar() {
  const location = useLocation();
  const locations = location.pathname.split("/");

  const checkActive = (childPath, childClass) =>
    childPath.substring(1) === locations[childClass];

  return (
    <div className={styles.sidebar}>
      <div className={styles.Logo}>
        <img src={logo} alt="" />
      </div>
      <ul className={styles.container}>
        {publicRoutes.map((route, index) => {
          return (
            <div key={index}>
              <Link className={styles.textLink} to={route.path}>
                <li
                  className={clsx(styles.wrapper, {
                    [styles.active]: checkActive(route.path, route.class),
                  })}
                >
                  <route.Icon />
                  {route.name}
                </li>
              </Link>
              {!!route.routeChild &&
                route.routeChild.map((item, id) => {
                  return (
                    <div key={id}>
                      <Link
                        className={styles.textLink}
                        to={route.path + item.path}
                      >
                        <div className={styles.itemSidebar}>
                          <span className={styles.stick}>
                            <IconTree />
                          </span>
                          <li
                            className={clsx(styles.wrapperChild, {
                              [styles.active]: checkActive(
                                item.path,
                                item.class
                              ),
                            })}
                          >
                            {item.name}
                          </li>
                        </div>
                      </Link>
                    </div>
                  );
                })}
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;
