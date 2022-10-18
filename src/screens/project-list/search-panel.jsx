import React from "react";
import { useState, useEffect } from "react";

export const SearchPanel = ({params, setParams, users}) => {

  return <form>
    <input type="text" placeholder="项目名" value={params.name} onChange={e => setParams({
      ...params,
      name: e.target.value
    })} />
    <select name="" id="" value={params.personId} onChange={e => setParams({
      ...params,
      personId: e.target.value
    })}>
      <option value="">负责人</option>
      {users.map(user => <option key={user.id} value={user.id}>{user.name}</option>)}
    </select>
  </form>;
};