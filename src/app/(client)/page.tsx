'use client';
import React, { useEffect, useState } from 'react';
import HerosSection from '@/components/client/Home/HerosSection';
import FeatureList from '@/components/client/Home/FeatureList';
import Cours from '@/components/client/Home/Cours';
import CourseList from '@/components/client/Home/CourseList';
import Testimonials from '@/components/client/Home/Testimonials';
import { useSession } from 'next-auth/react';
import TeacherList from '@/components/client/Home/TeacherList';

export default function Home() {
  const session = useSession();

  return (
    <div>
      <HerosSection />
      <FeatureList />
      <Cours />
      <TeacherList />
      <CourseList />
      <Testimonials />
    </div>
  );
}
