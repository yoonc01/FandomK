import { useState } from 'react';
import Modal from '@/components/Modal';
import CreditSection from '@/pages/listPage/CreditSection';
import RechgModalContent from '@/pages/listPage/RechgModalContent';
import CreditShortageModalContent from '@/pages/listPage/CreditShortageModalContent';
import DonationsList from '@/pages/listPage/DonationsList';

export function ListPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentModal, setCurrentModal] = useState(null);

  const openModal = (modalType) => {
    setCurrentModal(modalType);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentModal(null);
  };

  const modalTypes = {
    recharge: {
      title: '크레딧 충전하기',
      content: <RechgModalContent />,
    },
    creditShortage: {
      title: '',
      content: <CreditShortageModalContent />,
    },
  };

  return (
    <div className="bg-midnightBlack flex flex-col items-center">
      <CreditSection onRechargeClick={() => openModal('recharge')} />
      <DonationsList />

      {isModalOpen && currentModal && (
        <Modal title={modalTypes[currentModal].title} onClose={closeModal}>
          {modalTypes[currentModal].content}
        </Modal>
      )}
    </div>
  );
}

export default ListPage;
