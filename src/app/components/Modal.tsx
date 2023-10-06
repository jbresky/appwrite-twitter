'use client'

import { Fragment, useState, useEffect, useRef, useCallback } from 'react';
// import { Dialog, Transition } from '@headlessui/react';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import dynamic from 'next/dynamic';

interface ModalProps {
  title: string,
  onClose: () => void,
  message: string,
  isOpen: boolean,
  disabled: boolean
}

const Modal: React.FC<ModalProps> = ({title, message, isOpen, onClose, disabled}) => {
  const [open, setOpen] = useState(isOpen);

  useEffect(() => {
    setOpen(isOpen)
  }, [isOpen])

  const cancelButtonRef = useRef(null);

  const handleClose = useCallback(() => {
    if(disabled) return;

    setOpen(false);
    setTimeout(() => {
     onClose();
    }, 300)
  }, [])

  return (
    <div>
      
      </div>
  );
}

export default Modal