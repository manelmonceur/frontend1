'use client';

import React from 'react';
import CardDashboard from '../Card/CardDashboard';
import useSWR from 'swr';
import { fetcher } from '../../../../../utils/fetcher';

const Dashboard = () => {
  const { data: Users } = useSWR('/user', fetcher);
  const Parents = Users?.filter((user: any) => user.role === 'parent');

  return (
    <div className="mt-4 w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 pt-6 px-4">
      <CardDashboard title="Parents" value={30} />
      <CardDashboard title="Students" value={50} />
      <CardDashboard title="Courses" value={10} />
      <CardDashboard title="Quiz" value={10} />
    </div>
  );
};

export default Dashboard;
