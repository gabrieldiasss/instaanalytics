import Modal from 'react-modal'

interface CleanHisotryModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export default function CleanHistoryModal({ isOpen, onRequestClose }: CleanHisotryModalProps) {

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <h1>Deseja limpar todos seu histórico de pesquisa permanentemente?</h1>
            <button className='yes'>Sim</button>
            <button className='close' onClick={onRequestClose} >Não</button>
        </Modal>
    )
} 