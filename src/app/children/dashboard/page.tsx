import CardDashboard from '@/components/admin/Card/CardDashboard';
import Dashboard from '@/components/admin/Dashboard/Dashboard';
import React from 'react';

const DashboardPage = () => {
  return (
    <>
      <div className="mt-4 w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 pt-6 px-4">
        <CardDashboard title="Teachers" value={50} />
        <CardDashboard title="Courses" value={10} />
        <CardDashboard title="Quizzes" value={20} />
      </div>
    </>
  );
};

export default DashboardPage;
