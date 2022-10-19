import React from "react";
import { useEffect, useState } from "react";
import { SearchPanel } from "./search-panel";
import { List } from "./list";
import { url } from "config/index";
import qs from "qs";
import { cleanObject } from "../../util";
import { useDebounce, useMount } from "../../util/customHooks";

export const ProjectList = () => {
  // 查询参数
  const [params, setParams] = useState({
    name: "",
    personId: "",
  });

  // 负责人列表
  const [users, setUsers] = useState([]);

  // 项目列表
  const [list, setList] = useState([]);

  // 查询负责人
  useMount(() => {
    fetch(`${url}/users`).then(async (response) => {
      setUsers(await response.json());
    });
  });

  // 查询条件变更时重新查询工程列表
  const debounceParams = useDebounce(params, 300);
  useEffect(() => {
    fetch(`${url}/projects?${qs.stringify(cleanObject(debounceParams))}`).then(
      async (response) => {
        if (response.ok) {
          const result = await response.json();
          setList(result);
        }
      }
    );
  }, [debounceParams]);

  return (
    <div>
      <SearchPanel users={users} params={params} setParams={setParams} />
      <List list={list} users={users} />
    </div>
  );
};
