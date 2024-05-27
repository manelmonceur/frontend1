'use client';
import { Button, Form, Modal } from 'antd';
import React, { useEffect, useState } from 'react';
import { MdAddCircleOutline } from 'react-icons/md';
import useSWR from 'swr';

import AddChildModal from './ChildModal';
import { useParentStore } from '../../../../store/useParentStore';
import { fetcher } from '../../../../utils/fetcher';
import { Child } from '../../../../types/api';

const SelectChildModal = () => {
  const [isAddChildOpen, setIsAddChildOpen] = useState(false);

  const {
    selectedChild,
    isSelectChildOpen,
    openSelectChildModal,
    hideSelectChildModal,
    setSelectChild,
  } = useParentStore();

  useEffect(() => {
    if (typeof window !== 'undefined')
      if (!selectedChild) openSelectChildModal();
  }, [openSelectChildModal, selectedChild]);

  const { data: children } = useSWR<Child[]>('/child', fetcher);

  return (
    <>
      <Modal
        title="Select a child"
        open={isSelectChildOpen && !isAddChildOpen}
        onCancel={hideSelectChildModal}
        okButtonProps={{ hidden: true }}
        cancelButtonProps={{ hidden: !selectedChild }}
        closable={!!selectedChild}
        maskClosable={!!selectedChild}
      >
        <div className="w-full flex gap-2">
          {children?.map((child) => (
            <Button
              key={child._id}
              className="max-w-28 min-w-28 h-40 flex justify-center items-center text-3xl border border-gray-300 text-gray-500"
              onClick={() => {
                setSelectChild(child);
                hideSelectChildModal();
              }}
            >
              {child.firstName + ' ' + child.lastName}
            </Button>
          ))}
          <Button
            className="max-w-28 min-w-28 h-40 flex justify-center items-center text-3xl border border-gray-300 text-gray-500"
            onClick={() => setIsAddChildOpen(true)}
          >
            <MdAddCircleOutline />
          </Button>
        </div>
      </Modal>

      <AddChildModal isOpen={isAddChildOpen} setIsOpen={setIsAddChildOpen} />
    </>
  );
};

export default SelectChildModal;
