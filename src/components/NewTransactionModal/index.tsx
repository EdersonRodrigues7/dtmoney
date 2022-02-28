import Modal from 'react-modal';
import { Container } from './styles';
import closeImg from '../../assets/close.svg';

interface NewTransactionModalProps {
    onRequestClose: () => void;
    isOpen: boolean;
}

export function NewTransactionModal({onRequestClose, isOpen}: NewTransactionModalProps){
    return(
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button 
                type="button" 
                onClick={onRequestClose} 
                className="react-modal-close">
                <img src={closeImg} alt="Fechar modal" />
            </button>
            <Container>
                <h2>Cadastrar transação</h2>
                <input type="text" placeholder="Título"/>
                <input type="number" placeholder="Valor"/>
                <button></button>
                <button></button>
                <input type="text" placeholder="Categoria"/>
                <button type="submit">Cadastrar</button>
            </Container>
        </Modal>
    )
}